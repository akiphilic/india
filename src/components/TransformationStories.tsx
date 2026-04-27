import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import tenzinDrolmaImg from '../assets/phase1/4-tenzin-drolma.jpeg';
import dawaImg from '../assets/phase1/6-dawa.jpeg';
import dawaBeforeImg from '../assets/phase2/6-dawa-before.jpeg';
import rinchenImg from '../assets/phase1/5-rinchen.jpeg';
import rinchenBeforeImg from '../assets/phase2/5-rinchen-before.png';

type Story = {
  image: string;
  beforeImage?: string;
  title: string;
  description: string;
};

export function TransformationStories() {
  const stories: Story[] = [
    {
      image: tenzinDrolmaImg,
      title: "Tenzin Drolma — From Field to Healer",
      description: "She lost her mother young and grew up barefoot, helping her father in the fields. Welcomed into Jhamtse Gatsal, she became the first in her village to study Tibetan Medicine—and now serves as a doctor caring for the elderly."
    },
    {
      image: dawaImg,
      beforeImage: dawaBeforeImg,
      title: "Dawa — Rising Above Uncertainty",
      description: "Raised in a home shadowed by addiction and loss, Dawa refused to let her circumstances define her. After graduating from Jhamtse Gatsal, she earned a scholarship to study History at Azim Premji University in Bangalore."
    },
    {
      image: rinchenImg,
      beforeImage: rinchenBeforeImg,
      title: "Rinchen Tsering — From Loss to Leadership",
      description: "After losing his mother to cancer, Rinchen found a new family at Jhamtse Gatsal. He earned a degree in Travel & Tourism Management—the first in his family—and returned home in 2025 as Admin and Operations Manager."
    }
  ];

  return (
    <section className="py-24 bg-[#F1EDE8]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center mb-16">Stories of Transformation</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-[15px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Image — before/after when available, single otherwise */}
              {story.beforeImage ? (
                <div className="grid grid-cols-2 gap-1 h-64">
                  <div className="relative overflow-hidden">
                    <span className="absolute top-2 left-2 z-10 bg-[#A7B867]/90 text-white px-2 py-0.5 rounded-full shadow" style={{ fontSize: '0.6875rem', fontWeight: '600', letterSpacing: '0.05em' }}>
                      BEFORE
                    </span>
                    <img
                      src={story.beforeImage}
                      alt={`${story.title} before`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative overflow-hidden">
                    <span className="absolute top-2 left-2 z-10 bg-[#1A4065]/90 text-white px-2 py-0.5 rounded-full shadow" style={{ fontSize: '0.6875rem', fontWeight: '600', letterSpacing: '0.05em' }}>
                      AFTER
                    </span>
                    <img
                      src={story.image}
                      alt={`${story.title} today`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ) : (
                <div className="h-64 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                {/* Before → After badges */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="bg-[#A7B867]/20 text-[#1A4065] px-4 py-1.5 rounded-full text-sm">
                    Before
                  </span>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                  <span className="bg-[#1A4065]/10 text-[#1A4065] px-4 py-1.5 rounded-full text-sm">
                    After
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-4">{story.title}</h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {story.description}
                </p>

                {/* Read more link */}
                <Link
                  to="/impact"
                  className="inline-flex items-center gap-2 text-[#1A4065] hover:text-[#A7B867] transition-colors duration-200 mt-auto"
                  style={{ fontSize: '1rem', fontWeight: '600' }}
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
