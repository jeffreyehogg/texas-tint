'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import { Bars3Icon } from '@heroicons/react/24/solid'

const logo = require('@/images/logo.png')

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
  const isActive = pathname === href

  return (
    <li onClick={onClick} className="cursor-pointer">
      <Link
        href={href}
        className={clsx(
          'px-3 py-2 transition-colors duration-300',
          isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600',
        )}
      >
        {children}
      </Link>
    </li>
  )
}

const DesktopNavigation = () => (
  <nav className="hidden md:block">
    <ul className="flex space-x-8 text-lg font-medium">
      <NavItem href="/">Home</NavItem>
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
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      onClose()
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
        'absolute right-0 top-16 w-48 transform rounded-lg bg-white shadow-xl transition-all duration-300',
        isOpen
          ? 'visible scale-100 opacity-100'
          : 'invisible scale-95 opacity-0',
      )}
    >
      <ul className="py-2">
        <NavItem href="/" onClick={onClose}>
          Home
        </NavItem>
        <NavItem href="/contact" onClick={onClose}>
          Contact
        </NavItem>
      </ul>
    </div>
  )
}

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <Container className="flex items-center justify-between py-4">
        <div className="flex items-center">
          {/* Logo */}
          <Link href="/" className="flex flex-grow items-center">
            <Image
              src={logo}
              alt="Texas Tint Logo"
              width={48}
              height={48}
              priority
            />
          </Link>
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="ml-4 flex items-center text-gray-700 hover:text-gray-900 md:hidden"
            aria-label="Toggle menu"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>

          {/* Desktop Navigation */}
          <DesktopNavigation />

          <MobileNavigation
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        </div>
      </Container>
    </header>
  )
}
