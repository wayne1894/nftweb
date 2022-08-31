var scroll_luck=false
$(function(){
  //jquery toTop
//https://www.jqueryscript.net/tags.php?/Back%20to%20top/
 
  $("#toTop").hide().on('click.UItoTop',function(){
    scroll_luck=true;
//    $("#toTop").css("bottom","36px");
    $('html, body').stop().animate({scrollTop: 0}, 1200, "easeOutQuart",function(){
       scroll_luck=false;
//      $("#toTop").fadeOut(300,function(){
//        scroll_luck=false;
//      });
    });
    return false;
	})

  $(".info_block h4").click(function(){
   var that=this;    $(this).closest(".info_block").siblings().find("ol").css({display: ""}).end().find("h4").removeClass("on");
    if($(this).hasClass("on")){
      $(this).next().slideUp(350,function(){
        $(that).removeClass("on");
      });
    }else{
      $(this).next().slideDown({
        duration: 350,
        complete : function(){
          $(that).addClass("on");
        }
      });
    }
  });

  $(window).scroll(function(){
    //if(scroll_luck) return
    var w_scrollTop = $(window).scrollTop();
    footer_check(w_scrollTop);
    if ( w_scrollTop > 200 ) {
      $("#toTop").fadeIn(600);
      //$("#toTop").show();
    } else{
      //$("#toTop").hide();
      $("#toTop").fadeOut(400);
    }
    
   
  });
  setTimeout(function(){
    $(window).scroll();
  },5);
  
  var $toTop = $("#toTop");
  var _top = $("footer").data("top") || 36;
  var w_height = $(window).height();
  var $footer = $("footer");
  var footer_height = $footer.outerHeight(true);
  var ab= footer_height/$(window).height();
  $(window).resize(function(){
    w_height = $(window).height();
    footer_height = $footer.outerHeight(true);
    ab= footer_height/$(window).height();
    $(window).scroll();
  });

  function footer_check(w_scrollTop){
   if(ab>0.7) return ;
   var footer_top = $footer.offset().top;
   var _check = w_scrollTop + w_height > footer_top && w_scrollTop +62 < footer_top + footer_height;
   if(_check){
     $("#toTop").css("bottom",w_height-( footer_top - w_scrollTop) + _top);
   }else{
     $("#toTop").css("bottom","");
   }
  }

})