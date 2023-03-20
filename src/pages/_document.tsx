import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="min-h-screen bg-white font-sans text-gray-900 antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
