#!/usr/bin/env python
import signal, time

def handler(signum, time):
    print("\nI got a SIGINT, but I am not stopping")


def handler_1(signum, time):
    print("\nI got a SIGQUIT, but I am not stopping")

signal.signal(signal.SIGINT, handler)
signal.signal(signal.SIGQUIT,handler_1)
i = 0
while True:
    time.sleep(.1)
    print("\r{}".format(i), end="")
    i += 1
