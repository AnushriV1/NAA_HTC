"use client"

import { useState } from "react"
import { Brain } from "lucide-react"
import ChatbotModal from "./chatbot-modal"

interface MentalHealthChatbotProps {
  buttonLabel?: string
  className?: string
}

export default function MentalHealthChatbot({ buttonLabel = "Chat Now", className = "" }: MentalHealthChatbotProps) {
  const [isOpen, setIsOpen] = useState(false)

  const generateResponse = async (message: string): Promise<string> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const lowercaseMessage = message.toLowerCase()

    // Mental health responses
    if (
      lowercaseMessage.includes("stress") ||
      lowercaseMessage.includes("anxious") ||
      lowercaseMessage.includes("anxiety")
    ) {
      return "I'm sorry to hear you're feeling stressed. Deep breathing exercises, mindfulness meditation, and regular physical activity can help manage anxiety. Consider setting aside time each day for self-care activities you enjoy. Would you like to learn some specific relaxation techniques?"
    } else if (
      lowercaseMessage.includes("sad") ||
      lowercaseMessage.includes("depress") ||
      lowercaseMessage.includes("down")
    ) {
      return "I'm here for you. Feeling down occasionally is normal, but persistent sadness may require attention. Try to maintain social connections, engage in activities you enjoy, and establish a regular sleep schedule. If these feelings persist, please consider speaking with a mental health professional."
    } else if (lowercaseMessage.includes("sleep") || lowercaseMessage.includes("insomnia")) {
      return "Quality sleep is crucial for mental health. Try establishing a consistent sleep schedule, creating a relaxing bedtime routine, and limiting screen time before bed. Avoiding caffeine and alcohol close to bedtime can also help improve sleep quality."
    } else if (lowercaseMessage.includes("meditat") || lowercaseMessage.includes("mindful")) {
      return "Meditation and mindfulness are powerful tools for mental wellbeing. Start with just 5 minutes daily of focused breathing. Apps like Headspace or Calm can guide you. Regular practice can reduce stress, improve focus, and enhance emotional regulation."
    } else if (
      lowercaseMessage.includes("therapy") ||
      lowercaseMessage.includes("therapist") ||
      lowercaseMessage.includes("counseling")
    ) {
      return "Therapy can be incredibly beneficial for mental health. Different approaches include cognitive-behavioral therapy (CBT), mindfulness-based therapy, and psychodynamic therapy. Finding the right therapist is important - it's okay to try different professionals until you find a good fit."
    }

    // Default responses
    const defaultResponses = [
      "Thank you for sharing that with me. How are you feeling about this situation?",
      "I understand this might be difficult to talk about. Would you like to explore some coping strategies together?",
      "Your mental wellbeing is important. Could you tell me more about what you're experiencing?",
      "I'm here to support you. What other aspects of this are affecting your mental health?",
      "I appreciate your openness. Would it help to discuss some self-care practices that might address this?",
    ]

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`flex items-center justify-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md transition-colors duration-200 ${className}`}
      >
        <Brain className="h-4 w-4" />
        {buttonLabel}
      </button>

      <ChatbotModal
        open={isOpen}
        onOpenChange={setIsOpen}
        title="Mental Health Assistant"
        icon={<Brain className="h-5 w-5" />}
        accentColor="purple-500"
        initialMessage="Hi there! I'm your Mental Health Assistant powered by RoBERTa. I'm here to provide support for stress, anxiety, mood management, and other mental health concerns. How are you feeling today?"
        generateResponse={generateResponse}
      />
    </>
  )
}

