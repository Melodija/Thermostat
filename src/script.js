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


  $("#current-city-btn").click(function() {
    var city = $('#current-city').val()
    $.get('http://api.wunderground.com/api/f26c2b4e79b8e1fc/conditions/q/UK/'+city+'.json', function(data) {
      $('#weather').html(data.current_observation.temp_c + '&deg;c');
    });
  });
});

var displayTemp = function() {
  $('#temperature').html(thermostat.temperature() + '&deg;c');
};

var PSMStatus = function() {
  $('#psm-display').text(function() {
    if(thermostat.isPSMOn()) {
      return "Power Saving Mode: On";
    }
    return "Power Saving Mode: Off";
  });
};

var updateColour = function() {
  $('#display-panel').css("background-color", thermostat.display());
};
