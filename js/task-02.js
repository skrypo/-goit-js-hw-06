const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById("ingredients");

ingredients.forEach(function (element) {
  const ingredientsItem = document.createElement("li");
  ingredientsList.append(ingredientsItem);
  ingredientsItem.textContent = element;
  ingredientsItem.classList = "item";
});

console.log(ingredientsList);
