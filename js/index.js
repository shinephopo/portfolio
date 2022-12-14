//progress bar
window.addEventListener('scroll',function(){
  var winScroll =  document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height)*100;
  document.querySelector('#indicator').style.width = scrolled + '%';
});


// document.getElementById('menu_ham').addEventListener('click',function(){
//             document.getElementById('menu_ham').style.display='none';
//             document.getElementById('menu_can').style.display='block';
//             document.getElementById('sidebar').style.right='0';
//         });
//         document.getElementById('menu_can').addEventListener('click',function(){
//             document.getElementById('menu_can').style.display='none';
//             document.getElementById('menu_ham').style.display='block';
//             document.getElementById('sidebar').style.right='-250px';
//         });
// 메뉴바 클릭 이벤트
$('#gnb').on('click',function(){
    $('#gnb').css('display','none');
    $('#sidebar').css('right','0');
    $('#menu-cancel').css('display','block');
});
$('#menu-cancel').on('click',function(){
    $('#menu-cancel').css('display','none');
    $('#sidebar').css('right','-250px');
    $('#gnb').css('display','block');
});
        
//타이핑 효과, 한글자씩 등장
const content = "안녕하세요. 웹디자이너 신은지입니다."
const text = document.querySelector(".text")
let index = 0;

function typing(){
    text.textContent += content[index++];
    if(index > content.length){
        text.textContent=""
        index = 0;
    }
}
// 타이핑 속도
setInterval(typing, 200);

//fade효과
$(document).ready(function() {
  /* 1 */
  $(window).scroll( function(){
      /* 2 */
      $('.fade-effect').each( function(i){
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          /* 3 */
          if( bottom_of_window > bottom_of_object/2 ){
              $(this).animate({'opacity':'1'},2000);
          }
      }); 
  });
});



// swiper demos
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 10,
            freeMode: true,
            cssMode: true,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            breakpoints:{
              550:{
                slidesPerView:2,
                spaceBetween:10
              },
              1100:{
                slidesPerView:2,
                spaceBetween:10
              }
            }
          });

//graphic swiper demos
        var swiper = new Swiper(".graphicSwiper", {
          slidesPerView: 1,
          spaceBetween: 10,
          freeMode: true,
          cssMode: true,
          // navigation: {
          //   nextEl: ".swiper-button-next",
          //   prevEl: ".swiper-button-prev",
          // },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          breakpoints:{
            550:{
              slidesPerView:1,
              spaceBetween:10
            },
            1200:{
              slidesPerView:4,
              spaceBetween:10
            }
          }
        });
