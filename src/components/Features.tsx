import { TrendingUp, Package, ShoppingCart, FolderTree, BarChart3, Users, Zap } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export function Features() {
  const features = [
    {
      icon: TrendingUp,
      emoji: '📈',
      title: 'Sales Management Dashboard',
      description: 'View total sales, revenue, profit, and cost in real time. Track monthly, weekly, and daily performance with clear visual charts for quick decision-making.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Package,
      emoji: '📦',
      title: 'Inventory & Stock Control',
      description: 'Real-time inventory tracking across warehouses. Low-stock alerts to avoid product shortages. Stock adjustments and transfers made easy.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: ShoppingCart,
      emoji: '🛒',
      title: 'Order & Purchase Management',
      description: 'Manage customer orders and supplier purchases. Track ordered vs delivered items. Reduce errors with automated stock updates.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: FolderTree,
      emoji: '📁',
      title: 'Product & Category Management',
      description: 'Organize products with categories. Monitor top-selling and slow-moving items. Easily update prices and availability.',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: BarChart3,
      emoji: '📊',
      title: 'Analytics & Reports',
      description: 'Visual sales & purchase reports. Performance trends with graphs. Data-driven business insights to help you grow.',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: Users,
      emoji: '👥',
      title: 'Customer & Supplier Management',
      description: 'Maintain customer and supplier profiles. Track transaction history. Improve relationships with organized data.',
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      icon: Zap,
      emoji: '⚡',
      title: 'Smart Automation & Integrations',
      description: 'WhatsApp bot integration for seamless communication. QR code generator for products & orders. Easy third-party integrations.',
      color: 'bg-yellow-100 text-yellow-600'
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="slideUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-900 mb-4">
              Everything You Need to Run Your Business in One Dashboard
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to help you manage, track, and grow your business efficiently
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection 
              key={index}
              animation="scale"
              delay={index * 0.1}
            >
              <div 
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-green-300 hover:shadow-xl transition-all group"
              >
                <div className={`w-14 h-14 ${feature.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <span className="text-3xl">{feature.emoji}</span>
                </div>
                <h3 className="text-xl text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Mini Preview Elements */}
                {index === 0 && (
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">This Month</span>
                      <span className="text-green-600">↑ 23.5%</span>
                    </div>
                    <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                )}

                {index === 1 && (
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">In Stock</span>
                        <span className="text-green-600">890</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Low Stock</span>
                        <span className="text-orange-600">45</span>
                      </div>
                    </div>
                  </div>
                )}

                {index === 2 && (
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">Delivered</span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">Pending</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Cancelled</span>
                    </div>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}