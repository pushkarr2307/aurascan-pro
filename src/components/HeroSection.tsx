import heroImage from "@/assets/hero-face-scan.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="gradient-text">AI Face</span>
            <br />
            <span className="text-foreground">Attendance System</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
            Smart, Fast and Secure Attendance using Facial Recognition
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="glow-button px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-lg">
              Try Demo
            </button>
            <button className="px-8 py-3 rounded-xl border border-glass-border bg-glass/30 backdrop-blur text-foreground font-semibold text-lg hover:bg-glass/50 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
        <div className="relative flex justify-center" style={{ animationDelay: "0.3s" }}>
          <div className="relative w-full max-w-lg">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl" />
            <img
              src={heroImage}
              alt="AI Face Recognition Scanning Illustration"
              className="relative rounded-2xl w-full animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
