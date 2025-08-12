import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Settings,
  Zap,
  ChevronRight,
  CheckCircle,
  Clock,
  Users,
  TrendingUp,
  Target,
  Compass,
  Radio,
  Satellite,
  Wifi,
  Signal,
  Circle,
  Cpu
} from "lucide-react"
import Link from "next/link"

export default function DesignPage() {
  const designPrinciples = [
    {
      title: "Resonance",
      description: "Antenna operates at natural frequency",
      icon: Target,
      details: "Antenna length related to wavelength for optimal performance",
      importance: "Critical for impedance matching and efficiency"
    },
    {
      title: "Impedance Matching",
      description: "Match antenna to transmission line",
      icon: Signal,
      details: "Ensure maximum power transfer with minimal reflection",
      importance: "Affects VSWR, efficiency, and bandwidth"
    },
    {
      title: "Radiation Pattern",
      description: "Control direction of electromagnetic radiation",
      icon: Compass,
      details: "Shape beam for specific coverage requirements",
      importance: "Determines coverage area and interference rejection"
    },
    {
      title: "Bandwidth",
      description: "Frequency range of operation",
      icon: Wifi,
      details: "Trade-off between bandwidth and performance",
      importance: "Affects system flexibility and frequency agility"
    }
  ]

  const designProcess = [
    {
      step: "Requirements Analysis",
      description: "Define performance specifications",
      activities: "Gain, bandwidth, pattern, size, cost, environment",
      output: "Detailed specification document"
    },
    {
      step: "Initial Design",
      description: "Choose antenna type and topology",
      activities: "Literature review, trade studies, concept selection",
      output: "Preliminary design concept"
    },
    {
      step: "Modeling & Simulation",
      description: "Analyze performance using software tools",
      activities: "Electromagnetic simulation, optimization, sensitivity analysis",
      output: "Simulated performance results"
    },
    {
      step: "Prototype & Testing",
      description: "Build and test physical prototype",
      activities: "Fabrication, measurement, performance validation",
      output: "Tested prototype with performance data"
    },
    {
      step: "Optimization",
      description: "Refine design based on results",
      activities: "Parameter tuning, trade-off analysis, final optimization",
      output: "Optimized final design"
    }
  ]

  const optimizationTechniques = [
    {
      technique: "Parameter Sweeping",
      description: "Systematically vary design parameters",
      advantages: "Simple, reliable, finds global optimum",
      disadvantages: "Time-consuming, limited parameter space"
    },
    {
      technique: "Genetic Algorithms",
      description: "Evolutionary optimization approach",
      advantages: "Global optimization, handles complex problems",
      disadvantages: "Computationally expensive, parameter tuning"
    },
    {
      technique: "Gradient-Based",
      description: "Use derivatives for optimization",
      advantages: "Fast convergence, efficient for smooth functions",
      disadvantages: "Local optima, requires derivatives"
    },
    {
      technique: "Machine Learning",
      description: "AI-powered optimization",
      advantages: "Fast prediction, handles complex relationships",
      disadvantages: "Training data required, black-box approach"
    }
  ]

  const designTools = [
    {
      tool: "HFSS (Ansys)",
      category: "3D Full-Wave Simulation",
      description: "Industry standard for antenna design and analysis",
      strengths: "High accuracy, complex geometries, advanced features",
      limitations: "Expensive, steep learning curve, long simulation times"
    },
    {
      tool: "CST Studio Suite",
      category: "3D Full-Wave Simulation",
      description: "Comprehensive electromagnetic simulation platform",
      strengths: "User-friendly, good performance, wide applications",
      limitations: "Cost, resource intensive, some accuracy trade-offs"
    },
    {
      tool: "ADS (Keysight)",
      category: "Circuit & System Simulation",
      description: "RF circuit design and system-level simulation",
      strengths: "Circuit design, system integration, measurement interface",
      limitations: "Limited 3D capabilities, antenna-specific features"
    },
    {
      tool: "Sonnet",
      category: "Planar EM Simulation",
      description: "Specialized for planar and layered structures",
      strengths: "Fast, accurate for planar designs, cost-effective",
      limitations: "Limited to planar geometries, 3D structures"
    }
  ]

  const commonChallenges = [
    {
      challenge: "Size Constraints",
      description: "Limited physical space for antenna",
      solutions: "Miniaturization techniques, meandering, fractal designs",
      examples: "Mobile phones, IoT devices, wearable electronics"
    },
    {
      challenge: "Multiband Operation",
      description: "Operate at multiple frequency bands",
      solutions: "Multi-resonant structures, frequency selective surfaces",
      examples: "Smartphones, base stations, satellite terminals"
    },
    {
      challenge: "Environmental Effects",
      description: "Performance degradation in harsh environments",
      solutions: "Environmental protection, material selection, testing",
      examples: "Outdoor installations, automotive, aerospace"
    },
    {
      challenge: "Manufacturing Tolerances",
      description: "Variations in production affect performance",
      solutions: "Robust design, tolerance analysis, quality control",
      examples: "Mass production, cost-sensitive applications"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-indigo-100 rounded-full">
                <Settings className="h-12 w-12 text-indigo-600" />
              </div>
            </div>
            <Badge variant="secondary" className="mb-4">Advanced Level</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Antenna Design
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Master the art and science of antenna design. Learn systematic approaches to
              creating antennas that meet specific requirements, from concept to final
              optimization. Understand the trade-offs and techniques that lead to successful designs.
            </p>

            <div className="flex items-center justify-center space-x-8 mb-8">
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="h-5 w-5" />
                <span>150 min read</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Users className="h-5 w-5" />
                <span>4,500+ students</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Target className="h-5 w-5" />
                <span>5 design steps</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">The Art of Antenna Design</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Antenna design is both an art and a science, requiring deep understanding of
                  electromagnetic theory, practical engineering constraints, and creative problem-solving.
                  Successful designs balance theoretical performance with real-world limitations.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The design process involves multiple iterations, trade-off analysis, and careful
                  consideration of requirements. Modern design relies heavily on computer simulation
                  and optimization, but fundamental understanding remains essential for good design decisions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="principles" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="principles">Principles</TabsTrigger>
                <TabsTrigger value="process">Design Process</TabsTrigger>
                <TabsTrigger value="optimization">Optimization</TabsTrigger>
                <TabsTrigger value="tools">Design Tools</TabsTrigger>
                <TabsTrigger value="challenges">Challenges</TabsTrigger>
              </TabsList>

              <TabsContent value="principles" className="mt-8">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                    Fundamental Design Principles
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {designPrinciples.map((principle, index) => {
                      const IconComponent = principle.icon
                      return (
                        <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                          <CardHeader className="pb-3">
                            <div className="flex items-center space-x-3 mb-3">
                              <div className="p-3 bg-blue-100 rounded-lg">
                                <IconComponent className="h-6 w-6 text-blue-600" />
                              </div>
                              <CardTitle className="text-lg">{principle.title}</CardTitle>
                            </div>
                            <CardDescription>{principle.description}</CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <p className="text-sm text-gray-600">{principle.details}</p>
                            <div className="bg-gray-50 p-3 rounded">
                              <p className="text-xs font-medium text-gray-700">Importance:</p>
                              <p className="text-xs text-gray-600">{principle.importance}</p>
                            </div>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">
                      Design Trade-offs
                    </h3>
                    <p className="text-blue-800">
                      Antenna design involves constant trade-offs between conflicting requirements.
                      Higher gain often means larger size, wider bandwidth may reduce efficiency,
                      and smaller size typically reduces performance. Understanding these relationships
                      is key to successful design.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="process" className="mt-8">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                    Systematic Design Process
                  </h2>

                  <div className="space-y-6">
                    {designProcess.map((step, index) => (
                      <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                        <CardHeader>
                          <div className="flex items-center space-x-4">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
                              {index + 1}
                            </div>
                            <div>
                              <CardTitle className="text-lg">{step.step}</CardTitle>
                              <CardDescription>{step.description}</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="bg-gray-50 p-3 rounded">
                            <p className="text-xs font-medium text-gray-700">Activities:</p>
                            <p className="text-xs text-gray-600">{step.activities}</p>
                          </div>
                          <div className="bg-blue-50 p-3 rounded">
                            <p className="text-xs font-medium text-blue-700">Output:</p>
                            <p className="text-xs text-blue-600">{step.output}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-400 p-6">
                    <h3 className="text-lg font-semibold text-green-900 mb-2">
                      Iterative Nature
                    </h3>
                    <p className="text-green-800">
                      Design is rarely linear - expect to iterate between steps as you discover
                      constraints and opportunities. Early prototypes often reveal issues that
                      require revisiting earlier design decisions. Embrace iteration as part
                      of the creative process.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="optimization" className="mt-8">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                    Optimization Techniques
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {optimizationTechniques.map((technique, index) => (
                      <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                        <CardHeader>
                          <CardTitle className="text-lg">{technique.technique}</CardTitle>
                          <CardDescription>{technique.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="bg-green-50 p-3 rounded">
                            <p className="text-xs font-medium text-green-700">Advantages:</p>
                            <p className="text-xs text-green-600">{technique.advantages}</p>
                          </div>
                          <div className="bg-red-50 p-3 rounded">
                            <p className="text-xs font-medium text-red-700">Disadvantages:</p>
                            <p className="text-xs text-red-600">{technique.disadvantages}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                    <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                      Multi-Objective Optimization
                    </h3>
                    <p className="text-yellow-800">
                      Real antenna designs often have multiple conflicting objectives (gain vs. size,
                      bandwidth vs. efficiency). Multi-objective optimization techniques like Pareto
                      front analysis help identify the best compromise solutions.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="tools" className="mt-8">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                    Design Tools & Software
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {designTools.map((tool, index) => (
                      <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                        <CardHeader>
                          <CardTitle className="text-lg">{tool.tool}</CardTitle>
                          <CardDescription className="text-sm text-blue-600">{tool.category}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <p className="text-sm text-gray-600">{tool.description}</p>
                          <div className="bg-green-50 p-3 rounded">
                            <p className="text-xs font-medium text-green-700">Strengths:</p>
                            <p className="text-xs text-green-600">{tool.strengths}</p>
                          </div>
                          <div className="bg-red-50 p-3 rounded">
                            <p className="text-xs font-medium text-red-700">Limitations:</p>
                            <p className="text-xs text-red-600">{tool.limitations}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="bg-purple-50 border-l-4 border-purple-400 p-6">
                    <h3 className="text-lg font-semibold text-purple-900 mb-2">
                      Tool Selection
                    </h3>
                    <p className="text-purple-800">
                      Choose tools based on your specific needs: accuracy requirements, design
                      complexity, budget, and learning time available. Many engineers use multiple
                      tools - one for initial design, another for detailed analysis, and a third
                      for system-level simulation.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="challenges" className="mt-8">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                    Common Design Challenges
                  </h2>

                  <div className="space-y-6">
                    {commonChallenges.map((challenge, index) => (
                      <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                        <CardHeader>
                          <CardTitle className="text-lg text-red-600">{challenge.challenge}</CardTitle>
                          <CardDescription>{challenge.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="bg-green-50 p-3 rounded">
                            <p className="text-xs font-medium text-green-700">Solutions:</p>
                            <p className="text-xs text-green-600">{challenge.solutions}</p>
                          </div>
                          <div className="bg-blue-50 p-3 rounded">
                            <p className="text-xs font-medium text-blue-700">Examples:</p>
                            <p className="text-xs text-blue-600">{challenge.examples}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="bg-indigo-50 border-l-4 border-indigo-400 p-6">
                    <h3 className="text-lg font-semibold text-indigo-900 mb-2">
                      Innovation in Antenna Design
                    </h3>
                    <p className="text-indigo-800">
                      Modern antenna design is driven by innovation in materials (metamaterials,
                      graphene), manufacturing (3D printing, additive manufacturing), and concepts
                      (reconfigurable antennas, cognitive radio). Stay current with emerging
                      technologies to maintain competitive advantage.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Design Best Practices
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Excellence</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>Start Simple:</strong> Begin with basic designs and add complexity
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>Validate Assumptions:</strong> Test key assumptions early
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>Consider Manufacturing:</strong> Design for production from start
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Management</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <strong>Document Everything:</strong> Keep detailed design records
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <strong>Regular Reviews:</strong> Schedule design reviews with stakeholders
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <strong>Risk Management:</strong> Identify and mitigate technical risks
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Continue Your Learning
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Now that you understand antenna design, explore career opportunities in antenna engineering.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/careers">
                <Button size="lg" className="px-8">
                  Next: Engineering Careers
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/smith-charts">
                <Button variant="outline" size="lg" className="px-8">
                  Previous: Smith Charts & Impedance
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
