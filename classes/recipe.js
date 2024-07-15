"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipe = void 0;
var Recipe = /** @class */ (function () {
    function Recipe(_a) {
        var id = _a.id, name = _a.name, ingredients = _a.ingredients, instructions = _a.instructions;
        this.id = id;
        this.name = name;
        this.ingredients = ingredients;
        this.instructions = instructions;
    }
    Recipe.prototype.update = function (_a) {
        var name = _a.name, ingredients = _a.ingredients, instructions = _a.instructions;
        if (name) {
            this.name = name;
        }
        if (ingredients) {
            this.ingredients = ingredients;
        }
        if (instructions) {
            this.instructions = instructions;
        }
    };
    return Recipe;
}());
exports.Recipe = Recipe;
