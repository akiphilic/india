import { ArrowRight } from 'lucide-react';

export function TransformationStories() {
  const stories = [
    {
      image: "https://images.unsplash.com/photo-1737523094517-e44d8b34fb64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YW4lMjBzbWlsaW5nJTIwZ2lybCUyMGNoaWxkfGVufDF8fHx8MTc2NjExNDAzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "The Day She Found Her Smile Again",
      description: "An 8-year-old girl who lost her parents and closed her heart. At her first birthday celebration at the community, she showed a genuine smile for the first time..."
    },
    {
      image: "https://images.unsplash.com/photo-1655190966821-3e231990b9f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YW4lMjBib3klMjBzdHVkeWluZyUyMHJlYWRpbmd8ZW58MXx8fHwxNzY2MTE0MDM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Discovering the Joy of Learning",
      description: "A boy who never had the chance to attend school. Now he's the first one in the classroom every morning, sharing his dream of becoming a doctor to help his village..."
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
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {story.description}
                </p>

                {/* Read more link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#1A4065] hover:text-[#A7B867] transition-colors duration-200"
                  style={{ fontSize: '1rem', fontWeight: '600' }}
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
