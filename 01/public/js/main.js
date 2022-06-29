function ccc(a){
  return console.log(a)
}

function clearWheel(Handler) {
  if(!isMobile) $(document).unmousewheel(Handler)
  
}
function setWheel(Handler) {
  if(!isMobile) $(document).mousewheel(Handler)
}

function hide_justfont(){
  if($("#justfont-badge").css("display")=="none"){
    just_load=true
    return
  }
  $("#justfont-badge").css("display","none");
   setTimeout(hide_justfont,100)
}

function typed(){
 //section_2 打字效果
//https://github.com/mattboldt/typed.js/
   typed1 = new Typed('.type_1', {
    strings: ["上次烤肉是什麼時候呢？又到了吆喝大家起烤肉的季節了！"],
    typeSpeed: 120,
    onComplete:function(){
      setTimeout(function(){
        $(".type_1").removeClass("is_type")
        $(".typed-cursor").hide();
        var typed2 = new Typed('.type_2', {
          strings: ["我們將提供給你讓烤肉更聰明、更美味的小撇步！"],
          typeSpeed: 120,
          startDelay: 400,
          onComplete:function(){
            setTimeout(function(){
              $(".type_2").removeClass("is_type");
              $(".typed-cursor").hide();
              var typed3 = new Typed('.type_3', {
                strings: ["就讓我們繼續看下去吧！"],
                startDelay: 300,
                typeSpeed: 120
              });
            },700)
          }
        });
      },1000)  
    }
  });
}

function set_s3_animation(a){
if(s3_tween2)return
s3_tween2 =true
if(a==2){
   s3_tween2=TweenMax.from("#section_3 .s3_line", 2.5, {
         y: "-200%" ,
         ease: Power2.easeOut,
         repeat : 0,
         clearProps:"transform",
          onStart : function(){

          },onUpdate:function(){
            //console.log(tween.progress())

          },onComplete : function(){
            s3_tween2=false
           //s3_tween2.kill()
          }
     });
}else{
    s3_tween2=TweenMax.from("#section_3 .s3_line", 2.5, {
         x: "-100%" ,
         ease: Power2.easeOut,
         repeat : 0,
         clearProps:"transform",
          onStart : function(){

          },onUpdate:function(){
            
          },onComplete : function(){
            s3_tween2=false
           //s3_tween2.kill()
          }
     });
}
  

}

//section_1 視差
function set_parallax(){
  //    $("#section_1").mousemove(function(e) {
//        var precentX = e.offsetX / ( $(this).width() / 2 ) - 1;
//        var precentY = e.offsetY / ( $(this).height() / 2 ) - 1;
//
//
//      
////       $(this).css({
////            "background-position": (precentX * 50)+"px "+(precentY * 50)+"px",
////        });
//        $("#bg1").css({
//            "transform": "translate3d("+(precentX*10)+"px,"+(precentY*5)+"px,0)"
//        });
//        $("#bg2").css({
//            "transform": "translate3d("+(precentX*50)+"px,"+(precentY*25)+"px,0)"
//        });
//        $("#bg3").css({
//            "transform": "translate3d("+(precentX*20)+"px,"+(precentY*10)+"px,0)"
//        });
//        $("#bg4").css({
//            "transform": "translate3d("+(precentX*0)+"px,"+(precentY*0)+"px,0)"
//        });
//      
//    });
//   
  //https://github.com/wagerfield/parallax
  var section_1 =  document.getElementById("section_1");
  parallaxInstance =  new  Parallax(section_1)
}

  
//section_3 變形

