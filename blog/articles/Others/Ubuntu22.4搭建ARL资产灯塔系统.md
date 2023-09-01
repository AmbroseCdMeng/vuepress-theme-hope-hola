---
icon: edit
date: 2023-08-30
category:
  - 环境搭建
tag:
  - 环境搭建
  - 资产收集
star: true
sticky: 9997
---


# Ubuntu 22.4 搭建ARL资产灯塔系统

### 1. Docker 容器安装

1. 更新 `apt` 索引

   `sudo apt update`

2. 安装必要依赖

   `sudo apt install apt-transport-https ca-certificates curl gnupg-agent software-properties-common`

3. 导入源仓库 `GPG Key`

   `curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -`

4. 添加 `Docker APT` 软件源

   `sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"`

5. 安装 `Docker` 

   `sudo apt install docker-ce docker-ce-cli containerd.io`

   - 也可以用 `apt list -a docker-ce` 查看历史可安装版本，然后指定版本进行安装 `sudo apt install docker-ce=<VERSION> docker-ce-cli=<VERSION> containerd.io`

6. 查看 `docker` 运行状态

   `sudo systemctl status docker`

7. 运行 `docker` 容器。（`docker` 默认会有一个 `hello-world` 的测试容器）

   `docker container run hello-world`



### 2. Docker-compose 安装

1. 查看 `docker` 版本

   `docker --version` （我的是 `Docker version 24.0.5`）

2. 查看官网 `docker-compose` 与 `docker` 版本对应表

   `https://docs.docker.com/compose/compose-file/compose-file-v3/`

3. 找到对应的版本，从这里转去 `github` 的 `docker-compse release` 库，下载对应的 `compse` 版本二进制包

   ![image-20230825172628948](./images/Ubuntu22.4%E6%90%AD%E5%BB%BAARL%E8%B5%84%E4%BA%A7%E7%81%AF%E5%A1%94%E7%B3%BB%E7%BB%9F/image-20230825172628948-1692955602415-8.png)

   也可以直接用 `sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.1/docker-compose-linux-x86_64" -o /usr/local/bin/docker-compose` 命令进行下载（下载地址中版本号和文件名自行修改）。 

   要注意两点： 

   1. `docker-compse-linux-x86_64`，不知道系统位数的，可以使用 `docker-compose-$(uname -s)-$(uname -m)`来自行获取；

   2. 并不一定每个`docker-compose`版本都有符合系统版本的安装包，寻找附近较新的即可，如果执行时报错"无法执行的二进制文件"，很可能就是下错了安装包）。

   3. 检查文件名，必须是 `docker-compse`，如果不是，要重命名。（具体看下图官方文档描述）

   4. 创建软链接或者将安装包复制到指定路径（具体看下图官方文档描述）

      `sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose`

   5. 对 `docker-compose` 二进制文件赋予 `x` 权限

      `chmod +x docker-compose`

   6. 测试是否安装成功

      `docker-compose version`（我的是 `Docker Compose version v2.20.1`）

      如果出现 `command not found`，可能是没有 `x` 权限（执行权限），可以 `ll` 命令确认一下是否有 `x`

   7. 整个过程可以参照官网的 `Readme.md` 文档（https://github.com/docker/compose）

      ![image-20230825181451077](./images/Ubuntu22.4%E6%90%AD%E5%BB%BAARL%E8%B5%84%E4%BA%A7%E7%81%AF%E5%A1%94%E7%B3%BB%E7%BB%9F/image-20230825181451077-1692958494833-10.png)



### 3. 安装 arl 

1. 创建一个新目录

   `mkdir docker-arl && cd docker-arl`

2. 前往 `github` 查看 `arl` 最新安装包。（当前最新为 `v2.5.5`）

   `https://github.com/TophantTechnology/ARL/releases/`

3. 复制下载链接，使用 `wget` 命令下载

   `wget -O docker-arl-v2.5.5.zip https://github.com/TophantTechnology/ARL/releases/download/v2.5.5/docker.zip`

4. 解压 `zip` 文件。

   `unzip docker-arl-v2.5.5.zip`

   - 没有 `unzip` 命令的话需要用 `apt install unzip` 安装

5. 创建 `docker` 挂载

   `docker volume create arl_db`

6. 后台启动

   `docker-compose up -d`

7. 看到这个界面时，就说明已经在拉取镜像资源准备启动了，耐心等待即可

   ![image-20230825182545577](./images/Ubuntu22.4%E6%90%AD%E5%BB%BAARL%E8%B5%84%E4%BA%A7%E7%81%AF%E5%A1%94%E7%B3%BB%E7%BB%9F/image-20230825182545577-1692959148948-12.png)

8. 启动成功。默认端口：5003，默认用户名密码： admin/arlpass

​	![image-20230901131239416](./images/Ubuntu22.4%E6%90%AD%E5%BB%BAARL%E8%B5%84%E4%BA%A7%E7%81%AF%E5%A1%94%E7%B3%BB%E7%BB%9F/image-20230901131239416-1693545169619-14.png)

`wget https://github.com/TophantTechnology/ARL/releases/download/v2.5.4/docker.zip`

