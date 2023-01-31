function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const box = document.querySelector("#boxes");
const inputEl = document.querySelector("input");

let count = 0;
function findValue(event){
  count = event.currentTarget.value;
}

function createDiv(amount){
  let divBox = [];
  let basicSize = 30;
  for (let i = 0; i < amount; i += 1 ) {
    basicSize +=10;
    const boxes = document.createElement("div");
    boxes.style.width = `${basicSize}` + 'px';
    boxes.style.height = `${basicSize}` + 'px';
    boxes.style.backgroundColor = getRandomHexColor();
    divBox.push(boxes);
  }
  return box.append(...divBox);
}

function destroyDiv (){
  inputEl.value = "";
  box.innerHTML = "";
}
inputEl.addEventListener("input", findValue);
createBtn.addEventListener("click", () => {
  createDiv(Number(inputEl.value))
})
destroyBtn.addEventListener("click", destroyDiv);