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
  // THIS IS FAKE DATA, JUST FOR THE DEMO
  {
    rank: 1,
    company: "Xelix",
    category: "AI Infrastructure",
    amount: "16M",
    change: 25,
    description: "Enterprise AI platform",
  },
  {
    rank: 2,
    company: "Vanta",
    category: "Security",
    amount: "15M",
    change: -9,
    description: "Automated compliance platform",
  },
  {
    rank: 3,
    company: "Engine AI（众擎）",
    category: "AI Tools",
    amount: "15M",
    change: 2,
    description: "AI-powered development tools",
  },
  {
    rank: 4,
    company: "Reka AI",
    category: "Machine Learning",
    amount: "11M",
    change: -2,
    description: "Multimodal AI research",
  },
  {
    rank: 5,
    company: "Nudge",
    category: "Fintech",
    amount: "10M",
    change: 15,
    description: "Financial wellness platform",
  },
  {
    rank: 6,
    company: "Buena",
    category: "PropTech",
    amount: "5.8M",
    change: 3,
    description: "Real estate technology",
  },
  {
    rank: 7,
    company: "Radical AI",
    category: "AI Research",
    amount: "5.5M",
    change: 105201,
    description: "Advanced AI algorithms",
  },
  {
    rank: 8,
    company: "LegalOn Technologies",
    category: "LegalTech",
    amount: "5M",
    change: 38,
    description: "AI-powered legal solutions",
  },
  {
    rank: 9,
    company: "Swift Navigation",
    category: "Navigation",
    amount: "5M",
    change: 186,
    description: "Precise positioning technology",
  },
  {
    rank: 10,
    company: "Ashby",
    category: "HR Tech",
    amount: "5M",
    change: -12,
    description: "Recruiting and talent management",
  },
];

export default function FundingLeaderboard() {
  const leftColumn = leaderboardData.slice(0, 5);
  const rightColumn = leaderboardData.slice(5, 10);

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
                  <div className="text-sm text-muted-foreground">
                    by{" "}
                    <span className="underline">
                      {item.category.toLowerCase()}
                    </span>
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
                  <div className="text-sm text-muted-foreground">
                    by{" "}
                    <span className="underline">
                      {item.category.toLowerCase()}
                    </span>
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
