import { Ingredient } from "./ingredient";
import { Int, StringMinLength } from "./validator";

export class Recipe {
  constructor(
    id: number,
    title: string,
    ingredients: Ingredient[],
    instructions: string
  ) {
    this.title = title;
    this.id = id;
    this.ingredients = ingredients;
    this.instructions = instructions;
  }

  @Int()
  id: number;

  @StringMinLength(1)
  title: string;

  ingredients: Ingredient[];

  @StringMinLength(1)
  instructions: string;
}

const recipe = new Recipe(
  1,
  "123",
  [{ name: "pasta", amount: 100, unit: "mg" }],
  "abc"
);
