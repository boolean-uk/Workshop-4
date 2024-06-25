import { Ingredient } from "./ingredient";
import { Recipe } from "./recipe";

export class RecipeBook {
  constructor() {
    this.nextRecipeId = 1;
    this.recipeList = [];
  }

  private nextRecipeId: number;
  private recipeList: Recipe[];

  public add(title: string, ingredients: Ingredient[], instructions: string) {
    const newRecipe = new Recipe(
      this.nextRecipeId++,
      title,
      ingredients,
      instructions
    );

    this.recipeList.push(newRecipe);
    return newRecipe;
  }
}
