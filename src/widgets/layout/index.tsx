import { Footer, Header } from './ui'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container flex-1">{children}</main>
      <Footer />
    </div>
  )
}
