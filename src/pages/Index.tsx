import Navigation from "@/components/ui/navigation/navigation"
import HeroSection from "@/components/ui/sections/hero-section"
import DeploymentGap from "@/components/ui/sections/deployment-gap"
import Approach from "@/components/ui/sections/approach"
import ServicesSection from "@/components/ui/sections/services-section"
import EngagementSection from "@/components/ui/sections/engagement-section"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <DeploymentGap />
      <Approach />
      <ServicesSection />
      <EngagementSection />
    </div>
  );
};

export default Index;
