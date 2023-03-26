import { FetchParams } from 'entities/books/model/types/FetchParams'

interface IndustryIdentifier {
  type: string
  identifier: string
}

export interface SaleInfo {
  country: string
  saleability: string
  isEbook: boolean
}

interface Epub {
  isAvailable: boolean
}

interface Pdf {
  isAvailable: boolean
}

interface SearchInfo {
  textSnippet: string
}

export interface AccessInfo {
  country: string
  viewability: string
  embeddable: boolean
  publicDomain: boolean
  textToSpeechPermission: string
  epub: Epub
  pdf: Pdf
  webReaderLink: string
  accessViewStatus: string
  quoteSharingAllowed: boolean
}

export interface VolumeInfo {
  title?: string
  authors?: string[]
  publisher?: string
  publishedDate?: string
  description?: string
  industryIdentifiers?: IndustryIdentifier[]
  pageCount?: number
  categories?: string[]
  averageRating?: number
  ratingsCount?: number
  imageLinks?: {
    smallThumbnail?: string
    thumbnail?: string
  }
  language?: string
  previewLink?: string
  infoLink?: string
  canonicalVolumeLink?: string
}

export interface Book {
  id: string
  volumeInfo: VolumeInfo
  saleInfo: SaleInfo
  accessInfo: AccessInfo
  searchInfo: SearchInfo
}

export interface BooksSchema {
  kind?: string
  totalItems: number
  items: Book[]
  isLoading: boolean
  error: string | null
  params: FetchParams
  paginationMarker: boolean
}
