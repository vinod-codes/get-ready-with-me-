"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { createSupabaseBrowserClient } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [bio, setBio] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const supabase = createSupabaseBrowserClient()

  useEffect(() => {
    async function fetchUserProfile() {
      try {
        const { data: { session }, error: sessionError } = await supabase.auth.getSession()
        
        if (sessionError || !session) {
          router.push("/auth/login")
          return
        }

        setUser(session.user)
        setEmail(session.user.email || "")
        
        if (session.user.user_metadata?.name) {
          setName(session.user.user_metadata.name)
        }

        // Fetch profile data
        const { data: profileData, error: profileError } = await supabase
          .from("profiles")
          .select("*")
          .eq("user_id", session.user.id)
          .single()

        if (!profileError && profileData) {
          setProfile(profileData)
          setBio(profileData.bio || "")
        }
      } catch (error) {
        console.error("Error fetching user profile:", error)
        toast.error("Failed to load profile")
      }
    }

    fetchUserProfile()
  }, [router, supabase])

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) return

    setIsLoading(true)

    try {
      // Update user metadata
      const { error: userError } = await supabase.auth.updateUser({
        data: { name }
      })

      if (userError) {
        toast.error(userError.message)
        setIsLoading(false)
        return
      }

      // Update profile
      const { error: profileError } = await supabase
        .from("profiles")
        .update({
          bio,
          updated_at: new Date().toISOString()
        })
        .eq("user_id", user.id)

      if (profileError) {
        toast.error(profileError.message)
        setIsLoading(false)
        return
      }

      toast.success("Profile updated successfully")
    } catch (error) {
      console.error("Error updating profile:", error)
      toast.error("Failed to update profile")
    } finally {
      setIsLoading(false)
    }
  }

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut()
    
    if (error) {
      toast.error(error.message)
      return
    }
    
    router.push("/auth/login")
    router.refresh()
  }

  if (!user) {
    return <div className="container py-10">Loading profile...</div>
  }

  return (
    <div className="container py-10">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Your Profile</CardTitle>
        </CardHeader>
        <form onSubmit={handleUpdateProfile}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Your name" 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                value={email} 
                disabled 
                placeholder="Your email" 
              />
              <p className="text-sm text-muted-foreground">
                Email cannot be changed.
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea 
                id="bio" 
                value={bio} 
                onChange={(e) => setBio(e.target.value)} 
                placeholder="Tell us about yourself" 
                rows={4}
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button 
              type="submit" 
              className="w-full" 
              disabled={isLoading}
            >
              {isLoading ? "Updating..." : "Update Profile"}
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              className="w-full" 
              onClick={handleSignOut}
            >
              Sign Out
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

