import { Server, Layout, Cloud, Brain } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Backend Development",
    description: "Building robust, secure REST APIs with Spring Boot, Hibernate, and JWT authentication. Optimized database design with MySQL and PostgreSQL.",
    color: "primary",
  },
  {
    icon: Layout,
    title: "Full Stack Applications",
    description: "End-to-end web applications using Java Spring Boot backend with React.js frontend. Clean architecture and responsive design.",
    color: "accent",
  },
  {
    icon: Cloud,
    title: "Cloud & Deployment",
    description: "AWS cloud infrastructure setup with S3, CloudFront, Elastic Beanstalk, and RDS. HTTPS configuration and custom domain setup.",
    color: "yellow",
  },
  {
    icon: Brain,
    title: "AI-Based Systems",
    description: "Intelligent automation systems using Python, FastAPI, and machine learning. Explainable AI integration for transparency.",
    color: "purple",
  },
];

const colorClasses = {
  primary: {
    bg: "bg-primary-light",
    icon: "text-primary",
    hover: "group-hover:bg-primary group-hover:text-primary-foreground",
  },
  accent: {
    bg: "bg-accent-light",
    icon: "text-accent",
    hover: "group-hover:bg-accent group-hover:text-accent-foreground",
  },
  yellow: {
    bg: "bg-yellow-light",
    icon: "text-yellow",
    hover: "group-hover:bg-yellow group-hover:text-foreground",
  },
  purple: {
    bg: "bg-purple-light",
    icon: "text-purple",
    hover: "group-hover:bg-purple group-hover:text-accent-foreground",
  },
};

const Services = () => {
  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-light text-primary font-semibold text-sm mb-4">
            SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Expertise & Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Specialized in building scalable, production-ready systems with modern technologies.
            From backend APIs to cloud deployment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const colors = colorClasses[service.color as keyof typeof colorClasses];
            return (
              <div
                key={index}
                className="group bg-background rounded-2xl p-6 shadow-md card-hover cursor-pointer"
              >
                <div
                  className={`w-16 h-16 rounded-2xl ${colors.bg} ${colors.icon} ${colors.hover} flex items-center justify-center mb-6 transition-all duration-300`}
                >
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
