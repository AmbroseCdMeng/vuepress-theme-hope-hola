<template><div><blockquote>
<p>题目来源于<a href="https://adworld.xctf.org.cn/challenges/details?hash=959b1548-3860-4db6-9837-2986edd46ba1_2" target="_blank" rel="noopener noreferrer">【攻防世界】<ExternalLinkIcon/></a></p>
</blockquote>
<h1 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h1>
<ul>
<li>
<p>名称： Morse</p>
</li>
<li>
<p>编号： GFSJ0006</p>
</li>
<li>
<p>难度:1</p>
</li>
<li>
<p>题目来源：<code v-pre>poxlove3</code></p>
</li>
<li>
<p>题目描述：
<code v-pre>小鱼得意的瞟了你一眼，神神气气的拿走了答对谜语的奖励，你心里暗暗较劲 想着下一个谜题一定要比小鱼更快的解出来。不知不觉你们走到了下一个谜题的地方，这个地方有些奇怪。 上面没什么提示信息，只是刻着一些0和1，感觉有着一些奇怪的规律，你觉得有些熟悉，但是就是想不起来 这些01代表着什么意思。一旁的小鱼看你眉头紧锁的样子，扑哧一笑，对你讲“不好意思我又猜到答案了。”(flag格式为cyberpeace{xxxxxxxxxx},均为小写) </code></p>
</li>
<li>
<p>题目附件:</p>
<p><code v-pre>11 111 010 000 0 1010 111 100 0 00 000 000 111 00 10 1 0 010 0 000 1 00 10 110</code></p>
</li>
</ul>
<h1 id="题解" tabindex="-1"><a class="header-anchor" href="#题解" aria-hidden="true">#</a> 题解</h1>
<ul>
<li>
<p>与前两道题一样，堪称 <code v-pre>crypto</code> 类型入门四件套。</p>
</li>
<li>
<p>根据题目【Morse】，猜测这道题应该是<strong>摩斯密码</strong></p>
</li>
<li>
<p>摩斯密码是通过<code v-pre>点</code>与<code v-pre>杠</code>的组合来表示不同的字母或符号（详细参照百度百科）</p>
</li>
<li>
<p>在摩斯密码中，<code v-pre>0</code> 表示 <code v-pre>·</code>， <code v-pre>1</code> 表示 <code v-pre>-</code></p>
</li>
<li>
<p>源信息： <code v-pre>11 111 010 000 0 1010 111 100 0 00 000 000 111 00 10 1 0 010 0 000 1 00 10 110</code></p>
</li>
<li>
<p>转换为摩斯电码： <code v-pre>-- --- .-. ... . -.-. --- -.. . .. ... ... --- .. -. - . .-. . ... - .. -. --.</code></p>
</li>
<li>
<p><a href="https://www.ip138.com/mosi/" target="_blank" rel="noopener noreferrer">在线转码<ExternalLinkIcon/></a>：<code v-pre>MORSECODEISSOINTERESTING</code></p>
</li>
<li>
<p>转码结果应该就是 <code v-pre>flag</code> 了（注意题目要求：<code v-pre>flag格式为cyberpeace{xxxxxxxxxx},均为小写</code>）</p>
</li>
<li>
<p><code v-pre>cyberpeace{morsecodeissointeresting}</code></p>
</li>
<li>
<figure><img src="https://img-blog.csdnimg.cn/210065ccdf3b4b10addfade8be0ce4a6.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
</li>
</ul>
</div></template>


