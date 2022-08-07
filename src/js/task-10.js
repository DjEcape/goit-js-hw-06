function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт создания и очистки коллекции элементов.
//  Пользователь вводит количество элементов в input и
//   нажимает кнопку Создать, после чего рендерится коллекция.
//    При нажатии на кнопку Очистить, коллекция элементов очищается.

//    Создай функцию createBoxes(amount),
//    которая принимает один параметр - число.
//    Функция создает столько <div>,
//    сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого,
//  должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
//  Используй готовую функцию getRandomHexColor для получения цвета.

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
