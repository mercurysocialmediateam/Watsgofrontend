import { MessageCircle, Bell, QrCode, Zap, Clock, Check } from 'lucide-react';

export function AutomationSection() {
  const features = [
    {
      icon: MessageCircle,
      title: 'WhatsApp Bot Integration',
      description: 'Automated order updates and customer notifications via WhatsApp'
    },
    {
      icon: Bell,
      title: 'Smart Stock Alerts',
      description: 'Get notified when inventory runs low or items need restocking'
    },
    {
      icon: QrCode,
      title: 'QR Code Scanning',
      description: 'Instant product and order access with QR code generation'
    }
  ];

  const benefits = [
    'Reduce manual work by 70%',
    'Faster order processing',
    'Better customer communication',
    'Zero data entry errors',
    'Automated reporting',
    'Real-time notifications'
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
            <Zap className="w-4 h-4" />
            <span>Smart Automation</span>
          </div>
          <h2 className="text-4xl text-gray-900 mb-4">
            Smart Automation That Saves Time
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let WatsGo handle the repetitive tasks while you focus on growing your business
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - WhatsApp Mockup */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-6 max-w-md mx-auto border border-gray-200">
              {/* WhatsApp Header */}
              <div className="flex items-center gap-3 pb-4 border-b border-gray-200 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-gray-900">WatsGo Bot</div>
                  <div className="text-sm text-gray-500">Online</div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4">
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4 max-w-xs">
                    <p className="text-gray-800 text-sm">
                      Order #1234 has been confirmed! ✅
                    </p>
                    <p className="text-xs text-gray-500 mt-1">10:30 AM</p>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4 max-w-xs">
                    <p className="text-gray-800 text-sm">
                      ⚠️ Low Stock Alert: Product "Widget A" has only 5 units left
                    </p>
                    <p className="text-xs text-gray-500 mt-1">11:15 AM</p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="bg-green-500 text-white rounded-2xl rounded-tr-none p-4 max-w-xs">
                    <p className="text-sm">
                      Reorder 50 units
                    </p>
                    <p className="text-xs text-green-100 mt-1">11:16 AM</p>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4 max-w-xs">
                    <p className="text-gray-800 text-sm">
                      ✓ Purchase order created successfully! 
                    </p>
                    <p className="text-xs text-gray-500 mt-1">11:16 AM</p>
                  </div>
                </div>
              </div>

              {/* QR Code Preview */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center">
                      <QrCode className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-900">Scan QR Code</div>
                      <div className="text-xs text-gray-500">Product #456</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-green-600 text-white rounded-full p-4 shadow-xl">
              <Clock className="w-6 h-6" />
            </div>
          </div>

          {/* Right Side - Features & Benefits */}
          <div>
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 bg-white rounded-xl p-6 border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl mb-6">
                Benefits You'll Love
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
