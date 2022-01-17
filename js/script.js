$(document).ready(function () {
  $("#img1").click(function () {
    $(this).hide();
    $("#show_hide").show();
  });
});
$(document).ready(function () {
  $("#show_hide").click(function () {
    $(this).hide();
    $("#img1").show();
  });
});
$(document).ready(function () {
  $("#img2").click(function () {
    $(this).hide();
    $("#show_hide1").show();
  });
});
$(document).ready(function () {
  $("#img3").click(function () {
    $(this).hide();
    $("#show_hide2").show();
  });
});
$(document).ready(function () {
  $("#show_hide2").click(function () {
    $(this).hide();
    $("#img3").show();
  });
});
$(document).ready(function () {
  $("#work1,#work2, #work3,#work4,#work5,#work6,#work7,#work8").mouseenter(function () {
    alert("Portfolio!");
  });
});

var msg = 'Our Portfolio';
function updateMessage() {
  var portfolioText = document.getElementById('portfolioText');
  el.textContent = msg;
}
updateMessage();
