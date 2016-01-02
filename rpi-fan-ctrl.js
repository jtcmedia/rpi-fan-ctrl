/**
 *
 * Created by jasonc on 1/2/2016.
 */
var rpio = require('rpio');

// Fan must be connected to pin 12, GPIO18
rpio.setFunction(12, rpio.PWM);

rpio.pwmSetClockDivider(64); /* Set PWM refresh rate to 300kHz */

rpio.pwmSetRange(12, 1024);
rpio.pwmSetData(12, 512);