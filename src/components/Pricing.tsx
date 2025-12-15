import { Check, Star, ArrowRight, Shield, Clock, Users } from 'lucide-react';
import { useState } from 'react';

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Starter',
      price: isYearly ? '799' : '999',
      period: 'month',
      yearlyTotal: '9,588',
      monthlySavings: '200',
      description: 'Best for small businesses',
      features: [
        'Up to 100 products',
        'Sales & inventory dashboard',
        'Basic analytics',
        'Email support',
        '1 warehouse location',
        'Export reports (CSV)'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Growth',
      price: isYearly ? '1,999' : '2,499',
      period: 'month',
      yearlyTotal: '23,988',
      monthlySavings: '500',
      description: 'Best for growing businesses',
      badge: 'Most Popular',
      features: [
        'Unlimited products',
        'Advanced sales & inventory analytics',
        'Order & purchase management',
        'WhatsApp bot integration',
        'Priority support',
        'Multi-user access',
        'Custom reports',
        'API access'
      ],
      cta: 'Start Free Trial',
      popular: true,
      savings: 'Save ₹6,000/year'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Best for large businesses',
      features: [
        'Multi-warehouse management',
        'Custom integrations',
        'Dedicated account manager',
        'Advanced security & roles',
        'Custom workflows',
        'White-label options',
        'SLA guarantee',
        '24/7 phone support'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Trust Headline */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
            <Shield className="w-4 h-4" />
            <span className="text-sm">Trusted by 1,000+ businesses</span>
          </div>
          <h2 className="text-5xl text-gray-900 mb-4">
            Choose Your Growth Plan
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start free, scale as you grow. No hidden fees, cancel anytime.
          </p>

          {/* Billing Toggle with Savings Highlight */}
          <div className="inline-flex flex-col items-center gap-3">
            <div className="flex items-center gap-3 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2 rounded-md transition-all ${
                  !isYearly 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-600'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2 rounded-md transition-all ${
                  isYearly 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-600'
                }`}
              >
                Yearly
                <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
            {isYearly && (
              <p className="text-sm text-green-600 animate-in fade-in slide-in-from-top-1">
                💰 Save up to ₹6,000 per year with annual billing
              </p>
            )}
          </div>
        </div>

        {/* Social Proof Bar */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border border-green-100">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-2xl text-gray-900 mb-1">4.9/5</div>
                <div className="text-sm text-gray-600">Average rating</div>
              </div>
              <div>
                <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl text-gray-900 mb-1">1,000+</div>
                <div className="text-sm text-gray-600">Active customers</div>
              </div>
              <div>
                <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl text-gray-900 mb-1">14 Days</div>
                <div className="text-sm text-gray-600">Free trial period</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-center">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl p-8 border-2 transition-all ${
                plan.popular 
                  ? 'border-green-500 shadow-2xl lg:scale-110 lg:py-12 z-10' 
                  : 'border-gray-200 hover:border-green-300 hover:shadow-xl'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full text-sm flex items-center gap-2 shadow-lg">
                  <Star className="w-4 h-4 fill-current" />
                  {plan.badge}
                </div>
              )}

              {/* Savings Badge for Yearly */}
              {plan.popular && isYearly && plan.savings && (
                <div className="absolute -top-4 right-4 px-4 py-1 bg-orange-500 text-white rounded-full text-xs shadow-lg">
                  {plan.savings}
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  {plan.price === 'Custom' ? (
                    <div>
                      <div className="text-4xl text-gray-900 mb-2">Custom Pricing</div>
                      <div className="text-sm text-gray-500">Tailored to your needs</div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-baseline justify-center gap-1 mb-2">
                        <span className="text-xl text-gray-500 line-through">
                          {!isYearly && `₹${parseInt(plan.price) + parseInt(plan.monthlySavings || 0)}`}
                        </span>
                      </div>
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl text-gray-900">₹{plan.price}</span>
                        <span className="text-gray-600 ml-2">/ {plan.period}</span>
                      </div>
                      {isYearly ? (
                        <div className="text-sm text-green-600 mt-2">
                          ₹{plan.yearlyTotal} billed annually
                        </div>
                      ) : (
                        <div className="text-sm text-gray-500 mt-2">
                          or ₹{plan.yearlyTotal} billed yearly (save 20%)
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <button 
                  className={`w-full py-4 rounded-lg transition-all flex items-center justify-center gap-2 group ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-700 hover:to-green-600 shadow-lg hover:shadow-xl transform hover:scale-105'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Risk Reversal */}
                {plan.popular && (
                  <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                      <Check className="w-3 h-3 text-green-600" />
                      <span>14-day free trial</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Check className="w-3 h-3 text-green-600" />
                      <span>No credit card</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <div className="text-sm text-gray-500 mb-4">Everything in {plan.name}:</div>
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.popular ? 'bg-green-100' : 'bg-gray-100'
                    }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? 'text-green-600' : 'text-gray-600'}`} />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Risk Reversal Section */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl text-gray-900 mb-6">
              Try WatsGo Risk-Free
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-gray-900 mb-1">14-Day Free Trial</div>
                <div className="text-sm text-gray-600">Full access, no commitment</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <Check className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-gray-900 mb-1">No Credit Card</div>
                <div className="text-sm text-gray-600">Start without payment details</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-gray-900 mb-1">Cancel Anytime</div>
                <div className="text-sm text-gray-600">No questions asked</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}