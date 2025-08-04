import { Card } from "@/components/ui/layout/card"

const Services = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="space-y-12">            
          <div className="space-y-6 text-center w-full">
            <div className="space-y-2 text-3xl text-white w-full max-w-4xl mx-auto">
              <h2 className="mb-4">Examples of our impact</h2>
            </div>
            <div className="text-lg text-white w-full max-w-3xl mx-auto text-center space-y-6 leading-relaxed">
              <p>We are a <span className="text-blue-400 underline">services partner</span> who helps evaluate technology, implement and integrate systems, and measure results.</p>
            </div>
          </div>
          
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-white text-center">Over the past 10 years we have built:</h3>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                <span className="text-lg text-white">customer service chatbot for $XXXM company</span>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                <span className="text-lg text-white">insurance claims automation</span>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                <span className="text-lg text-white">kyc workflows for challenger bank</span>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                <span className="text-lg text-white">retail recommendation systems</span>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-surface-light border-primary p-8 text-center">
              <p className="text-2xl font-semibold text-primary">
                We partner to deploy your AI initiatives into production.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
