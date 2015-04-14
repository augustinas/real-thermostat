describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees CELSIUS', function() {
    expect(thermostat.temp).toEqual(20);
  });

  it('increases the temperature upon request', function() {
    thermostat.increaseTemp();
    expect(thermostat.temp).toEqual(21);
  });

  it('decreases the temperature upon request', function() {
    thermostat.decreaseTemp();
    expect(thermostat.temp).toEqual(19);
  });

  it('cannot go below 10 degrees CELSIUS', function() {
    for(i = thermostat.temp; i >= 10; i--) {
      thermostat.decreaseTemp();
    }
    expect(thermostat.temp).toEqual(10);
  });
});
