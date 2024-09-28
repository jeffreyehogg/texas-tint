import Link from 'next/link'
import { Container } from '@/components/Container'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="text-zinc-600 transition-colors duration-300 hover:text-blue-500 dark:text-zinc-400 dark:hover:text-blue-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-32 flex-none bg-zinc-100 dark:bg-zinc-800">
      <Container>
        <div className="py-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/contact">Contact</NavLink>
              {/* Add more links as necessary */}
            </nav>

            {/* Copyright Notice */}
            <div className="text-center">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                &copy; {currentYear} Texas Tint Plus, LLC. All rights reserved.
              </p>
              {/* Optional: Social Media Icons or Privacy Policy Link */}
            </div>
          </div>
          {/* Optional: Additional footer content like a tagline or extra links */}
        </div>
      </Container>
    </footer>
  )
}
