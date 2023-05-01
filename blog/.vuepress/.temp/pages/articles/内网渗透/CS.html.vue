<template><div><h1 id="cobalt-strike" tabindex="-1"><a class="header-anchor" href="#cobalt-strike" aria-hidden="true">#</a> Cobalt Strike</h1>
<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2>
<blockquote>
<p>Cobalt Strike 简称 CS，用于团队作战，由一个服务端和多个客户端组成，能让多个攻击者在同一个团队服务器上共享目标资源和信息。</p>
</blockquote>
<blockquote>
<p>CS 有很多的 payload 生成模块，可以生成 exe、dll、vbs、图片马、bad、vba宏、shellcode 等等</p>
</blockquote>
<blockquote>
<p>CS 支持钓鱼攻击，可自动化生成挂马连接</p>
</blockquote>
<blockquote>
<p>CS 还有很多后渗透模块，浏览器代理模块，端口转发、扫描、socks 代理、令牌窃取等</p>
</blockquote>
<blockquote>
<p>CS 分为服务端和客户端。服务器可以部署在远程服务器下或者 kali 中，客户端可以部署到本地。</p>
</blockquote>
<h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h2>
<ul>
<li>CS4.4</li>
<li>JDK 1.11
<ul>
<li>Kali 不需要额外安装</li>
<li>其他 linux 系统安装 jdk
<ul>
<li><code v-pre>sudo apt-get update</code></li>
<li><code v-pre>sudo apt-get install openjdk-11-jdk</code></li>
<li><code v-pre>sudo update-java-alternatives -s java-1.11.0-openjdk-amd64</code>  设置 openjdk 11 为默认程序</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="cs-安装" tabindex="-1"><a class="header-anchor" href="#cs-安装" aria-hidden="true">#</a> CS 安装</h2>
<ul>
<li><code v-pre>teamserver</code> 服务端启动文件</li>
<li><code v-pre>cobaltstrike</code> 客户端启动文件</li>
<li><code v-pre>chmod 777 teamserver</code> 服务端权限赋值</li>
<li><code v-pre>./teamserver kali_ip password</code> 启动服务端（ip指向服务端ip，后面设置登录口令）</li>
<li><code v-pre>chmod 777 cobaltstrike</code> 客户端权限赋值</li>
<li><code v-pre>./cobaltstrike</code> 启动客户端，弹出登录窗口，填入主机ip或域名，填入端口（服务端启动成功会生成），指定用户名，填入服务端设置的口令</li>
</ul>
<h2 id="cs-监听器" tabindex="-1"><a class="header-anchor" href="#cs-监听器" aria-hidden="true">#</a> CS 监听器</h2>
<h3 id="创建监听器" tabindex="-1"><a class="header-anchor" href="#创建监听器" aria-hidden="true">#</a> 创建监听器</h3>
<ol>
<li>启动 CS 服务端</li>
<li>启动 CS 客户端。Cobalt Strike - Listeners（或者直接点击&quot;耳机&quot;图标）- Add（界面下方）
<ul>
<li>Name：为监听器命名</li>
<li>Payload：详见 Beacon 分类，以 Beacon HTTP 为例</li>
<li>HTTP Hosts：点击 &quot;+&quot; 添加，默认会自动带出 CS 服务端地址</li>
<li>HTTP Port（C2）：上线端口</li>
<li>HTTP Port（Bind）：监听端口</li>
</ul>
</li>
</ol>
<h3 id="连接方式" tabindex="-1"><a class="header-anchor" href="#连接方式" aria-hidden="true">#</a> 连接方式</h3>
<ul>
<li>beacon 是 cs 内置的监听器，在目标机器上成功执行 payload 后，会返回一个 shell 到 cs 上</li>
<li>foreign 是提供给 cs 外的工具使用的监听器，例如派生出来的 msf 的 shell 来进行后渗透</li>
<li>external c2 是 cs 引入的一种规范（或者框架），可以利用这个功能拓展 c2 通信渠道，而不局限于默认提供的 http、https、dns、smb tcp 通道。</li>
</ul>
<h3 id="beacon-分类" tabindex="-1"><a class="header-anchor" href="#beacon-分类" aria-hidden="true">#</a> Beacon 分类</h3>
<blockquote>
<p>Beacon 是 CS 运行在目标主机上的 payload， Beacons 是在隐蔽信道上给我们提供服务，用于长期控制受感染主机的。</p>
<p>它的工作方式与 Metasploit 类似，在实际沉头过程中，我们可以将其嵌入到可执行文件中，添加到 word 文档或者通过利用主机漏洞等来传递 Beacon</p>
</blockquote>
<ol>
<li>
<p>DNS Beacon</p>
<p>​	DNS Beacon，就是使用 DNS 请求将 Beacon 返回，DNS 请求用于解析 CS 团队服务器，DNS 响应也告诉 Beacon 如何从 CS 团队服务器上下载任务。</p>
<p>​	在 CS 4.0 及以后的版本中，DNS Beacon 是一个仅 DNS 的 payload，在这个 payload 中没有 HTTP 通信模式</p>
<ul>
<li>
<p>优点：</p>
<p>具有更高的隐蔽性</p>
</li>
<li>
<p>缺点：</p>
<p>速度相对于 HTTP Beacon 等会更慢</p>
</li>
</ul>
</li>
<li>
<p>HTTP(S) Beacon</p>
<p>HTTP Beacon 利用 http 请求来进行通信，向受害主机传达命令，达到控制对方主机的目的。</p>
<ul>
<li>
<p>缺点：</p>
<p>明文传输</p>
</li>
</ul>
<p>HTTPS Beacon 在 HTTP Beacon 的基础上，增加了加密传输</p>
</li>
<li>
<p>SMB Beacon</p>
<p>SMB Beacon 使用命名管道与一个父 Beacon 进行通信，再由这个父 Beacon 与服务端通信，相当于一个桥梁，因为 Windows 可以将命名管道通信封装在 SMB 协议中与远程主机进行通信，所以得名 SMB Beacon。 其实就是将 payload 运行后，创建了自定义命名管道作为服务端等待连接。</p>
</li>
<li>
<p>TCP Beacon</p>
<p>TCP Beacon 使用 TCP Socket 进行通信，在 CS 4.0 之后，这个技术就不适合作为第一个木马使用了，因为它的流量都是明文的，容易被发现，但是这个技术很适合在内网穿透的时候使用，在内网穿透的时候一般只能使用 TCP Beacon 生成木马</p>
</li>
</ol>
<h2 id="cs-木马生成" tabindex="-1"><a class="header-anchor" href="#cs-木马生成" aria-hidden="true">#</a> CS 木马生成</h2>
<ol>
<li>启动 CS 服务端</li>
<li>启动 CS 客户端。Attacks - Packages - 以 Windows Executable 为例
<ul>
<li>选择 Listener</li>
<li>Output 以 Windows exe 为例</li>
<li>Generate</li>
</ul>
</li>
</ol>
<h2 id="cs-目标主机信息收集" tabindex="-1"><a class="header-anchor" href="#cs-目标主机信息收集" aria-hidden="true">#</a> CS 目标主机信息收集</h2>
<ol>
<li>启动 CS 服务端</li>
<li>启动 CS 客户端。Attacks - Web Drive-By - System Profiler - 配置 url 信息 - Launch</li>
<li>诱导目标机访问 url</li>
<li>CS 客户端。 View - Web Log 查看访问记录，其中记录了目标主机信息</li>
</ol>
<h2 id="cs-克隆网页并挂马" tabindex="-1"><a class="header-anchor" href="#cs-克隆网页并挂马" aria-hidden="true">#</a> CS 克隆网页并挂马</h2>
<ol>
<li>
<p>启动 CS 服务端</p>
</li>
<li>
<p>启动 CS 客户端</p>
<ul>
<li>如果不需要挂马，直接跳至第 6 步</li>
</ul>
</li>
<li>
<p>创建监听器（已创建可以跳过）</p>
</li>
<li>
<p>生成木马（已生成可以跳过）</p>
</li>
<li>
<p>文件托管（已托管的可以跳过）。</p>
<ul>
<li>Attacks - Web Drive-By - Host File
<ul>
<li>选择文件（木马文件）</li>
<li>Local URL： 访问的 URL，根据实际情况进行伪装</li>
<li>Local Host： CS 服务端地址，默认已填写无需更改</li>
<li>Local Port： 端口</li>
<li>Mime Type： 根据实际情况选择。以 automatic 为例</li>
</ul>
</li>
<li>Launch 生成托管地址（复制这个地址）</li>
</ul>
</li>
<li>
<p>克隆网站。</p>
<ul>
<li>
<p>Attacks - Web Drive-By - Clone site</p>
<ul>
<li>
<p>Clone URL： 要克隆的网站</p>
</li>
<li>
<p>Local URL：本地 URL（与 Local Host 组合成最终的 URL，与已有站点 URL 不能冲突）</p>
</li>
<li>
<p>Local Host：本地地址（CS 服务端地址）</p>
</li>
<li>
<p>Local Port： 本地端口（与已有站点的端口不能冲突）</p>
</li>
<li>
<p>Attack：攻击载荷，可选择托管的木马文件，也可以直接粘贴木马所在路经</p>
</li>
<li>
<p>Log keystroke on cloned site ： 勾选后会对键盘进行记录</p>
</li>
</ul>
</li>
<li>
<p>Clone 执行网站克隆任务，得到最终的 URL</p>
</li>
</ul>
</li>
<li>
<p>诱导目标机访问 URL</p>
</li>
</ol>
<h2 id="cs-邮件钓鱼" tabindex="-1"><a class="header-anchor" href="#cs-邮件钓鱼" aria-hidden="true">#</a> CS 邮件钓鱼</h2>
<ol>
<li>
<p>启动 CS 服务端</p>
</li>
<li>
<p>启动 CS 客户端。Attacks - Spear Phish</p>
<ul>
<li>
<p>Targets： 目标邮箱（txt 文本形式批量加载）</p>
</li>
<li>
<p>Template：邮件模板（以 QQ 邮件为例，编写邮件并发送或保存后，导出为 eml 文件就可以作为模板）</p>
</li>
<li>
<p>Attachment：邮件附件（根据情况选择）</p>
</li>
<li>
<p>Embed URL：嵌入 URL（可以与网站克隆，木马托管等结合使用）</p>
</li>
<li>
<p>Mail Server：邮件服务器。（以 QQ 邮箱为例，在设置-账户中，开启 SMTP 服务，生成授权码）</p>
<ul>
<li>
<p>SMTP Host：邮件服务器地址</p>
<p>以 QQ 邮箱为例，在设置中，开启 SMTP 服务旁，“如何使用 IMAP” 介绍中，找到通用配置，如下：</p>
<ul>
<li>接收邮件服务器： <code v-pre>imap.qq.com</code>， <code v-pre>SSL</code>， <code v-pre>端口993</code></li>
<li>发送邮件服务器： <code v-pre>smtp.qq.com</code>， <code v-pre>SSL</code>， <code v-pre>端口465或587</code></li>
</ul>
<p>这里是作为【发送服务器】，所以 SMTP Host 就选择： <code v-pre>smtp.qq.com</code></p>
</li>
<li>
<p>SMTP Port：邮件服务器端口（参照 SMTP Host， 以 <code v-pre>465</code> 为例）</p>
</li>
<li>
<p>Username：邮箱地址（上面是以自己的 QQ 邮箱为例，所以这里填自己的 QQ 邮箱）</p>
</li>
<li>
<p>Password：邮箱密码（上面是以自己的 QQ 邮箱为例，所以这里填上面生成的授权码，要最新的授权码）</p>
</li>
<li>
<p>Random Delay：随机延迟（根据实际情况设置）</p>
</li>
<li>
<p>Connection：连接方式（参照 SMTP Host，这里选择 SSL）</p>
</li>
</ul>
</li>
<li>
<p>Bounce To：退信通知邮箱（根据实际情况设置，以自己邮箱为例）</p>
</li>
</ul>
</li>
<li>
<p>Preview： 预览</p>
</li>
<li>
<p>Send： 发送</p>
</li>
</ol>
<h2 id="msf-会话注入-cs-监控" tabindex="-1"><a class="header-anchor" href="#msf-会话注入-cs-监控" aria-hidden="true">#</a> MSF 会话注入 CS 监控</h2>
</div></template>


