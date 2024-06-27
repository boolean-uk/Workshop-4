
// Create a class Manager for all recipes
// Methods to edit, delete, and display recipes

import RecipesBook from "./recipesBook";

class Manager {
  private _idCount: number
  private _recipesBookList: RecipesBook[]

  constructor() {
    this._idCount = 0
    this._recipesBookList = []
  }

  public createBook({ name, desc }: RecipesBook) {
    const newBook = new RecipesBook({
      id: this._idCount,
      name,
      desc
    })

    this._recipesBookList.push(newBook)
    this._idCount++
  }

  public deleteBook(bookId: number) {
    this._recipesBookList.filter(book => book.id !== bookId)
  }

  public updateBook(bookId: number, { name, desc }: RecipesBook) {
    const foundBook = this._recipesBookList.find(book => book.id === bookId)

    if (foundBook) {
      foundBook.update({ id: foundBook.id, name, desc })
    }
  }

}
