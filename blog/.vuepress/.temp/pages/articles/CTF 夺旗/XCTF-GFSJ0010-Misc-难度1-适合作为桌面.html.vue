<template><div><blockquote>
<p>题目来源于<a href="https://adworld.xctf.org.cn/challenges/list" target="_blank" rel="noopener noreferrer">【攻防世界】<ExternalLinkIcon/></a></p>
</blockquote>
<h1 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h1>
<ul>
<li>
<p>名称： 适合作为桌面</p>
</li>
<li>
<p>编号： GFSJ0010</p>
</li>
<li>
<p>难度:1</p>
</li>
<li>
<p>题目来源：<code v-pre>世安杯</code></p>
</li>
<li xxxx="">
<p>题目描述：
flag格式为flag</p>
</li>
<li>
<p>题目附件:
<img src="https://img-blog.csdnimg.cn/b290ffad752347fd839d93e350d2b651.png" alt="请添加图片描述" loading="lazy"></p>
</li>
</ul>
<h1 id="题解" tabindex="-1"><a class="header-anchor" href="#题解" aria-hidden="true">#</a> 题解</h1>
<ul>
<li>
<p>单纯从图片观察，未发现线索；</p>
</li>
<li>
<p>右键使用记事本打开，依然未发现 <code v-pre>flag</code> 字样；</p>
</li>
<li>
<p>考虑图片隐写，</p>
</li>
<li>
<p>启动 <code v-pre>Stegsolve</code> ，加载图片；
<img src="https://img-blog.csdnimg.cn/5ba17d3e4d5f40beb0dcfb8d965d7190.png" alt="在这里插入图片描述" loading="lazy"></p>
</li>
<li>
<p>直接切换图片，在 <code v-pre>red plane 1</code> 中，可以看到，图片左上角出现了一个二维码。（图片隐写大概率可能还会涉及到数据提取，这道题比较基础，所以直接切换就可以看到）
<img src="https://img-blog.csdnimg.cn/c653698530e1457dbd968027029fcbcd.png" alt="在这里插入图片描述" loading="lazy"></p>
</li>
<li>
<p>识别该二维码，<a href="https://online-barcode-reader.inliteresearch.com/" target="_blank" rel="noopener noreferrer">在线条码解析<ExternalLinkIcon/></a>，记得选择二维码，然后 read 读取；</p>
</li>
<li>
<figure><img src="https://img-blog.csdnimg.cn/5586e7c6570045f7bb237f5c2fc59133.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
</li>
<li>
<p>扫描结果是一串十六进制的数字；</p>
</li>
<li>
<p>启动 <code v-pre>winhex</code> 进行解码，选择 AscII Hex</p>
</li>
<li>
<figure><img src="https://img-blog.csdnimg.cn/e5a979d926cf415fab83a73c04ffb301.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
</li>
<li>
<p>虽然解析出来是乱码，但是根据这些关键字可以推断出，这应该是一个 <code v-pre>python</code> 被编译之后的 <code v-pre>pyc</code> 文件</p>
</li>
<li>
<p>将其保存为 <code v-pre>pyc</code> 文件
<img src="https://img-blog.csdnimg.cn/0cd4a813d1ec4fc99fce48310bb18039.png" alt="在这里插入图片描述" loading="lazy"></p>
</li>
<li>
<p>启动 <code v-pre>easy python decompiler</code> 对其进行反编译
<img src="https://img-blog.csdnimg.cn/0ba668281f774af3b55c576e497af856.png" alt="在这里插入图片描述" loading="lazy"></p>
</li>
<li>
<p>反编译会在 <code v-pre>pyc</code> 文件所在目录下生成这个文件
<img src="https://img-blog.csdnimg.cn/714645f992c34b40a4c3a996a99c8cae.png" alt="在这里插入图片描述" loading="lazy"></p>
</li>
<li>
<p>将其后缀改为 <code v-pre>py</code> 使用 <code v-pre>vscode</code> 打开，发现实际上是一个名为 <code v-pre>flag</code> 的 <code v-pre>python</code> 方法，但并无调用语句，于是自己加上一行代码，调用这个方法
<img src="https://img-blog.csdnimg.cn/cb8015c627cb4645b7507a205a4a4636.png" alt="在这里插入图片描述" loading="lazy"></p>
</li>
<li>
<p>找到 flag
<img src="https://img-blog.csdnimg.cn/c005cfd6d52b47e6baa952164d43cbcb.png" alt="在这里插入图片描述" loading="lazy"></p>
</li>
</ul>
<figure><img src="https://img-blog.csdnimg.cn/11d48488ade74d7c857d11daeff94f02.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
</div></template>


