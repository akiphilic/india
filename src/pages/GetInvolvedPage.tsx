import { Heart, DollarSign, Building2, MapPin, Users, Lightbulb, ArrowRight, Calendar, Mail, CheckCircle, Clock, Target } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { FinalCTA } from '../components/FinalCTA';

export function GetInvolvedPage() {
  const [email, setEmail] = useState('');
  const [flowchartStep, setFlowchartStep] = useState(0);

  const participationOptions = [
    {
      title: 'Monthly Supporter',
      icon: <Heart size={48} color="#A7B867" />,
      badge: 'Most Effective',
      description: 'Continuously support children from ¥3,500 per month',
      timeCommitment: '¥3,500/month~',
      benefits: [
        'Deliver regular activity reports',
        'Priority for annual on-site visit',
        'Possible to watch specific child\'s growth',
      ],
      ctaText: 'See details',
      ctaLink: '/donate',
      recommended: true,
    },
    {
      title: 'One-Time Donation',
      icon: <DollarSign size={48} color="#FFCA0A" />,
      description: 'Support with any amount at any time',
      timeCommitment: 'One time · Any amount',
      benefits: [
        'Tax Benefits Available (Certified NPO/NPO)',
        'You can designate funds to specific areas',
        'Thank you letters and receipts will be sent',
      ],
      ctaText: 'Donate Now',
      ctaLink: '/donate',
      recommended: false,
    },
    {
      title: 'Corporate Sponsorship',
      icon: <Building2 size={48} color="#1A4065" />,
      description: 'Support Jhamtse as a Business or Organization',
      timeCommitment: '¥500,000+ per year~',
      benefits: [
        'CSR continued communication of internal/external messages',
        'Employee On-site Program',
        'Logo Display & Media Exposure Opportunities',
      ],
      ctaText: 'Corporate Materials Request',
      ctaLink: '/donate',
      recommended: false,
    },
    {
      title: 'On-site Visit Tour',
      icon: <MapPin size={48} color="#FFCA0A" />,
      description: 'Visit the Himalayan facility and interact with children',
      timeCommitment: '5-7 days, held twice yearly',
      benefits: [
        'Direct interaction with children',
        'Experience the nature of Himalayas',
        'Guided tour by on-site staff',
      ],
      ctaText: 'Next Tour Information',
      ctaLink: '#events',
      recommended: false,
    },
    {
      title: 'Volunteer',
      icon: <Users size={48} color="#A7B867" />,
      description: 'Support through your Time and Energy',
      timeCommitment: '5 hours per month~, Remote/OK',
      benefits: [
        'Translation/SNS/Operations & Event Planning',
        'Short-term volunteering on-site also available',
        'Developing skills and experiencing fulfillment',
      ],
      ctaText: 'Volunteer Registration',
      ctaLink: '#newsletter',
      recommended: false,
    },
    {
      title: 'Skill Donation (Pro Bono)',
      icon: <Lightbulb size={48} color="#1A4065" />,
      description: 'Contribute to projects using professional skills',
      timeCommitment: 'Consult for each project',
      benefits: [
        'Design · IT · Legal · Accounting etc.',
        'Your expertise directly benefits others',
        'Career development through social contribution',
      ],
      ctaText: 'Register Skills',
      ctaLink: '#newsletter',
      recommended: false,
    },
  ];

  const events = [
    {
      date: 'March 15, 2025',
      title: 'Online Facility Tour',
      type: 'Virtual Event',
      description: 'Connect with children on-site via Zoom and talk directly',
      icon: <Calendar size={24} color="#A7B867" />,
    },
    {
      date: 'April 20, 2025',
      title: 'Spring On-site Visit Tour Registration Open',
      type: 'On-site Visit',
      description: 'May 23-29 (7 days), Capacity: 12 people',
      icon: <MapPin size={24} color="#FFCA0A" />,
    },
    {
      date: 'May 1-31, 2025',
      title: 'Charity Running Campaign',
      type: 'Fundraising',
      description: 'Your running distance turns into donations!',
      icon: <Target size={24} color="#1A4065" />,
    },
    {
      date: 'June 10, 2025',
      title: 'Volunteer Orientation (Tokyo)',
      type: 'Volunteer',
      description: 'Activity explanation and registration session',
      icon: <Users size={24} color="#A7B867" />,
    },
    {
      date: 'July 15, 2025',
      title: 'Anniversary Event',
      type: 'Charity Event',
      description: 'Alumni speeches, documentary screening',
      icon: <Heart size={24} color="#FFCA0A" />,
    },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`${email} has been registered! Thank you.`);
    setEmail('');
  };

  const renderFlowchart = () => {
    if (flowchartStep === 0) {
      return (
        <div className="text-center">
          <div className="bg-white rounded-[15px] p-8 shadow-md max-w-xl mx-auto">
            <p className="text-[#1A4065] mb-8" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
              Would you like to continue supporting regularly?
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setFlowchartStep(1)}
                className="bg-[#A7B867] text-white px-8 py-4 rounded-[15px] hover:bg-[#8FA055] transition-all"
                style={{ fontSize: '1.125rem', fontWeight: '600' }}
              >
                Yes
              </button>
              <button
                onClick={() => setFlowchartStep(2)}
                className="bg-gray-400 text-white px-8 py-4 rounded-[15px] hover:bg-gray-500 transition-all"
                style={{ fontSize: '1.125rem', fontWeight: '600' }}
              >
                No
              </button>
            </div>
          </div>
        </div>
      );
    } else if (flowchartStep === 1) {
      return (
        <div className="text-center">
          <div className="bg-[#A7B867] rounded-[15px] p-8 shadow-lg max-w-xl mx-auto text-white">
            <Heart size={64} color="white" className="mx-auto mb-6" />
            <p style={{ fontSize: '1.75rem', fontWeight: '600', fontFamily: 'Georgia, serif' }} className="mb-4">
              We recommend becoming a Monthly Supporter!
            </p>
            <p className="mb-6" style={{ fontSize: '1.125rem' }}>
              From ¥3,500 per month, you can continuously support children's growth
            </p>
            <a href="/donate">
              <button
                className="bg-white text-[#A7B867] px-8 py-3 rounded-[15px] hover:shadow-xl transition-all"
                style={{ fontSize: '1.125rem', fontWeight: '600' }}
              >
                Become a Monthly Supporter
              </button>
            </a>
            <button
              onClick={() => setFlowchartStep(0)}
              className="block mx-auto mt-6 text-white/80 hover:text-white"
            >
              Start over
            </button>
          </div>
        </div>
      );
    } else if (flowchartStep === 2) {
      return (
        <div className="text-center">
          <div className="bg-white rounded-[15px] p-8 shadow-md max-w-xl mx-auto">
            <p className="text-[#1A4065] mb-8" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
              Can you provide your time?
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setFlowchartStep(3)}
                className="bg-[#FFCA0A] text-[#1A4065] px-8 py-4 rounded-[15px] hover:bg-[#FFD940] transition-all"
                style={{ fontSize: '1.125rem', fontWeight: '600' }}
              >
                Yes
              </button>
              <button
                onClick={() => setFlowchartStep(4)}
                className="bg-gray-400 text-white px-8 py-4 rounded-[15px] hover:bg-gray-500 transition-all"
                style={{ fontSize: '1.125rem', fontWeight: '600' }}
              >
                No
              </button>
            </div>
            <button
              onClick={() => setFlowchartStep(0)}
              className="block mx-auto mt-6 text-gray-600 hover:text-gray-800"
            >
              Start over
            </button>
          </div>
        </div>
      );
    } else if (flowchartStep === 3) {
      return (
        <div className="text-center">
          <div className="bg-[#FFCA0A] rounded-[15px] p-8 shadow-lg max-w-xl mx-auto">
            <Users size={64} color="#1A4065" className="mx-auto mb-6" />
            <p style={{ fontSize: '1.75rem', fontWeight: '600', fontFamily: 'Georgia, serif' }} className="mb-4 text-[#1A4065]">
              We recommend volunteering!
            </p>
            <p className="mb-6 text-[#1A4065]" style={{ fontSize: '1.125rem' }}>
              You can get directly involved in support with your time and skills
            </p>
            <a href="#newsletter">
              <button
                className="bg-[#1A4065] text-white px-8 py-3 rounded-[15px] hover:shadow-xl transition-all"
                style={{ fontSize: '1.125rem', fontWeight: '600' }}
              >
                Register as Volunteer
              </button>
            </a>
            <button
              onClick={() => setFlowchartStep(0)}
              className="block mx-auto mt-6 text-[#1A4065]/80 hover:text-[#1A4065]"
            >
              Start over
            </button>
          </div>
        </div>
      );
    } else if (flowchartStep === 4) {
      return (
        <div className="text-center">
          <div className="bg-[#1A4065] rounded-[15px] p-8 shadow-lg max-w-xl mx-auto text-white">
            <DollarSign size={64} color="#FFCA0A" className="mx-auto mb-6" />
            <p style={{ fontSize: '1.75rem', fontWeight: '600', fontFamily: 'Georgia, serif' }} className="mb-4">
              We recommend a one-time donation!
            </p>
            <p className="mb-6" style={{ fontSize: '1.125rem' }}>
              You can support us at any time with any amount you like
            </p>
            <a href="/donate">
              <button
                className="bg-[#FFCA0A] text-[#1A4065] px-8 py-3 rounded-[15px] hover:shadow-xl transition-all"
                style={{ fontSize: '1.125rem', fontWeight: '600' }}
              >
                Donate Now
              </button>
            </a>
            <button
              onClick={() => setFlowchartStep(0)}
              className="block mx-auto mt-6 text-white/80 hover:text-white"
            >
              Start over
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#F1EDE8] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#A7B867] mb-6" style={{ fontSize: '1rem', letterSpacing: '0.1em' }}>
            PARTICIPATE | GET INVOLVED
          </p>
          <h1 className="text-[#1A4065] mb-6" style={{ fontSize: '3rem', fontFamily: 'Georgia, serif', lineHeight: '1.3' }}>
            Find a Way to Support That Works for You
          </h1>
          <p className="text-gray-700" style={{ fontSize: '1.25rem', lineHeight: '1.8' }}>
            Beyond donations, you can support us in various ways<br />
            Time, skills, passion—Start With What You Can Do
          </p>
        </div>
      </section>

      {/* Participation Options Grid */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#1A4065] text-center mb-16" style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif' }}>
            6ways to participate
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {participationOptions.map((option, index) => (
              <div
                key={index}
                className={`bg-[#F1EDE8] rounded-[15px] p-8 shadow-md hover:shadow-xl transition-all relative ${
                  option.recommended ? 'border-4 border-[#A7B867]' : ''
                }`}
              >
                {option.recommended && (
                  <div className="absolute -top-3 left-6 bg-[#A7B867] text-white px-4 py-1 rounded-full text-sm" style={{ fontWeight: '600' }}>
                    ★ {option.badge}
                  </div>
                )}

                <div className="flex items-start gap-4 mb-6">
                  {option.icon}
                  <div className="flex-1">
                    <h3 className="text-[#1A4065] mb-2" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                      {option.title}
                    </h3>
                    <p className="text-gray-700 mb-4">{option.description}</p>
                    <div className="flex items-center gap-2 text-[#A7B867] mb-4">
                      <Clock size={18} />
                      <span style={{ fontWeight: '600' }}>{option.timeCommitment}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-[#1A4065] mb-3" style={{ fontWeight: '600' }}>
                    Benefits of this plan:
                  </p>
                  <ul className="space-y-2">
                    {option.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <CheckCircle size={18} color="#A7B867" className="flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a href={option.ctaLink}>
                  <button
                    className={`w-full py-3 rounded-[15px] transition-all flex items-center justify-center gap-2 ${
                      option.recommended
                        ? 'bg-[#A7B867] text-white hover:bg-[#8FA055]'
                        : 'bg-white text-[#1A4065] border-2 border-[#1A4065] hover:bg-[#1A4065] hover:text-white'
                    }`}
                    style={{ fontWeight: '600' }}
                  >
                    {option.ctaText}
                    <ArrowRight size={18} />
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flowchart Decision Tool */}
      <section className="bg-[#F1EDE8] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-[#1A4065] text-center mb-6" style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif' }}>
            What's the best way for you to participate?
          </h2>
          <p className="text-center text-gray-700 mb-12" style={{ fontSize: '1.125rem' }}>
            Answer simple questions to find the perfect way to support
          </p>

          {renderFlowchart()}
        </div>
      </section>

      {/* Event Calendar */}
      <section id="events" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#1A4065] text-center mb-6" style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif' }}>
            Upcoming Events
          </h2>
          <p className="text-center text-gray-700 mb-12" style={{ fontSize: '1.125rem' }}>
            Many opportunities to learn about and get involved with Jhamtse
          </p>

          <div className="space-y-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-[#F1EDE8] rounded-[15px] p-6 shadow-md hover:shadow-lg transition-all flex items-start gap-6"
              >
                <div className="flex-shrink-0 bg-white rounded-[15px] p-4 w-20 h-20 flex items-center justify-center">
                  {event.icon}
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-[#1A4065] mb-1" style={{ fontSize: '1.25rem', fontWeight: '600' }}>
                        {event.title}
                      </h3>
                      <p className="text-[#A7B867]" style={{ fontWeight: '600' }}>
                        {event.date}
                      </p>
                    </div>
                    <span className="bg-white px-4 py-1 rounded-full text-sm text-[#1A4065]" style={{ fontWeight: '600' }}>
                      {event.type}
                    </span>
                  </div>
                  <p className="text-gray-700">{event.description}</p>
                </div>

                <button
                  className="flex-shrink-0 bg-[#FFCA0A] text-[#1A4065] px-6 py-2 rounded-[15px] hover:bg-[#FFD940] transition-all"
                  style={{ fontWeight: '600' }}
                >
                  Details
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              All event information will be sent via newsletter
            </p>
            <a href="#newsletter">
              <button
                className="text-[#1A4065] border-2 border-[#1A4065] px-8 py-3 rounded-[15px] hover:bg-[#1A4065] hover:text-white transition-all inline-flex items-center gap-2"
                style={{ fontWeight: '600' }}
              >
                Subscribe to Newsletter
                <ArrowRight size={18} />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section id="newsletter" className="bg-[#A7B867] py-16 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <Mail size={48} color="white" className="mx-auto mb-4" />
            <h2 className="mb-4" style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif', color: 'white' }}>
              Newsletter Registration
            </h2>
            <p className="text-white/90" style={{ fontSize: '1.125rem' }}>
              Once a month, we'll share children's growth and event information
            </p>
          </div>

          <form onSubmit={handleNewsletterSubmit} className="max-w-xl mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                required
                className="flex-1 px-6 py-4 rounded-[15px] text-gray-800"
                style={{ fontSize: '1rem' }}
              />
              <button
                type="submit"
                className="bg-[#FFCA0A] text-[#1A4065] px-8 py-4 rounded-[15px] hover:bg-[#FFD940] transition-all"
                style={{ fontWeight: '600', fontSize: '1rem' }}
              >
                Register
              </button>
            </div>
            <p className="text-white/70 text-sm mt-4 text-center">
              You can unsubscribe at any time. Personal information is strictly managed.
            </p>
          </form>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-[#FFCA0A] mb-2" style={{ fontSize: '2rem', fontFamily: 'Georgia, serif', fontWeight: 'bold' }}>
                8,500+
              </p>
              <p className="text-white/90">Subscribers</p>
            </div>
            <div>
              <p className="text-[#FFCA0A] mb-2" style={{ fontSize: '2rem', fontFamily: 'Georgia, serif', fontWeight: 'bold' }}>
                Monthly
              </p>
              <p className="text-white/90">Frequency</p>
            </div>
            <div>
              <p className="text-[#FFCA0A] mb-2" style={{ fontSize: '2rem', fontFamily: 'Georgia, serif', fontWeight: 'bold' }}>
                92%
              </p>
              <p className="text-white/90">Open Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-[#1A4065] mb-6" style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif' }}>
            Start with a Small Step
          </h2>
          <p className="text-gray-700 mb-8" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
            If you're not ready to decide yet, that's okay.<br />
            Following and sharing on social media is also a valuable form of support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/donate">
              <button
                className="bg-[#FFCA0A] text-[#1A4065] px-10 py-4 rounded-[15px] hover:bg-[#FFD940] transition-all shadow-md hover:shadow-lg"
                style={{ fontSize: '1.125rem', fontWeight: '600' }}
              >
                Donate Now
              </button>
            </a>
            <button
              className="bg-white text-[#1A4065] border-2 border-[#1A4065] px-10 py-4 rounded-[15px] hover:bg-[#1A4065] hover:text-white transition-all"
              style={{ fontSize: '1.125rem', fontWeight: '600' }}
            >
              Download Materials
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA Component */}
      <FinalCTA />
    </div>
  );
}