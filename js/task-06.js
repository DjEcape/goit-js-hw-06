// Напиши скрипт, который при потере фокуса на инпуте 
// (событие blur),
//  проверяет его содержимое на правильное количество введённых 
//  символов.
// Сколько символов должно быть в инпуте,
//  указывается в его атрибуте data-length.
// Если введено подходящее количество символов,
//  то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей,
//  используй CSS-классы valid и invalid,
//   которые мы уже добавили в исходные файлы задания.

// #validation-input {
//     border: 3px solid #bdbdbd;
//   }
  
//   #validation-input.valid {
//     border-color: #4caf50;
//   }
  
//   #validation-input.invalid {
//     border-color: #f44336;
//   }


let inputEl = document.querySelector('#validation-input')
let inputDataLength = inputEl.getAttribute('data-length')
inputEl.onblur = ()=> {
    if (inputEl.value.length === +inputDataLength){
    inputEl.classList.remove('invalid')
    inputEl.classList.add('valid');
}else if (inputEl.value.length === "" || inputEl.value.length === 0){
    inputEl.classList.remove('valid')
    inputEl.classList.remove('invalid');
} else{
    inputEl.classList.remove('valid')
    inputEl.classList.add('invalid');} 
}

