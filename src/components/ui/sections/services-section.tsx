import { Card } from "@/components/ui/layout/card"

const ServicesSection = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-8">How can services help?</h2>
          
          <div className="space-y-6 text-xl text-muted-foreground mb-12">
            <p>We are a <span className="text-primary font-semibold">services partner</span> who helps evaluate technology,</p>
            <p>implement and integrate systems, and measure results.</p>
          </div>
          
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8">Over the past 10 years we have built:</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                <span className="text-lg text-muted-foreground">customer service chatbot for $XXXM company</span>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                <span className="text-lg text-muted-foreground">insurance claims automation</span>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                <span className="text-lg text-muted-foreground">kyc workflows for challenger bank</span>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                <span className="text-lg text-muted-foreground">retail recommendation systems</span>
              </div>
            </div>
          </div>
          
          <Card className="bg-surface-light border-primary p-8 text-center">
            <p className="text-2xl font-semibold text-primary">
              We partner to deploy your AI initiatives into production.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection