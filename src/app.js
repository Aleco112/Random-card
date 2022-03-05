const suits = ["&spades;", "&hearts;", "&diams;", "&clubs;"];
undefined;
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

function getRandom(min, max) {
  return Mathrandom()(max - min) + min;
}
function getRandomNumber(min, max) {
  return Math.random()(max - min) + min;
}
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
