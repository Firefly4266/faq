// demonstrating how "this" is scoped by console logging the click event using the ".question" class instead of the "#q" id. Open with live-server and click on the drop downs, then look at what "this" is.

$(".question").click(function(){
  console.log($(this));
  // $("#a1").slideToggle("slow");
  // $("#arrow1-down, #arrow1-up").toggleClass("collapse");
})

// $("#q2").click(function(){
//   $("#a2").slideToggle("slow");
//   $("#arrow2-down, #arrow2-up").toggleClass("collapse");
// })

// $("#q3").click(function(){
//   $("#a3").slideToggle("slow");
//   $("#arrow3-down, #arrow3-up").toggleClass("collapse");
// })