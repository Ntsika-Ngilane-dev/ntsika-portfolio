"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Calendar, GraduationCap, Briefcase, Rocket } from "lucide-react"

interface TimelineItem {
  id: number
  year: string
  title: string
  description: string
  type: "education" | "career" | "entrepreneurial"
  icon: React.ReactNode
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: "2018",
    title: "Started Programming Journey",
    description: "Began learning programming with C# and .NET, discovering a passion for creating digital solutions.",
    type: "education",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    id: 2,
    year: "2019",
    title: "Full-Stack Development",
    description:
      "Expanded skills to include React.js, Node.js, and database technologies, becoming a versatile full-stack developer.",
    type: "education",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    id: 3,
    year: "2020",
    title: "Mobile Development Expertise",
    description:
      "Mastered mobile app development with React Native, Kotlin, and Swift, creating cross-platform solutions.",
    type: "career",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    id: 4,
    year: "2021",
    title: "Systems Programming",
    description:
      "Delved into systems programming with Rust and C++, understanding low-level computing and performance optimization.",
    type: "education",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    id: 5,
    year: "2022",
    title: "CappyBara Tech",
    description:
      "Co-founded medical technology startup, developing innovative endocrinology devices and digital health solutions.",
    type: "entrepreneurial",
    icon: <Rocket className="w-5 h-5" />,
  },
  {
    id: 6,
    year: "2023",
    title: "Insurance Tech Innovation",
    description:
      "Built dynamic insurance pricing portal, revolutionizing risk assessment and premium calculation systems.",
    type: "career",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    id: 7,
    year: "2024",
    title: "Game Development",
    description:
      "Created advanced desktop games using C# and Unity, demonstrating complex problem-solving and systems thinking.",
    type: "career",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    id: 8,
    year: "2025",
    title: "Tech Innovation Leader",
    description:
      "Continuing to push boundaries in software development, focusing on AI integration and scalable system architecture.",
    type: "entrepreneurial",
    icon: <Rocket className="w-5 h-5" />,
  },
]

export default function Timeline() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number.parseInt(entry.target.getAttribute("data-id") || "0")
            setVisibleItems((prev) => [...new Set([...prev, id])])
          }
        })
      },
      { threshold: 0.3 },
    )

    const timelineItems = timelineRef.current?.querySelectorAll("[data-id]")
    timelineItems?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  const getTypeColor = (type: TimelineItem["type"]) => {
    switch (type) {
      case "education":
        return "border-blue-500 bg-blue-500/10 text-blue-400"
      case "career":
        return "border-green-500 bg-green-500/10 text-green-400"
      case "entrepreneurial":
        return "border-purple-500 bg-purple-500/10 text-purple-400"
      default:
        return "border-foreground bg-foreground/10 text-foreground"
    }
  }

  return (
    <section className="mb-20">
      <div className="animate-fade-in-up mb-12">
        <h2 className="text-3xl md:text-5xl font-bold font-sans text-center mb-4">
          My <span className="text-muted-foreground">Journey</span>
        </h2>
        <p className="text-lg text-muted-foreground text-center font-mono max-w-2xl mx-auto">
          A timeline of education, career milestones, and entrepreneurial highlights that shaped my path in technology.
        </p>
      </div>

      <div ref={timelineRef} className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5"></div>

        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <div
              key={item.id}
              data-id={item.id}
              className={`relative flex items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } transition-all duration-700 ${
                visibleItems.includes(item.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                <div
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${getTypeColor(item.type)}`}
                >
                  {item.icon}
                </div>
              </div>

              {/* Content Card */}
              <div
                className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}
              >
                <div className="bg-card border border-border rounded-lg p-6 hover:border-foreground/20 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-mono text-muted-foreground">{item.year}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-mono capitalize ${getTypeColor(item.type)}`}>
                      {item.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-sans mb-3 group-hover:text-foreground transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground font-mono leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
