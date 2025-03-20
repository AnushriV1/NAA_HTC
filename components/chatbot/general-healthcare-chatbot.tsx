"use client"

import { useState } from "react"
import { Heart } from "lucide-react"
import ChatbotModal from "./chatbot-modal"

interface GeneralHealthcareChatbotProps {
  buttonLabel?: string
  className?: string
}

export default function GeneralHealthcareChatbot({
  buttonLabel = "Chat Now",
  className = "",
}: GeneralHealthcareChatbotProps) {
  const [isOpen, setIsOpen] = useState(false)

  const generateResponse = async (message: string): Promise<string> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const lowercaseMessage = message.toLowerCase()

    // General healthcare responses
    if (lowercaseMessage.includes("headache") || lowercaseMessage.includes("pain")) {
      return "Headaches can be caused by various factors including stress, dehydration, or lack of sleep. If you're experiencing frequent headaches, I recommend staying hydrated, getting adequate rest, and considering over-the-counter pain relievers. If symptoms persist, please consult with a healthcare professional."
    } else if (
      lowercaseMessage.includes("diet") ||
      lowercaseMessage.includes("nutrition") ||
      lowercaseMessage.includes("eat")
    ) {
      return "A balanced diet is essential for women's health. Focus on incorporating plenty of fruits, vegetables, whole grains, lean proteins, and healthy fats. Adequate calcium and iron are particularly important for women. Would you like some specific dietary recommendations?"
    } else if (lowercaseMessage.includes("exercise") || lowercaseMessage.includes("workout")) {
      return "Regular exercise is beneficial for both physical and mental health. Aim for at least 150 minutes of moderate activity per week, including both cardio and strength training. Activities like walking, swimming, and yoga are excellent options. Would you like some exercise suggestions tailored to your needs?"
    } else if (lowercaseMessage.includes("vitamin") || lowercaseMessage.includes("supplement")) {
      return "Common supplements for women include vitamin D, calcium, iron, and folate. However, it's best to get nutrients from food when possible. Before starting any supplement, consult with a healthcare provider to determine what's appropriate for your specific needs."
    } else if (lowercaseMessage.includes("period") || lowercaseMessage.includes("menstrual")) {
      return "Menstrual cycles typically range from 21-35 days, with periods lasting 2-7 days. Irregular periods can be caused by stress, weight changes, or hormonal imbalances. If you're experiencing severe pain, very heavy bleeding, or significant irregularity, it's advisable to consult with a healthcare provider."
    }

    // Default responses
    const defaultResponses = [
      "Thank you for sharing that with me. How can I help you further with this health concern?",
      "I understand. Could you tell me more about what you're experiencing so I can provide better guidance?",
      "That's important information. Is there anything specific you'd like to know about this health topic?",
      "I'm here to support your healthcare journey. What other questions do you have?",
      "I appreciate you sharing that. Let me know if you'd like more detailed information on this subject.",
    ]

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md transition-colors duration-200 ${className}`}
      >
        <Heart className="h-4 w-4" />
        {buttonLabel}
      </button>

      <ChatbotModal
        open={isOpen}
        onOpenChange={setIsOpen}
        title="General Healthcare Assistant"
        icon={<Heart className="h-5 w-5" />}
        accentColor="pink-500"
        initialMessage="Hello! I'm your General Healthcare Assistant powered by BioGPT. I can answer questions about nutrition, exercise, common health concerns, and preventive care. How can I help you today?"
        generateResponse={generateResponse}
      />
    </>
  )
}

