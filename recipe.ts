interface RecipeI {
  id: number,
  title: string,
  ingredients: string[],
  instructions: string
}

class Recipe implements RecipeI {
  id: number
  title: string
  ingredients: string[]
  instructions: string

  constructor({ id, title, ingredients, instructions }: RecipeI) {
    this.id = id
    this.title = title
    this.ingredients = ingredients
    this.instructions = instructions
  }
}

export default Recipe