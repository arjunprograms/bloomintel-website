"use client"

import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

interface CTASectionProps {
  onBookConsultation: () => void
}

export function CTASection({ onBookConsultation }: CTASectionProps) {
  return (
    <section className="py-24 bg-black">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-thin tracking-tight sm:text-4xl md:text-5xl">
            Ready to Transform Your Business?
          </h2>
          <Button size="lg" onClick={onBookConsultation} className="text-base font-light px-8 py-3">
            Schedule Your Free AI Assessment
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:9092062727"
              className="text-base font-light text-muted-foreground hover:text-primary transition-colors"
            >
              909-206-2727
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
