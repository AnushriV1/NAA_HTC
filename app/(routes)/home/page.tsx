"use client"

import { useEffect } from "react"
import Link from "next/link"
import { MoodSelector } from "@/components/mood-selector"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Activity, Heart, Calendar } from "lucide-react"
import { PageTransition } from "@/components/page-transition"

export default function HomePage() {
  useEffect(() => {
    // Show mood selector on initial load
    // This would typically check if the user has already selected a mood for the session
  }, [])

  return (
    <PageTransition>
      <div className="min-h-screen">
        <MoodSelector />

        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">Welcome to HerNurtureAI</h1>
              <p className="text-muted-foreground md:text-xl max-w-[700px]">
                Your personalized AI-powered healthcare companion designed specifically for women's health needs.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mt-6">
                <Button asChild size="lg">
                  <Link href="/services">Explore Services</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/activity">View Activity</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Overview */}
        <section className="py-12 md:py-20 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter">Our Platform</h2>
              <p className="text-muted-foreground mt-2 md:text-lg">Discover the key features of HerNurtureAI</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="transition-all hover:shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium mb-2">AI Chatbots</h3>
                  <p className="text-sm text-muted-foreground">
                    Get personalized healthcare support through our specialized AI assistants.
                  </p>
                  <Button asChild variant="link" className="mt-4">
                    <Link href="/services">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium mb-2">Journaling</h3>
                  <p className="text-sm text-muted-foreground">
                    Write messages to your future self and track your personal growth.
                  </p>
                  <Button asChild variant="link" className="mt-4">
                    <Link href="/journaling">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Activity className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium mb-2">Activity Tracking</h3>
                  <p className="text-sm text-muted-foreground">
                    Monitor your sleep, steps, and exercises to improve your health.
                  </p>
                  <Button asChild variant="link" className="mt-4">
                    <Link href="/activity">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium mb-2">Personalized Care</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive recommendations tailored to your unique health profile.
                  </p>
                  <Button asChild variant="link" className="mt-4">
                    <Link href="/services">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Us Preview */}
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">About Us</h2>
                <p className="text-muted-foreground">
                  HerNurtureAI was created with a mission to provide personalized healthcare support for women through
                  innovative AI technology.
                </p>
                <p className="text-muted-foreground">
                  Our platform combines cutting-edge AI models with a deep understanding of women's health to offer
                  tools that adapt to your needs.
                </p>
                <Button asChild variant="outline">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Women's healthcare professionals"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 md:py-20 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Ready to Get Started?</h2>
              <p className="text-muted-foreground md:text-lg max-w-[700px]">
                Explore our services and take the first step towards personalized healthcare.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mt-6">
                <Button asChild size="lg">
                  <Link href="/services">Explore Services</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}

