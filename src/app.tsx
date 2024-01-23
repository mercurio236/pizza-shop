import { RouterProvider } from 'react-router-dom'
import './global.css'
import { router } from './pages/routes'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'
import { ThemeProvider } from './components/theme/theme-provider'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | Pizza Shop" />
        <Toaster richColors />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}
