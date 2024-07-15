import { Recipe } from "./recipe";
import { Ingredient } from "../ingredient";

class RecipeBook {
  private readonly title: string;
  private recipes: Recipe[];
  private recipeId: number = 0;

  public constructor(title: string) {
    this.title = title;
    this.recipes = [];
  }

  public get allRecipes(): Recipe[] {
    return this.recipes;
  }

  public addRecipe(
    name: string,
    ingredients: Ingredient[],
    instructions: string
  ): string {
    if (ingredients.length === 0) {
      return "Unable to add recipe: No ingredients added.";
    }

    if (!name || !instructions) {
      return "Unable to add recipe: No name or instructions added.";
    }

    const isRecipeDuplicate = this.recipes.some(
      (recipe) => recipe.name.toLowerCase() === name.toLowerCase()
    );

    if (isRecipeDuplicate) {
      return "Unable to add recipe: A recipe with that name already exists.";
    }

    const recipeToAdd = new Recipe({
      id: this.recipeId++,
      name,
      ingredients,
      instructions,
    });

    this.recipes.push(recipeToAdd);

    return `${name} recipe added to your recipe book: ${this.title}`;
  }
}

export default RecipeBook;
