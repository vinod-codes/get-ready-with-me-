"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  BookOpen,
  FileText,
  MessageSquare,
  Users,
  ChevronDown,
  Code,
  Laptop,
  GraduationCap,
  CheckCircle,
  Sparkles,
  Brain,
} from "lucide-react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  console.log("Rendering Home component")
  
  useEffect(() => {
    console.log("Home component mounted")
    // Check if we're in the browser
    if (typeof window !== 'undefined') {
      console.log("Running in browser context")
    }
  }, [])
  
  const featuresRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState("all")

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="flex flex-col min-h-dvh">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh -z-10"></div>

        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            className="flex flex-col items-center justify-center space-y-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="space-y-4 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium bg-primary/5 border-primary/20 mb-4">
                Your AI-powered career mentor
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="text-gradient-purple">Get Ready with Me</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl lg:text-2xl">
                From zero experience to job-ready in tech with personalized learning paths, AI-powered tools, and a
                supportive community.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-full shadow-md bg-gradient-primary btn-glow"
                asChild
              >
                <Link href="/auth/register">
                  Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full" asChild>
                <Link href="/learning-paths">Explore Paths</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 animate-bounce"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                onClick={scrollToFeatures}
                aria-label="Scroll to features"
              >
                <ChevronDown className="h-6 w-6" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Overview Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-subtle" ref={featuresRef}>
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient-purple">
                How We Help You Succeed
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Our platform uses advanced AI to help you at every step of your career journey.
              </p>
            </div>

            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full max-w-md mt-8">
              <TabsList className="grid w-full grid-cols-3 rounded-full p-1 bg-muted/50">
                <TabsTrigger value="all" className="rounded-full">
                  All Features
                </TabsTrigger>
                <TabsTrigger value="study" className="rounded-full">
                  Study Tools
                </TabsTrigger>
                <TabsTrigger value="career" className="rounded-full">
                  Career Tools
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Feature 1 - Learning Paths */}
            <motion.div variants={item} className={activeTab !== "all" && activeTab !== "study" ? "hidden" : ""}>
              <Card className="h-full card-hover overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Personalized Learning</CardTitle>
                  <CardDescription>AI-generated custom roadmap based on your career goals.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Input your goals and preferences, and our AI will create a tailored learning path with free
                    resources.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                      Python
                    </Badge>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                      JavaScript
                    </Badge>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                      Java
                    </Badge>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                      +5 more
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/learning-paths" className="text-primary flex items-center group">
                    Explore Learning Paths
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Feature 2 - DSA Prep */}
            <motion.div variants={item} className={activeTab !== "all" && activeTab !== "study" ? "hidden" : ""}>
              <Card className="h-full card-hover overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>DSA Preparation</CardTitle>
                  <CardDescription>Master data structures and algorithms with interactive challenges.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Practice with difficulty-based questions, visual explanations, and AI-powered hints to ace technical
                    interviews.
                  </p>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="flex flex-col items-center p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
                      <span className="text-xs font-medium text-green-800 dark:text-green-400">Easy</span>
                      <span className="text-lg font-bold text-green-800 dark:text-green-400">120+</span>
                    </div>
                    <div className="flex flex-col items-center p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
                      <span className="text-xs font-medium text-yellow-800 dark:text-yellow-400">Medium</span>
                      <span className="text-lg font-bold text-yellow-800 dark:text-yellow-400">200+</span>
                    </div>
                    <div className="flex flex-col items-center p-2 rounded-lg bg-red-100 dark:bg-red-900/30">
                      <span className="text-xs font-medium text-red-800 dark:text-red-400">Hard</span>
                      <span className="text-lg font-bold text-red-800 dark:text-red-400">80+</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/data-structures-algorithms" className="text-primary flex items-center group">
                    Start Practicing
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Feature 3 - Language Learning */}
            <motion.div variants={item} className={activeTab !== "all" && activeTab !== "study" ? "hidden" : ""}>
              <Card className="h-full card-hover overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Laptop className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Language Tracks</CardTitle>
                  <CardDescription>
                    Learn programming languages with interactive exercises and projects.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Choose your preferred language and follow a structured path with hands-on coding challenges and
                    real-world applications.
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <span className="text-blue-600 dark:text-blue-400 font-bold">Py</span>
                      </div>
                      <span className="text-xs mt-1">Python</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                        <span className="text-yellow-600 dark:text-yellow-400 font-bold">JS</span>
                      </div>
                      <span className="text-xs mt-1">JavaScript</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                        <span className="text-red-600 dark:text-red-400 font-bold">Ja</span>
                      </div>
                      <span className="text-xs mt-1">Java</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                        <span className="text-purple-600 dark:text-purple-400 font-bold">C++</span>
                      </div>
                      <span className="text-xs mt-1">C++</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/coding-fundamentals" className="text-primary flex items-center group">
                    Choose Your Language
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Feature 4 - Resume Builder */}
            <motion.div variants={item} className={activeTab !== "all" && activeTab !== "career" ? "hidden" : ""}>
              <Card className="h-full card-hover overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Resume Builder</CardTitle>
                  <CardDescription>
                    Create tailored resumes that stand out to employers and ATS systems.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our AI analyzes job listings and customizes your resume to highlight relevant skills and experience
                    with multiple templates.
                  </p>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="aspect-[8.5/11] bg-white dark:bg-white/10 rounded-lg shadow-sm overflow-hidden border border-border/50 flex items-center justify-center">
                      <span className="text-xs text-muted-foreground">Modern</span>
                    </div>
                    <div className="aspect-[8.5/11] bg-white dark:bg-white/10 rounded-lg shadow-sm overflow-hidden border border-border/50 flex items-center justify-center">
                      <span className="text-xs text-muted-foreground">Classic</span>
                    </div>
                    <div className="aspect-[8.5/11] bg-white dark:bg-white/10 rounded-lg shadow-sm overflow-hidden border border-border/50 flex items-center justify-center">
                      <span className="text-xs text-muted-foreground">Creative</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/resume-builder" className="text-primary flex items-center group">
                    Build Your Resume
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Feature 5 - Interview Prep */}
            <motion.div variants={item} className={activeTab !== "all" && activeTab !== "career" ? "hidden" : ""}>
              <Card className="h-full card-hover overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Interview Preparation</CardTitle>
                  <CardDescription>
                    Practice with AI that asks real interview questions and provides feedback.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Get comfortable with interviews through AI-powered practice sessions that improve your confidence
                    and skills.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-primary/5 border border-primary/10">
                      <Brain className="h-4 w-4 text-primary" />
                      <span className="text-sm">Technical Interviews</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-primary/5 border border-primary/10">
                      <MessageSquare className="h-4 w-4 text-primary" />
                      <span className="text-sm">Behavioral Interviews</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-primary/5 border border-primary/10">
                      <Sparkles className="h-4 w-4 text-primary" />
                      <span className="text-sm">AI Feedback & Analysis</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/interview-prep" className="text-primary flex items-center group">
                    Start Practicing
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Feature 6 - Community */}
            <motion.div variants={item} className={activeTab !== "all" && activeTab !== "career" ? "hidden" : ""}>
              <Card className="h-full card-hover overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Community Support</CardTitle>
                  <CardDescription>
                    Connect with peers, mentors, and alumni who share your career goals.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Join study groups, participate in discussions, and learn from others who have successfully landed
                    jobs.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-primary/5 border border-primary/10">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-sm">Study Groups</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        24 Active
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-primary/5 border border-primary/10">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-primary" />
                        <span className="text-sm">Discussion Forums</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        100+ Topics
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-primary/5 border border-primary/10">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4 text-primary" />
                        <span className="text-sm">Mentorship</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        50+ Mentors
                      </Badge>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/community" className="text-primary flex items-center group">
                    Join Community
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-mesh">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient-purple">
                Success Stories
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Hear from students who transformed their careers with our platform.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Testimonial 1 */}
            <motion.div variants={item}>
              <Card className="h-full card-hover glass-card">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 border-2 border-primary/20">
                      <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Sarah J." />
                      <AvatarFallback className="bg-primary/10 text-primary">SJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>Sarah J.</CardTitle>
                      <CardDescription>From Marketing to Frontend Developer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      "After 5 years in marketing, I wanted to switch to tech. This platform guided me through every
                      step, from learning React to acing my interviews. I landed a job at a startup within 4 months!"
                    </p>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">
                        Now at <span className="font-medium">TechStartup Inc.</span>
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                        React
                      </Badge>
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                        JavaScript
                      </Badge>
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                        Career Switch
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div variants={item}>
              <Card className="h-full card-hover glass-card">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 border-2 border-primary/20">
                      <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Michael T." />
                      <AvatarFallback className="bg-primary/10 text-primary">MT</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>Michael T.</CardTitle>
                      <CardDescription>College Student to Data Scientist</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      "The AI-generated learning path was a game-changer. It helped me focus on the right skills and
                      projects. The mock interviews prepared me perfectly for the real thing!"
                    </p>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">
                        Now at <span className="font-medium">DataCorp Analytics</span>
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                        Python
                      </Badge>
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                        Data Science
                      </Badge>
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                        ML
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div variants={item}>
              <Card className="h-full card-hover glass-card">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 border-2 border-primary/20">
                      <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Priya K." />
                      <AvatarFallback className="bg-primary/10 text-primary">PK</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>Priya K.</CardTitle>
                      <CardDescription>Teacher to Backend Engineer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      "As a former teacher with no coding experience, I was intimidated by tech. This platform broke
                      everything down into manageable steps. Now I'm a backend engineer at a major tech company!"
                    </p>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">
                        Now at <span className="font-medium">TechGiant Inc.</span>
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                        Java
                      </Badge>
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                        Spring
                      </Badge>
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                        Career Switch
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-primary text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            className="flex flex-col items-center justify-center space-y-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Start Your Journey Today!</h2>
              <p className="mx-auto max-w-[700px] md:text-xl text-white/80">
                Join thousands of users who have successfully transitioned to their dream tech careers.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full shadow-lg bg-white text-primary hover:bg-white/90"
                asChild
              >
                <Link href="/auth/register">Sign Up for Free</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full shadow-lg border-white/20 text-white hover:bg-white/10"
                asChild
              >
                <Link href="/learning-paths">Explore Learning Paths</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

