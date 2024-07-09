import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', async () => {
  return HttpResponse.json([
    { amount: 12, product: 'Product' },
    { amount: 5, product: 'Product2' },
    { amount: 2, product: 'Product3' },
  ])
})
