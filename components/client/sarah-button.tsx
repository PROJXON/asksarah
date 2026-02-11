import Link from "next/link"
import { Heart } from "lucide-react"

export function FloatingSarahButton() {
  return (
    <Link
      href="/why-ASC"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-background border border-border text-foreground px-5 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:border-accent transition-all hover:scale-105 group"
      aria-label="Get to know Sarah"
    >
      <Heart className="h-5 w-5 text-accent group-hover:scale-110 transition-transform" />
      <span className="font-medium">Why Ask Sarah Connor?</span>
    </Link>
  )
}
