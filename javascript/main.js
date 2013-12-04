// Add/remove a class based on size of window. Inspired by https://gist.github.com/RyanBrackett/6107983
// This is used so I can know if a mobile device vs. a desktop device.

          // Change width value on page load
          $(document).ready(function(){
              responsive_resize();
          });

          // Change width value on user resize, after DOM
          $(window).resize(function(){
               responsive_resize();
          });

          function responsive_resize(){
            var current_width = $(window).width();
            if(current_width < 1028){
              $('html').addClass("screen_small").removeClass("scree_large");
            } 
            if(current_width > 1028){
              $('html').addClass("screen_large").removeClass("screen_small");
              $('#drawer').show();
            }
          }


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
  $("h1.fit").fitText(0.8, { minFontSize: '64px', maxFontSize: '80px' });
  $("h2.fit").fitText(0.8, { minFontSize: '30px', maxFontSize: '54px' });
  $("h3.fit").fitText(0.8, { minFontSize: '27px', maxFontSize: '32px' });

});