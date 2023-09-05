1. 一键安装最新版

   curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun

2. `Failed to download metadata for repo 'appstream`

   原因： 

   在2022年1月31日，CentOS团队终于从官方镜像中移除CentOS 8的所有包。

   CentOS 8已于2021年12月31日寿终正寝，但软件包仍在官方镜像上保留了一段时间。现在他们被转移到[https://vault.centos.org](https://vault.centos.org/)

3. cd /etc/yum.repos.d

   vi CentOS-Linux-BaseOS.repo

[baseos]
name=CentOS Linux $releasever - BaseOS
#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=BaseOS&infra=$infra
#baseurl=http://mirror.centos.org/$contentdir/$releasever/BaseOS/$basearch/os/
baseurl=https://vault.centos.org/centos/$releasever/BaseOS/$basearch/os/
gpgcheck=1
enabled=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-centosofficial





vi CentOS-Linux-AppStream.repo

[appstream]
name=CentOS Linux $releasever - AppStream
#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=AppStream&infra=$infra
#baseurl=http://mirror.centos.org/$contentdir/$releasever/AppStream/$basearch/os/
baseurl=https://vault.centos.org/centos/$releasever/AppStream/$basearch/os/ 
gpgcheck=1
enabled=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-centosofficial





yum clean all



重新安装

3. Error: 
    Problem 1: problem with installed package podman-3.3.1-9.module_el8.5.0+988+b1f0b741.x86_64

   Problem 2: problem with installed package buildah-1.22.3-2.module_el8.5.0+911+f19012f9.x86_64

   Problem 3: problem with installed package containers-common-2:1-2.module_el8.5.0+890+6b136101.noarch

   > sudo yum erase podman buildah

4. 再安装，就好了

   