$(document).ready(function() {
  $("#project-info").hide();
  $('#tossy-pizza').click(function() {
    $("#project-info").fadeToggle();
    $("#project-info-heading").html("Tossy Pizza");
    $('#media').html('<iframe width="172.5" height="315" src="https://www.youtube.com/embed/eaPG54EauOA" allowfullscreen></iframe>');
    
    $("#project-info-paragraph").html('Tossy Pizza is a touch and accelerometer-based game available for Android devices. This was a simple project, and was also my first major programming endeavor.      <a target="_blank" id="project-link" href="https://play.google.com/store/apps/details?id=com.OscarWong.PizzaToss">Download: (Android)</a>');

  });
});