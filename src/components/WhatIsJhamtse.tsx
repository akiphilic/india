import { Home, GraduationCap, Sprout, Users, Sparkles } from 'lucide-react';
import youngestStudentsImg from '../assets/phase1/3-youngest-students.jpeg';

export function WhatIsJhamtse() {
  const pillars = [
    {
      icon: Home,
      iconColor: '#1A4065',
      title: 'More than an Institution',
      description:
        'Jhamtse Gatsal is a living, breathing community. A home where 150 children grow together as a family. Here, older children become role models and caregivers, nurturing a culture of empathy, responsibility, and belonging that lasts a lifetime.',
    },
    {
      icon: GraduationCap,
      iconColor: '#A7B867',
      title: 'Empowering Individual Potential',
      description:
        'Every child at Jhamtse is seen, supported, and believed in. By nurturing confidence, resilience, and self-worth, we enable young people to shape their own futures—with over 90% continuing on to higher education and meaningful paths beyond.',
    },
    {
      icon: Sprout,
      iconColor: '#FFCA0A',
      title: 'Living Sustainability',
      description:
        'Sustainability at Jhamtse is not taught as a subject—it is lived every day. Through organic farming, solar energy, waste management, and environmental stewardship, children grow into conscious individuals prepared to live responsibly, with awareness and respect.',
    },
    {
      icon: Users,
      iconColor: '#1A4065',
      title: 'A Community of Care',
      subtitle: 'Our Teachers of Life',
      description:
        'At the heart of Jhamtse Gatsal are adults who choose to live with intention—supporting, guiding, and growing alongside the children.',
    },
    {
      icon: Sparkles,
      iconColor: '#A7B867',
      title: 'Shaping Compassionate Futures',
      description:
        'Jhamtse is not only supporting children today, it is nurturing future leaders of compassion. Young individuals who carry empathy, resilience, and a deep sense of responsibility into their communities, creating ripples of positive change far beyond Jhamtse.',
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-32 bg-[#F1EDE8]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[#1A4065] mb-3">
            About Jhamtse Gatsal
          </h2>
          <p className="text-[#A7B867] text-lg" style={{ fontWeight: '500' }}>
            "Garden of Love and Compassion"
          </p>
        </div>

        {/* Intro with image */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 max-w-6xl mx-auto">
          <div className="rounded-[15px] overflow-hidden shadow-lg">
            <img
              src={youngestStudentsImg}
              alt="The youngest students of Jhamtse Gatsal"
              className="w-full h-[420px] object-cover"
            />
          </div>
          <div className="space-y-4">
            <p className="text-[#333333] text-lg" style={{ lineHeight: '1.8' }}>
              Jhamtse Gatsal means "Garden of Love and Compassion" in Tibetan—a transformative residential community for children and adults located in Tawang District, Arunachal Pradesh, in the Eastern Himalayas near the tri-junction of India, Bhutan, and Tibet.
            </p>
            <p className="text-[#333333] text-lg" style={{ lineHeight: '1.8' }}>
              Since 2006, we have nurtured more than 200 vulnerable children into compassionate, capable leaders. Rooted in love, compassion, and sustainable practices, we cultivate hearts, minds, and bodies through education, shared responsibility, and service.
            </p>
            <p className="text-[#333333] text-lg" style={{ lineHeight: '1.8' }}>
              The community's vision is simple and vast: that one day the world lives as one Jhamtse.
            </p>
          </div>
        </div>

        {/* Five Pillars Grid */}
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
                <h3 className="text-[#1A4065] mb-2" style={{ fontSize: '1.25rem', fontWeight: '600' }}>
                  {pillar.title}
                </h3>
                {pillar.subtitle && (
                  <p className="text-[#A7B867] text-sm mb-4 italic" style={{ fontWeight: '500' }}>
                    {pillar.subtitle}
                  </p>
                )}

                {/* Description */}
                <p className="text-[#666666] flex-grow" style={{ fontSize: '0.9375rem', lineHeight: '1.7' }}>
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
