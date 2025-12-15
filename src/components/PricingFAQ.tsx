import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Can I switch plans later?',
      answer: 'Yes! You can upgrade or downgrade your plan at any time. When upgrading, you\'ll get immediate access to new features. When downgrading, changes take effect at the end of your current billing cycle, and we\'ll prorate any unused time.'
    },
    {
      question: 'What happens after the free trial ends?',
      answer: 'After your 14-day free trial, you\'ll be automatically enrolled in your selected plan. We\'ll send you email reminders 3 days before your trial ends, so there are no surprises. You can cancel anytime during the trial with zero charges.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes! We offer a 30-day money-back guarantee. If you\'re not satisfied with WatsGo for any reason, contact us within 30 days of your purchase for a full refund. No questions asked.'
    },
    {
      question: 'Is my data secure and backed up?',
      answer: 'Absolutely. We use bank-level 256-bit SSL encryption and store your data on secure AWS servers with automatic daily backups. Your data is yours - we never share it with third parties. We\'re also GDPR compliant.'
    },
    {
      question: 'Can I import my existing data?',
      answer: 'Yes! We provide free data migration support. You can import from Excel/CSV files or we can help you migrate from other inventory systems. Our team will guide you through the entire process.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), debit cards, UPI, net banking, and digital wallets. For Enterprise plans, we also offer invoice-based payment with NET 30 terms.'
    },
    {
      question: 'Is training and support included?',
      answer: 'Yes! All plans include comprehensive documentation, video tutorials, and email support. Growth and Enterprise plans get priority support with faster response times. Enterprise customers also get a dedicated account manager and personalized onboarding.'
    },
    {
      question: 'How many users can I add to my account?',
      answer: 'Starter plan includes 1 user. Growth plan includes up to 5 users with the option to add more for ₹299/user/month. Enterprise plans include unlimited users. All plans support role-based access control for security.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about pricing and plans
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-green-300 transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed animate-in slide-in-from-top-2 duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still have questions CTA */}
          <div className="mt-12 text-center bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100">
            <h3 className="text-2xl text-gray-900 mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Our friendly team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-md hover:shadow-lg">
                Contact Support
              </button>
              <button className="px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
