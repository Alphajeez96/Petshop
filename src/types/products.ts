import { type Blob } from './global'
export interface Product extends Blob {
  uuid: string
  category: Categories
  price: string
  description: string
  quantity?: number
}

export interface Categories {
  uuid: string
  title: string
}
