"use client"

import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  BookOpen,
  FileText,
  MessageSquare,
  Home,
  Menu,
  X,
  Users,
  Settings,
  Code,
  Laptop,
  GraduationCap,
  Search,
  Bell,
  HelpCircle,
  ChevronDown,
  LogOut,
} from "lucide-react"
import { Logo } from "./logo"
import { ThemeToggle } from "./theme-toggle"
import { motion, AnimatePresence } from "framer-motion"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { createSupabaseBrowserClient } from "@/lib/supabase"
import { toast } from "sonner"

interface NavItemProps {
  href: string
  icon: React.ReactNode
  text: string
  isActive: boolean
  onClick?: () => void
  badge?: string | number
}

const NavItem = ({ href, icon, text, isActive, onClick, badge }: NavItemProps) => (
  <Link
    href={href}
    className={cn(
      "flex items-center gap-2 px-4 py-2.5 rounded-full text-sm transition-all duration-300 relative",
      isActive
        ? "bg-primary/10 text-primary font-medium"
        : "text-muted-foreground hover:text-foreground hover:bg-muted",
    )}
    onClick={onClick}
  >
    {icon}
    <span>{text}</span>
    {badge && (
      <Badge variant="secondary" className="ml-auto text-xs py-0.5 px-2 rounded-full">
        {badge}
      </Badge>
    )}
    {isActive && (
      <motion.div
        className="absolute inset-0 rounded-full border border-primary/20"
        layoutId="nav-highlight"
        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
      />
    )}
  </Link>
)

