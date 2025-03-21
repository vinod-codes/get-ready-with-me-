import { use } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, BookOpen, Code, Laptop, Target, Clock, Users, Star, CheckCircle2, PlayCircle, Bookmark, MessageSquare, GitBranch, Layout, Database, Server, Cloud, Shield, Terminal, ChevronRight, FileCode, Play, Pause, RefreshCw } from "lucide-react"
import { TopicContent } from "./topic-content"

export default function TopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const resolvedParams = use(params)
  const topic = resolvedParams.topic

  return <TopicContent topic={topic} />
} 