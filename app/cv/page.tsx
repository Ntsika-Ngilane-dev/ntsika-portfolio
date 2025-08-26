import Navigation from "@/components/navigation"
import ParticleBackground from "@/components/particle-background"
import CVViewer from "@/components/cv-viewer"

export default function CVPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <ParticleBackground />
      <Navigation />

      <main className="relative z-10 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CVViewer />
        </div>
      </main>
    </div>
  )
}
