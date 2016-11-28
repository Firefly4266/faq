//by adding .children to $(this) we get back the arrow functionality as demonstrated by the console.log. once the .toggleClass is re-attached functionality is the same as before.

$(".question").click(function(){
  $(this).next().slideToggle("slow");
  // console.log($(this).children());
  $(this).children().toggleClass("collapse");
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