"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BabyIcon } from "lucide-react"
import AIChatbot from "./ai-chatbot"

export default function PregnancySupportChatbot() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <Button variant="outline" className="flex items-center gap-2" onClick={() => setOpen(!open)}>
        <BabyIcon className="h-5 w-5 text-blue-500" />
        Pregnancy Support Chatbot
      </Button>
      {open && <AIChatbot chatbotType="pregnancy" chatbotTitle="Pregnancy Support Assistant" />}
    </div>
  )
}
