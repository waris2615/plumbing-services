import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Services as ServicesComponent } from "@/components/Services"

export default function Services() {
  return (
    <main className="min-h-screen pt-32">
      <Navbar />
      <div className="container mx-auto px-6 py-20">
        <h1 className="font-fustat text-5xl font-bold mb-8">All Services</h1>
        <p className="font-inter text-gray-600 max-w-2xl text-lg mb-12">
          Comprehensive plumbing solutions for your home and business.
        </p>
      </div>
      <ServicesComponent />
      <Footer />
    </main>
  )
}
