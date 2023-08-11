<template><div><blockquote>
<p>题目来源于<a href="https://adworld.xctf.org.cn/challenges/details?hash=c8996ba6-b085-4306-832d-096267e603ed_2" target="_blank" rel="noopener noreferrer">【攻防世界】<ExternalLinkIcon/></a></p>
</blockquote>
<h1 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h1>
<ul>
<li>
<p>名称： Banmabanma</p>
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
<code v-pre>你成功的解出了来了灯谜，小鱼一脸的意想不到“没想到你懂得这么多啊！” 你心里面有点小得意，“那可不是，论学习我没你成绩好轮别的我知道的可不比你少，走我们去看看下一个” 你们继续走，看到前面也是热热闹闹的，同样的大红灯笼高高挂起，旁边呢好多人叽叽喳喳说个不停。你一看 大灯笼，上面还是一对字符，你正冥思苦想呢，小鱼神秘一笑，对你说道，我知道这个的答案是什么了</code></p>
</li>
<li>
<p>题目附件:
<code v-pre>oknqdbqmoq{kag_tmhq_xqmdzqp_omqemd_qzodkbfuaz}</code></p>
</li>
</ul>
<h1 id="题解" tabindex="-1"><a class="header-anchor" href="#题解" aria-hidden="true">#</a> 题解</h1>
<ul>
<li>
<p>从题目【Caesar】可以猜出，此题应该是一个 <code v-pre>Caesar 密码</code> 的加解密问题。</p>
</li>
<li>
<p><strong>凯撒密码</strong>是古典密码学中最经典的加密算法之一。其加密原理非常简单，就是对字母进行一定量的偏移（非字母原样输出），这个偏移量便是<strong>密钥</strong>。比如： <code v-pre>abc</code> 经过 <code v-pre>1</code> 的偏移量加密后得到 <code v-pre>bcd</code>， 经过 <code v-pre>2</code> 的偏移量加密后得到 <code v-pre>cde</code>，经过 <code v-pre>25</code> 的偏移量之后得到 <code v-pre>zab</code> 。所以，凯撒加密最多有 25 个加密结果。</p>
</li>
<li>
<p>但是从这道题目给出的信息中，很难判断密钥（偏移量）应该是多少</p>
</li>
<li>
<p>索性干脆输出密钥为 <code v-pre>1 ~ 25</code> 的所有密文，进行暴力破解。</p>
</li>
<li>
<p>密钥为 <code v-pre>1 ~ 25</code> 的密文集：
<code v-pre>   plorecrnpr{lbh_unir_yrnearq_pnrfne_rapelcgvba}   qmpsfdsoqs{mci_vojs_zsofbsr_qosgof_sbqfmdhwcb}   rnqtgetprt{ndj_wpkt_atpgcts_rpthpg_tcrgneixdc}   soruhfuqsu{oek_xqlu_buqhdut_squiqh_udshofjyed}   tpsvigvrtv{pfl_yrmv_cvrievu_trvjri_vetipgkzfe}   uqtwjhwsuw{qgm_zsnw_dwsjfwv_uswksj_wfujqhlagf}   vruxkixtvx{rhn_atox_extkgxw_vtxltk_xgvkrimbhg}   wsvyljyuwy{sio_bupy_fyulhyx_wuymul_yhwlsjncih}   xtwzmkzvxz{tjp_cvqz_gzvmizy_xvznvm_zixmtkodji}   yuxanlawya{ukq_dwra_hawnjaz_ywaown_ajynulpekj}   zvybombxzb{vlr_exsb_ibxokba_zxbpxo_bkzovmqflk}   awzcpncyac{wms_fytc_jcyplcb_aycqyp_clapwnrgml}   bxadqodzbd{xnt_gzud_kdzqmdc_bzdrzq_dmbqxoshnm}   cyberpeace{you_have_learned_caesar_encryption}   dzcfsqfbdf{zpv_ibwf_mfbsofe_dbftbs_fodszqujpo}   eadgtrgceg{aqw_jcxg_ngctpgf_ecguct_gpetarvkqp}   fbehushdfh{brx_kdyh_ohduqhg_fdhvdu_hqfubswlrq}   gcfivtiegi{csy_lezi_pievrih_geiwev_irgvctxmsr}   hdgjwujfhj{dtz_mfaj_qjfwsji_hfjxfw_jshwduynts}   iehkxvkgik{eua_ngbk_rkgxtkj_igkygx_ktixevzout}   jfilywlhjl{fvb_ohcl_slhyulk_jhlzhy_lujyfwapvu}   kgjmzxmikm{gwc_pidm_tmizvml_kimaiz_mvkzgxbqwv}   lhknaynjln{hxd_qjen_unjawnm_ljnbja_nwlahycrxw}   milobzokmo{iye_rkfo_vokbxon_mkockb_oxmbizdsyx}   njmpcaplnp{jzf_slgp_wplcypo_nlpdlc_pyncjaetzy}   oknqdbqmoq{kag_tmhq_xqmdzqp_omqemd_qzodkbfuaz}   	</code></p>
</li>
<li>
<p>暴力尝试，得到 <code v-pre>flag</code> 为：<code v-pre>cyberpeace{you_have_learned_caesar_encryption}</code></p>
</li>
<li>
<figure><img src="https://img-blog.csdnimg.cn/dda91f27b78a47dd9178737a0aa61044.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
</li>
</ul>
<h1 id="附-生成密文的代码" tabindex="-1"><a class="header-anchor" href="#附-生成密文的代码" aria-hidden="true">#</a> 附：生成密文的代码</h1>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> input <span class="token operator">=</span> <span class="token string">"oknqdbqmoq{kag_tmhq_xqmdzqp_omqemd_qzodkbfuaz}"</span><span class="token punctuation">;</span>
        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chars <span class="token operator">=</span> input<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">26</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>	<span class="token comment">// 等于 0 或者 26 意味着含自身</span>
            <span class="token class-name">StringBuilder</span> builder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">char</span> aChar <span class="token operator">:</span> chars<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>aChar <span class="token operator">></span> <span class="token char">'z'</span> <span class="token operator">||</span> aChar <span class="token operator">&lt;</span> <span class="token char">'a'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    builder<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>aChar<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">continue</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                builder<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token function">caesar</span><span class="token punctuation">(</span>aChar<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>builder<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">char</span> <span class="token function">caesar</span><span class="token punctuation">(</span><span class="token keyword">char</span> c<span class="token punctuation">,</span> <span class="token keyword">int</span> offset<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>c <span class="token operator">+</span> offset <span class="token operator">-</span> <span class="token number">97</span> <span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">26</span> <span class="token operator">+</span> <span class="token number">97</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


