const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>

// В JavaScript есть массив строк.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredientsList = document.querySelector("#ingredients");

const itemsVegetable1 = document.createElement("li");
itemsVegetable1.textContent = "Potatoes";
itemsVegetable1.classList = "item";
const itemsVegetable2 = document.createElement("li");
itemsVegetable2.textContent = "Mushrooms";
itemsVegetable2.classList = "item";
const itemsVegetable3 = document.createElement("li");
itemsVegetable3.textContent = "Garlic";
itemsVegetable3.classList = "item";
const itemsVegetable4 = document.createElement("li");
itemsVegetable4.textContent = "Tomatos";
itemsVegetable4.classList = "item";
const itemsVegetable5 = document.createElement("li");
itemsVegetable5.textContent = "Herbs";
itemsVegetable5.classList = "item";
const itemsVegetable6 = document.createElement("li");
itemsVegetable6.textContent = "Condiments";
itemsVegetable6.classList = "item";

ingredientsList.append(
  itemsVegetable1,
  itemsVegetable2,
  itemsVegetable3,
  itemsVegetable4,
  itemsVegetable5,
  itemsVegetable6
);

console.log(ingredientsList);
