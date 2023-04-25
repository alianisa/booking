import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import { Navbar } from './navbar'

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-b-slate-200 bg-white">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Navbar />
        {/* <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Cog6ToothIcon className="h-6 w-6" />
            <Cog6ToothIcon className="h-6 w-6" />
            <Cog6ToothIcon className="h-6 w-6" />
          </nav>
        </div> */}
      </div>
    </header>
  )
}
