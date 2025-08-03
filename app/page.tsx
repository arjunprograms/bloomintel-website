"use client"

import { useState } from "react"
import { HeroSection } from "../hero-section"
import { BentoSection } from "../bento-section"
import { CTASection } from "../cta-section"
import { FooterSection } from "../footer-section"
import { ContactForm } from "../contact-form"
import { ROICalculator } from "../roi-calculator"
import { FAQSection } from "../faq-section"
import { TestimonialCarousel } from "../testimonial-carousel"

export default function Home() {
  const [showContactForm, setShowContactForm] = useState(false)

  const handleBookConsultation = () => {
    setShowContactForm(true)
  }

  const handleCloseContactForm = () => {
    setShowContactForm(false)
  }

  if (showContactForm) {
    return <ContactForm onClose={handleCloseContactForm} />
  }

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <HeroSection onBookConsultation={handleBookConsultation} />
      <BentoSection />
      <ROICalculator />
      <TestimonialCarousel />
      <FAQSection />
      <CTASection onBookConsultation={handleBookConsultation} />
      <FooterSection onBookConsultation={handleBookConsultation} />
    </div>
  )
}
