import { Button } from "@/components/ui/interactive/button"
import { Input } from "@/components/ui/forms/input"
import { Card } from "@/components/ui/layout/card"
import { useState } from "react"

const EngagementSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  const engagementModel = [
    { step: "1.", title: "Scoping session", duration: "(free)" },
    { step: "2.", title: "Process mapping", duration: "(2-4 weeks)" },
    { step: "3.", title: "Solution build", duration: "(1-2 months)" },
    { step: "4.", title: "Solution maintenance", duration: "(ongoing)" }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="space-y-12">            
          <div className="space-y-6 text-center w-full">
            <div className="space-y-2 text-4xl text-white w-full max-w-4xl mx-auto">
              <h2 className="mb-4">Where do we start?</h2>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xl text-muted-foreground mb-8">Our typical engagement model is</p>
              
              <div className="space-y-6">
                {engagementModel.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <span className="text-lg font-semibold text-primary w-8">{item.step}</span>
                    <span className="text-lg font-medium">{item.title}</span>
                    <span className="text-lg text-muted-foreground">{item.duration}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="bg-surface border-border p-8">
              <h3 className="text-2xl font-semibold mb-6">Fill in this form to book a free consultation.</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Jane Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-background border-border"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-muted-foreground mb-2">
                    Company
                  </label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Acme Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="bg-background border-border"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jane@framer.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-background border-border"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-primary hover:shadow-primary"
                  size="lg"
                >
                  Submit
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default EngagementSection