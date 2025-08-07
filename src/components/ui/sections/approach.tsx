import { Card } from "@/components/ui/layout/card"

const Approach = () => {
  return (
    <section className="pt-8 pb-20 bg-background" id="approach">
      <div className="container mx-auto px-6 max-w-[1000px]">
        <div className="space-y-4">            
          <div className="text-center">
            <h2 className="text-3xl text-white mb-12">Our Approach</h2>
          </div>

          {/* First Row - Image Left, Text Right */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left column - Image */}
            <div className="order-2 md:order-1 max-h-[300px] h-[300px] overflow-hidden flex items-center justify-center">
              <img 
                src="/src/assets/business-process-mapping-2.png" 
                alt="Our approach illustration" 
                className="max-w-full max-h-full rounded-lg shadow-lg object-contain"
              />
            </div>
            
            {/* Right column - Text */}
            <div className="order-1 md:order-2 space-y-6">
              <div className="text-lg text-white leading-relaxed space-y-4">
                <h3 className="text-3xl text-bold text-white mb-4">Business Process Mapping</h3>
                <p>Successful deployments start with a detailed understanding of your existing operational processes. The first step in our engagement is to map and prioritize use cases, while paying close attention to success criteria and metrics that will indicate ROI.</p>
              </div>
            </div>
          </div>

          {/* Second Row - Text Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            {/* Left column - Text */}
            <div className="order-1 md:order-1 space-y-6">
              <div className="text-lg text-white leading-relaxed space-y-4">
                <h3 className="text-3xl text-bold text-white mb-4">Proof of Concept</h3>
                <p>We are a full-stack software development agency with experience building frontends, backend systems, data and ML pipelines. We build a proof-of-concept so that we can test results before deploying the solution in your business.</p>
              </div>
            </div>
            
            {/* Right column - Image */}
            <div className="order-2 md:order-2 max-h-[400px] h-[400px] overflow-hidden flex items-center justify-center">
              <img 
                src="/src/assets/proof-of-concept-2.png" 
                alt="Our methodology" 
                className="max-w-full max-h-full rounded-lg shadow-lg object-contain"
              />
            </div>
          </div>

          {/* Third Row - Image Left, Text Right */}
          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            {/* Left column - Image */}
            <div className="order-2 md:order-1 max-h-[400px] h-[400px] overflow-hidden flex items-center justify-center">
              <img 
                src="/src/assets/production-2.png" 
                alt="Implementation strategy" 
                className="max-w-full max-h-full rounded-lg shadow-lg object-contain"
              />
            </div>
            
            {/* Right column - Text */}
            <div className="order-1 md:order-2 space-y-6">
              <div className="text-lg text-white leading-relaxed space-y-4">
                <h3 className="text-3xl text-bold text-white mb-4">Production Deployment</h3>
                <p>Once we have established proper governance and guardrails, we help you deploy the solution into a production environment. This includes building evals and analytics so you can monitor and control the system in production.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Approach