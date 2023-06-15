// // /Завдання 5
// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputEl = document.getElementById("name-input");

const messageEl = document.getElementById("name-output");

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  const userName = inputEl.value;
  messageEl.textContent = event.currentTarget.value;
  if (userName.trim() === "") {
    messageEl.textContent = "Anonymous";
  } else {
    messageEl.textContent = userName;
  }
}
