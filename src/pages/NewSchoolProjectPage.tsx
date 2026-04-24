import { useState } from 'react';
import { Building, BookOpen, Leaf, CheckCircle, Clock, Users, Wrench, Home, Sun, Droplet, Wind, ChevronDown, PlayCircle, Mail, Heart } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { FinalCTA } from '../components/FinalCTA';
import tezukaArchitectsImage from 'figma:asset/b30ff2083d1211b468e55485f2b11f8b073c9db8.png';
import schoolAerial1 from 'figma:asset/2222a04846f45f1806db6e231c55d63aed15ec6f.png';
import schoolAerial2 from 'figma:asset/6f1a25634fd8b3f69221a03e2c88959aa04c5e37.png';
import newSchoolConstruction from '../assets/new-school-construction.jpg';
import e01SharingClassroom from '../assets/e01-sharing-classroom.png';
import e02Sketch from '../assets/e02-sketch.jpg';
import e03TcuLab from '../assets/e03-tcu-lab.jpg';
import e04DesignProcess from '../assets/e04-design-process.jpg';
import e05CommunityWorkshop from '../assets/e05-community-workshop.jpg';
import e06Model from '../assets/e06-model.jpg';

export function NewSchoolProjectPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Progress calculation
  const targetAmount = 50000000;
  const currentAmount = 12500000;
  const progressPercent = (currentAmount / targetAmount) * 100;

  const challenges = [
    {
      icon: Building,
      iconColor: '#1A4065',
      title: 'Aging Facilities',
      description: 'Since founded in 2006. Current facilities are cramped with leaks and structural issues. We need a new building to withstand the harsh Himalayan winters.',
      stat: 'Founded 2006 - At Capacity'
    },
    {
      icon: BookOpen,
      iconColor: '#A7B867',
      title: 'Better Learning Spaces',
      description: 'The new building features dedicated labs, library, and computer rooms to provide 21st-century skill learning. Currently one room is used for multiple purposes, but dedicated spaces will be created.',
      stat: '+5 Dedicated Rooms'
    },
    {
      icon: Leaf,
      iconColor: '#FFCA0A',
      title: 'Environmentally Friendly Design',
      description: 'A green building with solar power, rainwater collection, and natural ventilation. It serves as a living educational tool teaching children sustainable living.',
      stat: '90% Power Self-Sufficiency Goal'
    },
    {
      icon: Users,
      iconColor: '#1A4065',
      title: 'Community & Global Connection',
      description: 'To create space where people from all over the world can come, learn, and experience the spirit of Jhamtse—carrying its seeds of compassion into the wider world.',
      stat: 'Global Learning Community'
    },
    {
      icon: Heart,
      iconColor: '#A7B867',
      title: 'Local Economy',
      description: 'Use of local craftsman, revive local expertise in carpentry and stone masonry. Financing will remain in the community.',
      stat: 'Empowering Local Artisans'
    }
  ];

  const projectSpecs = [
    { icon: '📐', label: 'Total area', value: '2,300m² (Twice the current size)' },
    { icon: '🏫', label: 'Number of Classrooms', value: '12 rooms (Currently 6 rooms)' },
    { icon: '👥', label: 'Capacity', value: '300 people (Currently 161 children)' },
    { icon: '📚', label: 'Education Level', value: 'Nursery to K-12 (CBSE)' },
    { icon: '🌱', label: 'Certification', value: 'Green Building Certification Expected' },
    { icon: '📅', label: 'Expected Completion', value: '2029 March' }
  ];

  const keyFeatures = [
    'Nursery',
    'Heart, Body & Mind spaces',
    'Karmayaan (meditation and debate spaces)',
    'Spacious classrooms (Abundant natural light)',
    'Science Laboratory & Computer Lab',
    'Library/Multipurpose Hall',
    'Solar Power Generation System',
    'Rainwater Collection & Purification System',
    'Connected passage with organic garden',
    'Wheelchair-accessible barrier-free design'
  ];

  const beforeProblems = [
    'Aging building',
    'Cramped classrooms (20㎡/room)',
    'Limited equipment',
    'Insufficient measures against winter cold'
  ];

  const afterImprovements = [
    'Modern and robust building',
    'Spacious classrooms (40㎡/room)',
    'State-of-the-art educational equipment',
    'Complete insulation and heating system'
  ];

  const donationTiers = [
    {
      title: 'Donor Wall Inscription',
      icon: Building,
      amount: '¥100,000+',
      benefits: [
        'Name inscribed on donor wall at school entrance',
        'Construction progress report (Monthly)',
        'Invitation to Completion Ceremony'
      ],
      badge: 'Popular',
      badgeColor: 'bg-[#FFCA0A] text-[#1A4065]',
      borderColor: 'border-[#1A4065]',
      iconColor: '#1A4065'
    },
    {
      title: 'Classroom naming rights',
      icon: Home,
      amount: '¥500,000+',
      benefits: [
        'All of the Above',
        'Naming rights for classroom (Personal Name, Company Name, or Memorial Name)',
        'Dedicated plaque installed in classroom',
        'Annual Report (Exclusive Version)'
      ],
      badge: null,
      badgeColor: '',
      borderColor: 'border-[#A7B867]',
      iconColor: '#A7B867'
    },
    {
      title: 'Facility Naming Rights',
      icon: BookOpen,
      amount: '¥2,000,000+',
      benefits: [
        'All of the Above',
        'Naming rights for dedicated facilities such as library and laboratory',
        'Large Plaque Installation',
        'Priority participation in on-site visit program',
        'Introduction via Documentary Video'
      ],
      badge: 'Special',
      badgeColor: 'bg-[#1A4065] text-white',
      borderColor: 'border-[#FFCA0A]',
      iconColor: '#FFCA0A'
    },
    {
      title: 'Building naming rights',
      icon: Users,
      amount: '¥10,000,000+',
      benefits: [
        'Considering naming rights for entire building',
        'All Above Benefits',
        'CSR/Committee Participation',
        'Custom Cognitve Program'
      ],
      badge: 'Limited to 1 groups',
      badgeColor: 'bg-[#FFCA0A] text-[#1A4065]',
      borderColor: 'border-[#FFCA0A]',
      iconColor: '#FFCA0A'
    }
  ];

  const timeline = [
    {
      phase: 'Design complete',
      date: '2027 March',
      status: 'Completed',
      statusColor: 'text-[#A7B867]',
      icon: CheckCircle,
      iconColor: '#A7B867',
      completed: true
    },
    {
      phase: 'Fundraising',
      date: '2026 March - 2028 March',
      status: 'In Progress - 25% Achieved',
      statusColor: 'text-[#FFCA0A]',
      icon: Clock,
      iconColor: '#FFCA0A',
      completed: false
    },
    {
      phase: 'Construction Start',
      date: '2026 October',
      status: 'Schedule',
      statusColor: 'text-gray-500',
      icon: Wrench,
      iconColor: '#999999',
      completed: false
    },
    {
      phase: 'Completion & Transfer',
      date: '2030 March',
      status: 'Schedule',
      statusColor: 'text-gray-500',
      icon: Building,
      iconColor: '#999999',
      completed: false
    }
  ];

  const testimonials = [
    {
      name: 'Sonam (15 years old)',
      image: 'https://images.unsplash.com/photo-1514355315815-2b64b0216b14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHN0dWRlbnQlMjBnaXJsJTIwc2Nob29sfGVufDF8fHx8MTc2NjEyOTcyMXww&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'I want to be a scientist, but I can\'t do experiments with current equipment. When a new lab is ready, I want to learn a lot.'
    },
    {
      name: 'Tenzin (17 years old)',
      image: 'https://images.unsplash.com/photo-1603726574690-cc3138bfec8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHN0dWRlbnQlMjBib3klMjBzdHVkeWluZ3xlbnwxfHx8fDE3NjYxMjk3MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'In winter, the classroom is cold and it\'s hard to concentrate on studying. I want to learn more in the new building.'
    }
  ];

  const faqs = [
    {
      question: 'Why Do We Need a New Building Now?',
      answer: 'The current building has been aging since its establishment in 2006, with leaks and structural problems occurring. The number of students has increased from 8 at the beginning to 161 now, and capacity has reached its limit. A new building is needed to provide children with a better learning environment and accept more children in need of support.'
    },
    {
      question: 'How are donations used?',
      answer: 'Donations are allocated as follows: Construction costs 60% (¥30,000,000), Educational facilities and furniture 25% (¥12,500,000), Solar power generation and environmental systems 15% (¥7,500,000). All expenses are reported transparently and undergo strict accounting audits as a certified NPO.'
    },
    {
      question: 'Can children continue learning during construction?',
      answer: 'Yes, rest assured. The plan is to build the new building on adjacent land while using the current building. Children\'s learning will not be interrupted. After completion, we will move to the new building and the old building will be renovated into dormitories.'
    },
    {
      question: 'Can We Become a Corporate Sponsor?',
      answer: 'Yes, we have special sponsorship plans for companies. As part of CSR activities, we can propose custom programs such as naming rights, employee volunteer programs, and annual report meetings. Please contact us for details.'
    },
    {
      question: 'How can I check progress?',
      answer: 'We will send monthly construction progress reports to donors via email. We also plan to publish real-time photos and videos on a dedicated web page and conduct virtual tours. Donors who contribute a certain amount or more will be invited to on-site visit programs.'
    }
  ];

  const impactStats = [
    { amount: '¥100,000', impact: 'One window for a classroom' },
    { amount: '¥500,000', impact: 'Desks and chairs for one classroom' },
    { amount: '¥2,000,000', impact: 'Solar Panel System' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={newSchoolConstruction}
            alt="New School Construction Aerial View"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A4065]/40 via-[#1A4065]/50 to-[#1A4065]/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="text-[#FFCA0A] mb-6" style={{ fontSize: '1.125rem', letterSpacing: '0.1em', fontWeight: '600' }}>
            New School Construction Project | ŚŪNYATĀ LEARNING CENTRE CONSTRUCTION
          </p>
          <h1 className="text-white mb-6" style={{ fontSize: '3rem', fontFamily: 'Georgia, serif', lineHeight: '1.3', textShadow: '0 2px 8px rgba(0,0,0,0.3)', color: 'white' }}>
            Shaping Children's Future,<br />A New Place to Learn
          </h1>
          <p className="text-[#F1EDE8] mb-8" style={{ fontSize: '1.25rem', lineHeight: '1.6' }}>
            In 2025, Jhamtse Gatsal takes a new step forward
          </p>

          {/* Campaign Progress Badge */}
          <div className="bg-white rounded-[30px] px-8 py-4 inline-block mb-8 shadow-lg">
            <p className="text-[#1A4065] mb-3" style={{ fontSize: '1rem', fontWeight: 'bold' }}>
              Goal: ¥50,000,000 | Achievement: ¥12,500,000 ({progressPercent.toFixed(0)}%)
            </p>
            {/* Progress Bar */}
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#FFCA0A] transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-[#FFCA0A] text-[#1A4065] px-8 py-4 rounded-[15px] hover:bg-[#E5B609] transition-all shadow-lg hover:shadow-xl" style={{ fontSize: '1.125rem', fontWeight: 'bold' }}>
              Support Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-[15px] hover:bg-white/10 transition-all flex items-center justify-center gap-2" style={{ fontSize: '1.125rem' }}>
              <PlayCircle size={24} />
              Watch Project Video
            </button>
          </div>
        </div>
      </section>

      {/* Why We Need This */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#1A4065] text-center mb-4" style={{ fontSize: '2.25rem', fontFamily: 'Georgia, serif' }}>
            Why a New Building is Needed
          </h2>
          <p className="text-center text-gray-600 mb-16" style={{ fontSize: '1.125rem' }}>
            161 children need better learning environments
          </p>

          <div className="space-y-8">
            {/* Top Row - 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {challenges.slice(0, 2).map((challenge, index) => {
                const Icon = challenge.icon;
                return (
                  <div key={index} className="bg-[#F1EDE8] rounded-[15px] p-8 text-center hover:shadow-lg transition-shadow">
                    <Icon size={64} color={challenge.iconColor} strokeWidth={1.5} className="mx-auto mb-6" />
                    <h3 className="text-[#1A4065] mb-4" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                      {challenge.title}
                    </h3>
                    <p className="text-gray-700 mb-4" style={{ lineHeight: '1.8' }}>
                      {challenge.description}
                    </p>
                    <p className="text-[#A7B867]" style={{ fontSize: '0.875rem', fontWeight: '600' }}>
                      {challenge.stat}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bottom Row - 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {challenges.slice(2, 5).map((challenge, index) => {
                const Icon = challenge.icon;
                return (
                  <div key={index + 2} className="bg-[#F1EDE8] rounded-[15px] p-8 text-center hover:shadow-lg transition-shadow">
                    <Icon size={64} color={challenge.iconColor} strokeWidth={1.5} className="mx-auto mb-6" />
                    <h3 className="text-[#1A4065] mb-4" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                      {challenge.title}
                    </h3>
                    <p className="text-gray-700 mb-4" style={{ lineHeight: '1.8' }}>
                      {challenge.description}
                    </p>
                    <p className="text-[#A7B867]" style={{ fontSize: '0.875rem', fontWeight: '600' }}>
                      {challenge.stat}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Project Vision & Architect */}
      <section className="bg-[#F1EDE8] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[60%_40%] gap-12 items-start">
            {/* Left Side - Project Details */}
            <div>
              <h2 className="text-[#1A4065] mb-8" style={{ fontSize: '2rem', fontFamily: 'Georgia, serif' }}>
                A Future Learning Space Designed by World-Class Architects
              </h2>

              {/* Project Specs */}
              <div className="bg-white rounded-[15px] p-6 mb-8 shadow-md">
                <div className="space-y-4">
                  {projectSpecs.map((spec, index) => (
                    <div key={index} className="flex items-center gap-4 pb-4 border-b border-gray-200 last:border-0">
                      <span style={{ fontSize: '2rem' }}>{spec.icon}</span>
                      <div className="flex-1">
                        <p className="text-gray-600 text-sm">{spec.label}</p>
                        <p className="text-[#1A4065]" style={{ fontWeight: '600' }}>{spec.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <h3 className="text-[#1A4065] mb-4" style={{ fontSize: '1.25rem', fontWeight: '600' }}>
                Key Features
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle size={20} color="#A7B867" className="flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Architect Profile */}
            <div className="bg-white rounded-[15px] p-8 shadow-md">
              <img
                src={tezukaArchitectsImage}
                alt="Tezuka Architects"
                className="w-full h-[300px] object-cover object-center rounded-[15px] mb-6 shadow-sm"
                style={{ objectPosition: 'center 30%' }}
              />
              <h4 className="text-[#1A4065] mb-2" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                Tezuka Architects
              </h4>
              <p className="text-[#A7B867] mb-4" style={{ fontSize: '1rem' }}>
                Takaharu Tezuka & Yui Tezuka
              </p>
              <div className="space-y-2 mb-6">
                <div className="bg-white border border-[#A7B867] rounded-[15px] px-4 py-2 inline-block">
                  <p className="text-[#1A4065] text-sm">UNESCO Global Award for Sustainable Architecture 2017</p>
                </div>
                <div className="bg-white border border-[#A7B867] rounded-[15px] px-4 py-2 inline-block">
                  <p className="text-[#1A4065] text-sm">Moriyama RAIC International Prize 2017</p>
                </div>
                <div className="bg-white border border-[#A7B867] rounded-[15px] px-4 py-2 inline-block">
                  <p className="text-[#1A4065] text-sm">OECD/CELE 4th Compendium of Exemplary Educational Facilities</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4" style={{ lineHeight: '1.8', fontSize: '0.9rem' }}>
                Takaharu and Yui Tezuka have designed numerous spaces for children, including "Fuji Kindergarten," which was selected by the OECD (Organization for Economic Cooperation and Development) and UNESCO as one of the world's most outstanding schools. In recent years, they won the World Environmental Architecture Award (Global Award for Sustainable Architecture) from UNESCO. The TED talk conducted by Takaharu Tezuka ranked 7th globally in views in 2015.
              </p>
              <p className="text-gray-700 mb-6" style={{ lineHeight: '1.8', fontSize: '0.9rem' }}>
                Received awards including Japan Architecture Institute Prize, Japan Architects Association Award, Good Design Gold Award, and Child Environment Society Award. Currently, while focusing on architectural design activities, they conduct lectures on children's environments both domestically and internationally at the request of OECD.
              </p>
              <blockquote className="border-l-4 border-[#A7B867] pl-4 italic text-gray-700">
                "Our mission is to create a space where children learn, play, and grow with nature. We hope that this building becomes a place that unlocks the infinite potential of children."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Design Showcase */}
      <section className="bg-[#F1EDE8] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[#1A4065] text-center mb-4" style={{ fontSize: '2.25rem', fontFamily: 'Georgia, serif' }}>
            Appeal of Architectural Design
          </h2>
          <p className="text-center text-gray-600 mb-16" style={{ fontSize: '1.125rem' }}>
            Organic design harmonizing with nature
          </p>

          {/* Main Featured Image */}
          <div className="mb-12">
            <img
              src={newSchoolConstruction}
              alt="New school construction aerial view"
              className="w-full h-[500px] object-cover rounded-[15px] shadow-2xl"
            />
          </div>

          {/* Design Concept Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-[15px] p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#1A4065] flex items-center justify-center">
                  <Sun size={24} color="white" />
                </div>
                <h3 className="text-[#1A4065]" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                  Courtyard-Centric Layout
                </h3>
              </div>
              <p className="text-gray-700" style={{ lineHeight: '1.8' }}>
                This building represents "Śūnyatā", one of Buddhism's most important philosophical concepts. Amongst other things, it is meant to represent hollowness or emptiness. It may also mean zero, the root of all mathematics. Zero can become anything. In other words, it's about sharing.
              </p>
            </div>

            <div className="bg-white rounded-[15px] p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#A7B867] flex items-center justify-center">
                  <Leaf size={24} color="white" />
                </div>
                <h3 className="text-[#1A4065]" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                  Organic Form
                </h3>
              </div>
              <p className="text-gray-700" style={{ lineHeight: '1.8' }}>
                The pedagogy is based on three stages of learning: seeding, reflecting, and sharing. We have studied and tested a completely new school planning based on these three stages. It is not going to be squared, as education doesn't warrant square shapes. Rather, the space will be organic, composed of many bubbles, like a life form.
              </p>
            </div>

            <div className="bg-white rounded-[15px] p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#FFCA0A] flex items-center justify-center">
                  <Wind size={24} color="#1A4065" />
                </div>
                <h3 className="text-[#1A4065]" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                  Natural Lighting & Ventilation
                </h3>
              </div>
              <p className="text-gray-700" style={{ lineHeight: '1.8' }}>
                This new learning space will be built using local materials, such as wood and stone. At the same time, cutting-edge structural analysis ensures the safety of the children. The construction will represent and empower many facets of the local community, such as its economy, cultural pride, and reforestation.
              </p>
            </div>
          </div>

          {/* Design Process Gallery */}
          <div className="mb-12">
            <h3 className="text-[#1A4065] mb-8 text-center" style={{ fontSize: '1.75rem', fontFamily: 'Georgia, serif' }}>
              Design & Development Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <img
                src={e01SharingClassroom}
                alt="Sharing Classroom"
                className="w-full h-[280px] object-cover rounded-[15px] shadow-lg hover:shadow-xl transition-shadow"
              />
              <img
                src={e02Sketch}
                alt="Design Sketch"
                className="w-full h-[280px] object-cover rounded-[15px] shadow-lg hover:shadow-xl transition-shadow"
              />
              <img
                src={e03TcuLab}
                alt="TCU Lab"
                className="w-full h-[280px] object-cover rounded-[15px] shadow-lg hover:shadow-xl transition-shadow"
              />
              <img
                src={e04DesignProcess}
                alt="Design Process"
                className="w-full h-[280px] object-cover rounded-[15px] shadow-lg hover:shadow-xl transition-shadow"
              />
              <img
                src={e05CommunityWorkshop}
                alt="Community Workshop"
                className="w-full h-[280px] object-cover rounded-[15px] shadow-lg hover:shadow-xl transition-shadow"
              />
              <img
                src={e06Model}
                alt="Architectural Model"
                className="w-full h-[280px] object-cover rounded-[15px] shadow-lg hover:shadow-xl transition-shadow"
              />
            </div>
          </div>

          {/* Sustainable Features */}
          <div className="bg-white rounded-[15px] p-8 shadow-md">
            <h3 className="text-[#1A4065] mb-6 text-center" style={{ fontSize: '1.5rem', fontFamily: 'Georgia, serif' }}>
              Features of Sustainable Architecture
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <Sun size={32} color="#FFCA0A" className="flex-shrink-0" />
                <div>
                  <h4 className="text-[#1A4065] mb-2" style={{ fontWeight: '600' }}>
                    Solar Power Generation System
                  </h4>
                  <p className="text-gray-700 text-sm" style={{ lineHeight: '1.7' }}>
                    Solar panels installed on entire roof. 90% of building's electricity self-sufficient. Children can learn about renewable energy up close.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Droplet size={32} color="#A7B867" className="flex-shrink-0" />
                <div>
                  <h4 className="text-[#1A4065] mb-2" style={{ fontWeight: '600' }}>
                    Rainwater Collection System
                  </h4>
                  <p className="text-gray-700 text-sm" style={{ lineHeight: '1.7' }}>
                    Include drinking water (after filtration). We collect and purify abundant rainwater during the rainy season for use in toilets and gardens, teaching the importance of water resources in practice.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Leaf size={32} color="#A7B867" className="flex-shrink-0" />
                <div>
                  <h4 className="text-[#1A4065] mb-2" style={{ fontWeight: '600' }}>
                    Locally Sourced Natural Materials
                  </h4>
                  <p className="text-gray-700 text-sm" style={{ lineHeight: '1.7' }}>
                    The new school building design manifests the core values of Educating Heart, Mind, and Body while also representing the beautiful local culture and will bring pride to the community. Rekindling ancient techniques and appreciation of timber construction. We are also trying to use smaller timber components, while inviting the children to plant new trees on the mountain.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Wind size={32} color="#1A4065" className="flex-shrink-0" />
                <div>
                  <h4 className="text-[#1A4065] mb-2" style={{ fontWeight: '600' }}>
                    Passive Design
                  </h4>
                  <p className="text-gray-700 text-sm" style={{ lineHeight: '1.7' }}>
                    Design using natural wind and light minimizes HVAC energy. Comfortable indoors year-round.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Naming & Recognition Opportunities */}
      <section className="bg-[#F1EDE8] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#1A4065] text-center mb-4" style={{ fontSize: '2.25rem', fontFamily: 'Georgia, serif' }}>
            Your Name Will Be Inscribed in the School Building
          </h2>
          <p className="text-center text-gray-600 mb-12" style={{ fontSize: '1.125rem' }}>
            Donors & Express gratitude
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {donationTiers.map((tier, index) => {
              const Icon = tier.icon;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-[15px] p-8 border-2 ${tier.borderColor} hover:scale-105 transition-transform shadow-md hover:shadow-xl relative`}
                >
                  {tier.badge && (
                    <div className={`absolute top-4 right-4 ${tier.badgeColor} px-3 py-1 rounded-full text-sm`} style={{ fontWeight: 'bold' }}>
                      {tier.badge}
                    </div>
                  )}
                  <Icon size={48} color={tier.iconColor} strokeWidth={1.5} className="mb-4" />
                  <h3 className="text-[#1A4065] mb-2" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                    {tier.title}
                  </h3>
                  <p className="text-[#A7B867] mb-6" style={{ fontSize: '1.25rem', fontWeight: '600' }}>
                    {tier.amount}
                  </p>
                  <div className="space-y-3 mb-6">
                    {tier.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle size={18} color="#A7B867" className="flex-shrink-0 mt-1" />
                        <p className="text-gray-700 text-sm">{benefit}</p>
                      </div>
                    ))}
                  </div>
                  <button className="w-full bg-[#1A4065] text-white py-3 rounded-[15px] hover:bg-[#0F2940] transition-all" style={{ fontWeight: '600' }}>
                    {index === 0 ? 'Apply' : index === 1 ? 'See details' : index === 2 ? 'Consult' : 'Contact'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Construction Timeline */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#1A4065] text-center mb-16" style={{ fontSize: '2rem', fontFamily: 'Georgia, serif' }}>
            Construction Schedule
          </h2>

          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            {/* Timeline Line */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-[#1A4065]" style={{ width: '100%' }}></div>

            <div className="grid grid-cols-4 gap-4">
              {timeline.map((phase, index) => {
                const Icon = phase.icon;
                return (
                  <div key={index} className="text-center relative">
                    {/* Icon Circle */}
                    <div className={`w-16 h-16 rounded-full ${phase.completed ? 'bg-[#A7B867]' : 'bg-gray-300'} mx-auto mb-4 flex items-center justify-center shadow-md relative z-10`}>
                      <Icon size={32} color="white" />
                    </div>
                    <h3 className="text-[#1A4065] mb-2" style={{ fontSize: '1.125rem', fontWeight: '600' }}>
                      {phase.phase}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">{phase.date}</p>
                    <p className={`${phase.statusColor} text-sm`} style={{ fontWeight: '600' }}>
                      {phase.status}
                    </p>
                    {index === 1 && (
                      <div className="mt-4">
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-[#FFCA0A]" style={{ width: '25%' }}></div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-6">
            {timeline.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <div key={index} className="flex gap-4 items-start">
                  <div className={`w-12 h-12 rounded-full ${phase.completed ? 'bg-[#A7B867]' : 'bg-gray-300'} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={24} color="white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#1A4065] mb-1" style={{ fontWeight: '600' }}>
                      {phase.phase}
                    </h3>
                    <p className="text-gray-600 text-sm mb-1">{phase.date}</p>
                    <p className={`${phase.statusColor} text-sm`} style={{ fontWeight: '600' }}>
                      {phase.status}
                    </p>
                    {index === 1 && (
                      <div className="mt-3">
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-[#FFCA0A]" style={{ width: '25%' }}></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Stories Preview */}
      <section className="bg-[#F1EDE8] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#1A4065] text-center mb-12" style={{ fontSize: '1.75rem', fontFamily: 'Georgia, serif' }}>
            How the New Building Changes Children's Future
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-[15px] p-8 shadow-md flex gap-6">
                <ImageWithFallback
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover flex-shrink-0 shadow-sm"
                />
                <div className="flex-1">
                  <h4 className="text-[#1A4065] mb-3" style={{ fontSize: '1.125rem', fontWeight: '600' }}>
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-700 italic" style={{ lineHeight: '1.8' }}>
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-[#1A4065] text-center mb-12" style={{ fontSize: '1.75rem', fontFamily: 'Georgia, serif' }}>
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-[15px] overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F1EDE8] transition-colors"
                >
                  <h3 className="text-[#1A4065] pr-4" style={{ fontSize: '1.125rem', fontWeight: '600' }}>
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={24}
                    color="#1A4065"
                    className={`flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700" style={{ lineHeight: '1.8' }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#1A4065] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white mb-12" style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif', lineHeight: '1.4', color: 'white' }}>
            Your donation creates<br />a school building that illuminates the future of 161 people
          </h2>

          {/* Impact Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {impactStats.map((stat, index) => (
              <div key={index} className="bg-white/10 rounded-[15px] p-6">
                <p className="text-[#FFCA0A] mb-2" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                  {stat.amount}
                </p>
                <p className="text-white">{stat.impact}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
            <button className="bg-[#FFCA0A] text-[#1A4065] px-10 py-5 rounded-[15px] hover:bg-[#E5B609] transition-all shadow-lg hover:shadow-xl" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
              Support the Project Now
            </button>
            <button className="border-2 border-white text-white px-10 py-5 rounded-[15px] hover:bg-white/10 transition-all flex items-center justify-center gap-2" style={{ fontSize: '1.25rem' }}>
              <Mail size={24} />
              Contact via Email
            </button>
          </div>

          <p className="text-white/70 text-sm">
            * Tax-deductible - Certified NPO
          </p>
        </div>
      </section>
    </div>
  );
}