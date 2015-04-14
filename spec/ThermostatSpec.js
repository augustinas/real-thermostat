describe('Thermostat', function() {
  var thermostat = new Thermostat();

  it('starts at 20 degrees CELSIUS', function() {
    expect(thermostat.temp).toEqual(20);
  });
});
