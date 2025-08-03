import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { BarChart3, BrainCircuit } from "lucide-react"

export function AnalyticsSection() {
  return (
    <section id="analytics" className="py-24 bg-black">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-thin tracking-tight sm:text-4xl md:text-5xl mb-4">Data-Driven Insights</h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Unlock the power of your data with our advanced analytics and intelligence solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <BarChart3 className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl font-light">Business Analytics</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="font-light mb-4">
                Transform raw data into actionable insights with real-time dashboards and comprehensive performance
                tracking.
              </CardDescription>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm font-light">Custom KPI Dashboards</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm font-light">Performance Metrics Analysis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm font-light">Market Trend Identification</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <BrainCircuit className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl font-light">Business Intelligence</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="font-light mb-4">
                Leverage AI-powered intelligence to forecast trends, optimize strategies, and make smarter business
                decisions.
              </CardDescription>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm font-light">Predictive Modeling</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm font-light">Competitive Landscape Analysis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm font-light">Strategic Planning Tools</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
