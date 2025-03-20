"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useMood } from "@/components/mood-provider"
import { Home, Music, Menu, User, Settings, LogOut } from "lucide-react"

// Update the navItems array to use proper routes instead of hash links
const navItems = [
  { name: "Home", href: "/home" },
  { name: "Services", href: "/services" },
  { name: "Journaling", href: "/journaling" },
  { name: "Activity", href: "/activity" },
  { name: "Contact Us", href: "/contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const { mood } = useMood()
  const [musicPlaying, setMusicPlaying] = useState(false)

  const toggleMusic = () => {
    setMusicPlaying(!musicPlaying)
    // Logic to play/pause music would go here
  }

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">H</span>
          </div>
          <Link href="/home" className="text-xl font-bold text-primary">
            HerNurtureAI
          </Link>
        </div>

        <div className="hidden md:flex flex-1 items-center justify-center">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors hover:text-primary relative ${
                  isActive(item.href) ? "text-primary" : "text-foreground/60"
                }`}
              >
                {item.name}
                {isActive(item.href) && <span className="absolute -bottom-[18px] left-0 right-0 h-[2px] bg-primary" />}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center justify-end space-x-4">
          <Button
            variant="ghost"
            size="icon"
            aria-label={musicPlaying ? "Pause music" : "Play music"}
            className={`rounded-full ${musicPlaying ? "text-primary" : ""}`}
            onClick={toggleMusic}
          >
            <Music className="h-5 w-5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Jane Doe</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/profile">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/settings">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium pt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-2 p-2 rounded-md ${
                      isActive(item.href) ? "text-primary bg-primary/10" : "text-foreground/60 hover:bg-secondary/50"
                    }`}
                  >
                    {item.name === "Home" && <Home className="h-5 w-5" />}
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

