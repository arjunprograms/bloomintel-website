"use client"

import type React from "react"
import { Label } from "./ui/label"
import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { X, Send, CheckCircle, AlertTriangle } from "lucide-react"
import Image from "next/image"

interface ContactFormProps {
  onClose: () => void
}

export function ContactForm({ onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Something went wrong. Please try again.")
      }

      setIsSubmitting(false)
      setIsSubmitted(true)

      // Auto close after 3 seconds
      setTimeout(() => {
        onClose()
      }, 3000)
    } catch (err) {
      console.error("Error submitting form:", err)
      setError(err instanceof Error ? err.message : "An unknown error occurred.")
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black grid-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-card/50 border-border/50">
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-thin mb-2">Thank You!</h2>
            <p className="text-muted-foreground font-light mb-4">
              Your consultation request has been submitted. We'll get back to you within 24 hours.
            </p>
            <Button onClick={onClose} className="font-light">
              Return to Website
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black grid-background">
      <div className="hero-gradient absolute inset-0" />

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl bg-card/50 border-border/50">
          <CardHeader className="relative items-center text-center">
            <Button variant="ghost" size="sm" onClick={onClose} className="absolute right-4 top-4 h-8 w-8 p-0">
              <X className="h-4 w-4" />
            </Button>

            <button onClick={onClose} className="flex justify-center mb-4 cursor-pointer">
              <Image
                src="/images/bloom-intel-logo.png"
                alt="BloomIntel Logo"
                width={512}
                height={512}
                className="h-24 w-auto"
              />
            </button>

            <CardTitle className="text-2xl font-thin">Book Your AI Strategy Session</CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-light">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-input/50 border-border/50 font-light"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-light">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-input/50 border-border/50 font-light"
                    placeholder="(925) 353-0670"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="font-light">
                  Subject *
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-input/50 border-border/50 font-light"
                  placeholder="What would you like to discuss?"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="font-light">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-input/50 border-border/50 font-light min-h-[120px]"
                  placeholder="Tell us about your business challenges and goals..."
                />
              </div>

              {error && (
                <div className="flex items-center space-x-2 text-sm text-red-500 bg-red-500/10 p-3 rounded-md">
                  <AlertTriangle className="h-4 w-4" />
                  <p>{error}</p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                <Button type="submit" disabled={isSubmitting} className="flex-1 font-light">
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                <Button type="button" variant="outline" onClick={onClose} className="font-light bg-transparent">
                  Cancel
                </Button>
              </div>
            </form>

            <div className="mt-6 pt-6 border-t border-border/40">
              <p className="text-sm font-light text-muted-foreground text-center">
                We typically respond within 24 hours. For urgent matters, call us at{" "}
                <a href="tel:9253530670" className="text-primary hover:underline">
                  (925) 353-0670
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
