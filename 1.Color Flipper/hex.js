const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function () {
  // hexColor 의 초기값은 #
  let hexColor = '#';

  // 6번 반복 (#ffffff 처럼)
  for (let i = 0; i < 6; i++) {
    // hexColor 에 hex[getRandomNumber()] 를 실행한 값을 넣는다
    hexColor += hex[getRandomNumber()];
  }

  // backgroundColor도 hexColor와 똑같이 바꾼다
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

// hex의 길이만큼 랜덤 값을 얻는다. 0~9, A B C D E F 를 얻을 수 있다. 
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}