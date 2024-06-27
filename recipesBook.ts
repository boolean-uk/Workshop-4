import Recipe from "./recipe"

class Recipes {
  private _idCount: number
  private _recipesList: Recipe[]

  constructor() {
    this._idCount = 0
    this._recipesList = []
  }

  private addNew({ title, ingredients, instructions }: Recipe) {
    const newRecipe = new Recipe({
      id: this._idCount,
      title,
      ingredients,
      instructions
    })

    this._recipesList.push(newRecipe)
    this._idCount++
  }

}

export default Recipes