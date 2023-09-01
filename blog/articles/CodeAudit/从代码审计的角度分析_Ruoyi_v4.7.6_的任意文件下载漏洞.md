---
icon: edit
date: 2023-05-07
category:
  - 代码审计
tag:
  - 代码审计
  - Ruoyi
star: true
sticky: 9999
# excerpt: 摘要
---


# Ruoyi v4.7.6 任意文件下载
## 前言
> Ruoyi 的 v4.7.6 是 2022 年 12 月 16 日发布的一个版本，而任意文件下载漏洞实际上 12 月底的时候就已经爆出了，也陆续有一些文章在写这个漏洞，但是 Ruoyi 一直没有更新修复。


> 
> 上月中旬（2023 年 4 月中），Ruoyi 更新了 v4.7.7 版本，通过加固了白名单限制，修复了该漏洞。
> 记得及时更新昂！

<!-- more -->
## Ruoyi v4.7.7  
> [更新日志：v4.7.7](http://doc.ruoyi.vip/ruoyi/document/gxrz.html#v4-7-7)

更新之后，可以看到任意文件下载的 payload 已经被限制

![](./images/%E4%BB%8E%E4%BB%A3%E7%A0%81%E5%AE%A1%E8%AE%A1%E7%9A%84%E8%A7%92%E5%BA%A6%E5%88%86%E6%9E%90_Ruoyi_v4.7.6_%E7%9A%84%E4%BB%BB%E6%84%8F%E6%96%87%E4%BB%B6%E4%B8%8B%E8%BD%BD%E6%BC%8F%E6%B4%9E/f069e0b48b1c418c98a2fa06f340f7e1.png)
## Ruoyi v4.7.6 任意文件下载漏洞复现
### 代码下载&部署
- 贴上 v4.7.6 版本的链接：[Ruoyi v4.7.6](https://github.com/yangzongzhuan/RuoYi/tree/v4.7.6)

### 运行 Ruoyi，新建/修改定时任务

`ruoYiConfig.setProfile("D:\\")`
![](./images/%E4%BB%8E%E4%BB%A3%E7%A0%81%E5%AE%A1%E8%AE%A1%E7%9A%84%E8%A7%92%E5%BA%A6%E5%88%86%E6%9E%90_Ruoyi_v4.7.6_%E7%9A%84%E4%BB%BB%E6%84%8F%E6%96%87%E4%BB%B6%E4%B8%8B%E8%BD%BD%E6%BC%8F%E6%B4%9E/9360962f02bb46cd9ba3bba00d044c67.png)

看一下我 D 盘下的文件，以这个 `123.txt`为例
![](./images/%E4%BB%8E%E4%BB%A3%E7%A0%81%E5%AE%A1%E8%AE%A1%E7%9A%84%E8%A7%92%E5%BA%A6%E5%88%86%E6%9E%90_Ruoyi_v4.7.6_%E7%9A%84%E4%BB%BB%E6%84%8F%E6%96%87%E4%BB%B6%E4%B8%8B%E8%BD%BD%E6%BC%8F%E6%B4%9E/f258554aa3f0497793ec5f7ff8dc188c.png)

### 手动触发定时任务
![](./images/%E4%BB%8E%E4%BB%A3%E7%A0%81%E5%AE%A1%E8%AE%A1%E7%9A%84%E8%A7%92%E5%BA%A6%E5%88%86%E6%9E%90_Ruoyi_v4.7.6_%E7%9A%84%E4%BB%BB%E6%84%8F%E6%96%87%E4%BB%B6%E4%B8%8B%E8%BD%BD%E6%BC%8F%E6%B4%9E/0327170c54ad49148a841406d48699b5.png)

### 访问 `common/download/resource` 接口获取文件
`http://localhost:8081/common/download/resource?resource=/profile/123.txt`
关于为什么要访问这个 url，文件名前为什么要加 `/profile/` 后面也会有详解
![](./images/%E4%BB%8E%E4%BB%A3%E7%A0%81%E5%AE%A1%E8%AE%A1%E7%9A%84%E8%A7%92%E5%BA%A6%E5%88%86%E6%9E%90_Ruoyi_v4.7.6_%E7%9A%84%E4%BB%BB%E6%84%8F%E6%96%87%E4%BB%B6%E4%B8%8B%E8%BD%BD%E6%BC%8F%E6%B4%9E/2110056165da498d9e501d05a7eef5c8.png)


## Ruoyi 的漏洞史
> 这里主要针对本次这个任意文件下载漏洞来说。
> 实际上这个漏洞，并不是 v4.7.5 ... v4.7.6 的过程中出现的，它其实很早之前就出现了。
> 
> Ruoyi 的定时任务功能在最初上线不久就被爆出了远程代码执行漏洞
> 后期进行过多次修复
> - v4.6.2 --- 定时任务屏蔽 rmi 远程调用
>  - v4.7.0 --- 定时任务屏蔽 ldap 远程调用； 定时任务屏蔽 http(s) 远程调用
> - v4.7.1 --- 定时任务屏蔽违规字符
> - v4.7.3 --- 定时任务目标字符串验证包名白名单；定时任务屏蔽违规的字符
> - v4.7.4 --- 定时任务检查 Bean 包名是否为白名单配置
> - v4.7.6 --- 定时任务违规的字符

## 从代码审计的角度来看漏洞是如何被发现的
> 本次漏洞的爆发点其实还是在【定时任务】与【文件下载】功能，根本原因还是定时任务违规字符校验不完善，被绕过的问题。

1. 先了解一下 Ruoyi 定时任务功能的作用和原理。

	- Ruoyi 默认提供了三个定时任务的示例（红框中的三个）。分别调用目标字符串 `ryTask.ryNoParams`、 `ryTask.ryParams('ry')`、 `ryTask.ryMultipleParams('ry', true, 2000L, 316.50D, 100)`。
	![](./images/%E4%BB%8E%E4%BB%A3%E7%A0%81%E5%AE%A1%E8%AE%A1%E7%9A%84%E8%A7%92%E5%BA%A6%E5%88%86%E6%9E%90_Ruoyi_v4.7.6_%E7%9A%84%E4%BB%BB%E6%84%8F%E6%96%87%E4%BB%B6%E4%B8%8B%E8%BD%BD%E6%BC%8F%E6%B4%9E/32d753f24edb4113ba07e0229d404f55.png)
	- 这三个调用字符串，特征很明显，分别在调用一个对象的**无参方法**、**有参方法**、**多参方法**
2. 在源码中找到 `ryTask` 这个对象进行确认（在 idea 中直接连按两次 `shift` 搜索 `ryTask` 即可找到）
	![](./images/%E4%BB%8E%E4%BB%A3%E7%A0%81%E5%AE%A1%E8%AE%A1%E7%9A%84%E8%A7%92%E5%BA%A6%E5%88%86%E6%9E%90_Ruoyi_v4.7.6_%E7%9A%84%E4%BB%BB%E6%84%8F%E6%96%87%E4%BB%B6%E4%B8%8B%E8%BD%BD%E6%BC%8F%E6%B4%9E/7934c22c5a804c8c9bb816c25992f337.png)
3. 尝试点击【执行一次】，发现控制台中成功输出内容，说明方法被正确调用
	![](./images/%E4%BB%8E%E4%BB%A3%E7%A0%81%E5%AE%A1%E8%AE%A1%E7%9A%84%E8%A7%92%E5%BA%A6%E5%88%86%E6%9E%90_Ruoyi_v4.7.6_%E7%9A%84%E4%BB%BB%E6%84%8F%E6%96%87%E4%BB%B6%E4%B8%8B%E8%BD%BD%E6%BC%8F%E6%B4%9E/861ce4c114014cd8a083a034344107d1.png)
4. 这里简单科普一下这个 `@Component("ryTask")` 是什么，为什么可以通过 `ryTask.xxx` 调用这个方法？
	>`@Component` 是 `Java Spring` 中的一个注解，其作用就是定义 `Spring` 管理类，简而言之就是，被 `@Component` 注解标记的类，将交给 `Spring` 框架来自动管理。
	像 `Web` 开发过程中最常见的 `@Controller`、 `@Service`、`@Repository`、`@Configuration` 等等其实都是 `@Component` 的扩展。
	`@Component("ryTask")` 括号中的 `ryTask` 是定义的 Bean 的 id，如果不写的话，默认是短类名（类名首字母小写）
	```java
	@Target({ElementType.TYPE})
	@Retention(RetentionPolicy.RUNTIME)
	@Documented
	@Component
	public @interface Controller {
	    @AliasFor(
	        annotation = Component.class
	    )
	    String value() default "";
	}
	```

	```java
	@Target({ElementType.TYPE})
	@Retention(RetentionPolicy.RUNTIME)
	@Documented
	@Component
	public @interface Configuration {
	    @AliasFor(
	        annotation = Component.class
	    )
	    String value() default "";
	
	    boolean proxyBeanMethods() default true;
	}
	```
5. 看到这儿，就会萌生出一个大胆的猜测，是否可以利用【定时任务】调用任意被 `@Controller`、`@Component`、`@Configuration` 等注解标记的接口呢？
6. 创建一个测试类，用 `@Controller` 注解标记尝试一下（修改完代码要重启服务）
	```java
	@Controller
	public class JobTest {
	    public String hello(String words) {
	        System.out.println("hello" + words);	// 在这里打个断点试试
	        return words;
	    }
	}
	```
7. 添加定时任意，尝试调用测试类
	![](./images/%E4%BB%8E%E4%BB%A3%E7%A0%81%E5%AE%A1%E8%AE%A1%E7%9A%84%E8%A7%92%E5%BA%A6%E5%88%86%E6%9E%90_Ruoyi_v4.7.6_%E7%9A%84%E4%BB%BB%E6%84%8F%E6%96%87%E4%BB%B6%E4%B8%8B%E8%BD%BD%E6%BC%8F%E6%B4%9E/112f53de1c7b462ab26d05b17921ee79.png)
	![](./images/%E4%BB%8E%E4%BB%A3%E7%A0%81%E5%AE%A1%E8%AE%A1%E7%9A%84%E8%A7%92%E5%BA%A6%E5%88%86%E6%9E%90_Ruoyi_v4.7.6_%E7%9A%84%E4%BB%BB%E6%84%8F%E6%96%87%E4%BB%B6%E4%B8%8B%E8%BD%BD%E6%BC%8F%E6%B4%9E/23a2342cfcf542b6ab193bdd2d5eaec3.png)
	进入了断点，并成功输出了 `helloruoyi`，由此验证，上面的猜想是正确的
	![](./images/%E4%BB%8E%E4%BB%A3%E7%A0%81%E5%AE%A1%E8%AE%A1%E7%9A%84%E8%A7%92%E5%BA%A6%E5%88%86%E6%9E%90_Ruoyi_v4.7.6_%E7%9A%84%E4%BB%BB%E6%84%8F%E6%96%87%E4%BB%B6%E4%B8%8B%E8%BD%BD%E6%BC%8F%E6%B4%9E/d5f789b5856040b59c632fffa06c8d93.png)
8. 走读代码，整理出那些被 `@Component` 注解及其扩展注解标记的类，并且可能涉及到配置、越权、非公开方法之类的接口
	>
	> 为什么主要关注 **配置、越权、非公开方法** 这三类呢？
	> 因为正常的接口本身就是有权限的，即使可以从这里调用执行，从安全角度讲，也没有很大的意义。
	> 而这三类就不一样了（**主要是这三类，不代表只有这三类**）
	> 1. 配置文件是涉及到全局，如果被调用影响到，很可能会影响到其他用户，就会存在风险；
	> 2. 还有某些涉及到权限管控的接口，从这个定时任务这个入口调用，就有可能绕过原本的鉴权;
	> 3. 非公开的接口，简单举个例子，有些接口，可能不在 `@Controller` 中，那么就无法通过正常的 HTTP 请求从 Web 端去调用，但是却可以通过这里的定时任务间接调用执行，从而造成风险。

	相关的配置接口，还是挺多的，就不全部粘贴了，感兴趣的可以自己去整理一下试试玩儿，或许还有漏洞呢。
	这里就先贴出本次要讨论的这个漏洞相关的配置 —— 全局配置类 `RuoYiConfig.java`
	全局配置类共有 6 个 set 方法，本次漏洞利用的就是 `setProfile` 方法
	```java
	// 全局配置
	ruoYiConfig.setName(String name)
	ruoYiConfig.setVersion(String version)
	ruoYiConfig.setCopyrightYear(String copyrightYear)
	ruoYiConfig.setDemoEnabled(String demoEnabled)
	ruoYiConfig.setProfile(String profile)
	ruoYiConfig.setAddressEnabled(String addressEnabled)
	```
9. `ruoYiConfig.setProfile` 的作用
	> `setProfile` 方法和 `profile` 属性，以及配置文件中的 `ruoyi.profile` 的关系，就不多说了，这些属于 `Java` 基础

	从方法内的注释结合配置文件中的注释，不难看出，`profile` 实际上是系统中文件的保存路径。
	`Windows` 下的默认值是 `D:/ruoyi/uploadPath`，`Linux` 下的默认值是 `/home/ruoyi/uploadPath`
	![](./images/%E4%BB%8E%E4%BB%A3%E7%A0%81%E5%AE%A1%E8%AE%A1%E7%9A%84%E8%A7%92%E5%BA%A6%E5%88%86%E6%9E%90_Ruoyi_v4.7.6_%E7%9A%84%E4%BB%BB%E6%84%8F%E6%96%87%E4%BB%B6%E4%B8%8B%E8%BD%BD%E6%BC%8F%E6%B4%9E/6d6766f5913b4ef8b59b9fea4586007f.png)
	![](./images/%E4%BB%8E%E4%BB%A3%E7%A0%81%E5%AE%A1%E8%AE%A1%E7%9A%84%E8%A7%92%E5%BA%A6%E5%88%86%E6%9E%90_Ruoyi_v4.7.6_%E7%9A%84%E4%BB%BB%E6%84%8F%E6%96%87%E4%BB%B6%E4%B8%8B%E8%BD%BD%E6%BC%8F%E6%B4%9E/a387b929de844230afb621bcf06d7c39.png)
10. 文件保存的默认目录可以被修改，那，被修改之后呢？还需要找一个访问这个目录下内容的方法。

	> 走读代码，在 `CommonController.java` 中，找到一个 `resourceDownload` 的方法
	
	![](./images/%E4%BB%8E%E4%BB%A3%E7%A0%81%E5%AE%A1%E8%AE%A1%E7%9A%84%E8%A7%92%E5%BA%A6%E5%88%86%E6%9E%90_Ruoyi_v4.7.6_%E7%9A%84%E4%BB%BB%E6%84%8F%E6%96%87%E4%BB%B6%E4%B8%8B%E8%BD%BD%E6%BC%8F%E6%B4%9E/fbc3ec13c651465cb9ba715744f03b47.png)

	> 该方法内，先是进行了非法路径的检查

	![](./images/%E4%BB%8E%E4%BB%A3%E7%A0%81%E5%AE%A1%E8%AE%A1%E7%9A%84%E8%A7%92%E5%BA%A6%E5%88%86%E6%9E%90_Ruoyi_v4.7.6_%E7%9A%84%E4%BB%BB%E6%84%8F%E6%96%87%E4%BB%B6%E4%B8%8B%E8%BD%BD%E6%BC%8F%E6%B4%9E/e55c7da7f9434e49b1592c5de10d38bb.png)
	![](./images/%E4%BB%8E%E4%BB%A3%E7%A0%81%E5%AE%A1%E8%AE%A1%E7%9A%84%E8%A7%92%E5%BA%A6%E5%88%86%E6%9E%90_Ruoyi_v4.7.6_%E7%9A%84%E4%BB%BB%E6%84%8F%E6%96%87%E4%BB%B6%E4%B8%8B%E8%BD%BD%E6%BC%8F%E6%B4%9E/cff86d9c7a4242e4888ed5d711c6d593.png)
	同时里面还有一个白名单（`MimeTypeUtils.DEFAULT_ALLOWED_EXTENSION`）校验
	![](./images/%E4%BB%8E%E4%BB%A3%E7%A0%81%E5%AE%A1%E8%AE%A1%E7%9A%84%E8%A7%92%E5%BA%A6%E5%88%86%E6%9E%90_Ruoyi_v4.7.6_%E7%9A%84%E4%BB%BB%E6%84%8F%E6%96%87%E4%BB%B6%E4%B8%8B%E8%BD%BD%E6%BC%8F%E6%B4%9E/42f342d67bf142efa7b35ee233d38b19.png)

​	然后**执行 `RuoYiConfig.getProfile()` 从 `RuoYiConfig` 中获取了 `Profile` 的值**，并与传入的资源名称进行组合形成完整路径后进行下载。完美~~~	
​	![](./images/%E4%BB%8E%E4%BB%A3%E7%A0%81%E5%AE%A1%E8%AE%A1%E7%9A%84%E8%A7%92%E5%BA%A6%E5%88%86%E6%9E%90_Ruoyi_v4.7.6_%E7%9A%84%E4%BB%BB%E6%84%8F%E6%96%87%E4%BB%B6%E4%B8%8B%E8%BD%BD%E6%BC%8F%E6%B4%9E/32c75f93ea2e4dcbb9f6ba5231eb2eae.png)

11. 至此，万事俱备，开始整活儿

- 按照前 9 步的分析，我目前测试机是 `Windows` 机器，所以编写 `payload` 为 `ruoYiConfig.setProfile("D:\\")`，尝试将文件默认路径设置为 `D` 盘根目录
	![](./images/%E4%BB%8E%E4%BB%A3%E7%A0%81%E5%AE%A1%E8%AE%A1%E7%9A%84%E8%A7%92%E5%BA%A6%E5%88%86%E6%9E%90_Ruoyi_v4.7.6_%E7%9A%84%E4%BB%BB%E6%84%8F%E6%96%87%E4%BB%B6%E4%B8%8B%E8%BD%BD%E6%BC%8F%E6%B4%9E/015be50991394b4c8078dd2f1c4546a1.png)
- 点击执行，手动触发定时任务
	![](./images/%E4%BB%8E%E4%BB%A3%E7%A0%81%E5%AE%A1%E8%AE%A1%E7%9A%84%E8%A7%92%E5%BA%A6%E5%88%86%E6%9E%90_Ruoyi_v4.7.6_%E7%9A%84%E4%BB%BB%E6%84%8F%E6%96%87%E4%BB%B6%E4%B8%8B%E8%BD%BD%E6%BC%8F%E6%B4%9E/f5697e2d1b454020b38b74df44c7b7b3.png)
- 构造下载链接，访问 D 盘中的资源

	 ```java
	String localPath = RuoYiConfig.getProfile();	// 刚才被篡改的地址。  现在应该是   D://
     String downloadPath = localPath + StringUtils.substringAfter(resource, Constants.RESOURCE_PREFIX);
	```
	
	`Constans.RESOURCE_PREFIX` 的值如下：
	```java
	/**
     * 资源映射路径 前缀
     */
    public static final String RESOURCE_PREFIX = "/profile";
	```

	`StringUtils.substringAfter` 方法的源码如下：
	```java
	public static String substringAfter(String str, String separator) {
	        if (isEmpty(str)) {
	            return str;
	        } else if (separator == null) {
	            return "";
	        } else {
	        	// 从传入的路径中获取到分隔符 /profile 的位置
	            int pos = str.indexOf(separator);	
	            // 截取 /profile 所在位置的后面的内容。例如  /profile/1.txt  被截取之后就是 /1.txt
	            return pos == -1 ? "" : str.substring(pos + separator.length());	
	        }
	    }
	```
	所以，如果想下载 `D://123.txt`，那么最终构造的 `url` 就应该是 

	`http://localhost:8081/common/download/resource?resource=/profile/123.txt`

- 下载成功
	![](./images/%E4%BB%8E%E4%BB%A3%E7%A0%81%E5%AE%A1%E8%AE%A1%E7%9A%84%E8%A7%92%E5%BA%A6%E5%88%86%E6%9E%90_Ruoyi_v4.7.6_%E7%9A%84%E4%BB%BB%E6%84%8F%E6%96%87%E4%BB%B6%E4%B8%8B%E8%BD%BD%E6%BC%8F%E6%B4%9E/fc6e16e2e30640c0938fc15ab499be73.png)
## 漏洞修复
> 截止发文日（2023.05.25），Ruoyi 官方已经于 2023.4.14 日针对 v4.7.6 版本的任意文件下载漏洞进行了修复。

![](./images/%E4%BB%8E%E4%BB%A3%E7%A0%81%E5%AE%A1%E8%AE%A1%E7%9A%84%E8%A7%92%E5%BA%A6%E5%88%86%E6%9E%90_Ruoyi_v4.7.6_%E7%9A%84%E4%BB%BB%E6%84%8F%E6%96%87%E4%BB%B6%E4%B8%8B%E8%BD%BD%E6%BC%8F%E6%B4%9E/cd4818ccad4c4dca95392bbf7d2933c7.png)
通过Compare v4.7.7 和 v4.7.6 的代码变动情况，可以看出，官方的修复方案如下：
![](./images/%E4%BB%8E%E4%BB%A3%E7%A0%81%E5%AE%A1%E8%AE%A1%E7%9A%84%E8%A7%92%E5%BA%A6%E5%88%86%E6%9E%90_Ruoyi_v4.7.6_%E7%9A%84%E4%BB%BB%E6%84%8F%E6%96%87%E4%BB%B6%E4%B8%8B%E8%BD%BD%E6%BC%8F%E6%B4%9E/877ee5e20d094a3db25c8e6699317111.png)
尝试在 v4.7.7 版本中复现，结果被成功拦截

![](./images/%E4%BB%8E%E4%BB%A3%E7%A0%81%E5%AE%A1%E8%AE%A1%E7%9A%84%E8%A7%92%E5%BA%A6%E5%88%86%E6%9E%90_Ruoyi_v4.7.6_%E7%9A%84%E4%BB%BB%E6%84%8F%E6%96%87%E4%BB%B6%E4%B8%8B%E8%BD%BD%E6%BC%8F%E6%B4%9E/49208e1b0a994b0594f31c2efc603b84.png)

