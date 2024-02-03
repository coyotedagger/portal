$( document ).ready(function() {
  $(".draggable").draggable();
  // $(".project-icons").draggable();

  $(".draggable").mousedown(function() {
   // lower other elements
   $(this).siblings(".draggable").each(function() {
    var zindex = $(this).css("z-index");
    $(this).css("z-index", --zindex);
   })

   // set clicked element to a higher level
   $(this).css("z-index", 10);
  });

  $(".draggable h2").click(function() {
    $(this).parent().parent().hide();
  });

  $("#photo-icon").click(function () {
    $("#headshot").show();
  });

  $("#text-icon").click(function () {
    $("#about").show();
  });

  setInterval('updateClock()', 1000);
});

function updateClock(){
  var now = new Date();
  var currentHours = now.getHours();
  var currentMinutes = now.getMinutes();
  var timeOfDay;

  currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  currentMinutes = (currentMinutes < 10) ? "0" + currentMinutes : currentMinutes;

  if (currentHours > 12) {
    currentHours = currentHours - 12;
    timeOfDay = "PM";
  } else {
    timeOfDay = "AM";
  }

  var currentTimeString = currentHours + ":" + currentMinutes + " " + timeOfDay;

  $(".timestamp").html(currentTimeString);
}

