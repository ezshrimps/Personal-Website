import { Navbar } from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Trophy, Calendar, MapPin, Users } from "lucide-react";

export default function PickleballPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container px-4 md:px-6 py-12 max-w-5xl mx-auto space-y-8">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter">Pickleball</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            My journey in pickleball, tournaments, equipment, and favorite
            places to play.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>My Pickleball Journey</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                I started playing pickleball in 2024 winter after geting a
                paddle as a birthday gift from my friend Allan. What began as a
                casual after-school activity quickly turned into a passion.
              </p>
              <p>
                I've since participated in UCI Pickleball Club, improved my
                skills through regular practice with Taiki and other friends,
                and become part of a vibrant pickleball community.Hope to
                participated in more tournaments and get a 4.0 DUPR rating.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Trophy className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Skill Level</p>
                    <p className="text-sm text-muted-foreground">Unrated</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Playing Since</p>
                    <p className="text-sm text-muted-foreground">2024 Winter</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Home Court</p>
                    <p className="text-sm text-muted-foreground">
                      Anteater Recreation Center
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Preferred Format</p>
                    <p className="text-sm text-muted-foreground">
                      Singles/Doubles
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="equipment" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="equipment">Equipment</TabsTrigger>
            <TabsTrigger value="tournaments">Tournaments</TabsTrigger>
            <TabsTrigger value="locations">Favorite Locations</TabsTrigger>
          </TabsList>
          <TabsContent value="equipment" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Paddles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Image
                        src="/selkirk_air.jpg?height=100&width=100&text=Paddle"
                        alt="Paddle"
                        width={80}
                        height={80}
                        className="rounded-md"
                      />
                      <div>
                        <h3 className="font-medium">Selkirk Luxx Air Epic</h3>
                        <p className="text-sm text-muted-foreground">
                          My main paddle for competitive play
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Image
                        src="/selkirk_halo.png?height=100&width=100&text=Paddle+2"
                        alt="Paddle"
                        width={80}
                        height={80}
                        className="rounded-md"
                      />
                      <div>
                        <h3 className="font-medium">Selkirk Halo Power</h3>
                        <p className="text-sm text-muted-foreground">
                          Backup paddle with more powerful spin and drive
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Accessories</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Gamma pickleball grip tape</li>
                    <li>Fila court shoes with non-marking soles</li>
                    <li>Moisture-wicking athletic apparel</li>
                    <li>Dura Fast 40 outdoor pickleballs</li>
                    <li>Franklin X-40 indoor pickleballs</li>
                    <li>Specialized pickleball backpack</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="tournaments" className="mt-6">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Tournament History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">Null</h3>
                          <p className="text-sm text-muted-foreground">
                            June 2077
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">3rd Place</p>
                          <p className="text-sm text-muted-foreground">
                            Men's Doubles 4.0
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border-b pb-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">Regional Open</h3>
                          <p className="text-sm text-muted-foreground">
                            September 2022
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">Quarter-finalist</p>
                          <p className="text-sm text-muted-foreground">
                            Mixed Doubles 3.5
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">
                            Community Center Tournament
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            March 2022
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">1st Place</p>
                          <p className="text-sm text-muted-foreground">
                            Men's Singles 3.5
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="locations" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Outdoor Courts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium">
                        Anteater Recreation Center
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        4 dedicated courts, good lighting
                      </p>
                      <p className="text-sm">⭐⭐⭐⭐⭐</p>
                    </div>
                    <div>
                      <h3 className="font-medium">Bonita Canyon</h3>
                      <p className="text-sm text-muted-foreground">
                        4 courts, available weekends only
                      </p>
                      <p className="text-sm">⭐⭐⭐⭐</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Indoor Courts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium">Memorial Park</h3>
                      <p className="text-sm text-muted-foreground">
                        8 dedicated courts, great community
                      </p>
                      <p className="text-sm">⭐⭐⭐⭐⭐</p>
                    </div>
                    <div>
                      <h3 className="font-medium">Lakeside Courts</h3>
                      <p className="text-sm text-muted-foreground">
                        4 courts, beautiful scenery
                      </p>
                      <p className="text-sm">⭐⭐⭐⭐</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
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
