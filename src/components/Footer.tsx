import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="relative z-10 border-t border-glass-border">
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold gradient-text mb-2">AI Face Attendance</h3>
          <p className="text-sm text-muted-foreground">Smart, Fast and Secure Attendance using Facial Recognition.</p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-3">Developer</h4>
          <p className="text-sm text-muted-foreground">Built with ❤️ by Your Name</p>
          <p className="text-sm text-muted-foreground">Computer Science Student</p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-3">Connect</h4>
          <div className="flex gap-4 justify-center md:justify-start">
            {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-xl bg-glass/40 border border-glass-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-glass-border/50 text-center text-xs text-muted-foreground">
        © 2026 AI Face Attendance System. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
