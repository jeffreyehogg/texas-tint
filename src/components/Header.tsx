'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import Container from '@/components/Container'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const logo = require('@/images/logo.png')

const isActivePath = (pathname: string, href: string) => pathname === href

const NavItem = ({
  href,
  children,
  onClick,
}: {
  href: string
  children: React.ReactNode
  onClick?: () => void
}) => {
  const pathname = usePathname()
  const isActive = isActivePath(pathname, href)

  return (
    <li onClick={onClick} className="cursor-pointer">
      <Link
        href={href}
        className={clsx(
          'rounded-md px-3 py-2 text-sm font-medium transition duration-300',
          isActive
            ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400'
            : 'hover:text-shadow dark:hover:text-shadow',
          'sm:[&:not(.active)]:text-shadow',
        )}
      >
        {children}
      </Link>
    </li>
  )
}

const DesktopNavigation = () => (
  <nav className="hidden md:block">
    <ul className="flex space-x-4">
      <NavItem href="/">Home</NavItem>
      <NavItem href="/services">Services</NavItem>
      <NavItem href="/contact">Contact</NavItem>
    </ul>
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
        'fixed inset-0 bg-black bg-opacity-50 transition-opacity',
        isOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
      )}
    >
      <div
        className={clsx(
          'absolute right-0 mt-2 w-56 transform rounded-lg bg-white text-gray-900 shadow-xl transition-all dark:bg-zinc-900 dark:text-white',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <button
          onClick={onClose}
          className="absolute right-2 top-2 p-2 text-gray-600"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
        <ul className="text-shadow p-2">
          <NavItem href="/" onClick={onClose}>
            Home
          </NavItem>
          <NavItem href="/services" onClick={onClose}>
            Services
          </NavItem>
          <NavItem href="/contact" onClick={onClose}>
            Contact
          </NavItem>
        </ul>
      </div>
    </div>
  )
}

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isLandingPage = pathname === '/'

  return (
    <header
      className={clsx(
        'fixed top-0 z-50 w-full transition-colors duration-300',
        isScrolled || !isLandingPage
          ? 'bg-white text-gray-900 shadow-md dark:bg-zinc-900 dark:text-white'
          : 'bg-transparent text-white dark:text-white',
        isLandingPage && !isScrolled ? 'text-shadow' : '',
      )}
    >
      <Container className="flex items-center justify-between py-4">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="Texas Tint Logo"
              width={40}
              height={40}
              priority
              className={
                isScrolled || !isLandingPage ? '' : 'contrast-200 filter'
              } // Optionally adjust logo contrast
            />
            <span
              className={clsx(
                'ml-2 hidden text-2xl font-bold sm:inline',
                isScrolled || !isLandingPage
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-white dark:text-white',
              )}
            >
              Texas Tint
            </span>
          </Link>

          <div className="flex items-center space-x-4">
            <DesktopNavigation />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={clsx(
                'p-2 transition-colors duration-300',
                isScrolled || !isLandingPage
                  ? 'text-gray-700 hover:text-gray-900 dark:hover:text-gray-300'
                  : 'text-white hover:text-gray-300 dark:hover:text-gray-300',
                'md:hidden',
              )}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </Container>

      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  )
}
