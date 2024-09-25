import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white dark:bg-black " />
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <main className="flex-auto">
          <Header />
          <div>{children}</div>
        </main>
        <Footer />
      </div>
    </>
  )
}
