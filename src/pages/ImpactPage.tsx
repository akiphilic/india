import { TrendingUp, Users, GraduationCap, Heart, DollarSign, Award, Globe, Target, CheckCircle, ArrowUp, Download, Briefcase, Sprout } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { FinalCTA } from '../components/FinalCTA';

export function ImpactPage() {
  // Data for Year-over-Year Growth
  const yearlyData = [
    { year: '2006', students: 8 },
    { year: '2008', students: 25 },
    { year: '2010', students: 42 },
    { year: '2012', students: 68 },
    { year: '2014', students: 95 },
    { year: '2016', students: 120 },
    { year: '2018', students: 145 },
    { year: '2020', students: 172 },
    { year: '2022', students: 195 },
    { year: '2025', students: 215 },
  ];

  // Data for Graduate Outcomes
  const outcomeData = [
    { name: 'University Enrollment', value: 72, color: '#1A4065' },
    { name: 'Employment', value: 21, color: '#A7B867' },
    { name: 'Gap Year', value: 7, color: '#FFCA0A' },
  ];

  // Data for Fund Allocation
  const fundData = [
    { name: 'Education', value: 35, color: '#1A4065' },
    { name: 'Meals', value: 35, color: '#A7B867' },
    { name: 'Housing', value: 20, color: '#FFCA0A' },
    { name: 'Healthcare', value: 10, color: '#F1EDE8' },
  ];

  const transformationStories = [
    {
      name: 'Sonam',
      beforeTitle: '2010: Admitted as an orphan',
      beforeAge: '8 years old',
      beforeStatus: 'Lost both parents and moved from relative to relative. Could not attend school and was unable to read or write.',
      beforeImage: 'https://images.unsplash.com/photo-1602204127613-88710168e528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGhhcHB5JTIwc21pbGluZ3xlbnwxfHx8fDE3NjYxMjU5NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      afterTitle: '2025: Working as a nurse',
      afterAge: '23 years old',
      afterStatus: 'Graduated from nursing school with top honors. Currently working as a pediatric nurse at a general hospital in Delhi.',
      afterImage: 'https://images.unsplash.com/photo-1758874572628-8a63fb0c9851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFkdWx0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NjEyNTk0MHww&ixlib=rb-4.1.0&q=80&w=1080',
      timeline: [
        { year: 2010, event: 'Admitted to Jhamtse' },
        { year: 2015, event: 'High school graduation (GPA 3.5)' },
        { year: 2019, event: 'Nursing school graduation' },
        { year: 2020, event: 'Hospital employment' },
        { year: 2025, event: 'Promoted to head nurse' },
      ],
      quote: '"Jhamtse gave me family and education. Now it\'s my turn to give hope to sick children"',
    },
    {
      name: 'Tashi',
      beforeTitle: '2012: Protected from domestic violence',
      beforeAge: '10 years old',
      beforeStatus: 'Protected from abuse by an alcoholic father. Suffered from severe trauma.',
      beforeImage: 'https://images.unsplash.com/photo-1602204127613-88710168e528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGhhcHB5JTIwc21pbGluZ3xlbnwxfHx8fDE3NjYxMjU5NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      afterTitle: '2025: Software Engineer',
      afterAge: '23 years old',
      afterStatus: 'Obtained Bachelor\'s degree in Computer Science. Currently working as a full-stack engineer at an IT company in Bangalore.',
      afterImage: 'https://images.unsplash.com/photo-1758876019673-704b039d405c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjYXJlZXIlMjBzdWNjZXNzfGVufDF8fHx8MTc2NjA3Mjc5MHww&ixlib=rb-4.1.0&q=80&w=1080',
      timeline: [
        { year: 2012, event: 'Protected by Jhamtse' },
        { year: 2013, event: 'Trauma care begins' },
        { year: 2017, event: 'High school graduation (GPA 3.9)' },
        { year: 2021, event: 'University graduation (CS major)' },
        { year: 2025, event: 'Promoted to senior engineer' },
      ],
      quote: '"By writing computer code, I was able to rewrite my life"',
    },
    {
      name: 'Pema',
      beforeTitle: '2014: Extreme poverty',
      beforeAge: '12 years old',
      beforeStatus: 'Eldest daughter in single-parent family with 6 siblings. Could not afford to attend school and was busy with housework and caring for younger siblings.',
      beforeImage: 'https://images.unsplash.com/photo-1602204127613-88710168e528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGhhcHB5JTIwc21pbGluZ3xlbnwxfHx8fDE3NjYxMjU5NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      afterTitle: '2025: Returned to alma mater as teacher',
      afterAge: '23 years old',
      afterStatus: 'After graduating from education department, returned to Jhamtse as a teacher. Now in charge of 20 students.',
      afterImage: 'https://images.unsplash.com/photo-1765005343987-6bf51ae692c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBhY2hpZXZlbWVudHxlbnwxfHx8fDE3NjYxMjU5Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      timeline: [
        { year: 2014, event: 'Admitted to Jhamtse' },
        { year: 2018, event: 'High school graduation (GPA 3.7)' },
        { year: 2022, event: 'Education department graduation' },
        { year: 2023, event: 'Became Jhamtse teacher' },
        { year: 2025, event: 'Selected as grade director' },
      ],
      quote: '"I want to give back the love and education I received to the next generation of children"',
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
                90%<span style={{ fontSize: '2rem' }}>+</span>
              </p>
              <p className="text-[#1A4065]" style={{ fontSize: '1.25rem', fontWeight: '600' }}>
                University Enrollment
              </p>
              <p className="text-gray-600 mt-2">
                Graduate higher education rate
              </p>
            </div>

            <div className="bg-white rounded-[15px] p-8 shadow-md">
              <p className="text-[#FFCA0A] mb-2" style={{ fontSize: '3.5rem', fontFamily: 'Georgia, serif', fontWeight: 'bold' }}>
                215<span style={{ fontSize: '2rem' }}>students</span>
              </p>
              <p className="text-[#1A4065]" style={{ fontSize: '1.25rem', fontWeight: '600' }}>
                Current Enrollment
              </p>
              <p className="text-gray-600 mt-2">
                As of 2025
              </p>
            </div>

            <div className="bg-white rounded-[15px] p-8 shadow-md">
              <p className="text-[#1A4065] mb-2" style={{ fontSize: '3.5rem', fontFamily: 'Georgia, serif', fontWeight: 'bold' }}>
                161<span style={{ fontSize: '2rem' }}>people</span>
              </p>
              <p className="text-[#1A4065]" style={{ fontSize: '1.25rem', fontWeight: '600' }}>
                Total Graduates
              </p>
              <p className="text-gray-600 mt-2">
                Since founding
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
                  Year-over-year Trend: Growth in student enrollment
                </h3>
              </div>
              <p className="text-gray-700 mb-8">
                Growth from 8 students at founding in 2006 to 215 in 2025
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

            <div className="grid md:grid-cols-2 gap-8">
              {/* Graduate Outcomes Pie Chart */}
              <div className="bg-[#F1EDE8] rounded-[15px] p-8">
                <div className="flex items-center gap-3 mb-6">
                  <PieChart size={32} color="#1A4065" />
                  <h3 className="text-[#1A4065]" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                    Graduate Career Paths
                  </h3>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={outcomeData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
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
                <div className="mt-6 space-y-2">
                  {outcomeData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded" style={{ backgroundColor: item.color }}></div>
                        <span className="text-gray-700">{item.name}</span>
                      </div>
                      <span className="text-[#1A4065]" style={{ fontWeight: '600' }}>{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fund Allocation Pie Chart */}
              <div className="bg-[#F1EDE8] rounded-[15px] p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Heart size={32} color="#FFCA0A" />
                  <h3 className="text-[#1A4065]" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                    Use of Donations
                  </h3>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={fundData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                      label={(entry) => `${entry.name} ${entry.value}%`}
                    >
                      {fundData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-6 space-y-2">
                  {fundData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded" style={{ backgroundColor: item.color }}></div>
                        <span className="text-gray-700">{item.name}</span>
                      </div>
                      <span className="text-[#1A4065]" style={{ fontWeight: '600' }}>{item.value}%</span>
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
            {/* Left Column - Photo */}
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1597210100708-b025dcc32a2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMGVudHJlcHJlbmV1ciUyMG1vdW50YWluJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2NjEyOTQ5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Rinchen"
                className="w-full h-[500px] md:h-[700px] object-cover rounded-[15px] shadow-lg"
              />
              {/* Changemaker Badge */}
              <div className="absolute top-5 right-5 bg-[#FFCA0A] text-[#1A4065] px-4 py-2 rounded-[20px] shadow-md" style={{ fontWeight: 'bold', fontSize: '0.875rem' }}>
                Changemaker
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="max-w-[550px]">
              {/* Header */}
              <h3 className="text-[#1A4065] mb-2" style={{ fontSize: '1.75rem', fontFamily: 'Georgia, serif', fontWeight: 'bold' }}>
                Rinchen
              </h3>
              <p className="text-[#A7B867] mb-4" style={{ fontSize: '1rem' }}>
                Jhamtse Gatsal Graduate (Admitted 2006)
              </p>
              <div className="inline-block bg-white border border-[#A7B867] px-4 py-2 rounded-[20px] mb-6">
                <p className="text-[#1A4065]" style={{ fontSize: '0.875rem', fontWeight: '500' }}>
                  Current: Sustainable Ecotourism Entrepreneur
                </p>
              </div>

              {/* Quote Section */}
              <div className="bg-white border-l-4 border-[#A7B867] rounded-lg p-6 shadow-sm mb-8">
                <div className="text-[#A7B867] opacity-30 leading-none mb-2" style={{ fontSize: '3rem', fontFamily: 'Georgia, serif' }}>
                  "
                </div>
                <p className="text-[#333333] italic" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
                  I want to share the beauty of the Himalayan region and our culture with people around the world.
                  Through sustainable ecotourism business, I want to protect culture and the region while
                  achieving economic growth for local residents. I want to provide all visitors with
                  unique and memorable experiences, and achieve this in the most sustainable way possible.
                </p>
                <p className="text-[#A7B867] italic text-right mt-4" style={{ fontSize: '0.875rem' }}>
                  — Rinchen, Jhamtse Changemaker
                </p>
              </div>

              {/* Impact Stats */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <GraduationCap size={40} color="#A7B867" strokeWidth={1.5} />
                  <p className="text-[#1A4065]" style={{ fontSize: '0.9375rem', fontWeight: '500' }}>
                    Obtained degree in Travel & Tourism
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase size={40} color="#1A4065" strokeWidth={1.5} />
                  <p className="text-[#1A4065]" style={{ fontSize: '0.9375rem', fontWeight: '500' }}>
                    Successful travel agency in Delhi
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Sprout size={40} color="#FFCA0A" strokeWidth={1.5} />
                  <p className="text-[#1A4065]" style={{ fontSize: '0.9375rem', fontWeight: '500' }}>
                    Pioneer of sustainable ecotourism in the region
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Message */}
          <div className="text-center max-w-[900px] mx-auto mt-12">
            <p className="text-[#1A4065]" style={{ fontSize: '1.125rem', lineHeight: '1.6' }}>
              It takes approximately 18 years of support per person to develop changemakers like Rinchen.
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

                {/* Before/After Comparison */}
                <div className="grid md:grid-cols-2 gap-12 mb-12">
                  {/* Before */}
                  <div className="bg-white rounded-[15px] overflow-hidden shadow-md">
                    <div className="bg-gray-400 text-white px-6 py-3">
                      <p style={{ fontWeight: '600' }}>BEFORE</p>
                    </div>
                    <ImageWithFallback
                      src={story.beforeImage}
                      alt={`${story.name} before`}
                      className="w-full h-[250px] object-cover"
                    />
                    <div className="p-6">
                      <h4 className="text-[#1A4065] mb-2" style={{ fontSize: '1.25rem', fontWeight: '600' }}>
                        {story.beforeTitle}
                      </h4>
                      <p className="text-[#A7B867] mb-4" style={{ fontWeight: '600' }}>
                        {story.beforeAge}
                      </p>
                      <p className="text-gray-700">
                        {story.beforeStatus}
                      </p>
                    </div>
                  </div>

                  {/* After */}
                  <div className="bg-white rounded-[15px] overflow-hidden shadow-md border-2 border-[#A7B867]">
                    <div className="bg-[#A7B867] text-white px-6 py-3">
                      <p style={{ fontWeight: '600' }}>AFTER</p>
                    </div>
                    <ImageWithFallback
                      src={story.afterImage}
                      alt={`${story.name} after`}
                      className="w-full h-[250px] object-cover"
                    />
                    <div className="p-6">
                      <h4 className="text-[#1A4065] mb-2" style={{ fontSize: '1.25rem', fontWeight: '600' }}>
                        {story.afterTitle}
                      </h4>
                      <p className="text-[#A7B867] mb-4" style={{ fontWeight: '600' }}>
                        {story.afterAge}
                      </p>
                      <p className="text-gray-700">
                        {story.afterStatus}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <div className="bg-white rounded-[15px] p-8 shadow-md mb-8">
                  <h4 className="text-[#1A4065] mb-6" style={{ fontSize: '1.25rem', fontWeight: '600' }}>
                    Growth Trajectory
                  </h4>
                  <div className="space-y-4">
                    {story.timeline.map((milestone, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-20 text-[#A7B867]" style={{ fontWeight: '600' }}>
                          {milestone.year}
                        </div>
                        <div className="flex items-center gap-3 flex-1">
                          <ArrowUp size={20} color="#FFCA0A" />
                          <p className="text-gray-700">{milestone.event}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="bg-[#1A4065] text-white rounded-[15px] p-8 text-center">
                  <p className="text-[#FFCA0A] mb-4" style={{ fontSize: '2rem', fontFamily: 'Georgia, serif', lineHeight: '1.5' }}>
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
              Media Coverage
            </h3>
            <div className="flex flex-wrap justify-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle size={20} color="#A7B867" />
                <span>NHK Special (2019)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} color="#A7B867" />
                <span>Asahi Shimbun (2021)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} color="#A7B867" />
                <span>TED Talk (2022)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} color="#A7B867" />
                <span>Forbes India (2023)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}