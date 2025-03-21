"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, BookOpen, Code, Laptop, Target, Clock, Users, Star, CheckCircle2, PlayCircle, Bookmark, MessageSquare, GitBranch, Layout, Database, Server, Cloud, Shield, Terminal, ChevronRight, FileCode, Play, Pause, RefreshCw } from "lucide-react"
import { CodeEditor } from "@/components/code-editor"

interface TopicContentProps {
  topic: string
}

export function TopicContent({ topic }: TopicContentProps) {
  const [activeTab, setActiveTab] = useState("concepts")
  const [terminalInput, setTerminalInput] = useState("")
  const [terminalOutput, setTerminalOutput] = useState<string[]>([])
  const [currentStep, setCurrentStep] = useState(0)
  const [code, setCode] = useState("")
  const [isPlaying, setIsPlaying] = useState(false)
  const [exerciseStatus, setExerciseStatus] = useState<"not-started" | "in-progress" | "completed">("not-started")

  // Mock data for different topics
  const topicData = {
    "html-css": {
      title: "HTML5 & CSS3",
      description: "Master the fundamentals of web development",
      concepts: [
        {
          title: "Semantic HTML",
          content: `Semantic HTML elements clearly describe their meaning to both the browser and the developer.

Examples:
<header> - Defines a header for a document or section
<nav> - Defines navigation links
<main> - Specifies the main content of a document
<article> - Defines independent, self-contained content
<aside> - Defines content aside from the page content
<footer> - Defines a footer for a document or section`,
          terminal: {
            steps: [
              {
                command: "mkdir semantic-html",
                output: "Created directory 'semantic-html'",
              },
              {
                command: "cd semantic-html",
                output: "Changed directory to 'semantic-html'",
              },
              {
                command: "touch index.html",
                output: "Created file 'index.html'",
              },
            ],
          },
          exercise: {
            description: "Create a semantic HTML structure for a blog post",
            initialCode: `<!DOCTYPE html>
<html>
<head>
  <title>My Blog Post</title>
</head>
<body>
  <!-- Add your semantic HTML here -->
</body>
</html>`,
            solution: `<!DOCTYPE html>
<html>
<head>
  <title>My Blog Post</title>
</head>
<body>
  <header>
    <h1>My Blog Post</h1>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <article>
      <h2>Article Title</h2>
      <p>Article content goes here...</p>
    </article>
    
    <aside>
      <h3>Related Posts</h3>
      <ul>
        <li>Post 1</li>
        <li>Post 2</li>
      </ul>
    </aside>
  </main>
  
  <footer>
    <p>&copy; 2024 My Blog</p>
  </footer>
</body>
</html>`,
          },
        },
        {
          title: "CSS Flexbox",
          content: `Flexbox is a one-dimensional layout method for arranging items in rows or columns.

Key Properties:
display: flex
flex-direction: row | column
justify-content: flex-start | flex-end | center | space-between | space-around
align-items: flex-start | flex-end | center | stretch | baseline
flex-wrap: nowrap | wrap | wrap-reverse`,
          terminal: {
            steps: [
              {
                command: "mkdir flexbox-demo",
                output: "Created directory 'flexbox-demo'",
              },
              {
                command: "cd flexbox-demo",
                output: "Changed directory to 'flexbox-demo'",
              },
              {
                command: "touch styles.css",
                output: "Created file 'styles.css'",
              },
            ],
          },
          exercise: {
            description: "Create a responsive navigation bar using Flexbox",
            initialCode: `.nav {
  /* Add your Flexbox styles here */
}`,
            solution: `.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f8f9fa;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-links a {
  text-decoration: none;
  color: #333;
}

@media (max-width: 768px) {
  .nav {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-links {
    flex-direction: column;
    align-items: center;
  }
}`,
          },
        },
      ],
    },
    "javascript": {
      title: "JavaScript Basics",
      description: "Learn the fundamentals of JavaScript programming",
      concepts: [
        {
          title: "Variables & Data Types",
          content: `JavaScript has several data types:

1. Primitive Types:
   - String: "Hello, World!"
   - Number: 42, 3.14
   - Boolean: true, false
   - Undefined: undefined
   - Null: null
   - Symbol: Symbol("description")
   - BigInt: 9007199254740991n

2. Object Types:
   - Object: { key: "value" }
   - Array: [1, 2, 3]
   - Function: function() {}`,
          terminal: {
            steps: [
              {
                command: "node",
                output: "Welcome to Node.js v18.x.x",
              },
              {
                command: "let message = 'Hello, World!'",
                output: "undefined",
              },
              {
                command: "console.log(message)",
                output: "Hello, World!",
              },
            ],
          },
          exercise: {
            description: "Create a function that handles different data types",
            initialCode: `function handleDataTypes(value) {
  // Add your code here
  // Return the type and a formatted string
}`,
            solution: `function handleDataTypes(value) {
  const type = typeof value;
  let formattedString = '';
  
  switch(type) {
    case 'string':
      formattedString = \`String: "\${value}"\`;
      break;
    case 'number':
      formattedString = \`Number: \${value}\`;
      break;
    case 'boolean':
      formattedString = \`Boolean: \${value}\`;
      break;
    case 'object':
      if (value === null) {
        formattedString = 'Null';
      } else if (Array.isArray(value)) {
        formattedString = \`Array: [\${value.join(', ')}]\`;
      } else {
        formattedString = \`Object: \${JSON.stringify(value)}\`;
      }
      break;
    default:
      formattedString = \`\${type}: \${value}\`;
  }
  
  return { type, formattedString };
}`,
          },
        },
      ],
    },
    "react": {
      title: "React.js",
      description: "Build modern web applications with React",
      concepts: [
        {
          title: "Components & Props",
          content: `React components are reusable UI pieces that can be composed together.

1. Function Component:
   function Welcome(props) {
     return <h1>Hello, {props.name}</h1>;
   }

2. Class Component:
   class Welcome extends React.Component {
     render() {
       return <h1>Hello, {this.props.name}</h1>;
     }
   }

3. Props:
   - Read-only data passed to components
   - Can be any JavaScript value
   - Accessed via props object`,
          terminal: {
            steps: [
              {
                command: "npx create-react-app my-app",
                output: "Creating a new React app...",
              },
              {
                command: "cd my-app",
                output: "Changed directory to 'my-app'",
              },
              {
                command: "npm start",
                output: "Starting the development server...",
              },
            ],
          },
          exercise: {
            description: "Create a reusable card component with props",
            initialCode: `function Card({ title, content, image }) {
  // Add your component code here
}`,
            solution: `function Card({ title, content, image }) {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-image" />}
      <div className="card-content">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}

// Usage example:
<Card 
  title="My Card"
  content="This is a reusable card component"
  image="https://example.com/image.jpg"
/>`,
          },
        },
      ],
    },
  }

  const currentTopic = topicData[topic as keyof typeof topicData] || {
    title: "Topic Not Found",
    description: "",
    concepts: [],
  }

  const handleTerminalCommand = () => {
    if (!terminalInput.trim()) return

    const currentConcept = currentTopic.concepts[currentStep]
    const terminalStep = currentConcept?.terminal?.steps.find(
      (step) => step.command === terminalInput
    )

    if (terminalStep) {
      setTerminalOutput((prev) => [...prev, `$ ${terminalInput}`, terminalStep.output])
      setTerminalInput("")
    } else {
      setTerminalOutput((prev) => [...prev, `$ ${terminalInput}`, "Command not found"])
      setTerminalInput("")
    }
  }

  const handleExerciseStart = (concept: any) => {
    setCode(concept.exercise.initialCode)
    setExerciseStatus("in-progress")
    setIsPlaying(false)
  }

  const handleExerciseSubmit = (concept: any) => {
    // Simple validation - in a real app, you'd want more robust checking
    if (code.trim() === concept.exercise.solution.trim()) {
      setExerciseStatus("completed")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="container mx-auto py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">{currentTopic.title}</h1>
              <p className="text-muted-foreground">{currentTopic.description}</p>
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
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="concepts">Concepts</TabsTrigger>
            <TabsTrigger value="practice">Practice</TabsTrigger>
          </TabsList>

          <TabsContent value="concepts" className="space-y-6">
            {currentTopic.concepts.map((concept, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{concept.title}</CardTitle>
                  <CardDescription>Learn about {concept.title.toLowerCase()}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="prose prose-sm max-w-none">
                      <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                        <code>{concept.content}</code>
                      </pre>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-medium">Try it out:</h4>
                      <div className="bg-black text-white p-4 rounded-lg font-mono">
                        <div className="space-y-2">
                          {terminalOutput.map((line, i) => (
                            <div key={i} className="text-sm">
                              {line}
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <ChevronRight className="h-4 w-4" />
                          <input
                            type="text"
                            value={terminalInput}
                            onChange={(e) => setTerminalInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleTerminalCommand()}
                            className="bg-transparent border-none outline-none flex-1 text-sm"
                            placeholder="Enter command..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="practice">
            <Card>
              <CardHeader>
                <CardTitle>Practice Exercises</CardTitle>
                <CardDescription>Test your knowledge with interactive exercises</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {currentTopic.concepts.map((concept, index) => (
                    <div key={index} className="p-4 rounded-lg bg-muted/50">
                      <h4 className="font-medium mb-2">{concept.title} Practice</h4>
                      <p className="text-sm text-muted-foreground mb-4">{concept.exercise.description}</p>
                      
                      <div className="space-y-4">
                        <CodeEditor
                          value={code}
                          onChange={(value) => setCode(value || "")}
                          language={concept.title.toLowerCase().includes("html") ? "html" : 
                                   concept.title.toLowerCase().includes("css") ? "css" : 
                                   concept.title.toLowerCase().includes("react") ? "typescript" : "javascript"}
                        />
                        
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            onClick={() => handleExerciseStart(concept)}
                            disabled={exerciseStatus === "completed"}
                          >
                            <Play className="h-4 w-4 mr-2" />
                            Start Exercise
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => setIsPlaying(!isPlaying)}
                            disabled={exerciseStatus !== "in-progress"}
                          >
                            {isPlaying ? (
                              <>
                                <Pause className="h-4 w-4 mr-2" />
                                Pause
                              </>
                            ) : (
                              <>
                                <Play className="h-4 w-4 mr-2" />
                                Play
                              </>
                            )}
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => setCode(concept.exercise.initialCode)}
                          >
                            <RefreshCw className="h-4 w-4 mr-2" />
                            Reset
                          </Button>
                          <Button
                            onClick={() => handleExerciseSubmit(concept)}
                            disabled={exerciseStatus === "completed"}
                          >
                            Submit
                          </Button>
                        </div>
                        
                        {exerciseStatus === "completed" && (
                          <div className="p-4 bg-green-500/10 text-green-500 rounded-lg">
                            <CheckCircle2 className="h-5 w-5 inline mr-2" />
                            Exercise completed successfully!
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
} 