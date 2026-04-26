import { ArrowRight } from 'lucide-react';
import tenzinDrolmaImg from '../assets/phase1/4-tenzin-drolma.jpeg';
import dawaImg from '../assets/phase1/6-dawa.jpeg';

export function TransformationStories() {
  const stories = [
    {
      image: tenzinDrolmaImg,
      title: "Tenzin Drolma — From Field to Healer",
      description: "She lost her mother young and grew up barefoot, helping her father in the fields. Welcomed into Jhamtse Gatsal, she became the first in her village to study Tibetan Medicine—and now serves as a doctor caring for the elderly."
    },
    {
      image: dawaImg,
      title: "Dawa — Rising Above Uncertainty",
      description: "Raised in a home shadowed by addiction and loss, Dawa refused to let her circumstances define her. After graduating from Jhamtse Gatsal, she earned a scholarship to study History at Azim Premji University in Bangalore."
    }
  ];

  return (
    <section className="py-24 bg-[#F1EDE8]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center mb-16">Stories of Transformation</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-[15px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="h-64 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8">
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
                <p className="text-gray-600 leading-relaxed">
                  {story.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
