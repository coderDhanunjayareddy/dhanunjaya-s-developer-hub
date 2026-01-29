import { useState, FormEvent } from "react";
import { Send, Mail, Phone, MapPin, Github, Linkedin, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

// EmailJS Configuration - Replace with your credentials
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"; // e.g., "service_xxxxxx"
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // e.g., "template_xxxxxx"
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // e.g., "xxxxxxxxxxxxxx"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus("error");
      setStatusMessage("Please fill in all fields.");
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: "Dhanunjaya",
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setStatusMessage("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus("error");
      setStatusMessage("Failed to send message. Please try again or email me directly.");
      console.error("EmailJS Error:", error);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent opacity-5 rounded-full blur-3xl" />
      </div>

      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-yellow-light text-yellow font-semibold text-sm mb-4">
            CONTACT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Got a Project? Let's Talk
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Open to internships, full-time opportunities, and exciting projects. Let's build something great together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 lg:p-10 text-primary-foreground">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-primary-foreground/80 mb-10">
              Fill up the form and I'll get back to you within 24 hours.
            </p>

            <div className="space-y-6 mb-10">
              <a
                href="tel:+919705323923"
                className="flex items-center gap-4 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <span>+91 9705323923</span>
              </a>
              <a
                href="mailto:dhanunjayareddy.techie@gmail.com"
                className="flex items-center gap-4 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <span>dhanunjayareddy.techie@gmail.com</span>
              </a>
              <div className="flex items-center gap-4 text-primary-foreground/90">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <span>Hyderabad, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/coderDhanunjayareddy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/dhanunjaya-somireddy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all"
              >
                <Linkedin size={18} />
              </a>
            </div>

            {/* Decorative */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
          </div>

          {/* Contact Form */}
          <div className="bg-background rounded-3xl p-8 lg:p-10 shadow-xl border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Job Opportunity / Project Discussion"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  required
                />
              </div>

              {/* Status Message */}
              {status !== "idle" && status !== "sending" && (
                <div
                  className={`flex items-center gap-2 p-4 rounded-xl ${
                    status === "success"
                      ? "bg-green-light text-green"
                      : "bg-destructive/10 text-destructive"
                  }`}
                >
                  {status === "success" ? (
                    <CheckCircle size={20} />
                  ) : (
                    <AlertCircle size={20} />
                  )}
                  <span className="text-sm font-medium">{statusMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-8 py-4 font-semibold text-accent-foreground shadow-accent transition-all duration-300 hover:bg-accent-hover hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <span className="animate-spin w-5 h-5 border-2 border-accent-foreground border-t-transparent rounded-full" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
