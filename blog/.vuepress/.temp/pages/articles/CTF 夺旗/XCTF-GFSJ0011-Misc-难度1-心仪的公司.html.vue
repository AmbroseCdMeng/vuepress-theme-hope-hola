<template><div><blockquote>
<p>题目来源于<a href="https://adworld.xctf.org.cn/challenges/list" target="_blank" rel="noopener noreferrer">【攻防世界】<ExternalLinkIcon/></a></p>
</blockquote>
<h1 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h1>
<ul>
<li>
<p>名称： 心仪的公司</p>
</li>
<li>
<p>编号： GFSJ0011</p>
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
webshell.pcapng</p>
</li>
</ul>
<h1 id="题解" tabindex="-1"><a class="header-anchor" href="#题解" aria-hidden="true">#</a> 题解</h1>
<ul>
<li>
<p>题目附件为 <code v-pre>pcapng</code> 格式，即数据包</p>
</li>
<li>
<p>直接连接 <code v-pre>kali</code>， 使用 <code v-pre>strings</code> 命令打开</p>
</li>
<li>
<p>😂没注意到，文件还挺大的，都不好截图了，也别直接用 <code v-pre>strings</code> 打开了，过滤一下吧；</p>
</li>
<li>
<p><code v-pre>strings webshell.pcapng | grep flag{</code></p>
</li>
<li>
<figure><img src="https://img-blog.csdnimg.cn/abf5699fc92a48978459b805683b53da.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
</li>
<li>
<p>🤔居然没有</p>
</li>
<li>
<p>懒了一下，看了 <code v-pre>write up</code> 才知道，原来，flag 做了隐藏，不叫 <code v-pre>flag</code> 了，而是 <code v-pre>fl4g</code>（新手，头一次见到还可以这样，涨知识了💔）
<img src="https://img-blog.csdnimg.cn/cb2b5c81db1240459239c5fb67d8deef.png" alt="在这里插入图片描述" loading="lazy"></p>
</li>
<li ftop_Is_Waiting_4_y="">
<p>fl4g:</p>
</li>
<li>
<figure><img src="https://img-blog.csdnimg.cn/82699efc6daf47a890086ff185c1db7a.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
</li>
</ul>
</div></template>


