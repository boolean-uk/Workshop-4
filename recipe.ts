import { Ingredient } from "./ingredient";
import { Int, StringMinLength } from "./validator";

export class Recipe {
  private _id: number;
  private _title: string;
  private _ingredients: Ingredient[];
  private _instructions: string;

  constructor(
    id: number,
    title: string,
    ingredients: Ingredient[],
    instructions: string
  ) {
    this._title = title;
    this._id = id;
    this._ingredients = ingredients;
    this._instructions = instructions;
  }

  get id() {
    return this._id;
  }
  @Int()
  set id(value: number) {
    this._id = value;
  }

  get title() {
    return this._title;
  }
  @StringMinLength(1)
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
  @StringMinLength(1)
  set instructions(value: string) {
    this._instructions = value;
  }
}
