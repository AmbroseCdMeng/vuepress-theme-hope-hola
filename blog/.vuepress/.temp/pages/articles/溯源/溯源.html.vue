<template><div><h2 id="入侵检测" tabindex="-1"><a class="header-anchor" href="#入侵检测" aria-hidden="true">#</a> 入侵检测</h2>
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
</div></template>


