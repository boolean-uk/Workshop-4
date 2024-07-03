import { Recipe, RecipeBook } from "./classes";

const AppleSauce = new Recipe(0, 'Apple Sauce', ['10 X Apples', '1 Tbs Sugar'], 'Core and slice apples, Mash apples into bowl, add sugar and stir well.')

const MomsFavouriteRecipes = new RecipeBook([AppleSauce]) // Alternate option is to start with an empty array. This will start recipes at index and id 0, without having to manually put it in.

const Treats = new RecipeBook([])
Treats.addRecipe('Chocolate Nubs', ['Chocolate'], 'Melt choclate into bowl and then pour on baking tray in small circles and freeze. Once frozen remove from tray and store in cool place. Simply way of stretching chocolate to last longer.')

console.log(MomsFavouriteRecipes.viewRecipes())

MomsFavouriteRecipes.addRecipe('Chicken Soup', ['Chicken Thighs', 'Vegetable Broth', 'Carrots', 'Celery', 'Salt', 'Pepper'], 'Do a bunch of stuff with these ingredients.')

console.log(MomsFavouriteRecipes.viewRecipes(), Treats.viewRecipes())