"use client"

import { Card, CardContent } from "./ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    company: "TechFlow Inc.",
    title: "CTO",
    rating: 5,
    quote: "BloomIntel reduced our operational costs by 45% in just 6 months.",
  },
  {
    name: "Kenji Tanaka",
    company: "Global Solutions Ltd.",
    title: "CEO",
    rating: 5,
    quote: "Their IT support is unparalleled. We've never experienced such reliable service.",
  },
  {
    name: "Fatima Al-Sayed",
    company: "Innovate Corp.",
    title: "Head of Marketing",
    rating: 5,
    quote: "The custom solutions they developed have transformed our customer engagement strategy.",
  },
  {
    name: "Javier Morales",
    company: "DataDriven Inc.",
    title: "COO",
    rating: 5,
    quote: "The business intelligence tools they provided gave us insights we never thought possible.",
  },
  {
    name: "James Tanner",
    company: "Synergy Solutions",
    title: "IT Director",
    rating: 5,
    quote: "Their team integrated seamlessly with ours. The entire process was smooth and professional.",
  },
]

export function TestimonialCarousel() {
  return (
    <section className="py-24 bg-black">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-thin tracking-tight sm:text-4xl md:text-5xl text-center mb-12">
          What Our Clients Say
        </h2>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="bg-card/50 border-border/50 h-full">
                    <CardContent className="p-6 flex flex-col text-center h-full">
                      <div className="flex items-center justify-center space-x-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-sm font-light text-muted-foreground mb-4 leading-relaxed flex-grow">
                        "{testimonial.quote}"
                      </p>
                      <div className="mt-auto">
                        <p className="text-sm font-light">{testimonial.name}</p>
                        <p className="text-xs font-light text-muted-foreground">
                          {testimonial.title}, {testimonial.company}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center space-x-4 mt-8">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