//var t1 = new TimelineMax();
//  t1.add( TweenMax.to(".svg1",2,{ morphSVG: ".svg2",ease: Power0.easeNone,onComplete:function(){
//      $(".svg1").hide()
//      $(".svg2").show()
//    }}))
//    t1.add( TweenMax.to(".svg2",2,{ morphSVG: ".svg3",ease: Power0.easeNone,onComplete:function(){
//      $(".svg2").hide()
//      $(".svg3").show()
//    }}))
//  t1.add( TweenMax.to(".svg3",2,{ morphSVG: ".svg4",ease: Power0.easeNone,onComplete:function(){
//      $(".svg3").hide()
//      $(".svg4").show()
//    }}))
//  t1.add( TweenMax.to(".svg4",2,{ morphSVG: ".svg1",ease: Power0.easeNone,onComplete:function(){
//      $(".svg4").hide()
//      $(".svg1").show();
//    }}))

  

  
function restart1(){
  s3_tween=TweenMax.to(".svg1",3.5,{ morphSVG: ".svg2",ease: Power0.easeNone,onComplete:function(){
    $(".svg1").hide()
    $(".svg2").show()
    restart2()
  }})
}
function restart2(){
   s3_tween=TweenMax.to(".svg2",3.5,{ morphSVG: ".svg3",ease: Power0.easeNone,onComplete:function(){
    $(".svg2").hide()
    $(".svg3").show()
    restart3()
  }})
}
function restart3(){
   s3_tween=TweenMax.to(".svg3",3.5,{ morphSVG: ".svg4",ease: Power0.easeNone,onComplete:function(){
    $(".svg3").hide()
    $(".svg4").show()
    restart4()
  }})
}
function restart4(){
   s3_tween=TweenMax.to(".svg4",3.5,{ morphSVG: ".svg1",ease: Power0.easeNone,onComplete:function(){
    $(".svg4").hide()
    $(".svg1").show()
    restart1()
  }})
}

function check_mobile(){
  // device detection
  if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
      || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
      isMobile = true;
  }
}  
function updateFamily(){
    var isSupportFontFamily=function(f){if(typeof f!="string"){return false}var h="Arial";if(f.toLowerCase()==h.toLowerCase()){return true}var e ="a";var d=100;var a=100,i=100;var c=document.createElement("canvas");var b=c.getContext("2d");c.width=a;c .height=i;b.textAlign="center";b.fillStyle="black";b.textBaseline="middle";var g=function(j){b.clearRect(0,0,a,i); b.font=d+"px "+j+", "+h;b.fillText(e,a/2,i/2);var k=b.getImageData(0,0,a,i).data;return [].slice.call(k).filter(function(l){return l!=0})};return g(h).join("")!==g(f).join("") };
   if(isSupportFontFamily("DFYuanMedium-B5")){
     $("p").addClass("DFYuanMedium")
     $(".p").addClass("DFYuanMedium")
   }
}

function setPan(id,fn){
   return
  hammertime2 = new Hammer($("#"+id)[0]);
  hammertime2.get('pan').set({ direction: Hammer.DIRECTION_ALL });
  hammertime2.on("panup pandown",fn);
}
function clearPan(){
  return
  if(hammertime2) hammertime2.off("panup pandown");
}

function set_main_pan(fn){
return
var hammertime
  //console.log(hammertime)
  hammertime = new Hammer($("main")[0]);
  hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });
  //panleft panright panup pandown tap press
  hammertime.on("panup pandown",fn);

}
function remove_section_pan(){
   return
   //panleft panright panup pandown tap press
  if(hammertime) hammertime.off("panup pandown");
 
}


