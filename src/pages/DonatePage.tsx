import { ChevronDown, Shield, Award, BarChart3, DollarSign } from 'lucide-react';
import { useState } from 'react';

export function DonatePage() {
  const [activeTab, setActiveTab] = useState<'monthly' | 'onetime' | 'special'>('monthly');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(3500);
  const [customAmount, setCustomAmount] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [language, setLanguage] = useState<'ja' | 'en'>('ja');

  const monthlyAmounts = [
    { amount: 3500, impact: '1 Support one child\'s monthly meals' },
    { amount: 5500, impact: '1 Education costs for a child (Materials & Supplies) Support' },
    { amount: 10000, impact: '1 Support a child\'s overall living expenses' },
  ];

  const onetimeAmounts = [
    { amount: 5000, impact: 'Provide meals for 10 children for one day' },
    { amount: 10000, impact: 'Purchase uniforms and school supplies for children' },
    { amount: 30000, impact: 'Support one month of medical expenses' },
  ];

  const specialGifts = [
    { amount: 50000, impact: 'Contribution to new school construction (1㎡)' },
    { amount: 100000, impact: 'Operation of scholarship program for one year' },
    { amount: 300000, impact: 'Complete equipment for a new classroom' },
  ];

  const getAmounts = () => {
    if (activeTab === 'monthly') return monthlyAmounts;
    if (activeTab === 'onetime') return onetimeAmounts;
    return specialGifts;
  };

  const amounts = getAmounts();

  const faqs = [
    {
      question: 'How Are Donations Used?',
      answer: '70% of donations go to children\'s education, meals, and healthcare, 20% to facility operations, and 10% to the new school construction project. All uses are disclosed in our annual report.',
    },
    {
      question: 'Are Receipts Issued?',
      answer: 'Yes, we issue receipts for all donations. As a certified NPO, donations are eligible for tax deductions.',
    },
    {
      question: 'Can I Cancel Anytime?',
      answer: 'Yes, monthly supporters can cancel at any time. You can easily process this from your account page, and there are no cancellation fees.',
    },
    {
      question: 'Is Credit Card Information Secure?',
      answer: 'Yes, we use Stripe for payment processing, which complies with international security standards (PCI DSS). Our organization does not store card information.',
    },
    {
      question: 'Are There Other Ways to Support?',
      answer: 'Bank transfers, in-kind donations, volunteer participation, and various other support methods are available. Please contact us for details.',
    },
  ];

  const currentAmount = customAmount ? parseInt(customAmount) : selectedAmount;

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-[800px] mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#1A4065] rounded-full flex items-center justify-center">
              <span className="text-[#FFCA0A]" style={{ fontSize: '1.25rem' }}>♡</span>
            </div>
            <div>
              <p className="text-[#1A4065]" style={{ fontWeight: '600', fontSize: '0.875rem' }}>
                Jhamtse Gatsal
              </p>
            </div>
          </div>
          <button
            onClick={() => setLanguage(language === 'ja' ? 'en' : 'ja')}
            className="text-[#1A4065] px-3 py-1 border border-[#1A4065] rounded-[15px] transition-all hover:bg-[#1A4065] hover:text-white"
            style={{ fontSize: '0.875rem' }}
          >
            {language === 'ja' ? 'EN' : 'Japanese'}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#F1EDE8] py-16" style={{ minHeight: '400px', display: 'flex', alignItems: 'center' }}>
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <p className="text-[#A7B867] mb-4" style={{ fontSize: '1rem' }}>
            Your Support Is Needed
          </p>
          <h1 className="text-[#1A4065] mb-6" style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif', lineHeight: '1.2' }}>
            For ¥3,500 per month,<br />Illuminate the Future of One Child
          </h1>
          <p className="text-gray-700 mb-6" style={{ fontSize: '1.125rem' }}>
            150 children are waiting for your warmth and support
          </p>
          <p className="text-gray-600" style={{ fontSize: '0.875rem' }}>
            ※ Tax deductible in India, US, Switzerland and Germany
          </p>
        </div>
      </section>

      {/* Donation Tabs */}
      <section className="bg-white py-12">
        <div className="max-w-[800px] mx-auto px-6">
          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-8">
            <button
              onClick={() => {
                setActiveTab('monthly');
                setSelectedAmount(3500);
                setCustomAmount('');
              }}
              className={`flex-1 pb-4 transition-all ${
                activeTab === 'monthly'
                  ? 'border-b-2 border-[#A7B867] text-[#A7B867]'
                  : 'text-gray-600 hover:text-[#1A4065]'
              }`}
              style={{ fontWeight: activeTab === 'monthly' ? '600' : '400' }}
            >
              Monthly Supporter
            </button>
            <button
              onClick={() => {
                setActiveTab('onetime');
                setSelectedAmount(5000);
                setCustomAmount('');
              }}
              className={`flex-1 pb-4 transition-all ${
                activeTab === 'onetime'
                  ? 'border-b-2 border-[#A7B867] text-[#A7B867]'
                  : 'text-gray-600 hover:text-[#1A4065]'
              }`}
              style={{ fontWeight: activeTab === 'onetime' ? '600' : '400' }}
            >
              One-Time Donation
            </button>
            <button
              onClick={() => {
                setActiveTab('special');
                setSelectedAmount(50000);
                setCustomAmount('');
              }}
              className={`flex-1 pb-4 transition-all ${
                activeTab === 'special'
                  ? 'border-b-2 border-[#A7B867] text-[#A7B867]'
                  : 'text-gray-600 hover:text-[#1A4065]'
              }`}
              style={{ fontWeight: activeTab === 'special' ? '600' : '400' }}
            >
              Special Gift
            </button>
          </div>

          {/* Amount Cards */}
          <div className="space-y-4 mb-8">
            {amounts.map((item) => (
              <button
                key={item.amount}
                onClick={() => {
                  setSelectedAmount(item.amount);
                  setCustomAmount('');
                }}
                className={`w-full p-6 rounded-[15px] border-2 transition-all text-left ${
                  selectedAmount === item.amount && !customAmount
                    ? 'border-[#A7B867] bg-[#F1EDE8] shadow-md'
                    : 'border-gray-300 hover:shadow-lg hover:border-[#A7B867]'
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <p className="text-[#1A4065]" style={{ fontSize: '2rem', fontWeight: 'bold', lineHeight: '1' }}>
                    ¥{item.amount.toLocaleString()}
                    {activeTab === 'monthly' && (
                      <span style={{ fontSize: '1rem', fontWeight: '400' }}>/month</span>
                    )}
                  </p>
                  <span
                    className={`px-4 py-2 rounded-[15px] text-sm transition-all ${
                      selectedAmount === item.amount && !customAmount
                        ? 'bg-[#A7B867] text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                    style={{ fontWeight: '600' }}
                  >
                    {selectedAmount === item.amount && !customAmount ? 'Selected' : 'Select'}
                  </span>
                </div>
                <p className="text-gray-700">{item.impact}</p>
              </button>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="mb-12">
            <label className="block text-[#1A4065] mb-3" style={{ fontWeight: '600' }}>
              Other Amount
            </label>
            <div className="relative">
              <span
                className="absolute left-5 top-1/2 transform -translate-y-1/2 text-[#1A4065]"
                style={{ fontSize: '1.5rem', fontWeight: '600' }}
              >
                ¥
              </span>
              <input
                type="number"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(null);
                }}
                placeholder="Enter amount"
                className="w-full pl-12 pr-6 py-4 border-2 border-[#1A4065] rounded-[15px] focus:outline-none focus:ring-2 focus:ring-[#A7B867]"
                style={{ fontSize: '1.25rem' }}
              />
            </div>
          </div>

          {/* Payment Form (Stripe Embed Area) */}
          <div className="bg-[#F1EDE8] rounded-[15px] p-8 mb-8">
            <p className="text-[#1A4065] mb-6" style={{ fontSize: '1.25rem', fontWeight: '600' }}>
              Payment Information
            </p>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-[15px] focus:outline-none focus:border-[#1A4065]"
              />
            </div>

            {/* Card Details (Stripe UI Placeholder) */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Card Information</label>
              <div className="bg-white border border-gray-300 rounded-[15px] px-4 py-3">
                <p className="text-gray-400">Enter card number, expiration date, and CVC</p>
                <p className="text-xs text-gray-500 mt-2">
                  * Stripe payment form will be displayed on the actual page
                </p>
              </div>
            </div>

            {/* Name */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="John Smith"
                className="w-full px-4 py-3 border border-gray-300 rounded-[15px] focus:outline-none focus:border-[#1A4065]"
              />
            </div>

            {/* Checkbox */}
            <label className="flex items-start gap-3 mb-6 cursor-pointer">
              <input type="checkbox" className="mt-1 w-5 h-5" />
              <span className="text-sm text-gray-700">
                I agree to the Terms of Service and Privacy Policy
              </span>
            </label>

            {/* Submit Button */}
            <button
              className="w-full bg-[#FFCA0A] text-[#1A4065] py-4 rounded-[15px] transition-all hover:bg-[#FFD940] hover:shadow-lg"
              style={{ fontSize: '1.25rem', fontWeight: '600' }}
            >
              {currentAmount ? `Support with ¥${currentAmount.toLocaleString()}` : 'Please select an amount'}
            </button>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-[#F1EDE8] py-8">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Award size={32} color="#1A4065" />
              </div>
              <p className="text-[#1A4065] text-sm" style={{ fontWeight: '600' }}>
                Certified NPO
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Shield size={32} color="#1A4065" />
              </div>
              <p className="text-[#1A4065] text-sm" style={{ fontWeight: '600' }}>
                Secure Payment<br />(Stripe)
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <BarChart3 size={32} color="#1A4065" />
              </div>
              <p className="text-[#1A4065] text-sm" style={{ fontWeight: '600' }}>
                100% Transparent
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <DollarSign size={32} color="#1A4065" />
              </div>
              <p className="text-[#1A4065] text-sm" style={{ fontWeight: '600' }}>
                Tax deductible in India, US, Switzerland and Germany
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple FAQ */}
      <section className="bg-white py-12">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-[#1A4065] text-center mb-8" style={{ fontSize: '2rem', fontFamily: 'Georgia, serif' }}>
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-[15px] overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-[#F1EDE8] transition-colors"
                >
                  <span className="text-[#1A4065]" style={{ fontWeight: '600' }}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    color="#1A4065"
                    className={`transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4 pt-2 bg-[#F1EDE8]">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
