import { Play, ExternalLink } from 'lucide-react';

export function DocumentarySection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="mb-6" style={{ fontSize: '3rem', fontFamily: 'Georgia, serif', color: '#1A4065' }}>
            LOVING KARMA
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto" style={{ lineHeight: '1.8' }}>
            Loving Karma is the long-awaited follow-up to the Emmy Award–winning documentary Tashi and the Monk. As Tashi's journey unfolds, so too does a larger truth: when we choose compassion, we not only change one life—we plant seeds of healing that ripple across families, communities, and the world.
          </p>
        </div>

        {/* Video Placeholder */}
        <div className="relative rounded-[15px] overflow-hidden shadow-2xl mb-8 group">
          <a
            href="https://jhamtse.org/loving-karma/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="aspect-video bg-gradient-to-br from-[#1A4065] to-[#A7B867] flex items-center justify-center">
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-8 inline-flex items-center justify-center mb-4 group-hover:scale-110 transition-transform cursor-pointer">
                  <Play size={60} color="#FFCA0A" fill="#FFCA0A" />
                </div>
                <p className="text-white text-xl">Documentary Film</p>
              </div>
            </div>
          </a>
        </div>

        <div className="text-center">
          <h3 className="text-[#1A4065] mb-4" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
            Watch the Teaser!
          </h3>
          <p className="text-gray-700 mb-6">
            Get a first glimpse of Loving Karma.
          </p>
          <a
            href="https://jhamtse.org/loving-karma/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-lg px-8 py-4 inline-flex items-center gap-2"
          >
            Learn more <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
