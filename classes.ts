export class Recipe {

    private readonly id: number;
    private readonly title: string;
    private readonly ingredients: string[];
    private readonly instructions: string;

    public constructor(id: number, title: string, ingredients: string[], intructions: string) {
        this.id = id,
            this.title = title,
            this.ingredients = ingredients,
            this.instructions = intructions
    }
}
