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

function showButtons() {
  if ($('#projects-row-1').is(':visible')) {
    $('#page-toggle-left').hide();
  }
  else if ($('#projects-row-2').is(':visible')) {
    $('#page-toggle-left').show();
    $('#page-toggle-right').show();    
  }
  else {
    $('#page-toggle-right').hide();
  }
}
showButtons();

$('.page-toggle').click(function () {
  for (var q = 1; q <= 3; q++) {
    var str = '#projects-row-' + q;    
    if ($(str).is(':visible')) {
      break;
    }
  }
  if ($(this).attr('id') === 'page-toggle-right') {
    q++;
    strTwo = '#projects-row-' + q;
    strList = str + ", " + strTwo;
  }
  else {
    q--;
    strTwo = '#projects-row-' + q;
    strList = str + ", " + strTwo;    
  }
  $(strList).slideToggle(function () {
    showButtons();
  });
  
});