import { ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative w-full max-w-[1600px] mx-auto min-h-screen pt-32 pb-20 overflow-hidden bg-white">
      {/* Layered Gradient Glow */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#60B1FF] rounded-full mix-blend-multiply filter blur-[150px] opacity-40 -translate-x-1/4 -translate-y-1/4 pointer-events-none" />
      <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-[#319AFF] rounded-full mix-blend-multiply filter blur-[150px] opacity-30 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

        {/* Left Side Content */}
        <div className="flex-1 flex flex-col items-start pt-10 lg:pt-0">

          {/* Social Proof Badge */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-gray-200 shadow-sm mb-8">
            <div className="flex items-center gap-1 text-[#FF801E]">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
            <span className="font-inter text-sm font-medium text-gray-700">
              Rated 4.9/5 by 2700+ customers
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-fustat font-bold text-[50px] lg:text-[75px] leading-[1.05] tracking-[-2px] text-gray-900 mb-6 max-w-2xl">
            Classic service,<br/>modern solutions
          </h1>

          {/* Subheadline */}
          <p className="font-inter text-[18px] tracking-[-1px] text-gray-600 mb-10 max-w-xl leading-relaxed">
            Effortlessly manage your plumbing needs, upgrade your home, and achieve peace of mind with our reliable experts.
          </p>

          {/* Primary CTA */}
          <Link
            href="/contact"
            className="group flex items-center gap-4 px-8 py-4 bg-[rgba(0,132,255,0.8)] backdrop-blur-[2px] rounded-[16px] text-white font-inter font-medium text-lg hover:scale-105 transition-transform duration-300 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)]"
          >
            Get Started Now
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>

        {/* Right Side: Glassy Orb */}
        <div className="flex-1 w-full flex justify-center lg:justify-end relative pointer-events-none">
          <div className="relative w-full max-w-[600px] aspect-square mix-blend-screen overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover scale-125 translate-x-[10%] filter drop-shadow-2xl"
              style={{
                filter: 'hue-rotate(-55deg) saturate(250%) brightness(1.2) contrast(1.1)'
              }}
            >
              <source src="https://future.co/images/homepage/glassy-orb/orb-purple.webm" type="video/webm" />
            </video>
          </div>
        </div>

      </div>

      {/* Footer Logos (Trusted By) */}
      <div className="relative z-10 w-full mt-32 border-t border-gray-100 bg-white/50 backdrop-blur-sm py-12">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <p className="font-inter text-sm text-gray-400 font-medium tracking-widest uppercase mb-8">
            Trusted by top-tier product companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-[50px] lg:gap-[100px] opacity-40 grayscale">
            {/* Logos Placeholders */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-2 font-fustat font-bold text-2xl text-gray-900">
                <div className="w-8 h-8 bg-gray-900 rounded-lg" />
                Brand {i}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
