// $(document).ready(function() {
//   console.log("Page ready!");
//   $("#labels #other--characters").hide();
//
//   // $("element").hover(mouseEntering, mouseLeaving)
//   $("#nodes g").hover(function() {
//     $("#nodes g").css("opacity", 0.2);
//     $(this).css("opacity", 1);
//   }, function() {
//     $("#nodes_1_ g").css("opacity", 1);
//   });
//
//   // $("element").click(runYourCode)
//   $("#show--characters").click(function() {
//     // .toggle() alternates between showing and hiding the selected elements
//     $("#labels #other--characters").toggle();
//   });
// });

$(document).ready(function () {
  console.log("Page Ready!");

  // $("#title").hide();
  // $("#title").css("opacity",0.15);

  //.hover(callback,callback);
  $("#curve g").hover(function() {
    // console.log("Hover!");

    $("#curve g").css("opacity",0.3);
    $(this).css("opacity",1);
  },function(){
    $("#curve g").css("opacity",1);
  });

// toggle() switches between .show(); and .hide();
  // $("#title").click(function(){
  //   // console.log("Clicked!");
  //   $("#title").toggle();
  // }

  $("#title text").hover(function(){
    $("#title text").css("opacity",0.15);
    $(this).css("opacity",1);
  },function(){
    $("#title text").css("opacity",0.3);
  });



});
