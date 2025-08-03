"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

const faqs = [
  {
    question: "How long does AI implementation take?",
    answer:
      "The implementation timeline varies depending on the complexity of the project. However, most of our clients see initial results within 3-6 months.",
  },
  {
    question: "What's the typical ROI timeline?",
    answer:
      "Our clients typically experience a return on investment within 12-18 months. We provide detailed ROI projections during the consultation phase.",
  },
  {
    question: "Do you provide staff training?",
    answer:
      "Yes, we offer comprehensive training programs to ensure your team can effectively use and manage the AI solutions we implement.",
  },
  {
    question: "How do you ensure data security?",
    answer:
      "Data security is our top priority. We use industry-leading encryption and security protocols to protect your sensitive information.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We specialize in healthcare, manufacturing, finance, retail, and education, but our solutions can be adapted to various industries.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-thin tracking-tight sm:text-4xl md:text-5xl text-center mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="font-light">{faq.question}</AccordionTrigger>
              <AccordionContent className="font-light text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
