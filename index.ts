
// Create a class Manager for all recipes
// Methods to edit, delete, and display recipes

import { Ingredient, Recipe, RecipeBook } from "./classes"

const myEggs = new Ingredient("eggs", 2, "pcs")
const myBread = new Ingredient("sourdough bread", 1, "pcs")
const myTomatoes = new Ingredient("tomatoes", 1, "pcs")

const myBreakfast = new Recipe("Eggs with bread", "make scrambled eggs, add chopped tomatoes, season, serve on bread", 15, [myBread, myEggs, myTomatoes])
const myBreakfast2 = new Recipe("Cereal", "serve cereal and milk", 2, [])
const fruit = new Recipe("Fruit", "just eat an apple babe", 2, [])

const myBook = new RecipeBook("My recipes")
myBook.addRecipe(myBreakfast)
console.log(myBook.findRecipe("Eggs with bread"))
myBook.addRecipe(myBreakfast)
myBook.addRecipe(myBreakfast2)
myBook.addRecipe(fruit)

console.log(myBook.listRecipes())
myBook.deleteRecipe(1)
console.log(myBook.listRecipes())
