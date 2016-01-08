# rpi-fan-ctrl

Raspberry Pi Fan Control. This program controls a case mounted RPi Fan. Fan is pwm'd based on current temperature of the CPU.

## Requirements
Make sure you have `node` and `npm` installed on your Raspberry Pi.

You must have the pi-blaster daemon ([pi-blaster](https://github.com/jtcmedia/pi-blaster)) installed and running.

## Instructions

1. Clone the repository in your home directory.
2. run `npm install` to install dependencies.
3. run `crontab -e` to add a cron job for your user. Enter:
    `* * * * * ~/rpi-fan-ctrl/test-running.sh`
4. save and exit. Script will check that the fan control is running every minute.

## Contributing

Contributions welcome. Please submit all pull requests against the master branch. If your pull request contains JavaScript patches or features, you should include relevant unit tests. Thanks!

## Author

jtcmedia < jtcmedia@users.noreply.github.com>

## License

 - **MIT** : http://opensource.org/licenses/MIT
