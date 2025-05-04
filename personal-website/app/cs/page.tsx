import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function CSPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container py-12 space-y-8">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter">Computer Science</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            My journey in computer science, including education, skills, and projects.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Education</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Computer Science Degree</h3>
                  <p className="text-sm text-muted-foreground">University Name, 2020 - Present</p>
                </div>
                <p>
                  Studying algorithms, data structures, software engineering, and more. Currently maintaining a 3.8 GPA
                  with a focus on artificial intelligence and web development.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="flex flex-wrap gap-2">
            <Badge>Python</Badge>
            <Badge>JavaScript</Badge>
            <Badge>TypeScript</Badge>
            <Badge>React</Badge>
            <Badge>Next.js</Badge>
            <Badge>Node.js</Badge>
            <Badge>Java</Badge>
            <Badge>C++</Badge>
            <Badge>SQL</Badge>
            <Badge>Git</Badge>
            <Badge>Machine Learning</Badge>
            <Badge>Data Structures</Badge>
            <Badge>Algorithms</Badge>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Personal Website</CardTitle>
                <CardDescription>Next.js, TypeScript, Tailwind CSS</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">A responsive personal website showcasing my portfolio, skills, and interests.</p>
                <div className="flex gap-4">
                  <Link href="#" className="flex items-center gap-1 text-sm text-primary hover:underline">
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </Link>
                  <Link href="#" className="flex items-center gap-1 text-sm text-primary hover:underline">
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Machine Learning Project</CardTitle>
                <CardDescription>Python, TensorFlow, Scikit-learn</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  An image classification model trained on a custom dataset with over 90% accuracy.
                </p>
                <div className="flex gap-4">
                  <Link href="#" className="flex items-center gap-1 text-sm text-primary hover:underline">
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </Link>
                  <Link href="#" className="flex items-center gap-1 text-sm text-primary hover:underline">
                    <ExternalLink className="h-4 w-4" />
                    <span>Research Paper</span>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mobile App</CardTitle>
                <CardDescription>React Native, Firebase</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">A cross-platform mobile application for tracking daily habits and setting goals.</p>
                <div className="flex gap-4">
                  <Link href="#" className="flex items-center gap-1 text-sm text-primary hover:underline">
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </Link>
                  <Link href="#" className="flex items-center gap-1 text-sm text-primary hover:underline">
                    <ExternalLink className="h-4 w-4" />
                    <span>App Store</span>
                  </Link>
                </div>
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
