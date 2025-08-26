"use client"

import type React from "react"

import { useState } from "react"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

type FormStatus = "idle" | "submitting" | "success" | "error"

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<FormStatus>("idle")

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setStatus("submitting")

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setStatus("success")
      setFormData({ name: "", email: "", message: "" })

      // Reset success status after 5 seconds
      setTimeout(() => setStatus("idle"), 5000)
    } catch (error) {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 5000)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  if (status === "success") {
    return (
      <div className="animate-fade-in-up">
        <div className="text-center p-12 bg-muted/20 rounded-lg border border-border">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold font-sans mb-4">Message Sent Successfully!</h3>
          <p className="text-muted-foreground font-mono leading-relaxed mb-6">
            Thank you for reaching out. I'll get back to you as soon as possible, usually within 24 hours.
          </p>
          <Button onClick={() => setStatus("idle")} variant="outline">
            Send Another Message
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold font-sans mb-4">
          Send Me a <span className="text-muted-foreground">Message</span>
        </h2>
        <p className="text-muted-foreground font-mono leading-relaxed">
          Fill out the form below and I'll respond as quickly as possible.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-mono font-semibold mb-2">
            Name *
          </label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className={`font-mono ${errors.name ? "border-red-500" : ""}`}
            placeholder="Your full name"
            disabled={status === "submitting"}
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-500 font-mono flex items-center">
              <AlertCircle className="w-4 h-4 mr-2" />
              {errors.name}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-mono font-semibold mb-2">
            Email *
          </label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className={`font-mono ${errors.email ? "border-red-500" : ""}`}
            placeholder="your.email@example.com"
            disabled={status === "submitting"}
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-500 font-mono flex items-center">
              <AlertCircle className="w-4 h-4 mr-2" />
              {errors.email}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-mono font-semibold mb-2">
            Message *
          </label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            className={`font-mono min-h-32 resize-none ${errors.message ? "border-red-500" : ""}`}
            placeholder="Tell me about your project, ask a question, or just say hello..."
            disabled={status === "submitting"}
          />
          {errors.message && (
            <p className="mt-2 text-sm text-red-500 font-mono flex items-center">
              <AlertCircle className="w-4 h-4 mr-2" />
              {errors.message}
            </p>
          )}
          <p className="mt-2 text-xs text-muted-foreground font-mono">{formData.message.length}/500 characters</p>
        </div>

        {/* Submit Button */}
        <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full font-mono text-lg group">
          {status === "submitting" ? (
            <>
              <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin mr-3" />
              Sending Message...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
              Send Message
            </>
          )}
        </Button>

        {status === "error" && (
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <p className="text-red-500 font-mono text-sm flex items-center">
              <AlertCircle className="w-4 h-4 mr-2" />
              Failed to send message. Please try again or contact me directly via email.
            </p>
          </div>
        )}
      </form>

      {/* Form Footer */}
      <div className="mt-8 p-4 bg-muted/20 rounded-lg border border-border">
        <p className="text-sm font-mono text-muted-foreground text-center">
          Your information is secure and will never be shared with third parties.
        </p>
      </div>
    </div>
  )
}
