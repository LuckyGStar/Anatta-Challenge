export const QueryProductVariants = `{
  products(first: 10, query: "QUERY_CONTEXT") {
    edges {
      node {
        id
        title
        handle
        variants(first: 15) {
          edges {
            node {
              id
              title
              sku
              price
            }
          }
        }
      }
      cursor
    }
    pageInfo {
      hasNextPage
    }
  }
}`
