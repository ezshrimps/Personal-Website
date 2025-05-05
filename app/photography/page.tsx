"use client";
import { Navbar } from "@/components/navbar"
import { Image } from '@imagekit/next'
import { CldImage } from 'next-cloudinary'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PhotographyPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container px-4 md:px-6 py-12 max-w-5xl mx-auto space-y-8">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter">Photography</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            A collection of my favorite photographs across different genres and styles.
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
              <div className="col-span-1 md:col-span-2 lg:col-span-3 overflow-hidden rounded-lg aspect-[16/9]">
              <CldImage
                src="https://res.cloudinary.com/dzy65b7jg/image/upload/w_2000,q_90,f_auto/v1746439209/lower-antelopte-canyon_rr9qey.jpg" // Use this sample image or upload your own via the Media Explorer
                alt="lower-entelope"
                width="600" // Transform the image: auto-crop to square aspect_ratio
                height="400"
                className="object-cover w-full h-full transition-transform hover:scale-105"
                crop={{
                  type: 'auto',
                  source: true
                }}
              />
              </div>
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="overflow-hidden rounded-lg aspect-[4/3]">
                  <Image
                    urlEndpoint = "https://ik.imagekit.io/ezshrimps/"
                    src={`/landscape_photo${i}.jpg?updatedAt=1746432309490.jpg`}
                    alt={`Landscape photo ${i}`}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="portrait" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="col-span-1 md:col-span-2 lg:col-span-3 overflow-hidden rounded-lg aspect-[16/9]">
                <Image
                  src="/placeholder.svg?height=600&width=1200&text=Featured+Portrait"
                  alt="Featured portrait photo"
                  width={1200}
                  height={600}
                  className="object-cover w-full h-full transition-transform hover:scale-105"
                />
              </div>
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="overflow-hidden rounded-lg aspect-[4/3]">
                  <Image
                    src={`/placeholder.svg?height=400&width=600&text=Portrait+${i}`}
                    alt={`Portrait photo ${i}`}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="street" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="col-span-1 md:col-span-2 lg:col-span-3 overflow-hidden rounded-lg aspect-[16/9]">
                <Image
                  src="/placeholder.svg?height=600&width=1200&text=Featured+Street"
                  alt="Featured street photo"
                  width={1200}
                  height={600}
                  className="object-cover w-full h-full transition-transform hover:scale-105"
                />
              </div>
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="overflow-hidden rounded-lg aspect-[4/3]">
                  <Image
                    src={`/placeholder.svg?height=400&width=600&text=Street+${i}`}
                    alt={`Street photo ${i}`}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="abstract" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="col-span-1 md:col-span-2 lg:col-span-3 overflow-hidden rounded-lg aspect-[16/9]">
                <Image
                  src="/placeholder.svg?height=600&width=1200&text=Featured+Abstract"
                  alt="Featured abstract photo"
                  width={1200}
                  height={600}
                  className="object-cover w-full h-full transition-transform hover:scale-105"
                />
              </div>
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="overflow-hidden rounded-lg aspect-[4/3]">
                  <Image
                    src={`/placeholder.svg?height=400&width=600&text=Abstract+${i}`}
                    alt={`Abstract photo ${i}`}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform hover:scale-105"
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
                <li>Sony Alpha a7R V</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Lenses</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Sony FE 24-70mm f/2.8 GM</li>
                <li>Sony FE 85mm f/1.8</li>
                <li>Tamron FE 28-200mm f/3.5-5.6</li>
              </ul>
            </div>
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
