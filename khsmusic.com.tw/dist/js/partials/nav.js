$(function(){
if(is_mobileAndTabletcheck){
  $("#h_search").addClass("mobile");
}
$("#h_search").click(function(){
  if($("#nav").hasClass("open"))return;
  if($(this).hasClass("close")){
    $(this).siblings().stop().fadeIn(400);
    $(this).siblings().show()
    $(this).removeClass("close");
    $("#nav_search").stop().fadeOut(400);
  }else{
    $(this).siblings().stop().fadeOut(300);
    $(this).addClass("close");
    $("#nav_search").stop().fadeIn(400);
    
  }

})
$("#nav_mobile").click(function(){
  if($("#nav").hasClass("open")){
    $(this).find(".line0").fadeIn(200);
    $("#nav").removeClass("open");
    $("#h_search").removeClass("hover");
    $(".nav_menu_m h4").click();
    if(is_mobileAndTabletcheck)$(document.body).css("overflow-y","")
  }else{
    $(this).find(".line0").hide();
    $("#nav").addClass("open");
    $("#h_search").addClass("hover");
    if(is_mobileAndTabletcheck)$(document.body).css("overflow-y","hidden")
  }
})
$("#nav .nav_left").click(function(event){
  var e=event.target;
  if($(e).hasClass("nav_block")){
    var $element=$(e).siblings(".nav_menu_m");
    var _length=$element.find("ol li").length;
    $(".nav_left").css("height","348px");
    if(_length==8){
      $(".nav_left").css("height","540px");
      $(".nav_right").css("padding-top","0");
    }
//    var html_li;
    $element.animate({width:'toggle'},300,"easeOutQuart",function(){
//      html_li=$(".nav_left>li");
//      $(e).parent().siblings().remove();
    });
    $element.find("h4").one("click",function(){
    $element.animate({width:'toggle'},400,"easeInBack",function(){
      $(".nav_left").attr("style","");
      $(".nav_right").attr("style","");
      //$(".nav_left").append(html_li)
    });
    })
  }
  
})
  
var $nav=$("#nav");
//var fixed_use=false;
//if($nav.length==0)return;
$(window).scroll(nav_scroll);
function nav_scroll(){
  var _scroll_top=$nav.offset().top;
    if(_scroll_top > 62){
      $nav.addClass("fixed");
    }else{
      $nav.removeClass("fixed");
    }
    return

//  if(is_mobileAndTabletcheck){
//    if(_scroll_top > 62){
//      $nav.addClass("fixed");
//    }else{
//      $nav.removeClass("fixed");
//    }
//    return
//  }

  //固定上方選單
//  if(_scroll_top > 62){
//      if(!$nav.hasClass("fixed")){
//        $nav.addClass("fixed");
//        fixed_use=false;
//        $nav.css("opacity",0);
//        $nav.addClass("fixed");
//        $nav.animate({
//          opacity: 1
//        }, 500, "easeOutCubic");
//      }
//  }else{
//    if($nav.hasClass("fixed") && !fixed_use){
//      fixed_use=true;
//      $nav.animate({
//        opacity: 0
//      }, 0 ,function(){
//        $nav.animate({opacity: 1},700,"easeOutCubic");
//        $nav.removeClass("fixed");
//      });
//    }
//  }
}

})