"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import type { HistoricalAqi } from "@/types";

const chartConfig = {
  'PM2.5': {
    label: 'PM2.5',
    color: 'hsl(var(--chart-1))',
  },
  'O₃': {
    label: 'O₃',
    color: 'hsl(var(--chart-2))',
  },
  'NO₂': {
    label: 'NO₂',
    color: 'hsl(var(--chart-3))',
  },
} satisfies ChartConfig

export function HistoricalChartCard({ data }: { data: HistoricalAqi[] }) {
  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle>Historical & Predictive Insights</CardTitle>
        <CardDescription>AQI trends for the past 7 days.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <Tooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Legend />
            <Line dataKey="PM2.5" type="monotone" stroke="var(--color-PM2.5)" strokeWidth={2} dot={false} />
            <Line dataKey="O₃" type="monotone" stroke="var(--color-O₃)" strokeWidth={2} dot={false} />
            <Line dataKey="NO₂" type="monotone" stroke="var(--color-NO₂)" strokeWidth={2} dot={false} />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
