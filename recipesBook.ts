import Recipe from "./recipe"

interface RecipesBookI {
  id: number,
  name: string
}

class RecipesBook {
  private _idCount: number
  private _recipesList: Recipe[]

  constructor() {
    this._idCount = 0
    this._recipesList = []
  }

  public addNew({ title, ingredients, instructions }: Recipe) {
    const newRecipe = new Recipe({
      id: this._idCount,
      title,
      ingredients,
      instructions
    })

    this._recipesList.push(newRecipe)
    this._idCount++
  }

  public delete(recipeId: number) {
    this._recipesList.filter(recipe => recipe.id !== recipeId)
  }

  public update(recipeId: number, { title, ingredients, instructions }: Recipe) {
    const foundRecipe = this._recipesList.find(recipe => recipe.id === recipeId)

    if (foundRecipe) {
      foundRecipe.update({ id: foundRecipe.id, title, ingredients, instructions })
    }
  }

  public getAll(): Recipe[] {
    return this._recipesList
  }

}

export default RecipesBook