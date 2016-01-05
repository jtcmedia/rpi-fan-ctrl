#!/bin/bash
# test-running.sh
#
# This script ensures that rpi-fan-ctrl.js is always
# running. Don't want situation where this system
# is on and the fan isn't cooling!!

process=rpi-fan-ctrl.js
makerun="node /home/pi/rpi-fan-ctrl/rpi-fan-ctrl.js"

if ps ax | grep -v grep | grep $process > /dev/null
	then
		exit
	else
		nice -n 10 $makerun &
	fi
exit
