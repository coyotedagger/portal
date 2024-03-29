$( document ).ready(function() {
  setInterval('updateClock()', 1000);

  $(".draggable").draggable();

  $(".draggable").mousedown(function() {
    // lower other elements
    $(this).siblings(".draggable").each(function() {
      var zindex = $(this).css("z-index");
      $(this).css("z-index", --zindex);
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
    console.log($("#headshot").css("z-index"));
  });

  $("#text-icon").click(function () {
    $("#about").show();
    console.log($("#text-icon").css("z-index"));
  });

  $("#fantom-link").click(function () {
    $("#fantom").css("z-index", 10);
    $("#fantom").show();
  });

  $("#tenebra-link").click(function () {
    $("#tenebra").css("z-index", 10);
    $("#tenebra").show();
  });

  $("#casestudy1-link").click(function () {
    $("#study1").css("z-index", 10);
    $("#study1").show();
  });

  $("#casestudy2-link").click(function () {
    $("#study2").css("z-index", 10);
    $("#study2").show();
  });

  $("#casestudy3-link").click(function () {
    $("#study3").css("z-index", 10);
    $("#study3").show();
  });

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

