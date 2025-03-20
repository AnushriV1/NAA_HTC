"use client"

import Link from "next/link"
import { useMood } from "@/components/mood-provider"
import { Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import HealthcareChatbotsGrid from "@/components/chatbot/healthcare-chatbots-grid"

export default function ServicesPage() {
  const { moodColors } = useMood()

  return (
    <div className={`min-h-screen ${moodColors.background}`}>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-lg">
            Explore our range of AI-powered tools designed to support your health and wellbeing journey.
          </p>
        </div>

        <section className="mb-16">
          <HealthcareChatbotsGrid />
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Activity Tracker</h2>
              <p className="mb-4">
                Our comprehensive activity tracker helps you monitor your physical health and wellness metrics in one
                place.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-green-500" />
                  <span>Sleep schedule monitoring</span>
                </li>
                <li className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-green-500" />
                  <span>Step count tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-green-500" />
                  <span>Exercise logging & recommendations</span>
                </li>
                <li className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-green-500" />
                  <span>Personalized health insights</span>
                </li>
              </ul>
              <Button asChild className={moodColors.accent}>
                <Link href="/activity">Track Your Activity</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Activity tracking dashboard"
                className="rounded-lg shadow-lg"
                width={400}
                height={300}
              />
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Journaling interface"
                className="rounded-lg shadow-lg"
                width={400}
                height={300}
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-4">Journaling</h2>
              <p className="mb-4">
                Express yourself and track your emotional wellbeing with our journaling tool. Write messages to your
                future self and set reminders for reflection.
              </p>
              <p className="mb-6">
                Journaling has been shown to reduce stress, improve mood, and enhance self-awareness. Our tool makes it
                easy to incorporate this beneficial practice into your daily routine.
              </p>
              <Button asChild className={moodColors.accent}>
                <Link href="/journaling">Start Journaling</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

