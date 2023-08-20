import { type Blob } from './global'
export interface Product extends Blob {
  uuid: string
  category: Categories
  price: string
  description: string
}

export interface Categories {
  uuid: string
  title: string
}
