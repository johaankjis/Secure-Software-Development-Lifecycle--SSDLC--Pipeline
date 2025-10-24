import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Circle, Clock } from "lucide-react"

const milestones = [
  {
    week: "Week 1-2",
    title: "Integrate Security Tools",
    description: "Semgrep, ZAP, Snyk into CI/CD",
    status: "completed",
  },
  {
    week: "Week 3-4",
    title: "Build Python Scripts",
    description: "Secrets scanning + dependency checks",
    status: "completed",
  },
  {
    week: "Week 5-6",
    title: "STRIDE Threat Modeling",
    description: "Pilot microservices analysis",
    status: "in-progress",
  },
  {
    week: "Week 7-8",
    title: "Secure Coding Guidelines",
    description: "Publish guidelines + enforce linting",
    status: "pending",
  },
]

export function Timeline() {
  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold">Project Timeline</h2>
          <p className="text-sm text-muted-foreground">8-week implementation roadmap</p>
        </div>

        <div className="space-y-4">
          {milestones.map((milestone, index) => {
            const isLast = index === milestones.length - 1

            return (
              <div key={milestone.week} className="relative">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                        milestone.status === "completed"
                          ? "bg-accent border-accent"
                          : milestone.status === "in-progress"
                            ? "bg-chart-3 border-chart-3"
                            : "bg-background border-border"
                      }`}
                    >
                      {milestone.status === "completed" ? (
                        <CheckCircle2 className="w-4 h-4 text-accent-foreground" />
                      ) : milestone.status === "in-progress" ? (
                        <Clock className="w-4 h-4 text-background" />
                      ) : (
                        <Circle className="w-4 h-4 text-muted-foreground" />
                      )}
                    </div>
                    {!isLast && (
                      <div className={`w-0.5 h-16 ${milestone.status === "completed" ? "bg-accent" : "bg-border"}`} />
                    )}
                  </div>

                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className="text-xs">
                        {milestone.week}
                      </Badge>
                      {milestone.status === "in-progress" && (
                        <Badge variant="outline" className="text-xs border-chart-3 text-chart-3">
                          Current
                        </Badge>
                      )}
                    </div>
                    <p className="font-medium">{milestone.title}</p>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Card>
  )
}
