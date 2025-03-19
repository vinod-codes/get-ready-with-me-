"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Code, BookOpen, ArrowRight, Play, FileText } from "lucide-react"

export default function CodingFundamentalsPage() {
  const [activeModule, setActiveModule] = useState("module1")

  // This would come from an API or state management in a real app
  const modules = [
    {
      id: "module1",
      title: "Introduction to Programming",
      description: "Learn the basics of programming concepts and logic",
      progress: 100,
      lessons: [
        { id: "lesson1", title: "What is Programming?", type: "video", duration: "10 min", completed: true },
        { id: "lesson2", title: "How Computers Process Code", type: "article", duration: "5 min", completed: true },
        { id: "lesson3", title: "Your First Program", type: "interactive", duration: "15 min", completed: true },
        { id: "lesson4", title: "Variables and Data Types", type: "video", duration: "12 min", completed: true },
      ],
    },
    {
      id: "module2",
      title: "Control Flow",
      description: "Master conditional statements and loops",
      progress: 75,
      lessons: [
        { id: "lesson5", title: "If/Else Statements", type: "video", duration: "8 min", completed: true },
        { id: "lesson6", title: "Switch Statements", type: "article", duration: "5 min", completed: true },
        { id: "lesson7", title: "For Loops", type: "interactive", duration: "15 min", completed: true },
        { id: "lesson8", title: "While Loops", type: "video", duration: "10 min", completed: false },
      ],
    },
    {
      id: "module3",
      title: "Functions and Methods",
      description: "Learn to organize code with functions",
      progress: 0,
      lessons: [
        { id: "lesson9", title: "What are Functions?", type: "video", duration: "8 min", completed: false },
        {
          id: "lesson10",
          title: "Parameters and Arguments",
          type: "interactive",
          duration: "12 min",
          completed: false,
        },
        { id: "lesson11", title: "Return Values", type: "article", duration: "5 min", completed: false },
        { id: "lesson12", title: "Function Scope", type: "video", duration: "10 min", completed: false },
      ],
    },
    {
      id: "module4",
      title: "Data Structures",
      description: "Explore arrays, objects, and more",
      progress: 0,
      lessons: [
        { id: "lesson13", title: "Arrays", type: "video", duration: "12 min", completed: false },
        { id: "lesson14", title: "Objects", type: "interactive", duration: "15 min", completed: false },
        { id: "lesson15", title: "Maps and Sets", type: "article", duration: "8 min", completed: false },
        { id: "lesson16", title: "Working with Complex Data", type: "video", duration: "14 min", completed: false },
      ],
    },
    {
      id: "module5",
      title: "Algorithms Basics",
      description: "Introduction to problem-solving with algorithms",
      progress: 0,
      lessons: [
        { id: "lesson17", title: "What are Algorithms?", type: "video", duration: "10 min", completed: false },
        { id: "lesson18", title: "Linear Search", type: "interactive", duration: "12 min", completed: false },
        { id: "lesson19", title: "Binary Search", type: "video", duration: "15 min", completed: false },
        {
          id: "lesson20",
          title: "Basic Sorting Algorithms",
          type: "interactive",
          duration: "20 min",
          completed: false,
        },
      ],
    },
  ]

  const activeModuleData = modules.find((m) => m.id === activeModule) || modules[0]

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="flex flex-col gap-8">
        <div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-2">Coding Fundamentals</h1>
              <p className="text-muted-foreground">Master the core concepts of programming from the ground up</p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-sm">
                Beginner Friendly
              </Badge>
              <Badge variant="outline" className="text-sm">
                12 Hours
              </Badge>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-8">
            <div className="text-sm font-medium">Overall Progress:</div>
            <Progress value={35} className="h-2 flex-1" />
            <div className="text-sm font-medium">35%</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold mb-4">Course Modules</h2>

              {modules.map((module) => (
                <Card
                  key={module.id}
                  className={`cursor-pointer hover:border-primary/50 transition-colors ${
                    activeModule === module.id ? "border-primary" : ""
                  }`}
                  onClick={() => setActiveModule(module.id)}
                >
                  <CardHeader className="p-4">
                    <CardTitle className="text-base flex items-center justify-between">
                      <span>{module.title}</span>
                      {module.progress === 100 && <CheckCircle className="h-5 w-5 text-green-500" />}
                    </CardTitle>
                    <CardDescription className="text-xs">{module.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="p-4 pt-0">
                    <div className="w-full">
                      <div className="flex justify-between text-xs mb-1">
                        <span>{module.progress}% complete</span>
                        <span>{module.lessons.length} lessons</span>
                      </div>
                      <Progress value={module.progress} className="h-1" />
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>{activeModuleData.title}</CardTitle>
                <CardDescription>{activeModuleData.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeModuleData.lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      className={`flex items-center justify-between p-3 rounded-md border ${
                        lesson.completed ? "bg-muted/50" : "bg-card"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-full ${lesson.completed ? "bg-primary/10" : "bg-muted"}`}>
                          {lesson.type === "video" ? (
                            <Play
                              className={`h-4 w-4 ${lesson.completed ? "text-primary" : "text-muted-foreground"}`}
                            />
                          ) : lesson.type === "interactive" ? (
                            <Code
                              className={`h-4 w-4 ${lesson.completed ? "text-primary" : "text-muted-foreground"}`}
                            />
                          ) : (
                            <FileText
                              className={`h-4 w-4 ${lesson.completed ? "text-primary" : "text-muted-foreground"}`}
                            />
                          )}
                        </div>
                        <div>
                          <div className="font-medium flex items-center gap-2">
                            {lesson.title}
                            {lesson.completed && <CheckCircle className="h-3.5 w-3.5 text-green-500" />}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Badge variant="outline" className="text-xs font-normal">
                              {lesson.type}
                            </Badge>
                            <span>{lesson.duration}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        {lesson.completed ? "Review" : "Start"}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" disabled={activeModule === "module1"}>
                  Previous Module
                </Button>
                <Button disabled={activeModule === "module5"}>Next Module</Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What You'll Learn</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Core programming concepts and syntax</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Problem-solving with algorithms and data structures</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>How to write clean, efficient code</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Debugging and troubleshooting techniques</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Next Steps</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-1">After completing this course:</h3>
                  <p className="text-sm text-muted-foreground">
                    Continue your learning journey with these advanced topics
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <Link
                    href="/learning-paths/data-structures-algorithms"
                    className="flex items-center justify-between p-3 rounded-md border hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <span className="font-medium">Data Structures & Algorithms</span>
                    </div>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/learning-paths/web-development"
                    className="flex items-center justify-between p-3 rounded-md border hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Code className="h-5 w-5 text-primary" />
                      <span className="font-medium">Web Development Fundamentals</span>
                    </div>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

