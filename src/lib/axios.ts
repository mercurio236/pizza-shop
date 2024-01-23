import { env } from '@/env'
import axios from 'axios'

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true, // isso vai fazer com que os cookies do frontend sejam enviados automaticamente para o backend
})