var timeline;
var go_1_1 =0;
var go_1_2 =0;
function setTimeLine(){
  timeline = new TimelineMax();
         timeline.pause()
         timeline.add("1_1");// 場景1_1
         timeline.call(function(){
           
           $("#a1").show();
           $("#a2").show();
           $("#a3").hide();
           $("#a4").hide();
           
            $("#a6").hide();
            $("#a5").hide();
            $("#a7").hide();
            $("#a8").hide();
           
             $("#a6").attr("src","img/roast/7.png")
             $("#a5").attr("src","img/roast/6.png")
             $("#a7").attr("src","img/roast/8.png")
             $("#a8").attr("src","img/roast/10.png")
             
             $("#a1").attr("src","img/roast/0.png")
             $("#a2").attr("src","img/roast/1.png")
           
            
              $("#a9").hide()
              $("#a10").hide()
             $("#a11").hide()
             
              $("#a4").attr("src","img/roast/5.png")
              $("#a3").attr("src","img/roast/4.png")
             
                $("#2_3").hide();
              $("#3_1").hide();
              $("#3_2").hide();
               $("#3_other").hide();
           
         })
         timeline.from("#a3",.7,{
                y: -100 ,
                delay: 1,
                ease: Bounce.easeOut,
                onStart : function(){
                  $("#a3").show();
                },onComplete : function(){
                  
                }
           })
         timeline.from("#a4",.7,{
                left: "-100%",
                ease: Power4.easeOut,
                onStart : function(){
                  $("#a4").show();
                },onComplete : function(){
                   timeline.pause();
                  go_1_1 =1
                }
           })
         
         
         
         
         timeline.add("1_2"); // 場景1_2

         timeline.call(function(){
              $("#a1").show();
              $("#a2").show();
              $("#a3").show();
              $("#a4").show();
             
              $("#a6").hide();
              $("#a5").hide();
              $("#a7").hide();
              $("#a8").hide();
             $("#a6").attr("src","img/roast/7.png")
             $("#a5").attr("src","img/roast/6.png")
             $("#a7").attr("src","img/roast/8.png")
             $("#a8").attr("src","img/roast/10.png")
             
             $("#a1").attr("src","img/roast/0.png")
             $("#a2").attr("src","img/roast/1.png")
             
             
              $("#a9").hide()
              $("#a10").hide()
             $("#a11").hide()
              $("#a8").attr("src","img/roast/10.png")
              $("#a4").attr("src","img/roast/5.png")
              $("#a3").attr("src","img/roast/4.png")
             
              $("#2_3").hide();
              $("#3_1").hide();
              $("#3_2").hide();
              $("#3_other").hide();
              
           })
         timeline.from("#a6",.7,{
              x: -100 ,
              ease: Power4.easeOut,
              delay: 1,
              onStart : function(){
                $("#a6").show();
              }
         })
         timeline.from("#a5",.7,{ //豬肉
              x: -100 ,
              ease: Power4.easeOut,
              onStart : function(){
                $("#a5").show();
              }
         },"-=.3")
         timeline.from("#a7",.7,{
              y: -100 ,
              ease: Bounce.easeOut,
              onStart : function(){
                $("#a7").show();
              }
         },"-=.3")
         timeline.from("#a8",.7,{
              y: -50 ,
               ease: Bounce.easeOut,
              onStart : function(){
                $("#a8").show();
              },onComplete : function(){
                 timeline.pause()
                go_1_2 =1
              }
         })
         
        timeline.add("2_1");// 場景2_1
        timeline.call(function(){
           $("#a1").show();
           $("#a2").show();
            $("#a3").show();
            $("#a4").show();
            $("#a6").show();
            $("#a5").show();
            $("#a7").show();
            $("#a8").show();
            $("#a5").attr("src","img/roast/11.png")

            $("#a2").attr("src","img/roast/29.png")
            $("#a9").hide()
            $("#a6").attr("src","img/roast/7.png")
            $("#a10").hide()
            $("#a11").hide()
            $("#a8").attr("src","img/roast/10.png")
            $("#a4").attr("src","img/roast/5.png")
            $("#a3").attr("src","img/roast/4.png")

            $("#2_3").hide();
            $("#3_1").hide();
            $("#3_2").hide();
            $("#3_end").hide();
         })
        timeline.to("#a1",1,{
              ease: Power4.easeOut,
              onStart : function(){

              },onComplete : function(){
                  $("#a1").attr("src","img/roast/2.png")
              }
         })
        timeline.to("#a7",1,{
              ease: Power4.easeOut,
              onStart : function(){

              },onComplete : function(){
                  $("#a7").attr("src","img/roast/9.png")
              }
         },"-=0.5")
        timeline.to("#a2",1,{
              ease: Power4.easeOut,
              onStart : function(){

              },onComplete : function(){
                $("#a2").attr("src","img/roast/15.png");
                timeline.pause()
              }
         })

        timeline.add("2_2");// 場景2_2
        timeline.call(function(){
           $("#a1").show();
           $("#a2").show();
            $("#a3").show();
            $("#a4").show();
            $("#a6").show();
            $("#a5").show();
            $("#a7").show();
            $("#a8").show();
           $("#a5").attr("src","img/roast/11.png")
           $("#a6").attr("src","img/roast/7.png")
            $("#a9").hide()
            $("#a10").hide()
            $("#a11").hide()
            $("#a8").attr("src","img/roast/10.png")
            //$("#a7").attr("src","img/roast/9.png")
            $("#a2").attr("src","img/roast/15.png");
            $("#a1").attr("src","img/roast/2.png")
           $("#a11").hide()
            $("#2_3").hide();
            $("#3_1").hide();
            $("#3_2").hide();
            $("#3_end").hide();
         })

        timeline.to("#a5",.5,{
              ease: Power4.easeOut,
              onStart : function(){

              },onComplete : function(){
                 $("#a5").attr("src","img/roast/14.png")
              }
         })
        timeline.from("#a9",.5,{
              ease: Power4.easeOut,
              y: -50,
              delay : 0.2,
              onStart : function(){
                $("#a9").show()
              },onComplete : function(){

              }
         })
        timeline.from("#a5",.5,{
              ease: Power4.easeOut,
              onStart : function(){

              },onComplete : function(){
                 $("#a6").attr("src","img/roast/21.png")
              }
         })
        timeline.from("#a10",.5,{
              ease: Power4.easeOut,
              delay : 0.2,
              y: -50,
              onStart : function(){
                $("#a10").show()
              },onComplete : function(){
                  $("#a9").attr("src","img/roast/16.png")
              }
         })
        timeline.from("#a8",.3,{
              ease: Power4.easeOut,
              onStart : function(){
                $("#a8").attr("src","img/roast/24.png")
              },onComplete : function(){

              }
         })
        
  
  
        timeline.from("#a11",.5,{
             ease: Power4.easeOut,
              y: -50,
              delay : 0.2,
              onStart : function(){
                 $("#a11").show()
              },onComplete : function(){

                timeline.pause()
              }
         })




        timeline.add("2_3");// 場景2_3
        timeline.call(function(){
            $("#2_3").show();
            $("#3_1").hide();
            $("#3_2").hide();
            $("#3_other").hide();
            //$("#2_3").attr("src","img/roast/2_3.png")
            $("#s_left_img .a_img").hide()
         })
        timeline.to("#2_3",2,{
              ease: Power4.easeOut,
              onStart : function(){

              },onComplete : function(){
                 $("#2_3").attr("src","img/roast/3_other.png")
                timeline.pause()
              }
         })
        timeline.add("3_other");// 場景3_1
        timeline.call(function(){
            $("#2_3").hide();
            $("#3_1").hide();
            $("#3_2").hide();
            $("#3_other").show();
            $("#s_left_img .a_img").hide()
           
          })
        timeline.to("#3_other",.7,{
              ease: Power4.easeOut,
              onStart : function(){

              },onComplete : function(){
                
                timeline.pause()
              }
          })

        timeline.add("3_1");// 場景3_1
        timeline.call(function(){
            $("#2_3").hide();
            $("#3_1").show();
            $("#3_2").hide();
            $("#3_other").hide();
            $("#s_left_img .a_img").hide()
          })
        timeline.to("#3_1",.7,{
              ease: Power4.easeOut,
              onStart : function(){

              },onComplete : function(){

                timeline.pause()
              }
         })

        timeline.add("3_2");// 場景3_1
        timeline.call(function(){
            $("#2_3").hide();
            $("#3_1").hide();
            $("#3_2").show();
            $("#3_other").hide();
            $("#s_left_img .a_img").hide()
          })
        timeline.to("#3_2",.7,{
              ease: Power4.easeOut,
              onStart : function(){

              },onComplete : function(){

                timeline.pause()
              }
         })

}