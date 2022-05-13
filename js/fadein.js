const faders = document.querySelectorAll(".fade-in");

const offsetArr = [];
// 나타나게 하는 코드
faders.forEach((i) => {
  offsetArr.push(i.offsetTop); // fade-in 클래스가 존재하는 엘리먼트들의 오프셋 탑 위치
});

// 윈도우 크기
const innerHeight = window.innerHeight; // 브라우저 안쪽 화면 높이

// 스크롤시 현재 스크롤위치랑 오프셋 비교해서 appear크래스 추가
window.addEventListener("scroll", () => {
  const currScrollTop = window.scrollY; // 현재 스크롤 탑 위치
  const bottomScrollOffset = currScrollTop + innerHeight; // 현재 스크롤 바텀 위치
  // fade-in 클래스 엘리먼트들의 개수만큼 반복문
  for (let i = 0; i < offsetArr.length; i++) {
    // fade-in 클래스가 존재하는 각 엘리먼트의 오프셋과 현재 스크롤 바텀위치랑 비교해서 스크롤위치가 엘리먼트 오프셋을 넘어갔다면 해당 엘리먼트에 appear클래스 추가
    if (bottomScrollOffset > offsetArr[i]) {
      faders[i].classList.add("appear");
    }
  }
});

// 최초 로드시 화면에 보이는 요소들은 appear 클래스를 붙여주기 위해서
document.addEventListener("DOMContentLoaded", () => {
  const currScrollTop = window.scrollY; // 현재 스크롤 탑 위치
  const bottomScrollOffset = currScrollTop + innerHeight; // 현재 스크롤 바텀 위치
  // fade-in 클래스 엘리먼트들의 개수만큼 반복문
  for (let i = 0; i < offsetArr.length; i++) {
    // fade-in 클래스가 존재하는 각 엘리먼트의 오프셋과 현재 스크롤 바텀위치랑 비교해서 스크롤위치가 엘리먼트 오프셋을 넘어갔다면 해당 엘리먼트에 appear클래스 추가
    if (bottomScrollOffset > offsetArr[i]) {
      faders[i].classList.add("appear");
    }
  }
});
