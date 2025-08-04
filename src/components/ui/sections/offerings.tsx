import { Card } from "@/components/ui/layout/card"

const Offerings = () => {
  return (
    <section className="pt-8 pb-8 bg-background" id="offerings">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="space-y-12">            
          <div className="space-y-6 text-center w-full">
            <div className="space-y-2 text-3xl text-white w-full max-w-4xl mx-auto">
              <h2 className="mb-4">What works in production?</h2>
            </div>
            <div className="text-lg text-white w-full max-w-3xl mx-auto text-center space-y-6 leading-relaxed">
              <p>Production use cases leverage the capabilities of LLMs to process large amounts of text and documents, are high volume, and have a low risk profile.</p>
            </div>
          </div>

          {/* Four columns of text */}
          <div className="grid md:grid-cols-4 gap-8">
            {/* Column 1 */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-4">Insurance</h3>
              <div className="text-base text-white leading-relaxed space-y-3">
                <p>Automate claims, detect fraud, and accelerate underwriting.</p>
                <p>These are well-suited for LLMs due to their repetitive, document-heavy nature. Start with the area that aligns with your risk appetite and delivers a fast ROI.</p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-4">Financial Services</h3>
              <div className="text-base text-white leading-relaxed space-y-3">
                <p>Streamline KYC / KYB, automate risk scoring and compliance.</p>
                <p>Given the complexity, it’s smart to begin with a narrow subprocess which requires significant manual effort. There are quite a few of these with low to moderate risk profiles.</p>
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-4">Supply Chain</h3>
              <div className="text-base text-white leading-relaxed space-y-3">
                <p>Accelerate procurement, sourcing, and shipment handling.</p>
                <p>Integrating legacy data systems is often the first hurdle to overcome. Once data is accessible to the LLMs, high-impact use cases open up quickly.</p>
              </div>
            </div>

            {/* Column 4 */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-4">Retail</h3>
              <div className="text-base text-white leading-relaxed space-y-3">
                <p>Deflect low-risk customer service requests, and process orders at scale.</p>
                <p>These are high-volume workflows with repeatable patterns and moderate complexity, which makes them ideal for LLM automation in the low-risk parts of the customer journey.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Offerings
