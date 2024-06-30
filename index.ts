
// Create a class Manager for all recipes
// Methods to edit, delete, and display recipes

import { Ingredient, Recipe, RecipeBook } from "./classes"

const myEggs = new Ingredient("eggs", 2, "pcs")
const myBread = new Ingredient("sourdough bread", 1, "pcs")
const myTomatoes = new Ingredient("tomatoes", 1, "pcs")

const myBreakfast = new Recipe("Eggs with bread", "make scrambled eggs, add chopped tomatoes, season, serve on bread", 15, [myBread, myEggs, myTomatoes])

const myBook = new RecipeBook("My recipes")
myBook.addRecipe(myBreakfast)
console.log(myBook.listRecipes())
console.log(myBook.findRecipe("Eggs with bread"))
