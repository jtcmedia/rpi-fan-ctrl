/**
 *
 * Created by jasonc on 1/2/2016.
 */
var piblaster = require('pi-blaster.js');

// Fan must be connected to pin 12, GPIO18
piblaster.setPwm(18, 0.5);

