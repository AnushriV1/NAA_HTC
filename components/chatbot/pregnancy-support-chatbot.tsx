"use client"

import { useState } from "react"
import { BabyIcon } from "lucide-react"
import ChatbotModal from "./chatbot-modal"

interface PregnancySupportChatbotProps {
  buttonLabel?: string
  className?: string
}

export default function PregnancySupportChatbot({
  buttonLabel = "Chat Now",
  className = "",
}: PregnancySupportChatbotProps) {
  const [isOpen, setIsOpen] = useState(false)

  const generateResponse = async (message: string): Promise<string> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const lowercaseMessage = message.toLowerCase()

    // Pregnancy responses
    if (lowercaseMessage.includes("morning sickness") || lowercaseMessage.includes("nausea")) {
      return "Morning sickness is common during the first trimester. Try eating small, frequent meals, staying hydrated, and avoiding triggers like strong smells. Ginger tea or crackers before getting out of bed might help. If vomiting is severe, please consult your healthcare provider."
    } else if (
      lowercaseMessage.includes("nutrition") ||
      lowercaseMessage.includes("eat") ||
      lowercaseMessage.includes("food")
    ) {
      return "During pregnancy, focus on nutrient-dense foods like fruits, vegetables, whole grains, lean proteins, and dairy. Folate, iron, calcium, and DHA are particularly important. Remember to take your prenatal vitamins and stay well-hydrated. Would you like specific nutritional recommendations for your trimester?"
    } else if (lowercaseMessage.includes("exercise") || lowercaseMessage.includes("active")) {
      return "Moderate exercise during pregnancy is generally safe and beneficial. Walking, swimming, and prenatal yoga are excellent options. Always listen to your body and avoid activities with a high risk of falling or abdominal trauma. Be sure to consult with your healthcare provider before starting any exercise routine."
    } else if (lowercaseMessage.includes("trimester") || lowercaseMessage.includes("week")) {
      return "Pregnancy is divided into three trimesters, each about 13 weeks. The first trimester focuses on organ development, the second on growth and movement, and the third on weight gain and final development. Each week brings new developments for your baby. Would you like information about a specific trimester or week?"
    } else if (
      lowercaseMessage.includes("labor") ||
      lowercaseMessage.includes("birth") ||
      lowercaseMessage.includes("delivery")
    ) {
      return "Labor typically begins with regular contractions or water breaking. The three stages include: dilation and effacement of the cervix, pushing and delivery of the baby, and delivery of the placenta. Creating a birth plan and discussing it with your healthcare provider can help prepare for this experience."
    }

    // Default responses
    const defaultResponses = [
      "Thank you for sharing that. How far along are you in your pregnancy journey?",
      "I understand this is an important time. Is there anything specific about your pregnancy that concerns you?",
      "That's good to know. Would you like more information about prenatal care related to this topic?",
      "I'm here to support your pregnancy journey. What other questions do you have about this stage?",
      "I appreciate you sharing that. Every pregnancy is unique - how are you feeling about this aspect of your experience?",
    ]

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-200 ${className}`}
      >
        <BabyIcon className="h-4 w-4" />
        {buttonLabel}
      </button>

      <ChatbotModal
        open={isOpen}
        onOpenChange={setIsOpen}
        title="Pregnancy Support Assistant"
        icon={<BabyIcon className="h-5 w-5" />}
        accentColor="blue-500"
        initialMessage="Hello! I'm your Pregnancy Support Assistant powered by our specialized AI model. I can provide guidance on prenatal care, trimester development, nutrition, and common pregnancy concerns. How can I assist with your pregnancy journey today?"
        generateResponse={generateResponse}
      />
    </>
  )
}

