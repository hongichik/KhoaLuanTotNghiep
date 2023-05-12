import ProductType from '@/components/type/ProductType';
export interface PayType {
    id: number
    user_id: number
    product_id: number
    detail: string
    count: number
    status: number
    type: number
    address: string
    phone: string
    info_pay: string
    created_at: string
    updated_at: string
    product: ProductType
  }
  