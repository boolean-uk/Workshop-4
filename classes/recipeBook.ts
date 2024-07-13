import { Recipe } from "./recipe";

class RecipeBook {
  private readonly _title: string;
  private _recipes: Recipe[];
  private _recipeId: number = 0;

  public constructor(title: string) {
    this._title = title;
    this._recipes = [];
  }

  public get allRecipes(): Recipe[] {
    return this._recipes;
  }
}

export default RecipeBook;
