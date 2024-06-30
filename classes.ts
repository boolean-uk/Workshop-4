
// Create a class Manager for all recipes
// Methods to edit, delete, and display recipes

type unit = "pcs" | "mL" | "L" | "g" | "kg" | "tbsp" | "tsp" | "cups" | "slices"

export class Ingredient {
	name: string
	amount: number
	unit: string

	public constructor (name: string, amount: number, unit: unit) {
		this.name = name
		this.amount = amount
		this.unit = unit
	}
}

export class Recipe {
	title: string
	private instructions?: string
	private duration?: number
	private ingredientList?: Ingredient[]

	public constructor (title: string, instructions?: string, duration?: number, ingredientList?: Ingredient[]) {
		this.title = title
		if (instructions)
			this.instructions = instructions
		if (duration)
			this.duration = duration
		if (ingredientList)
			this.ingredientList = ingredientList
	}

	public describe(): string {
		return (
			`${this.title}
Duration: ${this.duration} min
Ingredients: ${this.ingredientList?.map(el => [el.amount, el.unit, el.name].join(" ")).join("\n")}
Instructions: ${this.instructions}`
		)
	}
}

export class RecipeBook {
	private readonly title: string;
	private recipes: Recipe[];

	public constructor (title: string) {
		this.title = title;
		this.recipes = []
	}

	public addRecipe (newRecipe: Recipe) {
		this.recipes.push(newRecipe)
	}

	public findRecipe(title: string): string {
		return this.recipes.find((recipe) => recipe.title === title)?.describe() || `No recipe titled ${title}.`
	}

	public deleteRecipe(number: number): boolean {
		try {
			if (number > this.recipes.length) throw new Error(`This book only has ${this.recipes.length} recipes!`)
			if (number < 1) throw new Error("Number has to be 1 or higher!")
			const deletedRecipe = this.recipes.splice(number-1, 1)[0]
			if (deletedRecipe) {
				console.log(`Deleted ${deletedRecipe.title}`)
				return true
			} else {
				console.log(`No recipe with number ${number}.`)
				return false
			}
		} catch (error) {
			let message = "unknown error"
			if (error instanceof Error) message = error.message
			console.log(message)
			return false
		}
	}

	public listRecipes(): string {
		return this.recipes.map((recipe, index) => `${index+1} ${recipe.title}`).join("\n")
	}
}
