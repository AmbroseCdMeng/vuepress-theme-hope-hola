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


# Cobalt Strike

## 简介

> Cobalt Strike 简称 CS，用于团队作战，由一个服务端和多个客户端组成，能让多个攻击者在同一个团队服务器上共享目标资源和信息。

> CS 有很多的 payload 生成模块，可以生成 exe、dll、vbs、图片马、bad、vba宏、shellcode 等等

> CS 支持钓鱼攻击，可自动化生成挂马连接

> CS 还有很多后渗透模块，浏览器代理模块，端口转发、扫描、socks 代理、令牌窃取等

> CS 分为服务端和客户端。服务器可以部署在远程服务器下或者 kali 中，客户端可以部署到本地。

## 环境准备

- CS4.4
- JDK 1.11
  - Kali 不需要额外安装
  - 其他 linux 系统安装 jdk
    - `sudo apt-get update`
    - `sudo apt-get install openjdk-11-jdk`
    - `sudo update-java-alternatives -s java-1.11.0-openjdk-amd64`  设置 openjdk 11 为默认程序

## CS 安装

- `teamserver` 服务端启动文件
- `cobaltstrike` 客户端启动文件
- `chmod 777 teamserver` 服务端权限赋值
- `./teamserver kali_ip password` 启动服务端（ip指向服务端ip，后面设置登录口令）
- `chmod 777 cobaltstrike` 客户端权限赋值
- `./cobaltstrike` 启动客户端，弹出登录窗口，填入主机ip或域名，填入端口（服务端启动成功会生成），指定用户名，填入服务端设置的口令

## CS 监听器

### 创建监听器

1. 启动 CS 服务端
2. 启动 CS 客户端。Cobalt Strike - Listeners（或者直接点击"耳机"图标）- Add（界面下方）
   - Name：为监听器命名
   - Payload：详见 Beacon 分类，以 Beacon HTTP 为例
   - HTTP Hosts：点击 "+" 添加，默认会自动带出 CS 服务端地址
   - HTTP Port（C2）：上线端口
   - HTTP Port（Bind）：监听端口

### 连接方式

- beacon 是 cs 内置的监听器，在目标机器上成功执行 payload 后，会返回一个 shell 到 cs 上
- foreign 是提供给 cs 外的工具使用的监听器，例如派生出来的 msf 的 shell 来进行后渗透
- external c2 是 cs 引入的一种规范（或者框架），可以利用这个功能拓展 c2 通信渠道，而不局限于默认提供的 http、https、dns、smb tcp 通道。

### Beacon 分类

> Beacon 是 CS 运行在目标主机上的 payload， Beacons 是在隐蔽信道上给我们提供服务，用于长期控制受感染主机的。
>
> 它的工作方式与 Metasploit 类似，在实际沉头过程中，我们可以将其嵌入到可执行文件中，添加到 word 文档或者通过利用主机漏洞等来传递 Beacon

1. DNS Beacon

   ​	DNS Beacon，就是使用 DNS 请求将 Beacon 返回，DNS 请求用于解析 CS 团队服务器，DNS 响应也告诉 Beacon 如何从 CS 团队服务器上下载任务。

   ​	在 CS 4.0 及以后的版本中，DNS Beacon 是一个仅 DNS 的 payload，在这个 payload 中没有 HTTP 通信模式

   - 优点：

     具有更高的隐蔽性

   - 缺点：

     速度相对于 HTTP Beacon 等会更慢

2. HTTP(S) Beacon

   HTTP Beacon 利用 http 请求来进行通信，向受害主机传达命令，达到控制对方主机的目的。

   - 缺点：

     明文传输

   HTTPS Beacon 在 HTTP Beacon 的基础上，增加了加密传输

3. SMB Beacon

   SMB Beacon 使用命名管道与一个父 Beacon 进行通信，再由这个父 Beacon 与服务端通信，相当于一个桥梁，因为 Windows 可以将命名管道通信封装在 SMB 协议中与远程主机进行通信，所以得名 SMB Beacon。 其实就是将 payload 运行后，创建了自定义命名管道作为服务端等待连接。

