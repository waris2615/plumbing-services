import Image from 'next/image'

export function Portfolio() {
  const images = [
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1558211583-059ab5cd697e?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80"
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-fustat text-4xl font-bold text-gray-900 mb-4">Featured Completed Works</h2>
            <p className="font-inter text-gray-600 max-w-xl">
              Explore our portfolio to see the high-quality plumbing projects we've completed. From emergency repairs to full-scale installations.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((src, idx) => (
            <div key={idx} className="group relative aspect-[4/5] rounded-[24px] overflow-hidden bg-gray-100">
              <Image
                src={src}
                alt={`Portfolio project ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
