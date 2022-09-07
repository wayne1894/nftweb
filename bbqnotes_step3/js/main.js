var parallaxInstance //第一頁視差使用
var scroll_start = false;
var page_now = 0;//現在的頁次
var section = document.querySelectorAll("main>section");
var last_page_index = section.length - 1;//最後一頁


function wheel(e){
  if(page_now == last_page_index && e.wheelDelta < 0) return
  if(page_now == last_page_index && section[page_now].scrollTop > 150) return
  
  if(scroll_start) return ;
  scroll_start = true;
  var page_index = page_now;
  if (e.wheelDelta > 0) {
    page_index = page_index - 1;
  } else {
    page_index = page_index + 1;
  }
  
  if(page_index < 0) page_index = 0;
  if(page_index >= last_page_index) page_index = last_page_index;

  move_page(page_index);
 
}
function id(a){
  return document.getElementById(a)
}
function move_page(page_index){
  gsap.to(window, 0.5, {
    scrollTo: section[page_index],
    onStart : function(){
      if(page_index!=last_page_index){
        document.querySelectorAll("#section_4 .s_left")[0].classList.remove("fixed");
        gsap.set("#section_4 .s_left",{
          opacity: 0
        })
      }
    },
    onComplete : function(){
      
      if(page_index == last_page_index){
        document.querySelectorAll("#section_4 .s_left")[0].classList.add("fixed");
        gsap.to("#section_4 .s_left",{
          opacity: 1
        })
        set_animation()
      }

      window.history.pushState(null, null, "?page=" + page_index);
      
      page_now = page_index;
      setTimeout(function(){
        scroll_start = false;
      },1000)
    }
  });
}
function set_animation(){
    //因為我們網頁是場景式，為了避免動畫被建立太多次，請在執行時 kill (一般單一次載入的網頁不用)
    ScrollTrigger.killAll();
    ScrollTrigger.killAll();
    ScrollTrigger.killAll();
    ScrollTrigger.killAll();
  
    //第一段動畫
    let info_left = document.querySelectorAll("#text2 .info_left .info");
    let info_right = document.querySelectorAll("#text2 .info_right .info");
    gsap.fromTo([info_left[0],info_right[0],info_left[1],info_right[1],info_right[2],info_left[2]],{
        top : "60px",
        opacity : 0,
      },{
        duration: 0.8,
        stagger: 0.25,
        top: 0, 
        opacity: 1,
        scrollTrigger: {
          scroller:"#section_4",
          trigger: "#k2_1",
          start: "top top+=300px"
        },
        onStart: function(){
          //動畫開始
        }
    })
  
    gsap.to("#unit2", {
      scrollTrigger: {
        scroller:"#section_4",
        trigger: "#unit2",
        //scrub: 1, 
        onEnter: function(){
          console.log("觸發開始2")
        },
        onEnterBack: function(){
          console.log("觸發開始2_")
        },
        onLeaveBack: function(){
          console.log("觸發開始2__")
        }
      }
    });
  
    gsap.to("#unit3", {
      scrollTrigger: {
        scroller:"#section_4",
        trigger: "#unit3",
        onEnter: function(){
          console.log("觸發開始3")
        },
        onEnterBack: function(){
          console.log("觸發開始3_")
        },
        onLeaveBack: function(){
          console.log("觸發開始3__")
        }
      }
    });
  
    //偵測整個section_4的數值
    ScrollTrigger.create({
      scroller:"#section_4",
      start: 0,
      end: "max",
      onUpdate: self => {
        console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
//        
        set_color(self.progress.toFixed(2) * 100)
      }
    });



 }


function set_parallax(){
  //https://github.com/wagerfield/parallax
  var section_1 =  document.getElementById("section_1");
  parallaxInstance =  new Parallax(section_1)
}

function set_color(scrollPercentRounded){
 var a3= -(scrollPercentRounded-100)  * 0.53 + 45;
  console.log(a3)
 var hsl = "hsla(225,12%,"+a3+"%,0.6)"
 document.querySelector(".s_left").style.backgroundColor = hsl;

  if(a3>70 && a3<90){
    id("unit_child").style.color = "#BEB6B7";
  }else if(a3<=70 && a3>60){
    id("unit_child").style.color = "#ada7a4";
  }else{
    id("unit_child").style.color = "#D5D0CD";
  }
}


id("number").addEventListener("click",function(event){
  //console.log(event.target,"event.target")
  
  let scroll_y = "max";
  if(event.target.innerHTML == "01"){
    scroll_y = "#unit1";
  }else if(event.target.innerHTML == "02"){
    scroll_y = "#unit2";
  }else if(event.target.innerHTML == "03"){
    scroll_y = "#unit3"
  }else{
    return
  }

  
  let number_div = document.querySelectorAll("#number>div")
  for(var i=0;i<number_div.length;i++){
    number_div[i].classList.remove("active")
  }
  event.target.classList.add("active");



  gsap.to("#section_4", {
      duration: 1, 
      scrollTo: {
        y: scroll_y,
        offsetY: 60,
        autoKill: true
      }
  });
})

window.addEventListener('wheel', wheel);
document.addEventListener('DOMContentLoaded', (event) => {
  
  //換網址
  var url= window.location.href;
  var url_page = url.split("?page=")[1];
  if (!isNaN(url_page)){//如果是數字
    page_now = parseInt(url_page);
    if(page_now < 0) page_now=0;
    if(page_now >= last_page_index) page_now = last_page_index;
    move_page(page_now);
  }
  
  set_parallax()
})




  function open_conveyor_modal(){
    
  $("#conveyor_modal").off("scroll").on("scroll",function(){
     var _scroll=-$("#conveyor_modal").scrollTop();
     $(".triangle_left").css("bottom",_scroll);
     $(".triangle_right").css("bottom",_scroll);
  })
    setTimeout(function(){
       $("#conveyor_modal").scrollTop(0)
    },0)

    
    $('#lightbox').fadeIn(300);
    $('#lightbox_right').fadeIn(300);
    //$("#conveyor_svg").hide()
    
    $("#conveyor_modal").show();
    $("#conveyor_modal_close").off("click").on("click",close_conveyor_modal)
    $("#lightbox").off("click").on("click",close_conveyor_modal)

    if(tween3) tween3.kill()
    if(tween2) tween2.kill()

    tween2 = TweenMax.from("#conveyor_modal", open_time , {
     x: "100%" ,
     opacity :　1,
     ease: Circ.easeOut,
     clearProps:"transform",
     onStart: function(){
       is_conveyor_tween.pause();
       is_conveyor_tween2.pause();
       
     },
      onComplete : function(){
          is_conveyor_tween.pause();
          is_conveyor_tween2.pause();
          if(tween2)tween2.kill();
        
        TweenMax.from("#u13",.5,{
          x:-20, 
          opacity: 0,
          clearProps:"transform,opacity",
          onStart:function(){
            $("#u13").show()
          },
          onComplete : function(){
          
            TweenMax.to(["#u2","#u4",$("#u3 text")[0]],.6,{opacity :1 , onComplete:function(){
     
              tween3=TweenMax.to(["#u8","#u5","#u6","#u7","#u9","#u12","#u10","#u11","#u11-2"],.6,{opacity :1,onComplete:function(){
                 tween4=TweenMax.staggerTo([$("#u14 .cls-22"),$("#u15 .cls-22"),$("#u16 .cls-22")], .5, {fill:"#E9907B", opacity:1,clearProps:"fill,opacity"}, 0.2);
              }})
            }})
      
          }
        })

  
        }
      }
   );
  }


