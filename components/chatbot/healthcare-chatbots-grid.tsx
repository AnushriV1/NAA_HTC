"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Brain, BabyIcon } from "lucide-react"
import { useMood } from "../mood-provider"
import GeneralHealthcareChatbot from "@/components/chatbot/general-healthcare-chatbot";
import MentalHealthChatbot from "@/components/chatbot/mental-health-chatbot";
import PregnancySupportChatbot from "@/components/chatbot/pregnancy-support-chatbot";

export default function HealthcareChatbotsGrid() {
  const { moodColors } = useMood()

  return (
    <div className={`${moodColors.background}`}>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 text-center">AI-Powered Chatbots</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Heart className="h-6 w-6 text-pink-500" />
                <CardTitle>General Healthcare</CardTitle>
              </div>
              <CardDescription>Powered by BioGPT</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Get answers to general health questions, symptom guidance, and wellness recommendations tailored to your
                needs.
              </p>
              <ul className="mt-4 space-y-1 text-sm">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-pink-500"></span>
                  <span>Nutrition and diet advice</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-pink-500"></span>
                  <span>Exercise recommendations</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-pink-500"></span>
                  <span>Common health concerns</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <GeneralHealthcareChatbot className="w-full" />
            </CardFooter>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Brain className="h-6 w-6 text-purple-500" />
                <CardTitle>Mental Health</CardTitle>
              </div>
              <CardDescription>Powered by RoBERTa</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Receive support for stress, anxiety, and mood management with our specialized mental health chatbot.
              </p>
              <ul className="mt-4 space-y-1 text-sm">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                  <span>Stress and anxiety management</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                  <span>Mindfulness techniques</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                  <span>Sleep improvement strategies</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <MentalHealthChatbot className="w-full" />
            </CardFooter>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <BabyIcon className="h-6 w-6 text-blue-500" />
                <CardTitle>Pregnancy Support</CardTitle>
              </div>
              <CardDescription>Dataset-driven AI model</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Get guidance through your pregnancy journey with week-by-week information and personalized advice.</p>
              <ul className="mt-4 space-y-1 text-sm">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                  <span>Trimester-specific guidance</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                  <span>Nutrition during pregnancy</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                  <span>Common pregnancy concerns</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <PregnancySupportChatbot className="w-full" />
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