4. TCP Beacon

   TCP Beacon 使用 TCP Socket 进行通信，在 CS 4.0 之后，这个技术就不适合作为第一个木马使用了，因为它的流量都是明文的，容易被发现，但是这个技术很适合在内网穿透的时候使用，在内网穿透的时候一般只能使用 TCP Beacon 生成木马

## CS 木马生成

1. 启动 CS 服务端
2. 启动 CS 客户端。Attacks - Packages - 以 Windows Executable 为例
   - 选择 Listener
   - Output 以 Windows exe 为例
   - Generate

## CS 目标主机信息收集

1. 启动 CS 服务端
2. 启动 CS 客户端。Attacks - Web Drive-By - System Profiler - 配置 url 信息 - Launch
3. 诱导目标机访问 url
4. CS 客户端。 View - Web Log 查看访问记录，其中记录了目标主机信息

## CS 克隆网页并挂马

1. 启动 CS 服务端

2. 启动 CS 客户端

   - 如果不需要挂马，直接跳至第 6 步

3. 创建监听器（已创建可以跳过）

4. 生成木马（已生成可以跳过）

5. 文件托管（已托管的可以跳过）。

   - Attacks - Web Drive-By - Host File
     - 选择文件（木马文件）
     - Local URL： 访问的 URL，根据实际情况进行伪装
     - Local Host： CS 服务端地址，默认已填写无需更改
     - Local Port： 端口
     - Mime Type： 根据实际情况选择。以 automatic 为例
   - Launch 生成托管地址（复制这个地址）

6. 克隆网站。

   - Attacks - Web Drive-By - Clone site

     - Clone URL： 要克隆的网站
     - Local URL：本地 URL（与 Local Host 组合成最终的 URL，与已有站点 URL 不能冲突）
     - Local Host：本地地址（CS 服务端地址）
     - Local Port： 本地端口（与已有站点的端口不能冲突）
     - Attack：攻击载荷，可选择托管的木马文件，也可以直接粘贴木马所在路经

     - Log keystroke on cloned site ： 勾选后会对键盘进行记录

   - Clone 执行网站克隆任务，得到最终的 URL

7. 诱导目标机访问 URL

## CS 邮件钓鱼

1. 启动 CS 服务端

2. 启动 CS 客户端。Attacks - Spear Phish

   - Targets： 目标邮箱（txt 文本形式批量加载）

   - Template：邮件模板（以 QQ 邮件为例，编写邮件并发送或保存后，导出为 eml 文件就可以作为模板）

   - Attachment：邮件附件（根据情况选择）

   - Embed URL：嵌入 URL（可以与网站克隆，木马托管等结合使用）

   - Mail Server：邮件服务器。（以 QQ 邮箱为例，在设置-账户中，开启 SMTP 服务，生成授权码）

     - SMTP Host：邮件服务器地址

        以 QQ 邮箱为例，在设置中，开启 SMTP 服务旁，“如何使用 IMAP” 介绍中，找到通用配置，如下：

       - 接收邮件服务器： `imap.qq.com`， `SSL`， `端口993`
       - 发送邮件服务器： `smtp.qq.com`， `SSL`， `端口465或587`

       这里是作为【发送服务器】，所以 SMTP Host 就选择： `smtp.qq.com`

     - SMTP Port：邮件服务器端口（参照 SMTP Host， 以 `465` 为例）

     - Username：邮箱地址（上面是以自己的 QQ 邮箱为例，所以这里填自己的 QQ 邮箱）

     - Password：邮箱密码（上面是以自己的 QQ 邮箱为例，所以这里填上面生成的授权码，要最新的授权码）

     - Random Delay：随机延迟（根据实际情况设置）

     - Connection：连接方式（参照 SMTP Host，这里选择 SSL）

   - Bounce To：退信通知邮箱（根据实际情况设置，以自己邮箱为例）

3. Preview： 预览

4. Send： 发送

## MSF 会话注入 CS 监控





