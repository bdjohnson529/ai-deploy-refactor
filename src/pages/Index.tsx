import Navigation from "@/components/ui/navigation/navigation"
import HeroSection from "@/components/ui/sections/hero-section"
import Problem from "@/components/ui/sections/problem"
import ProductionUseCases from "@/components/ui/sections/production-use-cases"
import Services from "@/components/ui/sections/services"
import Engagement from "@/components/ui/sections/engagement"
import Approach from "@/components/ui/sections/approach"
import Offerings from "@/components/ui/sections/offerings"


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <Problem />
      <Approach />
      <Offerings />
      <Services />
      <Engagement />
    </div>
  );
};

export default Index;
