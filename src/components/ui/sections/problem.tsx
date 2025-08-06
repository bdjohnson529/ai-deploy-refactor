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
              <p>We are in a period of rapid technology development. Within the past year AI has developed the ability to solve PhD level math problems, beat the world’s best programmers, and contribute to fundamental scientific research.</p>
              <p>Despite rapidly advancing capabilities, more than 50% of CEOs are struggling to adopt AI within their business. A small percentage of companies are successfully deploying AI, and the rest are struggling to keep pace and avoid getting left behind.</p>
            </div>

            <div className="space-y-2 text-4xl text-white w-full max-w-4xl mx-auto">
              <p>Failing to adopt AI does pose an existential threat.</p>
            </div>

            <div className="text-lg text-white w-full max-w-3xl mx-auto text-left space-y-6 leading-relaxed">
              <p><span className="text-blue-400 underline">More than 50% of Fortune 500 businesses have been replaced within the last 15 years.</span> Since 2010, more than half of the Fortune 500 has been replaced by newer, faster, more agile competitors. Companies that remained have transformed the ways they use technology.</p>
              <p>The rate of technology advancement is now 10X what it was in 2010. Governments, investment firms and companies invested $250B into AI in the 2025 fiscal year alone. That investment has paved the way for the technology to advance faster than any technology we have seen before.</p>
            </div>

            <div className="space-y-2 text-4xl text-white w-full max-w-4xl mx-auto">
              <p>Deployments fail because they aren't integrated with business systems, processes and people.</p>
            </div>
            

            <div className="text-lg text-white w-full max-w-3xl mx-auto text-left space-y-6 leading-relaxed">
              <p>AI systems are designed around data systems and operational processes. For AI use cases to be successful, they need access to the correct data, and the proper level of governance. <span className="text-blue-400 underline">How you deploy</span> AI is equally important, if not more important, than which AI technology you use.</p>
              <p>Data and operations are what makes your business unique. Successful AI deployments <span className="text-blue-400 underline">require customization</span> past simply purchasing an off-the-shelf technology. They require an investment in data architecture, business process mapping, and use case scoping.</p>
              <p><span className="text-blue-400 underline">We are your partner</span> in implementing AI and Agentic systems in your business. We work closely with your team from initial ideation to project delivery. Our approach starts with use case ideation and quantifying business impact, before progressing to proof-of-concept and ultimately production deployment.</p>
            </div>

          </div>
          
      </div>
    </section>
  )
}

export default Problem
