var parallaxInstance //第一頁視差使用
var scroll_start = false;
var page_now = 0;//現在的頁次
var section = document.querySelectorAll("main>section");
var last_page_index = section.length - 1;//最後一頁

let animation_area_0 = false;
let animation_area_1 = false;

var url=window.location.href;
var url_page = url.split("?page=")[1];
if (!isNaN(url_page)){//如果是數字
  page_now = url_page;
  if(page_now < 0) page_now=0;
  if(page_now >= last_page_index) page_now = last_page_index;
  move_page(page_now);
}

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
  if(page_index >= section.length - 1) page_index = section.length - 1;

  move_page(page_index);
 
}

function set_parallax(){
  //https://github.com/wagerfield/parallax
  var section_1 =  document.getElementById("section_1");
  parallaxInstance =  new Parallax(section_1)
}

function move_page(page_index){
  gsap.to(window, 0.5, {
    scrollTo: section[page_index],
    onStart : function(){
      if(page_index!=last_page_index){
        document.querySelectorAll("#section_4 .s_left")[0].classList.remove("fixed"); 
        gsap.set("#section_4 .s_left",{
          opacity:0
        })
      }
    },onComplete : function(){

      window.history.pushState(null, null, "?page=" + page_index);
      
      if(page_index == last_page_index){
        document.querySelectorAll("#section_4 .s_left")[0].classList.add("fixed");
        gsap.to("#section_4 .s_left",{
          opacity:1
        })
        
        //初始化預設值
        gsap.set("#text1 .info",{
          top : "60px",
          opacity : 0
        })
        gsap.set(".z_list>div",{
          top : "60px",
          opacity : 0
        })
        animation_area_0 = false;
        animation_area_1 = false;
        
       id("section_4").removeEventListener("scroll",section_4_animation);
       id("section_4").addEventListener("scroll",section_4_animation);
 
        
      }
      page_now = page_index;
      setTimeout(function(){
        scroll_start = false;
      },1000)
    }
  });
}

id("number").addEventListener("click",function(event){
  console.log(event.target,"event.target")
  let scroll_y = "max";
  if(event.target.innerHTML == "01") scroll_y = "#unit1";
  if(event.target.innerHTML == "02") scroll_y = "#unit2";
  if(event.target.innerHTML == "03") scroll_y = "#unit3";
  
  gsap.to("#section_4", {
      duration: 1, 
      autoKill: true,
      scrollTo: {
        y: scroll_y,
        offsetY: 60,
        autoKill: true
      }
    });
})


function section_4_animation(){
  if(id("section_4").scrollTop>150){
    show_animation(0);
  }
  if(id("section_4").scrollTop > id("net").offsetTop){
    show_animation(1);
  }
}
function show_animation(area){
  if(area == 0){//第一段動畫
    if(animation_area_0) return
    animation_area_0 = true;
    let info_left = document.querySelectorAll("#text1 .info_left .info");
    let info_right = document.querySelectorAll("#text1 .info_right .info")
    gsap.to([info_left[0],info_right[0],info_left[1],info_right[1],info_right[2],info_left[2]],{
      duration:0.8,
      top:0, 
      opacity:1,
      stagger:0.25
    })
  }
  if(area == 1){//第二段動畫
    if(animation_area_1) return
    animation_area_1 = true;
    gsap.to(".z_list>div",{
      duration:0.8,
      top:0, 
      opacity:1,
      stagger:0.25
    })
  }
}
function id(a){
  return document.getElementById(a)
}

window.addEventListener('wheel', wheel);
document.addEventListener('DOMContentLoaded', (event) => {
  set_parallax();
})

