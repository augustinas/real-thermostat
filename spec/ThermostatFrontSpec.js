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

  it('power saving checkbox controls maximum temperature', function() {
    for(i = thermostat.temp; i <= 26; i++) {
      $('#up').trigger('click');
    }
    expect('#temperature').toContainText('25°C');
    $('#powersaving').trigger('click');
    expect('#powersaving').not.toBeChecked();

    for(i = thermostat.temp; i <= 33; i++) {
      $('#up').trigger('click');
    }
    expect('#temperature').toContainText('32°C');
    $('#powersaving').trigger('click');
    expect('#powersaving').toBeChecked();
  });

  it('changes text colour depending on temperature', function() {
    expect('#temperature').toHaveAttr('style', 'color: orange;');
//    expect($('#temperature').css('color')).toEqual('rgb(255, 165, 0)');
//    expect('#temperature').toHaveCss({color: 'rgb(255, 165, 0)'});

    for(i = thermostat.temp; i >= 17; i--) {
      $('#down').trigger('click');
    }
    expect('#temperature').toHaveAttr('style', 'color: green;');
//    expect($('#temperature').css('color')).toEqual('rgb(0, 128, 0)');
//    expect('#temperature').toHaveCss({color: 'rgb(0, 128, 0)'});

    $('#reset').trigger('click');
    for(i = thermostat.temp; i <= 25; i++) {
      $('#up').trigger('click');
    }
    expect('#temperature').toHaveAttr('style', 'color: red;');
//    expect($('#temperature').css('color')).toEqual('rgb(255, 0, 0)');
//    expect('#temperature').toHaveCss({color: 'rgb(255, 0, 0)'});
  });
});
