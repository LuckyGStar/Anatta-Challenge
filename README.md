# ANATTA CHALLENGE


## Requirements
"Create a script(eg: app.js) that communicates with Shopify through Shopify's graphql APIs. It takes input product names and fetches the 
appropriate products that match the name and list down the variants sorting by price."

## Installation Prerequisites

- [node](https://nodejs.org/en/)


## Getting Started
1. Install dependencies.
```bash
$ npm install
```
2. Run in development mode.
```bash
$ npm run dev
```
3. Build for production.
```bash
$ npm run build
```
4. Run server.
```bash
$ npm run start
```
5. Make sure you are getting this in console.
````
➜  Antta-Challenge git:(master) npm run dev

> anatta-test-rachelle@1.0.0 dev
> ts-node-dev --respawn --pretty --transpile-only src/index.ts

[INFO] 01:35:06 ts-node-dev ver. 2.0.0 (using ts-node ver. 10.9.1, typescript ver. 4.7.4)
Listening on port 3000

````
6. You are good to go! :clap:

## Detailed Requests

1. Query product variants with titles (sorted by)
```
curl http://localhost:3000/api/anatta/products/variants?title=glove&sort_by=price
```

```
➜ curl http://localhost:3000/api/anatta/products/variants?title=glove&sort_by=price
[
  {
    "id": "gid://shopify/ProductVariant/49492883865914",
    "title": "small",
    "sku": "",
    "price": "20.00"
  },
  {
    "id": "gid://shopify/ProductVariant/49492896612666",
    "title": "small",
    "sku": "",
    "price": "22.00"
  },
  {
    "id": "gid://shopify/ProductVariant/49492896645434",
    "title": "medium",
    "sku": "",
    "price": "24.00"
  },
  {
    "id": "gid://shopify/ProductVariant/49492883898682",
    "title": "medium",
    "sku": "",
    "price": "25.00"
  },
  {
    "id": "gid://shopify/ProductVariant/49492883931450",
    "title": "largge",
    "sku": "",
    "price": "28.00"
  },
  {
    "id": "gid://shopify/ProductVariant/49492896678202",
    "title": "large",
    "sku": "",
    "price": "29.00"
  }
]%
```

## Reference
- [Shopify Graphql Api documentation](https://shopify.dev/docs/api/admin-graphql)
