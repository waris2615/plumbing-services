import { Droplets, Wrench, Hammer } from 'lucide-react'

export function Services() {
  const services = [
    {
      title: "Plumbing",
      description: "Expert plumbing services for residential and commercial properties. We handle everything from minor repairs to major installations.",
      icon: Droplets,
    },
    {
      title: "Bathroom Remodeling",
      description: "Transform your outdated bathroom into a luxurious oasis. Our team specializes in complete renovations and upgrades.",
      icon: Hammer,
    },
    {
      title: "Excavation",
      description: "Professional excavation services for water lines, sewer lines, and site preparation. Reliable and safe execution.",
      icon: Wrench,
    }
  ]

  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-fustat text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="font-inter text-gray-600 max-w-2xl mx-auto">
            High quality plumbing services & products for all your plumbing needs. We are equipped to provide you with prompt, reliable solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-[24px] p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-fustat text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="font-inter text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
