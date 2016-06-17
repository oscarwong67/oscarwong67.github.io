var colors = ['#4da6ff', '#ffa31a', '#33cc33', '#ff80aa'];

for (var i = 1; i <= 4; i++) {
  var random_color = colors[Math.floor(Math.random() * colors.length)];
  $('#project-img-' + i).css({ 'border-color': random_color });
}

$('#projects-row-2').hide();
$('#projects-row-1').show();

$('#page-toggle').html('<i class="fa fa-arrow-circle-o-right arrow-right" aria-hidden="true"></i>');

$('#page-toggle').click(function () {
  if ($(this).html() === '<i class="fa fa-arrow-circle-o-right arrow-right" aria-hidden="true"></i>')
    $('#page-toggle').html('<i class="fa fa-arrow-circle-o-left arrow-left" aria-hidden="true"></i>');
  else
    $('#page-toggle').html('<i class="fa fa-arrow-circle-o-right arrow-right" aria-hidden="true"></i>');
  
  $('#projects-row-1, #projects-row-2').slideToggle();

  for (i = 5; i <= 8; i++) {
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    $('#project-img-' + i).css({ 'border-color': random_color });
  }
});
