import { api } from '@/lib/axios'

interface GetManagerRestaurantResponse {
  id: string
  name: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export async function getManagerRestaurant() {
  const response = await api.get<GetManagerRestaurantResponse>(
    '/managed-restaurant',
  )

  return response.data
}
