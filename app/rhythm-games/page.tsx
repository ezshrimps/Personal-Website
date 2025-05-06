import { Navbar } from "@/components/navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

export default function RhythmGamesPage() {
  const games = [
    {
      name: "Maimai DX",
      description:
        "a popular arcade rhythm game by Sega featuring tap, slide, and spin gameplay.",
      skill: 85,
      achievements: [
        "DX Rating 16087",
        "Top 50 U.S. Ranking",
        "Pink Version all SSS",
        "3000+ games played",
        "6th place in Kuma Cup",
      ],
      image: "/maimai.png?height=200&width=200&text=Maimai+DX",
    },
    {
      name: "Taiko no Tatsujin",
      description: "Drum rhythm game based on Japanese taiko drums",
      skill: 55,
      achievements: [
        "FC on multiple 8-stars Oni difficulty songs",
        "Cleared 100+ songs",
      ],
      image: "/taiko-icon.svg?height=200&width=200&text=Taiko",
    },
    {
      name: "osu!",
      description: "Rhythm game based on clicking circles to the beat",
      skill: 20,
      achievements: [
        "Top 10 Chinese ranking osu!laser taiko mode",
        "FC on multiple 4* maps",
        "50+ hours played",
      ],
      image: "/osu-icon.svg?height=200&width=200&text=osu!",
    },
    {
      name: "Arcaea",
      description: "New Dimension Rhythm Game",
      skill: 65,
      achievements: [
        "PTT 12.24",
        "PM+(rironji) on a level 8 song",
        "Achieve EX+ on multiple level 10+ songs",
      ],
      image: "arcaea-icon.png?height=200&width=200&text=Arcaea",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container px-4 md:px-6 py-12 max-w-5xl mx-auto space-y-8">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter">Rhythm Games</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            My passion for rhythm games, skills, achievements, and favorite
            titles.
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
                        <span className="text-sm text-muted-foreground">
                          {game.skill}%
                        </span>
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
