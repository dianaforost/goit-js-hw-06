function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorButton = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");
const body = document.querySelector("body");
changeColorButton.addEventListener("click", (event) => {
  body.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = body.style.backgroundColor;
});
