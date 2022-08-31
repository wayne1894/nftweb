
function show_movie(modal_id){
    //http://github.com/kylefox/jquery-modal
    $(".slick-track").css("width","100%");
    $(".slick-slide").css("width","100%");
    $("#" + modal_id).modal({
      fadeDuration: 400,
      fadeDelay: 0.10,
      closeFn:function(){
        if(player)player.playVideo();
      }
    });
    if(player)player.pauseVideo();
  }
$(function(){
  // 滑塊使用  http://kenwheeler.github.io/slick/
  $('#header_slider').on('init', function(event, slick){
    $(".slick-slide").addClass("h_bg");
  }).slick({
    arrows : false,
    dots: true,
    infinite: true,
    speed: 400,
    waitForAnimate : true,
    fade: true,
    cssEase: 'ease-in-out'
  });
  $('#header_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    if(nextSlide==0){
      $("#youtube_button").fadeIn(200);
    }else{
      $("#youtube_button").fadeOut(200);
    }
  });

})