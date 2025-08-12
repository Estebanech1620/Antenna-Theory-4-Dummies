import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  FileText,
  Zap,
  ChevronRight,
  CheckCircle,
  Clock,
  Users,
  Target,
  Compass,
  Radio,
  Satellite,
  Wifi,
  Signal,
  Circle,
  Cpu,
  Search,
  BookOpen
} from "lucide-react"
import Link from "next/link"

export default function DefinitionsPage() {
  const basicTerms = [
    {
      term: "Antenna",
      definition: "A device that converts electrical energy into electromagnetic waves and vice versa",
      category: "Fundamental",
      example: "Dipole antenna, patch antenna, horn antenna"
    },
    {
      term: "Gain",
      definition: "The ratio of power radiated in a given direction to the power that would be radiated by an isotropic antenna",
      category: "Performance",
      example: "3 dB gain means twice the power in the main direction"
    },
    {
      term: "Directivity",
      definition: "The ratio of the maximum power density to the average power density over all directions",
      category: "Performance",
      example: "Higher directivity means more focused radiation pattern"
    },
    {
      term: "Impedance",
      definition: "The complex ratio of voltage to current at the antenna input terminals",
      category: "Electrical",
      example: "50Ω is standard for most RF systems"
    },
    {
      term: "VSWR",
      definition: "Voltage Standing Wave Ratio - measure of impedance mismatch between antenna and transmission line",
      category: "Electrical",
      example: "VSWR < 2:1 indicates good impedance matching"
    },
    {
      term: "Bandwidth",
      definition: "The range of frequencies over which the antenna operates effectively",
      category: "Performance",
      example: "10% bandwidth means operation from 9.5 GHz to 10.5 GHz"
    }
  ]

  const advancedTerms = [
    {
      term: "Radiation Pattern",
      definition: "The directional dependence of the strength of electromagnetic radiation",
      category: "Radiation",
      example: "Omnidirectional, directional, or shaped patterns"
    },
    {
      term: "Polarization",
      definition: "The orientation of the electric field vector in the radiated wave",
      category: "Radiation",
      example: "Linear (vertical/horizontal), circular (RHCP/LHCP)"
    },
    {
      term: "Beamwidth",
      definition: "The angular width of the main radiation beam, typically measured at -3 dB points",
      category: "Radiation",
      example: "30° beamwidth means main beam covers 30° angular range"
    },
    {
      term: "Side Lobes",
      definition: "Secondary radiation maxima in directions other than the main beam",
      category: "Radiation",
      example: "Side lobe level should be minimized for interference reduction"
    },
    {
      term: "Front-to-Back Ratio",
      definition: "The ratio of power radiated in the main direction to power radiated in the opposite direction",
      category: "Radiation",
      example: "20 dB front-to-back ratio means 100x more power forward than backward"
    },
    {
      term: "Efficiency",
      definition: "The ratio of radiated power to input power, accounting for losses",
      category: "Performance",
      example: "85% efficiency means 85% of input power is radiated"
    }
  ]

  const arrayTerms = [
    {
      term: "Array Factor",
      definition: "The mathematical function that describes how array geometry affects radiation pattern",
      category: "Arrays",
      example: "AF(θ) = Σ(Iₙe^(jβdₙsinθ)) for linear arrays"
    },
    {
      term: "Element Spacing",
      definition: "The distance between adjacent antenna elements in an array",
      category: "Arrays",
      example: "λ/2 spacing prevents grating lobes"
    },
    {
      term: "Beam Steering",
      definition: "Electronic control of the main beam direction without mechanical movement",
      category: "Arrays",
      example: "Phase shifting across array elements steers the beam"
    },
    {
      term: "Grating Lobes",
      definition: "Unwanted radiation maxima that occur when element spacing is too large",
      category: "Arrays",
      example: "Appear when d > λ, causing multiple beams"
    },
    {
      term: "Mutual Coupling",
      definition: "Interaction between array elements that affects individual element performance",
      category: "Arrays",
      example: "Can cause impedance changes and pattern distortion"
    }
  ]

  const measurementTerms = [
    {
      term: "Far Field",
      definition: "Region where radiation pattern is independent of distance from antenna",
      category: "Measurement",
      example: "Distance > 2D²/λ where D is antenna size"
    },
    {
      term: "Near Field",
      definition: "Region close to antenna where field structure is complex",
      category: "Measurement",
      example: "Used for near-field scanning and diagnostics"
    },
    {
      term: "Anechoic Chamber",
      definition: "Room lined with absorber material to minimize reflections during testing",
      category: "Measurement",
      example: "Simulates free-space conditions for accurate measurements"
    },
    {
      term: "Return Loss",
      definition: "Measure of power reflected from antenna, related to VSWR",
      category: "Measurement",
      example: "Return loss = -20log₁₀|Γ| where Γ is reflection coefficient"
    },
    {
      term: "S-Parameters",
      definition: "Scattering parameters that describe network behavior",
      category: "Measurement",
      example: "S₁₁ is input reflection coefficient, S₂₁ is forward transmission"
    }
  ]

  const designTerms = [
    {
      term: "Resonance",
      definition: "Condition where antenna naturally operates at a specific frequency",
      category: "Design",
      example: "Half-wave dipole resonates at λ/2 length"
    },
    {
      term: "Matching Network",
      definition: "Circuit that transforms antenna impedance to match transmission line",
      category: "Design",
      example: "L-section, T-network, or Pi-network matching"
    },
    {
      term: "Quality Factor (Q)",
      definition: "Measure of antenna bandwidth and efficiency",
      category: "Design",
      example: "Q = f₀/Δf where f₀ is center frequency, Δf is bandwidth"
    },
    {
      term: "Fractal Antenna",
      definition: "Antenna with self-similar geometric structure for multiband operation",
      category: "Design",
      example: "Koch curve, Sierpinski gasket, or Minkowski island antennas"
    },
    {
      term: "Metamaterial",
      definition: "Artificial materials with properties not found in nature",
      category: "Design",
      example: "Used for antenna miniaturization and performance enhancement"
    }
  ]

  const searchTerms = [
    "Gain", "Directivity", "Impedance", "VSWR", "Bandwidth", "Pattern", "Polarization",
    "Beamwidth", "Side Lobes", "Efficiency", "Array", "Beam Steering", "Matching",
    "Resonance", "Quality Factor", "Fractal", "Metamaterial", "Far Field", "Near Field"
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
              <div className="p-4 bg-gray-100 rounded-full">
                <FileText className="h-12 w-12 text-gray-600" />
              </div>
            </div>
            <Badge variant="secondary" className="mb-4">Reference Level</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Definitions & Terms
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Comprehensive glossary of antenna theory terminology. Find clear definitions,
              examples, and explanations for all the key concepts in antenna engineering.
              Perfect for students, engineers, and anyone working with antennas.
            </p>

            <div className="flex items-center justify-center space-x-8 mb-8">
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="h-5 w-5" />
                <span>Reference Guide</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Users className="h-5 w-5" />
                <span>All Skill Levels</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Target className="h-5 w-5" />
                <span>100+ Terms</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for terms..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              {searchTerms.slice(0, 12).map((term, index) => (
                <button
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="basic">Basic Terms</TabsTrigger>
                <TabsTrigger value="advanced">Advanced Terms</TabsTrigger>
                <TabsTrigger value="arrays">Array Terms</TabsTrigger>
                <TabsTrigger value="measurement">Measurement</TabsTrigger>
                <TabsTrigger value="design">Design Terms</TabsTrigger>
              </TabsList>

              <TabsContent value="basic" className="mt-8">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                    Basic Antenna Terms
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {basicTerms.map((term, index) => (
                      <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <CardTitle className="text-lg text-blue-600">{term.term}</CardTitle>
                              <Badge variant="outline" className="mt-1 text-xs">
                                {term.category}
                              </Badge>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <p className="text-sm text-gray-600">{term.definition}</p>
                          <div className="bg-gray-50 p-3 rounded">
                            <p className="text-xs font-medium text-gray-700">Example:</p>
                            <p className="text-xs text-gray-600">{term.example}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">
                      Understanding Basic Terms
                    </h3>
                    <p className="text-blue-800">
                      These fundamental terms form the foundation of antenna theory. Understanding
                      these concepts is essential before moving to more advanced topics. Each term
                      has practical implications for antenna design and performance.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="advanced" className="mt-8">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                    Advanced Antenna Terms
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {advancedTerms.map((term, index) => (
                      <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <CardTitle className="text-lg text-green-600">{term.term}</CardTitle>
                              <Badge variant="outline" className="mt-1 text-xs">
                                {term.category}
                              </Badge>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <p className="text-sm text-gray-600">{term.definition}</p>
                          <div className="bg-gray-50 p-3 rounded">
                            <p className="text-xs font-medium text-gray-700">Example:</p>
                            <p className="text-xs text-gray-600">{term.example}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-400 p-6">
                    <h3 className="text-lg font-semibold text-green-900 mb-2">
                      Advanced Concepts
                    </h3>
                    <p className="text-green-800">
                      These terms describe more complex antenna behavior and performance characteristics.
                      They're essential for detailed antenna analysis, design optimization, and
                      understanding real-world performance limitations.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="arrays" className="mt-8">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                    Antenna Array Terms
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {arrayTerms.map((term, index) => (
                      <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <CardTitle className="text-lg text-purple-600">{term.term}</CardTitle>
                              <Badge variant="outline" className="mt-1 text-xs">
                                {term.category}
                              </Badge>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <p className="text-sm text-gray-600">{term.definition}</p>
                          <div className="bg-gray-50 p-3 rounded">
                            <p className="text-xs font-medium text-gray-700">Example:</p>
                            <p className="text-xs text-gray-600">{term.example}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="bg-purple-50 border-l-4 border-purple-400 p-6">
                    <h3 className="text-lg font-semibold text-purple-900 mb-2">
                      Array Fundamentals
                    </h3>
                    <p className="text-purple-800">
                      Array terminology is crucial for understanding how multiple antenna elements
                      work together. These terms describe the mathematical and physical principles
                      that govern array behavior and performance.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="measurement" className="mt-8">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                    Measurement & Testing Terms
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {measurementTerms.map((term, index) => (
                      <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <CardTitle className="text-lg text-orange-600">{term.term}</CardTitle>
                              <Badge variant="outline" className="mt-1 text-xs">
                                {term.category}
                              </Badge>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <p className="text-sm text-gray-600">{term.definition}</p>
                          <div className="bg-gray-50 p-3 rounded">
                            <p className="text-xs font-medium text-gray-700">Example:</p>
                            <p className="text-xs text-gray-600">{term.example}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="bg-orange-50 border-l-4 border-orange-400 p-6">
                    <h3 className="text-lg font-semibold text-orange-900 mb-2">
                      Measurement Knowledge
                    </h3>
                    <p className="text-orange-800">
                      Understanding measurement terminology is essential for validating antenna
                      performance and ensuring designs meet specifications. These terms describe
                      the methods, equipment, and analysis techniques used in antenna testing.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="design" className="mt-8">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                    Design & Optimization Terms
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {designTerms.map((term, index) => (
                      <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <CardTitle className="text-lg text-red-600">{term.term}</CardTitle>
                              <Badge variant="outline" className="mt-1 text-xs">
                                {term.category}
                              </Badge>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <p className="text-sm text-gray-600">{term.definition}</p>
                          <div className="bg-gray-50 p-3 rounded">
                            <p className="text-xs font-medium text-gray-700">Example:</p>
                            <p className="text-xs text-gray-600">{term.example}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-400 p-6">
                    <h3 className="text-lg font-semibold text-red-900 mb-2">
                      Design Principles
                    </h3>
                    <p className="text-red-800">
                      These terms describe the principles and techniques used in antenna design
                      and optimization. They're essential for engineers who want to create
                      antennas that meet specific performance requirements and constraints.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Additional Reference Resources
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <BookOpen className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">IEEE Standards</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    IEEE 145 (Definitions of Terms for Antennas) and IEEE 149 (Standard Test Methods)
                    provide official definitions and testing procedures used throughout the industry.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Search className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">Online Resources</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Professional organizations, technical journals, and manufacturer websites
                    provide additional definitions and explanations of antenna terminology.
                  </p>
                </CardContent>
              </Card>
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
              Now that you have a comprehensive understanding of antenna terminology, return to any topic
              for deeper exploration or start your learning journey from the beginning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/intro">
                <Button size="lg" className="px-8">
                  Start Learning Journey
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/careers">
                <Button variant="outline" size="lg" className="px-8">
                  Previous: Engineering Careers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
