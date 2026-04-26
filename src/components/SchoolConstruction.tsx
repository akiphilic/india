import { Heart, ArrowRight, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import newSchoolConstruction from '../assets/new-school-construction.jpg';

export function SchoolConstruction() {
  const navigate = useNavigate();
  const currentAmount = 45000000; // ¥45M
  const goalAmount = 150000000; // ¥150M
  const percentage = 30; // (currentAmount / goalAmount) * 100
  const supporters = 1247;

  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-[55%_45%] min-h-[700px]">
          {/* Left Side - Image */}
          <div className="relative h-[300px] lg:h-auto">
            <img
              src={newSchoolConstruction}
              alt="New school construction aerial view"
              className="w-full h-full object-cover"
            />
            {/* Completion Badge */}
            <div className="absolute bottom-6 left-6 bg-[#1A4065] text-white px-4 py-2 rounded-lg">
              <p style={{ fontSize: '14px', fontWeight: '500' }}>Completion: September 2027</p>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="bg-white px-6 py-12 lg:px-[60px] lg:py-[60px] flex flex-col justify-center">
            {/* Kicker */}
            <div className="mb-6">
              <p
                className="text-[#A7B867] uppercase tracking-wider mb-1"
                style={{ fontSize: '16px', fontWeight: '500', letterSpacing: '0.1em' }}
              >
                INVESTING IN THE FUTURE
              </p>
              <p
                className="text-[#A7B867] uppercase tracking-wider"
                style={{ fontSize: '14px', fontWeight: '400', letterSpacing: '0.1em' }}
              >
                DREAM PROJECT
              </p>
            </div>

            {/* Main Headline */}
            <h2
              className="mb-4"
              style={{
                color: '#1A4065',
                fontSize: '44px',
                lineHeight: '1.4',
                fontFamily: 'Georgia, serif'
              }}
            >
              Build the Future Together:
              <br />
              A School for 200 Children
            </h2>

            {/* Subheadline */}
            <p
              className="text-gray-600 mb-8"
              style={{ fontSize: '20px', fontWeight: '500' }}
            >
              New school building construction project planned for completion in 2027
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mb-10">
              <div className="bg-[#FFCA0A]/20 text-[#1A4065] px-4 py-2 rounded-[16px] flex items-center gap-2">
                <span style={{ fontSize: '16px' }}>🌞</span>
                <span style={{ fontSize: '14px', fontWeight: '500' }}>100% Solar Powered</span>
              </div>
              <div className="bg-[#A7B867]/20 text-[#1A4065] px-4 py-2 rounded-[16px] flex items-center gap-2">
                <span style={{ fontSize: '16px' }}>👨‍👩‍👧‍👦</span>
                <span style={{ fontSize: '14px', fontWeight: '500' }}>200 Students</span>
              </div>
              <div className="bg-[#1A4065]/20 text-[#1A4065] px-4 py-2 rounded-[16px] flex items-center gap-2">
                <span style={{ fontSize: '16px' }}>🏗️</span>
                <span style={{ fontSize: '14px', fontWeight: '500' }}>120+ Local Jobs</span>
              </div>
            </div>

            {/* Progress Section */}
            <div className="mb-8">
              <p className="text-gray-600 mb-4" style={{ fontSize: '14px' }}>
                Construction Fund Progress
              </p>

              {/* Progress Stats */}
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p
                    style={{
                      fontSize: '48px',
                      fontWeight: 'bold',
                      color: '#1A4065',
                      fontFamily: 'Roboto, sans-serif',
                      lineHeight: '1'
                    }}
                  >
                    {percentage}%
                  </p>
                  <p className="text-gray-600" style={{ fontSize: '14px' }}>Funded</p>
                </div>
                <div className="text-right">
                  <p
                    className="text-[#1A4065] mb-1"
                    style={{ fontSize: '18px', fontWeight: '500' }}
                  >
                    ¥{(currentAmount / 1000000).toFixed(0)}M / ¥{(goalAmount / 1000000).toFixed(0)}M
                  </p>
                  <p className="text-gray-600" style={{ fontSize: '14px' }}>
                    {supporters.toLocaleString()} supporters
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#A7B867] to-[#FFCA0A] transition-all duration-1000"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4 mb-6">
              <button
                className="w-full bg-[#FFCA0A] text-[#1A4065] rounded-[12px] py-[18px] flex items-center justify-center gap-2 transition-all hover:bg-[#FFD940] hover:shadow-lg"
                style={{ fontSize: '18px', fontWeight: '600' }}
                onClick={() => navigate('/donate')}
              >
                <Heart size={20} fill="currentColor" />
                Support Now
              </button>

              <button
                className="w-full bg-white text-[#1A4065] border-2 border-[#1A4065] rounded-[12px] py-[16px] flex items-center justify-center gap-2 transition-all hover:bg-[#1A4065] hover:text-white"
                style={{ fontSize: '16px', fontWeight: '500' }}
                onClick={() => navigate('/new-school-project')}
              >
                View Project Details
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Trust Note */}
            <div className="flex items-center gap-2 text-gray-600">
              <Award size={12} />
              <p style={{ fontSize: '12px' }}>
                Tax deductible in India, US, Switzerland and Germany | 100% Transparent Funding
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}