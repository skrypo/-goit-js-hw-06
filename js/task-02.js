const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const ingredientsList = document.getElementById("ingredients");

// ingredients.forEach(function (element) {
//   const ingredientsItem = document.createElement("li");
//   ingredientsItem.classList = "item";
//   ingredientsItem.textContent = element;
//   ingredientsList.append(ingredientsItem);
// });

// console.log(ingredientsList);

const ingredientsList = document.getElementById("ingredients");
let liElements = "";

ingredients.forEach(function (element) {
  liElements += `<li class="item">${element}</li>`;
});

ingredientsList.innerHTML = liElements;

console.log(ingredientsList);
