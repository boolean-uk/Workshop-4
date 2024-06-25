import { Ingredient } from "./ingredient";
import { Int, StringMinLength } from "./validator";

export class Recipe {
  @Int()
  private _id!: number;
  @StringMinLength(1)
  private _title!: string;
  private _ingredients!: Ingredient[];
  @StringMinLength(1)
  private _instructions!: string;

  constructor(
    id: number,
    title: string,
    ingredients: Ingredient[],
    instructions: string
  ) {
    this.id = id;
    this.title = title;
    this.ingredients = ingredients;
    this.instructions = instructions;
  }

  get id() {
    return this._id;
  }
  set id(value: number) {
    this._id = value;
  }

  get title() {
    return this._title;
  }
  set title(value: string) {
    this._title = value;
  }

  get ingredients() {
    return this._ingredients;
  }
  set ingredients(value: Ingredient[]) {
    this._ingredients = value;
  }

  get instructions() {
    return this._instructions;
  }
  set instructions(value: string) {
    this._instructions = value;
  }
}
