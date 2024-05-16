/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  const cardElement = document.querySelector(".card");
  if (cardElement) {
    cardElement.classList.add(generateRandomSuit());
    cardElement.innerHTML = generateRandomNumber(); // Limpiamos y agregamos el número.
  }
};
let generateRandomNumber = () => {
  let numbers = [
    "A",
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
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};
let generateRandomSuit = () => {
  let suit = ["diamond", "spade", "heart", "club"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};
