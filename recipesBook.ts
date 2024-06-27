import Recipe from "./recipe"

class Recipes {
  private _idCount: number
  private _recipesList: Recipe[]

  constructor() {
    this._idCount = 0
    this._recipesList = []
  }

}

export default Recipes