import { Download, Award, Briefcase } from "lucide-react";
import aboutPhoto from "@/assets/about-photo.png";

const highlights = [
  {
    icon: Briefcase,
    title: "5+ Projects Deployed",
    description: "Real production applications on AWS cloud infrastructure",
  },
  {
    icon: Award,
    title: "Best Intern Award",
    description: "FY 2024-25 at Spectropy Edutech Pvt. Ltd.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent opacity-5 rounded-full blur-3xl" />
      </div>

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute inset-0 border-4 border-accent rounded-3xl transform translate-x-4 translate-y-4" />
              <img
                src={aboutPhoto}
                alt="Dhanunjaya speaking at an event"
                className="relative w-full max-w-md mx-auto rounded-3xl shadow-xl object-cover aspect-[3/4]"
              />
            </div>

            {/* Decorative elements */}
            <svg className="absolute -top-10 -left-10 text-yellow opacity-60" width="80" height="80" viewBox="0 0 80 80">
              <path d="M10 40 Q 20 10, 40 20 T 70 40" stroke="currentColor" strokeWidth="4" fill="none" />
            </svg>
          </div>

          {/* Right - Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-accent-light text-accent font-semibold text-sm mb-6">
              ABOUT ME
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Building Real Solutions,{" "}
              <span className="text-primary">Not Just Code</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a final-year MCA student at RVRR Institute of Technology, Hyderabad, 
              with a strong focus on <span className="text-foreground font-semibold">backend engineering</span>, 
              <span className="text-foreground font-semibold"> cloud infrastructure</span>, and 
              <span className="text-foreground font-semibold"> applied AI systems</span>.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              With hands-on experience at Spectropy Edutech as an Associate Trainee Intern, 
              I've built production-grade applications, automated workflows reducing processing time by 30%, 
              and increased test coverage from 55% to 92%. I believe in writing clean, maintainable code 
              and deploying systems that actually work in the real world.
            </p>

            {/* Highlights */}
            <div className="space-y-4 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center flex-shrink-0">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="/Dhanunjaya_Resume.pdf"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 font-semibold text-accent-foreground shadow-accent transition-all duration-300 hover:bg-accent-hover hover:shadow-lg"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
