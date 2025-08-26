"use client"

import { useState } from "react"
import { Download, ExternalLink, Eye, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CVViewer() {
  const [isLoading, setIsLoading] = useState(true)

  const handleDownload = () => {
    // In a real implementation, this would download the actual CV file
    const link = document.createElement("a")
    link.href = "/placeholder.svg?height=800&width=600&text=Ntsika+Ngilane+CV"
    link.download = "Ntsika_Ngilane_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleOpenInNewTab = () => {
    window.open("/placeholder.svg?height=800&width=600&text=Ntsika+Ngilane+CV", "_blank")
  }

  return (
    <section>
      {/* Header */}
      <div className="text-center mb-12 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-bold font-sans mb-6 tracking-tight">
          My <span className="text-muted-foreground">Resume</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground font-mono max-w-3xl mx-auto leading-relaxed mb-8">
          A comprehensive overview of my professional experience, technical skills, and educational background. Download
          or view online for your convenience.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" onClick={handleDownload} className="font-mono text-lg group">
            <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
            Download PDF
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={handleOpenInNewTab}
            className="font-mono text-lg group bg-transparent"
          >
            <ExternalLink className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
            Open in New Tab
          </Button>
        </div>
      </div>

      {/* CV Preview */}
      <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg">
          {/* CV Header */}
          <div className="bg-muted/20 border-b border-border p-4 flex items-center justify-between">
            <div className="flex items-center">
              <FileText className="w-5 h-5 mr-3 text-muted-foreground" />
              <span className="font-mono text-sm text-muted-foreground">Ntsika_Ngilane_CV.pdf</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-muted-foreground" />
              <span className="font-mono text-xs text-muted-foreground">Preview Mode</span>
            </div>
          </div>

          {/* PDF Viewer Container */}
          <div className="relative bg-white">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted/20">
                <div className="text-center">
                  <div className="w-8 h-8 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin mx-auto mb-4" />
                  <p className="font-mono text-sm text-muted-foreground">Loading CV...</p>
                </div>
              </div>
            )}

            {/* Embedded PDF Viewer */}
            <div className="w-full h-[800px] md:h-[1000px]">
              <iframe
                src="/placeholder.svg?height=1000&width=800&text=Ntsika+Ngilane+Professional+CV"
                className="w-full h-full border-0"
                title="Ntsika Ngilane CV"
                onLoad={() => setIsLoading(false)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* CV Summary */}
      <div className="mt-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-card border border-border rounded-lg">
            <div className="text-3xl font-bold font-sans text-foreground mb-2">5+</div>
            <div className="text-sm font-mono text-muted-foreground">Years Experience</div>
          </div>

          <div className="p-6 bg-card border border-border rounded-lg">
            <div className="text-3xl font-bold font-sans text-foreground mb-2">20+</div>
            <div className="text-sm font-mono text-muted-foreground">Technologies Mastered</div>
          </div>

          <div className="p-6 bg-card border border-border rounded-lg">
            <div className="text-3xl font-bold font-sans text-foreground mb-2">50+</div>
            <div className="text-sm font-mono text-muted-foreground">Projects Completed</div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
        <div className="bg-muted/20 border border-border rounded-lg p-8">
          <h3 className="text-2xl font-bold font-sans mb-4">Interested in Working Together?</h3>
          <p className="text-muted-foreground font-mono mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and exciting projects. Let's connect and explore how we can
            create something amazing together.
          </p>
          <Button size="lg" asChild className="font-mono">
            <a href="/contact">Get In Touch</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
