import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, AlertTriangle, CheckCircle2 } from "lucide-react"

const threats = [
  {
    service: "Authentication Service",
    framework: "STRIDE",
    threats: 12,
    mitigated: 10,
    pending: 2,
    status: "in-progress",
  },
  {
    service: "Payment Gateway",
    framework: "STRIDE",
    threats: 15,
    mitigated: 15,
    pending: 0,
    status: "completed",
  },
  {
    service: "User Data API",
    framework: "STRIDE",
    threats: 9,
    mitigated: 7,
    pending: 2,
    status: "in-progress",
  },
]

export function ThreatModeling() {
  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold">Threat Modeling</h2>
          <p className="text-sm text-muted-foreground">STRIDE-based security analysis</p>
        </div>

        <div className="space-y-4">
          {threats.map((threat) => (
            <div key={threat.service} className="space-y-3 p-4 rounded-lg border border-border bg-card">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <p className="font-medium">{threat.service}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">{threat.framework} Framework</p>
                </div>
                <Badge
                  variant={threat.status === "completed" ? "default" : "outline"}
                  className={threat.status === "completed" ? "bg-accent text-accent-foreground" : ""}
                >
                  {threat.status === "completed" ? "Completed" : "In Progress"}
                </Badge>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Total Threats</p>
                  <p className="text-2xl font-bold">{threat.threats}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-accent" />
                    <p className="text-xs text-muted-foreground">Mitigated</p>
                  </div>
                  <p className="text-2xl font-bold text-accent">{threat.mitigated}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3 text-chart-4" />
                    <p className="text-xs text-muted-foreground">Pending</p>
                  </div>
                  <p className="text-2xl font-bold text-chart-4">{threat.pending}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
