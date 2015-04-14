var Thermostat = function() {
  // Note to self:
  // ‘this’ keyword gives us an equivalent to
  // a public instance variable.
  this.temp = 20;
};

Thermostat.prototype.increaseTemp = function() {
  this.temp++;
};

Thermostat.prototype.decreaseTemp = function() {
  this.temp--;
};
