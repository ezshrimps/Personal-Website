"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Info } from "lucide-react";

const leaderboardData = [
  { company: "Xelix", amount: "16M", change: 5 },
  { company: "Vanta", amount: "15M", change: 5 },
  { company: "Engine AI（众擎）", amount: "15M", change: 5 },
  { company: "Reka AI", amount: "11M", change: 5 },
  { company: "Nudge", amount: "10M", change: 5 },
  { company: "Buena", amount: "5.8M", change: 5 },
  { company: "Radical AI", amount: "5.5M", change: 5 },
  { company: "LegalOn Technologies", amount: "5M", change: 5 },
  { company: "Swift Navigation", amount: "5M", change: 5 },
  { company: "Ashby", amount: "5M", change: 5 },
];

// Convert amount to number for ranking
function parseAmount(amount: string) {
  if (amount.endsWith("M")) {
    return parseFloat(amount) * 1_000_000;
  }
  if (amount.endsWith("K")) {
    return parseFloat(amount) * 1_000;
  }
  return parseFloat(amount);
}

export default function FundingLeaderboard() {
  // ranking by amount
  const sortedData = [...leaderboardData]
    .sort((a, b) => parseAmount(b.amount) - parseAmount(a.amount))
    .map((item, index) => ({ ...item, rank: index + 1 }));

  const leftColumn = sortedData.slice(0, 5);
  const rightColumn = sortedData.slice(5, 10);

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="space-y-1">
          <CardTitle className="text-2xl font-bold flex items-center gap-2">
            Leaderboard
          </CardTitle>
          <CardDescription className="flex items-center gap-1">
            Funding amounts across companies
            <Info className="h-4 w-4" />
          </CardDescription>
        </div>
        <Badge variant="outline" className="text-sm">
          Top this week ⌄
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-4">
            {leftColumn.map((item) => (
              <div key={item.rank} className="flex items-start gap-3">
                <div className="text-lg font-semibold text-muted-foreground min-w-[24px]">
                  {item.rank}.
                </div>
                <div className="flex-1 space-y-1">
                  <div className="font-semibold text-foreground">
                    {item.company}
                  </div>
                </div>
                <div className="text-right space-y-1">
                  <div className="font-medium">${item.amount}</div>
                  <div
                    className={`text-sm flex items-center gap-1 ${
                      item.change > 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {item.change > 0 ? (
                      <TrendingUp className="h-3 w-3" />
                    ) : (
                      <TrendingDown className="h-3 w-3" />
                    )}
                    {Math.abs(item.change)}%
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightColumn.map((item) => (
              <div key={item.rank} className="flex items-start gap-3">
                <div className="text-lg font-semibold text-muted-foreground min-w-[24px]">
                  {item.rank}.
                </div>
                <div className="flex-1 space-y-1">
                  <div className="font-semibold text-foreground">
                    {item.company}
                  </div>
                </div>
                <div className="text-right space-y-1">
                  <div className="font-medium">${item.amount}</div>
                  <div
                    className={`text-sm flex items-center gap-1 ${
                      item.change > 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {item.change > 0 ? (
                      <TrendingUp className="h-3 w-3" />
                    ) : (
                      <TrendingDown className="h-3 w-3" />
                    )}
                    {Math.abs(item.change)}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
