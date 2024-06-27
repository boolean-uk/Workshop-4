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
  private _recipesList: Recipe[]

  id: number
  name: string
  desc: string

  constructor({ id, name, desc }: BookI) {
    this.id = id
    this.name = name
    this.desc = desc
    this._recipesList = []
  }

  public update({ name, desc }: BookI) {
    this.name = name
    this.desc = desc
  }

  // Recipes
  public addRecipe({ title, ingredients, instructions }: RecipeDataI) {
    const newRecipe = new Recipe({
      id: Date.now(),
      title,
      ingredients,
      instructions
    })

    this._recipesList.push(newRecipe)
  }

  public deleteRecipe(recipeId: number) {
    this._recipesList.filter(recipe => recipe.id !== recipeId)
  }

  public updateRecipe(recipeId: number, { title, ingredients, instructions }: RecipeDataI) {
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