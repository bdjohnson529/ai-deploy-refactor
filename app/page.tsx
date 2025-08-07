import Navigation from "@/components/ui/navigation/navigation";
import Problem from "@/components/ui/sections/problem";
import Services from "@/components/ui/sections/services";
import Approach from "@/components/ui/sections/approach";
import Offerings from "@/components/ui/sections/offerings";
import HeroSection from "@/components/ui/sections/hero-section";
import Engagement from "@/components/ui/sections/engagement";

export default function Home() {
  return (
    <div className="min-h-screen bg-background" id="top">
      <Navigation />
      <HeroSection />
      <Problem />
      <Approach />
      <Offerings />
      <Services />
      <Engagement />
    </div>
  );
}
