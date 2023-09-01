---
icon: edit
date: 2023-05-24
category:
  - CTF
tag:
  - CTF
star: true
sticky: true
---

> 题目来源于[【攻防世界】]( https://adworld.xctf.org.cn/challenges/list)

# XCTF-GFSJ0006-Misc-难度1-Banmabanma
- 名称： Banmabanma
- 编号： GFSJ0006
- 难度:1
- 题目来源：`世安杯`
- 题目描述：
	flag格式为flag{xxxx}
<!-- more -->
- 题目附件:

	![](/images/ctf/2ce09809deb0483483dd9bbdeae4405a.png)

# 题解
- 这是【XCTF】难度系数为 1 的第 1 道题，也可以说是最基本的一道入门题。
- 观察图片，斑马身上的条纹酷似条形码
- 直接用手机扫描条形码，或者使用[在线条码解析](https://online-barcode-reader.inliteresearch.com/)，上传图片识别
- ![](/images/ctf/95d5d236233c438e8e0df7827047a3db.png)
- ![](/images/ctf/5727929321d846db8c6abca6c57f5548.png)
- 识别到信息： `FLAG IS TENSHINE`，根据题目要求的 flag 格式，输入： flag:{TENSHINE}，成功。
- ![](/images/ctf/dcb647b24cd44c78ba72f351e5b72b9e.png)

