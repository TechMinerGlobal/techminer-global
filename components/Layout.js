import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-4"
          >
            <Image
              src="/techminerglobalnetwork.png"
              alt="TechMiner Global"
              width={55}
              height={55}
              priority
            />

            <div>
              <h1 className="text-2xl font-bold leading-none">
                TechMiner Global
              </h1>

              <p className="text-sm text-gray-500">
                Technology • Network • Innovation
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-8 text-sm font-medium">

            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>

            <Link href="/about" className="hover:text-blue-600 transition">
              About
            </Link>

            <Link href="/services" className="hover:text-blue-600 transition">
              Services
            </Link>

            <Link href="/companies" className="hover:text-blue-600 transition">
              Companies
            </Link>

            <Link href="/faq" className="hover:text-blue-600 transition">
              FAQ
            </Link>

            <Link href="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>

          </nav>

        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto flex-1 px-6 py-12">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-8">

          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} TechMiner Global. All Rights Reserved.
          </div>

          <div className="flex gap-6 mt-4 md:mt-0">

            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>

            <Link href="/services" className="hover:text-blue-600">
              Services
            </Link>

            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>

          </div>

        </div>
      </footer>

    </div>
  );
}