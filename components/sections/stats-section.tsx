import { Phone } from "lucide-react"
import Image from "next/image"

const stats = [
  {value: "$1B+", label: "Sales to Date" },
  // { value: "License", label: "#02272182" },
  { value: "30+", label: "Years Experience" },
  { value: "The Agency", label: "Beverly Hills & Palm Desert" },
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
            Strategic guidance for luxury real estate from the coast to the desert.
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

        <div className="text-center mb-12 mt-20">
          <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight text-foreground">
            How Can I Help You?
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Whether you're buying your first home, selling a cherished property, or exploring 
            investment opportunities, I'm here to guide you every step of the way.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          <a
            className="group relative aspect-[4/3] overflow-hidden rounded-lg"
          >
            <Image
              src="/FamilyImage.webp"
              alt="Buy a home"
              width={400}
              height={300}
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent group-hover:from-slate-900/70 transition-colors" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/30">
              <h3 className="text-2xl font-serif font-light text-white tracking-wide">Finding Your Home</h3>
              <p className="text-white/70 text-base mt-1">Let's discover properties that match your lifestyle and dreams</p>
            </div>
          </a>
          
          <a
            className="group relative aspect-[4/3] overflow-hidden rounded-lg"
          >
            <Image
              src="/ClientandAgent.webp"
              alt="Sell your home"
              width={400}
              height={300}
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent group-hover:from-slate-900/70 transition-colors" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/30">
              <h3 className="text-2xl font-serif font-light text-white tracking-wide">Selling Your Home</h3>
              <p className="text-white/70 text-base mt-1">Strategic marketing to showcase what makes your home special</p>
            </div>
          </a>
          
          <a
            className="group relative aspect-[4/3] overflow-hidden rounded-lg"
          >
            <Image
              src="/City.webp"
              alt="Invest in real estate"
              width={400}
              height={300}
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent group-hover:from-slate-900/70 transition-colors" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/30">
              <h3 className="text-2xl font-serif font-light text-white tracking-wide">Building Wealth</h3>
              <p className="text-white/70 text-sm mt-1">Smart investment opportunities to grow your portfolio</p>
            </div>
          </a>
        </div>
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Not sure where to start? That's okay!</p>
          <a
            href="tel:+13105551234"
            className="inline-flex items-center gap-3 text-foreground hover:text-accent transition-colors"
          >
            <Phone className="h-5 w-5" />
            <span className="text-lg font-medium">Give me a call and let's figure it out together</span>
          </a>
        </div>
        

      </div>
    </section>
  )
}