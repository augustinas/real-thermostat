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

  it('decreases the temperature on button click', function() {
    $('#down').trigger('click');
    expect('#temperature').toContainText('19°C');
  });

  it('resets the temperature on button click', function() {
    $('#down').trigger('click');
    $('#down').trigger('click');
    expect('#temperature').toContainText('18°C');
    $('#reset').trigger('click');
    expect('#temperature').toContainText('20°C');
  });

  it('has power saving checkbox checked when loaded', function() {
    expect('#powersaving').toBeChecked();
  });
});
