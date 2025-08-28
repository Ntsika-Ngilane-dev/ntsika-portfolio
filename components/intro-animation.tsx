"use client"

import { useState, useEffect } from "react"

interface IntroAnimationProps {
  onComplete: () => void
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [stage, setStage] = useState<"black" | "glitch" | "typing" | "fade">("black")
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    // Check if user has seen intro before
    const hasSeenIntro = localStorage.getItem("ntsika-intro-seen")
    if (hasSeenIntro) {
      onComplete()
      return
    }

    const timer1 = setTimeout(() => setStage("glitch"), 300)
    const timer2 = setTimeout(() => {
      setStage("typing")
      setShowText(true)
    }, 600)
    const timer3 = setTimeout(() => setStage("fade"), 1500)
    const timer4 = setTimeout(() => {
      localStorage.setItem("ntsika-intro-seen", "true")
      onComplete()
    }, 6000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-1000 ${
        stage === "fade" ? "opacity-0" : "opacity-100"
      }`}
    >
      {stage === "glitch" && (
        <div className="animate-glitch">
          <div className="w-full h-full bg-white opacity-10 animate-pulse"></div>
        </div>
      )}

      {showText && (
        <div className="text-center">
          <h1
            className={`text-6xl md:text-8xl font-bold text-white font-sans tracking-wider ${
              stage === "typing" ? "animate-typewriter overflow-hidden whitespace-nowrap border-r-4 border-white" : ""
            }`}
          >
            NTSIKA.DEV
          </h1>
        </div>
      )}
    </div>
  )
}
