"use client"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="rounded-full">
        <div className="h-5 w-5" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full relative overflow-hidden">
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={false}
            animate={{
              rotateY: theme === "dark" ? 180 : 0,
              opacity: theme === "dark" ? 0 : 1,
            }}
            transition={{ duration: 0.5 }}
          >
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          </motion.div>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={false}
            animate={{
              rotateY: theme === "dark" ? 0 : -180,
              opacity: theme === "dark" ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            <Moon className="h-[1.2rem] w-[1.2rem]" />
          </motion.div>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="rounded-xl shadow-lg border-border/50 backdrop-blur-sm">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="flex items-center gap-2 cursor-pointer rounded-lg"
        >
          <Sun className="h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="flex items-center gap-2 cursor-pointer rounded-lg"
        >
          <Moon className="h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="flex items-center gap-2 cursor-pointer rounded-lg"
        >
          <Monitor className="h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

