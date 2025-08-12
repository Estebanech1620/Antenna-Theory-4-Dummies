import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Calculator,
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
  Circle
} from "lucide-react"
import Link from "next/link"

export default function SmithChartsPage() {
  const smithChartBasics = [
    {
      title: "Impedance Mapping",
      description: "Convert complex impedance to chart coordinates",
      icon: Target,
      details: "Z = R + jX maps to normalized coordinates on the Smith chart",
      formula: "z = Z/Z₀ = (R + jX)/Z₀"
    },
    {
      title: "Reflection Coefficient",
      description: "Measure of impedance mismatch",
      icon: Signal,
      details: "Γ = (Z - Z₀)/(Z + Z₀) where Z₀ is characteristic impedance",
      formula: "|Γ| ≤ 1, ∠Γ = phase angle"
    },
    {
      title: "VSWR Circles",
      description: "Constant VSWR contours on the chart",
      icon: Circle,
      details: "VSWR = (1 + |Γ|)/(1 - |Γ|), circles centered on chart",
      formula: "VSWR = (1 + |Γ|)/(1 - |Γ|)"
    }
  ]

  const impedanceMatching = [
    {
      technique: "Series L/C",
      description: "Add inductance or capacitance in series",
      advantages: "Simple, low loss, good for narrowband",
      disadvantages: "Limited bandwidth, component selection critical"
    },
    {
      technique: "Shunt L/C",
      description: "Add inductance or capacitance in parallel",
      advantages: "Easy to implement, good for high impedance loads",
      disadvantages: "Can reduce bandwidth, component parasitics"
    },
    {
      technique: "L-Section",
      description: "Combination of series and shunt elements",
      advantages: "Better bandwidth than single elements",
      disadvantages: "More complex, requires careful design"
    },
    {
      technique: "Pi/T-Network",
      description: "Three-element matching networks",
      advantages: "Wide bandwidth, flexible design",
      disadvantages: "Complex, higher loss, expensive"
    }
  ]

  const smithChartApplications = [
    {
      application: "Antenna Design",
      description: "Match antenna impedance to transmission line",
      details: "Transform antenna input impedance to 50Ω for maximum power transfer"
    },
    {
      application: "Filter Design",
      description: "Design impedance matching networks",
      details: "Create filters with proper input/output impedance matching"
    },
    {
      application: "Amplifier Design",
      description: "Match amplifier input/output impedances",
      details: "Ensure maximum power transfer and stability"
    },
    {
      application: "Cable Testing",
      description: "Measure cable impedance and return loss",
      details: "Characterize transmission line properties and locate faults"
    }
  ]

  const practicalExamples = [
    {
      example: "50Ω to 75Ω Matching",
      description: "Match 50Ω source to 75Ω load",
      solution: "Use L-section: series L, shunt C or series C, shunt L",
      frequency: "Broadband solution for video/RF applications"
    },
    {
      example: "High Impedance Matching",
      description: "Match high impedance antenna to 50Ω",
      solution: "Shunt inductor to reduce impedance, then series capacitor",
      frequency: "Common for small antennas and high frequencies"
    },
    {
      example: "Low Impedance Matching",
      description: "Match low impedance load to 50Ω",
      solution: "Series inductor to increase impedance, then shunt capacitor",
      frequency: "Used for power amplifiers and low impedance antennas"
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
              <div className="p-4 bg-red-100 rounded-full">
                <Calculator className="h-12 w-12 text-red-600" />
              </div>
            </div>
            <Badge variant="secondary" className="mb-4">Advanced Level</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Smith Charts & Impedance Matching
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Master the Smith chart, the most powerful tool for impedance analysis and
              matching network design. Learn to visualize complex impedance transformations
              and design efficient matching networks for optimal power transfer.
            </p>

            <div className="flex items-center justify-center space-x-8 mb-8">
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="h-5 w-5" />
                <span>120 min read</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Users className="h-5 w-5" />
                <span>6,500+ students</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Target className="h-5 w-5" />
                <span>4 matching techniques</span>
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
                <CardTitle className="text-2xl text-gray-900">What is a Smith Chart?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  The Smith chart is a graphical tool developed by Phillip H. Smith in 1939 for
                  solving problems involving transmission lines and matching networks. It's a
                  circular chart that maps the complex impedance plane to the reflection coefficient
                  plane, making it easy to visualize impedance transformations and design matching networks.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The chart is particularly useful for RF and microwave engineering because it
                  allows engineers to quickly determine impedance matching solutions, calculate
                  VSWR, and analyze transmission line behavior without complex mathematical calculations.
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
            <Tabs defaultValue="basics" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="basics">Chart Basics</TabsTrigger>
                <TabsTrigger value="matching">Impedance Matching</TabsTrigger>
                <TabsTrigger value="applications">Applications</TabsTrigger>
                <TabsTrigger value="examples">Practical Examples</TabsTrigger>
              </TabsList>

              <TabsContent value="basics" className="mt-8">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                    Smith Chart Fundamentals
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {smithChartBasics.map((basic, index) => {
                      const IconComponent = basic.icon
                      return (
                        <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                          <CardHeader className="pb-3">
                            <div className="flex items-center space-x-3 mb-3">
                              <div className="p-3 bg-blue-100 rounded-lg">
                                <IconComponent className="h-6 w-6 text-blue-600" />
                              </div>
                              <CardTitle className="text-lg">{basic.title}</CardTitle>
                            </div>
                            <CardDescription>{basic.description}</CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <p className="text-sm text-gray-600">{basic.details}</p>
                            <div className="bg-gray-50 p-3 rounded">
                              <p className="text-xs font-medium text-gray-700">Formula:</p>
                              <p className="text-xs font-mono text-gray-600">{basic.formula}</p>
                            </div>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">
                      Chart Interpretation
                    </h3>
                    <p className="text-blue-800">
                      The Smith chart is a circle with radius 1. The center represents a perfect
                      match (Z = Z₀), the right edge represents infinite resistance, and the left
                      edge represents zero resistance. Circles of constant resistance and reactance
                      form a grid that makes it easy to locate impedance points and trace transformations.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="matching" className="mt-8">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                    Impedance Matching Techniques
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {impedanceMatching.map((technique, index) => (
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
                      Matching Network Design Process
                    </h3>
                    <p className="text-yellow-800">
                      1. Plot load impedance on Smith chart<br/>
                      2. Choose matching network topology (L, T, Pi, etc.)<br/>
                      3. Calculate component values using chart transformations<br/>
                      4. Verify matching over desired bandwidth<br/>
                      5. Consider practical component limitations and parasitics
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="applications" className="mt-8">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                    Real-World Applications
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {smithChartApplications.map((app, index) => (
                      <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                        <CardHeader>
                          <CardTitle className="text-lg">{app.application}</CardTitle>
                          <CardDescription>{app.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600">{app.details}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-400 p-6">
                    <h3 className="text-lg font-semibold text-green-900 mb-2">
                      Why Use Smith Charts?
                    </h3>
                    <p className="text-green-800">
                      Smith charts provide intuitive visualization of complex impedance relationships,
                      enable quick matching network design, and help engineers understand how
                      components affect impedance. They're especially valuable for broadband
                      design and troubleshooting impedance-related issues.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="examples" className="mt-8">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                    Practical Design Examples
                  </h2>

                  <div className="space-y-6">
                    {practicalExamples.map((example, index) => (
                      <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                        <CardHeader>
                          <CardTitle className="text-lg text-blue-600">{example.example}</CardTitle>
                          <CardDescription>{example.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="bg-gray-50 p-3 rounded">
                            <p className="text-sm"><strong>Solution:</strong> {example.solution}</p>
                          </div>
                          <div className="bg-blue-50 p-3 rounded">
                            <p className="text-sm"><strong>Frequency Range:</strong> {example.frequency}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="bg-purple-50 border-l-4 border-purple-400 p-6">
                    <h3 className="text-lg font-semibold text-purple-900 mb-2">
                      Design Considerations
                    </h3>
                    <p className="text-purple-800">
                      When designing matching networks, consider component tolerances, parasitic
                      effects, power handling, and bandwidth requirements. Use simulation tools
                      to verify performance and consider manufacturing variations in component values.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Advanced Topics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Advanced Smith Chart Topics
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Transmission Line Effects</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>Impedance Transformation:</strong> Z(d) = Z₀(ZL + jZ₀tan(βd))/(Z₀ + jZLtan(βd))
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>Quarter-Wave Transformer:</strong> Z₀ = √(Z₁Z₂) for impedance Z₁ to Z₂
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>Stub Matching:</strong> Use open or shorted transmission line stubs
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Computer-Aided Design</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <strong>Simulation Tools:</strong> ADS, CST, HFSS, Sonnet
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <strong>Optimization:</strong> Automated matching network design
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <strong>3D Visualization:</strong> Modern tools with interactive charts
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
              Now that you understand Smith charts, explore antenna design principles and techniques.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/design">
                <Button size="lg" className="px-8">
                  Next: Antenna Design
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/measurements">
                <Button variant="outline" size="lg" className="px-8">
                  Previous: Antenna Measurements
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
