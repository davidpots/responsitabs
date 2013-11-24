$(document).ready(function(){
  $("#navburger").click(function(){
    $("#drawer").slideToggle();
    $(this).toggleClass('open');
  });
});