const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 80 },
      { name: "JavaScript", level: 75 },
      { name: "SQL", level: 85 },
    ],
    color: "primary",
  },
  {
    title: "Frameworks",
    skills: [
      { name: "Spring Boot", level: 90 },
      { name: "Hibernate (JPA)", level: 85 },
      { name: "React.js", level: 70 },
      { name: "FastAPI", level: 75 },
    ],
    color: "accent",
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "PostgreSQL", level: 80 },
      { name: "Aurora RDS", level: 75 },
    ],
    color: "yellow",
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS S3", level: 85 },
      { name: "Elastic Beanstalk", level: 80 },
      { name: "CloudFront", level: 75 },
      { name: "Git & Maven", level: 90 },
    ],
    color: "purple",
  },
  {
    title: "Testing & Tools",
    skills: [
      { name: "JUnit", level: 85 },
      { name: "Mockito", level: 80 },
      { name: "Postman", level: 90 },
      { name: "REST APIs", level: 95 },
    ],
    color: "green",
  },
  {
    title: "Data & AI",
    skills: [
      { name: "Pandas", level: 80 },
      { name: "NumPy", level: 75 },
      { name: "Machine Learning", level: 65 },
      { name: "SHAP (XAI)", level: 60 },
    ],
    color: "cyan",
  },
];

const colorClasses = {
  primary: {
    bg: "bg-primary",
    light: "bg-primary-light",
    text: "text-primary",
  },
  accent: {
    bg: "bg-accent",
    light: "bg-accent-light",
    text: "text-accent",
  },
  yellow: {
    bg: "bg-yellow",
    light: "bg-yellow-light",
    text: "text-yellow",
  },
  purple: {
    bg: "bg-purple",
    light: "bg-purple-light",
    text: "text-purple",
  },
  green: {
    bg: "bg-green",
    light: "bg-green-light",
    text: "text-green",
  },
  cyan: {
    bg: "bg-cyan",
    light: "bg-cyan-light",
    text: "text-cyan",
  },
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent-light text-accent font-semibold text-sm mb-4">
            SKILLS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building production-ready applications from backend to cloud.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const colors = colorClasses[category.color as keyof typeof colorClasses];
            return (
              <div
                key={index}
                className="bg-background rounded-2xl p-6 shadow-md card-hover border border-border"
              >
                <h3 className={`text-xl font-bold ${colors.text} mb-6`}>
                  {category.title}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-foreground text-sm">
                          {skill.name}
                        </span>
                        <span className="text-muted-foreground text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className={`h-2 rounded-full ${colors.light}`}>
                        <div
                          className={`h-full rounded-full ${colors.bg} transition-all duration-1000`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Certifications & Achievements
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Java Full Stack Development", org: "EduBridge (NSDC)", grade: "A (86%)" },
              { title: "JPMorgan Chase SWE Virtual", org: "Forage", grade: "Completed" },
              { title: "Top 5% - #T20DSAChallenge", org: "AlgoUniversity", grade: "Jan 2025" },
              { title: "Best Intern FY 2024-25", org: "Spectropy Edutech", grade: "Award" },
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-5 border border-border text-center hover:border-primary hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-foreground text-sm mb-1">{cert.title}</h4>
                <p className="text-muted-foreground text-xs mb-2">{cert.org}</p>
                <span className="inline-block px-3 py-1 rounded-full bg-primary-light text-primary text-xs font-medium">
                  {cert.grade}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
