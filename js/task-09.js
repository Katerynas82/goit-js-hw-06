// console.log("hah");

// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

const bodyStyle = document.querySelector("body");

const typeColor = document.querySelector(".color");

const btnChangeColor = document.querySelector(".change-color");

btnChangeColor.addEventListener("click", () => {
  const colorEl = getRandomHexColor();

  bodyStyle.style.backgroundColor = colorEl;

  typeColor.textContent = colorEl;

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
});
