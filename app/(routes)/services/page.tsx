"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, Brain, Baby, Clock, Activity, Heart } from "lucide-react"
import { PageTransition } from "@/components/page-transition"

export default function ServicesPage() {
  return (
    <PageTransition>
      <div className="min-h-screen py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold tracking-tighter">Our Services</h1>
            <p className="text-muted-foreground mt-2 md:text-lg">
              AI-powered tools designed specifically for women's healthcare needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* General Healthcare Chatbot */}
            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>General Healthcare</CardTitle>
                  <CardDescription>Powered by BioGPT</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get answers to your general health questions from our AI assistant trained on medical literature.
                </p>
                <Button className="w-full mt-4">Chat Now</Button>
              </CardContent>
            </Card>

            {/* Mental Health Chatbot */}
            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Mental Health</CardTitle>
                  <CardDescription>Powered by RoBERTa</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Discuss your mental health concerns and receive supportive guidance and resources.
                </p>
                <Button className="w-full mt-4">Chat Now</Button>
              </CardContent>
            </Card>

            {/* Pregnancy Support Chatbot */}
            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Baby className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Pregnancy Support</CardTitle>
                  <CardDescription>Dataset-driven AI model</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get guidance throughout your pregnancy journey with personalized advice and tracking.
                </p>
                <Button className="w-full mt-4">Chat Now</Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Activity Tracker</CardTitle>
                <CardDescription>
                  Monitor your sleep, steps, and exercises to improve your overall health
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 p-4 border rounded-lg">
                    <Clock className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-medium">Sleep Schedule</h3>
                      <p className="text-sm text-muted-foreground">Track your sleep patterns</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 border rounded-lg">
                    <Activity className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-medium">Step Count</h3>
                      <p className="text-sm text-muted-foreground">Monitor your daily activity</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 border rounded-lg">
                    <Heart className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-medium">Exercise Log</h3>
                      <p className="text-sm text-muted-foreground">Record and get recommendations</p>
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-6">View Activity Dashboard</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

