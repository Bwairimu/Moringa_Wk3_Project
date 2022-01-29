$(document).ready(function () {
var target=".hidden";
var slide_speed=3000;
$(target).hide();
$(target).slideDown(slide_speed);
$("#dImg").on("click",function() {
  $(target).slideUp();
});
});

$(document).ready(function () {
var target=".hidden";
var slide_speed=3000;
$(target).hide();
$(target).slideDown(slide_speed);
$("#devImg").on("click",function() {
  $(target).slideUp();
});
});

$(document).ready(function () {
var target=".hidden";
var slide_speed=3000;
$(target).hide();
$(target).slideDown(slide_speed);
$("#prodImg").on("click",function() {
  $(target).slideUp();
});
});

$(document).ready(function () {
  $("#work1,#work2,#work3,#work4,#work5,#work6,#work7,#work8").mouseover(function () {
    alert("Portfolio!");
  });
});

