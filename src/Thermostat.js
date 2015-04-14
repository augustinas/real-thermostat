var Thermostat = function() {
  // Note to self:
  // ‘this’ keyword gives us an equivalent to
  // a public instance variable.
  this.temp = 20;
  this.powerSaving = true;
};

Thermostat.prototype.increaseTemp = function() {
  this.temp++;
};

Thermostat.prototype.decreaseTemp = function() {
  if(this.temp > 10) {
    this.temp--;
  } else {
    console.log('Error, temperature cannot be decreased below 10°C');
  }
};
