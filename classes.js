"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeBook = exports.Recipe = void 0;
var Recipe = /** @class */ (function () {
    function Recipe(id, title, ingredients, intructions) {
        this.id = id;
        this.title = title,
            this.ingredients = ingredients,
            this.instructions = intructions;
    }
    Recipe.prototype.getInstructions = function () {
        return this.instructions;
    };
    // Simple function to update information in recipe.
    Recipe.prototype.updateRecipe = function (key, updateInfo) {
        if (key === "title") {
            this.title = updateInfo;
        }
        else if (key === "ingredients") {
            this.ingredients = [updateInfo];
        }
        else if (key === "instructions") {
            this.instructions = updateInfo;
        }
        else {
            return false;
        }
    };
    // A method to add items to ingredients
    Recipe.prototype.addIngredient = function (newIngredient) {
        this.ingredients.push(newIngredient);
    };
    return Recipe;
}());
exports.Recipe = Recipe;
var RecipeBook = /** @class */ (function () {
    function RecipeBook(recipes) {
        this.recipes = recipes;
    }
    RecipeBook.prototype.addRecipe = function (recipeName, ingredients, instructions) {
        var id = this.recipes.length;
        var newRecipe = new Recipe(id, recipeName, ingredients, instructions);
        this.recipes.push(newRecipe);
        return newRecipe;
    };
    RecipeBook.prototype.removeRecipe = function (recipeName) {
        var indexToRemove = this.recipes.findIndex(function (recipe) { return recipe.title === recipeName; });
        var titleForRemovalMessage = this.recipes[indexToRemove].title;
        if (indexToRemove !== -1) {
            this.recipes.splice(indexToRemove, 1);
            console.log("".concat(titleForRemovalMessage, " removed"));
            return true;
        }
        return false;
    };
    RecipeBook.prototype.viewRecipes = function () {
        return this.recipes;
    };
    return RecipeBook;
}());
exports.RecipeBook = RecipeBook;

