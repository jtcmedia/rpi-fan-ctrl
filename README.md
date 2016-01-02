# rpi-fan-ctrl
Raspberry Pi Fan Control. This program controls a case mounted RPi Fan. Fan is pwm'd based on current temperature of the CPU.
# Requirements
This script assumes you have installed quick2wire to allow a regular user account to access the GPIO ports:
```
git clone git://github.com/quick2wire/quick2wire-gpio-admin.git
cd quick2wire-gpio-admin
make
sudo make install
sudo adduser $USER gpio
```