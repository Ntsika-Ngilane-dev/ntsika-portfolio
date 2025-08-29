"use client"

import { useState } from "react"
import Image from "next/image"

export default function AboutHero() {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <section className="mb-20">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column - Portrait */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative group">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-border bg-muted transition-all duration-500 group-hover:scale-105 group-hover:border-foreground">
              <Image
                src="./profile.jpg"
                alt="Ntsika Ngilane - Professional Portrait"
                width={320}
                height={320}
                className={`w-full h-full object-cover transition-all duration-700 ${
                  imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-110"
                }`}
                onLoad={() => setImageLoaded(true)}
              />
            </div>

            {/* Animated ring effect */}
            <div className="absolute inset-0 rounded-full border-2 border-foreground/20 animate-pulse"></div>
            <div className="absolute inset-4 rounded-full border border-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Right Column - Bio */}
        <div className="space-y-8">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold font-sans mb-6 tracking-tight">
              About <span className="text-muted-foreground">Me</span>
            </h1>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg md:text-xl leading-relaxed font-mono text-muted-foreground mb-6">
                I am <span className="text-foreground font-semibold">Ntsika Ngilane</span>, a passionate full-stack
                developer and tech innovator from South Africa. My work bridges creativity and engineering — building
                sleek, functional, and human-centered digital experiences.
              </p>

              <p className="text-lg md:text-xl leading-relaxed font-mono text-muted-foreground mb-6">
                I thrive at the intersection of software development, system design, and entrepreneurship, always
                seeking ways to push technology into solving real human problems.
              </p>

              <p className="text-lg md:text-xl leading-relaxed font-mono text-muted-foreground">
                Beyond code, I'm committed to shaping tools that feel seamless, powerful, and almost invisible in the
                lives of their users.
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="border-l-4 border-foreground pl-6 py-4 bg-muted/20 rounded-r-lg">
              <h3 className="text-xl font-bold font-sans mb-2">Mission Statement</h3>
              <p className="font-mono text-muted-foreground italic">
                "To create technology that enhances human potential while remaining beautifully simple and intuitively
                powerful."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
