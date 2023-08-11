<template><div><h1 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h1>
<blockquote>
<p>Ruoyi 的 v4.7.6 是 2022 年 12 月 16 日发布的一个版本，而任意文件下载漏洞实际上 12 月底的时候就已经爆出了，也陆续有一些文章在写这个漏洞，但是 Ruoyi 一直没有更新修复。</p>
<p>上月中旬（2023 年 4 月中），Ruoyi 更新了 v4.7.7 版本，通过加固了白名单限制，修复了该漏洞。
记得及时更新昂！</p>
</blockquote>
<h1 id="ruoyi-v4-7-7" tabindex="-1"><a class="header-anchor" href="#ruoyi-v4-7-7" aria-hidden="true">#</a> Ruoyi v4.7.7</h1>
<blockquote>
<p><a href="http://doc.ruoyi.vip/ruoyi/document/gxrz.html#v4-7-7" target="_blank" rel="noopener noreferrer">更新日志：v4.7.7<ExternalLinkIcon/></a></p>
</blockquote>
<p>更新之后，可以看到任意文件下载的 payload 已经被限制</p>
<figure><img src="https://img-blog.csdnimg.cn/f069e0b48b1c418c98a2fa06f340f7e1.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h1 id="ruoyi-v4-7-6-任意文件下载漏洞复现" tabindex="-1"><a class="header-anchor" href="#ruoyi-v4-7-6-任意文件下载漏洞复现" aria-hidden="true">#</a> Ruoyi v4.7.6 任意文件下载漏洞复现</h1>
<h2 id="代码下载-部署" tabindex="-1"><a class="header-anchor" href="#代码下载-部署" aria-hidden="true">#</a> 代码下载&amp;部署</h2>
<ul>
<li>贴上 v4.7.6 版本的链接：<a href="https://github.com/yangzongzhuan/RuoYi/tree/v4.7.6" target="_blank" rel="noopener noreferrer">Ruoyi v4.7.6<ExternalLinkIcon/></a></li>
</ul>
<h2 id="运行-ruoyi-新建-修改定时任务" tabindex="-1"><a class="header-anchor" href="#运行-ruoyi-新建-修改定时任务" aria-hidden="true">#</a> 运行 Ruoyi，新建/修改定时任务</h2>
<p><code v-pre>ruoYiConfig.setProfile(&quot;D:\\&quot;)</code>
<img src="https://img-blog.csdnimg.cn/9360962f02bb46cd9ba3bba00d044c67.png" alt="在这里插入图片描述" loading="lazy"></p>
<p>看一下我 D 盘下的文件，以这个 <code v-pre>123.txt</code>为例
<img src="https://img-blog.csdnimg.cn/f258554aa3f0497793ec5f7ff8dc188c.png" alt="在这里插入图片描述" loading="lazy"></p>
<h2 id="手动触发定时任务" tabindex="-1"><a class="header-anchor" href="#手动触发定时任务" aria-hidden="true">#</a> 手动触发定时任务</h2>
<figure><img src="https://img-blog.csdnimg.cn/0327170c54ad49148a841406d48699b5.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="访问-common-download-resource-接口获取文件" tabindex="-1"><a class="header-anchor" href="#访问-common-download-resource-接口获取文件" aria-hidden="true">#</a> 访问 <code v-pre>common/download/resource</code> 接口获取文件</h2>
<p><code v-pre>http://localhost:8081/common/download/resource?resource=/profile/123.txt</code>
关于为什么要访问这个 url，文件名前为什么要加 <code v-pre>/profile/</code> 后面也会有详解
<img src="https://img-blog.csdnimg.cn/2110056165da498d9e501d05a7eef5c8.png" alt="在这里插入图片描述" loading="lazy"></p>
<h1 id="ruoyi-的漏洞史" tabindex="-1"><a class="header-anchor" href="#ruoyi-的漏洞史" aria-hidden="true">#</a> Ruoyi 的漏洞史</h1>
<blockquote>
<p>这里主要针对本次这个任意文件下载漏洞来说。
实际上这个漏洞，并不是 v4.7.5 ... v4.7.6 的过程中出现的，它其实很早之前就出现了。</p>
<p>Ruoyi 的定时任务功能在最初上线不久就被爆出了远程代码执行漏洞
后期进行过多次修复</p>
<ul>
<li>v4.6.2 --- 定时任务屏蔽 rmi 远程调用</li>
<li>v4.7.0 --- 定时任务屏蔽 ldap 远程调用； 定时任务屏蔽 http(s) 远程调用</li>
<li>v4.7.1 --- 定时任务屏蔽违规字符</li>
<li>v4.7.3 --- 定时任务目标字符串验证包名白名单；定时任务屏蔽违规的字符</li>
<li>v4.7.4 --- 定时任务检查 Bean 包名是否为白名单配置</li>
<li>v4.7.6 --- 定时任务违规的字符</li>
</ul>
</blockquote>
<h1 id="从代码审计的角度来看漏洞是如何被发现的" tabindex="-1"><a class="header-anchor" href="#从代码审计的角度来看漏洞是如何被发现的" aria-hidden="true">#</a> 从代码审计的角度来看漏洞是如何被发现的</h1>
<blockquote>
<p>本次漏洞的爆发点其实还是在【定时任务】与【文件下载】功能，根本原因还是定时任务违规字符校验不完善，被绕过的问题。</p>
</blockquote>
<ol>
<li>
<p>先了解一下 Ruoyi 定时任务功能的作用和原理。</p>
<ul>
<li>Ruoyi 默认提供了三个定时任务的示例（红框中的三个）。分别调用目标字符串 <code v-pre>ryTask.ryNoParams</code>、 <code v-pre>ryTask.ryParams('ry')</code>、 <code v-pre>ryTask.ryMultipleParams('ry', true, 2000L, 316.50D, 100)</code>。
<img src="https://img-blog.csdnimg.cn/32d753f24edb4113ba07e0229d404f55.png" alt="在这里插入图片描述" loading="lazy"></li>
<li>这三个调用字符串，特征很明显，分别在调用一个对象的<strong>无参方法</strong>、<strong>有参方法</strong>、<strong>多参方法</strong></li>
</ul>
</li>
<li>
<p>在源码中找到 <code v-pre>ryTask</code> 这个对象进行确认（在 idea 中直接连按两次 <code v-pre>shift</code> 搜索 <code v-pre>ryTask</code> 即可找到）
<img src="https://img-blog.csdnimg.cn/7934c22c5a804c8c9bb816c25992f337.png" alt="在这里插入图片描述" loading="lazy"></p>
</li>
<li>
<p>尝试点击【执行一次】，发现控制台中成功输出内容，说明方法被正确调用
<img src="https://img-blog.csdnimg.cn/861ce4c114014cd8a083a034344107d1.png" alt="在这里插入图片描述" loading="lazy"></p>
</li>
<li>
<p>这里简单科普一下这个 <code v-pre>@Component(&quot;ryTask&quot;)</code> 是什么，为什么可以通过 <code v-pre>ryTask.xxx</code> 调用这个方法？</p>
<blockquote>
<p><code v-pre>@Component</code> 是 <code v-pre>Java Spring</code> 中的一个注解，其作用就是定义 <code v-pre>Spring</code> 管理类，简而言之就是，被 <code v-pre>@Component</code> 注解标记的类，将交给 <code v-pre>Spring</code> 框架来自动管理。
像 <code v-pre>Web</code> 开发过程中最常见的 <code v-pre>@Controller</code>、 <code v-pre>@Service</code>、<code v-pre>@Repository</code>、<code v-pre>@Configuration</code> 等等其实都是 <code v-pre>@Component</code> 的扩展。
<code v-pre>@Component(&quot;ryTask&quot;)</code> 括号中的 <code v-pre>ryTask</code> 是定义的 Bean 的 id，如果不写的话，默认是短类名（类名首字母小写）</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Controller</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@AliasFor</span><span class="token punctuation">(</span>
        annotation <span class="token operator">=</span> <span class="token class-name">Component</span><span class="token punctuation">.</span><span class="token keyword">class</span>
    <span class="token punctuation">)</span>
    <span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">""</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Configuration</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@AliasFor</span><span class="token punctuation">(</span>
        annotation <span class="token operator">=</span> <span class="token class-name">Component</span><span class="token punctuation">.</span><span class="token keyword">class</span>
    <span class="token punctuation">)</span>
    <span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">""</span><span class="token punctuation">;</span>

    <span class="token keyword">boolean</span> <span class="token function">proxyBeanMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>看到这儿，就会萌生出一个大胆的猜测，是否可以利用【定时任务】调用任意被 <code v-pre>@Controller</code>、<code v-pre>@Component</code>、<code v-pre>@Configuration</code> 等注解标记的接口呢？</p>
