"use strict";
// Create a class Manager for all recipes
// Methods to edit, delete, and display recipes
Object.defineProperty(exports, "__esModule", { value: true });
var recipeBook_1 = require("./classes/recipeBook");
var myRecipes = new recipeBook_1.default("Kye's Recipe Book");
myRecipes.addRecipe("Butter on toast", [{ name: "Slice of bread", quantity: 1 }], "Put the slice of bread in the toaster until cooked and spread butter.");
console.log(myRecipes.addRecipe("Recipe", [{ name: "Slice of bread", quantity: 1 }], ""));
console.log(myRecipes.addRecipe("Butter on toast", [{ name: "Slice of bread", quantity: 1 }], "Burn the bread"));
myRecipes.addRecipe("Ham sandwich", [
    { name: "Slice of bread", quantity: 2 },
    { name: "Butter", quantity: 12, unit: "g" },
    { name: "Sliced ham", quantity: 50, unit: "g" },
    { name: "Lettuce", quantity: 30, unit: "g" },
    { name: "Slice of cucumber", quantity: 5 },
    { name: "Slice of tomato", quantity: 3 },
], "Spread the butter on 1 slice of the bread, add the lettuce, ham, tomato and cucumber and place the other slice of bread on top.");
console.log(myRecipes.allRecipes);
myRecipes.updateRecipeById(0, {
    ingredients: [{ name: "Butter", quantity: 10, unit: "g" }],
});
console.log(myRecipes.getRecipeById(0));
console.log(myRecipes.deleteRecipeById(0));
console.log(myRecipes.allRecipes);
