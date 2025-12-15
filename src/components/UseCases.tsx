import { Store, Package2, Truck, ShoppingBag } from 'lucide-react';

export function UseCases() {
  const useCases = [
    {
      icon: Store,
      emoji: '🏪',
      title: 'Retail Stores',
      description: 'Perfect for small to medium retail businesses',
      benefits: [
        'Manage daily sales & stock',
        'Avoid out-of-stock issues',
        'Track customer purchases',
        'Generate daily reports'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Package2,
      emoji: '📦',
      title: 'Wholesalers',
      description: 'Built for bulk order management',
      benefits: [
        'Bulk order tracking',
        'Supplier purchase management',
        'Volume pricing support',
        'Credit management'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Truck,
      emoji: '🚚',
      title: 'Distributors',
      description: 'Handle complex distribution networks',
      benefits: [
        'Multi-warehouse inventory',
        'Stock transfers',
        'Route optimization',
        'Delivery tracking'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: ShoppingBag,
      emoji: '🛍️',
      title: 'Online Sellers',
      description: 'E-commerce and marketplace management',
      benefits: [
        'Order tracking & analytics',
        'Customer insights',
        'Multi-channel integration',
        'Automated fulfillment'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">
            Built for Every Type of Business
          </h2>
          <p className="text-xl text-gray-600">
            No matter your industry, WatsGo adapts to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-green-300 hover:shadow-xl transition-all group"
            >
              {/* Header with Gradient */}
              <div className={`bg-gradient-to-r ${useCase.color} p-6 text-white`}>
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-4xl">{useCase.emoji}</span>
                </div>
                <h3 className="text-2xl mb-2">
                  {useCase.title}
                </h3>
                <p className="text-white/90 text-sm">
                  {useCase.description}
                </p>
              </div>

              {/* Benefits List */}
              <div className="p-6">
                <ul className="space-y-3">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Below */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Not sure which plan fits your business?
          </p>
          <button className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
            Talk to Our Team
          </button>
        </div>
      </div>
    </section>
  );
}
