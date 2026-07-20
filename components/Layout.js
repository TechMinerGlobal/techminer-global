import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-transparent py-6">
        <div className="container flex items-center justify-between">
          <Link href="/">
            <a className="text-2xl font-bold">TechMiner Global</a>
          </Link>
          <nav>
            <Link href="/about"><a className="mr-6">About</a></Link>
            <Link href="/services"><a className="mr-6">Services</a></Link>
            <Link href="/companies"><a className="mr-6">Companies</a></Link>
            <Link href="/faq"><a className="mr-6">FAQ</a></Link>
            <Link href="/contact"><a className="">Contact</a></Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-gray-800 py-8 mt-12">
        <div className="container text-sm text-gray-400">
          © {new Date().getFullYear()} TechMiner Global. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
