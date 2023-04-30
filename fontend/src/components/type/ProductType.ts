export interface DetailTypleProduct {
  key: string
  value: string[]
}

export default interface ProductType {
  id: number
  title: string
  slug: string
  main_image: string
  images: string[]
  price: number
  discount: number
  qty: number
  status: number
  category_id: number
  order: number
  short_description: any
  detail_description: any
  detail: DetailTypleProduct[] | null | string
  created_at: string
  updated_at: string
  cart: boolean
}
