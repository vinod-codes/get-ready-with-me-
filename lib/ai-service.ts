import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

// Types for the Study Plan generation
interface StudyPlanRequest {
  careerPath: string
  experienceLevel: string
  timeCommitment: string
}

interface Activity {
  title: string
  description: string
  resources?: {
    title: string
    url: string
  }[]
}

interface Week {
  activities: Activity[]
}

export interface StudyPlan {
  title: string
  description: string
  schedule: {
    [month: string]: Week[]
  }
}

// Types for Resume generation
interface ResumeRequest {
  jobDescription: string
  userExperience: string
  userSkills: string
}

export interface Resume {
  name: string
  title: string
  email: string
  phone: string
  summary: string
  skills: string[]
  experience: {
    title: string
    company: string
    date: string
    achievements: string[]
  }[]
}

// Types for Interview Prep
interface InterviewQuestionsRequest {
  jobRole: string
  interviewType: string
}

interface AnswerFeedbackRequest {
  question: string
  answer: string
  jobRole: string
}

// Function to generate a personalized study plan
export async function generateStudyPlan(request: StudyPlanRequest): Promise<StudyPlan> {
  try {
    const prompt = `
      Create a 3-month personalized learning plan for someone who wants to become a ${request.careerPath}.
      Their experience level is: ${request.experienceLevel}
      They can commit ${request.timeCommitment} hours per week to learning.
      
      Structure the response as a detailed JSON object with:
      - title: A title for the learning path
      - description: A short description of the learning path
      - schedule: An object with keys "month1", "month2", "month3", each containing an array of 4 weeks, 
        and each week having an "activities" array with learning tasks including:
          - title: The name of the activity
          - description: What to do and why it's important
          - resources: Array of recommended free resources with title and url
      
      Focus on practical skills and real-world projects. Only include FREE resources like YouTube videos, 
      documentation, and GitHub repositories.
    `

    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt,
      temperature: 0.7,
      maxTokens: 2000,
    })

    // Parse and return the study plan
    return JSON.parse(text)
  } catch (error) {
    console.error("Error generating study plan:", error)

    // Return a fallback plan in case of error
    return {
      title: "Error generating study plan",
      description: "We encountered an error. Please try again.",
      schedule: {
        month1: [{ activities: [{ title: "Error", description: "Please try again" }] }],
        month2: [{ activities: [{ title: "Error", description: "Please try again" }] }],
        month3: [{ activities: [{ title: "Error", description: "Please try again" }] }],
      },
    }
  }
}

// Function to generate resume content based on job description
export async function generateResumeContent(request: ResumeRequest): Promise<Resume> {
  try {
    const prompt = `
      Generate a professional resume tailored to the following job description:
      "${request.jobDescription}"
      
      The person has the following experience:
      "${request.userExperience}"
      
      And these skills:
      "${request.userSkills}"
      
      Format the response as a JSON object with:
      - name: Generate a sample name
      - title: A job title matching the job description
      - email: A sample email
      - phone: A sample phone number
      - summary: A compelling professional summary tailored to the job
      - skills: An array of relevant skills (prioritize those mentioned in both the job description and user's skills)
      - experience: An array of work experiences with:
        - title: Job title
        - company: Company name
        - date: Employment dates
        - achievements: Array of bullet points highlighting relevant accomplishments
      
      Focus on making the resume ATS-friendly and highlighting transferable skills relevant to the job description.
    `

    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt,
      temperature: 0.7,
      maxTokens: 1500,
    })

    // Parse and return the resume
    return JSON.parse(text)
  } catch (error) {
    console.error("Error generating resume:", error)

    // Return a fallback resume in case of error
    return {
      name: "Error generating resume",
      title: "Please try again",
      email: "example@example.com",
      phone: "555-123-4567",
      summary: "We encountered an error generating your resume. Please try again.",
      skills: ["Error", "Please try again"],
      experience: [
        {
          title: "Error",
          company: "Please try again",
          date: "2023 - Present",
          achievements: ["We encountered an error. Please try again."],
        },
      ],
    }
  }
}

// Function to get mock interview questions
export async function getMockInterviewQuestions(request: InterviewQuestionsRequest) {
  try {
    const prompt = `
      Generate 5 realistic interview questions for a ${request.jobRole} position.
      ${
        request.interviewType === "behavioral"
          ? "Focus only on behavioral questions that assess soft skills and past experiences."
          : request.interviewType === "technical"
            ? "Focus only on technical questions that assess hard skills and technical knowledge."
            : "Include a mix of both behavioral and technical questions."
      }
      
      Format the response as a JSON array of objects, each with:
      - id: A unique string ID
      - text: The question text
      - type: Either "behavioral" or "technical"
      
      Make sure the questions are challenging but fair, and representative of real questions asked in interviews for this role.
    `

    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt,
      temperature: 0.8,
      maxTokens: 1000,
    })

    // Parse and return the questions
    return JSON.parse(text)
  } catch (error) {
    console.error("Error generating interview questions:", error)

    // Return fallback questions in case of error
    return [{ id: "err1", text: "Error generating questions. Please try again.", type: "behavioral" }]
  }
}

// Function to get feedback on an interview answer
export async function getAnswerFeedback(request: AnswerFeedbackRequest) {
  try {
    const prompt = `
      Evaluate the following answer to an interview question for a ${request.jobRole} position:
      
      Question: "${request.question}"
      
      Answer: "${request.answer}"
      
      Provide constructive feedback in a JSON format with:
      - score: A numerical score from 0-100 on how effective the answer is
      - strengths: An array of 2-3 strengths in the answer
      - improvements: An array of 2-3 areas for improvement or suggestions
      - alternativeAnswer: A brief example of a strong alternative answer
      
      Be constructive and helpful, focusing on both content and delivery.
    `

    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt,
      temperature: 0.7,
      maxTokens: 1000,
    })

    // Parse and return the feedback
    return JSON.parse(text)
  } catch (error) {
    console.error("Error generating answer feedback:", error)

    // Return fallback feedback in case of error
    return {
      score: 0,
      strengths: ["Unable to analyze answer"],
      improvements: ["Please try again"],
      alternativeAnswer: "We encountered an error analyzing your answer. Please try again.",
    }
  }
}

