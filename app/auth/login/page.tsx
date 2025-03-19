"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Github, Mail, AlertCircle } from "lucide-react"
import { Logo } from "@/components/logo"
import { createSupabaseBrowserClient } from "@/lib/supabase"
import { toast } from "sonner"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const router = useRouter()
  const supabase = createSupabaseBrowserClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setErrorMessage("")

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        if (error.message.includes("Invalid login credentials")) {
          setErrorMessage("Incorrect email or password. Please try again.")
          toast.error("Incorrect email or password. Please try again.")
        } else if (error.message.includes("Email not confirmed")) {
          setErrorMessage("Please verify your email address before logging in.")
          toast.error("Please verify your email address before logging in.")
        } else if (error.message.includes("rate limit")) {
          setErrorMessage("Too many login attempts. Please try again later.")
          toast.error("Too many login attempts. Please try again later.")
        } else {
          setErrorMessage(error.message)
          toast.error(error.message)
        }
        setIsLoading(false)
        return
      }

      toast.success("Logged in successfully!")
      router.push("/dashboard")
      router.refresh()
    } catch (error) {
      console.error("Error during login:", error)
      setErrorMessage("An error occurred during login. Please try again later.")
      toast.error("An error occurred during login. Please try again later.")
      setIsLoading(false)
    }
  }

  const handleGithubLogin = async () => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "github",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      })

      if (error) {
        if (error.message.includes("rate limit")) {
          toast.error("Too many login attempts. Please try again later.")
        } else {
          toast.error(`GitHub login failed: ${error.message}`)
        }
        setIsLoading(false)
      }
    } catch (error) {
      console.error("Error during GitHub login:", error)
      toast.error("Failed to connect to GitHub. Please try again later.")
      setIsLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      })

      if (error) {
        if (error.message.includes("rate limit")) {
          toast.error("Too many login attempts. Please try again later.")
        } else {
          toast.error(`Google login failed: ${error.message}`)
        }
        setIsLoading(false)
      }
    } catch (error) {
      console.error("Error during Google login:", error)
      toast.error("Failed to connect to Google. Please try again later.")
      setIsLoading(false)
    }
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Logo className="mx-auto h-10 w-10" />
          <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
          <p className="text-sm text-muted-foreground">Enter your email to sign in to your account</p>
        </div>
        <Card>
          <form onSubmit={handleLogin}>
            <CardContent className="pt-6">
              <div className="grid gap-4">
                {errorMessage && (
                  <Alert variant="destructive" className="py-2">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{errorMessage}</AlertDescription>
                  </Alert>
                )}
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      href="/auth/reset-password"
                      className="text-sm text-primary underline-offset-4 hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </div>
            </CardContent>
          </form>
          <CardFooter className="flex flex-col">
            <div className="relative my-3 w-full">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" type="button" onClick={handleGithubLogin} disabled={isLoading}>
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button variant="outline" type="button" onClick={handleGoogleLogin} disabled={isLoading}>
                <Mail className="mr-2 h-4 w-4" />
                Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/auth/register" className="text-primary underline-offset-4 hover:underline">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

