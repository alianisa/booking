import { SiteFooter } from './site-footer'
import { SiteHeader } from './site-header'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="container flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}
