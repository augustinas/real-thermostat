var Thermostat = function() {
  // Note to self:
  // ‘this’ keyword gives us an equivalent to
  // a public instance variable.
  this.temp = 20;
  this.powerSaving = true;
};

Thermostat.prototype.increaseTemp = function() {
  var maxTemp = this.powerSaving ? 25 : 32;
  if(this.temp < maxTemp) {
    this.temp++;
  } else {
    console.log('Error, temperature cannot be increased above ' + maxTemp + '°C');
  }
};

Thermostat.prototype.decreaseTemp = function() {
  if(this.temp > 10) {
    this.temp--;
  } else {
    console.log('Error, temperature cannot be decreased below 10°C');
  }
};

Thermostat.prototype.resetTemp = function() {
  this.temp = 20;
};
