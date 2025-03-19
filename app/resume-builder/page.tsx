"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { generateResumeContent } from "@/lib/ai-service"
import type { Resume } from "@/lib/types"
import { FileText, Download, RefreshCw } from "lucide-react"

export default function ResumeBuilderPage() {
  const [jobDescription, setJobDescription] = useState("")
  const [userExperience, setUserExperience] = useState("")
  const [userSkills, setUserSkills] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [resumeContent, setResumeContent] = useState<Resume | null>(null)

  async function handleGenerateResume() {
    if (!jobDescription || !userExperience || !userSkills) {
      return
    }

    setIsGenerating(true)

    try {
      const resume = await generateResumeContent({
        jobDescription,
        userExperience,
        userSkills,
      })

      setResumeContent(resume)
    } catch (error) {
      console.error("Failed to generate resume content:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-4">Resume Readiness Builder</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Generate a tailored resume that highlights your relevant skills and experience based on the job description.
          </p>
        </div>

        <Tabs defaultValue="create">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="create">Create Resume</TabsTrigger>
            <TabsTrigger value="preview" disabled={!resumeContent}>
              Preview Resume
            </TabsTrigger>
          </TabsList>

          <TabsContent value="create">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Job Description
                  </CardTitle>
                  <CardDescription>Paste the job description to help AI tailor your resume</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="Paste the job description here..."
                    className="min-h-[150px]"
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Your Experience</CardTitle>
                  <CardDescription>Briefly describe your previous roles and responsibilities</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="E.g., 2 years as junior developer, freelance web design..."
                    className="min-h-[150px]"
                    value={userExperience}
                    onChange={(e) => setUserExperience(e.target.value)}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Your Skills</CardTitle>
                  <CardDescription>List your technical and soft skills</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="E.g., JavaScript, React, teamwork, problem-solving..."
                    className="min-h-[150px]"
                    value={userSkills}
                    onChange={(e) => setUserSkills(e.target.value)}
                  />
                </CardContent>
              </Card>

              <Button
                size="lg"
                onClick={handleGenerateResume}
                disabled={!jobDescription || !userExperience || !userSkills || isGenerating}
                className="w-full md:w-auto md:self-center"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Generating Resume...
                  </>
                ) : (
                  <>Generate Resume</>
                )}
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="preview">
            {resumeContent && (
              <div className="grid gap-6">
                <Card className="bg-white shadow-lg">
                  <CardContent className="p-6">
                    <div className="border-b pb-4 mb-4">
                      <h2 className="text-2xl font-bold">{resumeContent.name}</h2>
                      <p className="text-muted-foreground">{resumeContent.title}</p>
                      <div className="flex gap-3 text-sm mt-2">
                        <p>{resumeContent.email}</p>
                        <p>{resumeContent.phone}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2">Professional Summary</h3>
                      <p>{resumeContent.summary}</p>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2">Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {resumeContent.skills.map((skill, index) => (
                          <span key={index} className="bg-muted px-2 py-1 rounded text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2">Experience</h3>
                      {resumeContent.experience.map((exp, index) => (
                        <div key={index} className="mb-4">
                          <h4 className="font-medium">
                            {exp.title} | {exp.company}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-1">{exp.date}</p>
                          <ul className="list-disc pl-5 space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={() => window.print()}>
                      <Download className="mr-2 h-4 w-4" />
                      Download as PDF
                    </Button>
                    <Button variant="outline" onClick={() => document.execCommand("copy")}>
                      Copy to Clipboard
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

