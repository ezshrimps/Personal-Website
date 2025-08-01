"use client";

import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function FundingStackedBarChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/fundingData_full.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const colors = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff7f50",
    "#8dd1e1",
    "#a4de6c",
    "#d0ed57",
    "#ffc0cb",
    "#00c49f",
    "#ffbb28",
    "#888888",
    "#ff69b4",
  ];

  if (data.length === 0) return <div>Loading...</div>;

  const companyKeys = Object.keys(data[0]).filter((key) => key !== "year");

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          『AI Weekly』Funding by Year
        </CardTitle>
        <CardDescription>
          Amount Raised (in $10K) by Year & Company
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[500px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              barCategoryGap={0}
              barSize={30}
            >
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--background))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px",
                  color: "hsl(var(--foreground))",
                }}
              />
              {/* <Legend /> */}
              {companyKeys.map((key, index) => (
                <Bar
                  key={key}
                  dataKey={key}
                  stackId="a"
                  fill={colors[index % colors.length]}
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
