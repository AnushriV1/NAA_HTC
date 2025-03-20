"use client"

import { useState } from "react"
import { useMood } from "@/components/mood-provider"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Smile, Heart, Zap, Coffee } from "lucide-react"

export function MoodSelector() {
  const [open, setOpen] = useState(true)
  const { setMood } = useMood()

  const handleMoodSelect = (mood: "stress" | "happy" | "motivated" | "calm") => {
    setMood(mood)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">How are you feeling today?</DialogTitle>
          <DialogDescription className="text-center">
            We'll personalize your experience based on your mood.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          <Button
            variant="outline"
            className="flex flex-col items-center gap-2 h-auto py-6 hover:bg-pink-50 hover:text-pink-600 hover:border-pink-200"
            onClick={() => handleMoodSelect("stress")}
          >
            <Heart className="h-8 w-8 text-pink-500" />
            <span>Stress</span>
          </Button>
          <Button
            variant="outline"
            className="flex flex-col items-center gap-2 h-auto py-6 hover:bg-yellow-50 hover:text-yellow-600 hover:border-yellow-200"
            onClick={() => handleMoodSelect("happy")}
          >
            <Smile className="h-8 w-8 text-yellow-500" />
            <span>Happy</span>
          </Button>
          <Button
            variant="outline"
            className="flex flex-col items-center gap-2 h-auto py-6 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200"
            onClick={() => handleMoodSelect("motivated")}
          >
            <Zap className="h-8 w-8 text-orange-500" />
            <span>Motivated</span>
          </Button>
          <Button
            variant="outline"
            className="flex flex-col items-center gap-2 h-auto py-6 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200"
            onClick={() => handleMoodSelect("calm")}
          >
            <Coffee className="h-8 w-8 text-blue-500" />
            <span>Calm</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

