import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  Antenna,
  Radio,
  Wifi,
  Satellite,
  Target,
  ChevronRight,
  Clock,
  Users,
  Zap,
  Signal,
  Radar,
  Smartphone,
  Router,
  Eye
} from "lucide-react"
import Link from "next/link"

export default function TypesPage() {
  const antennaCategories = [
    {
      category: "Wire Antennas",
      description: "The simplest and most fundamental antenna types, based on wire elements",
      icon: Radio,
      color: "bg-blue-500",
      antennas: [
        { name: "Short Dipole Antenna", description: "The simplest antenna - basically a short wire" },
        { name: "Dipole Antenna", description: "Two-element antenna, fundamental building block" },
        { name: "Half-Wave Dipole", description: "Resonant antenna with natural 50Ω impedance" },
        { name: "Broadband Dipoles", description: "Dipoles designed for wide frequency ranges" },
        { name: "Monopole Antenna", description: "Half of a dipole with ground plane" },
        { name: "Folded Dipole Antenna", description: "Increased bandwidth and impedance transformation" },
        { name: "Loop Antenna", description: "Circular or rectangular wire loop antennas" },
        { name: "Cloverleaf Antenna", description: "Circularly polarized antenna for video transmission" }
      ]
    },
    {
      category: "Travelling Wave Antennas",
      description: "Antennas that use the traveling wave principle for radiation",
      icon: Signal,
      color: "bg-green-500",
      antennas: [
        { name: "Helical Antennas", description: "Spiral-shaped antennas for circular polarization" },
        { name: "Yagi-Uda Antennas", description: "Directional arrays with director and reflector elements" },
        { name: "Spiral Antennas", description: "Wide bandwidth antennas with spiral geometry" }
      ]
    },
    {
      category: "Reflector Antennas",
      description: "Antennas that use reflective surfaces to focus electromagnetic energy",
      icon: Satellite,
      color: "bg-purple-500",
      antennas: [
        { name: "Corner Reflector", description: "V-shaped reflector behind driven element" },
        { name: "Parabolic Reflector (Dish Antenna)", description: "High-gain antennas for satellite communication" }
      ]
    },
    {
      category: "Microstrip Antennas",
      description: "Printed circuit board antennas for compact applications",
      icon: Smartphone,
      color: "bg-orange-500",
      antennas: [
        { name: "Rectangular Microstrip (Patch) Antennas", description: "Low-profile antennas for mobile devices" },
        { name: "Planar Inverted-F Antennas (PIFA)", description: "Compact antennas for mobile phones" }
      ]
    },
    {
      category: "Log-Periodic Antennas",
      description: "Wideband antennas with frequency-independent characteristics",
      icon: Wifi,
      color: "bg-indigo-500",
      antennas: [
        { name: "Bow Tie Antennas", description: "Ultra-wideband antennas for television reception" },
        { name: "Log-Periodic Antennas", description: "Frequency-independent antenna arrays" },
        { name: "Log-Periodic Dipole Array", description: "Arrays of dipoles in log-periodic configuration" }
      ]
    },
    {
      category: "Aperture Antennas",
      description: "Antennas that radiate from an opening or aperture",
      icon: Radar,
      color: "bg-teal-500",
      antennas: [
        { name: "Slot Antenna", description: "Radiating slot cut in metallic surface" },
        { name: "Cavity-Backed Slot Antenna", description: "Slot antenna with cavity backing for unidirectional radiation" },
        { name: "Inverted-F Antenna", description: "Compact antenna with F-shaped structure" },
        { name: "Slotted Waveguide Antenna", description: "Array of slots in waveguide for high gain" },
        { name: "Horn Antenna", description: "Flared waveguide for moderate to high gain" },
        { name: "Vivaldi Antenna", description: "Ultra-wideband exponentially tapered antenna" },
        { name: "Telescopes", description: "Large aperture antennas for radio astronomy" }
      ]
    },
    {
      category: "Other Antennas",
      description: "Specialized antennas for specific applications",
      icon: Eye,
      color: "bg-red-500",
      antennas: [
        { name: "NFC Antennas", description: "Near-field communication antennas for short-range applications" },
        { name: "Fractal Antennas", description: "Self-similar geometric structures for multiband operation" },
        { name: "Wearable Antennas", description: "Flexible antennas integrated into clothing and accessories" }
      ]
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
              <div className="p-4 bg-purple-100 rounded-full">
                <Antenna className="h-12 w-12 text-purple-600" />
              </div>
            </div>
            <Badge variant="secondary" className="mb-4">Intermediate Level</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Types of Antennas
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Explore different antenna designs and their applications. Almost every antenna
              in the world can be understood as some combination or derivative of the
              fundamental antenna types presented here.
            </p>

            <div className="flex items-center justify-center space-x-8 mb-8">
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="h-5 w-5" />
                <span>60 min read</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Users className="h-5 w-5" />
                <span>15,000+ students</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Target className="h-5 w-5" />
                <span>7 categories</span>
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
                <CardTitle className="text-2xl text-gray-900">Understanding Antenna Classifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  In this section, we'll introduce the fundamental antenna types. Almost every antenna in the world
                  can be understood as some combination or derivative of the antennas listed here. We'll start with
                  the simplest of all antennas, the short dipole antenna (which is basically a short wire), and work
                  our way through to the more complicated antennas.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Each antenna type has its own unique characteristics, advantages, and applications. Understanding
                  these fundamental types will give you the foundation to analyze and design more complex antenna systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Antenna Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Antenna Categories
            </h2>

            <div className="space-y-12">
              {antennaCategories.map((category, index) => {
                const IconComponent = category.icon
                return (
                  <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6 border-b">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`p-3 rounded-lg ${category.color} text-white`}>
                          <IconComponent className="h-8 w-8" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
                          <p className="text-gray-600">{category.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {category.antennas.map((antenna, antennaIndex) => (
                          <Card key={antennaIndex} className="group hover:shadow-md transition-all duration-300 cursor-pointer">
                            <CardHeader className="pb-3">
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                                    {antenna.name}
                                  </CardTitle>
                                  <CardDescription className="mt-1 text-sm">
                                    {antenna.description}
                                  </CardDescription>
                                </div>
                                <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0 ml-2" />
                              </div>
                            </CardHeader>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Application Examples */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Common Applications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Smartphone className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">Mobile Devices</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    PIFA, microstrip patches, and inverted-F antennas for cellular, WiFi, Bluetooth, and GPS
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Router className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">WiFi & Networking</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Dipoles, monopoles, and log-periodic antennas for routers and access points
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Satellite className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg">Satellite Communication</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Parabolic reflectors, helical antennas, and horn antennas for satellite links
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-red-100 rounded-lg">
                      <Radar className="h-6 w-6 text-red-600" />
                    </div>
                    <CardTitle className="text-lg">Radar Systems</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Phased arrays, horn antennas, and slotted waveguides for detection and tracking
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <Radio className="h-6 w-6 text-yellow-600" />
                    </div>
                    <CardTitle className="text-lg">Broadcasting</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Yagi-Uda arrays, log-periodic antennas, and bow-tie antennas for TV and radio
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-indigo-100 rounded-lg">
                      <Eye className="h-6 w-6 text-indigo-600" />
                    </div>
                    <CardTitle className="text-lg">Radio Astronomy</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Large parabolic reflectors and telescope arrays for deep space observation
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Design Considerations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Antenna Selection Criteria
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Zap className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>Frequency Range:</strong> Operating bandwidth requirements
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>Directivity:</strong> Omnidirectional vs. directional patterns
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Signal className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>Gain:</strong> Signal strength amplification needs
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Physical Constraints</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Smartphone className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <strong>Size Limitations:</strong> Available space for antenna
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Wifi className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <strong>Environment:</strong> Indoor vs. outdoor installation
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Router className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <strong>Integration:</strong> PCB mounting vs. external mounting
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
              Now that you understand different antenna types, explore antenna arrays and beamforming techniques.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/arrays">
                <Button size="lg" className="px-8">
                  Next: Antenna Arrays
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/basics">
                <Button variant="outline" size="lg" className="px-8">
                  Previous: Antenna Basics
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
