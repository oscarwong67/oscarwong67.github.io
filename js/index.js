$('#projects-row-3').hide();
$('#projects-row-2').hide();
$('#projects-row-1').show();

var strList;
var strTwo;
var colors = ['#4da6ff', '#ffa31a', '#33cc33', '#ff80aa'];

function colours() {
  if ($('#projects-row-2').is(':visible')) {
    i = 5;
    x = 8;
  }
  else if ($('#projects-row-3').is(':visible')) {
    i = 9;
    x = 12;
  }
  else {
    i = 1;
    x = 4;
  }
  for (; i <= x; i++) {
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    $('#project-img-' + i).css({ 'border-color': random_color });
  }
}
  
});