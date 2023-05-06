const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const ingredientsItems = ingredients.map((ingredient) => {
  const ingredientsEl = document.createElement("li");
  ingredientsEl.classList.add("item");
  ingredientsEl.textContent = ingredient;
  // console.log(ingredientsEl);

  return ingredientsEl;
});

ingredientsList.append(...ingredientsItems);
console.log(ingredientsList);
