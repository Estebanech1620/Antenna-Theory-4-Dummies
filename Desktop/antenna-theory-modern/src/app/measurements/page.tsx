import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  BarChart,
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
  Signal
} from "lucide-react"
import Link from "next/link"

export default function MeasurementsPage() {
  const measurementTypes = [
    {
      title: "Far-Field Measurements",
      description: "Measurements taken in the far-field region",
      icon: Target,
      details: "Standard measurements at distances > 2D²/λ where D is antenna size",
      requirements: "Large measurement distances, anechoic chamber or outdoor range"
    },
    {
      title: "Near-Field Measurements",
      description: "Measurements taken close to the antenna",
      icon: Signal,
      details: "Scan field near antenna surface and transform to far-field",
      requirements: "Precise positioning, phase measurement capability"
    },
    {
      title: "Compact Range",
      description: "Reflector-based measurement system",
      icon: Satellite,
      details: "Uses parabolic reflector to create plane wave at short distances",
      requirements: "Large reflector, careful alignment, limited frequency range"
    }
  ]

  const keyParameters = [
    {
      parameter: "Gain",
      method: "Gain comparison, 3-antenna method",
      accuracy: "±0.5 dB typical",
      description: "Measure relative to known standard antenna"
    },
    {
      parameter: "Radiation Pattern",
      method: "Angular scanning, polar/rectangular plots",
      accuracy: "±0.5° angular, ±0.5 dB amplitude",
      description: "Measure field strength vs. direction"
    },
    {
      parameter: "Impedance",
      method: "Network analyzer, VSWR bridge",
      accuracy: "±2% typical",
      description: "Measure input impedance and return loss"
    },
    {
      parameter: "Efficiency",
      method: "Wheeler cap, Q-factor measurement",
      accuracy: "±5% typical",
      description: "Ratio of radiated to input power"
    }
  ]

  const measurementSetup = [
    {
      component: "Antenna Under Test (AUT)",
      description: "The antenna being measured",
      requirements: "Proper mounting, orientation, and feeding"
    },
    {
      component: "Source Antenna",
      description: "Transmitting antenna for gain measurements",
      description: "Known gain, proper polarization, adequate power"
    },
    {
      component: "Positioner System",
      description: "Mechanical system for antenna rotation",
      requirements: "Precise angular control, minimal vibration"
    },
    {
      component: "Receiver System",
      description: "Signal detection and measurement",
      requirements: "High sensitivity, phase measurement, calibration"
    }
  ]

  const commonChallenges = [
    {
      challenge: "Multipath Interference",
      description: "Reflections from walls, floor, ceiling",
      solution: "Anechoic chamber, absorber materials, time gating"
    },
    {
      challenge: "Ground Plane Effects",
      description: "Ground reflections affecting measurements",
      solution: "Elevated range, ground plane simulation, modeling"
    },
    {
      challenge: "Cable Effects",
      description: "Cable losses and phase shifts",
      solution: "Calibration, short cables, phase compensation"
    },
    {
      challenge: "Environmental Factors",
      description: "Temperature, humidity, atmospheric conditions",
      solution: "Climate control, weather monitoring, compensation"
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
              <div className="p-4 bg-teal-100 rounded-full">
                <BarChart className="h-12 w-12 text-teal-600" />
              </div>
            </div>
            <Badge variant="secondary" className="mb-4">Intermediate Level</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Antenna Measurements
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Learn the essential techniques for measuring antenna performance. From basic
              gain measurements to complex near-field scanning, master the methods that
              validate antenna design and ensure proper operation.
            </p>

            <div className="flex items-center justify-center space-x-8 mb-8">
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="h-5 w-5" />
                <span>90 min read</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Users className="h-5 w-5" />
                <span>8,500+ students</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Target className="h-5 w-5" />
                <span>4 measurement types</span>
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
                <CardTitle className="text-2xl text-gray-900">Why Measure Antennas?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Antenna measurements are essential for validating design performance, ensuring
                  specifications are met, and troubleshooting operational issues. Without proper
                  measurements, it's impossible to know if an antenna will work as intended
                  in its intended application.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Measurements provide quantitative data on gain, radiation pattern, impedance,
                  efficiency, and other critical parameters. This data is used for design
                  optimization, quality control, and compliance with industry standards.
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
                <TabsTrigger value="types">Measurement Types</TabsTrigger>
                <TabsTrigger value="parameters">Key Parameters</TabsTrigger>
                <TabsTrigger value="setup">Setup & Equipment</TabsTrigger>
                <TabsTrigger value="challenges">Challenges</TabsTrigger>
              </TabsList>

              <TabsContent value="types" className="mt-8">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                    Types of Antenna Measurements
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {measurementTypes.map((type, index) => {
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
                              <p className="text-xs font-medium text-gray-700">Requirements:</p>
                              <p className="text-xs text-gray-600">{type.requirements}</p>
                            </div>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">
                      Far-Field vs. Near-Field
                    </h3>
                    <p className="text-blue-800">
                      Far-field measurements are simpler but require large distances. Near-field
                      measurements are more complex but can be done in smaller spaces and provide
                      more detailed information about the antenna's radiation characteristics.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="parameters" className="mt-8">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                    Key Measurement Parameters
                  </h2>

                  <div className="bg-white rounded-lg border overflow-hidden">
                    <div className="grid grid-cols-4 gap-4 p-4 bg-gray-50 font-semibold">
                      <div>Parameter</div>
                      <div>Method</div>
                      <div>Accuracy</div>
                      <div>Description</div>
                    </div>
                    {keyParameters.map((param, index) => (
                      <div key={index} className="grid grid-cols-4 gap-4 p-4 border-t hover:bg-gray-50 transition-colors">
                        <div className="font-medium text-blue-600">{param.parameter}</div>
                        <div className="text-sm">{param.method}</div>
                        <div className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">{param.accuracy}</div>
                        <div className="text-gray-600 text-sm">{param.description}</div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span>Gain Measurement Methods</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="text-sm space-y-2">
                          <p><strong>Gain Comparison:</strong> Compare to standard gain antenna</p>
                          <p><strong>3-Antenna Method:</strong> Use three antennas to eliminate unknowns</p>
                          <p><strong>Extrapolation:</strong> Measure at multiple distances and extrapolate</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <TrendingUp className="h-5 w-5 text-blue-600" />
                          <span>Pattern Measurement Tips</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="text-sm space-y-2">
                          <p><strong>Angular Resolution:</strong> Use 1-5° steps for main beam</p>
                          <p><strong>Dynamic Range:</strong> Ensure adequate signal-to-noise ratio</p>
                          <p><strong>Polarization:</strong> Measure co- and cross-polarization</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="setup" className="mt-8">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                    Measurement Setup & Equipment
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {measurementSetup.map((item, index) => (
                      <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                        <CardHeader>
                          <CardTitle className="text-lg">{item.component}</CardTitle>
                          <CardDescription>{item.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="bg-gray-50 p-3 rounded">
                            <p className="text-xs font-medium text-gray-700">Requirements:</p>
                            <p className="text-xs text-gray-600">{item.requirements}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-400 p-6">
                    <h3 className="text-lg font-semibold text-green-900 mb-2">
                      Anechoic Chamber Design
                    </h3>
                    <p className="text-green-800">
                      Anechoic chambers use absorber materials to minimize reflections. The
                      chamber size should be at least 3-5 times the antenna size, with absorber
                      coverage on walls, floor, and ceiling. Proper absorber selection is critical
                      for the frequency range of interest.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="challenges" className="mt-8">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                    Common Measurement Challenges
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {commonChallenges.map((challenge, index) => (
                      <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                        <CardHeader>
                          <CardTitle className="text-lg text-red-600">{challenge.challenge}</CardTitle>
                          <CardDescription>{challenge.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="bg-green-50 p-3 rounded">
                            <p className="text-xs font-medium text-green-700">Solution:</p>
                            <p className="text-xs text-green-600">{challenge.solution}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                    <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                      Calibration Importance
                    </h3>
                    <p className="text-yellow-800">
                      Proper calibration is essential for accurate measurements. This includes
                      system calibration, cable calibration, and antenna calibration. Regular
                      calibration checks ensure measurement accuracy and repeatability.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Measurement Standards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Industry Standards & Best Practices
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">IEEE Standards</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>IEEE 149:</strong> Standard test methods for antennas
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>IEEE 145:</strong> Definitions of terms for antennas
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>IEEE 1720:</strong> Near-field antenna measurements
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Measurement Best Practices</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <strong>Environment:</strong> Control temperature, humidity, and EMI
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <strong>Calibration:</strong> Regular system and antenna calibration
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <strong>Documentation:</strong> Record all measurement conditions
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
              Now that you understand antenna measurements, explore Smith charts and impedance matching.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/smith-charts">
                <Button size="lg" className="px-8">
                  Next: Smith Charts & Impedance
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/arrays">
                <Button variant="outline" size="lg" className="px-8">
                  Previous: Antenna Arrays
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
