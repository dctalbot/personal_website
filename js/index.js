function opener() {$('#shape, #name, #wrapper').fadeOut(redirect);}

function redirect() {window.location.href = "projects";}

// DRIVER
$(function() {
  $('#name, #shape').on('click', opener);
});
