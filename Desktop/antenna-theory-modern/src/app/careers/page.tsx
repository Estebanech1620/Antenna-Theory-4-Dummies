import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  TrendingUp,
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
  Building,
  GraduationCap,
  Briefcase
} from "lucide-react"
import Link from "next/link"

export default function CareersPage() {
  const careerPaths = [
    {
      title: "Antenna Design Engineer",
      description: "Design and optimize antenna systems",
      icon: Target,
      responsibilities: "Antenna design, simulation, prototyping, testing",
      skills: "EM theory, simulation tools, RF design, measurement",
      industries: "Telecommunications, aerospace, defense, consumer electronics"
    },
    {
      title: "RF Systems Engineer",
      description: "Design complete RF communication systems",
      icon: Signal,
      responsibilities: "System architecture, component integration, performance analysis",
      skills: "System design, RF components, signal processing, standards",
      industries: "Wireless communications, satellite, broadcasting, IoT"
    },
    {
      title: "Electromagnetic Engineer",
      description: "Specialize in EM theory and applications",
      icon: Zap,
      responsibilities: "EM analysis, modeling, research, consulting",
      skills: "Advanced EM theory, numerical methods, research methods",
      industries: "Research institutions, consulting, academia, defense"
    },
    {
      title: "Test & Measurement Engineer",
      description: "Develop and implement testing procedures",
      icon: Circle,
      responsibilities: "Test setup design, measurement automation, data analysis",
      skills: "Measurement techniques, automation, data analysis, standards",
      industries: "Test equipment manufacturers, certification labs, R&D"
    }
  ]

  const industrySectors = [
    {
      sector: "Telecommunications",
      description: "Mobile networks, base stations, infrastructure",
      opportunities: "5G/6G development, network optimization, IoT expansion",
      companies: "Ericsson, Nokia, Huawei, Qualcomm, Apple, Samsung",
      growth: "High growth with 5G deployment and IoT expansion"
    },
    {
      sector: "Aerospace & Defense",
      description: "Military communications, radar, satellite systems",
      opportunities: "Phased arrays, stealth technology, space applications",
      companies: "Boeing, Lockheed Martin, Northrop Grumman, SpaceX",
      growth: "Stable growth with increasing defense budgets"
    },
    {
      sector: "Consumer Electronics",
      description: "Smartphones, IoT devices, wearables",
      opportunities: "Miniaturization, multiband operation, integration",
      companies: "Apple, Samsung, Google, Amazon, Microsoft",
      growth: "High growth with IoT and smart device proliferation"
    },
    {
      sector: "Automotive",
      description: "Vehicle communications, radar, infotainment",
      opportunities: "Connected vehicles, autonomous driving, V2X",
      companies: "Tesla, BMW, Mercedes, Ford, General Motors",
      growth: "Rapid growth with autonomous vehicle development"
    }
  ]

  const requiredSkills = [
    {
      category: "Technical Skills",
      skills: [
        "Electromagnetic theory and Maxwell's equations",
        "Antenna design principles and techniques",
        "RF circuit design and impedance matching",
        "Simulation tools (HFSS, CST, ADS)",
        "Measurement techniques and equipment",
        "Signal processing and communication theory"
      ]
    },
    {
      category: "Software Skills",
      skills: [
        "MATLAB/Simulink for analysis and simulation",
        "Python for automation and data processing",
        "CAD tools for mechanical design",
        "Version control (Git) for design management",
        "Data analysis and visualization tools",
        "Project management software"
      ]
    },
    {
      category: "Soft Skills",
      skills: [
        "Problem-solving and analytical thinking",
        "Communication and technical writing",
        "Project management and organization",
        "Teamwork and collaboration",
        "Continuous learning and adaptability",
        "Attention to detail and quality focus"
      ]
    }
  ]

  const educationPaths = [
    {
      level: "Bachelor's Degree",
      description: "Entry-level positions in antenna engineering",
      requirements: "Electrical Engineering, Physics, or related field",
      duration: "4 years",
      opportunities: "Junior engineer, technician, support roles"
    },
    {
      level: "Master's Degree",
      description: "Advanced positions and specialization",
      requirements: "EE with focus on electromagnetics or RF",
      duration: "2 years after bachelor's",
      opportunities: "Design engineer, project lead, specialist"
    },
    {
      level: "PhD",
      description: "Research, development, and leadership roles",
      requirements: "Advanced research in electromagnetics",
      duration: "4-6 years after bachelor's",
      opportunities: "R&D engineer, principal engineer, research scientist"
    }
  ]

  const salaryRanges = [
    {
      level: "Entry Level (0-2 years)",
      range: "$65,000 - $85,000",
      description: "Bachelor's degree, basic skills, supervised work"
    },
    {
      level: "Mid Level (3-7 years)",
      range: "$85,000 - $130,000",
      description: "Master's degree, independent work, some leadership"
    },
    {
      level: "Senior Level (8-15 years)",
      range: "$130,000 - $180,000",
      description: "Advanced degree, leadership, project management"
    },
    {
      level: "Principal/Lead (15+ years)",
      range: "$180,000 - $250,000+",
      description: "Expert level, strategic decisions, team leadership"
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
              <div className="p-4 bg-yellow-100 rounded-full">
                <TrendingUp className="h-12 w-12 text-yellow-600" />
              </div>
            </div>
            <Badge variant="secondary" className="mb-4">Career Level</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Engineering Careers in Antennas
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Explore exciting career opportunities in antenna engineering and RF technology.
              Discover the diverse paths available, required skills, and growth potential
              in this dynamic and rapidly evolving field.
            </p>

            <div className="flex items-center justify-center space-x-8 mb-8">
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="h-5 w-5" />
                <span>60 min read</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Users className="h-5 w-5" />
                <span>3,500+ students</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Target className="h-5 w-5" />
                <span>4 career paths</span>
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
                <CardTitle className="text-2xl text-gray-900">Why Choose Antenna Engineering?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Antenna engineering offers a unique combination of theoretical depth and practical
                  application. It's a field where fundamental physics meets cutting-edge technology,
                  creating opportunities for innovation and impact across multiple industries.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With the rapid growth of wireless communications, IoT, autonomous vehicles, and
                  space exploration, antenna engineers are in high demand. The field offers excellent
                  career stability, competitive salaries, and opportunities for continuous learning.
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
            <Tabs defaultValue="careers" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="careers">Career Paths</TabsTrigger>
                <TabsTrigger value="industries">Industries</TabsTrigger>
                <TabsTrigger value="skills">Required Skills</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="compensation">Compensation</TabsTrigger>
              </TabsList>

              <TabsContent value="careers" className="mt-8">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                    Career Paths in Antenna Engineering
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {careerPaths.map((career, index) => {
                      const IconComponent = career.icon
                      return (
                        <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                          <CardHeader className="pb-3">
                            <div className="flex items-center space-x-3 mb-3">
                              <div className="p-3 bg-blue-100 rounded-lg">
                                <IconComponent className="h-6 w-6 text-blue-600" />
                              </div>
                              <CardTitle className="text-lg">{career.title}</CardTitle>
                            </div>
                            <CardDescription>{career.description}</CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <div className="bg-gray-50 p-3 rounded">
                              <p className="text-xs font-medium text-gray-700">Responsibilities:</p>
                              <p className="text-xs text-gray-600">{career.responsibilities}</p>
                            </div>
                            <div className="bg-blue-50 p-3 rounded">
                              <p className="text-xs font-medium text-blue-700">Key Skills:</p>
                              <p className="text-xs text-blue-600">{career.skills}</p>
                            </div>
                            <div className="bg-green-50 p-3 rounded">
                              <p className="text-xs font-medium text-green-700">Industries:</p>
                              <p className="text-xs text-green-600">{career.industries}</p>
                            </div>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">
                      Career Progression
                    </h3>
                    <p className="text-blue-800">
                      Most antenna engineers start in design or testing roles, then progress to
                      project leadership, technical management, or specialized technical roles.
                      Some move into business development, consulting, or entrepreneurship.
                      Continuous learning and specialization are key to career advancement.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="industries" className="mt-8">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                    Industry Sectors & Opportunities
                  </h2>

                  <div className="space-y-6">
                    {industrySectors.map((sector, index) => (
                      <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                        <CardHeader>
                          <CardTitle className="text-lg text-blue-600">{sector.sector}</CardTitle>
                          <CardDescription>{sector.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-3 rounded">
                              <p className="text-xs font-medium text-gray-700">Opportunities:</p>
                              <p className="text-xs text-gray-600">{sector.opportunities}</p>
                            </div>
                            <div className="bg-blue-50 p-3 rounded">
                              <p className="text-xs font-medium text-blue-700">Growth:</p>
                              <p className="text-xs text-blue-600">{sector.growth}</p>
                            </div>
                          </div>
                          <div className="bg-green-50 p-3 rounded">
                            <p className="text-xs font-medium text-green-700">Major Companies:</p>
                            <p className="text-xs text-green-600">{sector.companies}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-400 p-6">
                    <h3 className="text-lg font-semibold text-green-900 mb-2">
                      Emerging Opportunities
                    </h3>
                    <p className="text-green-800">
                      New opportunities are emerging in areas like quantum communications,
                      terahertz technology, reconfigurable antennas, and AI-assisted design.
                      The integration of antennas with machine learning and IoT is creating
                      entirely new career paths and specializations.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="skills" className="mt-8">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                    Required Skills & Competencies
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {requiredSkills.map((skillCategory, index) => (
                      <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                        <CardHeader>
                          <CardTitle className="text-lg">{skillCategory.category}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {skillCategory.skills.map((skill, skillIndex) => (
                              <li key={skillIndex} className="flex items-start space-x-2">
                                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-gray-600">{skill}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                    <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                      Skill Development
                    </h3>
                    <p className="text-yellow-800">
                      Develop skills through formal education, online courses, hands-on projects,
                      and industry certifications. Join professional organizations like IEEE,
                      participate in conferences, and build a portfolio of practical projects.
                      Networking with experienced engineers is invaluable for skill development.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="education" className="mt-8">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                    Educational Pathways
                  </h2>

                  <div className="space-y-6">
                    {educationPaths.map((path, index) => (
                      <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                        <CardHeader>
                          <div className="flex items-center space-x-4">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
                              {index + 1}
                            </div>
                            <div>
                              <CardTitle className="text-lg">{path.level}</CardTitle>
                              <CardDescription>{path.description}</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-gray-50 p-3 rounded">
                              <p className="text-xs font-medium text-gray-700">Requirements:</p>
                              <p className="text-xs text-gray-600">{path.requirements}</p>
                            </div>
                            <div className="bg-blue-50 p-3 rounded">
                              <p className="text-xs font-medium text-blue-700">Duration:</p>
                              <p className="text-xs text-blue-600">{path.duration}</p>
                            </div>
                            <div className="bg-green-50 p-3 rounded">
                              <p className="text-xs font-medium text-green-700">Opportunities:</p>
                              <p className="text-xs text-green-600">{path.opportunities}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="bg-purple-50 border-l-4 border-purple-400 p-6">
                    <h3 className="text-lg font-semibold text-purple-900 mb-2">
                      Alternative Paths
                    </h3>
                    <p className="text-purple-800">
                      While formal education is valuable, some successful antenna engineers
                      come from physics, mathematics, or other engineering backgrounds.
                      Online courses, boot camps, and self-study can supplement formal education.
                      The key is demonstrating practical skills and understanding of fundamentals.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="compensation" className="mt-8">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                    Salary Ranges & Compensation
                  </h2>

                  <div className="bg-white rounded-lg border overflow-hidden">
                    <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 font-semibold">
                      <div>Experience Level</div>
                      <div>Salary Range</div>
                      <div>Description</div>
                    </div>
                    {salaryRanges.map((level, index) => (
                      <div key={index} className="grid grid-cols-3 gap-4 p-4 border-t hover:bg-gray-50 transition-colors">
                        <div className="font-medium text-blue-600">{level.level}</div>
                        <div className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">{level.range}</div>
                        <div className="text-gray-600 text-sm">{level.description}</div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <Building className="h-5 w-5 text-green-600" />
                          <span>Location Factors</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-sm space-y-2">
                          <p><strong>High Cost Areas:</strong> Silicon Valley, NYC, Boston (20-30% higher)</p>
                          <p><strong>Mid Cost Areas:</strong> Austin, Seattle, Denver (standard range)</p>
                          <p><strong>Lower Cost Areas:</strong> Midwest, Southeast (10-20% lower)</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <Briefcase className="h-5 w-5 text-blue-600" />
                          <span>Additional Benefits</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-sm space-y-2">
                          <p><strong>Bonuses:</strong> Performance, profit sharing, stock options</p>
                          <p><strong>Benefits:</strong> Health, retirement, professional development</p>
                          <p><strong>Perks:</strong> Flexible work, remote options, continuing education</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-indigo-50 border-l-4 border-indigo-400 p-6">
                    <h3 className="text-lg font-semibold text-indigo-900 mb-2">
                      Negotiation Tips
                    </h3>
                    <p className="text-indigo-800">
                      Research market rates for your location and experience level. Highlight
                      specific skills and achievements that add value. Consider total compensation
                      package, not just salary. Be prepared to discuss career growth opportunities
                      and professional development support.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Getting Started in Antenna Engineering
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Immediate Actions</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>Build Projects:</strong> Design and build simple antennas
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>Learn Software:</strong> Master HFSS, CST, or ADS basics
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>Join IEEE:</strong> Access resources and network with professionals
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Long-term Strategy</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <strong>Specialize:</strong> Choose focus area (design, measurement, systems)
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <strong>Build Portfolio:</strong> Document projects and achievements
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <strong>Continuous Learning:</strong> Stay current with technology trends
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
              Now that you understand career opportunities, explore our comprehensive definitions and terminology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/definitions">
                <Button size="lg" className="px-8">
                  Next: Definitions & Terms
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/design">
                <Button variant="outline" size="lg" className="px-8">
                  Previous: Antenna Design
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
