"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Target, Users, Brain, BookOpen, Star, Trophy, ChevronRight, ArrowUpRight, CheckCircle2, PlayCircle, Bookmark, MessageSquare } from "lucide-react"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="container mx-auto py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Welcome back, Alex</h1>
              <p className="text-muted-foreground">Track your learning progress</p>
            </div>
            <Button variant="outline" className="gap-2">
              <Calendar className="h-4 w-4" />
              Schedule
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-8">
        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Learning Streak</p>
                  <h3 className="text-2xl font-bold">7 days</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Target className="h-6 w-6 text-blue-500" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-green-500">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                <span>+2 days this week</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Courses Completed</p>
                  <h3 className="text-2xl font-bold">12</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-green-500" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-green-500">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                <span>+3 this month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Study Hours</p>
                  <h3 className="text-2xl font-bold">24.5</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-purple-500" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-green-500">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                <span>+5.2h this week</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Skills Mastered</p>
                  <h3 className="text-2xl font-bold">8</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <Star className="h-6 w-6 text-orange-500" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-green-500">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                <span>+2 this month</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-[400px]">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="practice">Practice</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Today's Tasks */}
            <Card>
              <CardHeader>
                <CardTitle>Today's Tasks</CardTitle>
                <CardDescription>Your learning schedule for today</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <PlayCircle className="h-5 w-5 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">Complete React Hooks Module</h4>
                        <p className="text-sm text-muted-foreground">Advanced React Course</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center">
                        <BookOpen className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">System Design Practice</h4>
                        <p className="text-sm text-muted-foreground">Interview Preparation</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Learning Progress */}
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Course Progress</CardTitle>
                  <CardDescription>Your current course completion status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-blue-500" />
                          <span className="text-sm font-medium">Advanced React</span>
                        </div>
                        <span className="text-sm text-muted-foreground">75%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-green-500" />
                          <span className="text-sm font-medium">System Design</span>
                        </div>
                        <span className="text-sm text-muted-foreground">45%</span>
                      </div>
                      <Progress value={45} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Skill Development</CardTitle>
                  <CardDescription>Your skill improvement progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-purple-500" />
                          <span className="text-sm font-medium">React Hooks</span>
                        </div>
                        <span className="text-sm text-muted-foreground">90%</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-orange-500" />
                          <span className="text-sm font-medium">System Design</span>
                        </div>
                        <span className="text-sm text-muted-foreground">60%</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest learning achievements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                    <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Completed React Hooks Module</h4>
                      <p className="text-sm text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                    <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <Bookmark className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Saved System Design Notes</h4>
                      <p className="text-sm text-muted-foreground">5 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                    <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Participated in Group Discussion</h4>
                      <p className="text-sm text-muted-foreground">1 day ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Other Tabs Content */}
          <TabsContent value="courses">
            <Card>
              <CardHeader>
                <CardTitle>Your Courses</CardTitle>
                <CardDescription>Continue where you left off</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {/* Course cards will go here */}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="practice">
            <Card>
              <CardHeader>
                <CardTitle>Practice Sessions</CardTitle>
                <CardDescription>Sharpen your skills with exercises</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {/* Practice cards will go here */}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="community">
            <Card>
              <CardHeader>
                <CardTitle>Community</CardTitle>
                <CardDescription>Connect with other learners</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {/* Community cards will go here */}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

