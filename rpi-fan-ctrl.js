/**
 *
 * Created by jasonc on 1/2/2016.
 */
var piblaster = require('pi-blaster.js');
var fs = require('fs');
var infiniteLoop = require('infinite-loop');

var il = new infiniteLoop;

// Fan must be connected to pin 12, GPIO18
// Get Fan up and running
piblaster.setPwm(18, 1);

function adjustPWM() {
	var tempString = fs.readFileSync('/sys/class/thermal/thermal_zone0/temp', 'utf8');
	var tempC = parseInt(tempString, 10) / 1e3;
	if (tempC > 55) {
		piblaster.setPwm(18, 1);
		//console.log("temp = " + tempC);
	} else if (tempC > 45) {
		piblaster.setPwm(18, 0.75);
		//console.log("temp = " + tempC);
	} else if (tempC > 40) {
		piblaster.setPwm(18, 0.5);
		//console.log("temp = " + tempC);
	} else {
		piblaster.setPwm(18, 0.25);
		//console.log("temp = " + tempC);
	}
}

/* Add the function to il and run every 2 seconds */
il.add(adjustPWM, []);
il.setInterval(2000);
il.run();
