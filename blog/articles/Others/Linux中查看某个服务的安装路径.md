---
icon: edit
date: 2023-09-01
category:
  - 环境搭建
tag:
  - 环境搭建
star: false
sticky: false
---


想修改某服务的配置，却又忘记了安装目录，以 `nginx` 为例

### 方法1： 

`whereis nginx`

### 方法2：

 `find / -name nginx.conf`

### 方法3：

通过 `PID` 查找

步骤：

1. `pf -ef | grep nginx` 查找服务对应的 `PID`
2. 如果查到多个 `PID` 可以使用 `ps -u 安装的用户名`，例如 `ps -u root` 进一步确认 `PID`
3. `cd /proc` 进入进程目录， 
4. `ll | grep PID`，列出 `PID` 对应的目录，如： `ll | grep 12224`
5. `ll PID | grep exe` 查看对应的 `PID` 目录下名为 `exe` 的软连接指向的位置，即为服务安装目录，如： `ll 12224 | grep exe`

