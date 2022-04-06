//progress bar
window.addEventListener('scroll',function(){
    var winScroll =  document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height)*100;
    document.querySelector('#indicator').style.width = scrolled + '%';
});


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
//sub-page modal
$('.site-img').on('click',function(){
    $('.black-bg').addClass('show-modal');
});
$('#close').on('click',function(){
    $('.black-bg').removeClass('show-modal');
});