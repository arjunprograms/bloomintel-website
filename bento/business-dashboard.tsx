import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { BarChart3, TrendingUp, DollarSign, Activity } from "lucide-react"

export function BusinessDashboard() {
  return (
    <Card className="h-full bg-card/50 border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-light">
          <BarChart3 className="h-5 w-5 text-primary" />
          Business Dashboard
        </CardTitle>
        <CardDescription className="font-light">
          Real-time insights and analytics for data-driven decisions.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-muted/20 p-3 rounded-lg text-center">
              <DollarSign className="h-4 w-4 text-primary mx-auto mb-1" />
              <div className="text-lg font-light">$125K</div>
              <div className="text-xs text-muted-foreground font-light">Revenue</div>
            </div>
            <div className="bg-muted/20 p-3 rounded-lg text-center">
              <TrendingUp className="h-4 w-4 text-primary mx-auto mb-1" />
              <div className="text-lg font-light">+23%</div>
              <div className="text-xs text-muted-foreground font-light">Growth</div>
            </div>
          </div>
          <div className="bg-muted/20 p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="h-4 w-4 text-primary" />
              <span className="text-sm font-light">Performance Metrics</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-light">
                <span>Sales</span>
                <span>85%</span>
              </div>
              <div className="h-1 bg-muted rounded">
                <div className="h-1 bg-primary rounded w-[85%]"></div>
              </div>
              <div className="flex justify-between text-xs font-light">
                <span>Marketing</span>
                <span>72%</span>
              </div>
              <div className="h-1 bg-muted rounded">
                <div className="h-1 bg-primary rounded w-[72%]"></div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
