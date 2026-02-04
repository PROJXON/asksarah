import { Phone } from "lucide-react"
import Image from "next/image"

const stats = [
  { value: "MBA", label: "Pepperdine University" },
  { value: "15+", label: "Years Experience" },
  { value: "The Agency", label: "Beverly Hills" },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight text-foreground">
            Built on Experience & Results
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Strategic guidance for Malibu and Los Angeles luxury real estate.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-serif font-light text-foreground">{stat.value}</p>
              <p className="mt-2 text-base text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Service Cards */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          <a
            className="group relative aspect-[4/3] overflow-hidden rounded-lg"
          >
            <Image
              src="/Buying.webp"
              alt="Buy a home"
              width={400}
              height={300}
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent group-hover:from-slate-900/70 transition-colors" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/30">
              <h3 className="text-2xl font-serif font-light text-white tracking-wide">Buy</h3>
              <p className="text-white/70 text-base mt-1">Find your dream home</p>
            </div>
          </a>
          
          <a
            className="group relative aspect-[4/3] overflow-hidden rounded-lg"
          >
            <Image
              src="/Selling.webp"
              alt="Sell your home"
              width={400}
              height={300}
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent group-hover:from-slate-900/70 transition-colors" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/30">
              <h3 className="text-2xl font-serif font-light text-white tracking-wide">Sell</h3>
              <p className="text-white/70 text-base mt-1">Strategic positioning</p>
            </div>
          </a>
          
          <a
            className="group relative aspect-[4/3] overflow-hidden rounded-lg"
          >
            <Image
              src="/Investing.webp"
              alt="Invest in real estate"
              width={400}
              height={300}
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent group-hover:from-slate-900/70 transition-colors" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/30">
              <h3 className="text-2xl font-serif font-light text-white tracking-wide">Invest</h3>
              <p className="text-white/70 text-sm mt-1">Smart opportunities</p>
            </div>
          </a>
        </div>
         <div className="mt-16 text-center">
          <a
            href="tel:+13108717600"
            className="inline-flex items-center gap-3 text-foreground hover:text-accent transition-colors"
          >
            <Phone className="h-5 w-5" />
            <span className="text-lg">Ready to start? Call (310) 871-7600</span>
          </a>
        </div>

      </div>
    </section>
  )
}