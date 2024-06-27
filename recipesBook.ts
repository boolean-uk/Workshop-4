import Recipe from "./recipe"

interface RecipesBookI {
  id: number,
  name: string,
  desc: string
}

class RecipesBook {
  private _idCount: number
  private _recipesList: Recipe[]

  id: number
  name: string
  desc: string

  constructor({ id, name, desc }: RecipesBookI) {
    this.id = id
    this.name = name
    this.desc = desc
    this._idCount = 0
    this._recipesList = []
  }

  public update({ name, desc }: RecipesBookI) {
    this.name = name
    this.desc = desc
  }

  // Recipes
  public addRecipe({ title, ingredients, instructions }: Recipe) {
    const newRecipe = new Recipe({
      id: this._idCount,
      title,
      ingredients,
      instructions
    })

    this._recipesList.push(newRecipe)
    this._idCount++
  }

  public deleteRecipe(recipeId: number) {
    this._recipesList.filter(recipe => recipe.id !== recipeId)
  }

  public updateRecipe(recipeId: number, { title, ingredients, instructions }: Recipe) {
    const foundRecipe = this._recipesList.find(recipe => recipe.id === recipeId)

    if (foundRecipe) {
      foundRecipe.update({ id: foundRecipe.id, title, ingredients, instructions })
    }
  }

  public getAllRecipes(): Recipe[] {
    return this._recipesList
  }

}

export default RecipesBook