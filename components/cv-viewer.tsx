"use client"

import { useState, useEffect } from "react"
import { Download, ExternalLink, FileText, Loader2, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import dynamic from 'next/dynamic'

// Dynamically import the PDF viewer with SSR disabled
const PDFViewer = dynamic(
  () => import('@/components/pdf-viewer').then((mod) => mod.PDFViewer),
  { 
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center p-12">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    )
  }
)

export default function CVViewer() {
  const [isLoading, setIsLoading] = useState(true)
  const [showPdf, setShowPdf] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/Ntsika-Ngilane-cv.pdf"
    link.download = "Ntsika_Ngilane_cv.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleOpenInNewTab = () => {
    window.open("/Ntsika-Ngilane-cv.pdf", "_blank")
  }

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages)
    setIsLoading(false)
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
      <div className="container mx-auto px-4 max-w-4xl">
        <div 
          className="mb-8 overflow-hidden rounded-lg border border-border shadow-xl transition-all duration-300 hover:shadow-2xl cursor-pointer"
          onClick={() => setShowPdf(true)}
        >
          <div className="relative group">
            <img 
              src="/placeholder.svg?height=1123&width=794&text=Ntsika+Ngilane+CV" 
              alt="CV Preview" 
              className="w-full h-auto border-b border-border"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white font-mono text-sm bg-black/70 px-4 py-2 rounded-full">Click to view interactive version</p>
            </div>
          </div>
          
          {/* File Info Bar */}
          <div className="flex items-center justify-between bg-muted/20 px-6 py-3">
            <div className="flex items-center">
              <FileText className="w-5 h-5 mr-3 text-muted-foreground" />
              <span className="font-mono text-sm text-muted-foreground">Ntsika_Ngilane_CV.pdf</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-muted-foreground" />
              <span className="font-mono text-xs text-muted-foreground">Click to view full CV</span>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Viewer (initially hidden) */}
      <div className={`container mx-auto px-4 transition-all duration-500 ${showPdf ? 'block' : 'hidden'}`}>
        {/* PDF Viewer Container */}
        <div className="mt-12 border rounded-lg overflow-hidden shadow-xl max-w-4xl mx-auto bg-white">
          <div className="h-[800px] w-full overflow-auto flex items-center justify-center bg-muted/20 relative">
            {isClient && (
              <PDFViewer 
                file="/Ntsika-Ngilane-cv.pdf"
                onLoadSuccess={() => setIsLoading(false)}
              />
            )}
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
