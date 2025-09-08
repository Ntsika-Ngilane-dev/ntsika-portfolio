"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, Github, Instagram, MapPin, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ContactItem {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
  action?: () => void
}

export default function ContactInfo() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const contactItems: ContactItem[] = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "ntsikangilane.dev@gmail.com",
      href: "mailto:ntsikangilane.dev@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone/WhatsApp",
      value: "+27 81 674 5941", "+27 68 928 0010", "+27 82 908 0581"
      href: "tel:+27 81 674 5941", "tel:+27 68 928 0010", "tel:+27 82 908 0581"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/Ntsika-Ngilane",
      href: "https://github.com/Ntsika-Ngilane",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      label: "Instagram",
      value: "@ntsika.dev",
      href: "https://instagram.com/ntsika.dev",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Pretoria, South Africa",
    },
  ]

  const handleDownloadCV = () => {
    // In a real implementation, this would download the actual CV file
    console.log("Downloading CV...")
  }

  return (
    <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold font-sans mb-4">
          Contact <span className="text-muted-foreground">Information</span>
        </h2>
        <p className="text-muted-foreground font-mono leading-relaxed">
          Multiple ways to connect with me. Choose what works best for you.
        </p>
      </div>

      <div className="space-y-6 mb-8">
        {contactItems.map((item, index) => (
          <div
            key={index}
            className={`group flex items-center p-4 rounded-lg border border-border transition-all duration-300 ${
              item.href ? "cursor-pointer hover:border-foreground/20 hover:bg-muted/20" : ""
            }`}
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={() => item.href && window.open(item.href, "_blank")}
          >
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-full bg-muted transition-all duration-300 ${
                hoveredItem === index ? "bg-foreground text-background scale-110" : "text-muted-foreground"
              }`}
            >
              {item.icon}
            </div>

            <div className="ml-4 flex-1">
              <div className="text-sm font-mono text-muted-foreground mb-1">{item.label}</div>
              <div className="font-mono text-foreground group-hover:text-foreground transition-colors">
                {item.value}
              </div>
            </div>

            {item.href && (
              <ExternalLink
                className={`w-4 h-4 text-muted-foreground transition-all duration-300 ${
                  hoveredItem === index ? "text-foreground translate-x-1" : ""
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* CV Download Button */}
      <div className="border-t border-border pt-8">
        <Button size="lg" onClick={handleDownloadCV} className="w-full font-mono text-lg group">
          <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
          Download CV
        </Button>
      </div>

      {/* Availability Status */}
      <div className="mt-8 p-4 bg-muted/20 rounded-lg border border-border">
        <div className="flex items-center mb-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
          <span className="font-mono text-sm font-semibold">Available for Projects</span>
        </div>
        <p className="text-sm font-mono text-muted-foreground">
          Currently accepting new freelance projects and collaboration opportunities.
        </p>
      </div>
    </div>
  )
}
