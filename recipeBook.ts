import { Ingredient } from "./ingredient";
import { Recipe } from "./recipe";

export class RecipeBook {
  constructor() {
    this._nextRecipeId = 1;
    this._recipeList = [];
  }

  private _nextRecipeId: number;
  private _recipeList: Recipe[];

  public add(title: string, ingredients: Ingredient[], instructions: string) {
    const newRecipe = new Recipe(
      this._nextRecipeId++,
      title,
      ingredients,
      instructions
    );

    this._recipeList.push(newRecipe);
    return newRecipe;
  }

  get recipes() {
    return this._recipeList;
  }
}
