'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const logo = require('@/images/logo.png')

const isActivePath = (pathname: string, href: string) => pathname === href

const NavItem = ({
  href,
  children,
  onClick,
  isProminent = false,
  isScrolled = false,
  isLandingPage = false,
}: {
  href: string
  children: React.ReactNode
  onClick?: () => void
  isProminent?: boolean
  isScrolled?: boolean
  isLandingPage?: boolean
}) => {
  const pathname = usePathname()
  const isActive = isActivePath(pathname, href)
  
  const textClass = isScrolled || !isLandingPage
    ? (isActive ? 'text-white' : isProminent ? 'text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-900/20' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800')
    : (isActive ? 'text-white' : isProminent ? 'text-brand-300 hover:bg-white/10' : 'text-gray-100 hover:bg-white/10 hover:text-white')

  return (
    <li onClick={onClick} className="cursor-pointer list-none">
      <Link
        href={href}
        className={clsx(
          'rounded-full px-4 py-2 text-sm transition-all duration-300',
          isProminent ? 'font-bold' : 'font-medium',
          isActive && 'bg-brand-600 shadow-md',
          !isActive && textClass
        )}
      >
        {children}
      </Link>
    </li>
  )
}

const DesktopNavigation = ({ isScrolled, isLandingPage }: { isScrolled: boolean, isLandingPage: boolean }) => (
  <nav className="hidden md:flex items-center space-x-2">
    <ul className="flex items-center space-x-1 m-0 p-0">
      <NavItem href="/" isScrolled={isScrolled} isLandingPage={isLandingPage}>Home</NavItem>
      <NavItem href="/commercial" isProminent isScrolled={isScrolled} isLandingPage={isLandingPage}>Commercial</NavItem>
      <NavItem href="/residential" isScrolled={isScrolled} isLandingPage={isLandingPage}>Residential</NavItem>
      <NavItem href="/automotive" isScrolled={isScrolled} isLandingPage={isLandingPage}>Automotive</NavItem>
      <NavItem href="/contact" isScrolled={isScrolled} isLandingPage={isLandingPage}>Contact</NavItem>
    </ul>
    <div className="pl-4 ml-4 border-l border-gray-300 dark:border-gray-700">
      <Link
        href="/quote"
        className="inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 transition-colors"
      >
        Get a Commercial Quote
      </Link>
    </div>
  </nav>
)

const MobileNavigation = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) => {
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, onClose])

  return (
    <div
      ref={menuRef}
      className={clsx(
        'fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity md:hidden',
        isOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
      )}
    >
      <div
        className={clsx(
          'absolute right-0 h-full w-72 transform bg-white p-6 shadow-2xl transition-transform dark:bg-zinc-900 overflow-y-auto',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        <div className="mt-8 flex flex-col space-y-4">
          <Link href="/" onClick={onClose} className="text-lg font-semibold text-gray-900 dark:text-white">
            Home
          </Link>
          <Link href="/commercial" onClick={onClose} className="text-lg font-bold text-brand-600 dark:text-brand-400">
            Commercial
          </Link>
          <Link href="/residential" onClick={onClose} className="text-lg font-semibold text-gray-900 dark:text-white">
            Residential
          </Link>
          <Link href="/automotive" onClick={onClose} className="text-lg font-semibold text-gray-900 dark:text-white">
            Automotive
          </Link>
          <Link href="/contact" onClick={onClose} className="text-lg font-semibold text-gray-900 dark:text-white">
            Contact
          </Link>
          <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-800">
            <Link
              href="/quote"
              onClick={onClose}
              className="block w-full rounded-full bg-brand-600 px-6 py-3 text-center text-base font-semibold text-white shadow-sm hover:bg-brand-500"
            >
              Get a Commercial Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isLandingPage = pathname === '/'

  return (
    <header
      className={clsx(
        'fixed top-0 z-40 w-full transition-all duration-500 ease-in-out',
        isScrolled || !isLandingPage
          ? 'bg-white/90 py-3 shadow-lg backdrop-blur-md dark:bg-zinc-900/90'
          : 'bg-transparent py-6',
        isLandingPage && !isScrolled ? 'text-white' : 'text-gray-900 dark:text-white',
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <div className={clsx(
            "relative transition-transform duration-300 group-hover:scale-105",
             isScrolled || !isLandingPage ? "" : "brightness-0 invert"
          )}>
             <Image
              src={logo}
              alt="Texas Tint Logo"
              width={40}
              height={40}
              priority
            />
          </div>
          <span
            className={clsx(
              'text-xl font-bold tracking-tight transition-colors',
              isScrolled || !isLandingPage
                ? 'text-brand-700 dark:text-brand-400'
                : 'text-white',
            )}
          >
            Texas Tint
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <DesktopNavigation isScrolled={isScrolled} isLandingPage={isLandingPage} />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={clsx(
              'rounded-full p-2 transition-colors hover:bg-gray-100/20 md:hidden',
              isScrolled || !isLandingPage ? 'text-gray-900 dark:text-white' : 'text-white'
            )}
            aria-label="Toggle menu"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </div>

      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  )
}

export default NavBar