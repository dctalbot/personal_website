function toggler() {
  $('#toggled-info').toggle(400);

  if ($('#toggle').text() === '-') {
    $('#toggle').text("+");
  }
  else {
    $('#toggle').text("-");
  }
};

// DRIVER
$(function() {

  $( "#toggle" ).on('click', toggler);

});
