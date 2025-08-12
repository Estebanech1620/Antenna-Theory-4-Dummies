"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  ArrowLeft,
  BookOpen,
  Radio,
  Zap,
  Target,
  ChevronRight,
  CheckCircle,
  Clock,
  Users,
  Calendar,
  Star,
  Video,
  Users2,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Globe,
  Satellite,
  Smartphone,
  Car,
  Plane,
  Ship,
  Wifi,
  Signal,
  Antenna,
  Waves,
  Calculator,
  Book,
  History,
  Award,
  Eye,
  Brain,
  Rocket
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function IntroPage() {
  const [expandedSections, setExpandedSections] = useState<string[]>([])

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    )
  }

  const learningObjectives = [
    "Understand what antennas are and why they're essential",
    "Learn the basic principles of electromagnetic radiation",
    "Grasp fundamental antenna parameters and characteristics",
    "Explore different types of antennas and their applications",
    "Master the relationship between frequency and antenna design",
    "Comprehend Maxwell's equations and their role in antenna theory",
    "Learn about real-world applications and emerging technologies"
  ]

  const introSections = [
    {
      id: "what-is-antenna",
      title: "What is an Antenna?",
      description: "Definition, purpose, and basic function of antennas in communication systems",
      duration: "15 min read",
      icon: Antenna,
      content: `
        An antenna is a specialized device that converts electrical energy into electromagnetic
        waves and vice versa. Think of it as a translator between the electrical signals in
        your electronic devices and the radio waves that travel through the air.

        Key Functions:
        • Transmission: Convert electrical signals into electromagnetic waves
        • Reception: Capture electromagnetic waves and convert them to electrical signals
        • Impedance Matching: Ensure efficient power transfer
        • Directional Control: Focus or spread electromagnetic energy as needed

        Physical Principles:
        When an alternating current flows through a conductor, it creates a time-varying
        magnetic field around the conductor. This magnetic field, in turn, induces an
        electric field. These two fields together form an electromagnetic wave that
        propagates away from the conductor at the speed of light (c ≈ 3×10⁸ m/s).

        The antenna acts as a transducer, converting the guided electromagnetic energy
        in the transmission line to free-space electromagnetic waves. The efficiency of
        this conversion depends on the antenna's design, size relative to wavelength,
        and impedance matching with the transmission line.

        Historical Context:
        The concept of antennas dates back to Heinrich Hertz's experiments in the 1880s,
        where he demonstrated the transmission and reception of electromagnetic waves.
        Guglielmo Marconi later used this knowledge to develop practical wireless
        communication systems, leading to the first transatlantic radio transmission in 1901.

        Basic Antenna Structure:
        • Radiating Element: The conductive part that radiates/receives electromagnetic waves
        • Feed Point: Where the transmission line connects to the antenna
        • Ground Plane: Reference surface that affects antenna performance
        • Matching Network: Components that ensure impedance matching
      `
    },
    {
      id: "electromagnetic-waves",
      title: "Electromagnetic Waves",
      description: "Understanding how radio waves propagate through space",
      duration: "20 min read",
      icon: Waves,
      content: `
        Radio waves are a form of electromagnetic radiation, just like visible light,
        but with much longer wavelengths. They travel at the speed of light and can
        propagate through free space without any physical medium.

        Wave Properties:
        • Frequency (f): Number of cycles per second (Hz)
        • Wavelength (λ): Distance between wave peaks (λ = c/f)
        • Amplitude: Wave strength, determines signal power
        • Polarization: Orientation of the electric field vector

        Mathematical Description:
        The electric field E and magnetic field H of a plane electromagnetic wave
        propagating in the z-direction can be described by:

        E(z,t) = E₀ cos(ωt - βz + φ)
        H(z,t) = H₀ cos(ωt - βz + φ)

        Where:
        • ω = 2πf is the angular frequency
        • β = 2π/λ is the propagation constant
        • φ is the phase constant
        • E₀ and H₀ are the field amplitudes

        The relationship between E and H fields is given by:
        E/H = η = √(μ₀/ε₀) ≈ 377Ω (free space impedance)

        Wave Propagation:
        Electromagnetic waves propagate through free space at the speed of light:
        c = 1/√(μ₀ε₀) ≈ 3×10⁸ m/s

        In other media, the velocity is reduced by the refractive index:
        v = c/n, where n = √(εᵣμᵣ)

        Power Density:
        The power density (Poynting vector) is:
        S = E × H = (E²/η) ẑ

        This represents the power per unit area flowing in the direction of propagation.

        Wave Behavior:
        • Reflection: Waves bounce off conductive surfaces
        • Refraction: Waves bend when entering different media
        • Diffraction: Waves bend around obstacles
        • Interference: Waves combine constructively or destructively
      `
    },
    {
      id: "frequency-wavelength",
      title: "Frequency and Wavelength",
      description: "The relationship between frequency, wavelength, and antenna dimensions",
      duration: "18 min read",
      icon: Calculator,
      content: `
        The fundamental relationship λ = c/f connects frequency, wavelength, and the speed of light.
        This relationship is crucial for antenna design because antenna dimensions are typically
        related to the wavelength of operation.

        Mathematical Relationships:
        • Wavelength: λ = c/f = c/(2πω)
        • Frequency: f = c/λ
        • Angular frequency: ω = 2πf = 2πc/λ
        • Wave number: k = 2π/λ = ω/c

        Where c ≈ 3×10⁸ m/s is the speed of light in free space.

        Antenna Scaling Laws:
        Antenna performance scales with wavelength, following these fundamental principles:

        • Radiation resistance: Rᵣ ∝ (l/λ)²
        • Input reactance: Xᵢ ∝ (l/λ)
        • Bandwidth: BW ∝ 1/Q, where Q ∝ λ/l
        • Gain: G ∝ (A/λ²), where A is effective aperture

        Common Antenna Lengths:
        • Quarter wave (λ/4): Most common, compact and efficient
          - Input impedance: Zᵢₙ ≈ 36.5 + j21.25Ω
          - Requires matching network for 50Ω systems
          - Common in mobile and portable applications

        • Half wave (λ/2): Natural resonance, 50Ω impedance
          - Input impedance: Zᵢₙ ≈ 73 + j42.5Ω
          - Self-resonant, minimal matching required
          - Standard reference antenna

        • Full wave (λ): Higher gain, multiple lobes
          - Input impedance: Zᵢₙ ≈ 2000 + j0Ω
          - Higher gain but more complex pattern
          - Used in specialized applications

        Practical Considerations:
        • Higher frequencies (shorter wavelengths) allow smaller antennas
        • Lower frequencies require larger antennas for the same performance
        • Antenna size affects bandwidth and efficiency
        • Manufacturing tolerances become more critical at higher frequencies

        Frequency Bands:
        • LF (30-300 kHz): λ = 10-1 km, large antennas required
        • MF (300 kHz-3 MHz): λ = 1 km-100 m, medium antennas
        • HF (3-30 MHz): λ = 100-10 m, moderate antennas
        • VHF (30-300 MHz): λ = 10-1 m, practical sizes
        • UHF (300 MHz-3 GHz): λ = 1m-10 cm, compact designs
        • SHF (3-30 GHz): λ = 10-1 cm, very small antennas
        • EHF (30-300 GHz): λ = 1 cm-1 mm, millimeter wave
      `
    },
    {
      id: "maxwell-equations",
      title: "Maxwell's Equations: The Foundation",
      description: "The four fundamental equations that govern all electromagnetic phenomena",
      duration: "25 min read",
      icon: Book,
      content: `
        All antenna theory is based on Maxwell's four fundamental equations of electromagnetics.
        These equations describe how electric and magnetic fields interact and propagate.

        Gauss's Law for Electric Fields:
        ∇ · E = ρ/ε₀
        Electric field lines begin on positive charges and end on negative charges.
        The divergence of E is proportional to the charge density.

        Gauss's Law for Magnetic Fields:
        ∇ · B = 0
        Magnetic field lines are continuous with no beginning or end.
        There are no magnetic monopoles in nature.

        Faraday's Law of Induction:
        ∇ × E = -∂B/∂t
        A changing magnetic field induces an electric field.
        This is the principle behind electromagnetic wave generation.

        Ampère's Law with Maxwell's Correction:
        ∇ × B = μ₀J + μ₀ε₀∂E/∂t
        Electric currents and changing electric fields create magnetic fields.
        The displacement current term enables electromagnetic wave propagation.

        Wave Equation Derivation:
        From Maxwell's equations, we can derive the electromagnetic wave equation:
        ∇²E - μ₀ε₀∂²E/∂t² = 0

        This equation describes how electromagnetic waves propagate through space at the speed of light:
        c = 1/√(μ₀ε₀) ≈ 3×10⁸ m/s.

        Physical Interpretation:
        • Electric charges create electric fields (Gauss's Law)
        • Moving charges create magnetic fields (Ampère's Law)
        • Changing magnetic fields create electric fields (Faraday's Law)
        • The combination enables self-sustaining electromagnetic waves

        Boundary Conditions:
        At interfaces between different media:
        • Tangential E-field is continuous
        • Normal D-field changes by surface charge density
        • Tangential H-field changes by surface current density
        • Normal B-field is continuous

        These conditions are crucial for understanding antenna behavior near ground planes,
        reflectors, and other structures.
      `
    },
    {
      id: "antenna-types",
      title: "Basic Antenna Types",
      description: "Overview of common antenna configurations and their uses",
      duration: "25 min read",
      icon: Radio,
      content: `
        Antennas come in many shapes and sizes, each optimized for specific applications:

        Wire Antennas:
        • Dipole Antennas: Balanced two-element antennas
          - Half-wave dipole: λ/2 length, 73Ω impedance, omnidirectional pattern
          - Folded dipole: λ/2 length, 300Ω impedance, wider bandwidth
          - Short dipole: l < λ/10, capacitive reactance, requires matching

        • Monopole Antennas: Single element with ground plane
          - Quarter-wave monopole: λ/4 length, 36.5Ω impedance
          - Ground plane effect creates image, behaves like dipole
          - Common in mobile and portable applications

        • Loop Antennas: Closed conductor loops
          - Small loop: l < λ/10, inductive reactance, low efficiency
          - Large loop: l ≈ λ, high efficiency, directional pattern
          - Used for direction finding and receiving applications

        Aperture Antennas:
        • Horn Antennas: Flared waveguide structures
          - E-plane horn: Flared in E-field direction
          - H-plane horn: Flared in H-field direction
          - Pyramidal horn: Flared in both planes
          - Gain: G ≈ 10log₁₀(4πA/λ²) where A is aperture area

        • Reflector Antennas: Parabolic dishes and reflectors
          - Parabolic reflector: High gain, narrow beamwidth
          - Gain: G ≈ η(πD/λ)² where D is diameter, η is efficiency
          - Used in satellite communication and radar systems

        Array Antennas:
        • Linear Arrays: Elements arranged in straight line
          - Array factor: AF(θ) = Σ(Iₙe^(jβdₙsinθ))
          - Beam steering: θ = sin⁻¹(Δφ/βd)
          - Grating lobes: Appear when d > λ

        • Planar Arrays: 2D grid of elements
          - Rectangular grid: N×M elements
          - Circular array: Elements arranged in circle
          - Used for 2D beam steering and scanning

        Microstrip Antennas:
        • Patch Antennas: Rectangular or circular patches
          - Resonant frequency: fᵣ = c/(2L√εᵣₑff)
          - Low profile, easy to fabricate
          - Limited bandwidth (1-5%)

        • PIFA: Planar Inverted-F Antenna
          - Compact design for mobile devices
          - Ground plane acts as part of antenna
          - Multiband operation capability

        Smart Antennas:
        • Adaptive Arrays: Dynamically adjust weights
          - LMS algorithm: w(n+1) = w(n) + μe(n)x*(n)
          - RLS algorithm: Faster convergence, higher complexity
          - Used for interference rejection and beamforming

        • MIMO Systems: Multiple input, multiple output
          - Spatial multiplexing: Increase data rate
          - Diversity: Improve reliability
          - Beamforming: Focus energy in desired direction
      `
    },
    {
      id: "antenna-parameters",
      title: "Antenna Parameters & Performance",
      description: "Key metrics that define antenna behavior and efficiency",
      duration: "22 min read",
      icon: Target,
      content: `
        Understanding antenna parameters is essential for design and analysis:

        Electrical Parameters:
        • Input Impedance: Zᵢₙ = Rᵢₙ + jXᵢₙ
          - Real part (Rᵢₙ): Represents power dissipation and radiation
          - Imaginary part (Xᵢₙ): Represents stored energy
          - Must be matched to transmission line for maximum power transfer

        • VSWR (Voltage Standing Wave Ratio):
          - VSWR = (1 + |Γ|)/(1 - |Γ|)
          - Γ = (Zᵢₙ - Z₀)/(Zᵢₙ + Z₀) is reflection coefficient
          - VSWR < 2:1 is generally acceptable
          - VSWR = 1:1 means perfect match

        • Return Loss: RL = -20log₁₀|Γ| dB
          - Higher return loss means better matching
          - RL > 10 dB is good, RL > 20 dB is excellent

        • Bandwidth: Frequency range where VSWR < 2:1
          - Fractional bandwidth: BW = (f₂ - f₁)/f₀ × 100%
          - Where f₀ is center frequency, f₁ and f₂ are band edges

        Radiation Parameters:
        • Gain: G = D × η (dBi)
          - D is directivity, η is efficiency
          - dBi means decibels relative to isotropic radiator
          - Higher gain means more focused radiation

        • Directivity: D = 4π/Ω (steradians)
          - Ω is beam solid angle
          - Measures how focused the radiation is
          - Independent of losses

        • Beamwidth: HPBW at -3 dB points
          - Full width at half maximum (FWHM)
          - Smaller beamwidth means higher directivity
          - Related to antenna size and frequency

        • Side Lobe Level: Maximum side lobe relative to main beam
          - Lower side lobes are generally better
          - Important for interference rejection
          - Affected by aperture distribution

        Efficiency Factors:
        • Radiation Efficiency: ηᵣ = Pᵣ/Pᵢₙ
          - Pᵣ is radiated power, Pᵢₙ is input power
          - Accounts for conductor and dielectric losses
          - Typically 70-95% for well-designed antennas

        • Aperture Efficiency: ηₐ = Aₑ/Aₚ
          - Aₑ is effective aperture, Aₚ is physical aperture
          - Accounts for non-uniform aperture distribution
          - Typically 50-80% for reflector antennas

        • Overall Efficiency: η = ηᵣ × ηₐ
          - Total efficiency including all loss mechanisms
          - Critical for system performance calculations
      `
    },
    {
      id: "real-world-applications",
      title: "Real-World Applications",
      description: "Where antennas are used in everyday technology",
      duration: "20 min read",
      icon: Globe,
      content: `
        Antennas are everywhere in modern life:

        Smartphones and Mobile Devices:
        • Cellular Communication: 700 MHz - 6 GHz bands
          - 4G LTE: 2×2 MIMO, 20 MHz bandwidth
          - 5G NR: 4×4 MIMO, 100 MHz bandwidth, mmWave support
          - Antenna types: PIFA, microstrip patches, inverted-F

        • WiFi (802.11): 2.4 GHz and 5 GHz bands
          - 2.4 GHz: 2×2 MIMO, 40 MHz bandwidth
          - 5 GHz: 4×4 MIMO, 160 MHz bandwidth
          - Antenna types: Printed dipoles, PIFA, ceramic chips

        • Bluetooth: 2.4 GHz ISM band
          - Class 1: 100 m range, 100 mW power
          - Class 2: 10 m range, 2.5 mW power
          - Antenna types: Chip antennas, printed traces

        • GPS: L1 (1575.42 MHz), L2 (1227.60 MHz), L5 (1176.45 MHz)
          - Circular polarization (RHCP)
          - Antenna types: Helical, patch, ceramic

        Home and Consumer Electronics:
        • WiFi Routers: 2×2 to 8×8 MIMO configurations
          - Beamforming capabilities
          - Multiple frequency bands
          - Antenna types: Dipole arrays, PIFA arrays

        • TV Antennas: VHF (54-216 MHz) and UHF (470-890 MHz)
          - Yagi-Uda arrays for directional reception
          - Log-periodic antennas for broadband coverage
          - Antenna gain: 8-15 dBi typical

        • Smart Home: Zigbee, Z-Wave, Thread protocols
          - 2.4 GHz and sub-GHz frequencies
          - Mesh network topologies
          - Antenna types: Chip, printed, wire

        Transportation and Aerospace:
        • Automotive: V2X communication, radar, infotainment
          - 5.9 GHz DSRC for vehicle-to-vehicle communication
          - 24 GHz and 77 GHz radar for collision avoidance
          - Antenna types: Shark fin, printed, embedded

        • Aircraft: Navigation, communication, weather radar
          - VHF: 118-137 MHz for air traffic control
          - HF: 3-30 MHz for long-range communication
          - Antenna types: Blade, whip, flush-mounted

        • Maritime: Ship-to-shore, ship-to-ship communication
          - HF: 3-30 MHz for long-range
          - VHF: 156-174 MHz for short-range
          - Antenna types: Whip, vertical, horizontal

        Space and Satellite:
        • Communication Satellites: Geostationary and LEO
          - C-band: 4-8 GHz, Ku-band: 12-18 GHz, Ka-band: 26-40 GHz
          - Antenna types: Parabolic reflectors, phased arrays
          - Ground stations: Large parabolic dishes, tracking systems

        • Deep Space: NASA missions, interplanetary communication
          - Deep Space Network: 70 m dishes
          - Frequencies: S-band (2-4 GHz), X-band (8-12 GHz), Ka-band (26-40 GHz)
          - Antenna types: Large parabolic reflectors, arrays

        Industrial and IoT:
        • RFID: Near-field and far-field systems
          - LF: 125-134 kHz, HF: 13.56 MHz, UHF: 860-960 MHz
          - Antenna types: Loop, dipole, patch
          - Applications: Inventory tracking, access control, supply chain

        • Wireless Sensors: Industrial monitoring and control
          - 2.4 GHz ISM band, 915 MHz, 868 MHz
          - Low-power, long-range communication
          - Antenna types: Chip, printed, wire

        • Smart Grid: Utility monitoring and control
          - 900 MHz, 2.4 GHz, 5.8 GHz bands
          - Mesh network topologies
          - Antenna types: Yagi, dipole, omnidirectional
      `
    },
    {
      id: "emerging-technologies",
      title: "Emerging Technologies & Future Trends",
      description: "Cutting-edge developments in antenna technology",
      duration: "18 min read",
      icon: Rocket,
      content: `
        The field of antenna technology is rapidly evolving with new innovations:

        Metamaterial Antennas:
        • Electromagnetic Bandgap (EBG) Structures
          - Periodic structures that create bandgaps
          - Used for surface wave suppression
          - Enable low-profile antenna designs

        • Negative Index Materials
          - Materials with negative permittivity and permeability
          - Enable sub-wavelength focusing
          - Potential for super-resolution imaging

        • Frequency Selective Surfaces (FSS)
          - Periodic patterns that filter specific frequencies
          - Used in radomes and stealth applications
          - Enable frequency-agile systems

        Reconfigurable Antennas:
        • Frequency Reconfigurable
          - Tunable resonators using varactors or switches
          - Adaptive frequency hopping
          - Cognitive radio applications

        • Pattern Reconfigurable
          - Switchable parasitic elements
          - Beam steering without phase shifters
          - Adaptive coverage optimization

        • Polarization Reconfigurable
          - Switchable between linear and circular
          - Adaptive polarization matching
          - MIMO system optimization

        Millimeter Wave and THz:
        • 5G/6G mmWave Systems
          - 24-100 GHz frequency bands
          - Massive MIMO with hundreds of elements
          - Beamforming for mobile applications

        • THz Communications
          - 0.1-10 THz frequency range
          - Ultra-high data rates (100+ Gbps)
          - Short-range, high-bandwidth applications

        • Automotive Radar
          - 77-81 GHz for collision avoidance
          - Multiple-input multiple-output (MIMO)
          - High-resolution imaging capabilities

        AI and Machine Learning:
        • Antenna Design Optimization
          - Genetic algorithms for shape optimization
          - Neural networks for parameter prediction
          - Reinforcement learning for adaptive systems

        • Smart Beamforming
          - AI-driven beam pattern optimization
          - Adaptive interference rejection
          - User behavior prediction

        • Cognitive Radio
          - Spectrum sensing and adaptation
          - Dynamic frequency allocation
          - Intelligent interference management

        Quantum Technologies:
        • Quantum Radar
          - Quantum entanglement for detection
          - Enhanced sensitivity and resolution
          - Low-probability-of-intercept operation

        • Quantum Communications
          - Quantum key distribution (QKD)
          - Quantum repeaters and networks
          - Secure communication protocols

        • Quantum Sensors
          - Quantum-enhanced sensitivity
          - Atomic clocks and magnetometers
          - Precision navigation systems

        Sustainable Technologies:
        • Green Antennas
          - Energy-efficient designs
          - Solar-powered systems
          - Recyclable materials

        • Energy Harvesting
          - RF energy harvesting
          - Ambient energy collection
          - Self-powered sensors
      `
    }
  ]

  const additionalResources = [
    {
      title: "Antenna History & Evolution",
      description: "From the 1890s experiments to modern ubiquitous wireless systems",
      icon: History,
      href: "#antenna-history"
    },
    {
      title: "Interactive Simulations",
      description: "Visual tools to understand antenna behavior and patterns",
      icon: Eye,
      href: "#simulations"
    },
    {
      title: "Video Tutorials",
      description: "Visual introduction to antenna theory concepts",
      icon: Video,
      href: "#video-overview"
    },
    {
      title: "Expert Insights",
      description: "Meet the antenna engineering experts behind this content",
      icon: Users2,
      href: "#about-authors"
    },
    {
      title: "Practice Problems",
      description: "Test your understanding with interactive exercises",
      icon: Brain,
      href: "#practice"
    },
    {
      title: "Advanced Topics",
      description: "Dive deeper into complex antenna theory concepts",
      icon: Award,
      href: "#advanced"
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
              <div className="p-4 bg-blue-100 rounded-full">
                <BookOpen className="h-12 w-12 text-blue-600" />
              </div>
            </div>
            <Badge variant="secondary" className="mb-4">Beginner Level</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Introduction to Antennas
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Start your journey into the fascinating world of antenna theory.
              Learn the fundamental concepts that form the foundation of all
              wireless communication systems.
            </p>

            <div className="flex items-center justify-center space-x-8 mb-8">
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="h-5 w-5" />
                <span>143 min read</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Users className="h-5 w-5" />
                <span>25,000+ students</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Target className="h-5 w-5" />
                <span>8 key concepts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Context */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <History className="h-6 w-6 mr-3 text-blue-600" />
                  The Growth of Antenna Technology
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  In the 1890s, there were only a few antennas in the world. These rudimentary devices were
                  primarily a part of experiments that demonstrated the transmission of electromagnetic waves.
                  By World War II, antennas had become so ubiquitous that their use had transformed the lives
                  of the average person via radio and television reception.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By the early 21st century, thanks in large part to mobile phones, the average person
                  now carries multiple antennas on them wherever they go (mobile phones have multiple
                  antennas such as GPS, WIFI, Cellular and NFC). This significant rate of growth is not
                  likely to slow, as wireless communication systems become a larger part of everyday life.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The strong growth in RFID devices suggests that the number of antennas in use may increase
                  to one antenna per object in the world (product, container, pet, toy, etc.). This number
                  would dwarf the number of antennas in use today.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Objectives */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What You'll Learn
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                By the end of this course, you'll have a comprehensive understanding of antenna theory fundamentals
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {learningObjectives.map((objective, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-green-100 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium leading-relaxed">{objective}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Learning Modules */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Core Learning Modules
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Master the fundamentals of antenna theory through our structured, interactive learning path
              </p>
            </div>

            {/* Module Grid */}
            <Accordion type="single" collapsible className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {introSections.slice(0, 4).map((section, index) => {
                const IconComponent = section.icon
                return (
                  <AccordionItem key={section.id} value={section.id} className="border-0 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <AccordionTrigger className="px-6 py-5 hover:bg-blue-50 rounded-xl">
                      <div className="flex items-center space-x-4 text-left w-full">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <div className="flex items-center space-x-3 flex-1">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <IconComponent className="h-5 w-5 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900">
                              {section.title}
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                              {section.description}
                            </p>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs bg-white">
                          {section.duration}
                        </Badge>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 bg-white rounded-b-xl">
                      <div className="prose prose-gray max-w-none">
                        {section.content.split('\n').map((paragraph, pIndex) => (
                          <p key={pIndex} className="text-gray-700 leading-relaxed mb-3 whitespace-pre-line">
                            {paragraph.trim()}
                          </p>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                )
              })}
            </Accordion>

            {/* Advanced Modules */}
            <Accordion type="single" collapsible className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {introSections.slice(4).map((section, index) => {
                const IconComponent = section.icon
                return (
                  <AccordionItem key={section.id} value={section.id} className="border-0 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <AccordionTrigger className="px-6 py-5 hover:bg-green-50 rounded-xl">
                      <div className="flex items-center space-x-4 text-left w-full">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {index + 5}
                        </div>
                        <div className="flex items-center space-x-3 flex-1">
                          <div className="p-2 bg-green-100 rounded-lg">
                            <IconComponent className="h-5 w-5 text-green-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900">
                              {section.title}
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                              {section.description}
                            </p>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs bg-white">
                          {section.duration}
                        </Badge>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 bg-white rounded-b-xl">
                      <div className="prose prose-gray max-w-none">
                        {section.content.split('\n').map((paragraph, pIndex) => (
                          <p key={pIndex} className="text-gray-700 leading-relaxed mb-3 whitespace-pre-line">
                            {paragraph.trim()}
                          </p>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                )
              })}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Frequency Bands Reference */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequency Bands Reference Guide
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Essential reference for understanding how different frequency ranges relate to antenna design and applications
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                      <th className="px-6 py-4 text-left font-semibold">Band</th>
                      <th className="px-6 py-4 text-left font-semibold">Frequency Range</th>
                      <th className="px-6 py-4 text-left font-semibold">Wavelength</th>
                      <th className="px-6 py-4 text-left font-semibold">Common Uses</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-purple-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-purple-700">VLF</td>
                      <td className="px-6 py-4">3-30 kHz</td>
                      <td className="px-6 py-4">100-10 km</td>
                      <td className="px-6 py-4">Navigation, submarine communication, time signals</td>
                    </tr>
                    <tr className="hover:bg-purple-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-purple-700">LF</td>
                      <td className="px-6 py-4">30-300 kHz</td>
                      <td className="px-6 py-4">10-1 km</td>
                      <td className="px-6 py-4">AM radio, navigation beacons, time signals</td>
                    </tr>
                    <tr className="hover:bg-purple-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-purple-700">MF</td>
                      <td className="px-6 py-4">300 kHz-3 MHz</td>
                      <td className="px-6 py-4">1 km-100 m</td>
                      <td className="px-6 py-4">AM radio broadcasting, maritime communication</td>
                    </tr>
                    <tr className="hover:bg-purple-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-purple-700">HF</td>
                      <td className="px-6 py-4">3-30 MHz</td>
                      <td className="px-6 py-4">100-10 m</td>
                      <td className="px-6 py-4">Amateur radio, shortwave broadcasting, aircraft</td>
                    </tr>
                    <tr className="hover:bg-purple-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-purple-700">VHF</td>
                      <td className="px-6 py-4">30-300 MHz</td>
                      <td className="px-6 py-4">10-1 m</td>
                      <td className="px-6 py-4">FM radio, VHF TV, aviation, marine</td>
                    </tr>
                    <tr className="hover:bg-purple-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-purple-700">UHF</td>
                      <td className="px-6 py-4">300 MHz-3 GHz</td>
                      <td className="px-6 py-4">1m-10 cm</td>
                      <td className="px-6 py-4">UHF TV, cellular phones, WiFi, Bluetooth</td>
                    </tr>
                    <tr className="hover:bg-purple-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-purple-700">SHF</td>
                      <td className="px-6 py-4">3-30 GHz</td>
                      <td className="px-6 py-4">10-1 cm</td>
                      <td className="px-6 py-4">Satellite communication, radar, 5G mmWave</td>
                    </tr>
                    <tr className="hover:bg-purple-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-purple-700">EHF</td>
                      <td className="px-6 py-4">30-300 GHz</td>
                      <td className="px-6 py-4">1 cm-1 mm</td>
                      <td className="px-6 py-4">Millimeter wave communications, 6G, automotive radar</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NASA Dish Image Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <img
                src="https://ext.same-assets.com/3234147137/3486264634.jpeg"
                alt="NASA's 70-meter dish antenna at JPL"
                className="mx-auto rounded-lg shadow-lg"
                style={{ maxWidth: "480px", height: "auto" }}
              />
            </div>
            <p className="text-lg text-gray-600">
              A 70-meter dish antenna. Part of NASA's Jet Propulsion Laboratory (JPL) communication system.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Additional Learning Resources
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Expand your knowledge with these supplementary materials and tools
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalResources.map((resource, index) => {
                const IconComponent = resource.icon
                return (
                  <Card key={index} className="group bg-white hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-md">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl">
                          <IconComponent className="h-7 w-7 text-orange-600" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg group-hover:text-orange-600 transition-colors">
                            {resource.title}
                          </CardTitle>
                          <CardDescription className="mt-2 text-gray-600">
                            {resource.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center text-orange-600 text-sm font-medium group-hover:text-orange-700 transition-colors">
                        <span>Explore Resource</span>
                        <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Einstein Quote */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-8 border border-blue-200">
              <blockquote className="text-2xl italic text-gray-700 mb-4">
                "Everything should be made as simple as possible, but not simpler."
              </blockquote>
              <cite className="text-lg text-gray-500">— Albert Einstein</cite>
              <p className="text-gray-600 mt-4">
                This philosophy guides our approach to teaching antenna theory - making complex concepts accessible without oversimplification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-200">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ready to Continue Your Journey?
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                You've mastered the fundamentals of antenna theory. Now it's time to explore advanced concepts and practical applications.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/basics">
                  <Button size="lg" className="px-10 py-6 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300">
                    <BookOpen className="mr-3 h-5 w-5" />
                    Next: Antenna Basics
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="outline" size="lg" className="px-10 py-6 text-lg border-2 hover:bg-gray-50 transition-all duration-300">
                    <ArrowLeft className="mr-3 h-5 w-5" />
                    Back to Topics
                  </Button>
                </Link>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  Estimated time to complete next module: <span className="font-semibold text-gray-700">45-60 minutes</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
