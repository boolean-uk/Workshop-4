export interface Ingredient {
  name: string;
  amount: number;
  unit: Unit;
}

type Unit = "ml" | "l" | "mg" | "g" | "kg";
