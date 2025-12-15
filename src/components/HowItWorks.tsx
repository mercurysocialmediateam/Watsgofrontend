import { UserPlus, Package, TrendingUp, Rocket } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      number: '01',
      title: 'Create Account',
      description: 'Sign up in minutes and set up your business profile with our easy onboarding process.'
    },
    {
      icon: Package,
      number: '02',
      title: 'Add Products & Inventory',
      description: 'Import your products, set categories, and configure your inventory levels across warehouses.'
    },
    {
      icon: TrendingUp,
      number: '03',
      title: 'Start Selling & Tracking',
      description: 'Process orders, manage stock, and track every transaction in real-time from your dashboard.'
    },
    {
      icon: Rocket,
      number: '04',
      title: 'Analyze & Grow',
      description: 'Use powerful analytics to make data-driven decisions and scale your business efficiently.'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">
            How WatsGo Works
          </h2>
          <p className="text-xl text-gray-600">
            Get started in 4 simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-green-300 to-green-100 -z-10"></div>
              )}

              <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full mb-4">
                  <step.icon className="w-8 h-8" />
                </div>
                <div className="text-sm text-green-600 mb-2">Step {step.number}</div>
                <h3 className="text-xl text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
