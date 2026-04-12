import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export default function About() {
  return (
    <main className="min-h-screen pt-32">
      <Navbar />
      <div className="container mx-auto px-6 py-20">
        <h1 className="font-fustat text-5xl font-bold mb-8">About Us</h1>
        <p className="font-inter text-gray-600 max-w-2xl text-lg mb-12">
          With years of industry experience, our skilled team delivers top-notch solutions and exceptional service.
        </p>
      </div>
      <Footer />
    </main>
  )
}
