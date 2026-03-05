import { Code2, Eye, BrainCircuit, Database, Globe } from "lucide-react";

const techs = [
  { icon: Code2, name: "Python", desc: "Core backend language" },
  { icon: Eye, name: "OpenCV", desc: "Computer vision library" },
  { icon: BrainCircuit, name: "Face Recognition", desc: "Deep learning model" },
  { icon: Database, name: "Database", desc: "Persistent data storage" },
  { icon: Globe, name: "Web Interface", desc: "Modern web dashboard" },
];

const TechStack = () => (
  <section className="relative py-24 px-4 z-10">
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
        <span className="gradient-text">Technology Used</span>
      </h2>
      <p className="text-muted-foreground text-center mb-16">Built with cutting-edge technologies</p>
      <div className="flex flex-wrap justify-center gap-6">
        {techs.map((t, i) => (
          <div
            key={t.name}
            className="glass-card p-6 w-44 text-center group hover:border-primary/40 hover:-translate-y-1 transition-all duration-500 opacity-0 animate-fade-in"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <t.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">{t.name}</h3>
            <p className="text-xs text-muted-foreground">{t.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;
