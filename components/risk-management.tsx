import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle2, TrendingDown } from "lucide-react"

const risks = [
  {
    risk: "Developer Pushback",
    impact: "Medium",
    probability: "High",
    mitigation: "Provide pre-commit hooks + quick fix guidance",
    status: "mitigated",
  },
  {
    risk: "False Positives in Scans",
    impact: "Low",
    probability: "Medium",
    mitigation: "Tune Semgrep/ZAP rulesets",
    status: "in-progress",
  },
  {
    risk: "Low Threat Modeling Adoption",
    impact: "High",
    probability: "Medium",
    mitigation: "Integrate into sprint planning ceremonies",
    status: "monitoring",
  },
  {
    risk: "Coding Guideline Drift",
    impact: "Medium",
    probability: "Low",
    mitigation: "Automate linting rules and enforce in CI/CD",
    status: "mitigated",
  },
]

const impactColors = {
  High: "bg-destructive/10 text-destructive border-destructive",
  Medium: "bg-chart-3/10 text-chart-3 border-chart-3",
  Low: "bg-muted text-muted-foreground border-border",
}

export function RiskManagement() {
  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Risk Management</h2>
            <p className="text-sm text-muted-foreground">Identified risks and mitigation strategies</p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <TrendingDown className="w-4 h-4 text-accent" />
            <span className="text-muted-foreground">4 risks tracked</span>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {risks.map((risk) => (
            <div key={risk.risk} className="space-y-3 p-4 rounded-lg border border-border bg-card">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-chart-4 mt-0.5 flex-shrink-0" />
                  <p className="font-medium text-sm">{risk.risk}</p>
                </div>
                {risk.status === "mitigated" && <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />}
              </div>

              <div className="flex items-center gap-2">
                <Badge
                  variant="outline"
                  className={`text-xs ${impactColors[risk.impact as keyof typeof impactColors]}`}
                >
                  {risk.impact} Impact
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {risk.probability} Probability
                </Badge>
              </div>

              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground">Mitigation</p>
                <p className="text-sm">{risk.mitigation}</p>
              </div>

              <Badge
                variant={risk.status === "mitigated" ? "default" : "outline"}
                className={`text-xs ${risk.status === "mitigated" ? "bg-accent text-accent-foreground" : ""}`}
              >
                {risk.status === "mitigated"
                  ? "Mitigated"
                  : risk.status === "in-progress"
                    ? "In Progress"
                    : "Monitoring"}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
