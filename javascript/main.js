$(document).ready(function(){
  $("#navburger").click(function(){
    $("#drawer").toggle();
    $(this).toggleClass('open');
  });
});