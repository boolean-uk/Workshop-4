"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var recipe_1 = require("./recipe");
var RecipeBook = /** @class */ (function () {
    function RecipeBook(title) {
        this.recipeId = 0;
        this.title = title;
        this.recipes = [];
    }
    Object.defineProperty(RecipeBook.prototype, "allRecipes", {
        get: function () {
            return this.recipes;
        },
        enumerable: false,
        configurable: true
    });
    RecipeBook.prototype.addRecipe = function (name, ingredients, instructions) {
        if (ingredients.length === 0) {
            return "Unable to add recipe: No ingredients added.";
        }
        if (!name || !instructions) {
            return "Unable to add recipe: No name or instructions added.";
        }
        var isRecipeDuplicate = this.recipes.some(function (recipe) { return recipe.name.toLowerCase() === name.toLowerCase(); });
        if (isRecipeDuplicate) {
            return "Unable to add recipe: A recipe with that name already exists.";
        }
        var recipeToAdd = new recipe_1.Recipe({
            id: this.recipeId++,
            name: name,
            ingredients: ingredients,
            instructions: instructions,
        });
        this.recipes.push(recipeToAdd);
        return "".concat(name, " recipe added to your recipe book: ").concat(this.title);
    };
    RecipeBook.prototype.deleteRecipeById = function (id) {
        var foundRecipe = this.recipes.find(function (recipe) { return recipe.id === id; });
        if (!foundRecipe) {
            return "No recipes found with given ID";
        }
        this.recipes = this.recipes.filter(function (recipe) { return recipe.id !== id; });
        return "Recipe with ID: ".concat(id, " deleted.");
    };
    RecipeBook.prototype.updateRecipeById = function (id, _a) {
        var name = _a.name, ingredients = _a.ingredients, instructions = _a.instructions;
        var foundRecipe = this.recipes.find(function (recipe) { return recipe.id === id; });
        if (!foundRecipe) {
            return "No recipes found with given ID";
        }
        foundRecipe.update({ name: name, ingredients: ingredients, instructions: instructions });
        return "Recipe with ID: ".concat(id, " updated.");
    };
    RecipeBook.prototype.getRecipeById = function (id) {
        var foundRecipe = this.recipes.find(function (recipe) { return recipe.id === id; });
        if (!foundRecipe) {
            return "No recipes found with given ID";
        }
        return foundRecipe;
    };
    return RecipeBook;
}());
exports.default = RecipeBook;
