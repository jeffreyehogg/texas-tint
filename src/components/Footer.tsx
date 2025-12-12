import Link from 'next/link'
import Container from '@/components/Container'

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
      className="text-zinc-600 transition-colors duration-300 hover:text-brand-600 dark:text-zinc-400 dark:hover:text-brand-400"
    >
      {children}
    </Link>
  )
}

function FacebookIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto flex-none bg-zinc-100 dark:bg-zinc-950">
      <Container>
        <div className="py-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </nav>

            {/* Social & Copyright */}
            <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
              <a
                href="https://www.facebook.com/TexasTintPlusLLC/"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-full bg-white p-2 text-[#1877F2] shadow-sm ring-1 ring-zinc-900/5 transition hover:ring-[#1877F2]/20 dark:bg-zinc-800 dark:text-zinc-400 dark:ring-white/10"
                aria-label="Follow us on Facebook"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                &copy; {currentYear} Texas Tint Plus, LLC.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
