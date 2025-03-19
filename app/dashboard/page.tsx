"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  BadgeCheck,
  BookOpen,
  FileText,
  MessageSquare,
  Award,
  ArrowRight,
  Clock,
  Calendar,
  Users,
  Code,
  Laptop,
} from "lucide-react"

export default function DashboardPage() {
  // In a real app, this would come from an API call or state management
  const [userData, setUserData] = useState({
    name: "Alex Johnson",
    careerGoal: "Frontend Developer",
    learningProgress: {
      coursesCompleted: 5,
      totalCourses: 12,
      projectsCompleted: 2,
      totalProjects: 4,
      skillsAcquired: ["HTML", "CSS", "JavaScript", "React", "Git"],
      nextMilestone: "Complete React Portfolio Project",
      jobApplications: 3,
      interviews: 1,
    },
  })

  const [upcomingTasks, setUpcomingTasks] = useState([
    {
      id: 1,
      title: "Complete CSS Flexbox Tutorial",
      dueDate: "2025-03-22",
      type: "learning",
      priority: "high",
    },
    {
      id: 2,
      title: "Submit Application to TechCorp",
      dueDate: "2025-03-25",
      type: "application",
      priority: "medium",
    },
    {
      id: 3,
      title: "Practice Mock Interview",
      dueDate: "2025-03-26",
      type: "interview",
      priority: "high",
    },
    {
      id: 4,
      title: "Start Portfolio Project",
      dueDate: "2025-04-01",
      type: "project",
      priority: "medium",
    },
  ])

  const [recommendations, setRecommendations] = useState([
    {
      id: 1,
      title: "Advanced React Hooks",
      type: "course",
      reason: "Based on your career goal and current progress",
      link: "/learning-paths/web-development/react-advanced",
    },
    {
      id: 2,
      title: "Build a Full-Stack App with Next.js",
      type: "project",
      reason: "Will strengthen your portfolio for Frontend roles",
      link: "/learning-paths/projects/nextjs-fullstack",
    },
    {
      id: 3,
      title: "Frontend Developer at InnoTech",
      type: "job",
      reason: "Matches your skills and experience level",
      link: "/job-applications/browse",
    },
  ])

  const progressPercentage = Math.round(
    (userData.learningProgress.coursesCompleted / userData.learningProgress.totalCourses) * 100,
  )

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="flex flex-col gap-8">
        {/* User Profile Summary */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400">
              Welcome back, {userData.name}
            </h1>
            <p className="text-muted-foreground">
              Career Goal: <span className="font-medium">{userData.careerGoal}</span>
            </p>
          </div>
          <div className="flex gap-2">
            <Button asChild>
              <Link href="/learning-paths">Continue Learning</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/job-applications">My Applications</Link>
            </Button>
          </div>
        </div>

        {/* Progress Tracker */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Learning Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{progressPercentage}%</div>
              <Progress value={progressPercentage} className="h-2 mt-2" />
              <p className="text-xs text-muted-foreground mt-2">
                {userData.learningProgress.coursesCompleted} of {userData.learningProgress.totalCourses} courses
                completed
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Job Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userData.learningProgress.jobApplications}</div>
              <p className="text-xs text-muted-foreground mt-2">Applications submitted this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Interview Success</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userData.learningProgress.interviews}</div>
              <p className="text-xs text-muted-foreground mt-2">Interviews secured this month</p>
            </CardContent>
          </Card>
        </div>

        {/* AI-Generated Learning Path */}
        <div>
          <h2 className="text-xl font-bold mb-4">AI Recommendations</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {recommendations.map((rec) => (
              <Card key={rec.id} className="hover:border-indigo-300 transition-colors">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    {rec.type === "course" ? (
                      <BookOpen className="h-5 w-5 text-indigo-600" />
                    ) : rec.type === "project" ? (
                      <Code className="h-5 w-5 text-indigo-600" />
                    ) : (
                      <Laptop className="h-5 w-5 text-indigo-600" />
                    )}
                    <CardTitle className="text-base">{rec.title}</CardTitle>
                  </div>
                  <CardDescription>{rec.reason}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full" asChild>
                    <Link href={rec.link}>
                      {rec.type === "job" ? "View Job" : "Start Learning"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Your Next Milestone</CardTitle>
              <CardDescription>Keep working toward your career goals</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-full">
                  <Award className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-medium">{userData.learningProgress.nextMilestone}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Completing this milestone will strengthen your portfolio for frontend roles
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="gap-1">
                View Details
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Skills Acquired</CardTitle>
              <CardDescription>Skills you've learned so far</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {userData.learningProgress.skillsAcquired.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-1 rounded-full text-sm"
                  >
                    <BadgeCheck className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
                    {skill}
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="gap-1">
                View All Skills
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto py-4 flex flex-col gap-2" asChild>
              <Link href="/learning-paths">
                <BookOpen className="h-6 w-6 text-indigo-600" />
                <span>Continue Learning</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex flex-col gap-2" asChild>
              <Link href="/job-applications/resume">
                <FileText className="h-6 w-6 text-indigo-600" />
                <span>Update Resume</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex flex-col gap-2" asChild>
              <Link href="/interview-prep">
                <MessageSquare className="h-6 w-6 text-indigo-600" />
                <span>Practice Interview</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex flex-col gap-2" asChild>
              <Link href="/community">
                <Users className="h-6 w-6 text-indigo-600" />
                <span>Join Study Group</span>
              </Link>
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
            <CardDescription>Tasks you need to complete to stay on track</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingTasks.map((task) => (
                <div key={task.id} className="flex items-start justify-between pb-4 border-b last:border-0 last:pb-0">
                  <div className="flex items-start gap-3">
                    <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-full">
                      {task.type === "learning" ? (
                        <BookOpen className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                      ) : task.type === "application" ? (
                        <FileText className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                      ) : task.type === "interview" ? (
                        <MessageSquare className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                      ) : (
                        <Clock className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{task.title}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                        <p className="text-xs text-muted-foreground">
                          Due by{" "}
                          {new Date(task.dueDate).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                        {task.priority === "high" && (
                          <span className="text-xs bg-red-100 text-red-800 px-1.5 py-0.5 rounded dark:bg-red-900 dark:text-red-200">
                            High Priority
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Tasks
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

