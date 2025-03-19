"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function OnboardingPage() {
  const [step, setStep] = useState(1)
  const [careerGoal, setCareerGoal] = useState("")
  const [experienceLevel, setExperienceLevel] = useState("")
  const [timeCommitment, setTimeCommitment] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
    } else {
      handleComplete()
    }
  }

  const handleComplete = () => {
    setIsLoading(true)

    // In a real app, this would save the user preferences to a database
    // For demo purposes, we'll just store in localStorage
    const preferences = {
      careerGoal,
      experienceLevel,
      timeCommitment,
    }

    localStorage.setItem("userPreferences", JSON.stringify(preferences))

    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 1500)
  }

  const isStepComplete = () => {
    if (step === 1) return !!careerGoal
    if (step === 2) return !!experienceLevel
    if (step === 3) return !!timeCommitment
    return false
  }

  return (
    <div className="container max-w-screen-md mx-auto py-10 px-4 md:px-6">
      <div className="flex flex-col gap-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Let&apos;s personalize your experience</h1>
          <p className="text-muted-foreground">
            Help us create a tailored learning path that matches your goals and needs
          </p>
        </div>

        <div className="flex justify-between items-center mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  s < step
                    ? "bg-primary text-primary-foreground"
                    : s === step
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                }`}
              >
                {s < step ? <CheckCircle className="h-5 w-5" /> : s}
              </div>
              <span className="text-xs mt-1 text-muted-foreground">
                {s === 1 ? "Career Goal" : s === 2 ? "Experience" : "Schedule"}
              </span>
            </div>
          ))}
        </div>

        <Card>
          {step === 1 && (
            <>
              <CardHeader>
                <CardTitle>What&apos;s your career goal?</CardTitle>
                <CardDescription>Select the tech career path you want to pursue</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup value={careerGoal} onValueChange={setCareerGoal}>
                  <div className="grid gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="software-developer" id="software-developer" />
                      <Label htmlFor="software-developer" className="flex flex-col">
                        <span className="font-medium">Software Developer</span>
                        <span className="text-sm text-muted-foreground">
                          Build web and mobile applications using modern frameworks
                        </span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="devops-engineer" id="devops-engineer" />
                      <Label htmlFor="devops-engineer" className="flex flex-col">
                        <span className="font-medium">DevOps Engineer</span>
                        <span className="text-sm text-muted-foreground">
                          Automate infrastructure and deployment pipelines
                        </span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cloud-engineer" id="cloud-engineer" />
                      <Label htmlFor="cloud-engineer" className="flex flex-col">
                        <span className="font-medium">Cloud Engineer</span>
                        <span className="text-sm text-muted-foreground">
                          Design and implement cloud-based solutions (AWS, Azure, GCP)
                        </span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="ai-ml-engineer" id="ai-ml-engineer" />
                      <Label htmlFor="ai-ml-engineer" className="flex flex-col">
                        <span className="font-medium">AI/ML Engineer</span>
                        <span className="text-sm text-muted-foreground">
                          Build intelligent systems and machine learning models
                        </span>
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </CardContent>
            </>
          )}

          {step === 2 && (
            <>
              <CardHeader>
                <CardTitle>What&apos;s your experience level?</CardTitle>
                <CardDescription>This helps us tailor the content to your knowledge level</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup value={experienceLevel} onValueChange={setExperienceLevel}>
                  <div className="grid gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="absolute-beginner" id="absolute-beginner" />
                      <Label htmlFor="absolute-beginner" className="flex flex-col">
                        <span className="font-medium">Absolute Beginner</span>
                        <span className="text-sm text-muted-foreground">No coding experience at all</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="some-knowledge" id="some-knowledge" />
                      <Label htmlFor="some-knowledge" className="flex flex-col">
                        <span className="font-medium">Some Knowledge</span>
                        <span className="text-sm text-muted-foreground">Familiar with basic programming concepts</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="career-switcher" id="career-switcher" />
                      <Label htmlFor="career-switcher" className="flex flex-col">
                        <span className="font-medium">Career Switcher</span>
                        <span className="text-sm text-muted-foreground">Professional experience in another field</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="some-experience" id="some-experience" />
                      <Label htmlFor="some-experience" className="flex flex-col">
                        <span className="font-medium">Some Tech Experience</span>
                        <span className="text-sm text-muted-foreground">
                          Worked on personal projects or have some professional experience
                        </span>
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </CardContent>
            </>
          )}

          {step === 3 && (
            <>
              <CardHeader>
                <CardTitle>How much time can you commit?</CardTitle>
                <CardDescription>We&apos;ll create a schedule that fits your availability</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup value={timeCommitment} onValueChange={setTimeCommitment}>
                  <div className="grid gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="5-10" id="5-10" />
                      <Label htmlFor="5-10" className="flex flex-col">
                        <span className="font-medium">5-10 hours per week</span>
                        <span className="text-sm text-muted-foreground">
                          I can study a few hours on evenings and weekends
                        </span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="10-20" id="10-20" />
                      <Label htmlFor="10-20" className="flex flex-col">
                        <span className="font-medium">10-20 hours per week</span>
                        <span className="text-sm text-muted-foreground">
                          I can dedicate significant time to learning
                        </span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="20+" id="20+" />
                      <Label htmlFor="20+" className="flex flex-col">
                        <span className="font-medium">20+ hours per week</span>
                        <span className="text-sm text-muted-foreground">
                          I&apos;m studying full-time or close to it
                        </span>
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </CardContent>
            </>
          )}

          <CardFooter>
            <Button onClick={handleNext} disabled={!isStepComplete() || isLoading} className="w-full">
              {isLoading ? "Creating your plan..." : step === 3 ? "Complete Setup" : "Continue"}
              {!isLoading && step < 3 && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

