<template><div><blockquote>
<p>题目来源于<a href="https://www.ctfhub.com/#/skilltree" target="_blank" rel="noopener noreferrer">【CTF-HUB】<ExternalLinkIcon/></a></p>
</blockquote>
<h1 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h1>
<figure><img src="https://img-blog.csdnimg.cn/7b6f9de8a00a4d3f9f93814af4c8e4b9.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h1 id="题解" tabindex="-1"><a class="header-anchor" href="#题解" aria-hidden="true">#</a> 题解</h1>
<ul>
<li>
<p>进入题目，能看到一个小提示
<img src="https://img-blog.csdnimg.cn/79701bcd2eca49f0b5a2742269291fa0.png" alt="在这里插入图片描述" loading="lazy"></p>
<blockquote>
<p>在开发人员使用 <code v-pre>vim 编辑器</code> 编辑文本时，系统会自动生成一个备份文件，当编辑完成后，保存时，原文件会更新，备份文件会被自动删除。</p>
<p>但是，当编辑操作意外终止时，这个备份文件就会保留，如果多次编辑文件都意外退出，备份文件并不会覆盖，而是以 <code v-pre>swp</code>、<code v-pre>swo</code>、<code v-pre>swn</code> 等其他格式，依次备份。</p>
</blockquote>
</li>
<li>
<p>有了这个思路，接下来开启题目，可以看到，页面中只有两行文字，得到一个关键信息： <code v-pre>flag 在 index.php 的源码中</code></p>
<figure><img src="https://img-blog.csdnimg.cn/ace8fc7ebbae40e3b2b139b668f49c5e.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
</li>
<li>
<p>这里已经得到了文件名 <code v-pre>index.php</code>，并且知道了 <code v-pre>flag</code> 存在于备份文件中，就已经可以直接通过访问 <code v-pre>/.index.php.swp</code> 来尝试访问备份文件了。</p>
</li>
<li>
<font color=red>需要注意的是，这里有一个小坑： <b>备份文件是隐藏文件，文件名前面还有一个点，是 .index.php.swp</b></font></li>
<li>
<p>直接访问，得到备份文件</p>
<figure><img src="https://img-blog.csdnimg.cn/107b518131d94af0b07eb6df67a49d8a.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
</li>
<li>
<p>文本形式打开</p>
<blockquote>
<p>一堆乱码，但是在文本末尾可以看到</p>
</blockquote>
<figure><img src="https://img-blog.csdnimg.cn/abffaf70a9ee4e8b90c9cb638fe1e365.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
</li>
</ul>
</div></template>


