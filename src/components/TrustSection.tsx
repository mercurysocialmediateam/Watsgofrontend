import { AnimatedSection } from './AnimatedSection';

export function TrustSection() {
  const logos = [
    'Retail Store',
    'E-Commerce Plus',
    'Wholesale Co.',
    'Distribution Hub',
    'Market Direct',
    'Supply Chain Pro'
  ];

  return (
    <section className="py-16 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="fade">
          <p className="text-center text-gray-600 mb-8">
            Trusted by 1,000+ retailers & wholesalers
          </p>
        </AnimatedSection>
        <AnimatedSection animation="slideUp" delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {logos.map((logo, index) => (
              <div 
                key={index}
                className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
              >
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 bg-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <span className="text-xs text-gray-600">{logo}</span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}