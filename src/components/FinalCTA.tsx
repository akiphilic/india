import { Heart, ArrowRight, Instagram, Linkedin, Facebook } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#1A4065] to-[#A7B867] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="bg-[#FFCA0A] rounded-full p-6">
            <Heart size={60} color="#1A4065" fill="#1A4065" />
          </div>
        </div>

        <h2 className="text-white mb-6" style={{ color: '#ffffff' }}>
          Start Today: Invest in Children's Future
        </h2>

        <p className="text-xl text-[#F1EDE8] max-w-3xl mx-auto mb-12">
          Every small act of support makes a big difference in children's lives.
          Will you become a member of the Jhamtse Gatsal family?
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
          <button className="btn-primary text-xl px-12 py-6 flex items-center gap-3 group">
            Donate Now
            <Heart
              size={24}
              className="group-hover:scale-110 transition-transform"
            />
          </button>
          <button className="btn-secondary text-xl px-12 py-6 flex items-center gap-3 group">
            Learn More
            <ArrowRight
              size={24}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
          <div className="text-white">
            <p style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>100%</p>
            <p className="text-[#F1EDE8]">Transparent Operations</p>
          </div>
          <div className="text-white">
            <p style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>20+ Years</p>
            <p className="text-[#F1EDE8]">Continuous Support Record</p>
          </div>
          <div className="text-white">
            <p style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 'bold', lineHeight: '1.3' }}>Tax deductible in</p>
            <p className="text-[#F1EDE8]">India, US, Switzerland and Germany</p>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <p className="text-[#F1EDE8] mb-4" style={{ fontSize: '0.875rem', letterSpacing: '0.08em' }}>
            FOLLOW JHAMTSE GATSAL
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="https://www.instagram.com/jhamtsegatsal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-full transition-all"
            >
              <Instagram size={20} />
              <span style={{ fontWeight: '500' }}>@jhamtsegatsal</span>
            </a>
            <a
              href="https://www.linkedin.com/company/jhamtse-gatsal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-full transition-all"
            >
              <Linkedin size={20} />
              <span style={{ fontWeight: '500' }}>Jhamtse Gatsal</span>
            </a>
            <a
              href="https://www.facebook.com/JhamtseGatsalChildrensCommunity"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-full transition-all"
            >
              <Facebook size={20} />
              <span style={{ fontWeight: '500' }}>Jhamtse Gatsal Children's Community</span>
            </a>
          </div>
          <p className="text-sm text-[#F1EDE8]">
            © 2026 Jhamtse Gatsal. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}