"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type MoodType = "stress" | "happy" | "motivated" | "calm" | null

interface MoodContextType {
  mood: MoodType
  setMood: (mood: MoodType) => void
  moodColors: { background: string } // Add moodColors
}

const MoodContext = createContext<MoodContextType | undefined>(undefined)

export function MoodProvider({ children }: { children: React.ReactNode }) {
  const [mood, setMood] = useState<MoodType>(null)

  const moodColors = {
    stress: { background: "bg-red-500" },
    happy: { background: "bg-yellow-400" },
    motivated: { background: "bg-blue-500" },
    calm: { background: "bg-green-400" },
    null: { background: "bg-gray-100" }, // Default color
  }

  useEffect(() => {
    // Apply theme class to body
    document.body.classList.remove("theme-stress", "theme-happy", "theme-motivated", "theme-calm")
    if (mood) {
      document.body.classList.add(`theme-${mood}`)
    }
  }, [mood])

  return (
    <MoodContext.Provider value={{ mood, setMood, moodColors: moodColors[mood || "null"] }}>
      {children}
    </MoodContext.Provider>
  )
}

export function useMood() {
  const context = useContext(MoodContext)
  if (context === undefined) {
    throw new Error("useMood must be used within a MoodProvider")
  }
  return context
}
