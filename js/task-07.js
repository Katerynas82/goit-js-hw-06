// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const inputEl = document.getElementById("font-size-control");

const styleText = document.getElementById("text");

inputEl.addEventListener("input", function () {
  styleText.style.fontSize = inputEl.value + "px";
});
console.log(inputEl);
