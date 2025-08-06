import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Bot, Wrench, Lightbulb, BarChart3, BrainCircuit, Zap } from "lucide-react"

export function BentoSection() {
  const solutions = [
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      title: "Autonomous Business Agents",
      description: "Deploy AI workers that handle complex workflows, make decisions, and optimize operations 24/7.",
      metric: "Average 70% reduction in manual tasks",
    },
    {
      icon: <Wrench className="h-8 w-8 text-primary" />,
      title: "Predictive Infrastructure",
      description: "Self-monitoring systems that prevent problems, not just fix them.",
      metric: "99.9% uptime with AI-powered maintenance",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "AI-Native Applications",
      description: "Purpose-built AI systems that become smarter with every interaction.",
      metric: "ROI improvement of 300%+ within 12 months",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Business Analytics",
      description: "Turn your data into actionable insights with our advanced analytics platforms.",
      metric: "Real-time data dashboards",
    },
    {
      icon: <BrainCircuit className="h-8 w-8 text-primary" />,
      title: "Business Intelligence",
      description: "Leverage AI to forecast trends and make smarter, data-driven decisions.",
      metric: "AI-powered forecasting",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Process Automation",
      description: "Automate repetitive business processes to increase efficiency and reduce errors.",
      metric: "Up to 80% faster processing",
    },
  ]

  return (
    <section id="solutions" className="py-24 bg-black">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-thin tracking-tight sm:text-4xl md:text-5xl mb-4">AI Technology Stack</h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Deploy AI agents that don't just automate—they learn, adapt, and transform how your business operates.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution) => (
            <Card
              key={solution.title}
              className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors group flex flex-col"
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  {solution.icon}
                  <CardTitle className="text-2xl font-light">{solution.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div>
                  <CardDescription className="font-light mb-4">{solution.description}</CardDescription>
                  <div className="text-sm text-primary font-light bg-primary/10 px-3 py-1 rounded-full inline-block">
                    {solution.metric}
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
