import { Header } from "@/components/header"
import { KpiCards } from "@/components/kpi-cards"
import { SecurityScans } from "@/components/security-scans"
import { ThreatModeling } from "@/components/threat-modeling"
import { Timeline } from "@/components/timeline"
import { RiskManagement } from "@/components/risk-management"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-balance">SSDLC Pipeline Dashboard</h1>
          <p className="text-muted-foreground text-pretty">
            Monitor security scanning, threat modeling, and secure development lifecycle metrics
          </p>
        </div>

        <KpiCards />
        <SecurityScans />

        <div className="grid gap-8 lg:grid-cols-2">
          <ThreatModeling />
          <Timeline />
        </div>

        <RiskManagement />
      </main>
    </div>
  )
}
