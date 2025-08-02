import { Card } from "@/components/ui/layout/card"

const ProductionUseCases = () => {
  const useCases = [
    {
      title: "Support Chatbots",
      items: [
        "Customer support",
        "IT support"
      ],
      highlighted: false
    },
    {
      title: "Document Processing",
      items: [
        "KYC/AML verification",
        "Claims intake", 
        "Policy processing",
        "Underwriting review"
      ],
      highlighted: false
    },
    {
      title: "Workflow Automation",
      items: [
        "Invoice processing",
        "Order fulfillment",
        "Employee onboarding"
      ],
      highlighted: true
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-8">What works in production?</h2>
          
          <p className="text-xl text-muted-foreground mb-4">Most production use cases are:</p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-lg">High volume</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-lg">Repeatable</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-lg">Rule-based</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card 
                key={index} 
                className={`p-8 bg-surface border-border transition-all duration-300 hover:shadow-card ${
                  useCase.highlighted ? 'border-primary shadow-primary' : ''
                }`}
              >
                <h3 className={`text-2xl font-semibold mb-6 ${
                  useCase.highlighted ? 'text-primary' : 'text-foreground'
                }`}>
                  {useCase.title}
                </h3>
                
                <ul className="space-y-3">
                  {useCase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-3">
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        useCase.highlighted ? 'bg-primary' : 'bg-muted-foreground'
                      }`}></div>
                      <span className="text-lg text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductionUseCases