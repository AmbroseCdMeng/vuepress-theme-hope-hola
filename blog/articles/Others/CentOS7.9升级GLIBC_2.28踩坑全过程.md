# CentOS 7.9 升级 GLIBC 2.28 踩坑全过程

升级 `GLIBC` 版本

```
wget  https://mirror.bjtu.edu.cn/gnu/libc/glibc-2.28.tar.xz
tar -xf glibc-2.28.tar.xz -C /usr/local/
cd /usr/local/glibc-2.28/
mkdir build
cd build/
../configure --prefix=/usr/local/glibc-2.28
```

- 遇到 make 版本过低或者 gcc 版本过低，按照下面的步骤升级 `make` 或者 `gcc` 即可。

  `checking` 日志中为 `no` 的那一行可以看到是 `gcc` 还是 `make` 版本过低

  ```
  checking if gcc is sufficient to build libc... no
  checking for nm... nm
  checking for python3... python3
  configure: error: 
  *** These critical programs are missing or too old: bison compiler
  *** Check the INSTALL file for required versions.
  ```

- 升级 `make` 版本

  1. `make -v` 查看当前 `make` 版本

  2. 下载较新的 `make` 包（*http://ftp.gnu.org/pub/gnu/make/*），以 `4.3` 为例

     `wget http://ftp.gnu.org/pub/gnu/make/make-4.3.tar.gz`

  3. `tar -zxvf make-4.3.tar.gz` 解压

  4. `cd make-4.3 && ./configure --prefix=/usr/local/make-4.3` 指定目录

  5. 编译安装

     - `type make`
     - `make check`
     - `make install`

  6. 检验安装结果

     - `make -v` 如果显示版本为 `4.3` ，则安装成功

  7. 如果 `make install ` 没有报错，但 `make -v` 的结果还是旧版本，则可能是环境变量的问题

  8. 验证新版本安装。

     `/usr/local/make-4.3/bin/make -v` 指定目录运行新版 `make` 查看版本是否最新

  9. 如是，按照以下步骤修改环境变量，如否，则可能安装失败

     1. `whereid make` 查找 `make` 命令所在目录（默认是在 `/usr/bin` 下）
     2. `cd /usr/bin`
     3. `mv make make.bak` 备份原 `make` 文件
     4. `ln -sv /usr/local/make-4.3/bin/make /usr/bin/make` 创建新 `make` 文件，指向上面安装的新版 `make` 所在位置

  10. 再次验证 `make -v`  ，成功。

