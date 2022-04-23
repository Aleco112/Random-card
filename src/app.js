import "./style.css";
function functionToRun() {
  const suits = ["&spades;", "&hearts;", "&diams;", "&clubs;"];
  const numbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  function randomNumber(min, max) {
    const randomFloat = Math.random();
    return Math.floor(randomFloat * (max - min) + min);
  }

  const suitsIndex = randomNumber(0, suits.length - 1);
  const numberIndex = randomNumber(0, numbers.length - 1);

  const suitTop = document.querySelector(".suits.top");
  const number = document.querySelector(".number");
  const suitBottom = document.querySelector(".suits.bottom");

  number.innerHTML = numbers[numberIndex];
  suitTop.innerHTML = suits[suitsIndex];
  suitBottom.innerHTML = suits[suitsIndex];
  if ("&hearts;" === suits[suitsIndex] || "&diams;" === suits[suitsIndex]) {
    suitBottom.style.color = "red";
    suitTop.style.color = "red";
  }
}
window.onload = function() {
  functionToRun();
};
