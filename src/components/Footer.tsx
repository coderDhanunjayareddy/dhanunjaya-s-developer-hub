import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div>
            <a href="#home" className="text-2xl font-bold">
              Dhanunjaya<span className="text-accent">.</span>
            </a>
            <p className="text-primary-foreground/70 mt-3 text-sm">
              Software Developer passionate about building scalable applications and cloud solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-6">
              {["Home", "About", "Projects", "Skills", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="https://github.com/coderDhanunjayareddy"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground/70 hover:bg-primary-foreground hover:text-foreground transition-all"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/dhanunjaya-somireddy/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground/70 hover:bg-primary-foreground hover:text-foreground transition-all"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:dhanunjayareddy.techie@gmail.com"
              className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground/70 hover:bg-primary-foreground hover:text-foreground transition-all"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm flex items-center justify-center gap-1">
            © {currentYear} Dhanunjaya. Made with <Heart size={14} className="text-accent fill-accent" /> in Hyderabad
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
