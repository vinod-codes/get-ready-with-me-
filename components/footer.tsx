import Link from "next/link"
import { Logo } from "./logo"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import {
  Twitter,
  Github,
  Linkedin,
  Youtube,
  Mail,
  ArrowRight,
  BookOpen,
  FileText,
  MessageSquare,
  Users,
  HelpCircle,
  Shield,
} from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t py-12 md:py-16 bg-gradient-subtle">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <Logo />
              <span className="font-semibold">Get Ready with Me</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your AI-powered career mentor that takes you from zero experience to job-ready in tech.
            </p>
            <div className="flex space-x-4 mt-2">
              <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                <Youtube className="h-4 w-4" />
                <span className="sr-only">YouTube</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-sm tracking-wider uppercase">Study Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/learning-paths"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Learning Paths</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/coding-fundamentals"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Coding Fundamentals</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/data-structures-algorithms"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>DSA Preparation</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/interview-prep"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Interview Preparation</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-sm tracking-wider uppercase">Career Tools</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/resume-builder"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <FileText className="h-4 w-4" />
                  <span>Resume Builder</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/job-applications"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <FileText className="h-4 w-4" />
                  <span>Job Applications</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Users className="h-4 w-4" />
                  <span>Community</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-sm tracking-wider uppercase">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest updates, resources, and career tips.
            </p>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Enter your email"
                  className="pl-10 pr-4 h-10 rounded-full bg-muted/50 border-muted"
                />
              </div>
              <Button size="sm" className="rounded-full bg-gradient-primary">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-6">
              <h3 className="font-medium mb-4 text-sm tracking-wider uppercase">Support</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/help"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <HelpCircle className="h-4 w-4" />
                    <span>Help Center</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Shield className="h-4 w-4" />
                    <span>Privacy & Terms</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Get Ready with Me. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

