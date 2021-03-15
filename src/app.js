/* eslint-disable */
import "bootstrap";

import "./style.css";

const getVal = num =>
  num == 11 ? "J" : num == 12 ? "Q" : num == 13 ? "K" : num == 14 ? "A" : num;
const getDeck = len => {
  const suites = ["club", "diamond", "heart", "spade"];
  const getRandomCard = () => ({
    num: Math.floor(Math.random() * 14) + 1,
    suit: suites[Math.floor(Math.random() * 4)]
  });
  let deck = [];
  for (let i = 0; i < len; i++) deck.push(getRandomCard());
  return deck;
};

var log = [];
let deck = [];
const selectSort = arr => {
  let min = 0;
  while (min < arr.length - 1) {
    for (let i = min + 1; i < arr.length - 1; i++) {
      if (arr[min].num > arr[i].num) {
        let aux = arr[min];
        arr[min] = arr[i];
        arr[i] = aux;
        log.push(arr.slice(0));
      }
    }
    min++;
  }
  return arr;
};
const renderCard = c =>
  `<div class="card ${c.suit} ${c.hovered}"><span>${getVal(
    c.num
  )}</span></div>`;

document.querySelector("#draw").addEventListener("click", () => {
  deck = getDeck(document.querySelector("#amount").value);
  document.querySelector(".deck.unsorted").innerHTML = deck
    .map(c => renderCard(c))
    .join("");
  document.querySelector(".solution-log").innerHTML = "";
});

document.querySelector("#sort").addEventListener("click", () => {
  selectSort(deck);
  document.querySelector(".solution-log").innerHTML = log
    .map(
      (iter, i) =>
        `<li><i>${i}</i><div class="deck">${iter
          .map(c => renderCard(c))
          .join("")}</div></li>`
    )
    .join("");
});
