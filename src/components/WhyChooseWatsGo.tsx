import { MapPin, Zap, Smile, TrendingUp } from 'lucide-react';

export function WhyChooseWatsGo() {
  const reasons = [
    {
      icon: MapPin,
      emoji: '🇮🇳',
      title: 'Built for Indian Businesses',
      features: [
        'GST-friendly sales tracking',
        'INR-based pricing and reports',
        'Local compliance built-in'
      ],
      gradient: 'from-orange-50 to-green-50'
    },
    {
      icon: Zap,
      emoji: '⚡',
      title: 'Real-Time Accuracy',
      features: [
        'Live inventory updates',
        'No manual stock errors',
        'Instant sync across devices'
      ],
      gradient: 'from-blue-50 to-cyan-50'
    },
    {
      icon: Smile,
      emoji: '😊',
      title: 'Simple Yet Powerful',
      features: [
        'Easy to use for non-technical users',
        'Powerful analytics under the hood',
        'Intuitive dashboard design'
      ],
      gradient: 'from-purple-50 to-pink-50'
    },
    {
      icon: TrendingUp,
      emoji: '📈',
      title: 'Scales With Your Growth',
      features: [
        'From small shops to enterprises',
        'Multi-warehouse support',
        'Unlimited scalability'
      ],
      gradient: 'from-green-50 to-emerald-50'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">
            Why Businesses Choose WatsGo
          </h2>
          <p className="text-xl text-gray-600">
            Purpose-built for modern businesses in India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${reason.gradient} rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all group`}
            >
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                <span className="text-4xl">{reason.emoji}</span>
              </div>
              
              <h3 className="text-xl text-gray-900 mb-4">
                {reason.title}
              </h3>

              <ul className="space-y-3">
                {reason.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
