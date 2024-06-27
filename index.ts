
// Create a class Manager for all recipes
// Methods to edit, delete, and display recipes

import Recipes from "./recipesBook";

class Manager extends Recipes {
  recipesList: Recipes

  constructor() {
    super()

    this.recipesList = new Recipes()
  }
}