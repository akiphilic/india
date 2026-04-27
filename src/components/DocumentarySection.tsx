import { ExternalLink } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const posterUrl = new URL('../assets/phase2/16.png', import.meta.url).href;
const VIDEO_ID = 'dzvl5trn4L4';

export function DocumentarySection() {
  const [shouldAutoplay, setShouldAutoplay] = useState(false);
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

  const iframeSrc = `https://www.youtube.com/embed/${VIDEO_ID}${
    shouldAutoplay ? '?autoplay=1&mute=1&playsinline=1&rel=0' : '?rel=0'
  }`;

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
        <div className="relative w-full aspect-video shadow-2xl">
          <iframe
            key={shouldAutoplay ? 'autoplay' : 'idle'}
            src={iframeSrc}
            title="Loving Karma Teaser"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
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
