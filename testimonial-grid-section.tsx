import { Card, CardContent } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechFlow Solutions",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "BloomIntel's AI automation transformed our customer service. We reduced response times by 80% and increased customer satisfaction significantly. Their team understood our needs perfectly.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Operations Director, Global Logistics Inc",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "The IT support and infrastructure management from BloomIntel has been exceptional. Our systems run smoothly 24/7, and their proactive monitoring prevented several potential issues.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Founder, Creative Agency Co",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Their custom CRM solution streamlined our entire sales process. We can now track leads, manage projects, and analyze performance all in one place. ROI was evident within 3 months.",
    rating: 5,
  },
]

export function TestimonialGridSection() {
  return (
    <section id="testimonials" className="py-24 bg-black">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-thin tracking-tight sm:text-4xl md:text-5xl mb-4">Client Success Stories</h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            See how businesses like yours have transformed their operations with our AI automation and IT solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/50 border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm font-light text-muted-foreground mb-4 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-light">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-light">{testimonial.name}</p>
                    <p className="text-xs font-light text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
