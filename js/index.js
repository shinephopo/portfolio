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
setInterval(typing, 300)