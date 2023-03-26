import { AccessInfo, SaleInfo, VolumeInfo } from 'entities/books/model/types/BooksSchema'

export interface Book {
  kind?: string
  id?: string
  etag?: string
  selfLink?: string
  volumeInfo: VolumeInfo
  saleInfo?: SaleInfo
  accessInfo?: AccessInfo
}

export interface BookSchema {
  book: Book
  isLoading: boolean
  error: string | null
}

export interface FetchParams {
  id: string
  key: string
}
