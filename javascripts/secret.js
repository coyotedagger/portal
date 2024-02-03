$( document ).ready(function() {
  $(".draggable").draggable();


  // z-index order is tricky... basically need to keep track of
  // where in the ranking the div lies (i.e. is it 1st, 2nd, etc).
  // clicking to open something will ALWAYS make it 1st.
  // clicking to drag something will ALWAYS make it 1st.
  // the order of anything else should STAY THE SAME -- they just
  // all get bumped down... or don't change.
  // because only everything between the two items should change.
  // this is actually a complex function...
  $(".draggable").mousedown(function() {
   // lower other elements
   $(this).siblings(".draggable").each(function() {
    var zindex = $(this).css("z-index");
    $(this).css("z-index", 5);
   })

   // set clicked element to a higher level
   var zindex = $(this).css("z-index");
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

  $("#fantom-link").click(function () {
    $("#fantom").css("z-index", 10);
    $("#fantom").show();
  });

  $("#tenebra-link").click(function () {
    $("#tenebra").css("z-index", 10);
    $("#tenebra").show();
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

