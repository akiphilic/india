import { Check } from 'lucide-react';

export function GroupSponsorship() {
  const benefits = [
    "Biannual letters and reports from the children",
    "Invitation to visit the community (optional)",
    "Starting from 3,500 yen per month",
    "Tax deductible in India, US, Switzerland and Germany",
    "Cancel anytime with no cancellation fee",
  ];

  return (
    <section className="py-24 bg-[#F1EDE8]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center mb-12">Group Sponsorship Program</h2>

        <div className="bg-white rounded-[15px] shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image */}
            <div className="h-80 md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1548102268-3d7dc56b01e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkcmVuJTIwZ3JvdXAlMjBzY2hvb2x8ZW58MXx8fHwxNzY2MTEyOTc2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Group of happy children"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Benefits */}
            <div className="p-10">
              <h3 className="mb-6">What You Receive as a Sponsor</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mr-4 mt-1">
                      <div className="w-6 h-6 rounded-full bg-[#A7B867] flex items-center justify-center">
                        <Check size={16} color="white" strokeWidth={3} />
                      </div>
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <button className="btn-primary w-full py-4">
                  Become a Sponsor Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
