import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, AlertCircle } from "lucide-react"

const alarmData = [
  {
    timestamp: "2026-01-12 14:32:15",
    equipmentId: "EQ-003",
    type: "High Temperature",
    value: "89.2°C",
    severity: "critical",
  },
  {
    timestamp: "2026-01-12 14:28:42",
    equipmentId: "EQ-003",
    type: "High Pressure",
    value: "1.8 bar",
    severity: "warning",
  },
  {
    timestamp: "2026-01-12 12:15:33",
    equipmentId: "EQ-004",
    type: "Equipment Stopped",
    value: "Maintenance",
    severity: "info",
  },
  {
    timestamp: "2026-01-12 10:45:21",
    equipmentId: "EQ-003",
    type: "Vibration Alert",
    value: "4.2 mm/s",
    severity: "warning",
  },
  {
    timestamp: "2026-01-12 08:20:08",
    equipmentId: "EQ-001",
    type: "RPM Fluctuation",
    value: "±50 RPM",
    severity: "info",
  },
]

function getSeverityBadge(severity: string) {
  const styles = {
    critical: "bg-status-alarm/20 text-status-alarm border-status-alarm/30",
    warning: "bg-status-warning/20 text-status-warning border-status-warning/30",
    info: "bg-primary/20 text-primary border-primary/30",
  }
  return styles[severity as keyof typeof styles] || styles.info
}

function getSeverityIcon(severity: string) {
  if (severity === "critical") return <AlertCircle className="h-4 w-4 text-status-alarm" />
  if (severity === "warning") return <AlertTriangle className="h-4 w-4 text-status-warning" />
  return null
}

export function AlarmLog() {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-foreground">Recent Alarms</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="text-muted-foreground w-8"></TableHead>
                <TableHead className="text-muted-foreground">Timestamp</TableHead>
                <TableHead className="text-muted-foreground">Equipment ID</TableHead>
                <TableHead className="text-muted-foreground">Alarm Type</TableHead>
                <TableHead className="text-muted-foreground">Value</TableHead>
                <TableHead className="text-muted-foreground">Severity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {alarmData.map((alarm, index) => (
                <TableRow key={index} className="border-border">
                  <TableCell>{getSeverityIcon(alarm.severity)}</TableCell>
                  <TableCell className="font-mono text-sm text-muted-foreground">{alarm.timestamp}</TableCell>
                  <TableCell className="font-mono text-foreground">{alarm.equipmentId}</TableCell>
                  <TableCell className="text-foreground">{alarm.type}</TableCell>
                  <TableCell className="font-mono text-foreground">{alarm.value}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getSeverityBadge(alarm.severity)}>
                      {alarm.severity}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
