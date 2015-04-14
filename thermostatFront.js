var thermostat = new Thermostat();
document.getElementById('temperature').innerHTML = thermostat.temp + "°C";
document.getElementById('up').addEventListener('click', function() {
  thermostat.increaseTemp();
  document.getElementById('temperature').innerHTML = thermostat.temp + "°C";
});
document.getElementById('down').addEventListener('click', function() {
  thermostat.decreaseTemp();
  document.getElementById('temperature').innerHTML = thermostat.temp + "°C";
});
