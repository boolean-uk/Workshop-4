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

  private delete(recipeId: number) {
    this._recipesList.filter(recipe => recipe.id !== recipeId)
  }

  private update(recipeId: number, { title, ingredients, instructions }: Recipe) {
    const foundRecipe = this._recipesList.find(recipe => recipe.id === recipeId)

    if (foundRecipe) {
      foundRecipe.update({ id: foundRecipe.id, title, ingredients, instructions })
    }
  }

}

export default Recipes