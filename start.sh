#!/bin/sh

if [ -n "$1" ]; then
    echo "准备连接设备: $1";
else
    echo "请指定要连接的设备";
    return
fi

adb connect "$1";
uvicorn main:app --reload

