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

> 题目来源于[【攻防世界】]( https://adworld.xctf.org.cn/challenges/details?hash=b33219c0-6165-46a9-b148-351793744b91_2)

# XCTF-GFSJ0823-Crypto-难度1-Broadcast
- 名称： Broadcast
- 编号： GFSJ0823
- 难度:1
- 题目来源：`2019Redhat`
- 题目描述：
	`粗心的Alice在制作密码的时候，把明文留下来，聪明的你能快速找出来吗？`
<!-- more -->
- 题目附件:
	![](/images/ctf/d66e2658a33a439da5159b83c6efb0c3.png)
	附件中是 1 个 `python` 文件， 4 个 `enc` 格式的加密文件和 4 个 `pem` 格式的证书

# 题解
- 先直接用记事本打开 `py` 文件，看一下代码。（毕竟 py 文件打开最方便嘛）

	```python
	#from secret import msg
	msg = 'Hahaha, Hastad\'s method don\'t work on this. Flag is flag{fa0f8335-ae80-448e-a329-6fb69048aae4}.'
	```
-  😮😮😮第二行，这。。。直接暴露出了 `flag`： `flag{fa0f8335-ae80-448e-a329-6fb69048aae4}`
- 再结合题目描述：`粗心的Alice在制作密码的时候，把明文留下来....`，忽然就明白了，这道题，看似拥有很多的加密文件，实际上，真正的 `flag` 是以明文形式直接被留在代码中的。（这么多加密/证书文件实际上就是吓唬人的，一定要**认真审题，认真审题，认真审题**）
- ![](/images/ctf/8334323f6d63471fab7ca7df91b06235.png)
