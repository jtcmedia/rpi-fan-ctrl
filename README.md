# rpi-fan-ctrl

Raspberry Pi Fan Control. This program controls a case mounted RPi Fan. Fan is pwm'd based on current temperature of the CPU.

![nodei.co](https://nodei.co/npm/rpi-fan-ctrl.png?downloads=true&downloadRank=true&stars=true)

![](https://david-dm.org/jtcmedia/rpi-fan-ctrl/status.svg)
![](https://david-dm.org/jtcmedia/rpi-fan-ctrl/dev-status.svg)

## Features

## Requirements
This program assumes you have installed quick2wire to allow a regular user account to access the GPIO ports:
```
git clone git://github.com/quick2wire/quick2wire-gpio-admin.git
cd quick2wire-gpio-admin
make
sudo make install
sudo adduser $USER gpio
```

## Scripts

 - **npm run readme** : `node ./node_modules/.bin/node-readme`

## Dependencies

Package | Version | Dev
--- |:---:|:---:
[rpio](https://www.npmjs.com/package/rpio) | 0.6.x | ✖
[node-readme](https://www.npmjs.com/package/node-readme) | ^0.1.9 | ✔


## Contributing

Contributions welcome; Please submit all pull requests against the master branch. If your pull request contains JavaScript patches or features, you should include relevant unit tests. Please check the [Contributing Guidelines](contributng.md) for more details. Thanks!

## Author

jtcmedia <jason.cumiskey@gmail.com>

## License

 - **MIT** : http://opensource.org/licenses/MIT
