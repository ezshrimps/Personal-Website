import { Navbar } from "@/components/navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function CSPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container px-4 md:px-6 py-12 max-w-5xl mx-auto space-y-8">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter">
            Computer Science
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            My journey in computer science, including education, skills, and
            projects.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Education</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">B.S. in Computer Science</h3>
                  <p className="text-sm text-muted-foreground">
                    University of California, Irvine 2022 - 2026
                  </p>
                </div>
                <p>
                  Studying algorithms, data structures, software engineering,
                  and more. Currently maintaining a 3.76 GPA with a focus on
                  artificial intelligence and visual computing.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Work Experience</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">ICS Learning Assistant</h3>
                  <p className="text-sm text-muted-foreground">
                    Donald Bren School of Information and Computer Science,
                    January 2024 - June 2024
                  </p>
                </div>
                <p>
                  Guided over 30 students through Python concepts, helping them
                  build a solid foundation and progress from basic to advanced
                  problem-solving.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Python</Badge>
                <Badge>C/C++</Badge>
                <Badge>JavaScript</Badge>
                <Badge>TypeScript</Badge>
                <Badge>Java</Badge>
                <Badge>SQL</Badge>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-medium">Web Development</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>React</Badge>
                <Badge>Next.js</Badge>
                <Badge>Node.js</Badge>
                <Badge>HTML/CSS</Badge>
                <Badge>Tailwind CSS</Badge>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-medium">Machine Learning & AI</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>TensorFlow</Badge>
                <Badge>Scikit-Learn</Badge>
                <Badge>PyTorch</Badge>
                <Badge>NumPy</Badge>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-medium">Visual Computing</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>OpenCV</Badge>
                <Badge>Image Processing</Badge>
                <Badge>3D Modeling</Badge>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-medium">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Git</Badge>
                <Badge>Docker</Badge>
                <Badge>AWS</Badge>
                <Badge>Linux</Badge>
                <Badge>Notion</Badge>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Maimai Wordle</CardTitle>
                <CardDescription>
                  Next.js, Typescript, Tailwind CSS
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  A song guessing game that has over 2000 visits.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/yukineko2233/v0-maimai-wordle"
                    className="flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </Link>
                  <Link
                    href="https://maimai.yukineko2233.top/"
                    className="flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Try it online</span>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Zot Fitness</CardTitle>
                <CardDescription>React, DynamoDB, Gemini API</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  A health tracker WebApp for fitness enthusiasts.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/jeremyunoz/ZotFitness"
                    className="flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Personal Website</CardTitle>
                <CardDescription>
                  Next.js, ImageKit, Lucide-React
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  A responsive personal website showcasing my portfolio, skills,
                  and interests.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/ezshrimps/Personal-Website"
                    className="flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </Link>
                  <Link
                    href="https://ezshrimps.com"
                    className="flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </Link>
                </div>
              </CardContent>
            </Card>
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
