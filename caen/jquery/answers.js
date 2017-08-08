$(document).ready(function() {

  ///////////////////
  // HEADER COLORS //
  ///////////////////
  function begin_cycle() {
    var i = 0;

    setInterval(cycle, 300);
    function cycle(){
    $("#task-1").removeClass("bg-cycle-"+((i-1)%12).toString());
    $("#task-1").addClass("bg-cycle-"+((i)%12).toString());
    ++i;
    $("#task-1").addClass("bg-cycle-"+((i)%12).toString());
    }
  }


  ///////////
  // CLOCK //
  ///////////
  function begin_clock() {
    setInterval(clock, 1000);
    function clock(){
      var dt = new Date($.now());
      
      datestring = ('0' + dt.getDate()).slice(-2) + '/'
             + ('0' + (dt.getMonth()+1)).slice(-2) + '/'
             + dt.getFullYear();


      timestring = ('0' + dt.getHours()).slice(-2) + ':'
             + ('0' + dt.getMinutes()).slice(-2) + ':'
             + ('0' + dt.getSeconds()).slice(-2);

      $("#time").text(timestring);
      $("#date").text(datestring);

    }
  }


  //////////////////////////////
  // SELECT MENU AND TEXT BOX //
  //////////////////////////////
  function update_styles() {
    var toUpdate = $("#css option:selected").val();
    var newVal = $("input[type='text'][name='message']").val();
    $('#sandbox').css(toUpdate, newVal);
  }


  ///////////////////////////////////
  // randColor function definition //
  ///////////////////////////////////
  function randColor(depth_in) {

    // Initialize r, g, and b to random integers [0, 255)
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    // Animates disco-floor div over 650ms, and recursively calls randColor
    // with a lower depth
    $('#disco-floor').animate({
        backgroundColor: 'rgb(' + r + ',' + g + ',' + b + ')'
      },
      650,
      function() {
        if (depth_in == 0) {
          return;
        } else {
          randColor(depth_in - 1);
        }
      });
  }

  /////////////////
  // START DISCO //
  /////////////////
  function start_disco() {
    randColor(40);
  }


  ////////////////
  // STOP DISCO //
  ////////////////
  function stop_disco() {
    $('#disco-floor').stop();
    $('#disco-floor').animate({backgroundColor: "black" }, 5000);
  }


  ////////////
  // DRIVER //
  ////////////
  $("#task-1").on("click", begin_cycle);
  begin_clock();
  $("#submit").on("click", update_styles);
  $("#start-disco").on("click", start_disco);
  $("#stop-disco").on("click", stop_disco);
});
