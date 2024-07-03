export class Recipe {

    id: number;
    title: string;
    ingredients: string[];
    instructions: string;

    public constructor(id: number, title: string, ingredients: string[], intructions: string) {
        this.id = id
        this.title = title,
            this.ingredients = ingredients,
            this.instructions = intructions
    }

    public getInstructions(): string {
        return this.instructions
    }

    // Simple function to update information in recipe.
    public updateRecipe(key: string, updateInfo: any) {
        if (key === "title") {
            this.title = updateInfo
        } else if (key === "ingredients") {
            this.ingredients = [updateInfo]
        } else if (key === "instructions") {
            this.instructions = updateInfo
        } else {
            return false
        }
    }

    // A method to add items to ingredients
    public addIngredient(newIngredient: string) {
        this.ingredients.push(newIngredient)
    }
}

export class RecipeBook {
    recipes: Recipe[];

    public constructor(recipes: Recipe[]) {
        this.recipes = recipes
    }

    public addRecipe(recipeName: string, ingredients: string[], instructions: string) {
        let id = this.recipes.length
        let newRecipe = new Recipe(id, recipeName, ingredients, instructions)
        this.recipes.push(newRecipe)
        return newRecipe;
    }

    public removeRecipe(recipeName: string): boolean {
        const indexToRemove = this.recipes.findIndex((recipe) => recipe.title === recipeName);
        const titleForRemovalMessage = this.recipes[indexToRemove].title
        if (indexToRemove !== -1) {
            this.recipes.splice(indexToRemove, 1);
            console.log(`${titleForRemovalMessage} removed`)
            return true
        }
        return false; 
    }

    public viewRecipes(): Recipe[] {
        return this.recipes
    }
}