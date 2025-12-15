import { Smartphone, Apple, Play, QrCode, Star, Download } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export function DownloadApp() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Content */}
          <AnimatedSection animation="slideRight">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Download className="w-4 h-4 text-green-400" />
              <span className="text-sm">Available on Mobile</span>
            </div>

            <h2 className="text-5xl mb-6">
              Manage Your Business On The Go
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Download the WatsGo mobile app and access your entire business dashboard from anywhere, anytime.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-gray-200">Real-time inventory updates on your phone</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <QrCode className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-gray-200">Scan QR codes for instant product info</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-gray-200">Offline mode for uninterrupted access</span>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a 
                href="#" 
                className="flex items-center gap-3 bg-black hover:bg-gray-900 px-6 py-4 rounded-xl transition-all group"
              >
                <Apple className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="text-lg">App Store</div>
                </div>
              </a>

              <a 
                href="#" 
                className="flex items-center gap-3 bg-black hover:bg-gray-900 px-6 py-4 rounded-xl transition-all group"
              >
                <Play className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-xs text-gray-400">GET IT ON</div>
                  <div className="text-lg">Google Play</div>
                </div>
              </a>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-6">
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-sm text-gray-400">4.8 stars on App Store</div>
              </div>
              <div className="h-8 w-px bg-gray-600"></div>
              <div>
                <div className="text-2xl mb-1">50K+</div>
                <div className="text-sm text-gray-400">Downloads</div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Side - Phone Mockup */}
          <AnimatedSection animation="slideLeft" delay={0.2}>
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative mx-auto max-w-sm">
                {/* Phone Border */}
                <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-8 border-gray-800">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-10"></div>
                  
                  {/* Screen */}
                  <div className="relative bg-white rounded-[2.5rem] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBzY3JlZW58ZW58MXx8fHwxNzY1NjA3MDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Mobile app preview"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Floating QR Code */}
                <div className="absolute -right-8 top-1/2 -translate-y-1/2 bg-white rounded-2xl p-4 shadow-2xl">
                  <div className="w-32 h-32 bg-gray-100 rounded-xl flex items-center justify-center">
                    <QrCode className="w-20 h-20 text-gray-800" />
                  </div>
                  <p className="text-xs text-gray-600 text-center mt-2">Scan to Download</p>
                </div>

                {/* Floating Badge */}
                <div className="absolute -left-8 top-20 bg-green-500 text-white rounded-2xl p-4 shadow-2xl">
                  <div className="text-2xl mb-1">4.8 ⭐</div>
                  <div className="text-xs">User Rating</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom Stats */}
        <AnimatedSection animation="fade" delay={0.4}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-3xl mb-2">50K+</div>
              <div className="text-sm text-gray-400">App Downloads</div>
            </div>
            <div>
              <div className="text-3xl mb-2">4.8/5</div>
              <div className="text-sm text-gray-400">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl mb-2">99.9%</div>
              <div className="text-sm text-gray-400">Uptime</div>
            </div>
            <div>
              <div className="text-3xl mb-2">24/7</div>
              <div className="text-sm text-gray-400">Support</div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
