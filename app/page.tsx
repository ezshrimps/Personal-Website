import { Navbar } from "@/components/navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import {
  Code,
  Camera,
  Gamepad2,
  RatIcon as Racquet,
  Medal,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 py-12 justify-center md:py-24 space-y-12">
        <section className="flex flex-col items-center text-center space-y-6">
          <Avatar className="h-32 w-32">
            <AvatarImage src="/ezshrimps.jpg" alt="Zihao Xia" />
            <AvatarFallback>ZX</AvatarFallback>
          </Avatar>
          <div className="space-y-2 text-center max-w-[700px]">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Zihao Xia
            </h1>
            <p className="text-muted-foreground md:text-xl">EzShrimps</p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
              <Code className="h-8 w-8" />
              <div>
                <CardTitle>Software Engineer</CardTitle>
                <CardDescription>
                  My academic journey and projects
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Exploring the world of programming, algorithms, and software
                development.
              </p>
              <Link
                href="/cs"
                className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
              >
                Learn more →
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
              <Camera className="h-8 w-8" />
              <div>
                <CardTitle>Photographer</CardTitle>
                <CardDescription>My photography portfolio</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Capturing moments and creating visual stories through my lens.
              </p>
              <Link
                href="/photography"
                className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
              >
                View gallery →
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
              <Gamepad2 className="h-8 w-8" />
              <div>
                <CardTitle>Rhythm Gamer</CardTitle>
                <CardDescription>My gaming experiences</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Tapping, sliding, and hitting to the beat in various rhythm
                games.
              </p>
              <Link
                href="/rhythm-games"
                className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
              >
                See my scores →
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
              <Medal className="h-8 w-8" />
              <div>
                <CardTitle>Pickleball Player</CardTitle>
                <CardDescription>My sports activities</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Enjoying the fast-paced, strategic game of pickleball on and off
                the court.
              </p>
              <Link
                href="/pickleball"
                className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
              >
                Discover more →
              </Link>
            </CardContent>
          </Card>
        </section>
      </div>
      <footer className="border-t py-6">
        <div className="w-full items-center justify-center text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Zihao Xia. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
