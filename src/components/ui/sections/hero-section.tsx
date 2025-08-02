import { Button } from "@/components/ui/interactive/button"
import ChatBot from "@/components/ui/interactive/chatbot"
import cubeIcon from "@/assets/cube-icon.png"
import { useState } from "react"

const HeroSection = () => {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setIsSubmitting(true)
    
    // Simulate form submission - replace with actual API call
    setTimeout(() => {
      setSubmitted(true)
      setIsSubmitting(false)
      setEmail("")
    }, 1000)
  }
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-8">
            <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
              AI, <span className="text-primary">Deployed.</span>
            </h1>
            
            <div className="space-y-2 text-lg lg:text-xl text-muted-foreground max-w-2xl">
              <p>We are your expert partner at deploying Enterprise AI</p>
              <p>use cases <span className="text-primary font-semibold">into production </span>with <span className="text-primary font-semibold">measurable results.</span></p>
            </div>

            {/* Email Signup Form */}
            <div className="max-w-md">
              {submitted ? (
                <div className="text-primary font-medium">
                  ✓ Thanks! We'll be in touch soon.
                </div>
              ) : (
                <form onSubmit={handleEmailSubmit} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary relative z-10"
                    required
                    autoComplete="email"
                  />
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-primary hover:bg-primary/90 relative z-10"
                  >
                    {isSubmitting ? "..." : "Submit"}
                  </Button>
                </form>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:shadow-primary">
                Start Your Project
              </Button>
              <Button variant="outline" size="lg">
                View Case Studies
              </Button>
            </div>

          </div>
          
          <div className="flex justify-center lg:justify-end mr-[10vw]">
            <ChatBot />
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default HeroSection