</li>
<li>
<p>创建一个测试类，用 <code v-pre>@Controller</code> 注解标记尝试一下（修改完代码要重启服务）</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JobTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token class-name">String</span> words<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"hello"</span> <span class="token operator">+</span> words<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// 在这里打个断点试试</span>
        <span class="token keyword">return</span> words<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>添加定时任意，尝试调用测试类
<img src="https://img-blog.csdnimg.cn/112f53de1c7b462ab26d05b17921ee79.png" alt="在这里插入图片描述" loading="lazy">
<img src="https://img-blog.csdnimg.cn/23a2342cfcf542b6ab193bdd2d5eaec3.png" alt="在这里插入图片描述" loading="lazy">
进入了断点，并成功输出了 <code v-pre>helloruoyi</code>，由此验证，上面的猜想是正确的
<img src="https://img-blog.csdnimg.cn/d5f789b5856040b59c632fffa06c8d93.png" alt="在这里插入图片描述" loading="lazy"></p>
</li>
<li>
<p>走读代码，整理出那些被 <code v-pre>@Component</code> 注解及其扩展注解标记的类，并且可能涉及到配置、越权、非公开方法之类的接口</p>
<blockquote>
<p>为什么主要关注 <strong>配置、越权、非公开方法</strong> 这三类呢？
因为正常的接口本身就是有权限的，即使可以从这里调用执行，从安全角度讲，也没有很大的意义。
而这三类就不一样了（<strong>主要是这三类，不代表只有这三类</strong>）</p>
<ol>
<li>配置文件是涉及到全局，如果被调用影响到，很可能会影响到其他用户，就会存在风险；</li>
<li>还有某些涉及到权限管控的接口，从这个定时任务这个入口调用，就有可能绕过原本的鉴权;</li>
<li>非公开的接口，简单举个例子，有些接口，可能不在 <code v-pre>@Controller</code> 中，那么就无法通过正常的 HTTP 请求从 Web 端去调用，但是却可以通过这里的定时任务间接调用执行，从而造成风险。</li>
</ol>
</blockquote>
<p>相关的配置接口，还是挺多的，就不全部粘贴了，感兴趣的可以自己去整理一下试试玩儿，或许还有漏洞呢。
这里就先贴出本次要讨论的这个漏洞相关的配置 —— 全局配置类 <code v-pre>RuoYiConfig.java</code>
全局配置类共有 6 个 set 方法，本次漏洞利用的就是 <code v-pre>setProfile</code> 方法</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 全局配置</span>
ruoYiConfig<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span>
ruoYiConfig<span class="token punctuation">.</span><span class="token function">setVersion</span><span class="token punctuation">(</span><span class="token class-name">String</span> version<span class="token punctuation">)</span>
ruoYiConfig<span class="token punctuation">.</span><span class="token function">setCopyrightYear</span><span class="token punctuation">(</span><span class="token class-name">String</span> copyrightYear<span class="token punctuation">)</span>
ruoYiConfig<span class="token punctuation">.</span><span class="token function">setDemoEnabled</span><span class="token punctuation">(</span><span class="token class-name">String</span> demoEnabled<span class="token punctuation">)</span>
ruoYiConfig<span class="token punctuation">.</span><span class="token function">setProfile</span><span class="token punctuation">(</span><span class="token class-name">String</span> profile<span class="token punctuation">)</span>
ruoYiConfig<span class="token punctuation">.</span><span class="token function">setAddressEnabled</span><span class="token punctuation">(</span><span class="token class-name">String</span> addressEnabled<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>ruoYiConfig.setProfile</code> 的作用</p>
<blockquote>
<p><code v-pre>setProfile</code> 方法和 <code v-pre>profile</code> 属性，以及配置文件中的 <code v-pre>ruoyi.profile</code> 的关系，就不多说了，这些属于 <code v-pre>Java</code> 基础</p>
</blockquote>
<p>从方法内的注释结合配置文件中的注释，不难看出，<code v-pre>profile</code> 实际上是系统中文件的保存路径。
<code v-pre>Windows</code> 下的默认值是 <code v-pre>D:/ruoyi/uploadPath</code>，<code v-pre>Linux</code> 下的默认值是 <code v-pre>/home/ruoyi/uploadPath</code>
<img src="https://img-blog.csdnimg.cn/6d6766f5913b4ef8b59b9fea4586007f.png" alt="在这里插入图片描述" loading="lazy">
<img src="https://img-blog.csdnimg.cn/a387b929de844230afb621bcf06d7c39.png" alt="在这里插入图片描述" loading="lazy"></p>
</li>
<li>
<p>文件保存的默认目录可以被修改，那，被修改之后呢？还需要找一个访问这个目录下内容的方法。</p>
<blockquote>
<p>走读代码，在 <code v-pre>CommonController.java</code> 中，找到一个 <code v-pre>resourceDownload</code> 的方法</p>
</blockquote>
<figure><img src="https://img-blog.csdnimg.cn/fbc3ec13c651465cb9ba715744f03b47.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<blockquote>
<p>该方法内，先是进行了非法路径的检查</p>
</blockquote>
<p><img src="https://img-blog.csdnimg.cn/e55c7da7f9434e49b1592c5de10d38bb.png" alt="在这里插入图片描述" loading="lazy">
<img src="https://img-blog.csdnimg.cn/cff86d9c7a4242e4888ed5d711c6d593.png" alt="在这里插入图片描述" loading="lazy">
同时里面还有一个白名单（<code v-pre>MimeTypeUtils.DEFAULT_ALLOWED_EXTENSION</code>）校验
<img src="https://img-blog.csdnimg.cn/42f342d67bf142efa7b35ee233d38b19.png" alt="在这里插入图片描述" loading="lazy"></p>
<p>然后<strong>执行 <code v-pre>RuoYiConfig.getProfile()</code> 从 <code v-pre>RuoYiConfig</code> 中获取了 <code v-pre>Profile</code> 的值</strong>，并与传入的资源名称进行组合形成完整路径后进行下载。完美~~~</p>
<figure><img src="https://img-blog.csdnimg.cn/32c75f93ea2e4dcbb9f6ba5231eb2eae.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
</li>
<li>
<p>至此，万事俱备，开始整活儿</p>
</li>
</ol>
<ul>
<li>
<p>按照前 9 步的分析，我目前测试机是 <code v-pre>Windows</code> 机器，所以编写 <code v-pre>payload</code> 为 <code v-pre>ruoYiConfig.setProfile(&quot;D:\\&quot;)</code>，尝试将文件默认路径设置为 <code v-pre>D</code> 盘根目录
<img src="https://img-blog.csdnimg.cn/015be50991394b4c8078dd2f1c4546a1.png" alt="在这里插入图片描述" loading="lazy"></p>
</li>
<li>
<p>点击执行，手动触发定时任务
<img src="https://img-blog.csdnimg.cn/f5697e2d1b454020b38b74df44c7b7b3.png" alt="在这里插入图片描述" loading="lazy"></p>
</li>
<li>
<p>构造下载链接，访问 D 盘中的资源</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">String</span> localPath <span class="token operator">=</span> <span class="token class-name">RuoYiConfig</span><span class="token punctuation">.</span><span class="token function">getProfile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// 刚才被篡改的地址。  现在应该是   D://</span>
<span class="token class-name">String</span> downloadPath <span class="token operator">=</span> localPath <span class="token operator">+</span> <span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">substringAfter</span><span class="token punctuation">(</span>resource<span class="token punctuation">,</span> <span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">RESOURCE_PREFIX</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>Constans.RESOURCE_PREFIX</code> 的值如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * 资源映射路径 前缀
 */</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">RESOURCE_PREFIX</span> <span class="token operator">=</span> <span class="token string">"/profile"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>StringUtils.substringAfter</code> 方法的源码如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">substringAfter</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">,</span> <span class="token class-name">String</span> separator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> str<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>separator <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">""</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        	<span class="token comment">// 从传入的路径中获取到分隔符 /profile 的位置</span>
            <span class="token keyword">int</span> pos <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>separator<span class="token punctuation">)</span><span class="token punctuation">;</span>	
            <span class="token comment">// 截取 /profile 所在位置的后面的内容。例如  /profile/1.txt  被截取之后就是 /1.txt</span>
            <span class="token keyword">return</span> pos <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">?</span> <span class="token string">""</span> <span class="token operator">:</span> str<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>pos <span class="token operator">+</span> separator<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以，如果想下载 <code v-pre>D://123.txt</code>，那么最终构造的 <code v-pre>url</code> 就应该是</p>
