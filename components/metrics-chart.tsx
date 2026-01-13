"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

const chartData: Record<
  string,
  Array<{
    time: string
    temperature: number
    pressure: number
    vibration: number
  }>
> = {
  "EQ-001": [
    { time: "00:00", temperature: 70, pressure: 1.1, vibration: 2.3 },
    { time: "04:00", temperature: 71, pressure: 1.2, vibration: 2.4 },
    { time: "08:00", temperature: 73, pressure: 1.2, vibration: 2.5 },
    { time: "12:00", temperature: 72, pressure: 1.1, vibration: 2.3 },
    { time: "16:00", temperature: 74, pressure: 1.3, vibration: 2.6 },
    { time: "20:00", temperature: 72, pressure: 1.2, vibration: 2.4 },
    { time: "Now", temperature: 72.4, pressure: 1.2, vibration: 2.5 },
  ],
  "EQ-002": [
    { time: "00:00", temperature: 67, pressure: 1.0, vibration: 2.1 },
    { time: "04:00", temperature: 68, pressure: 1.1, vibration: 2.2 },
    { time: "08:00", temperature: 69, pressure: 1.1, vibration: 2.3 },
    { time: "12:00", temperature: 70, pressure: 1.2, vibration: 2.2 },
    { time: "16:00", temperature: 69, pressure: 1.1, vibration: 2.3 },
    { time: "20:00", temperature: 68, pressure: 1.0, vibration: 2.1 },
    { time: "Now", temperature: 68.9, pressure: 1.1, vibration: 2.2 },
  ],
  "EQ-003": [
    { time: "00:00", temperature: 72, pressure: 1.2, vibration: 2.5 },
    { time: "04:00", temperature: 75, pressure: 1.3, vibration: 2.7 },
    { time: "08:00", temperature: 79, pressure: 1.4, vibration: 3.0 },
    { time: "12:00", temperature: 83, pressure: 1.5, vibration: 3.4 },
    { time: "16:00", temperature: 86, pressure: 1.6, vibration: 3.7 },
    { time: "20:00", temperature: 88, pressure: 1.7, vibration: 4.0 },
    { time: "Now", temperature: 89.2, pressure: 1.8, vibration: 4.2 },
  ],
  "EQ-004": [
    { time: "00:00", temperature: 71, pressure: 1.2, vibration: 2.4 },
    { time: "04:00", temperature: 70, pressure: 1.1, vibration: 2.3 },
    { time: "08:00", temperature: 68, pressure: 1.0, vibration: 2.1 },
    { time: "12:00", temperature: 45, pressure: 0.5, vibration: 1.0 },
    { time: "16:00", temperature: 30, pressure: 0.2, vibration: 0.3 },
    { time: "20:00", temperature: 25, pressure: 0, vibration: 0 },
    { time: "Now", temperature: 24.1, pressure: 0, vibration: 0 },
  ],
}

export function MetricsChart() {
  const [selectedEquipment, setSelectedEquipment] = useState("EQ-001")

  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-foreground">Real-time Metrics</CardTitle>
          <Select value={selectedEquipment} onValueChange={setSelectedEquipment}>
            <SelectTrigger className="w-32 bg-secondary border-border">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border">
              <SelectItem value="EQ-001">EQ-001</SelectItem>
              <SelectItem value="EQ-002">EQ-002</SelectItem>
              <SelectItem value="EQ-003">EQ-003</SelectItem>
              <SelectItem value="EQ-004">EQ-004</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData[selectedEquipment]}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  borderColor: "hsl(var(--border))",
                  borderRadius: "8px",
                  color: "hsl(var(--foreground))",
                }}
                labelStyle={{ color: "hsl(var(--foreground))" }}
              />
              <Legend wrapperStyle={{ fontSize: "12px", color: "hsl(var(--muted-foreground))" }} />
              <Line
                type="monotone"
                dataKey="temperature"
                stroke="hsl(var(--chart-1))"
                strokeWidth={2}
                dot={false}
                name="Temperature (°C)"
              />
              <Line
                type="monotone"
                dataKey="pressure"
                stroke="hsl(var(--chart-2))"
                strokeWidth={2}
                dot={false}
                name="Pressure (bar)"
              />
              <Line
                type="monotone"
                dataKey="vibration"
                stroke="hsl(var(--chart-3))"
                strokeWidth={2}
                dot={false}
                name="Vibration (mm/s)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
