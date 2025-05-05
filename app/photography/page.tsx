import { Navbar } from "@/components/navbar";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PhotographyPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container px-4 md:px-6 py-12 max-w-5xl mx-auto space-y-8">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter">Photography</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            A collection of my favorite photographs across different genres and
            styles.
          </p>
        </section>

        <Tabs defaultValue="landscape" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="landscape">Landscape</TabsTrigger>
            <TabsTrigger value="portrait">Portrait</TabsTrigger>
            <TabsTrigger value="street">Street</TabsTrigger>
            <TabsTrigger value="abstract">Abstract</TabsTrigger>
          </TabsList>
          <TabsContent value="landscape" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=400&width=600&text=Landscape+${i}`}
                    alt={`Landscape photo ${i}`}
                    width={600}
                    height={400}
                    className="object-cover w-full h-64 transition-transform hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="portrait" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=400&width=600&text=Portrait+${i}`}
                    alt={`Portrait photo ${i}`}
                    width={600}
                    height={400}
                    className="object-cover w-full h-64 transition-transform hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="street" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=400&width=600&text=Street+${i}`}
                    alt={`Street photo ${i}`}
                    width={600}
                    height={400}
                    className="object-cover w-full h-64 transition-transform hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="abstract" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=400&width=600&text=Abstract+${i}`}
                    alt={`Abstract photo ${i}`}
                    width={600}
                    height={400}
                    className="object-cover w-full h-64 transition-transform hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Equipment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-medium">Cameras</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Sony Alpha a7 III</li>
                <li>Canon EOS 5D Mark IV</li>
                <li>Fujifilm X-T4</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Lenses</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Sony FE 24-70mm f/2.8 GM</li>
                <li>Canon EF 50mm f/1.4 USM</li>
                <li>Fujifilm XF 16-55mm f/2.8 R LM WR</li>
                <li>Sony FE 85mm f/1.8</li>
              </ul>
            </div>
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
