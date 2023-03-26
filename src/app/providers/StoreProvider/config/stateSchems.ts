import { BooksSchema } from 'entities/books/model/types/BooksSchema'
import { BookSchema } from 'pages/BookPage'

export interface StateSchema {
  books: BooksSchema
  book: BookSchema
}
