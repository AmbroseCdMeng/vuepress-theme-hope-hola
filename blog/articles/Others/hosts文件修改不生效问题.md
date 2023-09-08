hosts 文件修改不生效

1. ping 查看 ip 地址是否变更
2. ipconfig /flushdns 刷新 dns 缓存
3. hosts 文件使用系统自带的记事本打开，另存为 ANSI 格式，选择所有文件
   1. 不要用 notepad++ 之类的编辑器打开，默认会保存为 UTF8 格式，系统无法识别
   2. 打开后缀名显示，不要误存为 txt 后缀，hosts 文件是没有后缀的