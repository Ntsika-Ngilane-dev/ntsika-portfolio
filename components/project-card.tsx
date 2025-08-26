"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Github, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Project } from "@/components/projects-gallery"

interface ProjectCardProps {
  project: Project
  onSelect: (project: Project) => void
  featured: boolean
}

export default function ProjectCard({ project, onSelect, featured }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`group relative bg-card border border-border rounded-lg overflow-hidden transition-all duration-500 hover:border-foreground/20 hover:shadow-xl cursor-pointer ${
        featured ? "hover:scale-[1.02]" : "hover:scale-105"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(project)}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <Image
          src={project.imageUrl || "/placeholder.svg"}
          alt={project.title}
          width={featured ? 600 : 400}
          height={featured ? 400 : 300}
          className={`w-full transition-all duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
        />

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex gap-3">
              {project.githubUrl && (
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-background/90 hover:bg-background"
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(project.githubUrl, "_blank")
                  }}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
              )}
              {project.demoUrl && (
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-background/90 hover:bg-background"
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(project.demoUrl, "_blank")
                  }}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              )}
              <Button
                size="sm"
                className="bg-foreground text-background hover:bg-foreground/90"
                onClick={(e) => {
                  e.stopPropagation()
                  onSelect(project)
                }}
              >
                <Eye className="w-4 h-4 mr-2" />
                Details
              </Button>
            </div>
          </div>
        </div>

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-foreground text-background text-xs font-mono rounded-full">Featured</span>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-background/90 text-foreground text-xs font-mono rounded-full">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3
          className={`font-bold font-sans mb-3 group-hover:text-foreground transition-colors ${
            featured ? "text-xl md:text-2xl" : "text-lg"
          }`}
        >
          {project.title}
        </h3>

        <p className={`text-muted-foreground font-mono leading-relaxed mb-4 ${featured ? "text-base" : "text-sm"}`}>
          {project.shortDescription}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, featured ? 6 : 4).map((tech) => (
            <span key={tech} className="px-2 py-1 bg-muted text-muted-foreground text-xs font-mono rounded-full">
              {tech}
            </span>
          ))}
          {project.techStack.length > (featured ? 6 : 4) && (
            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs font-mono rounded-full">
              +{project.techStack.length - (featured ? 6 : 4)} more
            </span>
          )}
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-foreground/10 rounded-lg transition-all duration-300" />
    </div>
  )
}
