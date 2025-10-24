"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertCircle, CheckCircle2, XCircle, Clock } from "lucide-react"

const scans = [
  {
    name: "Semgrep (SAST)",
    status: "completed",
    findings: { critical: 2, high: 8, medium: 15, low: 23 },
    progress: 100,
    lastRun: "2 hours ago",
  },
  {
    name: "OWASP ZAP (DAST)",
    status: "running",
    findings: { critical: 0, high: 3, medium: 12, low: 18 },
    progress: 67,
    lastRun: "In progress",
  },
  {
    name: "Snyk (SCA)",
    status: "completed",
    findings: { critical: 1, high: 5, medium: 9, low: 14 },
    progress: 100,
    lastRun: "1 hour ago",
  },
  {
    name: "Secrets Scanning",
    status: "completed",
    findings: { critical: 0, high: 0, medium: 0, low: 0 },
    progress: 100,
    lastRun: "30 minutes ago",
  },
]

const statusConfig = {
  completed: { icon: CheckCircle2, color: "text-accent", bg: "bg-accent/10" },
  running: { icon: Clock, color: "text-chart-3", bg: "bg-chart-3/10" },
  failed: { icon: XCircle, color: "text-destructive", bg: "bg-destructive/10" },
}

export function SecurityScans() {
  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Security Scans</h2>
            <p className="text-sm text-muted-foreground">Automated scanning in CI/CD pipeline</p>
          </div>
          <Badge variant="outline" className="gap-1">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Live
          </Badge>
        </div>

        <div className="space-y-4">
          {scans.map((scan) => {
            const StatusIcon = statusConfig[scan.status as keyof typeof statusConfig].icon
            const statusColor = statusConfig[scan.status as keyof typeof statusConfig].color
            const statusBg = statusConfig[scan.status as keyof typeof statusConfig].bg

            return (
              <div key={scan.name} className="space-y-3 p-4 rounded-lg border border-border bg-card">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${statusBg}`}>
                      <StatusIcon className={`w-4 h-4 ${statusColor}`} />
                    </div>
                    <div>
                      <p className="font-medium">{scan.name}</p>
                      <p className="text-xs text-muted-foreground">{scan.lastRun}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {scan.findings.critical > 0 && (
                      <Badge variant="destructive" className="gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {scan.findings.critical} Critical
                      </Badge>
                    )}
                    {scan.findings.high > 0 && (
                      <Badge variant="outline" className="gap-1 border-chart-4 text-chart-4">
                        {scan.findings.high} High
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Progress</span>
                    <span>{scan.progress}%</span>
                  </div>
                  <Progress value={scan.progress} className="h-2" />
                </div>

                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-destructive" />
                    <span className="text-muted-foreground">Critical: {scan.findings.critical}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-chart-4" />
                    <span className="text-muted-foreground">High: {scan.findings.high}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-chart-3" />
                    <span className="text-muted-foreground">Medium: {scan.findings.medium}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-muted" />
                    <span className="text-muted-foreground">Low: {scan.findings.low}</span>
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
