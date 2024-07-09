import { http, HttpResponse } from 'msw'

import { GetMonthOrdersAmountResponse } from '../get-month-orders-amount'

export const getMonthOrdersAmountMock = http.get<
  never,
  never,
  GetMonthOrdersAmountResponse
>('/metrics/day-orders-amount', async () => {
  return HttpResponse.json({
    amount: 20,
    diffFromLastMonth: -4,
  })
})
