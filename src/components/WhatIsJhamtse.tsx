import { Home, BookOpen, Sprout } from 'lucide-react';

export function WhatIsJhamtse() {
  const pillars = [
    {
      icon: Home,
      iconColor: '#1A4065',
      title: 'Growing as a Family',
      titleEn: 'Growing as a Family',
      description: 'Not an orphanage, but one large family of 161 members. Older children care for younger ones in sibling-like relationships.',
      badge: {
        text: 'Impact: 95% of graduates say "this is my true home"',
        bgColor: '#A7B867',
        textColor: 'white'
      }
    },
    {
      icon: BookOpen,
      iconColor: '#A7B867',
      title: 'Education with Love',
      titleEn: 'Education with Love',
      description: 'Valuing individual growth over test rankings. Building self-esteem leads to 90%+ university enrollment.',
      badge: {
        text: 'Impact: 18x higher than India\'s 5% poverty-level average',
        bgColor: '#FFCA0A',
        textColor: '#1A4065'
      }
    },
    {
      icon: Sprout,
      iconColor: '#FFCA0A',
      title: 'Sustainable Living',
      titleEn: 'Sustainable Living',
      description: 'Organic farming, solar power, environmental education. Children develop the ability to thrive anywhere.',
      badge: {
        text: 'Impact: 70% energy self-sufficient, 40% food self-sufficient',
        bgColor: '#1A4065',
        textColor: 'white'
      }
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-32 bg-[#F1EDE8]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[#1A4065] mb-3">
            What is Jhamtse Gatsal?
          </h2>
          <p className="text-[#A7B867] text-lg" style={{ fontWeight: '500' }}>
            "Garden of Love and Compassion"
          </p>
        </div>

        {/* Intro Paragraph */}
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <p className="text-[#333333] text-lg mb-4" style={{ lineHeight: '1.8' }}>
            Jhamtse Gatsal means "Garden of Love and Compassion" in Tibetan.
          </p>
          <p className="text-[#333333] text-lg mb-4" style={{ lineHeight: '1.8' }}>
            It is a residential children's care and education community in Tawang, Arunachal Pradesh, northeastern India, for children who have lost their parents or come from extremely impoverished families.
          </p>
          <p className="text-[#333333] text-lg mb-4" style={{ lineHeight: '1.8' }}>
            Since its founding in 2006, this community has practiced education that values "love and compassion" over "test scores."
          </p>
          <p className="text-[#333333] text-lg" style={{ lineHeight: '1.8' }}>
            Children aged 5 to 18 live here, growing up in family-like warmth while receiving quality education.
          </p>
        </div>

        {/* Three Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-[15px] p-8 lg:p-10 flex flex-col items-center text-center"
                style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)' }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <Icon size={64} color={pillar.iconColor} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-[#1A4065] mb-2" style={{ fontSize: '1.25rem', fontWeight: '500' }}>
                  {pillar.title}
                </h3>
                <p className="text-[#A7B867] text-sm mb-4" style={{ fontWeight: '400' }}>
                  {pillar.titleEn}
                </p>

                {/* Description */}
                <p className="text-[#666666] mb-6 flex-grow" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                  {pillar.description}
                </p>

                {/* Outcome Badge */}
                <div
                  className="rounded-full px-4 py-2 text-sm"
                  style={{
                    backgroundColor: pillar.badge.bgColor,
                    color: pillar.badge.textColor,
                    fontWeight: '500'
                  }}
                >
                  {pillar.badge.text}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}