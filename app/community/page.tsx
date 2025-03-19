"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare, Users, Award, Search, ThumbsUp, MessageCircle, Calendar, ArrowRight, Plus } from "lucide-react"

export default function CommunityPage() {
  const [selectedTab, setSelectedTab] = useState("discussions")
  const [searchQuery, setSearchQuery] = useState("")

  // Sample discussions for the discussions tab
  const discussions = [
    {
      id: 1,
      title: "How to prepare for a Frontend Developer interview at FAANG?",
      author: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      category: "Interview Tips",
      replies: 24,
      likes: 47,
      lastActivity: "2 hours ago",
    },
    {
      id: 2,
      title: "Best resources to learn React in 2025?",
      author: {
        name: "Sarah Miller",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      category: "Learning Resources",
      replies: 18,
      likes: 32,
      lastActivity: "5 hours ago",
    },
    {
      id: 3,
      title: "My journey from teacher to software engineer in 6 months",
      author: {
        name: "Michael Chen",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      category: "Success Stories",
      replies: 56,
      likes: 128,
      lastActivity: "1 day ago",
    },
    {
      id: 4,
      title: "How to build a portfolio that stands out to recruiters?",
      author: {
        name: "Priya Sharma",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      category: "Portfolio Building",
      replies: 31,
      likes: 64,
      lastActivity: "2 days ago",
    },
  ]

  // Sample study groups for the study groups tab
  const studyGroups = [
    {
      id: 1,
      name: "Frontend Developer Study Group",
      description: "Weekly meetings to practice React, discuss frontend concepts, and review each other's code.",
      members: 28,
      category: "Web Development",
      nextMeeting: "Tomorrow at 7:00 PM EST",
    },
    {
      id: 2,
      name: "Data Structures & Algorithms",
      description: "Daily coding challenges and weekly mock interviews to prepare for technical interviews.",
      members: 42,
      category: "Interview Prep",
      nextMeeting: "Today at 6:00 PM EST",
    },
    {
      id: 3,
      name: "Full Stack Project Collaboration",
      description: "Building a full-stack application together to enhance our portfolios and learn from each other.",
      members: 15,
      category: "Project Based",
      nextMeeting: "Saturday at 10:00 AM EST",
    },
    {
      id: 4,
      name: "Machine Learning Beginners",
      description: "Learning the fundamentals of ML together with hands-on projects and resource sharing.",
      members: 23,
      category: "AI/ML",
      nextMeeting: "Friday at 5:00 PM EST",
    },
  ]

  // Sample mentors for the mentorship tab
  const mentors = [
    {
      id: 1,
      name: "David Wilson",
      role: "Senior Frontend Engineer at Google",
      expertise: ["React", "JavaScript", "System Design"],
      bio: "10+ years of experience in frontend development. Passionate about helping career switchers break into tech.",
      availability: "2 hours/week",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "Jennifer Lee",
      role: "Engineering Manager at Microsoft",
      expertise: ["Career Guidance", "Interview Prep", "Leadership"],
      bio: "Former bootcamp graduate who worked her way up to management. Specializes in helping new developers navigate their first tech roles.",
      availability: "1 hour/week",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      name: "Raj Patel",
      role: "Backend Developer at Amazon",
      expertise: ["Node.js", "Databases", "System Architecture"],
      bio: "Experienced in helping self-taught developers master backend concepts and prepare for technical interviews.",
      availability: "3 hours/week",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  // Sample success stories for the success stories tab
  const successStories = [
    {
      id: 1,
      title: "From Retail to Software Engineer in 8 Months",
      author: {
        name: "James Rodriguez",
        avatar: "/placeholder.svg?height=60&width=60",
      },
      company: "Spotify",
      role: "Frontend Developer",
      excerpt:
        "After 5 years in retail, I decided to make a career change. Using this platform's resources and community support, I landed my dream job at Spotify.",
      likes: 245,
    },
    {
      id: 2,
      title: "How I Went From Zero Coding Experience to Data Scientist",
      author: {
        name: "Emily Chang",
        avatar: "/placeholder.svg?height=60&width=60",
      },
      company: "Netflix",
      role: "Data Scientist",
      excerpt:
        "With no prior coding experience, I followed the AI-generated learning path and connected with mentors who guided me through the journey.",
      likes: 189,
    },
    {
      id: 3,
      title: "Career Switch at 40: My Journey to Becoming a Developer",
      author: {
        name: "Robert Johnson",
        avatar: "/placeholder.svg?height=60&width=60",
      },
      company: "Salesforce",
      role: "Full Stack Developer",
      excerpt:
        "I was worried about switching careers at 40, but this community provided the support and resources I needed to make the transition successfully.",
      likes: 312,
    },
  ]

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-4 text-indigo-600 dark:text-indigo-400">Community</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Connect with peers, mentors, and alumni to share knowledge, get support, and celebrate successes.
          </p>
        </div>

        <Tabs defaultValue="discussions" value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="discussions">Discussions</TabsTrigger>
            <TabsTrigger value="study-groups">Study Groups</TabsTrigger>
            <TabsTrigger value="mentorship">Mentorship</TabsTrigger>
            <TabsTrigger value="success-stories">Success Stories</TabsTrigger>
          </TabsList>

          <TabsContent value="discussions" className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search discussions..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button className="bg-indigo-600 hover:bg-indigo-700" asChild>
                <Link href="/community/discussions/new">
                  <Plus className="mr-2 h-4 w-4" />
                  New Discussion
                </Link>
              </Button>
            </div>

            <div className="space-y-4">
              {discussions.map((discussion) => (
                <Card key={discussion.id} className="hover:border-indigo-300 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400">
                            {discussion.category}
                          </Badge>
                        </div>
                        <h3 className="font-bold text-lg">
                          <Link
                            href={`/community/discussions/${discussion.id}`}
                            className="hover:text-indigo-600 dark:hover:text-indigo-400"
                          >
                            {discussion.title}
                          </Link>
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={discussion.author.avatar} alt={discussion.author.name} />
                            <AvatarFallback>{discussion.author.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span>{discussion.author.name}</span>
                          <span>•</span>
                          <span>Last activity {discussion.lastActivity}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>{discussion.replies}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="h-4 w-4" />
                          <span>{discussion.likes}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center">
              <Button variant="outline">Load More Discussions</Button>
            </div>
          </TabsContent>

          <TabsContent value="study-groups" className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search study groups..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button className="bg-indigo-600 hover:bg-indigo-700" asChild>
                <Link href="/community/study-groups/new">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Study Group
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {studyGroups.map((group) => (
                <Card key={group.id} className="hover:border-indigo-300 transition-colors">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400">
                        {group.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{group.members} members</span>
                      </div>
                    </div>
                    <CardTitle className="mt-2">{group.name}</CardTitle>
                    <CardDescription>{group.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-indigo-600" />
                      <span className="font-medium">Next meeting:</span>
                      <span>{group.nextMeeting}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" asChild>
                      <Link href={`/community/study-groups/${group.id}`}>View Details</Link>
                    </Button>
                    <Button className="bg-indigo-600 hover:bg-indigo-700">Join Group</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Why Join a Study Group?</CardTitle>
                <CardDescription>
                  Study groups provide accountability, support, and collaborative learning opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-full">
                      <Users className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <p className="font-medium">Accountability Partners</p>
                      <p className="text-sm text-muted-foreground">
                        Stay motivated with peers who share your goals and keep each other on track.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-full">
                      <MessageSquare className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <p className="font-medium">Peer Learning</p>
                      <p className="text-sm text-muted-foreground">
                        Explain concepts to others and gain new perspectives to deepen your understanding.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-full">
                      <Award className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <p className="font-medium">Collaborative Projects</p>
                      <p className="text-sm text-muted-foreground">
                        Build impressive portfolio projects together while practicing teamwork and communication.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mentorship" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Find a Mentor</CardTitle>
                <CardDescription>
                  Connect with experienced professionals who can guide you on your career journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {mentors.map((mentor) => (
                    <div
                      key={mentor.id}
                      className="flex flex-col md:flex-row gap-6 pb-6 border-b last:border-0 last:pb-0"
                    >
                      <div className="flex-shrink-0">
                        <Avatar className="h-20 w-20">
                          <AvatarImage src={mentor.avatar} alt={mentor.name} />
                          <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="flex-1 space-y-2">
                        <div>
                          <h3 className="font-bold text-lg">{mentor.name}</h3>
                          <p className="text-muted-foreground">{mentor.role}</p>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {mentor.expertise.map((skill, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <p className="text-sm">{mentor.bio}</p>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="font-medium">Availability:</span>
                          <span>{mentor.availability}</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 justify-center">
                        <Button className="bg-indigo-600 hover:bg-indigo-700">Request Mentorship</Button>
                        <Button variant="outline">View Profile</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Mentors
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Become a Mentor</CardTitle>
                <CardDescription>Share your knowledge and experience to help others succeed in tech</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>As a mentor, you'll have the opportunity to:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-1">•</span>
                      <span>Guide newcomers through their career transition journey</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-1">•</span>
                      <span>Share your industry insights and practical knowledge</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-1">•</span>
                      <span>Build your leadership and communication skills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-1">•</span>
                      <span>Give back to the community and help create more diversity in tech</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Apply to Become a Mentor</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="success-stories" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-medium">Inspiring Success Stories</h2>
              <Button className="bg-indigo-600 hover:bg-indigo-700" asChild>
                <Link href="/community/success-stories/share">
                  <Plus className="mr-2 h-4 w-4" />
                  Share Your Story
                </Link>
              </Button>
            </div>

            <div className="space-y-6">
              {successStories.map((story) => (
                <Card key={story.id} className="hover:border-indigo-300 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={story.author.avatar} alt={story.author.name} />
                          <AvatarFallback>{story.author.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-bold">{story.author.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {story.role} at {story.company}
                          </p>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                        <p className="text-muted-foreground">{story.excerpt}</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <ThumbsUp className="h-4 w-4" />
                          <span>{story.likes} people found this helpful</span>
                        </div>
                        <Button variant="ghost" size="sm" className="gap-1" asChild>
                          <Link href={`/community/success-stories/${story.id}`}>
                            Read Full Story
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Your Success Story Matters</CardTitle>
                <CardDescription>
                  Sharing your journey can inspire and guide others on their path to a tech career
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Whether you've just landed your first tech job or made a significant career advancement, your
                  experience can provide valuable insights and motivation for others in our community.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700" asChild>
                  <Link href="/community/success-stories/share">Share Your Success Story</Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

