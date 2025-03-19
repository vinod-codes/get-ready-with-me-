"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { FileText, Search, Briefcase, Building, MapPin, Clock, Plus, CheckCircle, Calendar } from "lucide-react"

export default function JobApplicationsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTab, setSelectedTab] = useState("tools")

  // Sample job applications for the tracking tab
  const applications = [
    {
      id: 1,
      company: "TechCorp",
      position: "Frontend Developer",
      location: "Remote",
      appliedDate: "2025-03-15",
      status: "interview",
      nextStep: "Technical Interview on April 2, 2025",
    },
    {
      id: 2,
      company: "InnoSoft",
      position: "React Developer",
      location: "New York, NY",
      appliedDate: "2025-03-10",
      status: "applied",
      nextStep: "Waiting for response",
    },
    {
      id: 3,
      company: "WebFuture",
      position: "UI Developer",
      location: "San Francisco, CA",
      appliedDate: "2025-03-05",
      status: "rejected",
      nextStep: "Application not selected",
    },
  ]

  // Sample job listings for the browse tab
  const jobListings = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechStart Inc.",
      location: "Remote",
      salary: "$80,000 - $100,000",
      posted: "2 days ago",
      match: "95% match",
      skills: ["React", "JavaScript", "CSS", "HTML"],
    },
    {
      id: 2,
      title: "Junior Web Developer",
      company: "Digital Solutions",
      location: "New York, NY",
      salary: "$70,000 - $85,000",
      posted: "1 week ago",
      match: "87% match",
      skills: ["JavaScript", "HTML", "CSS", "Git"],
    },
    {
      id: 3,
      title: "React Developer",
      company: "InnoTech",
      location: "Remote",
      salary: "$90,000 - $110,000",
      posted: "3 days ago",
      match: "92% match",
      skills: ["React", "Redux", "TypeScript", "Node.js"],
    },
    {
      id: 4,
      title: "Frontend Engineer",
      company: "SoftVision",
      location: "San Francisco, CA",
      salary: "$100,000 - $130,000",
      posted: "5 days ago",
      match: "83% match",
      skills: ["JavaScript", "React", "Vue.js", "Webpack"],
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "applied":
        return (
          <Badge variant="outline" className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
            Applied
          </Badge>
        )
      case "interview":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
            Interview
          </Badge>
        )
      case "rejected":
        return (
          <Badge variant="outline" className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
            Rejected
          </Badge>
        )
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-4 text-indigo-600 dark:text-indigo-400">
            Job Applications
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Create tailored resumes, browse job listings, and track your applications in one place.
          </p>
        </div>

        <Tabs defaultValue="tools" value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="tools">Application Tools</TabsTrigger>
            <TabsTrigger value="browse">Browse Jobs</TabsTrigger>
            <TabsTrigger value="tracking">Track Applications</TabsTrigger>
          </TabsList>

          <TabsContent value="tools" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:border-indigo-300 transition-colors">
                <CardHeader>
                  <FileText className="h-10 w-10 text-indigo-600 mb-2" />
                  <CardTitle>AI Resume Builder</CardTitle>
                  <CardDescription>
                    Generate a tailored resume based on job descriptions and your experience
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our AI analyzes job listings and customizes your resume to highlight relevant skills and experience.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/job-applications/resume">Create Resume</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="hover:border-indigo-300 transition-colors">
                <CardHeader>
                  <FileText className="h-10 w-10 text-indigo-600 mb-2" />
                  <CardTitle>Cover Letter Assistant</CardTitle>
                  <CardDescription>Generate personalized cover letters that stand out to employers</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our AI creates compelling cover letters tailored to specific job descriptions and companies.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/job-applications/cover-letter">Write Cover Letter</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Application Checklist</CardTitle>
                <CardDescription>Ensure your applications are complete and professional</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Tailor your resume for each job</p>
                      <p className="text-sm text-muted-foreground">
                        Customize your resume to match the specific requirements of each job posting
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Write a personalized cover letter</p>
                      <p className="text-sm text-muted-foreground">
                        Explain why you're interested in the role and how your skills match their needs
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Update your portfolio</p>
                      <p className="text-sm text-muted-foreground">
                        Showcase relevant projects that demonstrate your skills and experience
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Research the company</p>
                      <p className="text-sm text-muted-foreground">
                        Learn about the company's mission, values, and culture before applying
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Prepare for interviews</p>
                      <p className="text-sm text-muted-foreground">
                        Practice common interview questions and prepare questions to ask the interviewer
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="browse" className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search jobs by title, company, or skills..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline">Filters</Button>
            </div>

            <div className="space-y-4">
              {jobListings.map((job) => (
                <Card key={job.id} className="hover:border-indigo-300 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-lg">{job.title}</h3>
                          <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400">
                            {job.match}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Building className="h-4 w-4" />
                            <span>{job.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            <span>{job.salary}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>Posted {job.posted}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1 pt-2">
                          {job.skills.map((skill, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-2 md:flex-col">
                        <Button className="flex-1" asChild>
                          <Link href={`/job-applications/apply/${job.id}`}>Apply Now</Link>
                        </Button>
                        <Button variant="outline" className="flex-1">
                          Save
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center">
              <Button variant="outline">Load More Jobs</Button>
            </div>
          </TabsContent>

          <TabsContent value="tracking" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-medium">Your Applications</h2>
              <Button asChild>
                <Link href="/job-applications/new">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Application
                </Link>
              </Button>
            </div>

            {applications.length > 0 ? (
              <div className="space-y-4">
                {applications.map((app) => (
                  <Card key={app.id} className="hover:border-indigo-300 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold text-lg">{app.position}</h3>
                            {getStatusBadge(app.status)}
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Building className="h-4 w-4" />
                              <span>{app.company}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{app.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>Applied on {new Date(app.appliedDate).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <p className="text-sm">
                            <span className="font-medium">Next Step:</span> {app.nextStep}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/job-applications/edit/${app.id}`}>Edit</Link>
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/job-applications/details/${app.id}`}>Details</Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                  <FileText className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">No applications yet</h3>
                  <p className="text-muted-foreground mb-4">
                    Start tracking your job applications to stay organized during your job search.
                  </p>
                  <Button asChild>
                    <Link href="/job-applications/new">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Your First Application
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Application Statistics</CardTitle>
                <CardDescription>Track your job search progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-indigo-50 dark:bg-indigo-950/30 p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">{applications.length}</p>
                    <p className="text-sm text-muted-foreground">Total Applications</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                      {applications.filter((a) => a.status === "interview").length}
                    </p>
                    <p className="text-sm text-muted-foreground">Interviews</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">33%</p>
                    <p className="text-sm text-muted-foreground">Response Rate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

