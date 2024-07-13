import { Ingredient } from "../ingredient";

interface RecipeInterface {
  id: number;
  name: string;
  ingredients: Ingredient[];
}

export class Recipe implements RecipeInterface {
  id: number;
  name: string;
  ingredients: Ingredient[];

  constructor({ id, name, ingredients }: RecipeInterface) {
    this.id = id;
    this.name = name;
    this.ingredients = ingredients;
  }
}
