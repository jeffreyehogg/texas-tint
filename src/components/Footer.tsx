import Link from 'next/link'
import { ContainerInner, ContainerOuter } from '@/components/Container'

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
      <ContainerOuter>
        <div className="py-10">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              {/* Navigation Links */}
              <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
                <NavLink href="/">Home</NavLink>
                {/* <NavLink href="/about">About</NavLink> */}
                <NavLink href="/services">Services</NavLink>
                <NavLink href="/contact">Contact</NavLink>
                {/* Add more links as necessary */}
              </nav>

              {/* Copyright Notice */}
              <div className="text-center">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  &copy; {currentYear} Texas Tint Plus, LLC. All rights
                  reserved.
                </p>
                {/* Optional: Social Media Icons or Privacy Policy Link */}
              </div>
            </div>
            {/* <div className="mt-6 border-t border-zinc-200 pt-4 dark:border-zinc-700/40">
              <p className="text-center text-xs text-zinc-500 dark:text-zinc-400">
                Crafted with care for clarity and privacy.
              </p>
            </div> */}
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
