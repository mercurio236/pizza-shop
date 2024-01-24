import { api } from '@/lib/axios'

export interface GetManagerRestaurantResponse {
  id: string
  name: string
  createdAt: string | null
  updatedAt: string | null
  description: string | null
  managerId: string | null
}

export async function getManagerRestaurant() {
  const response = await api.get<GetManagerRestaurantResponse>(
    '/managed-restaurant',
  )

  return response.data
}
