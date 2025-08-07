"use client";

import { Button } from "@/components/ui/interactive/button"
import Image from "next/image"
import favicon from "@/assets/square-dark.png"

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-start">
          <button 
            onClick={() => {
              const section = document.querySelector('#top') as HTMLElement
              if (section) {
                const offset = 80
                const elementPosition = section.offsetTop - offset
                window.scrollTo({ top: elementPosition, behavior: 'smooth' })
              }
            }}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <Image src={favicon} alt="Ion Partners Logo" className="w-8 h-8 rounded-md" />
            <span className="text-xl font-bold">Calica AI</span>
          </button>
          
          <div className="hidden md:flex items-center space-x-8 ml-16">
            <button 
              onClick={() => {
                const section = document.querySelector('#approach') as HTMLElement
                if (section) {
                  const offset = 80
                  const elementPosition = section.offsetTop - offset
                  window.scrollTo({ top: elementPosition, behavior: 'smooth' })
                }
              }}
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => {
                const section = document.querySelector('#offerings') as HTMLElement
                if (section) {
                  const offset = 80
                  const elementPosition = section.offsetTop - offset
                  window.scrollTo({ top: elementPosition, behavior: 'smooth' })
                }
              }}
              className="text-foreground hover:text-primary transition-colors"
            >
              Case Studies
            </button>
            <button 
              onClick={() => {
                const section = document.querySelector('#engagement') as HTMLElement
                if (section) {
                  const offset = 80
                  const elementPosition = section.offsetTop - offset
                  window.scrollTo({ top: elementPosition, behavior: 'smooth' })
                }
              }}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
          </div>
          
          <Button 
            variant="outline"
            onClick={() => {
              const section = document.querySelector('#engagement') as HTMLElement
              if (section) {
                const offset = 80
                const elementPosition = section.offsetTop - offset
                window.scrollTo({ top: elementPosition, behavior: 'smooth' })
              }
            }}
            className="hidden md:block ml-auto"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation