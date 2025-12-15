import { TrendingUp, Package, ShoppingCart, Award } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function DashboardPreview() {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  const hotspots = [
    {
      id: 1,
      title: 'Sales Overview',
      description: 'Track revenue, profit, and trends',
      icon: TrendingUp,
      position: { top: '20%', left: '15%' },
      color: 'bg-green-500'
    },
    {
      id: 2,
      title: 'Inventory Summary',
      description: 'Real-time stock levels and alerts',
      icon: Package,
      position: { top: '20%', right: '15%' },
      color: 'bg-blue-500'
    },
    {
      id: 3,
      title: 'Order Analytics',
      description: 'Monitor orders and deliveries',
      icon: ShoppingCart,
      position: { bottom: '25%', left: '15%' },
      color: 'bg-purple-500'
    },
    {
      id: 4,
      title: 'Top Selling Products',
      description: 'Identify best performers',
      icon: Award,
      position: { bottom: '25%', right: '15%' },
      color: 'bg-orange-500'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">
            See the Dashboard in Action
          </h2>
          <p className="text-xl text-gray-600">
            Explore key features with interactive hotspots
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Dashboard Device Mockup */}
          <div className="relative">
            {/* Browser Frame */}
            <div className="bg-gray-900 rounded-t-2xl p-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="flex-1 mx-4 bg-gray-800 rounded px-3 py-1 text-gray-400 text-sm">
                  app.watsgo.com/dashboard
                </div>
              </div>
            </div>

            {/* Dashboard Image with Hotspots */}
            <div className="relative rounded-b-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBzY3JlZW58ZW58MXx8fHwxNzY1NjA3MDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Dashboard preview"
                className="w-full h-auto"
              />

              {/* Interactive Hotspots */}
              {hotspots.map((hotspot) => (
                <div
                  key={hotspot.id}
                  className="absolute"
                  style={hotspot.position}
                  onMouseEnter={() => setActiveHotspot(hotspot.id)}
                  onMouseLeave={() => setActiveHotspot(null)}
                >
                  {/* Pulsing Dot */}
                  <div className="relative">
                    <div className={`w-4 h-4 ${hotspot.color} rounded-full cursor-pointer animate-pulse`}></div>
                    <div className={`absolute inset-0 w-4 h-4 ${hotspot.color} rounded-full animate-ping opacity-75`}></div>
                  </div>

                  {/* Tooltip */}
                  {activeHotspot === hotspot.id && (
                    <div className="absolute left-1/2 -translate-x-1/2 mt-4 w-64 bg-white rounded-xl shadow-2xl p-4 border border-gray-200 z-10 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 ${hotspot.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <hotspot.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-gray-900 mb-1">
                            {hotspot.title}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {hotspot.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Feature Labels Below */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {hotspots.map((hotspot) => (
              <div 
                key={hotspot.id}
                className="bg-white rounded-lg p-4 border border-gray-200 hover:border-green-300 hover:shadow-md transition-all cursor-pointer"
                onMouseEnter={() => setActiveHotspot(hotspot.id)}
                onMouseLeave={() => setActiveHotspot(null)}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${hotspot.color} rounded-lg flex items-center justify-center`}>
                    <hotspot.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-sm text-gray-900">{hotspot.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
