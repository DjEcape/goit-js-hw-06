function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('[type="number"]');
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

btnCreate.addEventListener("click", creatingBoxes);
btnDestroy.addEventListener("click", destroingBoxes);



function creatingBoxes() {
  boxesEl.innerHTML ='';
  let arr = [];
  for (let i = 1; i <= inputEl.value; i+=1) {
    const newBox = document.createElement("div");
    newBox.style.width = i*10 + 20 +'px';
    newBox.style.height = i*10 + 20 +'px';
    newBox.style.backgroundColor = getRandomHexColor();

    arr.push(newBox);
  }
  boxesEl.append(...arr);
}

function destroingBoxes() {
  boxesEl.innerHTML ='';
}
