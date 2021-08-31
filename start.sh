#!/bin/sh

if [ -n "$1" ]; then
    echo "准备连接设备: $1";
else
    echo "请指定要连接的设备";
    return
fi
adb connect "$1";
adb wait-for-device
echo "完成连接设备: $1";

echo "启动美团外卖APP";
frida  -U -f com.sankuai.meituan.takeoutnew --no-pause -e 0 -q

echo "等待大众点评APP完成启动";
sleep 20S

echo "开始运行arida";
uvicorn main:app --host 0.0.0.0 --reload