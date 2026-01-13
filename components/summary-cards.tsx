import { Card, CardContent } from "@/components/ui/card"
import { Cpu, Package, AlertTriangle, Activity } from "lucide-react"

const summaryData = [
  {
    title: "Active Equipment",
    value: "3/4",
    subtitle: "1 in maintenance",
    icon: Cpu,
    trend: "stable",
  },
  {
    title: "Total Production Today",
    value: "12,847",
    subtitle: "+8.2% from yesterday",
    icon: Package,
    trend: "up",
  },
  {
    title: "Defect Rate",
    value: "0.42%",
    subtitle: "Target: <0.5%",
    icon: Activity,
    trend: "good",
  },
  {
    title: "Active Alarms",
    value: "2",
    subtitle: "1 critical, 1 warning",
    icon: AlertTriangle,
    trend: "alert",
  },
]

export function SummaryCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {summaryData.map((item) => (
        <Card key={item.title} className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">{item.title}</p>
                <p className="text-2xl font-bold text-foreground">{item.value}</p>
                <p
                  className={`text-xs ${
                    item.trend === "alert"
                      ? "text-status-alarm"
                      : item.trend === "good"
                        ? "text-status-run"
                        : "text-muted-foreground"
                  }`}
                >
                  {item.subtitle}
                </p>
              </div>
              <div
                className={`p-2 rounded-lg ${
                  item.trend === "alert"
                    ? "bg-status-alarm/10"
                    : item.trend === "good"
                      ? "bg-status-run/10"
                      : "bg-primary/10"
                }`}
              >
                <item.icon
                  className={`h-5 w-5 ${
                    item.trend === "alert"
                      ? "text-status-alarm"
                      : item.trend === "good"
                        ? "text-status-run"
                        : "text-primary"
                  }`}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
