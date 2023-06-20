const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// Завдання 2
// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const listEl = document.getElementById("ingredients");

const ingredientsList = ingredients.map((ingredient) => {
  const itemIngEl = document.createElement("li");

  itemIngEl.classList.add("item");

  itemIngEl.textContent = ingredient;

  return itemIngEl;
});
listEl.append(...ingredientsList);
