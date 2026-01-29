import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import avatarImage from "@/assets/avatar.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        {/* Yellow blob top-right */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-yellow opacity-20 blob animate-blob" />
        {/* Blue accent blob */}
        <div className="absolute bottom-20 left-10 w-[300px] h-[300px] bg-primary opacity-10 blob-2 animate-blob" style={{ animationDelay: '2s' }} />
        {/* Decorative lines */}
        <svg className="absolute top-40 left-20 text-primary opacity-30" width="100" height="100" viewBox="0 0 100 100">
          <path d="M10 50 Q 30 10, 50 50 T 90 50" stroke="currentColor" strokeWidth="3" fill="none" />
        </svg>
        <svg className="absolute bottom-40 right-20 text-accent opacity-40" width="80" height="80" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="35" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="10 5" />
        </svg>
      </div>

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-accent-light text-accent font-semibold text-sm mb-6">
              👋 Welcome to my Portfolio
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Hello, I'm{" "}
              <span className="relative">
                <span className="relative z-10 text-primary">Dhanunjaya</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-yellow opacity-40 -z-0" />
              </span>
              <br />
              <span className="text-foreground">A Software Developer</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Building real-world systems with <span className="font-semibold text-foreground">Java Full Stack</span>, 
              <span className="font-semibold text-foreground"> Spring Boot</span>, and 
              <span className="font-semibold text-foreground"> AWS Cloud</span>. 
              Final-year MCA student passionate about backend engineering, secure APIs, and production-grade applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 font-semibold text-accent-foreground shadow-accent transition-all duration-300 hover:bg-accent-hover hover:shadow-lg hover:scale-105"
              >
                View Projects
                <ArrowRight size={18} />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-foreground px-8 py-3.5 font-semibold text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground text-sm font-medium">Follow me:</span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/dhanunjaya-varma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/dhanunjaya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:dhanunjayareddy.techie@gmail.com"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Avatar */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-yellow rounded-[40px] transform rotate-6 scale-95" />
              <div className="relative bg-primary-light rounded-[40px] p-4 transform -rotate-3">
                <img
                  src={avatarImage}
                  alt="Dhanunjaya - Software Developer"
                  className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-[32px] shadow-xl"
                />
              </div>
              
              {/* Experience Badge */}
              <div className="absolute -right-4 top-10 bg-background shadow-xl rounded-2xl px-5 py-4 animate-float">
                <div className="text-3xl font-bold text-accent">1+</div>
                <div className="text-sm text-muted-foreground">Years<br/>Experience</div>
              </div>

              {/* Tech Stack Badge */}
              <div className="absolute -left-4 bottom-20 bg-background shadow-xl rounded-2xl px-5 py-3 animate-float-delayed">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green" />
                  <span className="text-sm font-medium text-foreground">Available for Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
