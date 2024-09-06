// Basic types
export interface Payload {
  title?: string | undefined
  limit?: number
  offset?: number
  sort_by?: string
}

export interface GraphqlResponse<T> {
  data: T
}

export interface ProductVariantsResponse {
  products: ProductsResponse
}

export interface ProductsResponse {
  edges: Array<ProductNode>
}

export interface ProductNode {
  node: Product
}

export interface Product {
  id: string
  title: string
  handle: string
  variants: VariantsResponse
}

export interface VariantsResponse {
  edges: Array<VariantNode>
}

export interface VariantNode {
  node: Variant
}

export interface Variant {
  id: string
  title: string
  sku: string
  price: string
}

export interface Pagination {
  limit: number
  offset: number
  count: number
  total: number
}
