
function customflip() {

}

function rflip() {$('#card').flip();}

// DRIVER
$(function() {
  // $('#card').on('mouseover', customflip);
  // $('#card').on('mouseout', rflip);
  // window.alert('s');
  $("#card").flip({
    axis: 'x',
    trigger: 'hover'
  });
});
