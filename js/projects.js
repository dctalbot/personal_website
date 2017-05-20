function navslide() {$('#nav').slideDown("slow", pslide);}

function pslide() {$('.project').slideDown();}

// DRIVER
$(function() {
  navslide();
});
