$(function() {
  $("p").click(function() {
    $(this).addClass("class1");
    $("p.class1").click(function() {
      $(this).removeClass("class1");
  });
  });
});
//  $(".clickable").click(function() {
//    $("p.special").addClass("class1");
