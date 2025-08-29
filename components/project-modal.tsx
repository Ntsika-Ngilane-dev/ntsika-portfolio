"use client"

import { useEffect } from "react"
import Image from "next/image"
import { X, Github, ExternalLink, CheckCircle, AlertCircle, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Project } from "@/components/projects-gallery"

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    document.addEventListener("keydown", handleEscape)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [onClose])

  // Close modal when clicking on the backdrop
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div 
        className="relative bg-background border border-border rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <Button variant="ghost" size="icon" className="absolute top-4 right-4 z-10" onClick={onClose}>
          <X className="w-5 h-5" />
        </Button>

        {/* Project Image */}
        <div className="relative h-64 md:h-80 overflow-hidden rounded-t-lg">
          <Image src={project.imageUrl || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Title Overlay */}
          <div className="absolute bottom-6 left-6 right-16">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-background/90 text-foreground text-sm font-mono rounded-full">
                {project.category}
              </span>
              {project.featured && (
                <span className="px-3 py-1 bg-foreground text-background text-sm font-mono rounded-full">Featured</span>
              )}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold font-sans text-white">{project.title}</h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Action Buttons */}
          <div className="flex gap-3 mb-6">
            {project.githubUrl && (
              <Button variant="outline" onClick={() => window.open(project.githubUrl, "_blank")}>
                <Github className="w-4 h-4 mr-2" />
                View Code
              </Button>
            )}
            {project.demoUrl && (
              <Button onClick={() => window.open(project.demoUrl, "_blank")}>
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
            )}
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-xl font-bold font-sans mb-4">Project Overview</h3>
            <p className="text-muted-foreground font-mono leading-relaxed">{project.fullDescription}</p>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h3 className="text-xl font-bold font-sans mb-4">Technology Stack</h3>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-2 bg-muted text-muted-foreground font-mono rounded-lg border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Three Column Layout */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Features */}
            <div>
              <h3 className="text-lg font-bold font-sans mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                Key Features
              </h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="text-sm font-mono text-muted-foreground flex items-start">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges */}
            <div>
              <h3 className="text-lg font-bold font-sans mb-4 flex items-center">
                <AlertCircle className="w-5 h-5 mr-2 text-orange-500" />
                Challenges
              </h3>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="text-sm font-mono text-muted-foreground flex items-start">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 mr-3 flex-shrink-0" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcomes */}
            <div>
              <h3 className="text-lg font-bold font-sans mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-blue-500" />
                Outcomes
              </h3>
              <ul className="space-y-2">
                {project.outcomes.map((outcome, index) => (
                  <li key={index} className="text-sm font-mono text-muted-foreground flex items-start">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 mr-3 flex-shrink-0" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
