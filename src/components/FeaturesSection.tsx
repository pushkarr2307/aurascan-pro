import { ScanFace, Clock, ShieldCheck, BrainCircuit, Zap, LayoutDashboard } from "lucide-react";

const features = [
  { icon: ScanFace, title: "Face Detection", desc: "Advanced facial detection with real-time accuracy" },
  { icon: Clock, title: "Real-time Tracking", desc: "Instant attendance logging as students arrive" },
  { icon: ShieldCheck, title: "Secure Data Storage", desc: "Encrypted data with enterprise-grade security" },
  { icon: BrainCircuit, title: "AI Powered Recognition", desc: "Deep learning models for 99.9% accuracy" },
  { icon: Zap, title: "Fast Processing", desc: "Sub-second face matching and verification" },
  { icon: LayoutDashboard, title: "Easy Dashboard", desc: "Intuitive admin panel for managing records" },
];

const FeaturesSection = () => (
  <section className="relative py-24 px-4 z-10" id="features">
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
        <span className="gradient-text">Powerful Features</span>
      </h2>
      <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
        Everything you need for a seamless attendance experience
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="glass-card p-8 group hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 opacity-0 animate-fade-in"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:glow-primary transition-all duration-300">
              <f.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
