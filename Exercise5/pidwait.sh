#!/bin/bash

pidwait() {
    local pid=$1
    while kill -0 "$pid" >/dev/null 2>&1; do
        sleep 1
        echo "wait "
    done
}

# 启动 sleep 60 进程，并将其放入后台运行
echo "start sleep 5 &"
sleep 5 &

# 获取 sleep 60 进程的 PID
pid=$!

# 等待 sleep 60 进程结束
pidwait "$pid"
echo "sleep 5 done"

# 当 sleep 60 进程结束后，执行 ls 命令
ls

