"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Code, Play, FileText, Brain } from "lucide-react"

export default function DSAPage() {
  const [activeModule, setActiveModule] = useState("module1")

  // This would come from an API or state management in a real app
  const modules = [
    {
      id: "module1",
      title: "Introduction to DSA",
      description: "Understand why data structures and algorithms matter",
      progress: 0,
      lessons: [
        { id: "lesson1", title: "Why Study DSA?", type: "video", duration: "8 min", completed: false },
        { id: "lesson2", title: "Big O Notation", type: "interactive", duration: "15 min", completed: false },
        { id: "lesson3", title: "Time & Space Complexity", type: "article", duration: "10 min", completed: false },
        { id: "lesson4", title: "Analyzing Algorithms", type: "quiz", duration: "12 min", completed: false },
      ],
    },
    {
      id: "module2",
      title: "Arrays & Strings",
      description: "Master fundamental data structures",
      progress: 0,
      lessons: [
        { id: "lesson5", title: "Array Operations", type: "video", duration: "10 min", completed: false },
        { id: "lesson6", title: "Two-Pointer Technique", type: "interactive", duration: "15 min", completed: false },
        { id: "lesson7", title: "Sliding Window", type: "video", duration: "12 min", completed: false },
        { id: "lesson8", title: "String Manipulation", type: "coding", duration: "20 min", completed: false },
      ],
    },
    {
      id: "module3",
      title: "Linked Lists",
      description: "Learn about dynamic data structures",
      progress: 0,
      lessons: [
        { id: "lesson9", title: "Singly Linked Lists", type: "video", duration: "12 min", completed: false },
        { id: "lesson10", title: "Doubly Linked Lists", type: "interactive", duration: "15 min", completed: false },
        { id: "lesson11", title: "Common Operations", type: "coding", duration: "20 min", completed: false },
        { id: "lesson12", title: "Linked List Problems", type: "quiz", duration: "15 min", completed: false },
      ],
    },
    {
      id: "module4",
      title: "Stacks & Queues",
      description: "Explore LIFO and FIFO data structures",
      progress: 0,
      lessons: [
        { id: "lesson13", title: "Stack Implementation", type: "video", duration: "10 min", completed: false },
        { id: "lesson14", title: "Queue Implementation", type: "interactive", duration: "12 min", completed: false },
        { id: "lesson15", title: "Applications of Stacks", type: "article", duration: "8 min", completed: false },
        {
          id: "lesson16",
          title: "Solving Problems with Stacks & Queues",
          type: "coding",
          duration: "25 min",
          completed: false,
        },
      ],
    },
    {
      id: "module5",
      title: "Trees & Graphs",
      description: "Master hierarchical and network data structures",
      progress: 0,
      lessons: [
        { id: "lesson17", title: "Binary Trees", type: "video", duration: "15 min", completed: false },
        { id: "lesson18", title: "Tree Traversal", type: "interactive", duration: "18 min", completed: false },
        { id: "lesson19", title: "Graph Representation", type: "video", duration: "12 min", completed: false },
        { id: "lesson20", title: "Graph Algorithms", type: "coding", duration: "30 min", completed: false },
      ],
    },
    {
      id: "module6",
      title: "Sorting & Searching",
      description: "Learn efficient sorting and searching algorithms",
      progress: 0,
      lessons: [
        {
          id: "lesson21",
          title: "Bubble, Selection & Insertion Sort",
          type: "video",
          duration: "15 min",
          completed: false,
        },
        { id: "lesson22", title: "Merge & Quick Sort", type: "interactive", duration: "20 min", completed: false },
        { id: "lesson23", title: "Binary Search", type: "coding", duration: "15 min", completed: false },
        { id: "lesson24", title: "Search in Rotated Arrays", type: "quiz", duration: "12 min", completed: false },
      ],
    },
    {
      id: "module7",
      title: "Dynamic Programming",
      description: "Master the art of breaking down complex problems",
      progress: 0,
      lessons: [
        { id: "lesson25", title: "Introduction to DP", type: "video", duration: "12 min", completed: false },
        {
          id: "lesson26",
          title: "Memoization & Tabulation",
          type: "interactive",
          duration: "18 min",
          completed: false,
        },
        { id: "lesson27", title: "Classic DP Problems", type: "coding", duration: "25 min", completed: false },
        { id: "lesson28", title: "Advanced DP Techniques", type: "video", duration: "20 min", completed: false },
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
              <h1 className="text-3xl font-bold tracking-tight mb-2">Data Structures & Algorithms</h1>
              <p className="text-muted-foreground">Master the core concepts that power efficient software</p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-sm">
                Intermediate
              </Badge>
              <Badge variant="outline" className="text-sm">
                25 Hours
              </Badge>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-8">
            <div className="text-sm font-medium">Overall Progress:</div>
            <Progress value={0} className="h-2 flex-1" />
            <div className="text-sm font-medium">0%</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Course Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Difficulty</span>
                    <span className="font-medium">Intermediate</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Modules</span>
                    <span className="font-medium">{modules.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Total Lessons</span>
                    <span className="font-medium">28</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Estimated Time</span>
                    <span className="font-medium">25 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Prerequisites</span>
                    <Link href="/learning-paths/coding-fundamentals" className="text-primary text-sm hover:underline">
                      Coding Fundamentals
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Course Modules</h2>

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
                          ) : lesson.type === "coding" ? (
                            <Brain
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
                <Button disabled={activeModule === "module7"}>Next Module</Button>
              </CardFooter>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Practice Problems</CardTitle>
                <CardDescription>Apply what you've learned with these coding challenges</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-md border hover:border-primary/50 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <Badge>Easy</Badge>
                      <span className="font-medium">Two Sum</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      Solve
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-md border hover:border-primary/50 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <Badge>Easy</Badge>
                      <span className="font-medium">Valid Parentheses</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      Solve
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-md border hover:border-primary/50 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-yellow-500">Medium</Badge>
                      <span className="font-medium">Longest Substring Without Repeating Characters</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      Solve
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-md border hover:border-primary/50 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-red-500">Hard</Badge>
                      <span className="font-medium">Merge K Sorted Lists</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      Solve
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Practice Problems
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

