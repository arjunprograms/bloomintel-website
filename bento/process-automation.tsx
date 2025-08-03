import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Zap, ArrowRight, CheckCircle, Clock } from "lucide-react"

export function ProcessAutomation() {
  return (
    <Card className="h-full bg-card/50 border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-light">
          <Zap className="h-5 w-5 text-primary" />
          Process Automation
        </CardTitle>
        <CardDescription className="font-light">Streamline workflows and eliminate manual tasks.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-light">
            <div className="w-8 h-8 bg-muted/20 rounded-full flex items-center justify-center">
              <Clock className="h-4 w-4 text-primary" />
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
            <div className="w-8 h-8 bg-muted/20 rounded-full flex items-center justify-center">
              <Zap className="h-4 w-4 text-primary" />
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
              <CheckCircle className="h-4 w-4 text-primary" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="bg-muted/20 p-3 rounded-lg">
              <div className="text-sm font-light mb-1">Email Workflows</div>
              <div className="text-xs text-muted-foreground font-light">Automated email sequences and responses</div>
            </div>
            <div className="bg-muted/20 p-3 rounded-lg">
              <div className="text-sm font-light mb-1">Data Processing</div>
              <div className="text-xs text-muted-foreground font-light">Automatic data entry and validation</div>
            </div>
            <div className="bg-muted/20 p-3 rounded-lg">
              <div className="text-sm font-light mb-1">Report Generation</div>
              <div className="text-xs text-muted-foreground font-light">Scheduled reports and analytics</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
