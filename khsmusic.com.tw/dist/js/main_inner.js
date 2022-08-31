$(function(){
  $(".inner_menu_mobile>li").on("click",function(event){
    $(this).siblings().find(".inner_ol").hide();
    var $that_ol=$(this).find(".inner_ol")
    $that_ol.fadeIn(300,function(){
      
      $(document).one("click",function(event){
        var e=event.target;
        if($(e).closest(".inner_ol").length>0) return;
        $that_ol.hide();
      })
    });
    
  })

})

$(window).resize(function(){
  $(".left").css("height",$(".right").height());
})