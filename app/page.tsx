import { DashboardHeader } from "@/components/dashboard-header"
import { SummaryCards } from "@/components/summary-cards"
import { EquipmentTable } from "@/components/equipment-table"
import { MetricsChart } from "@/components/metrics-chart"
import { AlarmLog } from "@/components/alarm-log"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-6 space-y-6">
        <SummaryCards />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <EquipmentTable />
          <MetricsChart />
        </div>
        <AlarmLog />
      </main>
    </div>
  )
}
