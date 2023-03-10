function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorButton = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");
const body = document.querySelector("body");
changeColorButton.addEventListener("click", (event) => {
  const backgroundColor = getRandomHexColor();
  body.style.backgroundColor = backgroundColor;
  spanEl.textContent = backgroundColor;
});
