import { useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const categories = ["All", "Full Stack", "Backend", "AI/ML", "Cloud"];

const projects = [
  {
    title: "Automated Code Review System",
    description: "Production-ready full-stack application for automated code quality analysis. Features JWT authentication, RESTful APIs, and cloud deployment.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    technologies: ["Spring Boot", "React.js", "MySQL", "AWS"],
    category: "Full Stack",
    github: "https://github.com/coderDhanunjayareddy/automated-code-review-system",
    live: "",
    highlights: ["JWT Auth", "REST APIs", "AWS Deployed"],
  },
  {
    title: "Fraud Detection System",
    description: "End-to-end system to detect anomalous financial transactions using machine learning with Explainable AI integration.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["Python", "FastAPI", "PostgreSQL", "SHAP"],
    category: "AI/ML",
    github: "https://github.com/coderDhanunjayareddy/explainable-fraud-detection-system",
    live: "",
    highlights: ["Isolation Forest", "SHAP Integration", "Audit Logging"],
  },
  {
    title: "Smart Complaint Tracker",
    description: "Full-stack complaint management system with role-based access, real-time status updates, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    technologies: ["Spring Boot", "Angular", "MySQL", "JWT"],
    category: "Full Stack",
    github: "https://github.com/coderDhanunjayareddy/Smart-Complaint-Tracker",
    live: "",
    highlights: ["Role-Based Auth", "Real-time Updates", "Admin Panel"],
  },
  {
    title: "E-commerce Website",
    description: "Modern frontend e-commerce application with product listings, shopping cart, and responsive design for seamless user experience.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    category: "Full Stack",
    github: "https://github.com/coderDhanunjayareddy/E-commerce-Website",
    live: "",
    highlights: ["Product Catalog", "Shopping Cart", "Mobile Friendly"],
  },
  {
    title: "LMS/CMS Deployment Suite",
    description: "Enterprise-grade Learning Management System deployments with comprehensive code reviews and technical documentation.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    technologies: ["Java", "Spring Boot", "AWS", "Docker"],
    category: "Cloud",
    github: "https://github.com/coderDhanunjayareddy",
    live: "",
    highlights: ["Enterprise Scale", "CI/CD", "AWS Infrastructure"],
  },
  {
    title: "Data Processing Automation",
    description: "Python-based automation system that reduced manual data processing time by 30% and eliminated human errors.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
    technologies: ["Python", "Pandas", "NumPy", "Automation"],
    category: "Backend",
    github: "https://github.com/coderDhanunjayareddy",
    live: "",
    highlights: ["30% Time Saved", "Error Elimination", "Workflow Automation"],
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-light text-primary font-semibold text-sm mb-4">
            PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world applications built with modern technologies, deployed on cloud, and ready for production.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-primary"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-background rounded-2xl overflow-hidden shadow-md card-hover border border-border"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-background text-foreground flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-background text-foreground flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                  {project.category}
                </span>
                
                <h3 className="text-xl font-bold text-foreground mt-2 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-primary-light text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/coderDhanunjayareddy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            View All Projects on GitHub
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
