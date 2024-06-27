
// Create a class Manager for all recipes
// Methods to edit, delete, and display recipes

import RecipesBook from "./recipesBook";

interface BookDataI {
  name: string,
  desc: string
}

class Manager {
  private _recipesBookList: RecipesBook[]

  constructor() {
    this._recipesBookList = []
  }

  public createBook({ name, desc }: BookDataI) {
    const newBook = new RecipesBook({
      id: Date.now(),
      name,
      desc
    })

    this._recipesBookList.push(newBook)
    return newBook
  }

  public deleteBook(bookId: number) {
    this._recipesBookList.filter(book => book.id !== bookId)
  }

  public updateBook(bookId: number, { name, desc }: BookDataI) {
    const foundBook = this._recipesBookList.find(book => book.id === bookId)

    if (foundBook) {
      foundBook.update({ id: foundBook.id, name, desc })
    }
  }

  public showAllBooks(): RecipesBook[] {
    return this._recipesBookList
  }

}

const manager = new Manager()

const PizzaBook = manager.createBook({
  name: "Pizzas",
  desc: "This is the book with pizzas"
})



