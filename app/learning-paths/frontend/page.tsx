"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, Code, Laptop, Target, Clock, Users, Star, CheckCircle2, PlayCircle, Bookmark, MessageSquare, GitBranch, Layout, Database, Server, Cloud, Shield } from "lucide-react"
import Link from "next/link"

const learningPaths = [
  {
    id: "html-css",
    title: "HTML5 & CSS3",
    description: "Master the fundamentals of web development",
    duration: "10 weeks",
    topics: [
      "Semantic HTML",
      "CSS Flexbox & Grid",
      "Responsive Design",
      "CSS Animations",
      "CSS Variables",
    ],
    progress: 0,
    icon: Layout,
    color: "text-blue-500",
  },
  {
    id: "javascript",
    title: "JavaScript Basics",
    description: "Learn the fundamentals of JavaScript programming",
    duration: "12 weeks",
    topics: [
      "Variables & Data Types",
      "Functions & Scope",
      "Arrays & Objects",
      "DOM Manipulation",
      "ES6+ Features",
    ],
    progress: 0,
    icon: Code,
    color: "text-yellow-500",
  },
  {
    id: "react",
    title: "React.js",
    description: "Build modern web applications with React",
    duration: "14 weeks",
    topics: [
      "Components & Props",
      "Hooks & State Management",
      "React Router",
      "Context API",
      "Performance Optimization",
    ],
    progress: 0,
    icon: Laptop,
    color: "text-purple-500",
  },
]

export default function FrontendLearningPaths() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="container mx-auto py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Frontend Development</h1>
              <p className="text-muted-foreground">Master modern frontend development</p>
            </div>
            <Button variant="outline" className="gap-2">
              <Target className="h-4 w-4" />
              Track Progress
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-8">
        {/* Learning Path Overview */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Total Duration</p>
                  <h3 className="text-2xl font-bold">36 weeks</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-blue-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Topics Covered</p>
                  <h3 className="text-2xl font-bold">15</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Projects</p>
                  <h3 className="text-2xl font-bold">12</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Code className="h-6 w-6 text-purple-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Overall Progress</p>
                  <h3 className="text-2xl font-bold">0%</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <Star className="h-6 w-6 text-orange-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Learning Paths */}
        <div className="space-y-6">
          {learningPaths.map((path) => (
            <Link href={`/learning-paths/frontend/${path.id}`} key={path.id}>
              <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <path.icon className={`h-6 w-6 ${path.color}`} />
                    </div>
                    <div>
                      <CardTitle>{path.title}</CardTitle>
                      <CardDescription>{path.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Duration</p>
                        <p className="text-sm text-muted-foreground">{path.duration}</p>
                      </div>
                      <Badge variant="outline">{path.topics.length} topics</Badge>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Progress</span>
                        <span className="text-sm text-muted-foreground">{path.progress}%</span>
                      </div>
                      <Progress value={path.progress} className="h-2" />
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {path.topics.map((topic, index) => (
                        <Badge key={index} variant="secondary">
                          {topic}
                        </Badge>
                      ))}
                    </div>

                    <Button className="w-full" variant="outline">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Start Learning
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 