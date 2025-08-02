import { Card } from "@/components/ui/layout/card"

const DeploymentGap = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl font-bold">The Deployment Gap</h2>
            
            <div className="space-y-2 text-xl text-muted-foreground">
              <p>75% of AI deployments never make it to production.</p>
              <p>Most fail because of people and processes.</p>
              <p className="mt-8">Deploying Enterprise AI requires</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-lg">process mapping,</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-lg">system integration,</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-lg">evaluation design</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Card className="bg-surface-light border-border p-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-8">Why AI Deployments Fail</h3>
                  
                  <div className="relative w-80 h-80 mx-auto">
                    {/* Pie Chart SVG */}
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                      {/* Process Mapping - 70% */}
                      <circle
                        cx="100"
                        cy="100"
                        r="80"
                        fill="none"
                        stroke="hsl(var(--muted))"
                        strokeWidth="40"
                        strokeDasharray="351.86 351.86"
                        strokeDashoffset="105.56"
                        className="opacity-80"
                      />
                      {/* Technology Gap - 20% */}
                      <circle
                        cx="100"
                        cy="100"
                        r="80"
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="40"
                        strokeDasharray="125.66 351.86"
                        strokeDashoffset="0"
                        className="opacity-60"
                      />
                      {/* Algorithm Gap - 10% */}
                      <circle
                        cx="100"
                        cy="100"
                        r="80"
                        fill="none"
                        stroke="hsl(var(--accent))"
                        strokeWidth="40"
                        strokeDasharray="62.83 351.86"
                        strokeDashoffset="125.66"
                        className="opacity-40"
                      />
                    </svg>
                    
                    {/* Labels */}
                    <div className="absolute top-4 right-8 text-sm">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-3 h-3 bg-primary opacity-60 rounded-sm"></div>
                        <span>Technology Gap - 20%</span>
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-3 h-3 bg-accent opacity-40 rounded-sm"></div>
                        <span>Algorithm Gap - 10%</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-muted opacity-80 rounded-sm"></div>
                        <span>Process Mapping - 70%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeploymentGap