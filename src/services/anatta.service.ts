import {
  Payload,
  GraphqlResponse,
  ProductVariantsResponse,
  ProductNode,
  VariantNode,
  Product,
  Variant,
} from '../interfaces/anatta.interface'
import { QueryProductVariants } from '../queries/shopify'
import fetch from 'node-fetch'

const executeQuery = async <T>(query: string) => {
  const apiUrl = new URL(`${process.env.API_URL}`)
  const request = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': `${process.env.API_KEY}`,
    },
    body: JSON.stringify({
      query: query,
    }),
  })
  const result = (await request.json()) as GraphqlResponse<T>

  return result.data
}

export const queryProductVariants = async (
  payload: Payload
): Promise<Array<Variant>> => {
  try {
    let queryContext = ``
    let sortBy = false

    // check query params
    for (const [key, value] of Object.entries(payload)) {
      if (key === 'title') {
        queryContext = `title:*${value}*`
      }
      if (key === 'sort_by') {
        sortBy = value
      }
      // we can add more filter conditions here...
    }

    const gql = QueryProductVariants.replace(`QUERY_CONTEXT`, queryContext)

    // parse gql response
    const result: ProductVariantsResponse =
      await executeQuery<ProductVariantsResponse>(gql)
    const variants: Array<Variant> = []
    const productNodes: Array<ProductNode> = result.products.edges

    // process variants
    productNodes.forEach((productNode) => {
      const product: Product = productNode.node
      const variantNodes: Array<VariantNode> = product.variants.edges
      if (variantNodes.length) {
        variantNodes.forEach((variantNode) => {
          variants.push(variantNode.node)
        })
      }
    })

    return sortBy
      ? variants.sort(
          (variant1, variant2) =>
            parseFloat(variant1.price) - parseFloat(variant2.price)
        )
      : variants
  } catch (e) {
    throw new Error(`Whoops! API call has been failed!`)
  }
}
