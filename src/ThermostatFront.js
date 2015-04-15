var thermostat = new Thermostat();
var updatePage = function() {
document.getElementById('temperature').innerHTML = thermostat.temp + '°C';
};

updatePage();

document.getElementById('up').addEventListener('click', function() {
  thermostat.increaseTemp();
  updatePage();
});