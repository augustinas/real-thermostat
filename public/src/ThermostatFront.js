var thermostat = new Thermostat();
var updatePage = function() {
  document.getElementById('temperature').innerHTML = thermostat.temp + '°C';
  if(thermostat.temp < 18) {
    document.getElementById('temperature').style.color = 'green';
  } else if(thermostat.temp < 25) {
    document.getElementById('temperature').style.color = 'orange';
  } else {
    document.getElementById('temperature').style.color = 'red';
  }
};

updatePage();

document.getElementById('up').addEventListener('click', function() {
  thermostat.increaseTemp();
  updatePage();
});

document.getElementById('down').addEventListener('click', function() {
  thermostat.decreaseTemp();
  updatePage();
});

document.getElementById('reset').addEventListener('click', function() {
  thermostat.resetTemp();
  updatePage();
});

document.getElementById('powersaving').addEventListener('click', function() {
  thermostat.powerSaving = !thermostat.powerSaving;
});
