"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, CloudCog, Laptop, Server, Database, Brain } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function LearningPathsPage() {
  const [selectedTab, setSelectedTab] = useState("explore")
  const [careerPath, setCareerPath] = useState<string>("")
  const [experienceLevel, setExperienceLevel] = useState<string>("")
  const [timeCommitment, setTimeCommitment] = useState<string>("")
  const [isGenerating, setIsGenerating] = useState<boolean>(false)

  // Sample career paths for the explore tab
  const careerPaths = [
    {
      id: "frontend",
      title: "Frontend Developer",
      description: "Build user interfaces and interactive web applications",
      icon: <Laptop className="h-10 w-10 text-indigo-600" />,
      skills: ["HTML", "CSS", "JavaScript", "React", "UI/UX"],
      duration: "3-6 months",
      difficulty: "Beginner-Friendly",
    },
    {
      id: "backend",
      title: "Backend Developer",
      description: "Create server-side logic and APIs for web applications",
      icon: <Server className="h-10 w-10 text-indigo-600" />,
      skills: ["Node.js", "Express", "Databases", "API Design", "Authentication"],
      duration: "4-8 months",
      difficulty: "Intermediate",
    },
    {
      id: "fullstack",
      title: "Full Stack Developer",
      description: "Master both frontend and backend development",
      icon: <Code className="h-10 w-10 text-indigo-600" />,
      skills: ["JavaScript", "React", "Node.js", "Databases", "DevOps Basics"],
      duration: "6-12 months",
      difficulty: "Intermediate",
    },
    {
      id: "data",
      title: "Data Scientist",
      description: "Analyze data and build machine learning models",
      icon: <Database className="h-10 w-10 text-indigo-600" />,
      skills: ["Python", "Statistics", "Machine Learning", "Data Visualization", "SQL"],
      duration: "6-12 months",
      difficulty: "Advanced",
    },
    {
      id: "ai",
      title: "AI/ML Engineer",
      description: "Build intelligent systems and machine learning models",
      icon: <Brain className="h-10 w-10 text-indigo-600" />,
      skills: ["Python", "TensorFlow/PyTorch", "Deep Learning", "NLP", "Computer Vision"],
      duration: "8-14 months",
      difficulty: "Advanced",
    },
    {
      id: "devops",
      title: "DevOps Engineer",
      description: "Automate infrastructure and deployment pipelines",
      icon: <CloudCog className="h-10 w-10 text-indigo-600" />,
      skills: ["Linux", "Docker", "Kubernetes", "CI/CD", "Cloud Platforms"],
      duration: "5-10 months",
      difficulty: "Intermediate",
    },
  ]

  async function handleGeneratePlan() {
    if (!careerPath || !experienceLevel || !timeCommitment) {
      return
    }

    setIsGenerating(true)

    // In a real app, this would call an API to generate a plan
    setTimeout(() => {
      setIsGenerating(false)
      // Navigate to a custom plan page or show the plan
      window.location.href = `/learning-paths/${careerPath}`
    }, 2000)
  }

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-4 text-indigo-600 dark:text-indigo-400">
            Learning Paths
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Explore structured learning paths or generate a personalized roadmap based on your career goals.
          </p>
        </div>

        <Tabs defaultValue="explore" value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="explore">Explore Paths</TabsTrigger>
            <TabsTrigger value="custom">Custom Path</TabsTrigger>
          </TabsList>

          <TabsContent value="explore" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {careerPaths.map((path) => (
                <Card key={path.id} className="hover:border-indigo-300 transition-colors">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      {path.icon}
                      <Badge variant="outline">{path.difficulty}</Badge>
                    </div>
                    <CardTitle className="mt-4">{path.title}</CardTitle>
                    <CardDescription>{path.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium mb-1">Key Skills:</p>
                        <div className="flex flex-wrap gap-1">
                          {path.skills.map((skill, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Estimated Duration:</span>
                        <span className="font-medium">{path.duration}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href={`/learning-paths/${path.id}`}>View Path</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="custom" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Generate Your Personalized Learning Path</CardTitle>
                <CardDescription>
                  Our AI will create a custom roadmap based on your goals and experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Career Path</label>
                    <Select onValueChange={setCareerPath} value={careerPath}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a career path" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="frontend-developer">Frontend Developer</SelectItem>
                        <SelectItem value="backend-developer">Backend Developer</SelectItem>
                        <SelectItem value="fullstack-developer">Full Stack Developer</SelectItem>
                        <SelectItem value="data-scientist">Data Scientist</SelectItem>
                        <SelectItem value="ai-ml-engineer">AI/ML Engineer</SelectItem>
                        <SelectItem value="devops-engineer">DevOps Engineer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Experience Level</label>
                    <Select onValueChange={setExperienceLevel} value={experienceLevel}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="absolute-beginner">Absolute Beginner</SelectItem>
                        <SelectItem value="some-knowledge">Some Knowledge</SelectItem>
                        <SelectItem value="career-switcher">Career Switcher</SelectItem>
                        <SelectItem value="some-experience">Some Experience</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Time Commitment</label>
                    <Select onValueChange={setTimeCommitment} value={timeCommitment}>
                      <SelectTrigger>
                        <SelectValue placeholder="Hours per week" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5-10">5-10 hours/week</SelectItem>
                        <SelectItem value="10-20">10-20 hours/week</SelectItem>
                        <SelectItem value="20+">20+ hours/week</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={handleGeneratePlan}
                  disabled={!careerPath || !experienceLevel || !timeCommitment || isGenerating}
                  className="w-full"
                >
                  {isGenerating ? "Generating Your Plan..." : "Generate My Learning Path"}
                </Button>
              </CardFooter>
            </Card>

            <div className="text-center space-y-4">
              <h3 className="text-lg font-medium">How It Works</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    1
                  </div>
                  <h4 className="font-medium">Tell Us Your Goals</h4>
                  <p className="text-sm text-muted-foreground">Select your desired career path and experience level</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    2
                  </div>
                  <h4 className="font-medium">AI Creates Your Plan</h4>
                  <p className="text-sm text-muted-foreground">Our AI generates a personalized learning roadmap</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    3
                  </div>
                  <h4 className="font-medium">Start Learning</h4>
                  <p className="text-sm text-muted-foreground">Follow your custom path with curated resources</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

