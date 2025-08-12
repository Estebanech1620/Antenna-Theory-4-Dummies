"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import {
  Radio,
  Antenna,
  BookOpen,
  Calculator,
  Settings,
  TrendingUp,
  Users,
  FileText,
  Search,
  ChevronRight,
  Zap,
  Target,
  BarChart
} from "lucide-react"
import Link from "next/link"

export default function Home() {
  const topics = [
    {
      title: "Introduction to Antennas",
      description: "Start your journey with fundamental antenna concepts and theory",
      icon: BookOpen,
      level: "Beginner",
      color: "bg-blue-500",
      href: "/intro"
    },
    {
      title: "Antenna Basics",
      description: "Core principles, radiation patterns, and basic parameters",
      icon: Radio,
      level: "Beginner",
      color: "bg-green-500",
      href: "/basics"
    },
    {
      title: "Types of Antennas",
      description: "Explore different antenna designs and their applications",
      icon: Antenna,
      level: "Intermediate",
      color: "bg-purple-500",
      href: "/types"
    },
    {
      title: "Antenna Arrays",
      description: "Multiple element systems and beamforming techniques",
      icon: Target,
      level: "Advanced",
      color: "bg-orange-500",
      href: "/arrays"
    },
    {
      title: "Antenna Measurements",
      description: "Testing methods, measurement setups, and characterization",
      icon: BarChart,
      level: "Intermediate",
      color: "bg-teal-500",
      href: "/measurements"
    },
    {
      title: "Smith Charts & Impedance",
      description: "Master impedance matching and Smith chart analysis",
      icon: Calculator,
      level: "Advanced",
      color: "bg-red-500",
      href: "/smith-charts"
    },
    {
      title: "Antenna Design",
      description: "Design principles and optimization techniques",
      icon: Settings,
      level: "Advanced",
      color: "bg-indigo-500",
      href: "/design"
    },
    {
      title: "Engineering Careers",
      description: "Career paths and opportunities in antenna engineering",
      icon: TrendingUp,
      level: "Career",
      color: "bg-yellow-500",
      href: "/careers"
    },
    {
      title: "Definitions & Terms",
      description: "Comprehensive glossary of antenna terminology",
      icon: FileText,
      level: "Reference",
      color: "bg-gray-500",
      href: "/definitions"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Antenna className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Antenna Theory For Dummies</h1>
                <p className="text-sm text-gray-600">Simplified Learning Made Easy</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search topics..."
                  className="pl-10 w-64"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">Antenna Theory For Dummies</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A comprehensive, intuitive guide to understanding antennas and electromagnetic theory.
              Learn complex concepts through simplified explanations and interactive content.
            </p>
            <div className="flex items-center justify-center space-x-4 mb-12">
              <Link href="/intro">
                <Button size="lg" className="px-8">
                  Start Learning
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="px-8"
                onClick={() => document.getElementById('topics-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Browse Topics
              </Button>
            </div>

            {/* Einstein Quote */}
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-blue-200">
              <blockquote className="text-lg italic text-gray-700">
                "Everything should be made as simple as possible, but not simpler."
              </blockquote>
              <cite className="text-sm text-gray-500 mt-2 block">— Albert Einstein</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">9</div>
              <p className="text-gray-600">Core Topics</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">∞</div>
              <p className="text-gray-600">Simplified Learning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section id="topics-section" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Antenna Education
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From fundamental concepts to advanced engineering techniques,
              explore our structured learning path designed for all skill levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => {
              const IconComponent = topic.icon
              return (
                <Link key={index} href={topic.href}>
                  <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className={`p-3 rounded-lg ${topic.color} text-white`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <Badge variant="secondary" className="ml-2">
                          {topic.level}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                        {topic.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed">
                        {topic.description}
                      </CardDescription>
                      <Button variant="ghost" className="mt-4 p-0 h-auto font-medium text-blue-600 group-hover:text-blue-700">
                        Learn more →
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Platform?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Simplified Learning</h4>
              <p className="text-gray-600">
                Complex antenna theory made accessible through intuitive explanations
                and visual aids.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Expert Content</h4>
              <p className="text-gray-600">
                Created by PhD antenna engineers with industry experience at
                Boeing, Apple, and Google.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Practical Focus</h4>
              <p className="text-gray-600">
                Real-world applications and practical design techniques
                for immediate use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <Antenna className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold">Antenna Theory For Dummies</span>
              </div>
              <p className="text-gray-400 text-sm">
                Making antenna theory accessible to engineers and students worldwide.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Learning Paths</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Introduction</a></li>
                <li><a href="#" className="hover:text-white">Basics</a></li>
                <li><a href="#" className="hover:text-white">Advanced Topics</a></li>
                <li><a href="#" className="hover:text-white">Design Patterns</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Definitions</a></li>
                <li><a href="#" className="hover:text-white">Calculations</a></li>
                <li><a href="#" className="hover:text-white">References</a></li>
                <li><a href="#" className="hover:text-white">Career Guide</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
                <li><a href="#" className="hover:text-white">Feedback</a></li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-gray-700" />

          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2025 Antenna Theory For Dummies. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
