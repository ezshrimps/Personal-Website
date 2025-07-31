import { Navbar } from "@/components/navbar";
import FundingBarChart from "@/components/funding-bar-chart";
import FundingLeaderboard from "@/components/funding-leaderboard";

export default function TestPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container px-4 md:px-6 py-12 max-w-5xl mx-auto space-y-8">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter">Test</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Testing I love testing!!!! jk
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Data Visualization</h2>
          <FundingBarChart />
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Company Rankings</h2>
          <FundingLeaderboard />
        </section>
      </div>
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Zihao Xia. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
