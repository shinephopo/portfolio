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
const content = "디자이너와 소통을 원활하게 할 수 있는 신입 퍼블리셔 신은지입니다."
const text = document.querySelector(".text")
let index = 0;

function typing(){
    text.textContent += content [index++];
    if(index > content.length){
        text.textContent=""
        index = 0;
    }
}
// 타이핑 속도
setInterval(typing, 200);

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
          });