import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"

export default function RhythmGamesPage() {
  const games = [
    {
      name: "Beat Saber",
      description: "VR rhythm game where you slash blocks with lightsabers",
      skill: 85,
      achievements: ["Expert+ All Songs", "Top 500 Global Ranking", "Custom Map Creator"],
      image: "/placeholder.svg?height=200&width=200&text=Beat+Saber",
    },
    {
      name: "osu!",
      description: "Rhythm game based on clicking circles to the beat",
      skill: 78,
      achievements: ["6 digit rank", "FC on multiple 6* maps", "1000+ hours played"],
      image: "/placeholder.svg?height=200&width=200&text=osu!",
    },
    {
      name: "Dance Dance Revolution",
      description: "Arcade rhythm game played by stepping on arrow panels",
      skill: 92,
      achievements: ["Cleared multiple 17s", "Local tournament winner", "Perfect Full Combo on 15s"],
      image: "/placeholder.svg?height=200&width=200&text=DDR",
    },
    {
      name: "Taiko no Tatsujin",
      description: "Drum rhythm game based on Japanese taiko drums",
      skill: 70,
      achievements: ["Cleared Oni difficulty songs", "Collected 50+ songs", "Arcade regular"],
      image: "/placeholder.svg?height=200&width=200&text=Taiko",
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container py-12 space-y-8">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter">Rhythm Games</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            My passion for rhythm games, skills, achievements, and favorite titles.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">My Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {games.map((game) => (
              <Card key={game.name}>
                <CardHeader className="flex flex-row items-start gap-4">
                  <Image
                    src={game.image || "/placeholder.svg"}
                    alt={game.name}
                    width={80}
                    height={80}
                    className="rounded-md"
                  />
                  <div>
                    <CardTitle>{game.name}</CardTitle>
                    <CardDescription>{game.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Skill Level</span>
                        <span className="text-sm text-muted-foreground">{game.skill}%</span>
                      </div>
                      <Progress value={game.skill} className="h-2" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Achievements</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground">
                        {game.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">My Setup</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Hardware</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Custom DDR dance pad with metal panels</li>
                  <li>Oculus Quest 2 for VR rhythm games</li>
                  <li>Mechanical keyboard with red switches for osu!</li>
                  <li>High-quality headphones for precise timing</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Software & Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>StepMania for home DDR practice</li>
                  <li>osu! with custom skin and beatmaps</li>
                  <li>Beat Saber with mod assistant for custom songs</li>
                  <li>Arcade card for tracking scores at local arcades</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Zihao Xia. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
