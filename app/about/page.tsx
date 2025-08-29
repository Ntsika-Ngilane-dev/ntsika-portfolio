import Navigation from "@/components/navigation"
import ParticleBackground from "@/components/particle-background"
import AboutHero from "@/components/about-hero"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <ParticleBackground />
      <Navigation />

      <main className="relative z-10 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AboutHero />
        </div>
      </main>
    </div>
  )
}
