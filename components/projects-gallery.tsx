"use client"

import { useState } from "react"
import ProjectCard from "@/components/project-card"
import ProjectModal from "@/components/project-modal"

export interface Project {
  id: number
  title: string
  shortDescription: string
  fullDescription: string
  techStack: string[]
  category: "Web" | "Mobile" | "Desktop" | "Full-Stack"
  githubUrl?: string
  demoUrl?: string
  imageUrl: string
  features: string[]
  challenges: string[]
  outcomes: string[]
  featured: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: "Dynamic Insurance Pricing Portal",
    shortDescription: "AI-powered insurance premium calculation system with real-time risk assessment",
    fullDescription:
      "A sophisticated web application that revolutionizes insurance pricing by dynamically adjusting premiums based on comprehensive risk factors. The system integrates multiple data sources, applies machine learning algorithms for risk assessment, and provides real-time pricing updates to both agents and customers.",
    techStack: ["React", ".NET Core", "SQL Server", "Azure", "C#", "TypeScript"],
    category: "Full-Stack",
    githubUrl: "https://github.com/ntsika-ngilane/insurance-pricing",
    demoUrl: "https://insurance-demo.ntsika.dev",
    imageUrl: "/placeholder.svg?height=400&width=600&text=Insurance+Pricing+Portal",
    features: [
      "Real-time premium calculations",
      "Multi-factor risk assessment",
      "Agent dashboard with analytics",
      "Customer self-service portal",
      "Integration with external data sources",
      "Automated policy generation",
    ],
    challenges: [
      "Complex risk calculation algorithms",
      "Real-time data synchronization",
      "Scalable architecture design",
      "Regulatory compliance requirements",
    ],
    outcomes: [
      "40% reduction in pricing turnaround time",
      "25% improvement in risk accuracy",
      "Enhanced customer satisfaction",
      "Streamlined agent workflows",
    ],
    featured: true,
  },
  {
    id: 2,
    title: "SDF Portfolio Piece",
    shortDescription: "Responsive, pixel-perfect personal showcase with modern design principles",
    fullDescription:
      "A meticulously crafted portfolio website that demonstrates advanced front-end development skills and design sensibilities. Built with performance and accessibility in mind, featuring smooth animations, responsive design, and optimized user experience across all devices.",
    techStack: ["React", "Tailwind CSS", "Next.js", "TypeScript", "Framer Motion"],
    category: "Web",
    githubUrl: "https://github.com/ntsika-ngilane/sdf-portfolio",
    demoUrl: "https://sdf-portfolio.ntsika.dev",
    imageUrl: "/placeholder.svg?height=400&width=600&text=SDF+Portfolio",
    features: [
      "Pixel-perfect responsive design",
      "Smooth scroll animations",
      "Dark/light mode toggle",
      "Performance optimized",
      "SEO friendly",
      "Accessibility compliant",
    ],
    challenges: [
      "Cross-browser compatibility",
      "Performance optimization",
      "Complex animation sequences",
      "Mobile-first responsive design",
    ],
    outcomes: [
      "100% Lighthouse performance score",
      "WCAG AA accessibility compliance",
      "Sub-second load times",
      "Positive client feedback",
    ],
    featured: true,
  },
  {
    id: 3,
    title: "CappyBara Tech Website",
    shortDescription: "Medical startup website for innovative endocrinology device solutions",
    fullDescription:
      "A comprehensive web platform for CappyBara Tech, a medical technology startup focused on endocrinology devices. The site serves as both a marketing platform and a portal for healthcare professionals to learn about cutting-edge medical solutions.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "AWS", "Stripe"],
    category: "Full-Stack",
    githubUrl: "https://github.com/cappybara-tech/website",
    demoUrl: "https://cappybaratech.com",
    imageUrl: "/placeholder.svg?height=400&width=600&text=CappyBara+Tech",
    features: [
      "Healthcare professional portal",
      "Product showcase and demos",
      "Secure document management",
      "Appointment scheduling system",
      "Payment processing integration",
      "Regulatory compliance features",
    ],
    challenges: [
      "HIPAA compliance requirements",
      "Medical data security",
      "Complex user role management",
      "Integration with medical devices",
    ],
    outcomes: [
      "Successful product launch",
      "Healthcare professional adoption",
      "Regulatory approval support",
      "Investor presentation platform",
    ],
    featured: true,
  },
  {
    id: 4,
    title: "Custom C# Games Collection",
    shortDescription: "Advanced desktop games showcasing complex algorithms and system architecture",
    fullDescription:
      "A collection of sophisticated desktop games built with C# and .NET, demonstrating advanced programming concepts, game mechanics, and system architecture. Each game presents unique challenges in areas such as AI, physics simulation, and real-time rendering.",
    techStack: ["C#", ".NET", "Unity", "WPF", "DirectX", "SQLite"],
    category: "Desktop",
    githubUrl: "https://github.com/ntsika-ngilane/csharp-games",
    imageUrl: "/placeholder.svg?height=400&width=600&text=C%23+Games+Collection",
    features: [
      "Advanced AI opponents",
      "Physics-based gameplay",
      "Real-time multiplayer",
      "Custom game engines",
      "Save/load game states",
      "Performance optimization",
    ],
    challenges: [
      "Complex game state management",
      "Real-time performance optimization",
      "AI algorithm implementation",
      "Memory management",
    ],
    outcomes: [
      "Demonstrated advanced C# skills",
      "Complex problem-solving abilities",
      "System architecture expertise",
      "Performance optimization mastery",
    ],
    featured: true,
  },
  {
    id: 5,
    title: "Task Management Mobile App",
    shortDescription: "Cross-platform productivity app with offline sync capabilities",
    fullDescription:
      "A comprehensive task management application built with React Native, featuring offline capabilities, real-time synchronization, and intuitive user interface design. The app helps users organize their work and personal tasks efficiently.",
    techStack: ["React Native", "TypeScript", "Firebase", "Redux", "Expo"],
    category: "Mobile",
    githubUrl: "https://github.com/ntsika-ngilane/task-manager",
    imageUrl: "/placeholder.svg?height=400&width=600&text=Task+Manager+App",
    features: [
      "Offline task management",
      "Real-time synchronization",
      "Push notifications",
      "Dark mode support",
      "Gesture-based interactions",
      "Data export capabilities",
    ],
    challenges: [
      "Offline data synchronization",
      "Cross-platform consistency",
      "Performance on older devices",
      "Battery optimization",
    ],
    outcomes: [
      "High user engagement rates",
      "Positive app store reviews",
      "Smooth cross-platform experience",
      "Efficient offline functionality",
    ],
    featured: false,
  },
  {
    id: 6,
    title: "E-commerce Analytics Dashboard",
    shortDescription: "Real-time business intelligence platform for online retailers",
    fullDescription:
      "A comprehensive analytics dashboard that provides e-commerce businesses with real-time insights into sales performance, customer behavior, and inventory management. Built with modern web technologies and optimized for large-scale data processing.",
    techStack: ["Vue.js", "Python", "PostgreSQL", "Redis", "Docker", "AWS"],
    category: "Web",
    githubUrl: "https://github.com/ntsika-ngilane/ecommerce-analytics",
    imageUrl: "/placeholder.svg?height=400&width=600&text=Analytics+Dashboard",
    features: [
      "Real-time data visualization",
      "Custom report generation",
      "Predictive analytics",
      "Multi-store support",
      "API integrations",
      "Automated alerts",
    ],
    challenges: [
      "Large-scale data processing",
      "Real-time data streaming",
      "Complex visualization requirements",
      "Multi-tenant architecture",
    ],
    outcomes: [
      "Improved business decision making",
      "Increased sales performance",
      "Reduced operational costs",
      "Enhanced customer insights",
    ],
    featured: false,
  },
]

export default function ProjectsGallery() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [filter, setFilter] = useState<"All" | Project["category"]>("All")

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {["All", "Web", "Mobile", "Desktop", "Full-Stack"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category as any)}
            className={`px-4 py-2 rounded-lg font-mono transition-all duration-300 ${
              filter === category
                ? "bg-foreground text-background"
                : "bg-muted text-muted-foreground hover:bg-foreground/10"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Featured Projects */}
      {filter === "All" && (
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold font-sans mb-8 text-center">
            Featured <span className="text-muted-foreground">Projects</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <ProjectCard project={project} onSelect={setSelectedProject} featured={true} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All Projects Grid */}
      <div className={filter === "All" ? "mt-16" : ""}>
        {filter === "All" && (
          <h2 className="text-2xl md:text-3xl font-bold font-sans mb-8 text-center">
            Other <span className="text-muted-foreground">Projects</span>
          </h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(filter === "All" ? otherProjects : filteredProjects).map((project, index) => (
            <div key={project.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <ProjectCard project={project} onSelect={setSelectedProject} featured={false} />
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  )
}
