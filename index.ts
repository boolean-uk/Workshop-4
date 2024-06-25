// Create a class Manager for all recipes
// Methods to edit, delete, and display recipes

import { RecipeBook } from "./recipeBook";
import { Ingredient } from "./ingredient";

const book = new RecipeBook();
const pasPasIng: Ingredient[] = [
  { name: "pasta 1", amount: 100, unit: "g" },
  { name: "pasta 2", amount: 200, unit: "g" },
];
const pizzaIng: Ingredient[] = [
  { name: "tomato", amount: 200, unit: "kg" },
  { name: "dough", amount: 150, unit: "kg" },
];

book.add("pasta pasta", pasPasIng, "Combine pasta 1 with pasta 2");
book.add("pasta pasta", pasPasIng, "Combine pasta 2 with pasta 1");
book.add("tomato pizza", pizzaIng, "Combine tomato with dough");

const allRecipes = book.recipes;

const pastaById = book.find(1);

if (pastaById) {
  pastaById.instructions = "do pasta with the pasta"
}

const pastaFilter = book.filter({ title: "pasta pasta" });

const deletedPasta = book.delete(2);
