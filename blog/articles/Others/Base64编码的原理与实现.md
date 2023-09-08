base64 编码的原理



Hello, World!

PS: 逗号后面有个空格。

1. 分组。将字符串分为 3 个字符一组，最后一组不够三个的用 `=` 补充

   Hel	lo,	 Wo	rld	!==

2. 将每组的每个字符转换为对应的 ASCII 编码

   72		101	  108	

   108	111		44	

   32		87		111	

   114	108		100	

   33		=			=

3. 将 ASCII 编码转为对应的 8 位二进制

   01001000 01100101 01101100 

   01101100 01101111 00101100 

   00100000 01010111 01101111 

   01110010 01101100 01100100 

   00100001 =				  =

4. 将 8 位二进制码重新组合，每组的 8 * 3 个二进制数字组成 6 * 4 形式

   010010 000110 010101 101100

   011011 000110 111100 101100 

   001000 000101 011101 101111 

   011100 100110 110001 100100 

   001000 01 =				  =

5. 将 6 位二进制，依次转为十进制

   18	6	21	44	27	6	60	44	8	5	29	47	28	38	49	36	8	16	=	=

6. 这些数字依次对应 BASE64 的 64 位基本字符（`A-Z a-z 0-9 + /`）

   S	G	V	s	b	G	8	s	I	F	d	v	c	m	x	k	I	Q	=	=



```py

## 代码中关于占位符没有处理

BASE_CHARS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 
              'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 
              'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 
              'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 
              'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 
              'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 
              'w', 'x', 'y', 'z', '0', '1', '2', '3', 
              '4', '5', '6', '7', '8', '9', '+', '/']

def split_string(string, group_size = 6):
    return [string[i:i+group_size] for i in range(0, len(string), group_size)]

def encode(text):
    binary_str = ''.join(format(ord(c), '08b') for c in text)
    # print(binary_str)
    str = split_string(binary_str, 6)
    result = ''
    right_padding = ''
    i = 0
    for a in str:
        i = i+1
        # print(i % 4)
        if(i % 4 == 2): right_padding = "=="
        if(i % 4 == 1): right_padding = "="
        c = int(format(a, '06'), 2)
        cc = BASE_CHARS[c]
        result += cc
    result += right_padding
    return result

def decode(text):
    result = ''
    text = text.replace('=', '')
    binary_str = ''.join("{:06d}".format(int(bin(BASE_CHARS.index(t))[2:])) for t in text)
    print(binary_str)
    str = split_string(binary_str, 8)
    for a in str:
        c = chr(int(format(a, '08'), 2))
        result += c
    ...
    return result



###################################

text = "Hello, World!"
result = encode(text)
print(result)

result = decode(result)
print(result)
```

