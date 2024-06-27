import Recipe from "./recipe"

interface BookI {
  id: number,
  name: string,
  desc: string
}

interface RecipeDataI {
  title: string,
  ingredients: string[],
  instructions: string
}

class RecipesBook {
  private _idCount: number
  private _recipesList: Recipe[]

  id: number
  name: string
  desc: string

  constructor({ id, name, desc }: BookI) {
    this._idCount = 0
    this._recipesList = []

    this.id = id
    this.name = name
    this.desc = desc
  }

  public update({ name, desc }: Partial<BookI>) {
    if (name) {
      this.name = name
    }

    if (desc) {
      this.desc = desc
    }
  }

  // Recipes
  public addRecipe({ title, ingredients, instructions }: RecipeDataI) {
    const newRecipe = new Recipe({
      id: this._idCount,
      title,
      ingredients,
      instructions
    })

    this._recipesList.push(newRecipe)
    this._idCount++
    return newRecipe
  }

  public deleteRecipe(recipeId: number) {
    this._recipesList = this._recipesList.filter(recipe => recipe.id !== recipeId)
  }

  public updateRecipe(recipeId: number, { title, ingredients, instructions }: Partial<RecipeDataI>) {
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