import { api } from '@/lib/axios'

export interface GetMonthOrderAmountResponse {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthOrderAmount() {
  const response = await api.get<GetMonthOrderAmountResponse>(
    '/metrics/month-orders-amount',
  )

  return response.data
}
