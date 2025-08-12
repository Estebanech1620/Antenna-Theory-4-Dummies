"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ChevronDown, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function AntennaBasicsPage() {
  const [expandedSections, setExpandedSections] = useState<string[]>([])

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    )
  }

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

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-slate-900 mb-4">
              Antenna Basics
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Core principles, radiation patterns, and fundamental parameters that form the foundation of antenna theory and design.
            </p>
            <Badge variant="secondary" className="mt-4 text-sm">
              Beginner Level
            </Badge>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="fundamentals" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="fundamentals">Fundamentals</TabsTrigger>
              <TabsTrigger value="radiation">Radiation Patterns</TabsTrigger>
              <TabsTrigger value="parameters">Parameters</TabsTrigger>
              <TabsTrigger value="types">Types</TabsTrigger>
            </TabsList>

            {/* Fundamentals Tab */}
            <TabsContent value="fundamentals" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      What is an Antenna?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-700">
                      An antenna is a device that converts electrical signals into electromagnetic waves (transmission) 
                      and vice versa (reception). It's the interface between guided electromagnetic waves in a transmission 
                      line and free space.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Key Functions:</h4>
                      <ul className="text-blue-800 space-y-1 text-sm">
                        <li>• Transmit electromagnetic energy into space</li>
                        <li>• Receive electromagnetic energy from space</li>
                        <li>• Convert between guided and free-space waves</li>
                        <li>• Provide impedance matching between circuits and free space</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      Basic Principles
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-700">
                      Antennas operate based on fundamental electromagnetic principles, including Maxwell's equations 
                      and the relationship between current flow and electromagnetic radiation.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">Core Concepts:</h4>
                      <ul className="text-green-800 space-y-1 text-sm">
                        <li>• Electromagnetic wave propagation</li>
                        <li>• Current distribution and radiation</li>
                        <li>• Impedance matching principles</li>
                        <li>• Reciprocity theorem</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Fundamentals Content */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Fundamental Antenna Theory</CardTitle>
                  <CardDescription>
                    Understanding the mathematical and physical foundations of antenna operation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900">Electromagnetic Fundamentals</h4>
                      <p className="text-slate-700 text-sm">
                        Antennas operate based on Maxwell's equations, which describe how electric and magnetic fields 
                        interact and propagate through space. The time-varying electric current in the antenna creates 
                        a magnetic field, which in turn induces an electric field, forming electromagnetic waves.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900">Radiation Mechanism</h4>
                      <p className="text-slate-700 text-sm">
                        When alternating current flows through a conductor, it creates time-varying electric and magnetic 
                        fields. These fields propagate away from the conductor at the speed of light, carrying energy 
                        and information through free space.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Radiation Patterns Tab */}
            <TabsContent value="radiation" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </div>
                      Radiation Patterns
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-700">
                      A radiation pattern is a graphical representation of the antenna's radiation properties as a function 
                      of space coordinates.
                    </p>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-900 mb-2">Pattern Characteristics:</h4>
                      <ul className="text-orange-800 space-y-1 text-sm">
                        <li>• Main beam direction and width</li>
                        <li>• Side lobe levels and positions</li>
                        <li>• Front-to-back ratio</li>
                        <li>• Polarization properties</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      Pattern Types
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-700">
                      Different antenna types produce different radiation patterns, from omnidirectional to highly directional.
                    </p>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-900 mb-2">Common Patterns:</h4>
                      <ul className="text-red-800 space-y-1 text-sm">
                        <li>• Omnidirectional (360° coverage)</li>
                        <li>• Directional (focused beam)</li>
                        <li>• Bidirectional (two main lobes)</li>
                        <li>• Multilobe (multiple beams)</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* 3D Radiation Pattern Visualization */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>3D Radiation Pattern Visualization</CardTitle>
                  <CardDescription>
                    Understanding how antennas radiate energy in three-dimensional space
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
                      <div className="w-16 h-16 bg-blue-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-blue-900">E-Plane</h4>
                      <p className="text-blue-700 text-sm">Electric field plane pattern</p>
                    </div>
                    
                    <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
                      <div className="w-16 h-16 bg-green-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-green-900">H-Plane</h4>
                      <p className="text-green-700 text-sm">Magnetic field plane pattern</p>
                    </div>
                    
                    <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg">
                      <div className="w-16 h-16 bg-purple-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-purple-900">3D Pattern</h4>
                      <p className="text-purple-700 text-sm">Complete spatial radiation</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Parameters Tab */}
            <TabsContent value="parameters" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      Key Parameters
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-700">
                      Essential parameters that define antenna performance and behavior in various applications.
                    </p>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-indigo-900 mb-2">Critical Metrics:</h4>
                      <ul className="text-indigo-800 space-y-1 text-sm">
                        <li>• Gain and directivity</li>
                        <li>• Input impedance and VSWR</li>
                        <li>• Bandwidth and efficiency</li>
                        <li>• Polarization characteristics</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      Performance Metrics
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-700">
                      Quantitative measures that determine how well an antenna performs in real-world applications.
                    </p>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-teal-900 mb-2">Measurement Standards:</h4>
                      <ul className="text-teal-800 space-y-1 text-sm">
                        <li>• Return loss and reflection coefficient</li>
                        <li>• Radiation efficiency and losses</li>
                        <li>• Beamwidth and side lobe levels</li>
                        <li>• Cross-polarization discrimination</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Types Tab */}
            <TabsContent value="types" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                      Wire Antennas
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-700">
                      Simple wire-based antennas that form the foundation of antenna design and theory.
                    </p>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-900 mb-2">Common Types:</h4>
                      <ul className="text-yellow-800 space-y-1 text-sm">
                        <li>• Dipole antennas</li>
                        <li>• Monopole antennas</li>
                        <li>• Loop antennas</li>
                        <li>• Helical antennas</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                      </div>
                      Aperture Antennas
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-700">
                      Antennas that use openings or apertures to radiate electromagnetic energy.
                    </p>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-pink-900 mb-2">Examples:</h4>
                      <ul className="text-pink-800 space-y-1 text-sm">
                        <li>• Horn antennas</li>
                        <li>• Slot antennas</li>
                        <li>• Waveguide antennas</li>
                        <li>• Reflector antennas</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Antenna Categories Grid */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Antenna Categories & Applications</CardTitle>
                  <CardDescription>
                    Comprehensive overview of antenna types and their practical uses
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-3">Wire Antennas</h4>
                      <div className="space-y-2 text-sm text-blue-800">
                        <p><strong>Dipole:</strong> Basic building block, balanced feed</p>
                        <p><strong>Monopole:</strong> Ground plane dependent, compact</p>
                        <p><strong>Loop:</strong> Magnetic field coupling, small size</p>
                        <p><strong>Helical:</strong> Circular polarization, broadband</p>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-3">Aperture Antennas</h4>
                      <div className="space-y-2 text-sm text-green-800">
                        <p><strong>Horn:</strong> High gain, low VSWR</p>
                        <p><strong>Slot:</strong> Planar design, array compatible</p>
                        <p><strong>Waveguide:</strong> High power, low loss</p>
                        <p><strong>Reflector:</strong> Very high gain, satellite use</p>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-3">Modern Antennas</h4>
                      <div className="space-y-2 text-sm text-purple-800">
                        <p><strong>Microstrip:</strong> PCB integration, low profile</p>
                        <p><strong>Phased Array:</strong> Electronic steering, radar</p>
                        <p><strong>MIMO:</strong> Multiple streams, 5G/6G</p>
                        <p><strong>Metamaterial:</strong> Novel properties, compact</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Additional Resources Section */}
          <div className="mt-12">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  Additional Resources & Next Steps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Continue Learning</h4>
                    <div className="space-y-2 text-sm text-slate-700">
                      <p>• <strong>Antenna Arrays:</strong> Multiple antenna systems and beamforming</p>
                      <p>• <strong>Antenna Design:</strong> Practical design principles and optimization</p>
                      <p>• <strong>Smith Charts:</strong> Impedance matching and visualization</p>
                      <p>• <strong>Measurements:</strong> Testing and characterization techniques</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-900 mb-2">Practical Applications</h4>
                    <ul className="text-slate-700 space-y-1 text-sm">
                      <li>• Wireless communications (WiFi, cellular, 5G)</li>
                      <li>• Satellite and space communications</li>
                      <li>• Radar and navigation systems</li>
                      <li>• IoT and smart devices</li>
                      <li>• Medical imaging and diagnostics</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