- 升级 `gcc` 版本

  1. `gcc -v` 查看当前 `gcc` 版本

  2. 下载较新的 `gcc` 包（http://ftp.gnu.org/gnu/gcc/），以 `8.2.0` 为例

     `wget http://ftp.gnu.org/pub/gnu/make/make-4.3.tar.gz`

  3. `tar -zxvf gcc-8.2.0.tar.gz` 解压

  4. `cd gcc-8.2.0 && ./contrib/download_prerequisites` 下载依赖

     可能遇到的报错：

     - ` Cannot verify integrity of possibly corrupted`

       ```
       [root@iZwz92d94t8mb03s9z327hZ gcc-8.2.0]# ./contrib/download_prerequisites
       gmp-6.1.0.tar.bz2: 失败
       sha512sum: 警告：1 个校验和不匹配
       error: Cannot verify integrity of possibly corrupted file gmp-6.1.0.tar.bz2
       ```

       `gmp` 可能是经过改动导致校验不通过，删掉重新下载或者关闭校验

  5. `mkdir build && cd build` 新建一个编译目录

  6. `../configure -enable-checking=release -enable-languages=c,c++ -disable-multilib --prefix=/usr/local/gcc-8.2.0` 配置安装目录，指定支持语言

     可能遇到的报错：

     - `checking for g++... no` 

       ```
       checking for g++... no
       checking for c++... no
       checking for gpp... no
       checking for aCC... no
       checking for CC... no
       checking for cxx... no
       checking for cc++... no
       checking for cl.exe... no
       checking for FCC... no
       checking for KCC... no
       checking for RCC... no
       checking for xlC_r... no
       checking for xlC... no
       checking whether we are using the GNU C++ compiler... no
       checking whether g++ accepts -g... no
       checking whether g++ accepts -static-libstdc++ -static-libgcc... no
       checking for gnatbind... no
       checking for gnatmake... no
       checking whether compiler driver understands Ada... no
       checking how to compare bootstrapped objects... cmp --ignore-initial=16 $$f1 $$f2
       checking whether g++ supports C++11 features by default... no
       checking whether g++ supports C++11 features with -std=gnu++11... no
       checking whether g++ supports C++11 features with -std=gnu++0x... no
       checking whether g++ supports C++11 features with -std=c++11... no
       checking whether g++ supports C++11 features with +std=c++11... no
       checking whether g++ supports C++11 features with -h std=c++11... no
       checking whether g++ supports C++11 features with -std=c++0x... no
       checking whether g++ supports C++11 features with +std=c++0x... no
       checking whether g++ supports C++11 features with -h std=c++0x... no
       configure: error: *** A compiler with support for C++11 language features is required.
       ```

       缺少了 `c++` 编译器，`yum install gcc gcc-c++` 安装。

     - `Building GCC requires GMP 4.2+, MPFR 3.1.0+ and MPC 0.8.0+`

       ```
       checking for the correct version of gmp.h... no
       configure: error: Building GCC requires GMP 4.2+, MPFR 3.1.0+ and MPC 0.8.0+.
       Try the --with-gmp, --with-mpfr and/or --with-mpc options to specify
       their locations.  Source code for these libraries can be found at
       their respective hosting sites as well as at
       https://gcc.gnu.org/pub/gcc/infrastructure/.  See also
       http://gcc.gnu.org/install/prerequisites.html for additional info.  If
       you obtained GMP, MPFR and/or MPC from a vendor distribution package,
       make sure that you have installed both the libraries and the header
       files.  They may be located in separate packages.
       ```

       缺少了 `GMP`、`MPFR`、`MPC` 包，说明上面依赖安装失败，可以第 4 步中依赖拉取失败，重新运行 `./contrib/download_prerequisites` 拉取

  7. `make` 编译

     可能遇到的错误：

     - `g++ 编译器内部错误`

       ```
       g++: 编译器内部错误：已杀死(程序 cc1plus)
       Please submit a full bug report,
       with preprocessed source if appropriate.
       See <http://bugzilla.redhat.com/bugzilla> for instructions.
       make[3]: *** [Makefile:1142：gimple-match.o] 错误 4
       make[3]: 离开目录“/usr/local/gcc-11.2.0/build/gcc”
       make[2]: *** [Makefile:4788：all-stage1-gcc] 错误 2
       make[2]: 离开目录“/usr/local/gcc-11.2.0/build”
       make[1]: *** [Makefile:28380：stage1-bubble] 错误 2
       make[1]: 离开目录“/usr/local/gcc-11.2.0/build”
       make: *** [Makefile:1009：all] 错误 2
       ```

       内存不足导致，按如下步骤交换分区：

       ```
       sudo dd if=/dev/zero of=/swapfile bs=64M count=16
       sudo mkswap /swapfile
       sudo swapon /swapfile
       ```

     - `error: ‘uint8_t’ does not name a type;`

       ```
       ../../../../../libstdc++-v3/src/c++11/cow-stdexcept.cc:209:8: error: ‘uint8_t’ does not name a type; did you mean ‘u_int8_t’?
        extern uint8_t _ITM_RU1(const uint8_t *p)
               ^~~~~~~
               u_int8_t
       ../../../../../libstdc++-v3/src/c++11/cow-stdexcept.cc:211:8: error: ‘uint16_t’ does not name a type; did you mean ‘u_int16_t’?
        extern uint16_t _ITM_RU2(const uint16_t *p)
               ^~~~~~~~
               u_int16_t
       ../../../../../libstdc++-v3/src/c++11/cow-stdexcept.cc:213:8: error: ‘uint32_t’ does not name a type; did you mean ‘u_int32_t’?
        extern uint32_t _ITM_RU4(const uint32_t *p)
       ```

       版本不匹配导致的脚本语法错误，可以降低 `gcc` 的版本重试

  8. `make install` 安装

  9. `gcc -v` 验证当前版本