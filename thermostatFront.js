var thermostat = new Thermostat();
var updateView = function() {
  document.getElementById('temperature').innerHTML = thermostat.temp + "°C";
  if(thermostat.temp < 18) {
    document.getElementById('temperature').style.color = 'green';
  } else if(thermostat.temp < 25) {
    document.getElementById('temperature').style.color = 'orange';
  } else {
    document.getElementById('temperature').style.color = 'red';
  }
};

updateView();
document.getElementById('up').addEventListener('click', function() {
  thermostat.increaseTemp();
  updateView();
});

document.getElementById('down').addEventListener('click', function() {
  thermostat.decreaseTemp();
  updateView();
});

document.getElementById('reset').addEventListener('click', function() {
  thermostat.resetTemp();
  updateView();
});

document.getElementById('powerSaving').addEventListener('click', function() {
  thermostat.powerSaving = !thermostat.powerSaving;
});
