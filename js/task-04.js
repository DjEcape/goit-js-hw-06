// Счетчик состоит из спана и кнопок, которые, при клике,
//  должны увеличивать и уменьшать его значение на единицу.
//  Создай переменную counterValue в которой будет храниться 
//  текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или 
// уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue. 
function minus (){
   return counterValue.textContent--;} 
function plus (){
    return counterValue.textContent++;} 

let counterValue = document.querySelector('#value');
let decrementEl = document.querySelector('[data-action="decrement"]');
let incrementEl = document.querySelector('[data-action="increment"]');
decrementEl.addEventListener("click", minus);
incrementEl.addEventListener('click', plus);
