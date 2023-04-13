import type { AppProps } from 'next/app'
import { YMaps } from '@pbe/react-yandex-maps'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Layout } from 'widgets'
import 'shared/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <YMaps>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </YMaps>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
