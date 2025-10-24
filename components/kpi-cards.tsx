import { Card } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Shield, AlertTriangle, CheckCircle2, Lock } from "lucide-react"

const kpis = [
  {
    title: "Vulnerability Detection",
    value: "+45%",
    subtitle: "Pre-merge findings",
    trend: "up",
    icon: Shield,
    color: "text-chart-1",
  },
  {
    title: "Secrets Leakage",
    value: "100%",
    subtitle: "Prevention rate",
    trend: "up",
    icon: Lock,
    color: "text-accent",
  },
  {
    title: "Design Changes",
    value: "8",
    subtitle: "From threat modeling",
    trend: "neutral",
    icon: CheckCircle2,
    color: "text-chart-2",
  },
  {
    title: "QA Risk Reduction",
    value: "-30%",
    subtitle: "Critical findings",
    trend: "down",
    icon: AlertTriangle,
    color: "text-chart-3",
  },
]

export function KpiCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {kpis.map((kpi) => {
        const Icon = kpi.icon
        return (
          <Card key={kpi.title} className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">{kpi.title}</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-bold">{kpi.value}</p>
                  {kpi.trend === "up" && <TrendingUp className="w-4 h-4 text-accent" />}
                  {kpi.trend === "down" && <TrendingDown className="w-4 h-4 text-accent" />}
                </div>
                <p className="text-xs text-muted-foreground">{kpi.subtitle}</p>
              </div>
              <div className={`p-2 rounded-lg bg-secondary ${kpi.color}`}>
                <Icon className="w-5 h-5" />
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
