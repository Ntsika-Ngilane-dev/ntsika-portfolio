import Navigation from "@/components/navigation"
import ParticleBackground from "@/components/particle-background"
import ContactHero from "@/components/contact-hero"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <ParticleBackground />
      <Navigation />

      <main className="relative z-10 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactHero />
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  )
}
