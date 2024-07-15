import { Ingredient } from "../ingredient";

interface RecipeInterface {
  id: number;
  name: string;
  ingredients: Ingredient[];
  instructions: string;
}

export class Recipe implements RecipeInterface {
  id: number;
  name: string;
  ingredients: Ingredient[];
  instructions: string;

  constructor({ id, name, ingredients, instructions }: RecipeInterface) {
    this.id = id;
    this.name = name;
    this.ingredients = ingredients;
    this.instructions = instructions;
  }

  public update({
    name,
    ingredients,
    instructions,
  }: Partial<RecipeInterface>): void {
    if (name) {
      this.name = name;
    }

    if (ingredients) {
      this.ingredients = ingredients;
    }

    if (instructions) {
      this.instructions = instructions;
    }
  }
}
