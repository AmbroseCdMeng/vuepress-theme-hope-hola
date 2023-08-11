> 题目来源于[【攻防世界】]( https://adworld.xctf.org.cn/challenges/list)

# 题目
- 名称： 适合作为桌面
- 编号： GFSJ0010
- 难度:1
- 题目来源：`世安杯`
- 题目描述：
	flag格式为flag{xxxx}

- 题目附件:
![请添加图片描述](https://img-blog.csdnimg.cn/b290ffad752347fd839d93e350d2b651.png)


# 题解
- 单纯从图片观察，未发现线索；
- 右键使用记事本打开，依然未发现 `flag` 字样；
- 考虑图片隐写，
- 启动 `Stegsolve` ，加载图片；
	![在这里插入图片描述](https://img-blog.csdnimg.cn/5ba17d3e4d5f40beb0dcfb8d965d7190.png)

- 直接切换图片，在 `red plane 1` 中，可以看到，图片左上角出现了一个二维码。（图片隐写大概率可能还会涉及到数据提取，这道题比较基础，所以直接切换就可以看到）
	![在这里插入图片描述](https://img-blog.csdnimg.cn/c653698530e1457dbd968027029fcbcd.png)
- 识别该二维码，[在线条码解析](https://online-barcode-reader.inliteresearch.com/)，记得选择二维码，然后 read 读取；
- ![在这里插入图片描述](https://img-blog.csdnimg.cn/5586e7c6570045f7bb237f5c2fc59133.png)
- 扫描结果是一串十六进制的数字；
- 启动 `winhex` 进行解码，选择 AscII Hex
- 
	![在这里插入图片描述](https://img-blog.csdnimg.cn/e5a979d926cf415fab83a73c04ffb301.png)
- 虽然解析出来是乱码，但是根据这些关键字可以推断出，这应该是一个 `python` 被编译之后的 `pyc` 文件
- 将其保存为 `pyc` 文件
	![在这里插入图片描述](https://img-blog.csdnimg.cn/0cd4a813d1ec4fc99fce48310bb18039.png)

- 启动 `easy python decompiler` 对其进行反编译
![在这里插入图片描述](https://img-blog.csdnimg.cn/0ba668281f774af3b55c576e497af856.png)

- 反编译会在 `pyc` 文件所在目录下生成这个文件
	![在这里插入图片描述](https://img-blog.csdnimg.cn/714645f992c34b40a4c3a996a99c8cae.png)
- 将其后缀改为 `py` 使用 `vscode` 打开，发现实际上是一个名为 `flag` 的 `python` 方法，但并无调用语句，于是自己加上一行代码，调用这个方法
	![在这里插入图片描述](https://img-blog.csdnimg.cn/cb8015c627cb4645b7507a205a4a4636.png)
- 找到 flag
	![在这里插入图片描述](https://img-blog.csdnimg.cn/c005cfd6d52b47e6baa952164d43cbcb.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/11d48488ade74d7c857d11daeff94f02.png)

