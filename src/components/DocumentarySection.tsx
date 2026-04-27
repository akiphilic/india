import { ExternalLink, Volume2, VolumeX } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const posterUrl = new URL('../assets/phase2/16.png', import.meta.url).href;
const VIDEO_ID = 'dzvl5trn4L4';
const BASE_PARAMS = `controls=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&fs=0&loop=1&playlist=${VIDEO_ID}&playsinline=1`;

export function DocumentarySection() {
  const [shouldAutoplay, setShouldAutoplay] = useState(false);
  const [muted, setMuted] = useState(true);
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = playerRef.current;
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAutoplay(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const iframeSrc = shouldAutoplay
    ? `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=${muted ? 1 : 0}&${BASE_PARAMS}`
    : `https://www.youtube.com/embed/${VIDEO_ID}?${BASE_PARAMS}`;

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

        <div className="flex justify-center mb-10">
          <img
            src={posterUrl}
            alt="Loving Karma documentary poster"
            className="rounded-[15px] shadow-2xl w-full max-w-sm"
          />
        </div>
      </div>

      <div className="w-full mb-12" ref={playerRef}>
        <div className="relative w-full aspect-video bg-black shadow-2xl overflow-hidden group">
          <iframe
            key={`${shouldAutoplay ? 'autoplay' : 'idle'}-${muted ? 'muted' : 'unmuted'}`}
            src={iframeSrc}
            title="Loving Karma Teaser"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="absolute inset-0 w-full h-full pointer-events-none"
            tabIndex={-1}
          />
          {/* Cinematic gradient overlays */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
          {/* Custom unmute control */}
          <button
            type="button"
            onClick={() => setMuted((m) => !m)}
            aria-label={muted ? 'Unmute teaser' : 'Mute teaser'}
            className="absolute bottom-6 right-6 flex items-center gap-2 bg-white/15 backdrop-blur-md text-white px-4 py-2.5 rounded-full hover:bg-white/25 transition-all duration-300 shadow-lg border border-white/20"
            style={{ fontSize: '0.875rem', fontWeight: '500' }}
          >
            {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            <span>{muted ? 'Tap for sound' : 'Sound on'}</span>
          </button>
          {/* Title plate */}
          <div className="absolute top-6 left-6 pointer-events-none">
            <p className="text-white/80" style={{ fontSize: '0.75rem', letterSpacing: '0.18em', fontWeight: '500' }}>
              TEASER
            </p>
            <p className="text-white" style={{ fontSize: '1.25rem', fontFamily: 'Georgia, serif', textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}>
              Loving Karma
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
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
