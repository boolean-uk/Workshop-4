import { Ingredient } from "./ingredient";
import { Recipe } from "./recipe";

export class RecipeBook {
  constructor() {
    this._nextRecipeId = 1;
    this._recipeList = [];
  }

  private _nextRecipeId: number;
  private _recipeList: Recipe[];

  get recipes() {
    return this._recipeList;
  }

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

  public delete(id: number) {
    const foundRecipeIndex = this.recipes.findIndex(
      (recipe) => recipe.id === id
    );

    if (foundRecipeIndex === -1) {
      return;
    }

    const deletedRecipe = this._recipeList.splice(foundRecipeIndex, 1)[0];
    return deletedRecipe;
  }

  public find(id: number) {
    return this.recipes.find((recipe) => recipe.id === id);
  }

  public filter(opts: RecipeFilterOptions) {
    const optEntries = Object.entries(opts);

    return this._recipeList.filter((recipe) => {
      let match = true;
      for (const [key, value] of optEntries) {
        if (value !== recipe[key as keyof Recipe]) {
          match = false;
          break;
        }
      }
      if (match) return recipe;
    });
  }
}

interface RecipeFilterOptions {
  id?: number;
  title?: string;
  instructions?: string;
}
