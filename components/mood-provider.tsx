"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

type MoodType = "stress" | "happy" | "motivated" | "calm" | null

interface MoodContextType {
  mood: MoodType
  setMood: (mood: MoodType) => void
}

const MoodContext = createContext<MoodContextType | undefined>(undefined)

export function MoodProvider({ children }: { children: React.ReactNode }) {
  const [mood, setMood] = useState<MoodType>(null)

  useEffect(() => {
    // Apply theme class to body
    if (mood) {
      document.body.classList.remove("theme-stress", "theme-happy", "theme-motivated", "theme-calm")
      document.body.classList.add(`theme-${mood}`)
    } else {
      document.body.classList.remove("theme-stress", "theme-happy", "theme-motivated", "theme-calm")
    }
  }, [mood])

  return <MoodContext.Provider value={{ mood, setMood }}>{children}</MoodContext.Provider>
}

export function useMood() {
  const context = useContext(MoodContext)
  if (context === undefined) {
    throw new Error("useMood must be used within a MoodProvider")
  }
  return context
}

