import Navigation from "@/components/ui/navigation/navigation";
// import HeroSection from "@/components/ui/sections/hero-section";
import Problem from "@/components/ui/sections/problem";
// import ProductionUseCases from "@/components/ui/sections/production-use-cases";
import Services from "@/components/ui/sections/services";
// import Engagement from "@/components/ui/sections/engagement";
import Approach from "@/components/ui/sections/approach";
import Offerings from "@/components/ui/sections/offerings";

export default function Home() {
  return (
    <div className="min-h-screen bg-background" id="top">
      <Navigation />
      <div className="pt-20">
        <h1 className="text-4xl font-bold text-center">Welcome to AI Deploy Impact</h1>
        <p className="text-center mt-4">This is a Next.js migration of your React project</p>
      </div>
      {/* <HeroSection /> */}
      <Problem />
      <Approach />
      <Offerings />
      <Services />
      {/* <Engagement /> */}
    </div>
  );
}
