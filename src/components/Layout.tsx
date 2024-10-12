import Footer from '@/components/Footer'
import Header from '@/components/NavBar'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="fixed inset-0 z-[-1] flex justify-center">
        <div className="flex w-full max-w-7xl px-4 sm:px-8 lg:px-8">
          <div className="w-full bg-white shadow ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-700" />
        </div>
      </div>
      <div className="relative flex flex-1 flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
