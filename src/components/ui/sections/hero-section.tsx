"use client";

import { Button } from "@/components/ui/interactive/button"
import ChatBot from "@/components/ui/interactive/chatbot"
import cubeIcon from "@/assets/cube-icon.png"
import aurora from "@/assets/aurora.png"
import background from "@/assets/background-5.jpeg"
import background4 from "@/assets/background-6.png"
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
    <section 
      className="min-h-screen text-white flex items-center justify-center pt-20 relative bg-cover bg-center bg-no-repeat"
      id="hero"
      style={{
        backgroundImage: `url(${background4})`
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12 text-center lg:text-left">
            <h1 className="text-7xl lg:text-8xl font-light leading-none tracking-tight whitespace-nowrap">
              AI, <span className="text-blue-400">Deployed.</span>
            </h1>
            
            <div className="space-y-2 text-xl lg:text-2xl text-gray-300 max-w-2xl font-light leading-relaxed mx-auto lg:mx-0">
              <p>We are your expert partner for deploying Enterprise AI</p>
              <p><span className="text-blue-400 font-normal">into production</span> with <span className="text-blue-400 font-normal">measurable results.</span></p>
            </div>

            {/* Email Signup Form */}
            <div className="max-w-md pt-4 mx-auto lg:mx-0">
              <div className="text-gray-300 text-lg font-medium mb-4">
                Get a free consultation
              </div>
              {submitted ? (
                <div className="text-white font-medium text-lg">
                  ✓ Thanks! We'll be in touch soon.
                </div>
              ) : (
                <form onSubmit={handleEmailSubmit} className="flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-600 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30 relative z-10"
                    required
                    autoComplete="email"
                  />
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-white text-black hover:bg-gray-200 px-6 py-3 font-medium relative z-10 h-auto"
                  >
                    {isSubmitting ? "..." : "Submit"}
                  </Button>
                </form>
              )}
            </div>

          </div>
          

        </div>
        
        {/* Learn More Link */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => {
              const nextSection = document.querySelector('#problem') as HTMLElement
              if (nextSection) {
                const offset = 80
                const elementPosition = nextSection.offsetTop - offset
                window.scrollTo({ top: elementPosition, behavior: 'smooth' })
              }
            }}
            className="flex flex-col items-center text-white hover:text-blue-400 transition-colors duration-300 group"
          >
            <span className="text-sm font-light mb-2">Learn more</span>
            <svg 
              className="w-6 h-6 animate-bounce group-hover:text-blue-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
        
      </div>
    </section>
  )
}

export default HeroSection