export function Navbar() {
  console.log("Navbar component initializing")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createSupabaseBrowserClient()

  useEffect(() => {
    async function getUser() {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        setUser(session?.user || null)
        setIsLoading(false)
      } catch (error) {
        console.error('Error getting session:', error)
        setIsLoading(false)
      }
    }
    
    getUser()
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null)
    })
    
    return () => subscription.unsubscribe()
  }, [supabase])

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      
      if (error) {
        console.error('Error signing out:', error)
        toast.error("Failed to sign out")
        return
      }
      
      toast.success("Signed out successfully")
      
      // Force navigation to homepage without relying on middleware
      window.location.href = "/"
    } catch (error) {
      console.error('Error signing out:', error)
      toast.error("Failed to sign out")
    }
  }

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)
  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const mainNavItems = [
    { href: "/", icon: <Home className="h-4 w-4" />, text: "Home" },
  ]

  if (user) {
    mainNavItems.push({ href: "/dashboard", icon: <Laptop className="h-4 w-4" />, text: "Dashboard" })
  }

  const studyNavItems = [
    { href: "/learning-paths", icon: <BookOpen className="h-4 w-4" />, text: "Learning Paths", badge: "New" },
    { href: "/coding-fundamentals", icon: <Code className="h-4 w-4" />, text: "Coding Fundamentals" },
    { href: "/data-structures-algorithms", icon: <GraduationCap className="h-4 w-4" />, text: "DSA Prep" },
  ]

  const careerNavItems = [
    { href: "/job-applications", icon: <FileText className="h-4 w-4" />, text: "Job Applications" },
    { href: "/resume-builder", icon: <FileText className="h-4 w-4" />, text: "Resume Builder" },
    { href: "/interview-prep", icon: <MessageSquare className="h-4 w-4" />, text: "Interview Prep" },
  ]

  const communityNavItems = [
    { href: "/community", icon: <Users className="h-4 w-4" />, text: "Community", badge: 5 },
    { href: "/profile", icon: <Settings className="h-4 w-4" />, text: "Profile" },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md border-b shadow-sm" : "bg-background",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <Logo size="small" className="text-primary" />
            <span className="text-lg font-semibold tracking-tight">Get Ready with Me</span>
          </Link>
        </div>

        {/* Search Bar - Only show when user is logged in */}
        {user && (
          <div
            className={cn(
              "absolute left-1/2 -translate-x-1/2 w-full max-w-md px-4 transition-all duration-300",
              searchOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none",
              "md:opacity-100 md:scale-100 md:pointer-events-auto md:static md:translate-x-0",
            )}
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search courses, resources, or topics..."
                className="pl-10 pr-4 h-10 rounded-full bg-muted/50 border-muted focus:bg-background"
              />
            </div>
          </div>
        )}

        {/* Desktop Navigation - Only shown when logged in */}
        {user && (
          <div className="hidden lg:flex items-center gap-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="rounded-full px-4">
                  Study <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 rounded-xl p-2">
                <DropdownMenuLabel>Learning Resources</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  {studyNavItems.map((item) => (
                    <DropdownMenuItem key={item.href} asChild>
                      <Link href={item.href} className="flex items-center gap-2 cursor-pointer rounded-lg">
                        {item.icon}
                        <span>{item.text}</span>
                        {item.badge && (
                          <Badge variant="secondary" className="ml-auto text-xs py-0.5 px-2 rounded-full">
                            {item.badge}
                          </Badge>
                        )}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="rounded-full px-4">
                  Career <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 rounded-xl p-2">
                <DropdownMenuLabel>Career Tools</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  {careerNavItems.map((item) => (
                    <DropdownMenuItem key={item.href} asChild>
                      <Link href={item.href} className="flex items-center gap-2 cursor-pointer rounded-lg">
                        {item.icon}
                        <span>{item.text}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <NavItem
              href="/community"
              icon={<Users className="h-4 w-4" />}
              text="Community"
              isActive={pathname === "/community"}
              badge={5}
            />
          </div>
        )}

        {/* Navigation items */}
        <div className="flex items-center gap-2">
          {/* Mobile Search Toggle - only when logged in */}
          {user && (
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full md:hidden"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>
          )}

          {/* Notifications - only when logged in */}
          {user && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80 rounded-xl p-2">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="max-h-[300px] overflow-auto">
                  <div className="p-3 hover:bg-muted rounded-lg transition-colors cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <BookOpen className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">New course available</p>
                        <p className="text-xs text-muted-foreground">Advanced React Patterns is now available</p>
                        <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 hover:bg-muted rounded-lg transition-colors cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Community update</p>
                        <p className="text-xs text-muted-foreground">Your post received 5 new replies</p>
                        <p className="text-xs text-muted-foreground mt-1">1 day ago</p>
                      </div>
                    </div>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer justify-center font-medium">
                  View all notifications
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {/* Help - only when logged in */}
          {user && (
            <Button variant="ghost" size="icon" className="rounded-full hidden md:flex">
              <HelpCircle className="h-5 w-5" />
            </Button>
          )}

          <ThemeToggle />

          {/* User Menu or Auth Buttons */}
          {!isLoading && (
            <>
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full overflow-hidden">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                        <AvatarFallback>{user.email?.charAt(0).toUpperCase() || "U"}</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 rounded-xl p-2">
                    <div className="flex items-center gap-2 p-2">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                        <AvatarFallback>{user.email?.charAt(0).toUpperCase() || "U"}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{user.user_metadata?.name || "User"}</p>
                        <p className="text-xs text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard" className="cursor-pointer">
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/profile" className="cursor-pointer">
                        Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/settings" className="cursor-pointer">
                        Settings
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/learning-paths" className="cursor-pointer">
                        My Learning Paths
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/job-applications" className="cursor-pointer">
                        My Applications
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer text-destructive focus:text-destructive" onClick={handleSignOut}>
                      <LogOut className="h-4 w-4 mr-2" />
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="rounded-full px-4 shadow-sm" asChild>
                    <Link href="/auth/login">Log in</Link>
                  </Button>
                  <Button size="sm" className="rounded-full px-4 shadow-sm bg-gradient-primary" asChild>
                    <Link href="/auth/register">Sign up</Link>
                  </Button>
                </div>
              )}
            </>
          )}

          {/* Mobile Menu Button - hide on welcome page when not logged in */}
          {(pathname !== "/" || user) && (
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden border-t"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col p-4 gap-2">
              <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Main</div>
              {mainNavItems.map((item) => (
                <NavItem
                  key={item.href}
                  href={item.href}
                  icon={item.icon}
                  text={item.text}
                  isActive={pathname === item.href}
                  onClick={closeMenu}
                />
              ))}

              {/* Only show these sections when logged in */}
              {user && (
                <>
                  <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-2">
                    Study
                  </div>
                  {studyNavItems.map((item) => (
                    <NavItem
                      key={item.href}
                      href={item.href}
                      icon={item.icon}
                      text={item.text}
                      isActive={pathname === item.href}
                      onClick={closeMenu}
                      badge={item.badge}
                    />
                  ))}

                  <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-2">
                    Career
                  </div>
                  {careerNavItems.map((item) => (
                    <NavItem
                      key={item.href}
                      href={item.href}
                      icon={item.icon}
                      text={item.text}
                      isActive={pathname === item.href}
                      onClick={closeMenu}
                    />
                  ))}

                  <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-2">
                    Community
                  </div>
                  <NavItem
                    href="/community"
                    icon={<Users className="h-4 w-4" />}
                    text="Community"
                    isActive={pathname === "/community"}
                    onClick={closeMenu}
                    badge={5}
                  />
                </>
              )}

              {!user ? (
                <div className="flex flex-col gap-2 mt-4 pt-4 border-t">
                  <Button variant="outline" className="w-full justify-start rounded-full" asChild>
                    <Link href="/auth/login">Log in</Link>
                  </Button>
                  <Button className="w-full justify-start rounded-full bg-gradient-primary" asChild>
                    <Link href="/auth/register">Sign up</Link>
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col gap-2 mt-4 pt-4 border-t">
                  <Button variant="outline" className="w-full justify-start rounded-full" onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign out
                  </Button>
                </div>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

