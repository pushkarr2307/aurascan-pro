import { ScanFace, CheckCircle2 } from "lucide-react";

const DemoSection = () => (
  <section className="relative py-24 px-4 z-10" id="demo">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
        <span className="gradient-text">Live Demo</span>
      </h2>
      <p className="text-muted-foreground text-center mb-16">See the system in action</p>

      <div className="glass-card p-2 glow-primary">
        <div className="bg-background/60 rounded-xl p-6 md:p-10 flex flex-col items-center">
          {/* Mock camera */}
          <div className="relative w-full max-w-md aspect-[4/3] bg-muted/30 rounded-xl border border-glass-border overflow-hidden mb-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <ScanFace className="w-24 h-24 text-primary/60 animate-pulse-glow" />
                {/* Scan line */}
                <div className="absolute inset-0 overflow-hidden rounded">
                  <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-line" />
                </div>
              </div>
            </div>
            {/* Corner markers */}
            <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-primary rounded-tl" />
            <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-primary rounded-tr" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-primary rounded-bl" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-primary rounded-br" />
            <div className="absolute top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary/20 rounded-full text-xs text-primary font-medium">
              SCANNING...
            </div>
          </div>

          <div className="flex items-center gap-3 glass-card px-6 py-4">
            <CheckCircle2 className="w-8 h-8 text-green-400" />
            <div>
              <p className="font-semibold text-foreground">Attendance Marked Successfully</p>
              <p className="text-sm text-muted-foreground">Student ID: STU-2024-0847</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default DemoSection;
