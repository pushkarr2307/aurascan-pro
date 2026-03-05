import { Camera, BrainCircuit, CheckCircle } from "lucide-react";

const steps = [
  { icon: Camera, title: "Capture Face", desc: "Student stands in front of the camera for scanning", num: "01" },
  { icon: BrainCircuit, title: "AI Detects Identity", desc: "Our AI model identifies the student in milliseconds", num: "02" },
  { icon: CheckCircle, title: "Attendance Recorded", desc: "Attendance is automatically marked in the system", num: "03" },
];

const HowItWorksSection = () => (
  <section className="relative py-24 px-4 z-10">
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
        <span className="gradient-text">How It Works</span>
      </h2>
      <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
        Three simple steps to automated attendance
      </p>
      <div className="grid md:grid-cols-3 gap-8 relative">
        {/* connector line */}
        <div className="hidden md:block absolute top-20 left-1/6 right-1/6 h-px bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50" />
        {steps.map((s, i) => (
          <div
            key={s.num}
            className="glass-card p-8 text-center relative opacity-0 animate-fade-in"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            <div className="text-5xl font-bold gradient-text opacity-20 absolute top-4 right-6">{s.num}</div>
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 glow-primary">
              <s.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
