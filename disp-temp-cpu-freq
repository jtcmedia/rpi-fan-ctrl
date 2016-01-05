#!/bin/bash
cpuTemp0=$(cat /sys/class/thermal/thermal_zone0/temp)
cpuTemp1=$(($cpuTemp0/1000))
cpuTemp2=$(($cpuTemp0/100))
cpuTempM=$(($cpuTemp2 % $cpuTemp1))

cpuFreq0=$(cat /sys/devices/system/cpu/cpu0/cpufreq/scaling_cur_freq)
cpuFreq=$(($cpuFreq0/1000))

echo CPU temp"="$cpuTemp1"."$cpuTempM"'C"
echo CPU freq"="$cpuFreq"Hz" 
