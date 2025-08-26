"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"
import IntroAnimation from "@/components/intro-animation"
import Navigation from "@/components/navigation"
import ParticleBackground from "@/components/particle-background"
import Link from "next/link"

const subtitles = ["Developer", "Innovator", "Builder", "Visionary"]

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true)
  const [currentSubtitle, setCurrentSubtitle] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % subtitles.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  if (showIntro) {
    return <IntroAnimation onComplete={() => setShowIntro(false)} />
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <ParticleBackground />
      <Navigation />

      {/* Hero Section */}
      <main className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-sans mb-6 tracking-tight leading-tight">
              I'm{" "}
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Ntsika Ngilane
              </span>
            </h1>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-mono mb-8 h-12 sm:h-14 md:h-16 flex items-center justify-center">
              <span className="text-muted-foreground transition-all duration-500">
                {subtitles[currentSubtitle]}
                <span className="animate-pulse ml-1">|</span>
              </span>
            </div>
          </div>

          <div
            className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            style={{ animationDelay: "0.4s" }}
          >
            <Link href="/projects">
              <Button size="lg" className="group font-mono text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 hover-lift">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Button
              variant="outline"
              size="lg"
              className="font-mono text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-transparent hover-glow"
            >
              <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Download CV
            </Button>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-mono px-4">
              Full-stack developer and tech innovator from South Africa, building sleek, functional, and human-centered
              digital experiences.
            </p>
          </div>
        </div>
      </main>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-muted-foreground rounded-full flex justify-center hover-glow cursor-pointer">
          <div className="w-1 h-2 sm:h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
