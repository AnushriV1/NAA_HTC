"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "lucide-react"
import { PageTransition } from "@/components/page-transition"

export default function JournalingPage() {
  return (
    <PageTransition>
      <div className="min-h-screen py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold tracking-tighter">Dear Future Me...</h1>
            <p className="text-muted-foreground mt-2 md:text-lg">
              Write messages to your future self and reflect on your journey
            </p>
          </div>

          <Card className="max-w-3xl mx-auto">
            <CardContent className="pt-6">
              <Tabs defaultValue="write">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="write">Write a Journal</TabsTrigger>
                  <TabsTrigger value="schedule">Schedule Delivery</TabsTrigger>
                </TabsList>
                <TabsContent value="write" className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Input placeholder="Journal Title" />
                  </div>
                  <div className="space-y-2">
                    <Textarea placeholder="Dear Future Me..." className="min-h-[200px]" />
                  </div>
                </TabsContent>
                <TabsContent value="schedule" className="space-y-4 pt-4">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Delivery Date</label>
                      <div className="flex gap-2">
                        <Input type="date" className="flex-1" />
                        <Button>
                          <Calendar className="h-4 w-4 mr-2" />
                          Select
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Delivery Method</label>
                      <div className="grid grid-cols-2 gap-2">
                        <Button variant="outline">Email</Button>
                        <Button variant="outline">App Notification</Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              <div className="flex justify-end mt-6">
                <Button>Save Journal</Button>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>My Journal Entries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((entry) => (
                    <div key={entry} className="p-4 border rounded-lg hover:bg-secondary/50 cursor-pointer">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">Journal Entry #{entry}</h3>
                        <span className="text-sm text-muted-foreground">
                          {new Date(Date.now() - entry * 86400000).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        This is a preview of your journal entry. Click to read more...
                      </p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Entries
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

