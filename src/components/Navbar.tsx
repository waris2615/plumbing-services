import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Navbar() {
  return (
    <div className="fixed top-[30px] left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <nav className="flex items-center justify-between px-6 py-4 backdrop-blur-[50px] bg-white/30 rounded-[16px] border border-black/10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.25)]">
        {/* Logo */}
        <Link href="/" className="font-fustat font-bold text-2xl text-gray-900 tracking-tight">
          Melron
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 font-inter font-medium text-sm text-gray-800">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <Link href="/services" className="hover:text-black transition-colors">Services</Link>
          <Link href="/about" className="hover:text-black transition-colors">About</Link>
          <Link href="/contact" className="hover:text-black transition-colors">Contact</Link>
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="flex items-center gap-2 px-5 py-2.5 bg-white/40 hover:bg-white/60 transition-colors backdrop-blur-md rounded-full font-inter font-medium text-sm text-gray-900 border border-white/50 shadow-sm"
        >
          Book Now
          <ArrowRight className="w-4 h-4" />
        </Link>
      </nav>
    </div>
  )
}
