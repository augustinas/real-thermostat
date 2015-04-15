describe('Thermostat Front-End', function() {

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
  });

  it('contains text 20°C when loaded', function() {
    expect('#temperature').toContainText('20°C');
  });

});
