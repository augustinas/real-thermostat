describe('Thermostat Front-End', function() {

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
  });

  it('contains text 20°C when loaded', function() {
    expect('#temperature').toContainText('20°C');
  });

  it('increases the temperature on button click', function() {
    $('#up').trigger('click');
    expect('#temperature').toContainText('21°C');
  });

});
