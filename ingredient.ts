export interface Ingredient {
  name: string;
  quantity: number;
  unit?: Unit;
}

type Unit = "kg" | "g" | "ml" | "l " | "mg" | "lb";
