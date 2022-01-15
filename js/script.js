$(document).ready(function () {
  $(".toggle").click(function (){
    $(this).next().toggle();
    $(this).next().next().toggle();
  });
});
