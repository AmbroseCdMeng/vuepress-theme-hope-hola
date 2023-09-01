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

> 题目来源于[【攻防世界】]( https://adworld.xctf.org.cn/challenges/list)

# XCTF-GFSJ0522-Crypto-难度1-base64
- 名称： base64
- 编号： GFSJ0522
- 难度:1
- 题目来源：`poxlove3`
- 题目描述：
	`元宵节灯谜是一种古老的传统民间观灯猜谜的习俗。 因为谜语能启迪智慧又饶有兴趣，灯谜增添节日气氛，是一项很有趣的活动。 你也很喜欢这个游戏，这不，今年元宵节，心里有个黑客梦的你，约上你青梅竹马的好伙伴小鱼， 来到了cyberpeace的攻防世界猜谜大会，也想着一展身手。
	你们一起来到了小孩子叽叽喳喳吵吵闹闹的地方，你俩抬头一看，上面的大红灯笼上写着一些奇奇怪怪的 字符串，小鱼正纳闷呢，你神秘一笑，我知道这是什么了。`
	<!-- more -->
- 题目附件:
	`Y3liZXJwZWFjZXtXZWxjb21lX3RvX25ld19Xb3JsZCF9`

# 题解
- 这个题实际上是没有任何难度的，从题目【Base64】就可以猜到，附件中的字符串应该是 `Base64` 转码之后的内容，随便找个`在线解码` 网站，就可以得到 `flag` ： `cyberpeace{Welcome_to_new_World!}`
	![](./images/XCTF-GFSJ0522-Crypto-%E9%9A%BE%E5%BA%A61-base64/e32042f7e13e4fe6a89bc1991d66bd34.png)

# 扩展
> 这里主要聊一下 `Base64` 的原理。

说到 `Base64`，就不得不说一个最让人觉得恶心的现象——**乱码**（想必都不陌生吧）。
- `?  M<+    7 Intel(R) `
- `   鸀R執    	`
- `锟斤拷·烫烫烫~`

> 乱码究竟是如何产生的？

其原因无非就一句话： 某种编码下对应的二进制符号在另一种编码下没有对应的字符，或者对应另一种字符。

举个例子： 假设 `BIG5` 编码下， `你` 对应的二进制为 `00001111`， `好` 对应的二进制为 `01110011`， 那么文字`你好`对应的二进制就为`0000111101110011`，而当用 `GBK2312`编码读取这两个字时，`00001111`对应的是`锟`，`01110011`对应的是空字符，那么读取到的内容就会变成 `锟`，也就是**乱码**。

> `Base64` 和乱码有什么关系呢？

`Base64` 其实并不能称之为加/解密算法，准确来说，它应该是一个**可读性算法**。它的目的就是防止出现乱码，提升可读性。
`Base64` 是由 `A-Z`、`a-z`、`0-9` 这 `62` 个数字和字母，加上 `+` 和 `/` 这两个符号，共组成的 `64` 位基础符号。无论是哪种编码下的什么内容，经过 `Base64` 转换之后，都只会出现在这 `64` 个字符中（还有一个 `=` 比较特殊，不属于 `Base64` 但有时候也会出现，它是填充符号），不会出现其他的字符，也就不会出现乱码。

> `Base64` 的原理是什么？是如何保证转码之后的信息在这`64` 个字符之内的？

大多数计算机种，1 个字节占 8 个 bit位，而 `Base64` 则是将每 3 个字节（也就是 3 * 8 = 24  bit）拆分为 4 个 6 bit 的字节，如果要拆分的不足 3 个字节，则用填充符 `=` 来表示，也就是说，你最多可以看到两个 `=` 且一定在末尾。

6 bit 也就是说最大能表示的值为： `0011 1111`， 也就是 64。 这就是为什么能保证其转码结果一定在 64 个字符内的原因，因为最大值不可能大于 64。

> 就用上面的 `flag` 举个例子吧，假设已知 `flag` 是 `cyberpeace{Welcome_to_new_World!}`，来计算他的 `Base64` 转码之后的值

- 源字符串：`cyberpeace{Welcome_to_new_World!}`
- ASCII 码：`99 121 98 101 114 112 101 97 99 101 123 87 101 108 99 111 109 101 95 116 111 95 110 101 119 95 87 111 114 108 100 33 125`	(空格仅仅是为了看起来方便)
- 二进制码：<font color=blue>01100011 01111001 01100010</font> 01100101 01110010 01110000 01100101 01100001 01100011 01100101 01111011 01010111 01100101 01101100 01100011 01101111 01101101 01100101 01011111 01110100 01101111 01011111 01101110 01100101 01110111 01011111 01010111 01101111 01110010 01101100 01100100 00100001 01111101	( 每个字节 8 个 bit 位)
- Base64：00<font color=blue>011000</font> 00<font color=blue>110111</font> 00<font color=blue>100101 </font>00<font color=blue>100010</font> 00011001 00010111 00001001 00110000 00011001 00010110 00000101 00100011 00011001 00010111 00101101 00010111 00011001 00010110 00110001 00100011 00011011 00110110 00110101 00100101 00010111 00110111 00010001 00101111 00010111 00110110 00111001 00100101 00011101 00110101 00111101 00010111 00011011 00110111 00001001 00101100 00011001 00000010 00000101 00111101	( 每 3 * 8 个 bit， 拆分成 4 * 6 个bit，高位补 2 个 0 凑够 8 bit)
- 转 10 进制：`24 55 37 34 25 23 9 48 25 22 5 35 25 23 45 23 25 22 49 35 27 54 53 37 23 55 17 47 23 54 57 37 29 53 61 23 27 55 9 44 25 2 5 61 `- 转 `Base64`编码：`Y3liZXJwZWFjZXtXZWxjb21lX3RvX25ld19Xb3JsZCF9`	(`Base64` 编码表中，从 0 ~ 63 依次代表：A~Z, a~z, 0~9, +, /）（因为源字符串 `cyberpeace{Welcome_to_new_World!}` 的长度为 `33`，恰好是 `3` 的倍数，被 `Base64` 组合成了 33 / 3 * 4 = 44 个字符，所以末尾也不需要 `=` 补位）
# 附上测试时使用的转码代码（为了输出整齐，方便观看，有多个冗余的代码块）

```java

class Solution {

    public static void main(String[] args) {
        String input = "cyberpeace{Welcome_to_new_World!}";
        System.out.println(input.length());
        // String input = "Y3liZXJwZWFjZXtXZWxjb21lX3RvX25ld19Xb3JsZCF9";   // Base64
        char[] chars = input.toCharArray();
        StringBuilder builder = new StringBuilder();
        for (char aChar : chars) {
            int n = aChar;
            String binaryString = Integer.toBinaryString(n);
            String str = String.format("%8s", binaryString).replace(" ", "0");
            builder.append(str);
            System.out.print(str + " ");
        }

        System.out.println();


        int startIndex = 0;
        /* 以下 三个 while 循环代码是几乎完全一样的，只是输出的内容不一样，目的是为了对比看起来方便 */
        while (builder.length() - startIndex >= 6){
            String substring = builder.substring(startIndex, Math.min(startIndex + 6, builder.length()));
            String replace = String.format("%8s", substring).replace(" ", "0");
            startIndex = startIndex + 6;
            System.out.print(replace + " ");
            int num = Integer.parseUnsignedInt(replace, 2);
            char c = (char) num;
            // System.out.print(c);
        }

        System.out.println();

        startIndex = 0;
        while (builder.length() - startIndex >= 6){
            String substring = builder.substring(startIndex, Math.min(startIndex + 6, builder.length()));
            String replace = String.format("%8s", substring).replace(" ", "0");
            startIndex = startIndex + 6;
            int num = Integer.parseUnsignedInt(replace, 2);
            char c = (char) num;
            System.out.print(num + " ");
        }

        System.out.println();

        startIndex = 0;
        while (builder.length() - startIndex >= 6){
            String substring = builder.substring(startIndex, Math.min(startIndex + 6, builder.length()));
            String replace = String.format("%8s", substring).replace(" ", "0");
            startIndex = startIndex + 6;
            int num = Integer.parseUnsignedInt(replace, 2);
            // base64  0 ~ 25: A ~ Z   26 ~ 51: a ~ z  52 ~ 61: 0 ~ 9   62: +   63: /       填充： =
            if (num <= 25){
                System.out.print((char)('A' + num));
            }
            if (num > 25 && num <= 51){
                System.out.print((char)('a' + num - 26));
            }
            if (num > 51 && num <= 61){
                System.out.print((char)('0' + num - 52));
            }
            if (num == 62){
                System.out.print("+");
            }
            if (num == 63){
                System.out.print("/");
            }
        }
        if (builder.length() - startIndex < 6 ){
            if (builder.length() - startIndex == 4) {
                System.out.print("=");
            }
            if (builder.length() - startIndex == 2){
                System.out.print("==");
            }
        }
    }
}
```