<p><code v-pre>http://localhost:8081/common/download/resource?resource=/profile/123.txt</code></p>
</li>
<li>
<p>下载成功
<img src="https://img-blog.csdnimg.cn/fc6e16e2e30640c0938fc15ab499be73.png" alt="在这里插入图片描述" loading="lazy"></p>
</li>
</ul>
<h1 id="漏洞修复" tabindex="-1"><a class="header-anchor" href="#漏洞修复" aria-hidden="true">#</a> 漏洞修复</h1>
<blockquote>
<p>截止发文日（2023.05.25），Ruoyi 官方已经于 2023.4.14 日针对 v4.7.6 版本的任意文件下载漏洞进行了修复。</p>
</blockquote>
<p><img src="https://img-blog.csdnimg.cn/cd4818ccad4c4dca95392bbf7d2933c7.png" alt="在这里插入图片描述" loading="lazy">
通过Compare v4.7.7 和 v4.7.6 的代码变动情况，可以看出，官方的修复方案如下：
<img src="https://img-blog.csdnimg.cn/877ee5e20d094a3db25c8e6699317111.png" alt="在这里插入图片描述" loading="lazy">
尝试在 v4.7.7 版本中复现，结果被成功拦截</p>
<figure><img src="https://img-blog.csdnimg.cn/49208e1b0a994b0594f31c2efc603b84.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
</div></template>


