"use client"

import Link from "next/link"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MicIcon as MicrophoneIcon,
  Send,
  ThumbsUp,
  ThumbsDown,
  RefreshCw,
  MessageSquare,
  Code,
  Brain,
  Video,
} from "lucide-react"

interface Question {
  id: string
  text: string
  type: "behavioral" | "technical"
}

interface Feedback {
  score: number
  strengths: string[]
  improvements: string[]
  alternativeAnswer: string
}

export default function InterviewPrepPage() {
  const [selectedTab, setSelectedTab] = useState("mock")
  const [jobRole, setJobRole] = useState("")
  const [interviewType, setInterviewType] = useState("both")
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswer, setUserAnswer] = useState("")
  const [feedback, setFeedback] = useState<Feedback | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isGeneratingQuestions, setIsGeneratingQuestions] = useState(false)

  // Sample interview types for the practice tab
  const interviewTypes = [
    {
      id: "behavioral",
      title: "Behavioral Interviews",
      description: "Practice answering questions about your past experiences and soft skills",
      icon: <MessageSquare className="h-10 w-10 text-indigo-600" />,
      questions: [
        "Tell me about a time you faced a challenge at work.",
        "Describe a situation where you had to work with a difficult team member.",
        "Give an example of a goal you reached and how you achieved it.",
      ],
    },
    {
      id: "technical",
      title: "Technical Interviews",
      description: "Practice coding problems and technical questions for your role",
      icon: <Code className="h-10 w-10 text-indigo-600" />,
      questions: [
        "Implement a function to reverse a linked list.",
        "Explain how React's virtual DOM works.",
        "What's the difference between HTTP and HTTPS?",
      ],
    },
    {
      id: "system-design",
      title: "System Design Interviews",
      description: "Practice designing scalable systems and architecture",
      icon: <Brain className="h-10 w-10 text-indigo-600" />,
      questions: [
        "Design a URL shortening service like bit.ly.",
        "How would you design Twitter's backend?",
        "Design a distributed cache system.",
      ],
    },
    {
      id: "video",
      title: "Video Interviews",
      description: "Practice with recorded video responses to improve presentation",
      icon: <Video className="h-10 w-10 text-indigo-600" />,
      questions: [
        "Introduce yourself and explain why you're interested in this role.",
        "What makes you the best candidate for this position?",
        "Where do you see yourself in 5 years?",
      ],
    },
  ]

  async function handleGenerateQuestions() {
    if (!jobRole) return

    setIsGeneratingQuestions(true)

    // In a real app, this would call an API to generate questions
    setTimeout(() => {
      // Sample generated questions
      const generatedQuestions = [
        {
          id: "q1",
          text: "Tell me about your experience with React and how you've used it in previous projects.",
          type: "behavioral" as const,
        },
        {
          id: "q2",
          text: "How would you optimize the performance of a React application?",
          type: "technical" as const,
        },
        {
          id: "q3",
          text: "Describe a situation where you had to learn a new technology quickly. How did you approach it?",
          type: "behavioral" as const,
        },
        {
          id: "q4",
          text: "Implement a function that finds the first non-repeating character in a string.",
          type: "technical" as const,
        },
        {
          id: "q5",
          text: "How do you handle disagreements with team members about technical decisions?",
          type: "behavioral" as const,
        },
      ]

      setQuestions(generatedQuestions)
      setCurrentQuestionIndex(0)
      setUserAnswer("")
      setFeedback(null)
      setIsGeneratingQuestions(false)
    }, 2000)
  }

  async function handleSubmitAnswer() {
    if (!userAnswer || questions.length === 0) return

    setIsLoading(true)

    // In a real app, this would call an API to get feedback
    setTimeout(() => {
      // Sample feedback
      const sampleFeedback = {
        score: 78,
        strengths: ["Good explanation of technical concepts", "Provided specific examples from past experience"],
        improvements: [
          "Could be more concise in your explanation",
          "Consider adding more context about the project's impact",
        ],
        alternativeAnswer:
          "I've worked extensively with React in my previous role at XYZ Company, where I built a dashboard application that improved team productivity by 30%. I used React hooks for state management and implemented performance optimizations like memoization and code splitting that reduced load times by 40%.",
      }

      setFeedback(sampleFeedback)
      setIsLoading(false)
    }, 2000)
  }

  function handleNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
      setUserAnswer("")
      setFeedback(null)
    }
  }

  function handlePrevQuestion() {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1)
      setUserAnswer("")
      setFeedback(null)
    }
  }

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-4 text-indigo-600 dark:text-indigo-400">
            Interview Preparation
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Practice real interview questions with AI feedback to improve your performance and confidence.
          </p>
        </div>

        <Tabs defaultValue="mock" value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="mock">AI Mock Interview</TabsTrigger>
            <TabsTrigger value="practice">Practice by Type</TabsTrigger>
          </TabsList>

          <TabsContent value="mock" className="space-y-6">
            {questions.length === 0 ? (
              <Card>
                <CardHeader>
                  <CardTitle>Set Up Your Mock Interview</CardTitle>
                  <CardDescription>
                    Customize your interview experience based on the job you're targeting
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Job Role</label>
                    <Select value={jobRole} onValueChange={setJobRole}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a job role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="software-developer">Software Developer</SelectItem>
                        <SelectItem value="frontend-developer">Frontend Developer</SelectItem>
                        <SelectItem value="backend-developer">Backend Developer</SelectItem>
                        <SelectItem value="fullstack-developer">Full Stack Developer</SelectItem>
                        <SelectItem value="devops-engineer">DevOps Engineer</SelectItem>
                        <SelectItem value="data-scientist">Data Scientist</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Interview Focus</label>
                    <Select value={interviewType} onValueChange={setInterviewType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select interview type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="behavioral">Behavioral Questions</SelectItem>
                        <SelectItem value="technical">Technical Questions</SelectItem>
                        <SelectItem value="both">Both Types</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={handleGenerateQuestions}
                    disabled={!jobRole || isGeneratingQuestions}
                    className="w-full bg-indigo-600 hover:bg-indigo-700"
                  >
                    {isGeneratingQuestions ? (
                      <>
                        <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                        Generating Questions...
                      </>
                    ) : (
                      <>Start Mock Interview</>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-8">
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <div>
                          <Badge
                            variant={questions[currentQuestionIndex].type === "behavioral" ? "default" : "secondary"}
                            className="mb-2"
                          >
                            {questions[currentQuestionIndex].type === "behavioral" ? "Behavioral" : "Technical"}
                          </Badge>
                          <CardTitle>
                            Question {currentQuestionIndex + 1} of {questions.length}
                          </CardTitle>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={handlePrevQuestion}
                            disabled={currentQuestionIndex === 0}
                          >
                            Previous
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={handleNextQuestion}
                            disabled={currentQuestionIndex === questions.length - 1}
                          >
                            Next
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg font-medium mb-6">{questions[currentQuestionIndex].text}</p>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium">Your Answer:</label>
                        <Textarea
                          placeholder="Type your answer here..."
                          className="min-h-[150px]"
                          value={userAnswer}
                          onChange={(e) => setUserAnswer(e.target.value)}
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" className="flex items-center">
                        <MicrophoneIcon className="mr-2 h-4 w-4" />
                        Voice Answer
                      </Button>
                      <Button
                        onClick={handleSubmitAnswer}
                        disabled={!userAnswer || isLoading}
                        className="bg-indigo-600 hover:bg-indigo-700"
                      >
                        {isLoading ? (
                          <>
                            <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                            Analyzing...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Submit Answer
                          </>
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                <div className="md:col-span-4">
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle>AI Feedback</CardTitle>
                      <CardDescription>
                        {feedback ? "Analysis of your interview response" : "Submit your answer to receive feedback"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {feedback ? (
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm font-medium mb-1">Overall Score:</p>
                            <div className="flex items-center">
                              <div className="w-full bg-muted rounded-full h-2.5">
                                <div
                                  className="bg-indigo-600 h-2.5 rounded-full"
                                  style={{ width: `${feedback.score}%` }}
                                ></div>
                              </div>
                              <span className="ml-2 text-sm font-medium">{feedback.score}%</span>
                            </div>
                          </div>

                          <div>
                            <p className="text-sm font-medium mb-1 flex items-center">
                              <ThumbsUp className="mr-1 h-4 w-4 text-green-500" />
                              Strengths:
                            </p>
                            <ul className="list-disc pl-5 space-y-1">
                              {feedback.strengths.map((strength, index) => (
                                <li key={index} className="text-sm">
                                  {strength}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <p className="text-sm font-medium mb-1 flex items-center">
                              <ThumbsDown className="mr-1 h-4 w-4 text-red-500" />
                              Areas for Improvement:
                            </p>
                            <ul className="list-disc pl-5 space-y-1">
                              {feedback.improvements.map((improvement, index) => (
                                <li key={index} className="text-sm">
                                  {improvement}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <p className="text-sm font-medium mb-1">Suggested Answer:</p>
                            <p className="text-sm text-muted-foreground">{feedback.alternativeAnswer}</p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center h-full py-8 text-center text-muted-foreground">
                          <p>No feedback yet</p>
                          <p className="text-sm mt-1">Submit your answer to receive AI analysis</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="practice" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {interviewTypes.map((type) => (
                <Card key={type.id} className="hover:border-indigo-300 transition-colors">
                  <CardHeader>
                    {type.icon}
                    <CardTitle>{type.title}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-medium mb-2">Sample Questions:</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {type.questions.map((question, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-indigo-600 mt-1">•</span>
                          <span>{question}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700" asChild>
                      <Link href={`/interview-prep/${type.id}`}>Start Practicing</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Interview Tips</CardTitle>
                <CardDescription>Improve your interview performance with these expert tips</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-full">
                      <MessageSquare className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <p className="font-medium">Use the STAR method for behavioral questions</p>
                      <p className="text-sm text-muted-foreground">
                        Structure your answers with Situation, Task, Action, and Result to provide clear, concise
                        responses.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-full">
                      <Code className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <p className="font-medium">Think out loud during technical problems</p>
                      <p className="text-sm text-muted-foreground">
                        Explain your thought process as you work through coding challenges to demonstrate your
                        problem-solving approach.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-full">
                      <Brain className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <p className="font-medium">Research the company thoroughly</p>
                      <p className="text-sm text-muted-foreground">
                        Understand the company's products, culture, and values to tailor your answers and ask informed
                        questions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-full">
                      <Video className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <p className="font-medium">Practice with video recordings</p>
                      <p className="text-sm text-muted-foreground">
                        Record yourself answering questions to review your body language, tone, and verbal tics.
                      </p>
                    </div>
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

