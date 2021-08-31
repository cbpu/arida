FROM ubuntu:20.04

LABEL maintainer="pu_chaobo@163.com"

RUN sed -i s@/archive.ubuntu.com/@/mirrors.aliyun.com/@g /etc/apt/sources.list
RUN sed -i s@/security.ubuntu.com/@/mirrors.aliyun.com/@g /etc/apt/sources.list
RUN apt-get clean && apt-get update

RUN apt-get install -y nodejs && apt-get install -y npm
RUN apt-get install -y curl
RUN npm install -g n
RUN n stable

RUN apt-get install -y android-tools-adb android-tools-fastboot

RUN apt-get install -y python3 && apt-get install -y python3-pip

RUN apt-get install -y git-core

RUN git clone https://github.com/cbpu/hooker.git
WORKDIR hooker
RUN pip3 install -r requirements.txt

WORKDIR /
RUN git clone -b meituanwaimai https://github.com/cbpu/arida.git
WORKDIR arida
RUN pip3 install -r requirements.txt
RUN npm install @babel/core --save

EXPOSE 8000

ENV DEVICE=""
ADD start.sh start.sh
RUN chmod 777 start.sh
ENTRYPOINT ["sh","-c","/arida/start.sh $DEVICE"]