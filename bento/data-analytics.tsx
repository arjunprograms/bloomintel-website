import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { PieChart, LineChart, BarChart, TrendingUp } from "lucide-react"

export function DataAnalytics() {
  return (
    <Card className="h-full bg-card/50 border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-light">
          <PieChart className="h-5 w-5 text-primary" />
          Data Analytics
        </CardTitle>
        <CardDescription className="font-light">Transform raw data into actionable business insights.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-muted/20 p-2 rounded-lg text-center">
              <LineChart className="h-4 w-4 text-primary mx-auto mb-1" />
              <div className="text-xs font-light">Trends</div>
            </div>
            <div className="bg-muted/20 p-2 rounded-lg text-center">
              <BarChart className="h-4 w-4 text-primary mx-auto mb-1" />
              <div className="text-xs font-light">Reports</div>
            </div>
            <div className="bg-muted/20 p-2 rounded-lg text-center">
              <TrendingUp className="h-4 w-4 text-primary mx-auto mb-1" />
              <div className="text-xs font-light">Forecasts</div>
            </div>
          </div>
          <div className="bg-muted/20 p-3 rounded-lg">
            <div className="text-sm font-light mb-2">Key Metrics</div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-light">
                <span>Customer Acquisition</span>
                <span className="text-primary">+15%</span>
              </div>
              <div className="flex justify-between text-xs font-light">
                <span>Revenue Growth</span>
                <span className="text-primary">+28%</span>
              </div>
              <div className="flex justify-between text-xs font-light">
                <span>Operational Efficiency</span>
                <span className="text-primary">+42%</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
