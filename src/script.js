var thermostat = new Thermostat();

$(document).ready(function() {

  displayTemp();
  updateColour();
  PSMStatus();

  $('#temp-up').click(function(){
    thermostat.increaseTemp();
    displayTemp();
    updateColour();
  });

  $('#temp-down').click(function(){
    thermostat.decreaseTemp();
    displayTemp();
    updateColour();
  });

  $('#temp-reset').click(function() {
    thermostat.reset();
    displayTemp();
    updateColour();
  });

  $('#psm-toggle').click(function() {
    thermostat.togglePSM();
    PSMStatus();
  });

});

var displayTemp = function() {
  $('h2').text(thermostat.temperature());
};

var PSMStatus = function() {
  $('p').text(function() {
    if(thermostat.isPSMOn()) {
      return "Power Saving Mode: On";
    }
    return "Power Saving Mode: Off";
  });
};

var updateColour = function() {
  $('#display-panel').css("background-color", thermostat.display());
};