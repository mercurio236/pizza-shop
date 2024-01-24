import { api } from '@/lib/axios'

export interface GetMonthCaceledOrdersResponse {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthCaceledOrders() {
  const response = await api.get<GetMonthCaceledOrdersResponse>(
    '/metrics/month-canceled-orders-amount',
  )

  return response.data
}
