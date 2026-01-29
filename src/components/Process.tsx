import { Search, PenTool, Code, TestTube, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Problem Understanding",
    description: "Deep dive into requirements, user needs, and system constraints to define clear objectives.",
    color: "yellow",
  },
  {
    icon: PenTool,
    title: "System Design",
    description: "Architecture planning, database schema design, API contracts, and technology stack selection.",
    color: "primary",
  },
  {
    icon: Code,
    title: "Development",
    description: "Clean code implementation with best practices, modular components, and proper documentation.",
    color: "accent",
  },
  {
    icon: TestTube,
    title: "Testing & Security",
    description: "Unit tests, integration tests, security audits, and vulnerability assessments.",
    color: "purple",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "Cloud deployment, CI/CD setup, monitoring configuration, and performance optimization.",
    color: "green",
  },
];

const colorClasses = {
  yellow: {
    bg: "bg-yellow",
    text: "text-foreground",
    light: "bg-yellow-light",
  },
  primary: {
    bg: "bg-primary",
    text: "text-primary-foreground",
    light: "bg-primary-light",
  },
  accent: {
    bg: "bg-accent",
    text: "text-accent-foreground",
    light: "bg-accent-light",
  },
  purple: {
    bg: "bg-purple",
    text: "text-accent-foreground",
    light: "bg-purple-light",
  },
  green: {
    bg: "bg-green",
    text: "text-accent-foreground",
    light: "bg-green-light",
  },
};

const Process = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-yellow-light text-yellow font-semibold text-sm mb-4">
            PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My Development Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A structured approach to building reliable, scalable software systems from concept to deployment.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-1 bg-gradient-to-r from-yellow via-primary via-accent to-green rounded-full" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const colors = colorClasses[step.color as keyof typeof colorClasses];
              return (
                <div key={index} className="relative flex flex-col items-center text-center">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl ${colors.bg} ${colors.text} flex items-center justify-center mb-6 shadow-lg relative z-10`}
                  >
                    <step.icon size={28} />
                  </div>
                  
                  {/* Step Number */}
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-foreground text-foreground font-bold text-sm flex items-center justify-center z-20">
                    {index + 1}
                  </span>

                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
