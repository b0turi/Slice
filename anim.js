$(document).ready(function(){
  $(".slider").hover(function(){
    $(this).animate({width: "290px"}, 200, "easeOutExpo");
  }, function(){
    $(this).animate({width: "78px"}, 200, "easeOutExpo");
  });
});
