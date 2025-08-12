import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Target,
  Zap,
  ChevronRight,
  CheckCircle,
  Clock,
  Users,
  TrendingUp,
  BarChart,
  Compass,
  Grid3X3,
  Signal,
  Radio,
  Satellite
} from "lucide-react"
import Link from "next/link"

export default function ArraysPage() {
  const arrayTypes = [
    {
      title: "Linear Arrays",
      description: "Elements arranged in a straight line",
      icon: BarChart,
      details: "Most common array configuration with elements spaced along a line",
      applications: "Broadcasting, radar, point-to-point communication"
    },
    {
      title: "Planar Arrays",
      description: "2D grid of antenna elements",
      icon: Grid3X3,
      details: "Rectangular or circular arrangements for 2D beam steering",
      applications: "Satellite communication, phased array radar"
    },
    {
      title: "Circular Arrays",
      description: "Elements arranged in a circle",
      icon: Compass,
      details: "Omnidirectional coverage with beam steering capability",
      applications: "Direction finding, 360° coverage systems"
    },
    {
      title: "Conformal Arrays",
      description: "Arrays that conform to curved surfaces",
      icon: Target,
      details: "Mounted on aircraft, missiles, or other curved structures",
      applications: "Aerospace, military, mobile platforms"
    }
  ]

  const arrayParameters = [
    {
      parameter: "Element Spacing",
      typical: "λ/2 to λ",
      description: "Distance between array elements, affects grating lobes and beamwidth"
    },
    {
      parameter: "Array Factor",
      typical: "Mathematical function",
      description: "Describes how array geometry affects radiation pattern"
    },
    {
      parameter: "Beam Steering",
      typical: "0° to 360°",
      description: "Electronic beam direction control through phase shifting"
    },
    {
      parameter: "Side Lobe Level",
      typical: "-13 dB to -20 dB",
      description: "Level of unwanted radiation in non-primary directions"
    }
  ]

  const beamformingTechniques = [
    {
      technique: "Phase Shifting",
      description: "Adjust phase of each element to steer beam",
      advantages: "Simple, fast, low power consumption",
      disadvantages: "Limited steering range, fixed beamwidth"
    },
    {
      technique: "Time Delay",
      description: "Use true time delays for wideband operation",
      advantages: "Wideband, large steering angles",
      disadvantages: "Complex, higher power, expensive"
    },
    {
      technique: "Adaptive Beamforming",
      description: "Dynamically adjust weights based on signal environment",
      advantages: "Interference rejection, optimal performance",
      disadvantages: "Complex algorithms, computational overhead"
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
              <div className="p-4 bg-orange-100 rounded-full">
                <Target className="h-12 w-12 text-orange-600" />
              </div>
            </div>
            <Badge variant="secondary" className="mb-4">Advanced Level</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Antenna Arrays
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Master the principles of antenna arrays and beamforming. Learn how multiple
              antenna elements work together to create directional beams, steer radiation
              patterns, and achieve high gain performance.
            </p>

            <div className="flex items-center justify-center space-x-8 mb-8">
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="h-5 w-5" />
                <span>75 min read</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Users className="h-5 w-5" />
                <span>12,000+ students</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Target className="h-5 w-5" />
                <span>4 array types</span>
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
                <CardTitle className="text-2xl text-gray-900">What Are Antenna Arrays?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  An antenna array is a set of multiple antenna elements that work together to achieve
                  performance that would be impossible with a single antenna. By combining the radiation
                  from multiple elements, arrays can create highly directional beams, steer radiation
                  patterns electronically, and achieve much higher gain than individual antennas.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The key to array operation is the principle of superposition - the total radiation
                  pattern is the product of the individual element pattern and the array factor, which
                  describes how the array geometry affects the overall radiation.
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
            <Tabs defaultValue="types" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="types">Array Types</TabsTrigger>
                <TabsTrigger value="parameters">Parameters</TabsTrigger>
                <TabsTrigger value="beamforming">Beamforming</TabsTrigger>
                <TabsTrigger value="applications">Applications</TabsTrigger>
              </TabsList>

              <TabsContent value="types" className="mt-8">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                    Types of Antenna Arrays
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {arrayTypes.map((type, index) => {
                      const IconComponent = type.icon
                      return (
                        <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                          <CardHeader className="pb-3">
                            <div className="flex items-center space-x-3 mb-3">
                              <div className="p-3 bg-blue-100 rounded-lg">
                                <IconComponent className="h-6 w-6 text-blue-600" />
                              </div>
                              <CardTitle className="text-lg">{type.title}</CardTitle>
                            </div>
                            <CardDescription>{type.description}</CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <p className="text-sm text-gray-600">{type.details}</p>
                            <div className="bg-gray-50 p-3 rounded">
                              <p className="text-xs font-medium text-gray-700">Applications:</p>
                              <p className="text-xs text-gray-600">{type.applications}</p>
                            </div>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="parameters" className="mt-8">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                    Key Array Parameters
                  </h2>

                  <div className="bg-white rounded-lg border overflow-hidden">
                    <div className="grid grid-cols-4 gap-4 p-4 bg-gray-50 font-semibold">
                      <div>Parameter</div>
                      <div>Typical Value</div>
                      <div className="col-span-2">Description</div>
                    </div>
                    {arrayParameters.map((param, index) => (
                      <div key={index} className="grid grid-cols-4 gap-4 p-4 border-t hover:bg-gray-50 transition-colors">
                        <div className="font-medium text-blue-600">{param.parameter}</div>
                        <div className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">{param.typical}</div>
                        <div className="col-span-2 text-gray-600">{param.description}</div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">
                      Array Factor Calculation
                    </h3>
                    <p className="text-blue-800">
                      The array factor AF(θ) = Σ(Iₙe^(jβdₙsinθ)) where Iₙ is the current amplitude,
                      β is the propagation constant, dₙ is the position of the nth element, and θ is
                      the angle from broadside. This determines the overall array radiation pattern.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="beamforming" className="mt-8">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                    Beamforming Techniques
                  </h2>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {beamformingTechniques.map((technique, index) => (
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
                      Phase Shifting vs. Time Delay
                    </h3>
                    <p className="text-yellow-800">
                      Phase shifting works well for narrowband signals but causes beam squinting
                      (frequency-dependent steering) for wideband signals. True time delay systems
                      maintain consistent beam direction across all frequencies but are more complex
                      and expensive to implement.
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
                    <Card>
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <Satellite className="h-6 w-6 text-blue-600" />
                          </div>
                          <CardTitle className="text-lg">Satellite Communication</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-sm">
                          Phased arrays on satellites provide multiple spot beams, allowing
                          efficient coverage of different geographic regions. Ground stations
                          use arrays for tracking and high-gain reception.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-green-100 rounded-lg">
                            <Signal className="h-6 w-6 text-green-600" />
                          </div>
                          <CardTitle className="text-lg">5G Networks</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-sm">
                          Massive MIMO arrays with hundreds of elements provide spatial
                          multiplexing, beamforming, and interference suppression for
                          high-capacity wireless networks.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-purple-100 rounded-lg">
                            <Radio className="h-6 w-6 text-purple-600" />
                          </div>
                          <CardTitle className="text-lg">Radar Systems</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-sm">
                          Phased array radar provides rapid beam steering for tracking
                          multiple targets, weather monitoring, and air traffic control
                          without mechanical movement.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-red-100 rounded-lg">
                            <Target className="h-6 w-6 text-red-600" />
                          </div>
                          <CardTitle className="text-lg">Military Applications</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-sm">
                          Electronic warfare systems use adaptive arrays for jamming,
                          direction finding, and secure communications with low probability
                          of intercept.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Design Considerations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Array Design Considerations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Element Spacing</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>λ/2 spacing:</strong> Maximum directivity, no grating lobes
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>λ spacing:</strong> Grating lobes appear, reduced directivity
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>&lt; λ/2 spacing:</strong> Mutual coupling effects, reduced efficiency
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Beam Steering</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <strong>Phase progression:</strong> Linear phase shift across elements
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <strong>Steering angle:</strong> θ = sin⁻¹(Δφ/βd) where Δφ is phase difference
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <strong>Scan loss:</strong> Gain reduction at large steering angles
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
              Now that you understand antenna arrays, explore measurement techniques and testing methods.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/measurements">
                <Button size="lg" className="px-8">
                  Next: Antenna Measurements
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/types">
                <Button variant="outline" size="lg" className="px-8">
                  Previous: Types of Antennas
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
