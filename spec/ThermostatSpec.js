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

  it('has a power saving mode on by default', function() {
    expect(thermostat.powerSaving).toBe(true);
  });

  it('cannot go above 25 degrees CELSIUS if power saving is on', function() {
    thermostat.powerSaving = true;
    for(i = thermostat.temp; i <= 25; i++) {
      thermostat.increaseTemp();
    }
    expect(thermostat.temp).toEqual(25);
  });

  it('cannot go above 32 degrees CELSIUS if power saving is off', function() {
    thermostat.powerSaving = false;
    for(i = thermostat.temp; i <= 32; i++) {
      thermostat.increaseTemp();
    }
    expect(thermostat.temp).toEqual(32);
  });
});
