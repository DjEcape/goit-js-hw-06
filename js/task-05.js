// Напиши скрипт который, при наборе текста в инпуте
//  input#name-input (событие input),
//   подставляет его текущее значение в span#name-output.
//    Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" 
// placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

let inputEl = document.querySelector('#name-input');
let outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input',callback);
function callback (){
        let inputEl = document.querySelector('#name-input');
        outputEl.textContent = inputEl.value
if ( inputEl.value.trim() === '' || inputEl.value.lentgh === 0){
    outputEl.textContent = "Anonymous";
    return outputEl.value;
}
}