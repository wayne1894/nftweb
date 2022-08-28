var scroll_start = false;
var page_now = 0;//現在的頁次
var section = document.querySelectorAll("main>section");
var last_page_index = section.length - 1;//最後一頁

window.addEventListener('wheel', wheel);

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

function move_page(page_index){
  gsap.to(window, 0.5, {
    scrollTo: section[page_index],
    onStart : function(){
    },onComplete : function(){
      setTimeout(function(){
        page_now = page_index
        scroll_start = false;
      },1000)
    }
  });
}