$(".question").click(function(){
  $(this).next().slideToggle("slow");
  // console.log($(this).children());
  $(this).children().toggleClass("collapse");
})