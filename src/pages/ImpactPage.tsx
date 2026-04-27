import { TrendingUp, Users, GraduationCap, Heart, DollarSign, Award, Globe, Target, CheckCircle, ArrowUp, Download, Briefcase, Sprout } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { FinalCTA } from '../components/FinalCTA';
import tenzinDrolmaImg from '../assets/phase1/4-tenzin-drolma.jpeg';
import rinchenImg from '../assets/phase1/5-rinchen.jpeg';
import rinchenBeforeImg from '../assets/phase2/5-rinchen-before.png';
import dawaImg from '../assets/phase1/6-dawa.jpeg';
import dawaBeforeImg from '../assets/phase2/6-dawa-before.jpeg';
import lobsangImg from '../assets/phase1/7-lobsang.jpeg';
import lobsangBeforeImg from '../assets/phase2/7-lobsang-before.jpeg';

export function ImpactPage() {
  // Data for Year-over-Year Growth (number of students newly enrolled per year)
  const yearlyData = [
    { year: '2006', students: 34 },
    { year: '2007', students: 12 },
    { year: '2009', students: 27 },
    { year: '2010', students: 3 },
    { year: '2011', students: 1 },
    { year: '2012', students: 1 },
    { year: '2013', students: 7 },
    { year: '2014', students: 3 },
    { year: '2015', students: 2 },
    { year: '2018', students: 5 },
    { year: '2019', students: 16 },
    { year: '2021', students: 22 },
    { year: '2022', students: 22 },
    { year: '2023', students: 10 },
    { year: '2024', students: 34 },
    { year: '2025', students: 17 },
  ];

  // Data for Graduate Outcomes
  const outcomeData = [
    { name: 'University Enrollment', value: 72, color: '#1A4065' },
    { name: 'Employment', value: 21, color: '#A7B867' },
    { name: 'Gap Year', value: 7, color: '#FFCA0A' },
  ];

  const transformationStories = [
    {
      name: 'Tenzin Drolma',
      story: "Tenzin Drolma was very young when she lost her mother. Raised by her father, a farmer, she spent much of her childhood helping in the fields. When we first met her, she was barefoot, covered in dirt from farm work, and spoke very little. When Tenzin joined the Jhamtse Gatsal community, she was welcomed into a place where she could learn, grow, and feel supported. Here, she continued her education and slowly began to discover her confidence and potential.",
      currentRole: 'Today, Tenzin Drolma is a doctor of Tibetan medicine. She dreams of helping as many people as she can through her healing practice and has already spent time volunteering to care for elderly people. With the support of the community, she became a first-generation learner and the first person from her village to pursue this field.',
      image: tenzinDrolmaImg,
      timeline: [
        { year: 'Childhood', event: 'Lost her mother; raised by her farmer father' },
        { year: 'Joined', event: 'Welcomed into the Jhamtse Gatsal community' },
        { year: 'Studied', event: 'First in her village to study Tibetan Medicine' },
        { year: 'Today', event: 'Doctor of Tibetan Medicine, volunteering with the elderly' },
      ],
      quote: '"I came from a place of uncertainty, but Jhamtse Gatsal helped me find strength, direction, and hope."',
    },
    {
      name: 'Dawa',
      story: 'Dawa grew up in a home shadowed by addiction, instability, and loss. With both parents struggling with alcoholism and her father gone too soon, her childhood was marked by hardship and uncertainty. Yet, she refused to let her circumstances define her. After graduating from Jhamtse Gatsal Children\'s Community, Dawa earned a scholarship to study History in Bangalore.',
      currentRole: 'Now in her third year of college, she is growing into a confident, thoughtful young woman. Though her future path is still unfolding, her purpose is clear—to rise above her past and use her education to create meaningful change in the world.',
      image: dawaImg,
      beforeImage: dawaBeforeImg,
      timeline: [
        { year: '2008', event: 'Admitted to Jhamtse Gatsal' },
        { year: '2022', event: 'High School Graduate' },
        { year: '2026', event: 'About to graduate from Azim Premji University, Bangalore' },
      ],
      quote: '"I came from a place of uncertainty, but Jhamtse Gatsal helped me find strength, direction, and hope."',
    },
    {
      name: 'Lobsang',
      story: 'Lobsang was raised by her single mother, who struggled through short-term jobs to survive. With no father present and elderly grandparents unable to help, her mother made the heartbreaking yet brave choice to send her to Jhamtse Gatsal Children\'s Community, hoping for a better future. It changed everything—Lobsang became the first in her family to receive an education.',
      currentRole: 'Today, she studies Hospitality Management and Catering in South India, passionately creating new dishes and dreaming of her own restaurant. From uncertainty to ambition, her journey shows how love, sacrifice, and education can transform a life and turn fragile beginnings into powerful new possibilities.',
      image: lobsangImg,
      imageClassName: 'object-top',
      beforeImage: lobsangBeforeImg,
      timeline: [
        { year: '2010', event: 'Admitted to Jhamtse Gatsal' },
        { year: '2023', event: 'High School Graduate' },
        { year: '2024', event: 'Enrolled in college (Hospitality Management & Catering)' },
      ],
      quote: '"I am one of the few from my village who has come this far and I carry that with gratitude. One day, I want to give back and create opportunities for others like me."',
    },
  ];

  const financialData = {
    revenue: [
      { source: 'Individual Donations', amount: '45%', value: '¥22,500,000' },
      { source: 'Corporate & Foundation', amount: '30%', value: '¥15,000,000' },
      { source: 'Grants & Subsidies', amount: '20%', value: '¥10,000,000' },
      { source: 'Event Revenue', amount: '5%', value: '¥2,500,000' },
    ],
    expenses: [
      { category: 'Education Programs', amount: '35%', value: '¥17,500,000' },
      { category: 'Meals & Nutrition', amount: '35%', value: '¥17,500,000' },
      { category: 'Housing & Facilities', amount: '20%', value: '¥10,000,000' },
      { category: 'Healthcare Management', amount: '10%', value: '¥5,000,000' },
    ],
  };

  const recognitions = [
    { title: 'Certified NPONPO', year: 'Certified 2018', icon: '🏛️' },
    { title: 'Emmy Award', year: '2015 Documentary', icon: '🏆' },
    { title: 'UN Child Support Award', year: '2018', icon: '🌟' },
    { title: 'Good Governance Cert', year: 'Obtained 2022', icon: '✓' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#F1EDE8] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-[#A7B867] mb-6" style={{ fontSize: '1rem', letterSpacing: '0.1em' }}>
            IMPACT & RESULTS
          </p>
          <h1 className="text-[#1A4065] mb-12" style={{ fontSize: '3rem', fontFamily: 'Georgia, serif', lineHeight: '1.3' }}>
            Seeing through numbers and stories,<br />Jhamtse Gatsal's Achievements
          </h1>

          {/* Big Numbers */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-[15px] p-8 shadow-md">
              <p className="text-[#A7B867] mb-2" style={{ fontSize: '3.5rem', fontFamily: 'Georgia, serif', fontWeight: 'bold' }}>
                150
              </p>
              <p className="text-[#1A4065]" style={{ fontSize: '1.25rem', fontWeight: '600' }}>
                Currently Supported
              </p>
              <p className="text-gray-600 mt-2">
                Children growing up at Jhamtse today
              </p>
            </div>

            <div className="bg-white rounded-[15px] p-8 shadow-md">
              <p className="text-[#FFCA0A] mb-2" style={{ fontSize: '3.5rem', fontFamily: 'Georgia, serif', fontWeight: 'bold' }}>
                216
              </p>
              <p className="text-[#1A4065]" style={{ fontSize: '1.25rem', fontWeight: '600' }}>
                Total Enrolled
              </p>
              <p className="text-gray-600 mt-2">
                Children welcomed since 2006
              </p>
            </div>

            <div className="bg-white rounded-[15px] p-8 shadow-md">
              <p className="text-[#1A4065] mb-2" style={{ fontSize: '3.5rem', fontFamily: 'Georgia, serif', fontWeight: 'bold' }}>
                65
              </p>
              <p className="text-[#1A4065]" style={{ fontSize: '1.25rem', fontWeight: '600' }}>
                Total Graduates
              </p>
              <p className="text-gray-600 mt-2">
                12 working · 25 in college · 3 in internship
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Visualizations */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#1A4065] text-center mb-16" style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif' }}>
            Growth Through Data
          </h2>

          <div className="space-y-16">
            {/* Yearly Growth Bar Chart */}
            <div className="bg-[#F1EDE8] rounded-[15px] p-8">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp size={32} color="#A7B867" />
                <h3 className="text-[#1A4065]" style={{ fontSize: '1.75rem', fontWeight: '600' }}>
                  Year-over-year Trend: Number of Students Enrolled
                </h3>
              </div>
              <p className="text-gray-700 mb-8">
                New children welcomed into Jhamtse Gatsal each year — 216 enrolled in total since 2006
              </p>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={yearlyData}>
                  <XAxis dataKey="year" stroke="#666666" />
                  <YAxis stroke="#666666" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #A7B867',
                      borderRadius: '8px' 
                    }}
                  />
                  <Bar dataKey="students" fill="#A7B867" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Graduate Outcomes Pie Chart */}
            <div className="bg-[#F1EDE8] rounded-[15px] p-8">
              <div className="flex items-center gap-3 mb-6">
                <PieChart size={32} color="#1A4065" />
                <h3 className="text-[#1A4065]" style={{ fontSize: '1.75rem', fontWeight: '600' }}>
                  Graduate Career Paths
                </h3>
              </div>
              <p className="text-gray-700 mb-8">
                Where graduates go after Jhamtse Gatsal — university, employment, and gap years
              </p>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <ResponsiveContainer width="100%" height={350}>
                  <PieChart>
                    <Pie
                      data={outcomeData}
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                      label={(entry) => `${entry.name} ${entry.value}%`}
                    >
                      {outcomeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="space-y-4">
                  {outcomeData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between bg-white/60 rounded-[10px] px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded" style={{ backgroundColor: item.color }}></div>
                        <span className="text-gray-700" style={{ fontSize: '1rem', fontWeight: '500' }}>{item.name}</span>
                      </div>
                      <span className="text-[#1A4065]" style={{ fontSize: '1.25rem', fontWeight: '700' }}>{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Graduate Story - Rinchen */}
      <section className="bg-[#F1EDE8] py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Two-column layout */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            {/* Left Column - Before / After Photos */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <div className="absolute top-3 left-3 z-10 bg-[#A7B867]/90 text-white px-3 py-1 rounded-full shadow-md" style={{ fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.05em' }}>
                  BEFORE
                </div>
                <ImageWithFallback
                  src={rinchenBeforeImg}
                  alt="Rinchen Tsering before"
                  className="w-full h-[300px] md:h-[500px] object-cover rounded-[15px] shadow-lg"
                />
              </div>
              <div className="relative">
                <div className="absolute top-3 left-3 z-10 bg-[#1A4065]/90 text-white px-3 py-1 rounded-full shadow-md" style={{ fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.05em' }}>
                  AFTER
                </div>
                <ImageWithFallback
                  src={rinchenImg}
                  alt="Rinchen Tsering today"
                  className="w-full h-[300px] md:h-[500px] object-cover rounded-[15px] shadow-lg"
                />
                {/* Changemaker Badge */}
                <div className="absolute top-3 right-3 bg-[#FFCA0A] text-[#1A4065] px-3 py-1 rounded-[20px] shadow-md" style={{ fontWeight: 'bold', fontSize: '0.75rem' }}>
                  Changemaker
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="max-w-[550px]">
              {/* Header */}
              <h3 className="text-[#1A4065] mb-2" style={{ fontSize: '1.75rem', fontFamily: 'Georgia, serif', fontWeight: 'bold' }}>
                Rinchen Tsering
              </h3>
              <p className="text-[#A7B867] mb-4" style={{ fontSize: '1rem' }}>
                Jhamtse Gatsal Graduate
              </p>
              <div className="inline-block bg-white border border-[#A7B867] px-4 py-2 rounded-[20px] mb-6">
                <p className="text-[#1A4065]" style={{ fontSize: '0.875rem', fontWeight: '500' }}>
                  Current: Admin and Operations Manager, Jhamtse Gatsal
                </p>
              </div>

              {/* Story */}
              <div className="space-y-4 mb-6 text-gray-700" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
                <p>
                  When Rinchen first arrived at Jhamtse Gatsal, he barely spoke. Fear lived in his eyes. His parents had divorced, his father had walked away, and his stepfather offered no care. His mother, a struggling farmer, fought every day to feed her children. When cancer took her life, Rinchen's world fell apart.
                </p>
                <p>
                  But love found him here. With the steady support of the Jhamtse Gatsal family and sponsors, Rinchen slowly found his strength. He went on to earn a degree in Travel and Tourism Management—the first in his family to receive formal education. After three years working in Delhi, he chose to return home.
                </p>
                <p>
                  In 2025, Rinchen came back as Admin and Operations Manager. Today, he leads with quiet compassion, proving that healing, hope, and a second chance can truly change a life.
                </p>
              </div>

              {/* Impact Stats */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <GraduationCap size={40} color="#A7B867" strokeWidth={1.5} />
                  <p className="text-[#1A4065]" style={{ fontSize: '0.9375rem', fontWeight: '500' }}>
                    Degree in Travel & Tourism Management
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase size={40} color="#1A4065" strokeWidth={1.5} />
                  <p className="text-[#1A4065]" style={{ fontSize: '0.9375rem', fontWeight: '500' }}>
                    Three years of professional experience in Delhi
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Heart size={40} color="#FFCA0A" strokeWidth={1.5} />
                  <p className="text-[#1A4065]" style={{ fontSize: '0.9375rem', fontWeight: '500' }}>
                    Returned home in 2025 to lead operations
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Message */}
          <div className="text-center max-w-[900px] mx-auto mt-12">
            <p className="text-[#1A4065]" style={{ fontSize: '1.125rem', lineHeight: '1.6' }}>
              It takes years of love and support to nurture changemakers like Rinchen who return to lift up the next generation.
            </p>
          </div>
        </div>
      </section>

      {/* Transformation Stories */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <h2 className="text-[#1A4065] text-center mb-6" style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif' }}>
            Stories of Transformation
          </h2>
          <p className="text-center text-gray-700" style={{ fontSize: '1.125rem' }}>
            Individual life stories behind the numbers
          </p>
        </div>

        <div className="space-y-0">
          {transformationStories.map((story, index) => (
            <div
              key={index}
              className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-[#F1EDE8]'}`}
            >
              <div className="max-w-6xl mx-auto px-6">
                <h3 className="text-[#1A4065] text-center mb-12" style={{ fontSize: '2rem', fontFamily: 'Georgia, serif' }}>
                  {story.name}'s Story
                </h3>

                <div className={`grid md:grid-cols-2 gap-12 items-start mb-12 ${index % 2 === 1 ? 'md:[direction:rtl]' : ''}`}>
                  {/* Portrait */}
                  {story.beforeImage ? (
                    <div className="grid grid-cols-2 gap-4 md:[direction:ltr]">
                      <div className="relative">
                        <div className="absolute top-3 left-3 z-10 bg-[#A7B867]/90 text-white px-3 py-1 rounded-full shadow-md" style={{ fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.05em' }}>
                          BEFORE
                        </div>
                        <ImageWithFallback
                          src={story.beforeImage}
                          alt={`${story.name} before`}
                          className="w-full h-[300px] md:h-[500px] object-cover rounded-[15px] shadow-lg"
                        />
                      </div>
                      <div className="relative">
                        <div className="absolute top-3 left-3 z-10 bg-[#1A4065]/90 text-white px-3 py-1 rounded-full shadow-md" style={{ fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.05em' }}>
                          AFTER
                        </div>
                        <ImageWithFallback
                          src={story.image}
                          alt={`${story.name} today`}
                          className={`w-full h-[300px] md:h-[500px] object-cover rounded-[15px] shadow-lg ${story.imageClassName ?? ''}`}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-[15px] overflow-hidden shadow-lg md:[direction:ltr]">
                      <ImageWithFallback
                        src={story.image}
                        alt={story.name}
                        className={`w-full h-[500px] object-cover ${story.imageClassName ?? ''}`}
                      />
                    </div>
                  )}

                  {/* Story content */}
                  <div className="md:[direction:ltr]">
                    <p className="text-gray-700 mb-6" style={{ fontSize: '1.0625rem', lineHeight: '1.8' }}>
                      {story.story}
                    </p>
                    <p className="text-gray-700 mb-6" style={{ fontSize: '1.0625rem', lineHeight: '1.8' }}>
                      {story.currentRole}
                    </p>

                    {/* Timeline */}
                    <div className="bg-white rounded-[15px] p-6 shadow-md">
                      <h4 className="text-[#1A4065] mb-4" style={{ fontSize: '1.125rem', fontWeight: '600' }}>
                        Growth Trajectory
                      </h4>
                      <div className="space-y-3">
                        {story.timeline.map((milestone, idx) => (
                          <div key={idx} className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-24 text-[#A7B867]" style={{ fontWeight: '600' }}>
                              {milestone.year}
                            </div>
                            <div className="flex items-center gap-3 flex-1">
                              <ArrowUp size={18} color="#FFCA0A" />
                              <p className="text-gray-700 text-sm">{milestone.event}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="bg-[#1A4065] text-white rounded-[15px] p-8 text-center">
                  <p className="text-[#FFCA0A] mb-4" style={{ fontSize: '1.75rem', fontFamily: 'Georgia, serif', lineHeight: '1.5' }}>
                    {story.quote}
                  </p>
                  <p className="text-white/80">
                    — {story.name}
                  </p>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Financial Transparency */}
      <section className="bg-[#F1EDE8] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#1A4065] text-center mb-6" style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif' }}>
            Financial Transparency
          </h2>
          <p className="text-center text-gray-700 mb-12" style={{ fontSize: '1.125rem' }}>
            We clearly communicate how your donations are used
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Revenue */}
            <div className="bg-white rounded-[15px] p-8 shadow-md">
              <h3 className="text-[#1A4065] mb-6" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                Revenue Breakdown (Annual ¥50,000,000)
              </h3>
              <div className="space-y-4">
                {financialData.revenue.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-gray-700" style={{ fontWeight: '600' }}>{item.source}</p>
                      <p className="text-[#1A4065]" style={{ fontSize: '1.125rem', fontWeight: '600' }}>
                        {item.amount}
                      </p>
                    </div>
                    <p className="text-gray-600 text-sm">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Expenses */}
            <div className="bg-white rounded-[15px] p-8 shadow-md">
              <h3 className="text-[#1A4065] mb-6" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                Expense Breakdown (Annual ¥50,000,000)
              </h3>
              <div className="space-y-4">
                {financialData.expenses.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-gray-700" style={{ fontWeight: '600' }}>{item.category}</p>
                      <p className="text-[#A7B867]" style={{ fontSize: '1.125rem', fontWeight: '600' }}>
                        {item.amount}
                      </p>
                    </div>
                    <p className="text-gray-600 text-sm">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Program Spending Rate */}
          <div className="bg-[#1A4065] text-white rounded-[15px] p-8 text-center mb-8">
            <p className="text-[#FFCA0A] mb-3" style={{ fontSize: '4rem', fontFamily: 'Georgia, serif', fontWeight: 'bold' }}>
              85%
            </p>
            <p className="text-white" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
              Program Implementation Rate
            </p>
            <p className="text-white/80 mt-3">
              85% of donations go directly to children's education and living support<br />
              (15% administrative costs are below industry average)
            </p>
          </div>

          {/* Download Report */}
          <div className="text-center">
            <button
              className="bg-[#A7B867] text-white px-8 py-4 rounded-[15px] inline-flex items-center gap-3 hover:bg-[#8FA055] transition-all shadow-md hover:shadow-lg"
              style={{ fontSize: '1.125rem', fontWeight: '600' }}
            >
              <Download size={24} />
              Download Annual Report (PDF)
            </button>
            <p className="text-gray-600 mt-4 text-sm">
              Detailed financial and activity reports for fiscal year 2024
            </p>
          </div>
        </div>
      </section>

      {/* Third-party Recognition */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#1A4065] text-center mb-12" style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif' }}>
            Third-Party Certifications & Awards
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {recognitions.map((item, index) => (
              <div
                key={index}
                className="bg-[#F1EDE8] rounded-[15px] p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-[#1A4065] mb-2" style={{ fontSize: '1.125rem', fontWeight: '600' }}>
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.year}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#F1EDE8] rounded-[15px] p-8">
            <h3 className="text-[#1A4065] mb-6 text-center" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
              Media Coverage Records
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700 max-w-4xl mx-auto">
              <div className="flex items-start gap-3">
                <CheckCircle size={20} color="#A7B867" className="flex-shrink-0 mt-1" />
                <span>TEDx Kyoto talk by our founder, Lobsang Phuntsok</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={20} color="#A7B867" className="flex-shrink-0 mt-1" />
                <span>Interview of Lobsang on ScooNews, India's largest education-sector media outlet</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={20} color="#A7B867" className="flex-shrink-0 mt-1" />
                <span>Article on Jhamtse Gatsal by Efforts for Good, sharing positive stories from across India</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={20} color="#A7B867" className="flex-shrink-0 mt-1" />
                <span>Webinar by our founder on "Being the best version of yourself" with SOIL Institute of Management</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={20} color="#A7B867" className="flex-shrink-0 mt-1" />
                <span>Article by Daily Good on Jhamtse Gatsal and the film Tashi and the Monk</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={20} color="#A7B867" className="flex-shrink-0 mt-1" />
                <span>Video by Mike Libecki, a Nat Geo Explorer who visited Jhamtse Gatsal</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={20} color="#A7B867" className="flex-shrink-0 mt-1" />
                <span>Coverage by Ravi Venkatesan, former Chairman of Microsoft India and Chairman of GEAPP</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={20} color="#A7B867" className="flex-shrink-0 mt-1" />
                <span>Video by Stephen Butler, Executive Director of Compassion Institute</span>
              </div>
            </div>
            <p className="text-center text-gray-500 text-xs mt-6 italic">
              Direct links coming soon as sources are finalized.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}