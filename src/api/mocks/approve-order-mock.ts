import { http, HttpResponse } from 'msw'

import { ApproveOrderParams } from '../approve-order'

export const approveOrderMock = http.patch<ApproveOrderParams>(
  '/orders/:orderId/approve',
  async ({ params }) => {
    const { orderId } = params

    console.log(orderId)

    if (orderId === 'error-order-id') {
      return new HttpResponse(null, { status: 400 })
    }

    return new HttpResponse(null, { status: 204 })
  },
)
