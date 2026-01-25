"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import SkillCard from "@/components/skill-card"

export type SkillCategory = "All" | "Web" | "Mobile" | "Systems" | "Tools" | "Databases"

export interface Skill {
  id: number
  name: string
  category: SkillCategory[]
  proficiency: number
  description: string
  icon: string
  color: string
}

const skills: Skill[] = [
  // Programming Languages - High Level
  {
    id: 1,
    name: "C#",
    category: ["Web", "Systems"],
    proficiency: 30,
    description: "Advanced .NET development, desktop applications, and game development",
    icon: "🔷",
    color: "from-purple-500 to-blue-500",
  },
  {
    id: 2,
    name: "JavaScript",
    category: ["Web"],
    proficiency: 85,
    description: "ES6+, modern web development, and full-stack applications",
    icon: "🟨",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 3,
    name: "Python",
    category: ["Web", "Systems"],
    proficiency: 60,
    description: "Backend development, automation, and data processing",
    icon: "🐍",
    color: "from-green-500 to-blue-500",
  },
  {
    id: 4,
    name: "Kotlin",
    category: ["Mobile"],
    proficiency: 50,
    description: "Android development with Jetpack Compose",
    icon: "🟣",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 5,
    name: "Swift",
    category: ["Mobile"],
    proficiency: 35,
    description: "iOS development with SwiftUI and UIKit",
    icon: "🍎",
    color: "from-orange-500 to-red-500",
  },

  // Systems Programming
  {
    id: 6,
    name: "18",
    category: ["Systems"],
    proficiency: 65,
    description: "Systems programming, performance optimization, and memory safety",
    icon: "🦀",
    color: "from-orange-600 to-red-600",
  },
  {
    id: 7,
    name: "C++",
    category: ["Systems"],
    proficiency: 20,
    description: "Low-level programming and performance-critical applications",
    icon: "⚡",
    color: "from-blue-600 to-purple-600",
  },

  // Frameworks & Libraries
  {
    id: 8,
    name: "React.js",
    category: ["Web"],
    proficiency: 87,
    description: "Modern React with hooks, context, and state management",
    icon: "⚛️",
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 9,
    name: ".NET",
    category: ["Web", "Systems"],
    proficiency: 45,
    description: "ASP.NET Core, Web APIs, and enterprise applications",
    icon: "🔵",
    color: "from-purple-600 to-blue-600",
  },
  {
    id: 10,
    name: "Node.js",
    category: ["Web"],
    proficiency: 56,
    description: "Server-side JavaScript, APIs, and microservices",
    icon: "🟢",
    color: "from-green-600 to-teal-600",
  },
  {
    id: 11,
    name: "React Native",
    category: ["Mobile"],
    proficiency: 78,
    description: "Cross-platform mobile app development",
    icon: "📱",
    color: "from-blue-500 to-purple-500",
  },
  {
    id: 12,
    name: "Tailwind CSS",
    category: ["Web"],
    proficiency: 85,
    description: "Utility-first CSS framework for rapid UI development",
    icon: "🎨",
    color: "from-teal-500 to-cyan-500",
  },

  // Databases
  {
    id: 13,
    name: "PostgreSQL",
    category: ["Databases"],
    proficiency: 30,
    description: "Advanced SQL, database design, and optimization",
    icon: "🐘",
    color: "from-blue-700 to-indigo-700",
  },
  {
    id: 14,
    name: "MongoDB",
    category: ["Databases"],
    proficiency: 45,
    description: "NoSQL database design and aggregation pipelines",
    icon: "🍃",
    color: "from-green-600 to-emerald-600",
  },
  {
    id: 15,
    name: "MySQL",
    category: ["Databases"],
    proficiency: 45,
    description: "Relational database management and performance tuning",
    icon: "🗄️",
    color: "from-orange-600 to-yellow-600",
  },

  // Tools & Platforms
  {
    id: 16,
    name: "Docker",
    category: ["Tools"],
    proficiency: 15,
    description: "Containerization, orchestration, and deployment",
    icon: "🐳",
    color: "from-blue-600 to-cyan-600",
  },
  {
    id: 17,
    name: "AWS",
    category: ["Tools"],
    proficiency: 23,
    description: "Cloud infrastructure, serverless, and DevOps",
    icon: "☁️",
    color: "from-orange-500 to-yellow-500",
  },
  {
    id: 18,
    name: "Git & GitHub",
    category: ["Tools"],
    proficiency: 68,
    description: "Version control, collaboration, and CI/CD workflows",
    icon: "🔧",
    color: "from-gray-600 to-gray-800",
  },
  {
    id: 19,
    name: "Figma",
    category: ["Tools"],
    proficiency: 72,
    description: "UI/UX design, prototyping, and design systems",
    icon: "🎯",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 20,
    name: "Linux/Bash",
    category: ["Tools", "Systems"],
    proficiency: 39,
    description: "System administration, scripting, and automation",
    icon: "🐧",
    color: "from-gray-700 to-black",
  },
]

const categories: SkillCategory[] = ["All", "Web", "Mobile", "Systems", "Tools", "Databases"]

export default function SkillsGrid() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("All")
  const [filteredSkills, setFilteredSkills] = useState<Skill[]>(skills)
  const [visibleSkills, setVisibleSkills] = useState<number[]>([])

  useEffect(() => {
    const filtered =
      activeCategory === "All" ? skills : skills.filter((skill) => skill.category.includes(activeCategory))

    setFilteredSkills(filtered)
    setVisibleSkills([])

    // Stagger the animation of filtered skills
    filtered.forEach((_, index) => {
      setTimeout(() => {
        setVisibleSkills((prev) => [...prev, index])
      }, index * 100)
    })
  }, [activeCategory])

  return (
    <section>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => setActiveCategory(category)}
            className="font-mono transition-all duration-300 hover:scale-105"
          >
            {category}
            <span className="ml-2 text-xs opacity-70">
              ({category === "All" ? skills.length : skills.filter((s) => s.category.includes(category)).length})
            </span>
          </Button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredSkills.map((skill, index) => (
          <div
            key={skill.id}
            className={`transition-all duration-500 ${
              visibleSkills.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <SkillCard skill={skill} />
          </div>
        ))}
      </div>

      {/* Skills Summary */}
      <div className="mt-16 text-center">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
          {categories.slice(1).map((category) => {
            const categorySkills = skills.filter((s) => s.category.includes(category))
            const avgProficiency = Math.round(
              categorySkills.reduce((sum, skill) => sum + skill.proficiency, 0) / categorySkills.length,
            )

            return (
              <div key={category} className="text-center">
                <div className="text-3xl font-bold font-sans text-foreground mb-2">{categorySkills.length}</div>
                <div className="text-sm font-mono text-muted-foreground mb-1">{category}</div>
                <div className="text-xs font-mono text-muted-foreground">{avgProficiency}% avg</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
