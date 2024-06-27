import Manager from "./manager";

const manager = new Manager()

// create books
const PizzaBook = manager.createBook({
  name: "Pizza book",
  desc: "This the book with delicious pizzas"
})

const TestBook = manager.createBook({
  name: "Test book",
  desc: "This book for the test"
})

console.log("All Books: --------------------------------");
console.log(manager.showAllBooks());

// update book
manager.updateBook(TestBook.id, { name: "Test updated book" })
console.log("Updated Book: --------------------------------");
console.log(manager.showAllBooks());

// delete book
manager.deleteBook(TestBook.id)
console.log("Deleted Book: --------------------------------");
console.log(manager.showAllBooks());

// Add new recipes
const TomatoPizza = PizzaBook.addRecipe({
  title: "Tomato Pizza",
  ingredients: [
    "1 pizza dough",
    "1/2 cup tomato sauce",
    "1 cup shredded mozzarella cheese",
    "1 large tomato, thinly sliced",
    "1/4 cup grated Parmesan cheese",
    "1 teaspoon dried oregano",
    "1 teaspoon dried basil",
    "1 tablespoon olive oil",
    "Salt and pepper to taste"
  ],
  instructions: `
1. Preheat the oven to 475°F (245°C).
2. Roll out the pizza dough on a floured surface to your desired thickness.
3. Spread the tomato sauce evenly over the dough, leaving a small border around the edges.
4. Sprinkle the shredded mozzarella cheese over the tomato sauce.
5. Arrange the tomato slices evenly over the cheese.
6. Sprinkle the grated Parmesan cheese, dried oregano, and dried basil over the tomato slices.
7. Drizzle the olive oil over the top and season with salt and pepper.
8. Bake the pizza in the preheated oven for 10-12 minutes, or until the crust is golden and the cheese is bubbly and slightly browned.
9. Remove from the oven and let cool for a few minutes before slicing and serving.
  `
});
const PepperoniPizza = PizzaBook.addRecipe({
  title: "Pepperoni Pizza",
  ingredients: [
    "1 pizza dough",
    "1/2 cup pizza sauce",
    "1 1/2 cups shredded mozzarella cheese",
    "1/2 cup sliced pepperoni",
    "1/4 cup grated Parmesan cheese",
    "1 teaspoon dried oregano",
    "1 teaspoon dried basil",
    "1 tablespoon olive oil",
    "Salt and pepper to taste"
  ],
  instructions: `
1. Preheat the oven to 475°F (245°C).
2. Roll out the pizza dough on a floured surface to your desired thickness.
3. Spread the pizza sauce evenly over the dough, leaving a small border around the edges.
4. Sprinkle the shredded mozzarella cheese over the pizza sauce.
5. Arrange the pepperoni slices evenly over the cheese.
6. Sprinkle the grated Parmesan cheese, dried oregano, and dried basil over the top.
7. Drizzle the olive oil over the top and season with salt and pepper.
8. Bake the pizza in the preheated oven for 10-12 minutes, or until the crust is golden and the cheese is bubbly and slightly browned.
9. Remove from the oven and let cool for a few minutes before slicing and serving.
  `
});

console.log("Pizza Book recipes: --------------------------------");
console.log(PizzaBook.getAllRecipes());

// update recipes
PizzaBook.updateRecipe(TomatoPizza.id, { title: "Tomato Pizza updated" })
PizzaBook.updateRecipe(PepperoniPizza.id, { title: "Pepperoni Pizza updated" })
console.log("Updated Pizza recipes: --------------------------------");
console.log(PizzaBook.getAllRecipes());

// delete recipe
PizzaBook.deleteRecipe(TomatoPizza.id)
console.log("Deleted Pizza recipes: --------------------------------");
console.log(PizzaBook.getAllRecipes());







