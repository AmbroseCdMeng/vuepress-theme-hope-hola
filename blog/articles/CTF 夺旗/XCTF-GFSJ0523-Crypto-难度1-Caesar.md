> 题目来源于[【攻防世界】]( https://adworld.xctf.org.cn/challenges/details?hash=c8996ba6-b085-4306-832d-096267e603ed_2)

# 题目
- 名称： Banmabanma
- 编号： GFSJ0006
- 难度:1
- 题目来源：`poxlove3`
- 题目描述：
`你成功的解出了来了灯谜，小鱼一脸的意想不到“没想到你懂得这么多啊！” 你心里面有点小得意，“那可不是，论学习我没你成绩好轮别的我知道的可不比你少，走我们去看看下一个” 你们继续走，看到前面也是热热闹闹的，同样的大红灯笼高高挂起，旁边呢好多人叽叽喳喳说个不停。你一看 大灯笼，上面还是一对字符，你正冥思苦想呢，小鱼神秘一笑，对你说道，我知道这个的答案是什么了`

- 题目附件:
`oknqdbqmoq{kag_tmhq_xqmdzqp_omqemd_qzodkbfuaz}`


# 题解
- 从题目【Caesar】可以猜出，此题应该是一个 `Caesar 密码` 的加解密问题。 
- **凯撒密码**是古典密码学中最经典的加密算法之一。其加密原理非常简单，就是对字母进行一定量的偏移（非字母原样输出），这个偏移量便是**密钥**。比如： `abc` 经过 `1` 的偏移量加密后得到 `bcd`， 经过 `2` 的偏移量加密后得到 `cde`，经过 `25` 的偏移量之后得到 `zab` 。所以，凯撒加密最多有 25 个加密结果。
- 但是从这道题目给出的信息中，很难判断密钥（偏移量）应该是多少
- 索性干脆输出密钥为 `1 ~ 25` 的所有密文，进行暴力破解。
- 密钥为 `1 ~ 25` 的密文集：
	`
	plorecrnpr{lbh_unir_yrnearq_pnrfne_rapelcgvba}
	qmpsfdsoqs{mci_vojs_zsofbsr_qosgof_sbqfmdhwcb}
	rnqtgetprt{ndj_wpkt_atpgcts_rpthpg_tcrgneixdc}
	soruhfuqsu{oek_xqlu_buqhdut_squiqh_udshofjyed}
	tpsvigvrtv{pfl_yrmv_cvrievu_trvjri_vetipgkzfe}
	uqtwjhwsuw{qgm_zsnw_dwsjfwv_uswksj_wfujqhlagf}
	vruxkixtvx{rhn_atox_extkgxw_vtxltk_xgvkrimbhg}
	wsvyljyuwy{sio_bupy_fyulhyx_wuymul_yhwlsjncih}
	xtwzmkzvxz{tjp_cvqz_gzvmizy_xvznvm_zixmtkodji}
	yuxanlawya{ukq_dwra_hawnjaz_ywaown_ajynulpekj}
	zvybombxzb{vlr_exsb_ibxokba_zxbpxo_bkzovmqflk}
	awzcpncyac{wms_fytc_jcyplcb_aycqyp_clapwnrgml}
	bxadqodzbd{xnt_gzud_kdzqmdc_bzdrzq_dmbqxoshnm}
	cyberpeace{you_have_learned_caesar_encryption}
	dzcfsqfbdf{zpv_ibwf_mfbsofe_dbftbs_fodszqujpo}
	eadgtrgceg{aqw_jcxg_ngctpgf_ecguct_gpetarvkqp}
	fbehushdfh{brx_kdyh_ohduqhg_fdhvdu_hqfubswlrq}
	gcfivtiegi{csy_lezi_pievrih_geiwev_irgvctxmsr}
	hdgjwujfhj{dtz_mfaj_qjfwsji_hfjxfw_jshwduynts}
	iehkxvkgik{eua_ngbk_rkgxtkj_igkygx_ktixevzout}
	jfilywlhjl{fvb_ohcl_slhyulk_jhlzhy_lujyfwapvu}
	kgjmzxmikm{gwc_pidm_tmizvml_kimaiz_mvkzgxbqwv}
	lhknaynjln{hxd_qjen_unjawnm_ljnbja_nwlahycrxw}
	milobzokmo{iye_rkfo_vokbxon_mkockb_oxmbizdsyx}
	njmpcaplnp{jzf_slgp_wplcypo_nlpdlc_pyncjaetzy}
	oknqdbqmoq{kag_tmhq_xqmdzqp_omqemd_qzodkbfuaz}
		`
- 暴力尝试，得到 `flag` 为：`cyberpeace{you_have_learned_caesar_encryption}`

- ![在这里插入图片描述](https://img-blog.csdnimg.cn/dda91f27b78a47dd9178737a0aa61044.png)


# 附：生成密文的代码

```java
class Solution {

    public static void main(String[] args) {
        String input = "oknqdbqmoq{kag_tmhq_xqmdzqp_omqemd_qzodkbfuaz}";
        char[] chars = input.toCharArray();
        for (int i = 1; i <= 26; i++) {	// 等于 0 或者 26 意味着含自身
            StringBuilder builder = new StringBuilder();
            for (char aChar : chars) {
                if (aChar > 'z' || aChar < 'a') {
                    builder.append(aChar);
                    continue;
                }
                builder.append(caesar(aChar, i));
            }

            System.out.println(builder);
        }
    }

    private static char caesar(char c, int offset) {
        return (char) ((c + offset - 97 ) % 26 + 97);
    }
}
```
