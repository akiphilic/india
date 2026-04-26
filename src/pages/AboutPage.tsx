import { Heart, Target, Users, Award, BookOpen, Sprout, Globe, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { FinalCTA } from '../components/FinalCTA';
import founderImage from '../assets/phase1/2-genla.jpeg';
import heroLandscape from '../assets/phase1/1-jhamtse-landscape.png';

export function AboutPage() {
  const timelineEvents = [
    { year: 2006, title: 'Founded', description: 'Founded by Lobsang Phuntsok. Initially welcomed 36 children.' },
    { year: 2016, title: 'Emmy Award Winner', description: '"Tashi and the Monk", a film about Jhamtse Gatsal, won an Emmy Award.' },
    { year: 2017, title: 'First Batch of Graduates', description: '12 children graduated high school. All advanced to university.' },
    { year: 2020, title: 'A Growing Family', description: 'Jhamtse Gatsal becomes home to over 200 children.' },
    { year: 2025, title: 'Loving Karma Goes Global', description: 'Expanding the story of Tashi and the Monk, the film reaches audiences worldwide.' },
    { year: 2026, title: 'New Building Project Start', description: 'Construction of the New Śūnyatā Learning Center begins.' },
  ];

  const teamMembers = [
    {
      name: 'Vasudha Wanchoo',
      role: 'Managing Director',
      bio: 'Oversees the overall functioning of the community. She supports all departments, ensures smooth coordination, and holds the overall wellbeing of the community at the center of all decisions.',
      image: new URL('../assets/phase2/1.jpg', import.meta.url).href,
    },
    {
      name: 'Sudarsan Kumar Madathil',
      role: 'Principal',
      bio: 'Leads the school and its vision. He guides the academic direction and ensures a nurturing and meaningful learning environment for all children.',
      image: new URL('../assets/phase2/2.jpg', import.meta.url).href,
    },
    {
      name: 'Tenzin Dondul',
      role: 'Head Teacher',
      bio: 'Works closely with teachers, supporting their growth. He focuses on academics and positive discipline, while caring for the wellbeing of both teachers and children.',
      image: new URL('../assets/phase2/3.jpg', import.meta.url).href,
    },
    {
      name: 'Teke Subba',
      role: 'Accounts Manager',
      bio: 'Manages all financial aspects of the community. From budgeting to daily transactions, he ensures transparency and careful stewardship of resources.',
      image: new URL('../assets/phase2/4.jpg', import.meta.url).href,
    },
    {
      name: 'Thutan Drema',
      role: 'Sustainability Manager',
      bio: 'Guides sustainability initiatives across the Community, including waste management and recycling. She also builds connections and collaborations with surrounding communities.',
      image: new URL('../assets/phase2/5.jpg', import.meta.url).href,
    },
    {
      name: 'Kesang lhamu',
      role: 'Head Amala (Housemother)',
      bio: 'Leads the Amalas who care for children in the family homes. She nurtures a loving, disciplined, and familial environment where children feel safe and supported.',
      image: new URL('../assets/phase1/8-kesang.jpeg', import.meta.url).href,
    },
    {
      name: 'Tenzin Dakpa',
      role: 'Kitchen Manager',
      bio: 'Oversees the community kitchen. He ensures that nutritious, balanced meals are prepared daily while managing food supplies and kitchen operations.',
      image: new URL('../assets/phase2/7.jpg', import.meta.url).href,
    },
    {
      name: 'Sonam Buti',
      role: 'Organic Farm Manager',
      bio: 'Leads organic farming and vermicomposting. She grows fresh, healthy produce that nourishes the Community and supports sustainable living.',
      image: new URL('../assets/phase2/8.jpg', import.meta.url).href,
    },
    {
      name: 'Dorjee Lama',
      role: 'Head of Facilities',
      bio: 'Looks after infrastructure and maintenance. From construction to water systems, he ensures everything runs smoothly for the daily life of the community.',
      image: new URL('../assets/phase2/9.jpg', import.meta.url).href,
    },
  ];

  const awards = [
    {
      icon: '🏆',
      title: '2016',
      year: 'Emmy Award – Best Short Documentary',
      organization: 'Keynote speaker at the United Nations',
    },
    {
      icon: '🥇',
      title: '2021',
      year: 'Gold Medal',
      organization: 'State Government of Arunachal Pradesh',
    },
    {
      icon: '🎤',
      title: '2023',
      year: 'TEDx Kyoto Speaker',
      organization: 'Lobsang Phuntsok shares the Jhamtse story globally',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center text-white"
        style={{ minHeight: '600px' }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={heroLandscape}
            alt="Jhamtse Gatsal Landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1A4065]/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="text-[#FFCA0A] mb-6" style={{ fontSize: '1rem', letterSpacing: '0.1em' }}>
            ABOUT US
          </p>
          <h1 className="text-white mb-8" style={{ fontSize: '3rem', fontFamily: 'Georgia, serif', lineHeight: '1.3', color: '#FFFFFF' }}>
            'Garden of Love and Compassion'<br />Jhamtse Gatsal
          </h1>
          <p className="text-white/90" style={{ fontSize: '1.25rem', lineHeight: '1.6' }}>
            Since 2006, home to 150 children and a growing<br />
            community of caregivers and adults
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#F1EDE8] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <Heart size={36} color="#A7B867" fill="#A7B867" />
                </div>
              </div>
              <h2 className="text-[#1A4065] mb-4" style={{ fontSize: '2rem', fontFamily: 'Georgia, serif' }}>
                Mission
              </h2>
              <p className="text-gray-700" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
                Jhamtse Gatsal is a transformative residential community for children and adults. We have nurtured more than 200 vulnerable children into compassionate, capable leaders. Rooted in love, compassion, and sustainable practices, we cultivate hearts, minds, and bodies through education, shared responsibility, and service. Together, we grow resilient individuals who strengthen families, communities, and our interconnected world.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <Target size={36} color="#FFCA0A" fill="#FFCA0A" />
                </div>
              </div>
              <h2 className="text-[#1A4065] mb-4" style={{ fontSize: '2rem', fontFamily: 'Georgia, serif' }}>
                Vision
              </h2>
              <p className="text-gray-700" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
                We envision a world where every individual grows with love, stability, and belonging—nurtured by compassion, guided by wisdom, and strengthened through community so they may become resilient, responsible human beings who uplift society and live in harmony with others and the Earth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-[#1A4065] text-center mb-16" style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif' }}>
            Jhamtse Gatsal's Journey
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#A7B867] hidden md:block"></div>

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative md:pl-20">
                  {/* Dot */}
                  <div className="absolute left-6 top-2 w-5 h-5 bg-[#1A4065] rounded-full border-4 border-white hidden md:block"></div>

                  {/* Content Card */}
                  <div className="bg-[#F1EDE8] rounded-[15px] p-6 shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <BookOpen size={20} color="#A7B867" />
                      <p className="text-[#A7B867]" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                        {event.year}
                      </p>
                    </div>
                    <h3 className="text-[#1A4065] mb-2" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                      {event.title}
                    </h3>
                    <p className="text-gray-700">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="bg-[#F1EDE8] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[60%_40%] gap-12 items-center">
            {/* Left: Image */}
            <div className="rounded-[15px] overflow-hidden shadow-lg">
              <ImageWithFallback
                src={founderImage}
                alt="Lobsang Phuntsok"
                className="w-full h-[700px] object-cover"
              />
            </div>

            {/* Right: Text */}
            <div>
              <h3 className="text-[#1A4065] mb-2" style={{ fontSize: '2rem', fontFamily: 'Georgia, serif' }}>
                Lobsang Phuntsok
              </h3>
              <p className="text-[#A7B867] mb-6" style={{ fontSize: '1.125rem', fontWeight: '600' }}>
                Founder & Director
              </p>

              <div className="bg-white rounded-[15px] p-6 mb-6">
                <p className="text-[#1A4065] italic" style={{ fontSize: '1.25rem', fontFamily: 'Georgia, serif' }}>
                  "The potential of love and compassion to restore human hope is limitless."
                </p>
              </div>

              <div className="space-y-4 text-gray-700" style={{ lineHeight: '1.8' }}>
                <p>
                  Lobsang Phuntsok, a former Buddhist monk, is an internationally recognized leader in transformative learning, sustainable development, and social entrepreneurship. In 2006, he returned to his native region in the Northeastern Himalayas to found Jhamtse Gatsal Children's Community—"a Garden of Love and Compassion"—a home and immersive learning environment for vulnerable children.
                </p>
                <p>
                  Over the years, Jhamtse Gatsal has evolved into a living laboratory for people of all ages who seek to live with intention and meaning. Rooted in traditions that understand meditation as both stillness and movement, daily life—cleaning, working, learning, and caring for one another—becomes a practice of awareness in action.
                </p>
                <p>
                  Lobsang's journey was first shared in the Emmy Award-winning film Tashi and the Monk and in his TEDxKyoto talk. Loving Karma extends this story, offering a deeper glimpse into the living practice emerging from Jhamtse Gatsal, and inviting people to discover that transformation arises through attentive presence and wholehearted participation in life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#1A4065] text-center mb-16" style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif' }}>
            Team & Staff
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-[15px] overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[300px] object-cover"
                />
                <div className="p-6">
                  <h3 className="text-[#1A4065] mb-1" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                    {member.name}
                  </h3>
                  <p className="text-[#A7B867] mb-3" style={{ fontWeight: '600' }}>
                    {member.role}
                  </p>
                  <p className="text-gray-700 text-sm" style={{ lineHeight: '1.6' }}>
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="bg-[#1A4065] py-20 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center mb-16" style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif', color: 'white' }}>
            International Recognition
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-[15px] p-8 text-center hover:bg-white/20 transition-all"
              >
                <div className="text-6xl mb-4">{award.icon}</div>
                <h3 className="text-[#FFCA0A] mb-2" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                  {award.title}
                </h3>
                <p className="text-white/80 mb-4" style={{ fontSize: '1.125rem', fontWeight: '600' }}>
                  {award.year}
                </p>
                <p className="text-white/70 text-sm">
                  {award.organization}
                </p>
              </div>
            ))}
          </div>

          {/* Tax deductibility */}
          <div className="mt-12 max-w-3xl mx-auto bg-[#FFCA0A]/15 border border-[#FFCA0A]/40 rounded-[15px] p-6 text-center">
            <p className="text-[#FFCA0A] mb-2" style={{ fontSize: '0.875rem', letterSpacing: '0.1em' }}>
              GIVE WITH CONFIDENCE
            </p>
            <p className="text-white" style={{ fontSize: '1.125rem', fontWeight: '600' }}>
              Tax deductible in India, US, Switzerland and Germany
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}