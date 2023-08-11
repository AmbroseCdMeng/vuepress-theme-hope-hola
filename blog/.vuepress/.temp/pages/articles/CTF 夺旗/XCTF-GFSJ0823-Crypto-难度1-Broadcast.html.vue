<template><div><blockquote>
<p>题目来源于<a href="https://adworld.xctf.org.cn/challenges/details?hash=b33219c0-6165-46a9-b148-351793744b91_2" target="_blank" rel="noopener noreferrer">【攻防世界】<ExternalLinkIcon/></a></p>
</blockquote>
<h1 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h1>
<ul>
<li>
<p>名称： Broadcast</p>
</li>
<li>
<p>编号： GFSJ0823</p>
</li>
<li>
<p>难度:1</p>
</li>
<li>
<p>题目来源：<code v-pre>2019Redhat</code></p>
</li>
<li>
<p>题目描述：
<code v-pre>粗心的Alice在制作密码的时候，把明文留下来，聪明的你能快速找出来吗？</code></p>
</li>
<li>
<p>题目附件:
<img src="https://img-blog.csdnimg.cn/d66e2658a33a439da5159b83c6efb0c3.png" alt="请添加图片描述" loading="lazy">
附件中是 1 个 <code v-pre>python</code> 文件， 4 个 <code v-pre>enc</code> 格式的加密文件和 4 个 <code v-pre>pem</code> 格式的证书</p>
</li>
</ul>
<h1 id="题解" tabindex="-1"><a class="header-anchor" href="#题解" aria-hidden="true">#</a> 题解</h1>
<ul>
<li>
<p>先直接用记事本打开 <code v-pre>py</code> 文件，看一下代码。（毕竟 py 文件打开最方便嘛）</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment">#from secret import msg</span>
msg <span class="token operator">=</span> <span class="token string">'Hahaha, Hastad\'s method don\'t work on this. Flag is flag{fa0f8335-ae80-448e-a329-6fb69048aae4}.'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>😮😮😮第二行，这。。。直接暴露出了 <code v-pre>flag</code>： <code v-pre>flag{fa0f8335-ae80-448e-a329-6fb69048aae4}</code></p>
</li>
<li>
<p>再结合题目描述：<code v-pre>粗心的Alice在制作密码的时候，把明文留下来....</code>，忽然就明白了，这道题，看似拥有很多的加密文件，实际上，真正的 <code v-pre>flag</code> 是以明文形式直接被留在代码中的。（这么多加密/证书文件实际上就是吓唬人的，一定要<strong>认真审题，认真审题，认真审题</strong>）</p>
</li>
<li>
<figure><img src="https://img-blog.csdnimg.cn/8334323f6d63471fab7ca7df91b06235.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
</li>
</ul>
</div></template>


