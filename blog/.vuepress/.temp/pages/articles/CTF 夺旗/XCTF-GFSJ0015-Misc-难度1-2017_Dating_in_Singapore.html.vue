<template><div><blockquote>
<p>题目来源于<a href="https://adworld.xctf.org.cn/challenges/list" target="_blank" rel="noopener noreferrer">【攻防世界】<ExternalLinkIcon/></a></p>
</blockquote>
<h1 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h1>
<ul>
<li>
<p>名称： 2017_Dating_in_Singapore</p>
</li>
<li>
<p>编号： GFSJ0151</p>
</li>
<li>
<p>难度:1</p>
</li>
<li>
<p>题目来源：<code v-pre>XCTF-3rd-HITB-CTF-2017</code></p>
</li>
<li>
<p>题目描述：
01081522291516170310172431-050607132027262728-0102030209162330-02091623020310090910172423-02010814222930-0605041118252627-0203040310172431-0102030108152229151617-04050604111825181920-0108152229303124171003-261912052028211407-04051213192625</p>
</li>
<li>
<p>题目附件:
<img src="https://img-blog.csdnimg.cn/5d916379c4f44a71a8612d7b10ffb3eb.png" alt="在这里插入图片描述" loading="lazy"></p>
</li>
</ul>
<h1 id="题解" tabindex="-1"><a class="header-anchor" href="#题解" aria-hidden="true">#</a> 题解</h1>
<ul>
<li>
<p>分析题目：</p>
<ul>
<li>附件图片是一个日历，Singapore 的日历，能得到的线索有：
<ol>
<li>Holidays 表格</li>
<li>每个月份下面 ○、●  和数字组成的的标识（不知道是干什么用的）</li>
</ol>
</li>
<li>题目描述是一串十进制数字，用 <code v-pre>-</code> 隔开</li>
</ul>
</li>
<li>
<p>既然题目描述中的十进制数字有分隔符，那先把它隔开看看与日历有什么关系</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>01081522291516170310172431-
050607132027262728-
0102030209162330-
02091623020310090910172423-
02010814222930-
0605041118252627-
0203040310172431-
0102030108152229151617-
04050604111825181920-
0108152229303124171003-
261912052028211407-
04051213192625
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>共分成了12 组，与日历有关？12 个月份？</p>
</li>
<li>
<p>如果猜测是对的，那 <code v-pre>01081522291515170310172131</code> 和 1 月有什么关系呢？</p>
</li>
<li>
<p><code v-pre>01-08-15-22-29</code>，在 1 月，都是周日 <code v-pre>Sun</code></p>
</li>
<li>
<p><code v-pre>15-16-17</code>，横线？连线？？？</p>
</li>
<li>
<p>尝试一下：
<img src="https://img-blog.csdnimg.cn/baaf1247e7fd4c24aacd9539edb13979.png" alt="在这里插入图片描述" loading="lazy"></p>
</li>
<li>
<p>果然，12 组数字，分别在 12 个月内，连成了一堆字符</p>
</li>
<li>
<p>虽然，4月、5月、12月貌似有点不对🤔</p>
</li>
<li>
<p>May 和 December 形似一堆大括号 <code v-pre>{ xxx }</code>，这是比较常见的 <code v-pre>flag</code> 的格式，虽然 <code v-pre>April</code> 看上去有点问题，但我觉得还是先尝试一下 <code v-pre>CTFFUN</code> 这个 <code v-pre>flag</code> 是否正确？😉如果不正确再回过头来研究，能出现字母至少证明思路大致没问题吧？（🤣哎？这个题，这个思路，怎么做出了一点密逃的感觉呢？🤣）</p>
</li>
<li>
<p>试一下 <code v-pre>flag:{CTFFUN}</code></p>
</li>
<li>
<figure><img src="https://img-blog.csdnimg.cn/7be5686d1bb14bd98a369f330a3f05ea.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
</li>
<li>
<p>emmm🤔 并不正确</p>
</li>
<li>
<p>........ 十几分钟以后</p>
</li>
<li>
<p>题目中好像也没说 <code v-pre>flag</code> 的格式是 <code v-pre>flag{xxx}</code>， 我在想啥呢。。。</p>
</li>
<li>
<p>那是这 12 个字符？😭那 <code v-pre>April</code> 这是个什么鬼？ 一团黑。。。 <code v-pre>O</code>?<code v-pre>B</code>?<code v-pre>8</code>?<code v-pre>0</code>?，还有别的一团黑的字符不？好像也就这几个了，结合前三个字符 <code v-pre>Hit</code>, 🙄 词汇量有点匮乏，也想不到能组成个什么单词了。于是，决定，就这 4 个字符，蒙起来。</p>
</li>
<li>
<figure><img src="https://img-blog.csdnimg.cn/915901c886474a0f9b27196686db3074.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
</li>
<li>
<p>😂 第二次居然就蒙对了，正确答案就是： <code v-pre>HITB{CTFFUN}</code>
<img src="https://img-blog.csdnimg.cn/f0b53214a98944cdadc5a194d5de61a7.png" alt="在这里插入图片描述" loading="lazy"></p>
</li>
</ul>
</div></template>


