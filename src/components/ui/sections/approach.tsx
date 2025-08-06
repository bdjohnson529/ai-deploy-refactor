import { Card } from "@/components/ui/layout/card"

const Approach = () => {
  return (
    <section className="pt-8 pb-20 bg-background" id="approach">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="space-y-12">            
          <div className="text-center">
            <h2 className="text-3xl text-white mb-12">Our Approach</h2>
          </div>

          {/* First Row - Image Left, Text Right */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left column - Image */}
            <div className="order-2 md:order-1">
              <img 
                src="/src/assets/process-mapping.png" 
                alt="Our approach illustration" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            
            {/* Right column - Text */}
            <div className="order-1 md:order-2 space-y-6">
              <div className="text-lg text-white leading-relaxed space-y-4">
                <h3 className="text-3xl text-bold text-white mb-4">Business Process Mapping</h3>
                <p>Every successful implementation starts by understanding an existing operational process. The first step in our engagement is to map and prioritize use cases, while paying close attention to success criteria and metrics that will indicate ROI.</p>
              </div>
            </div>
          </div>

          {/* Second Row - Text Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
            {/* Left column - Text */}
            <div className="order-1 md:order-1 space-y-6">
              <div className="text-lg text-white leading-relaxed space-y-4">
                <h3 className="text-3xl text-bold text-white mb-4">Solution Delivery</h3>
                <p>We are a full-stack software development agency who has experience building frontends, backend systems, and data pipelines. We start with a proof-of-concept, iterate and ultimately deliver a production-grade application for your business.</p>
              </div>
            </div>
            
            {/* Right column - Image */}
            <div className="order-2 md:order-2">
              <img 
                src="/src/assets/background-3.png" 
                alt="Our methodology" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Third Row - Image Left, Text Right */}
          <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
            {/* Left column - Image */}
            <div className="order-2 md:order-1">
              <img 
                src="/src/assets/background-4.png" 
                alt="Implementation strategy" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            
            {/* Right column - Text */}
            <div className="order-1 md:order-2 space-y-6">
              <div className="text-lg text-white leading-relaxed space-y-4">
                <h3 className="text-3xl text-bold text-white mb-4">Training and Upskilling</h3>
                <p>Adoption is hard. Implementations are only be as successful as the people who adopt them. We provide training services to help your people upgrade how they use AI.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Approach