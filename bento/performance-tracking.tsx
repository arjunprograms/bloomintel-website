import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Monitor, AlertCircle, CheckCircle, Clock } from "lucide-react"

export function PerformanceTracking() {
  return (
    <Card className="h-full bg-card/50 border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-light">
          <Monitor className="h-5 w-5 text-primary" />
          Performance Tracking & Monitoring
        </CardTitle>
        <CardDescription className="font-light">
          Real-time system monitoring and performance optimization to ensure your solutions run smoothly.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-muted/20 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm font-light">System Health</span>
            </div>
            <div className="text-2xl font-light text-green-500 mb-1">99.9%</div>
            <div className="text-xs text-muted-foreground font-light">Uptime</div>
          </div>
          <div className="bg-muted/20 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-sm font-light">Response Time</span>
            </div>
            <div className="text-2xl font-light text-primary mb-1">0.2s</div>
            <div className="text-xs text-muted-foreground font-light">Average</div>
          </div>
          <div className="bg-muted/20 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="h-4 w-4 text-yellow-500" />
              <span className="text-sm font-light">Alerts</span>
            </div>
            <div className="text-2xl font-light text-yellow-500 mb-1">0</div>
            <div className="text-xs text-muted-foreground font-light">Active Issues</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
