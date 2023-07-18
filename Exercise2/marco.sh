#!/bin/bash
#marco函数，将当前文件夹的目录保存到环境变量MARCO_DIR
marco(){
    if [ -z "$1" ] || [ "$1" = "-y" ]; then #当参数为空时，默认为-y
            export MARCO_DIR=$(pwd)  #参数为-y就保存目录
            echo "DIR has been saved"
    elif [ "$1" = "-n" ]; then 
            unset MARCO_DIR          #参数为-n就清楚保存的目录
            echo "DIR has been cleared"
    else
            echo "Invalid argument!"
    fi
}
polo(){
    if [ -n "$MARCO_DIR" ]; then #if的-n 是检查字符串 MARCO_DIR 是否为空的
        cd "$MARCO_DIR"
    else
        echo "The MARCO_DIR is empty!"
    fi
}
