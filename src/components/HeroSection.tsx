import { Play } from 'lucide-react';
import heroLandscape from '../assets/phase1/1-jhamtse-landscape.png';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with Jhamtse landscape - full screen */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroLandscape}
          alt="Jhamtse Gatsal landscape in the Himalayas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A4065]/90 via-[#1A4065]/75 to-[#1A4065]/60"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-3xl">
          {/* Facility Type Label */}
          <div className="space-y-2 mb-8">
            <p className="text-[#A7B867]" style={{ fontSize: '1.125rem', fontWeight: '500', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
              'Garden of Love and Compassion'
            </p>
          </div>

          {/* Main Headline */}
          <h1 className="text-white mb-8" style={{ fontSize: '4rem', lineHeight: '1.2', textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)', color: '#ffffff' }}>
            Nurturing lives.
            <br />
            Shaping futures.
          </h1>

          {/* Subheadline */}
          <p className="text-[#F1EDE8] text-lg lg:text-xl mb-10" style={{ lineHeight: '1.8' }}>
            Set in the Himalayan region of India, our residential community is home to 150 children
            <br className="hidden md:block" />
            who grow up with quality education and the warmth of a nurturing family.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="px-8 py-4 bg-[#FFCA0A] text-[#1A4065] rounded-[15px] transition-all duration-300 hover:shadow-lg hover:bg-[#FFD940]"
              style={{
                fontWeight: '600',
                boxShadow: '0 4px 12px rgba(26, 64, 101, 0.15)'
              }}
            >
              Experience Our Story
            </button>

            <button
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-[15px] transition-all duration-300 hover:bg-white hover:text-[#1A4065] flex items-center justify-center gap-2"
              style={{
                fontWeight: '600'
              }}
            >
              <Play size={20} fill="currentColor" />
              Watch the Emmy-Winning Documentary
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}