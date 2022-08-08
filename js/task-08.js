// Обработка отправки формы form.login-form должна быть по событию
// submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля,
//  выводи alert с предупреждением о том,
//  что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму,
// собери значения полей в обьект, где имя поля будет именем свойства,
//  а значение поля - значением свойства.
//   Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и
// очисти значения полей формы методом reset.
const formEl = document.querySelector(".login-form");
const inputMailEl = document.querySelector('[name="email"]');
const inputPasswordEl = document.querySelector('[name="password"]');

formEl.addEventListener("submit", submiting);

function submiting(event) {
  event.preventDefault();
  if (inputMailEl.value.trim() === "" || inputPasswordEl.value.trim() === "") {
    alert('input something');
  } else {
    const inputedObj = {
      email: inputMailEl.value,
      password: inputPasswordEl.value,
    };
    console.log(inputedObj);
  }
  event.currentTarget.reset();
}
