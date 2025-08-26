"use client"

import { useState } from "react"
import type { Skill } from "@/components/skills-grid"

interface SkillCardProps {
  skill: Skill
}

export default function SkillCard({ skill }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative bg-card border border-border rounded-lg p-6 hover:border-foreground/20 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Gradient Effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-300`}
      />

      {/* Skill Icon */}
      <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
        {skill.icon}
      </div>

      {/* Skill Name */}
      <h3 className="text-xl font-bold font-sans mb-2 group-hover:text-foreground transition-colors">{skill.name}</h3>

      {/* Categories */}
      <div className="flex flex-wrap gap-1 mb-3">
        {skill.category.map((cat) => (
          <span key={cat} className="px-2 py-1 text-xs font-mono bg-muted text-muted-foreground rounded-full">
            {cat}
          </span>
        ))}
      </div>

      {/* Proficiency Bar */}
      <div className="mb-3">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-mono text-muted-foreground">Proficiency</span>
          <span className="text-sm font-mono font-bold">{skill.proficiency}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
            style={{
              width: isHovered ? `${skill.proficiency}%` : "0%",
              transitionDelay: isHovered ? "200ms" : "0ms",
            }}
          />
        </div>
      </div>

      {/* Description */}
      <p className="text-sm font-mono text-muted-foreground leading-relaxed">{skill.description}</p>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-foreground/10 rounded-lg transition-all duration-300" />
    </div>
  )
}
