"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Avatar } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, X, Loader2 } from "lucide-react"
import { useMood } from "../mood-provider"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}

interface ChatbotModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  icon: React.ReactNode
  accentColor: string
  initialMessage: string
  generateResponse: (message: string) => Promise<string>
}

export default function ChatbotModal({
  open,
  onOpenChange,
  title,
  icon,
  accentColor,
  initialMessage,
  generateResponse,
}: ChatbotModalProps) {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { moodColors } = useMood()

  // Add initial message when the component mounts
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        {
          id: "welcome",
          content: initialMessage,
          role: "assistant",
          timestamp: new Date(),
        },
      ])
    }

    // Focus the input field when the chatbot opens
    if (open && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }, [open, initialMessage, messages.length])

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await generateResponse(input)

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: "assistant",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Error generating response:", error)

      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm sorry, I encountered an error. Please try again later.",
        role: "assistant",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
            className={cn(
            "sm:max-w-[425px] md:max-w-[500px] p-0 overflow-hidden border-2 bg-white text-black", 
            `border-${accentColor}`
        )}
      >
        <DialogHeader className={cn("p-4 flex flex-row items-center justify-between", `bg-${accentColor}`)}>
  <div className="flex items-center gap-2">
    <Avatar className={cn("h-8 w-8 bg-white flex items-center justify-center text-lg", `text-${accentColor}`)}>
      {icon}
    </Avatar>
    <DialogTitle className="text-white">{title}</DialogTitle>
  </div>
</DialogHeader>

        <div className="flex flex-col h-[60vh] max-h-[500px]">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className="flex items-start gap-2 max-w-[80%]">
                    {message.role === "assistant" && (
                      <Avatar className={cn("h-8 w-8 mt-1", `bg-${accentColor}`)}>{icon}</Avatar>
                    )}
                    <div
                      className={`p-3 rounded-lg ${
                        message.role === "user" ? `bg-${accentColor} text-white` : "bg-muted"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                    {message.role === "user" && (
                      <Avatar className={cn("h-8 w-8 mt-1", `bg-${accentColor}/20`)}>
                        <span className="text-xs font-bold">You</span>
                      </Avatar>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-start gap-2 max-w-[80%]">
                    <Avatar className={cn("h-8 w-8 mt-1", `bg-${accentColor}`)}>{icon}</Avatar>
                    <div className="p-3 rounded-lg bg-muted">
                      <div className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <p className="text-sm">Typing...</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          <div className={cn("p-4 border-t", moodColors.primary)}>
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="bg-background"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!input.trim() || isLoading}
                className={cn(`bg-${accentColor} hover:bg-${accentColor}/90 text-white`)}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              This is a simulated AI assistant for demonstration purposes.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

