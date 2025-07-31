"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const data = [
  { name: "Xelix", amount: 16000 },
  { name: "Vanta", amount: 15000 },
  { name: "Engine AI（众擎）", amount: 15000 },
  { name: "Reka AI", amount: 11000 },
  { name: "Nudge", amount: 10000 },
  { name: "Buena", amount: 5800 },
  { name: "Radical AI", amount: 5500 },
  { name: "LegalOn Technologies", amount: 5000 },
  { name: "Swift Navigation", amount: 5000 },
  { name: "Ashby", amount: 5000 },
];

export default function FundingBarChart() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          『AI Weekly』Funding Top 10
        </CardTitle>
        <CardDescription>Amount Raised (in $10K)</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[500px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              barSize={20}
            >
              <XAxis type="number" hide />
              <YAxis
                type="category"
                dataKey="name"
                width={150}
                tick={{ fontSize: 12 }}
                className="text-muted-foreground"
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--background))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px",
                  color: "hsl(var(--foreground))",
                }}
              />
              <Bar
                dataKey="amount"
                fill="hsl(var(--primary))"
                radius={[0, 4, 4, 0]}
              >
                <LabelList
                  dataKey="amount"
                  position="right"
                  fill="hsl(var(--primary))"
                  fontSize={12}
                  fontWeight="500"
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
