import { Card } from "@/components/ui/layout/card"

const Services = () => {
  return (
    <section className="py-20 pb-20 bg-background" id="services">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="space-y-12">            
          <div className="space-y-6 text-center w-full">
            <div className="space-y-2 text-3xl text-white w-full max-w-4xl mx-auto">
              <h2 className="mb-4">Examples of our impact</h2>
            </div>
            <div className="text-lg text-white w-full max-w-3xl mx-auto text-center space-y-6 leading-relaxed">
              <p>We are a <span className="text-blue-400 underline">services partner</span> who guides you through scoping, business process mapping, solution design and delivery.</p>
            </div>
          </div>
          
          {/* Service examples in rows */}
          <div className="space-y-12">
            {/* Row 1 */}
            <div className="grid md:grid-cols-4 gap-8 items-center">
              {/* Image - 25% */}
              <div className="md:col-span-1">
                <img 
                  src="/src/assets/chatbot.png" 
                  alt="Customer service automation" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              
              {/* Text - 75% */}
              <div className="md:col-span-3 space-y-4">
                <h3 className="text-2xl font-bold text-white mb-4">Customer Service Chatbot</h3>
                <div className="text-lg text-white leading-relaxed space-y-3">
                  <p>Implemented a customer service chatbot for a $100M+ company that deflects 30% of customer inquiries.</p>
                  <p>The system integrates with CRM, documentation and customer data, providing automated responses while escalating complex issues when necessary.</p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid md:grid-cols-4 gap-8 items-center">
              {/* Image - 25% */}
              <div className="md:col-span-1">
                <img 
                  src="/src/assets/claims.png" 
                  alt="Insurance claims automation" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              
              {/* Text - 75% */}
              <div className="md:col-span-3 space-y-4">
                <h3 className="text-2xl font-bold text-white mb-4">Insurance Claims Processing</h3>
                <div className="text-lg text-white leading-relaxed space-y-3">
                  <p>Developed a claims processing system for low risk claims, while maintaining accuracy and compliance standards.</p>
                  <p>The solution processes documents, extracts key information, and routes claims based on complexity and risk assessment criteria.</p>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid md:grid-cols-4 gap-8 items-center">
              {/* Image - 25% */}
              <div className="md:col-span-1">
                <img 
                  src="/src/assets/kyb.png" 
                  alt="KYC workflow automation" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              
              {/* Text - 75% */}
              <div className="md:col-span-3 space-y-4">
                <h3 className="text-2xl font-bold text-white mb-4">KYB Workflow Automation</h3>
                <div className="text-lg text-white leading-relaxed space-y-3">
                  <p>Implemented KYB workflows for a challenger bank to automate risk review for existing customers, reducing processing time from days to hours for low risk customers.</p>
                  <p>The system integrates with internal data stores and external sources of information, and escalates all workflows above the desired risk tolerance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
