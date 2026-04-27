import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import tenzinDrolmaImg from '../assets/phase1/4-tenzin-drolma.jpeg';
import tenzinDrolmaBeforeImg from '../assets/phase2/4-tenzin-drolma-before.jpeg';
import dawaImg from '../assets/phase1/6-dawa.jpeg';
import dawaBeforeImg from '../assets/phase2/6-dawa-before.jpeg';
import rinchenImg from '../assets/phase1/5-rinchen.jpeg';
import rinchenBeforeImg from '../assets/phase2/5-rinchen-before.png';
import lobsangImg from '../assets/phase1/7-lobsang.jpeg';
import lobsangBeforeImg from '../assets/phase2/7-lobsang-before.jpeg';

type Story = {
  image: string;
  beforeImage?: string;
  imageClassName?: string;
  title: string;
  description: string;
  slug: string;
};

export function TransformationStories() {
  const stories: Story[] = [
    {
      image: rinchenImg,
      beforeImage: rinchenBeforeImg,
      title: "Rinchen Tsering — From Loss to Leadership",
      description: "After losing his mother to cancer, Rinchen found a new family at Jhamtse Gatsal. He earned a degree in Travel & Tourism Management—the first in his family—and returned home in 2025 as Admin and Operations Manager.",
      slug: 'rinchen-tsering'
    },
    {
      image: tenzinDrolmaImg,
      beforeImage: tenzinDrolmaBeforeImg,
      title: "Tenzin Drolma — From Field to Healer",
      description: "She lost her mother young and grew up barefoot, helping her father in the fields. Welcomed into Jhamtse Gatsal, she became the first in her village to study Tibetan Medicine—and now serves as a doctor caring for the elderly.",
      slug: 'tenzin-drolma'
    },
    {
      image: dawaImg,
      beforeImage: dawaBeforeImg,
      title: "Dawa — Rising Above Uncertainty",
      description: "Raised in a home shadowed by addiction and loss, Dawa refused to let her circumstances define her. After graduating from Jhamtse Gatsal, she earned a scholarship to study History at Azim Premji University in Bangalore.",
      slug: 'dawa'
    },
    {
      image: lobsangImg,
      beforeImage: lobsangBeforeImg,
      imageClassName: 'object-top',
      title: "Lobsang — From Sacrifice to Ambition",
      description: "Sent to Jhamtse Gatsal by a struggling single mother, Lobsang became the first in her family to receive an education. Today she studies Hospitality Management and Catering in South India, dreaming of opening her own restaurant.",
      slug: 'lobsang'
    }
  ];

  return (
    <section className="py-24 bg-[#F1EDE8]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center mb-16">Stories of Transformation</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <Link
              key={index}
              to={`/impact#${story.slug}`}
              className="group bg-white rounded-[15px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Image — before/after when available, single otherwise */}
              {story.beforeImage ? (
                <div className="grid grid-cols-2 gap-1 h-72">
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
                      className={`w-full h-full object-cover ${story.imageClassName ?? ''}`}
                    />
                  </div>
                </div>
              ) : (
                <div className="h-72 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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

                {/* Read more indicator */}
                <span
                  className="inline-flex items-center gap-2 text-[#1A4065] group-hover:text-[#A7B867] transition-colors duration-200 mt-auto"
                  style={{ fontSize: '1rem', fontWeight: '600' }}
                >
                  Read More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
