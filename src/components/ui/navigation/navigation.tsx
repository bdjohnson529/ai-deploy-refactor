import { Button } from "@/components/ui/interactive/button"

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-start">
          <a href="#top" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-primary rounded-md"></div>
            <span className="text-xl font-bold">DeployAI</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8 ml-16">
            <a href="#approach" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#offerings" className="text-foreground hover:text-primary transition-colors">Case Studies</a>
            <a href="#engagement" className="text-foreground hover:text-primary transition-colors">About</a>
          </div>
          
          <a href="#engagement" className="hidden md:block ml-auto">
            <Button variant="outline">
              Get Started
            </Button>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation