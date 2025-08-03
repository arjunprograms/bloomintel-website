import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Headphones, MessageCircle, BookOpen, Users } from "lucide-react"

export function ImplementationSupport() {
  return (
    <Card className="h-full bg-card/50 border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-light">
          <Headphones className="h-5 w-5 text-primary" />
          Implementation Support
        </CardTitle>
        <CardDescription className="font-light">Full support from planning to deployment and beyond.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-2 bg-muted/20 rounded-lg">
            <MessageCircle className="h-4 w-4 text-primary" />
            <div>
              <div className="text-sm font-light">24/7 Support</div>
              <div className="text-xs text-muted-foreground font-light">Always available when you need us</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-2 bg-muted/20 rounded-lg">
            <BookOpen className="h-4 w-4 text-primary" />
            <div>
              <div className="text-sm font-light">Training & Documentation</div>
              <div className="text-xs text-muted-foreground font-light">Comprehensive guides and tutorials</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-2 bg-muted/20 rounded-lg">
            <Users className="h-4 w-4 text-primary" />
            <div>
              <div className="text-sm font-light">Dedicated Team</div>
              <div className="text-xs text-muted-foreground font-light">Expert consultants for your project</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
