import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Users, Phone, Mail, Calendar } from "lucide-react"

export function CRMSystem() {
  return (
    <Card className="h-full bg-card/50 border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-light">
          <Users className="h-5 w-5 text-primary" />
          Customer Relationship Management
        </CardTitle>
        <CardDescription className="font-light">
          Centralize customer data, track interactions, and manage your sales pipeline effectively.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-muted/20 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm font-light">Contact Management</span>
              </div>
              <p className="text-xs text-muted-foreground font-light">
                Store and organize all customer information in one place
              </p>
            </div>
            <div className="bg-muted/20 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm font-light">Email Integration</span>
              </div>
              <p className="text-xs text-muted-foreground font-light">Sync emails and track communication history</p>
            </div>
          </div>
          <div className="bg-muted/20 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="h-4 w-4 text-primary" />
              <span className="text-sm font-light">Sales Pipeline</span>
            </div>
            <div className="flex gap-2 mt-2">
              <div className="h-2 bg-primary/30 rounded flex-1"></div>
              <div className="h-2 bg-primary/60 rounded flex-1"></div>
              <div className="h-2 bg-primary rounded flex-1"></div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
