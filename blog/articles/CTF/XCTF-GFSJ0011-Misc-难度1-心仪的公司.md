---
icon: edit
date: 2023-05-24
category:
  - CTF
tag:
  - CTF
star: true
sticky: true
# excerpt: 摘要
---

> 题目来源于[【攻防世界】]( https://adworld.xctf.org.cn/challenges/list)

# XCTF-GFSJ0011-Misc-难度1-心仪的公司
- 名称： 心仪的公司
- 编号： GFSJ0011
- 难度:1
- 题目来源：`世安杯`
- 题目描述：
	flag格式为flag{xxxx}
- 题目附件:
	webshell.pcapng

<!-- more -->
# 题解
- 题目附件为 `pcapng` 格式，即数据包
- 直接连接 `kali`， 使用 `strings` 命令打开
- 😂没注意到，文件还挺大的，都不好截图了，也别直接用 `strings` 打开了，过滤一下吧；
- `strings webshell.pcapng | grep flag{`
- ![img](./images/XCTF-GFSJ0011-Misc-%E9%9A%BE%E5%BA%A61-%E5%BF%83%E4%BB%AA%E7%9A%84%E5%85%AC%E5%8F%B8/abf5699fc92a48978459b805683b53da-1693553936734-113.png)
- 🤔居然没有
- 懒了一下，看了 `write up` 才知道，原来，flag 做了隐藏，不叫 `flag` 了，而是 `fl4g`（新手，头一次见到还可以这样，涨知识了💔）
	![](./images/XCTF-GFSJ0011-Misc-%E9%9A%BE%E5%BA%A61-%E5%BF%83%E4%BB%AA%E7%9A%84%E5%85%AC%E5%8F%B8/cb2b5c81db1240459239c5fb67d8deef.png)
- fl4g:{ftop_Is_Waiting_4_y}

- ![](./images/XCTF-GFSJ0011-Misc-%E9%9A%BE%E5%BA%A61-%E5%BF%83%E4%BB%AA%E7%9A%84%E5%85%AC%E5%8F%B8/82699efc6daf47a890086ff185c1db7a.png)



