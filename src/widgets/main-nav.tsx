import * as React from 'react'
import Link from 'next/link'
import { cn } from 'shared/lib/utils'
import { Button } from 'shared/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from 'shared/ui/dropdown-menu'
import { Icons } from './icons'

const navItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Playground',
    href: '/playground',
  },
  {
    title: 'Search',
    href: '/search',
  },
]
export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">Booking</span>
      </Link>
      {navItems?.length ? (
        <nav className="hidden gap-6 md:flex">
          {navItems?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    'flex items-center text-lg font-semibold text-slate-600 hover:text-slate-900 sm:text-sm'
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" className="-ml-4 text-base hover:bg-transparent focus:ring-0 md:hidden">
            <Icons.logo className="mr-2 h-4 w-4" /> <span className="font-bold">Menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" sideOffset={24} className="w-[300px] overflow-scroll">
          <DropdownMenuLabel>
            <Link href="/" className="flex items-center">
              <Icons.logo className="mr-2 h-4 w-4" /> Booking
            </Link>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {navItems?.map(
            (item, index) =>
              item.href && (
                <DropdownMenuItem key={index} asChild>
                  <Link href={item.href}>{item.title}</Link>
                </DropdownMenuItem>
              )
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
