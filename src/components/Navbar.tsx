import { ScanFace } from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-glass-border">
    <div className="container mx-auto px-4 h-16 flex items-center justify-between">
      <a href="#" className="flex items-center gap-2 font-bold text-lg">
        <ScanFace className="w-6 h-6 text-primary" />
        <span className="gradient-text">FaceAttend</span>
      </a>
      <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
        <a href="#features" onClick={scrollTo("features")} className="hover:text-foreground transition-colors cursor-pointer">Features</a>
        <a href="#demo" onClick={scrollTo("demo")} className="hover:text-foreground transition-colors cursor-pointer">Demo</a>
        <a href="#dashboard" onClick={scrollTo("dashboard")} className="hover:text-foreground transition-colors cursor-pointer">Dashboard</a>
        <a href="#contact" onClick={scrollTo("contact")} className="hover:text-foreground transition-colors cursor-pointer">Contact</a>
      </div>
      <button onClick={scrollTo("demo")} className="glow-button px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium">
        Get Started
      </button>
    </div>
  </nav>
);

export default Navbar;
