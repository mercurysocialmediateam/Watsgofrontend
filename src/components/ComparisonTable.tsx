import { Check, X } from 'lucide-react';

export function ComparisonTable() {
  const features = [
    { name: 'Dashboard Overview', starter: true, growth: true, enterprise: true },
    { name: 'Inventory Tracking', starter: true, growth: true, enterprise: true },
    { name: 'Sales Management', starter: true, growth: true, enterprise: true },
    { name: 'Basic Analytics', starter: true, growth: false, enterprise: false },
    { name: 'Advanced Analytics', starter: false, growth: true, enterprise: true },
    { name: 'Order Management', starter: false, growth: true, enterprise: true },
    { name: 'WhatsApp Bot', starter: false, growth: true, enterprise: true },
    { name: 'Multi-Warehouse', starter: false, growth: false, enterprise: true },
    { name: 'Custom Integrations', starter: false, growth: false, enterprise: true },
    { name: 'API Access', starter: false, growth: true, enterprise: true },
    { name: 'Priority Support', starter: false, growth: true, enterprise: true },
    { name: 'Dedicated Account Manager', starter: false, growth: false, enterprise: true },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">
            Compare Plans
          </h2>
          <p className="text-xl text-gray-600">
            Find the perfect fit for your business
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left py-6 px-6 text-gray-900">Feature</th>
                  <th className="text-center py-6 px-6">
                    <div className="text-gray-900">Starter</div>
                    <div className="text-sm text-gray-500 mt-1">₹999/month</div>
                  </th>
                  <th className="text-center py-6 px-6 bg-green-50">
                    <div className="text-gray-900">Growth</div>
                    <div className="text-sm text-green-600 mt-1">₹2,499/month</div>
                  </th>
                  <th className="text-center py-6 px-6">
                    <div className="text-gray-900">Enterprise</div>
                    <div className="text-sm text-gray-500 mt-1">Custom</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr 
                    key={index} 
                    className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                  >
                    <td className="py-4 px-6 text-gray-700">{feature.name}</td>
                    <td className="py-4 px-6 text-center">
                      {feature.starter ? (
                        <div className="inline-flex items-center justify-center w-6 h-6 bg-green-100 rounded-full">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full">
                          <X className="w-4 h-4 text-gray-400" />
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center bg-green-50/50">
                      {feature.growth ? (
                        <div className="inline-flex items-center justify-center w-6 h-6 bg-green-100 rounded-full">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                      ) : (
                        feature.starter ? (
                          <div className="inline-flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full">
                            <X className="w-4 h-4 text-gray-400" />
                          </div>
                        ) : (
                          <div className="inline-flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full">
                            <X className="w-4 h-4 text-gray-400" />
                          </div>
                        )
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {feature.enterprise ? (
                        <div className="inline-flex items-center justify-center w-6 h-6 bg-green-100 rounded-full">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full">
                          <X className="w-4 h-4 text-gray-400" />
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
