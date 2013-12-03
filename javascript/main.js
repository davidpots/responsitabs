$(document).ready(function(){

  // Nav Drawer Open/Close
  $("#navburger").click(function(){
    $("#drawer").toggle();
    $(this).toggleClass('open');
  });

  // Make embedded videos responsive - via http://webdesignerwall.com/tutorials/css-elastic-videos
  $('#videos iframe').wrap('<div class="video-wrapper"><div class="video-container"></div></div>')
  var videos = $('#videos iframe');
  var size;
  $.each(videos, function() {
    size = $(this).attr('width');
    $(this).parent().parent().css('width',size);
  } );


});


$(window).bind("load", function() {

  // Load the Fit Text!
  $("h1.fit").fitText(1.0, { minFontSize: '64px', maxFontSize: '72px' });
  $("h2.fit").fitText(1.0, { minFontSize: '30px', maxFontSize: '48px' });
  $("h3.fit").fitText(1.0, { minFontSize: '27px', maxFontSize: '32px' });
});