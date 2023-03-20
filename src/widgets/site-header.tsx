import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import { MainNav } from 'widgets/main-nav'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-b-slate-200 bg-white">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Cog6ToothIcon className="h-6 w-6" />
            <Cog6ToothIcon className="h-6 w-6" />
            <Cog6ToothIcon className="h-6 w-6" />
          </nav>
        </div>
      </div>
    </header>
  )
}
