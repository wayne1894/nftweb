var parallaxInstance //第一頁視差使用
var scroll_start = false;
var page_now = 0;//現在的頁次
var section = document.querySelectorAll("main>section");
var last_page_index = section.length - 1;//最後一頁
let gsap_modal

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
        set_animation();
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
    //第一段動畫
    let info_left = document.querySelectorAll("#text1 .info_left .info");
    let info_right = document.querySelectorAll("#text1 .info_right .info");
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
            trigger: "#unit1",
            //start: "top top+=300px"
          },
          onStart: function(){
            console.log(1)
            //動畫開始
          }
      })
  
  
    let animation_1 = document.querySelector(".animation_1");
    let animation_2 = document.querySelector(".animation_2");
    let scrollTrigger_1 = {
          scroller:"#section_4",
          trigger: "#k2_5",
          start: "bottom bottom-=150px"
        }

    gsap.fromTo(animation_1,{
        left : "-30px",
        opacity : 0,
      },{
        duration: 0.8,
        left: 0, 
        opacity: 1,
        scrollTrigger: scrollTrigger_1,
        onStart: function(){
          console.log(11)
          //動畫開始
        }
    })
    gsap.fromTo(animation_2,{
        right : "-30px",
        opacity : 0,
      },{
        duration: 0.8,
        right: 0, 
        opacity: 1,
        delay:0.25,
        scrollTrigger: scrollTrigger_1,
        onStart: function(){
          console.log(22)
          //動畫開始
        }
    })
  
    gsap.to("#unit2", {
      x:300,
      scrollTrigger: {
        scroller:"#section_4",
        trigger: "#unit2",
        scrub: 1, 
        onEnter: function(){
          let number_div = remove_number_div();
          number_div[1].classList.add("active");
        },
        onEnterBack: function(){
        },
        onLeaveBack: function(){
          let number_div = remove_number_div();
          number_div[0].classList.add("active");
        }
      }
    });
  
    gsap.to("#unit3", {
      scrollTrigger: {
        scroller:"#section_4",
        trigger: "#unit3",
        onEnter: function(){
          let number_div = remove_number_div();
          number_div[2].classList.add("active");
        },
        onEnterBack: function(){

        },
        onLeaveBack: function(){
          let number_div = remove_number_div();
          number_div[1].classList.add("active");
        }
      }
    });

     ScrollTrigger.create({
        scroller:"#section_4",
        start: 0,
        end: "max",
        onUpdate: self => {
//          console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
          
          set_color(self.progress.toFixed(2) * 100)
        }
      });
 }
function remove_number_div(){
  let number_div = document.querySelectorAll("#number>div")
  for(var i=0;i<number_div.length;i++){
    number_div[i].classList.remove("active")
  }
  return number_div;
}
function set_parallax(){
  //https://github.com/wagerfield/parallax
  var section_1 =  document.getElementById("section_1");
  parallaxInstance =  new Parallax(section_1)
}
function set_color(scrollPercentRounded){
 var a3= -(scrollPercentRounded-100)  * 0.53 + 45;
 
 var hsl = "hsla(225,12%," + (a3) +"%,0.6)"
 document.querySelector(".s_left").style.backgroundColor = hsl;

  if(a3>70 && a3<90){
    id("unit_child").style.color = "#BEB6B7";
  }else if(a3<=70 && a3>60){
    id("unit_child").style.color = "#ada7a4";
  }else{
    id("unit_child").style.color = "#D5D0CD";
  }
}

document.querySelector(".z_parent").addEventListener("click",function(event){
  //console.log(event.target.alt)
  
  id("u13").innerHTML = `
    <image style="transform: translate(26px, 95px);" xlink:href="list/${event.target.alt}.svg" height="200" width="200"></image>
  `;
  
  
  axios.get(`food/${event.target.alt}.txt`)
  .then(function (response) {
    let _data = response.data.split("\n");
   // console.log(_data[7],"欄位2")
    id("u9").innerHTML = _data[7].split("欄位2::")[1];
    
  })
  
  
//  axios.get(`food/牛肉.json`)
//  .then(function (response) {
//    console.log(response.data.火力需求)
//  })
//  
 
  if(gsap_modal) gsap_modal.kill();
  gsap_modal = gsap.fromTo("#conveyor_modal",{
     opacity: 1,
     right: "-100%"
  },{
    right: "1.6%",
    duration: 0.8,
    display:'block'
  })
  gsap.to("#lightbox",{
     opacity: 1,
     duration: 0.8,
     display:'block'
  })
})
id("conveyor_modal_close").addEventListener("click",function(event){
  if(gsap_modal) gsap_modal.kill();
  gsap_modal = gsap.to("#conveyor_modal",{
    right: "-100%",
    duration: 0.8,
    opacity: 0
  })
  gsap.to("#lightbox",{
    opacity: 0,
    duration: 0.8,
    display:'none'
  })
})


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

  
  remove_number_div();
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
      //console.log(url_page,"page_now")
      if(page_now < 0) page_now=0;
      if(page_now >= last_page_index) page_now = last_page_index;
      move_page(page_now);
    }
  
  
  
  set_parallax()
})


