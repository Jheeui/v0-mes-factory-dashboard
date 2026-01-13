import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const equipmentData = [
  {
    id: "EQ-001",
    status: "RUN",
    temperature: 72.4,
    pressure: 1.2,
    rpm: 1450,
    production: 3245,
  },
  {
    id: "EQ-002",
    status: "RUN",
    temperature: 68.9,
    pressure: 1.1,
    rpm: 1420,
    production: 3102,
  },
  {
    id: "EQ-003",
    status: "ALARM",
    temperature: 89.2,
    pressure: 1.8,
    rpm: 1380,
    production: 2890,
  },
  {
    id: "EQ-004",
    status: "STOP",
    temperature: 24.1,
    pressure: 0,
    rpm: 0,
    production: 3610,
  },
]

function getStatusBadge(status: string) {
  const styles = {
    RUN: "bg-status-run/20 text-status-run border-status-run/30",
    STOP: "bg-status-stop/20 text-status-stop border-status-stop/30",
    ALARM: "bg-status-alarm/20 text-status-alarm border-status-alarm/30",
  }
  return styles[status as keyof typeof styles] || styles.STOP
}

export function EquipmentTable() {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-foreground">Equipment Status</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="text-muted-foreground">Equipment ID</TableHead>
                <TableHead className="text-muted-foreground">Status</TableHead>
                <TableHead className="text-muted-foreground text-right">Temp (°C)</TableHead>
                <TableHead className="text-muted-foreground text-right">Pressure (bar)</TableHead>
                <TableHead className="text-muted-foreground text-right">RPM</TableHead>
                <TableHead className="text-muted-foreground text-right">Production</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {equipmentData.map((equipment) => (
                <TableRow key={equipment.id} className="border-border">
                  <TableCell className="font-mono text-foreground">{equipment.id}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getStatusBadge(equipment.status)}>
                      {equipment.status}
                    </Badge>
                  </TableCell>
                  <TableCell
                    className={`text-right font-mono ${
                      equipment.temperature > 80 ? "text-status-alarm" : "text-foreground"
                    }`}
                  >
                    {equipment.temperature}
                  </TableCell>
                  <TableCell
                    className={`text-right font-mono ${
                      equipment.pressure > 1.5 ? "text-status-warning" : "text-foreground"
                    }`}
                  >
                    {equipment.pressure}
                  </TableCell>
                  <TableCell className="text-right font-mono text-foreground">{equipment.rpm}</TableCell>
                  <TableCell className="text-right font-mono text-foreground">
                    {equipment.production.toLocaleString()}
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
