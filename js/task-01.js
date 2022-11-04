// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categoriesList = document.querySelector("#categories");

const numberOfItems = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${numberOfItems.length}`);

const categories = numberOfItems.forEach((numberOfItem) => {
  console.log(`Category: ${numberOfItem.firstElementChild.textContent}
  Elements: ${numberOfItem.querySelectorAll("li").length}`);
});

// const itemRefs = categoriesList.querySelector(".item");
// const itemRef = itemRefs.querySelectorAll("li");
// console.log(itemRef.length);
