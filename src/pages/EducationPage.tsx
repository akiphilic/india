import { BookOpen, Users, Award, GraduationCap, Heart, Music, Palette, Dumbbell, Globe, Sprout, Calculator, FlaskConical, Sunrise, Coffee, Utensils, Moon } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { FinalCTA } from '../components/FinalCTA';

export function EducationPage() {
  const principles = [
    {
      title: 'Community and Responsibility, Not Competition',
      description: 'At Jhamtse Gatsal, children grow together not against each other. There are no rankings; each child is supported to follow their own path. Like a family, they care for one another and share responsibility, building belonging, empathy, and respect. Our aim is not to be better than others, but to grow into more aware, responsible, and compassionate individuals.',
      icon: <Heart size={48} color="#A7B867" />,
      image: new URL('../assets/phase2/11.jpg', import.meta.url).href,
      comparison: [
        { traditional: 'Rankings and comparison', jhamtse: 'Shared growth and responsibility' },
        { traditional: 'Individual success', jhamtse: 'Care, cooperation, and belonging' },
        { traditional: 'Competition for achievement', jhamtse: 'Compassion in action' },
      ],
    },
    {
      title: 'True education = Understanding × Self-awareness',
      description: 'We believe learning is not limited to academics. We guide children to understand themselves, work with their emotions, and build inner strength through daily practices like meditation and reflection. When a child feels "valued," learning becomes meaningful and self-driven. Our mission is to prepare children for life, not just a career. As Genla Lobsang often reminds us: "It\'s OK if a child fails in Math or English, but they cannot fail in life."',
      icon: <BookOpen size={48} color="#FFCA0A" />,
      image: new URL('../assets/phase2/12.jpg', import.meta.url).href,
      comparison: [
        { traditional: 'Memorisation and fear of mistakes', jhamtse: 'Learning through reflection and experience' },
        { traditional: 'Rote learning', jhamtse: 'Understanding through real-life application' },
        { traditional: 'Test scores = worth', jhamtse: 'Confidence rooted in care and self-worth' },
      ],
    },
    {
      title: 'Learning by Living',
      description: 'Education at Jhamtse happens through real life. As active members of the Community, our children participate in diverse experiential learning programs like organic farming, vermicomposting, hydroponics, carpentry, masonry, natural cob (mud and straw) construction, waste management – all in addition to everyday academics, chores and responsibilities to create a sustainable model of living.',
      icon: <Sprout size={48} color="#A7B867" />,
      image: new URL('../assets/phase2/10.jpg', import.meta.url).href,
      comparison: [
        { traditional: 'Classroom-only learning', jhamtse: 'Practical Experiential Learning' },
        { traditional: 'Theory-focused', jhamtse: 'Learning from nature' },
        { traditional: 'Environment only in textbooks', jhamtse: 'Live with the environment' },
      ],
    },
  ];

  const schedule = [
    { time: '5:30 AM', activity: 'Wake up', icon: <Sunrise size={24} color="#FFCA0A" /> },
    { time: '6:00 AM', activity: 'Morning prayer, walk & sports', icon: <Users size={24} color="#A7B867" /> },
    { time: '6:30 AM', activity: 'Care for our surroundings (cleaning the campus and shared spaces)', icon: <Sprout size={24} color="#A7B867" /> },
    { time: '7:00 AM', activity: 'Get ready for school', icon: <Sunrise size={24} color="#1A4065" /> },
    { time: '7:20 AM', activity: 'Breakfast', icon: <Coffee size={24} color="#1A4065" /> },
    { time: '7:50 AM', activity: 'Kitchen duty (cleaning up after meals, washing dishes)', icon: <Utensils size={24} color="#A7B867" /> },
    { time: '8:15 AM', activity: 'School assembly', icon: <Users size={24} color="#1A4065" /> },
    { time: '8:30 AM', activity: 'Meditation, reflection & goal setting', icon: <Users size={24} color="#FFCA0A" /> },
    { time: '9:00 AM', activity: 'Morning Classes', icon: <BookOpen size={24} color="#1A4065" /> },
    { time: '1:00 PM', activity: 'Lunch', icon: <Utensils size={24} color="#1A4065" /> },
    { time: '2:00 PM', activity: 'Afternoon Classes (Integrated education through academics, arts, and skill-building)', icon: <BookOpen size={24} color="#A7B867" /> },
    { time: '3:30 PM', activity: 'Free time & club activities', icon: <Heart size={24} color="#FFCA0A" /> },
    { time: '5:00 PM', activity: 'Guided study (Doubt-solving and personalized learning support with teachers)', icon: <BookOpen size={24} color="#FFCA0A" /> },
    { time: '6:00 PM', activity: 'Tibetan debate class / Evening prayer', icon: <Users size={24} color="#A7B867" /> },
    { time: '7:00 PM', activity: 'Dinner time', icon: <Utensils size={24} color="#1A4065" /> },
    { time: '8:00 PM', activity: 'Homework & self-study', icon: <BookOpen size={24} color="#1A4065" /> },
    { time: '10:00 PM', activity: 'Lights out', icon: <Moon size={24} color="#1A4065" /> },
  ];

  const academicSubjects = [
    'Mathematics (CBSE-Compliant)',
    'Science (Physics, Chemistry & Biology)',
    'English (Reading & Writing)',
    'Hindi',
    'Bhoti (Tibetan language)',
    'Social Studies (History, Geography, Political science & Economics)',
    'Computer Science',
    'Traditional Dance & Music',
  ];

  const lifeSkills = [
    'Organic farming & Horticulture',
    'Meditation & Mindfulness',
    'Community Service',
    'Environmental protection activities',
    'Cooking & Nutrition',
    'Leadership Development',
  ];

  const outcomes = [
    { value: '90% or above', label: 'University Excellence Rate', description: 'Many graduates pursue higher education' },
    { value: 'Average GPA 3.8', label: 'Academic Performance', description: 'Maintaining High Scores in CBSE Board' },
    { value: '100%', label: 'Every Child Experiences Growth', description: 'All children feel valued and supported' },
  ];

  const testimonials = [
    {
      name: 'TENZIN DONDUL',
      role: 'Head teacher',
      quote: '"Jhamtse Gatsal is real. There are many good ideas in the world, but most remain just that ideas. Turning them into reality is not easy. Here, I saw that something different had happened. An idea rooted in compassion had become a living community. This is how the world should be."',
      story: 'As I raise these children, I see them carrying this message forward. They are ambassadors of peace and happiness. I want them to know that this is not just something we imagine—it exists, and it is only the beginning. Change starts here.',
      image: new URL('../assets/phase2/14.jpg', import.meta.url).href,
    },
    {
      name: 'ASHISH KUMAR',
      role: 'Elementary English teacher',
      quote: '"Jhamtse Gatsal gives me hope. This is not an easy journey, but it is one I deeply value. Every child learns differently, and here, students grow together—they support and teach one another."',
      story: 'In many places, helping someone who is struggling may be seen as slowing down. But here, it is our strength. Through sharing, knowledge becomes wisdom, and every child finds their own value. Sometimes, students ask questions I cannot answer and in those moments, I tell them, "Let\'s find out together." There is no boundary between teacher and student. We stand on the same side, learning together and because of that, there is no limit to how far they can go.',
      image: new URL('../assets/phase2/15.jpg', import.meta.url).href,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center text-white"
        style={{ minHeight: '500px' }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1633219661729-e61a0c759cd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHN0dWR5aW5nJTIwc2Nob29sfGVufDF8fHx8MTc2NjEyNTcxOXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Children studying"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1A4065]/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="text-[#FFCA0A] mb-6" style={{ fontSize: '1rem', letterSpacing: '0.1em' }}>
            Education Program | EDUCATION PROGRAM
          </p>
          <h1 className="text-white mb-8" style={{ fontSize: '3rem', fontFamily: 'Georgia, serif', lineHeight: '1.4', color: '#ffffff' }}>
            Education in Love and Understanding<br />
            Beyond Test Scores, Towards Human Growth
          </h1>
          <p className="text-white/90" style={{ fontSize: '1.25rem', lineHeight: '1.8' }}>
            Jhamtse Gatsal's education nurtures the heart, mind, and body so children grow into compassionate, capable, and service-oriented human beings.
          </p>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <h2 className="text-[#1A4065] text-center mb-6" style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif' }}>
            Our Educational Approach
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
            Jhamtse Gatsal is not just a school, but a living, learning community<br />
            where education is rooted in love, reflection, and real-life experience.
          </p>
        </div>

        <div className="space-y-0">
          {principles.map((principle, index) => (
            <div
              key={index}
              className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-[#F1EDE8]'}`}
            >
              <div className="max-w-6xl mx-auto px-6">
                <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Text Column */}
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      {principle.icon}
                      <h3 className="text-[#1A4065]" style={{ fontSize: '2rem', fontFamily: 'Georgia, serif' }}>
                        {principle.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 mb-8" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
                      {principle.description}
                    </p>

                    {/* Comparison Table */}
                    <div className="bg-white rounded-[15px] p-6 shadow-md">
                      <h4 className="text-[#1A4065] mb-4" style={{ fontSize: '1.25rem', fontWeight: '600' }}>
                        Traditional Education vs Jhamtse Gatsal
                      </h4>
                      <div className="space-y-3">
                        {principle.comparison.map((item, idx) => (
                          <div key={idx} className="grid grid-cols-2 gap-4 text-sm">
                            <div className="text-gray-600 flex items-center gap-2">
                              <span className="text-red-500">✗</span> {item.traditional}
                            </div>
                            <div className="text-[#1A4065] flex items-center gap-2" style={{ fontWeight: '600' }}>
                              <span className="text-[#A7B867]">✓</span> {item.jhamtse}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Image Column */}
                  <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    <div className="rounded-[15px] overflow-hidden shadow-lg">
                      <ImageWithFallback
                        src={principle.image}
                        alt={principle.title}
                        className="w-full h-[400px] object-cover"
                        style={{ objectPosition: 'center center' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote 1 */}
      <section className="bg-[#A7B867] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <blockquote className="text-white italic mb-4" style={{ fontSize: '1.75rem', fontFamily: 'Georgia, serif', lineHeight: '1.6' }}>
            "I hope that the Children will not go out and tackle the world, but will make it a little kinder and gentler for all."
          </blockquote>
          <p className="text-white/90" style={{ fontSize: '1.125rem' }}>
            -Lobsang Phuntsok
          </p>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-[#1A4065] text-center mb-6" style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif' }}>
            A Day in the Life at Jhamtse Gatsal
          </h2>
          <p className="text-center text-gray-700 mb-12" style={{ fontSize: '1.125rem' }}>
            Balanced Learning and Daily Rhythm
          </p>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-12 top-0 bottom-0 w-1 bg-[#A7B867]/30 hidden md:block"></div>

            <div className="space-y-6">
              {schedule.map((item, index) => (
                <div key={index} className="relative flex items-center gap-6">
                  {/* Time & Icon */}
                  <div className="flex items-center gap-4 w-40">
                    <div className="w-12 h-12 bg-white border-4 border-[#A7B867] rounded-full flex items-center justify-center z-10">
                      {item.icon}
                    </div>
                    <p className="text-[#1A4065]" style={{ fontSize: '1.25rem', fontWeight: '600' }}>
                      {item.time}
                    </p>
                  </div>

                  {/* Activity */}
                  <div className="flex-1 bg-[#F1EDE8] rounded-[15px] px-6 py-4">
                    <p className="text-[#1A4065]" style={{ fontSize: '1.125rem', fontWeight: '600' }}>
                      {item.activity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="bg-[#F1EDE8] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#1A4065] text-center mb-12" style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif' }}>
            Curriculum
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Academic */}
            <div className="bg-white rounded-[15px] p-8 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen size={36} color="#1A4065" />
                <h3 className="text-[#1A4065]" style={{ fontSize: '1.75rem', fontWeight: '600' }}>
                  Academic Subjects
                </h3>
              </div>
              <p className="text-gray-700 mb-6">
                We follow the Central Board of Secondary Education (CBSE) curriculum. We provide quality education following this curriculum.
              </p>
              <ul className="space-y-3">
                {academicSubjects.map((subject, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-[#1A4065] rounded-full"></span>
                    {subject}
                  </li>
                ))}
              </ul>
            </div>

            {/* Life Skills */}
            <div className="bg-white rounded-[15px] p-8 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <Sprout size={36} color="#A7B867" />
                <h3 className="text-[#1A4065]" style={{ fontSize: '1.75rem', fontWeight: '600' }}>
                  Life Skills
                </h3>
              </div>
              <p className="text-gray-700 mb-6">
                We provide unique programs that develop practical skills and inner growth.
              </p>
              <ul className="space-y-3">
                {lifeSkills.map((skill, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-[#A7B867] rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quote 2 */}
      <section className="bg-[#1A4065] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <blockquote className="text-white italic mb-4" style={{ fontSize: '1.75rem', fontFamily: 'Georgia, serif', lineHeight: '1.6' }}>
            "Our job is not to prepare our children for an unknown future; our job is to believe in their potential and act so they can create the future they desire."
          </blockquote>
          <p className="text-white/90" style={{ fontSize: '1.125rem' }}>
            - Lobsang Phuntsok
          </p>
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-[#1A4065] py-20 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center mb-6" style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif', color: 'white' }}>
            Educational Results
          </h2>
          <p className="text-center text-white/80 mb-16 max-w-3xl mx-auto" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
            While some growth cannot be measured by numbers,<br />
            Data demonstrating the concrete results of Jhamtse Gatsal's education
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-[15px] p-8 text-center hover:bg-white/20 transition-all"
              >
                <p className="text-[#FFCA0A] mb-3" style={{ fontSize: '3rem', fontWeight: 'bold', fontFamily: 'Georgia, serif' }}>
                  {outcome.value}
                </p>
                <h3 className="text-white mb-2" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                  {outcome.label}
                </h3>
                <p className="text-white/70">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Voices */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#1A4065] text-center mb-6" style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif' }}>
            OUR EDUCATOR'S VOICES
          </h2>
          <p className="text-center text-gray-700 mb-16" style={{ fontSize: '1.125rem' }}>
            Stories from those who teach at Jhamtse Gatsal
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#F1EDE8] rounded-[15px] overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <ImageWithFallback
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-[300px] object-cover"
                  style={{ objectPosition: 'center 15%' }}
                />
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-[#1A4065] mb-1" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                      {testimonial.name}
                    </h3>
                    <p className="text-[#A7B867]" style={{ fontWeight: '600' }}>
                      {testimonial.role}
                    </p>
                  </div>

                  <blockquote className="text-[#1A4065] mb-6 italic border-l-4 border-[#FFCA0A] pl-4" style={{ fontSize: '1.25rem', fontFamily: 'Georgia, serif' }}>
                    {testimonial.quote}
                  </blockquote>

                  <p className="text-gray-700" style={{ lineHeight: '1.8' }}>
                    {testimonial.story}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}