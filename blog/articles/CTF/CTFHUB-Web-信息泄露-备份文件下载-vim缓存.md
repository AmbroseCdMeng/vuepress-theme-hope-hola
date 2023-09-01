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

> 题目来源于[【CTF-HUB】](https://www.ctfhub.com/#/skilltree)

# CTFHUB-Web-信息泄露-备份文件下载-vim缓存
![](/images/ctf/7b6f9de8a00a4d3f9f93814af4c8e4b9.png)

<!-- more -->
# 题解
- 进入题目，能看到一个小提示
	![](/images/ctf/79701bcd2eca49f0b5a2742269291fa0.png)
	> 在开发人员使用 `vim 编辑器` 编辑文本时，系统会自动生成一个备份文件，当编辑完成后，保存时，原文件会更新，备份文件会被自动删除。
	>
	> 但是，当编辑操作意外终止时，这个备份文件就会保留，如果多次编辑文件都意外退出，备份文件并不会覆盖，而是以 `swp`、`swo`、`swn` 等其他格式，依次备份。

- 有了这个思路，接下来开启题目，可以看到，页面中只有两行文字，得到一个关键信息： `flag 在 index.php 的源码中`

	![](/images/ctf/ace8fc7ebbae40e3b2b139b668f49c5e.png)
- 这里已经得到了文件名 `index.php`，并且知道了 `flag` 存在于备份文件中，就已经可以直接通过访问 `/.index.php.swp` 来尝试访问备份文件了。
- <font color=red>需要注意的是，这里有一个小坑： <b>备份文件是隐藏文件，文件名前面还有一个点，是 .index.php.swp</b></font>

- 直接访问，得到备份文件

	![](/images/ctf/107b518131d94af0b07eb6df67a49d8a.png)

- 文本形式打开

	> 一堆乱码，但是在文本末尾可以看到
	
	![](/images/ctf/abffaf70a9ee4e8b90c9cb638fe1e365.png)
