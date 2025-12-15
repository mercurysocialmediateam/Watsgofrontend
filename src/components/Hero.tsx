import { ArrowRight, Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white pt-20 pb-32">
      {/* Navigation */}
      <nav className="container mx-auto px-6 mb-20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">W</span>
            </div>
            <span className="text-2xl text-gray-900">WatsGo</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">Testimonials</a>
            <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Start Free Trial
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl text-gray-900 mb-6">
            All-in-One Inventory & Sales Dashboard for Growing Businesses
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Track sales, manage inventory, automate orders, and analyze performance — all from one powerful dashboard.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-50 transition-all flex items-center gap-2 border border-gray-200">
              <Play className="w-5 h-5" />
              View Dashboard Demo
            </button>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="max-w-6xl mx-auto relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBzY3JlZW58ZW58MXx8fHwxNzY1NjA3MDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Dashboard preview"
              className="w-full h-auto"
            />
          </div>

          {/* Floating Feature Cards */}
          <div className="absolute -bottom-8 left-8 bg-white rounded-xl shadow-xl p-4 border border-gray-100 hidden lg:block">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📈</span>
              </div>
              <div>
                <div className="text-sm text-gray-500">Sales Overview</div>
                <div className="text-green-600">↑ 23.5%</div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-8 right-8 bg-white rounded-xl shadow-xl p-4 border border-gray-100 hidden lg:block">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📦</span>
              </div>
              <div>
                <div className="text-sm text-gray-500">Inventory Tracking</div>
                <div className="text-blue-600">1,234 items</div>
              </div>
            </div>
          </div>

          <div className="absolute top-8 right-8 bg-white rounded-xl shadow-xl p-4 border border-gray-100 hidden lg:block">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <div>
                <div className="text-sm text-gray-500">Order Analytics</div>
                <div className="text-purple-600">456 orders</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
