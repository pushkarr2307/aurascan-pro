import Particles from "@/components/Particles";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DemoSection from "@/components/DemoSection";
import DashboardPreview from "@/components/DashboardPreview";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="gradient-bg min-h-screen relative overflow-hidden">
    <Particles />
    <Navbar />
    <HeroSection />
    <FeaturesSection />
    <HowItWorksSection />
    <DemoSection />
    <DashboardPreview />
    <TechStack />
    <Footer />
  </div>
);

export default Index;
