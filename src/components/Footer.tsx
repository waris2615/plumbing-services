import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <Link href="/" className="font-fustat font-bold text-3xl mb-4 block">
              Melron
            </Link>
            <p className="font-inter text-gray-400 max-w-sm">
              Contact Melron Industries, Inc. for repairs and installation today! We look forward to hearing from you and working with you on your next project.
            </p>
          </div>
          <div>
            <h4 className="font-fustat font-bold text-lg mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 font-inter text-gray-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="font-fustat font-bold text-lg mb-4">Contact</h4>
            <div className="flex flex-col gap-2 font-inter text-gray-400">
              <p>118 N. 7th St. Akron, PA 17501</p>
              <p>717-859-2271</p>
              <p>melron@dejazzd.com</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between font-inter text-sm text-gray-500">
          <p>© 2024 Melron Industries Inc. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
