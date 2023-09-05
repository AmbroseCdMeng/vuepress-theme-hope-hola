---
icon: edit
date: 2023-09-05
category:
  - 环境搭建
tag:
  - 环境搭建
star: false
sticky: false
---



### MySQL 远程连接失败常见的几个原因：

1. 与远程主机网络不通。（ping）

2. 与远程主机端口不通。（telnet ip port）

   1. 3306 端口未对外开放。`netstat -napt`查看开放情况

      > 如果 Local Address 对应的都是 127.0.0.1:3306 则是未开放

      1. mysql 配置文件禁用了远程登录。删除或注释配置文件（配置文件 my.cnf，可能不同，自己判断）中的下面这行代码

         > bind-address= 127.0.0.1

   2. 3306 对外开放，但是被拦截。

      > 如果 Local Address 对应的有 0.0.0.0:3306 则说明已经开放

      1. 防火墙拦截 3306 端口

         > systemctl disable firewalld	# 关闭防火墙。虚拟机建议直接关闭；
         >
         > ​										# 如果是云服务，建议单独设置 3306 策略，或者修改 mysql 端口为其他端口
         >
         > systemctl status firewalld	  # 查看防火墙状态。
         >
         > Active: inactive (dead) 为已经关闭
         >
         > Active: active (running)  为正在运行

         

         > ★ 如果遇到： Failed to disable unit: Unit file firewalld.service does not exist. 
         >
         > 千万不要以为防火墙服务未安装就是关闭了。
         >
         > 一定要先安装，然后关闭防火墙
         >
         > apt install firewalld	# 安装防火墙

      2. 云安全策略拦截 3306 端口（针对云服务器）。在安全策略中配置允许 3306 端口

3. mysql 中禁止了指定用户的远程登录权限。本地登录后对修改（或添加一行）远程登录的用户 Host 值为 %

   > select user,host,password from mysql.user;
   >
   > update mysql.user set host = '%' where user = 'root'; # 以 root 用户为例

4. mysql 本地也无法登录。Can 't connect to local MySQL server through socket '/tmp/mysql.sock

   1. 方法一： host 使用 127.0.0.1 登录即可。因为 localhost 默认使用 socket 协议，ip 登录使用的是 tcp
   2. 方法二： 在配置文件中修改 socket 的值与 mysql.sock 对应。可以通过 find / -name mysql.sock 查找正确的路径

   