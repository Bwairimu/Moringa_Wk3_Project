$(document).ready(function(){
  $("#show_hide,#show_hide1,#show_hide2").on("click", function(){
    $(this).hide();
    $(this).show();
  });
});
$(document).ready(function(){
  $("#work1").mouseenter(function(){
    alert("Portfolio!");
  });
});
