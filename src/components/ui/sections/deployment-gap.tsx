import { Card } from "@/components/ui/layout/card"

const DeploymentGap = () => {
  return (
    <section className="py-20 bg-surface" id="next-section">
      <div className="container mx-auto px-6 max-w-7xl">
          <div className="space-y-12 text-center w-full">            
            <div className="space-y-2 text-4xl text-white w-full max-w-4xl mx-auto">
              <p>75% of AI deployments never make it to production. Most projects fail because they aren't integrated with business systems and processes.</p>
            </div>

            <div className="text-lg text-white w-full max-w-3xl mx-auto text-left space-y-4">
              <p>Agentic AI systems are designed around data systems and operational processes. For an Agent to be successful, it needs access to the correct data, and it needs to have the proper level of governance within your existing operational process. <span className="text-blue-400 font-bold font-italic">How you deploy</span> AI is equally important, if not more important, than which AI technology you use.</p>
              <p>Data and operations are what makes your business unique. Successful AI deployments <span className="text-blue-400 font-bold">require customization</span> past simply purchasing an off-the-shelf technology. They require an investment in data architecture, business process mapping, and use case scoping.</p>
              <p><span className="text-blue-400 font-bold">We are your partner</span> in implementing AI and Agentic systems in your business. We work closely with your team from initial ideation to project delivery. Our approach starts with use case ideation and quantifying business impact, before progressing to proof-of-concept and ultimately production deployment.</p>
            </div>
            
          </div>
          
      </div>
    </section>
  )
}

export default DeploymentGap