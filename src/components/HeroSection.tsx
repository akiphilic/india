import { Play } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with children's faces - full screen */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1706025000626-6ecadce42a82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YW4lMjBjaGlsZHJlbiUyMHNtaWxpbmd8ZW58MXx8fHwxNjYxMjAxNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Children's smiles"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A4065]/90 via-[#1A4065]/75 to-[#1A4065]/60"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-3xl">
          {/* Facility Type Label */}
          <div className="space-y-2 mb-8">
            <p className="text-[#A7B867]" style={{ fontSize: '1.125rem', fontWeight: '500' }}>
              Jhamtse Gatsal Children's Community
            </p>
            <p className="text-[#A7B867]" style={{ fontSize: '0.875rem', fontWeight: '400' }}>
              "Garden of Love and Compassion"
            </p>
          </div>

          {/* Main Headline */}
          <h1 className="text-white mb-8" style={{ fontSize: '4rem', lineHeight: '1.2', textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)', color: '#ffffff' }}>
            Nurturing Children's Future
            <br />
            with Love and Compassion
          </h1>

          {/* Subheadline */}
          <p className="text-[#F1EDE8] text-lg lg:text-xl mb-10" style={{ lineHeight: '1.8' }}>
            161 children live in a residential facility in the Indian Himalayas,
            <br className="hidden md:block" />
            receiving quality education and surrounded by family-like warmth
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
              Support for ¥3,500/month
            </button>

            <button
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-[15px] transition-all duration-300 hover:bg-white hover:text-[#1A4065] flex items-center justify-center gap-2"
              style={{
                fontWeight: '600'
              }}
            >
              <Play size={20} fill="currentColor" />
              Watch Emmy Documentary
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}