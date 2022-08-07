function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



// Напиши скрипт, 
// который изменяет цвета фона элемента <body> через 
// инлайн стиль при клике на button.change-color и
//  выводит значение цвета в span.color.
{/* <div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>
Для генерации случайного цвета используй функцию
 getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
} */}


const buttonChangeColor = document.querySelector('.change-color');
const bodyColor = document.querySelector('body');
const textColor = document.querySelector('.color');

buttonChangeColor.addEventListener('click', call);

function call () {
  bodyColor.style.backgroundColor = getRandomHexColor();
  bodyColor.style.color = getRandomHexColor();
textColor.textContent = getRandomHexColor();
buttonChangeColor.style.color = getRandomHexColor();
buttonChangeColor.style.backgroundColor = getRandomHexColor();
}