// Study Plan Types
export interface StudyPlanRequest {
  careerPath: string
  experienceLevel: string
  timeCommitment: string
}

export interface Activity {
  title: string
  description: string
  resources?: {
    title: string
    url: string
  }[]
}

export interface Week {
  activities: Activity[]
}

export interface StudyPlan {
  title: string
  description: string
  schedule: {
    [month: string]: Week[]
  }
}

// Resume Types
export interface ResumeRequest {
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

// Interview Types
export interface InterviewQuestionsRequest {
  jobRole: string
  interviewType: string
}

export interface Question {
  id: string
  text: string
  type: "behavioral" | "technical"
}

export interface AnswerFeedbackRequest {
  question: string
  answer: string
  jobRole: string
}

export interface Feedback {
  score: number
  strengths: string[]
  improvements: string[]
  alternativeAnswer: string
}

