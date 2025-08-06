import { Card } from "@/components/ui/layout/card"

const Problem = () => {
  return (
    <section className="pt-20 pb-8 bg-background" id="problem">
      <div className="container mx-auto px-6 max-w-7xl">
          <div className="space-y-12 text-center w-full">            
            <div className="space-y-2 text-4xl text-white w-full max-w-4xl mx-auto">
              <p>75% of AI deployments never make it to production.</p>
            </div>

            <div className="text-lg text-white w-full max-w-3xl mx-auto text-left space-y-6 leading-relaxed">
              <p>Despite rapidly advancing capabilities, the majority of CEOs are struggling to adopt AI within their business. A small percentage of companies are successfully deploying AI, and the rest are struggling to keep pace and avoid getting left behind.</p>
            </div>

            <div className="space-y-2 text-4xl text-white w-full max-w-4xl mx-auto">
              <p>Failing to adopt AI does pose an existential threat.</p>
            </div>

            <div className="text-lg text-white w-full max-w-3xl mx-auto text-left space-y-6 leading-relaxed">
              <p>More than <span className="text-blue-400 underline">50% of Fortune 500 businesses have been replaced</span> since 2010. Those companies were replaced by ones who used technology to transform how they serve their customers. The rate of technology advancement is now 10X what it was in 2010.</p>
            </div>

            <div className="space-y-2 text-4xl text-white w-full max-w-4xl mx-auto">
              <p>Deployments fail because of integration challenges.</p>
            </div>
            

            <div className="text-lg text-white w-full max-w-3xl mx-auto text-left space-y-6 leading-relaxed">
              <p>AI systems are designed around data systems and operational processes. Data and operations are what makes your business unique. Successful AI deployments <span className="text-blue-400 underline">require customization</span> past simply purchasing an off-the-shelf technology. They require an investment in data architecture, business process mapping, and implementation.</p>
              <p><span className="text-blue-400 underline">We are your partner</span> in integrating AI into your business. We work closely with your team from initial ideation to project delivery. Our approach focuses on mapping use cases and success criteria before progressing to proof-of-concept and ultimately production deployment.</p>
            </div>

          </div>
          
      </div>
    </section>
  )
}

export default Problem
