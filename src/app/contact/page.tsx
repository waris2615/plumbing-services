import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export default function Contact() {
  return (
    <main className="min-h-screen pt-32">
      <Navbar />
      <div className="container mx-auto px-6 py-20">
        <h1 className="font-fustat text-5xl font-bold mb-8">Contact Us</h1>
        <p className="font-inter text-gray-600 max-w-2xl text-lg mb-12">
          Get in touch with us for a free estimate or emergency repairs.
        </p>
      </div>
      <Footer />
    </main>
  )
}
