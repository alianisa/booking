import type { AppProps } from 'next/app'
import { YMaps } from '@pbe/react-yandex-maps'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Layout } from 'widgets'
import 'shared/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <YMaps>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </YMaps>
  )
}
