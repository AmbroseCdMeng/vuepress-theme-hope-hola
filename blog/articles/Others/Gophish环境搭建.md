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

# GoPhish 环境搭建（Linux）

>  GoPhish 官网： https://github.com/gophish/gophish/releases



## 1. 下载 GoPhish 并解压

>  linux 安装包：[gophish-v0.12.1-linux-64bit.zip](https://github.com/gophish/gophish/releases/download/v0.12.1/gophish-v0.12.1-linux-64bit.zip)， 也可以直接使用 `wget` 命令下载

解压

查看目录列表：

```
[root@iZwz92d94t8mb03s9z327hZ gophish-v0.12.1-linux-64bit]# ll
总用量 21052
-rw-r--r-- 1 root root      460 8月  15 13:46 config.json
drwxr-xr-x 4 root root     4096 8月  15 13:40 db
-rw-r--r-- 1 root root 21525728 8月  15 13:40 gophish
-rw-r--r-- 1 root root     1115 8月  15 13:40 LICENSE
-rw-r--r-- 1 root root     3285 8月  15 13:40 README.md
drwxr-xr-x 7 root root     4096 8月  15 13:40 static
drwxr-xr-x 2 root root     4096 8月  15 13:41 templates
-rw-r--r-- 1 root root        7 8月  15 13:41 VERSION
```

## 修改配置文件

修改 `config.json` 配置文件

`vim config.json`

关注两个位置： 

1. `admin_server` 下的 `listen_url:127.0.0.1:3333`

   建议修改成 `0.0.0.0:3333`，修改之前仅支持本机访问，修改之后可以远程访问

2. `phish_server` 下的 `listenm_url:0.0.0.0:80`

   建议修改端口，服务器上的 `80` 端口是一个非常容易冲突的端口

```
[root@iZwz92d94t8mb03s9z327hZ gophish-v0.12.1-linux-64bit]# cat config.json 
{
        "admin_server": {
                "listen_url": "0.0.0.0:3333",
                "use_tls": true,
                "cert_path": "gophish_admin.crt",
                "key_path": "gophish_admin.key",
                "trusted_origins": []
        },
        "phish_server": {
                "listen_url": "0.0.0.0:3334",
                "use_tls": false,
                "cert_path": "example.crt",
                "key_path": "example.key"
        },
        "db_name": "sqlite3",
        "db_path": "gophish.db",
        "migrations_prefix": "db/db_",
        "contact_address": "",
        "logging": {
                "filename": "",
                "level": ""
        }
}

```



## 赋予执行权限

`chmod +x gophish` 对解压后的 `gophish` 目录下的 `gophish` 文件 赋予执行权限

```
[root@iZwz92d94t8mb03s9z327hZ gophish-v0.12.1-linux-64bit]# ll
总用量 21052
-rw-r--r-- 1 root root      460 8月  15 13:46 config.json
drwxr-xr-x 4 root root     4096 8月  15 13:40 db
-rw-r--r-- 1 root root 21525728 8月  15 13:40 gophish
-rw-r--r-- 1 root root     1115 8月  15 13:40 LICENSE
-rw-r--r-- 1 root root     3285 8月  15 13:40 README.md
drwxr-xr-x 7 root root     4096 8月  15 13:40 static
drwxr-xr-x 2 root root     4096 8月  15 13:41 templates
-rw-r--r-- 1 root root        7 8月  15 13:41 VERSION
[root@iZwz92d94t8mb03s9z327hZ gophish-v0.12.1-linux-64bit]# su root
[root@iZwz92d94t8mb03s9z327hZ gophish-v0.12.1-linux-64bit]# chmod +x gophish
[root@iZwz92d94t8mb03s9z327hZ gophish-v0.12.1-linux-64bit]# ll
总用量 21052
-rw-r--r-- 1 root root      460 8月  15 13:46 config.json
drwxr-xr-x 4 root root     4096 8月  15 13:40 db
-rwxr-xr-x 1 root root 21525728 8月  15 13:40 gophish
-rw-r--r-- 1 root root     1115 8月  15 13:40 LICENSE
-rw-r--r-- 1 root root     3285 8月  15 13:40 README.md
drwxr-xr-x 7 root root     4096 8月  15 13:40 static
drwxr-xr-x 2 root root     4096 8月  15 13:41 templates
-rw-r--r-- 1 root root        7 8月  15 13:41 VERSION
```

执行 `gophish` 命令启动。 

如果遇到如下报错，请参考：[CentOS 7.9 升级 GLIBC_2.28](./CentOS%207.9%20升级%20GLIBC_2.28%20踩坑全过程.md)

```
[root@iZwz92d94t8mb03s9z327hZ gophish-v0.12.1-linux-64bit]# ./gophish
./gophish: /lib64/libc.so.6: version `GLIBC_2.28' not found (required by ./gophish)
```
