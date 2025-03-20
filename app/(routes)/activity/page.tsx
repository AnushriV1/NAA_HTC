"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, ActivityIcon, Heart } from "lucide-react"
import { PageTransition } from "@/components/page-transition"

export default function ActivityPage() {
  return (
    <PageTransition>
      <div className="min-h-screen py-12">
        {/* Rest of the content remains the same */}
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold tracking-tighter">Activity Tracker</h1>
            <p className="text-muted-foreground mt-2 md:text-lg">
              Monitor your health metrics and get personalized recommendations
            </p>
          </div>

          <Tabs defaultValue="overview" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
              <TabsTrigger value="insights">Insights</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Weekly Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-center justify-center bg-muted rounded-md">
                      <p className="text-muted-foreground">Activity chart will be displayed here</p>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Sleep Schedule</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-2xl font-bold">7.5 hrs</p>
                          <p className="text-sm text-muted-foreground">Average sleep time</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Log Sleep
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Step Count</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-2xl font-bold">8,432</p>
                          <p className="text-sm text-muted-foreground">Steps today</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Sync Device
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Exercise Log</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-2xl font-bold">3 workouts</p>
                          <p className="text-sm text-muted-foreground">This week</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Add Exercise
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium mb-2">Sleep Insights</h3>
                    <p className="text-sm text-muted-foreground">Your sleep quality has improved by 15% this week.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <ActivityIcon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium mb-2">Activity Goal</h3>
                    <p className="text-sm text-muted-foreground">You're 2,000 steps away from your daily goal.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium mb-2">Workout Suggestion</h3>
                    <p className="text-sm text-muted-foreground">Try a 20-minute yoga session today.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="history">
              <Card>
                <CardHeader>
                  <CardTitle>Activity History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="flex items-center p-4 border rounded-lg">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                          {i % 3 === 0 && <Clock className="h-5 w-5 text-primary" />}
                          {i % 3 === 1 && <ActivityIcon className="h-5 w-5 text-primary" />}
                          {i % 3 === 2 && <Heart className="h-5 w-5 text-primary" />}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">
                            {i % 3 === 0 && "Sleep Recorded"}
                            {i % 3 === 1 && "Daily Steps"}
                            {i % 3 === 2 && "Workout Completed"}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {i % 3 === 0 && "8 hours of sleep"}
                            {i % 3 === 1 && "10,245 steps"}
                            {i % 3 === 2 && "30 min yoga session"}
                          </p>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {new Date(Date.now() - i * 86400000).toLocaleDateString()}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Load More
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="insights">
              <Card>
                <CardHeader>
                  <CardTitle>Health Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Sleep Analysis</h3>
                      <div className="h-[200px] bg-muted rounded-md flex items-center justify-center">
                        <p className="text-muted-foreground">Sleep pattern chart</p>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Your sleep quality has been improving. You're now averaging 7.5 hours of sleep per night, which
                        is within the recommended range.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Activity Trends</h3>
                      <div className="h-[200px] bg-muted rounded-md flex items-center justify-center">
                        <p className="text-muted-foreground">Activity trend chart</p>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Your activity level has increased by 20% in the last month. Keep up the good work to reach your
                        fitness goals.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-medium mb-4">Personalized Recommendations</h3>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-medium">Improve Sleep Quality</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Try to maintain a consistent sleep schedule by going to bed and waking up at the same time
                          every day.
                        </p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-medium">Increase Daily Activity</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Consider taking short walking breaks throughout your day to increase your step count.
                        </p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-medium">Try New Exercises</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Based on your activity patterns, you might enjoy yoga or pilates. These can help improve
                          flexibility and core strength.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </PageTransition>
  )
}

