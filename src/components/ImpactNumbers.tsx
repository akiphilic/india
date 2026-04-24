import { GraduationCap, Users, Sprout, MapPin, Building2, Users as UsersIcon, Calendar } from 'lucide-react';

export function ImpactNumbers() {
  const stats = [
    {
      number: "90%+",
      label: "University Enrollment Rate",
      icon: GraduationCap,
      color: "#1A4065", // Navy
    },
    {
      number: "215",
      label: "Total Students Supported",
      icon: Users,
      color: "#A7B867", // Sage green
    },
    {
      number: "161",
      label: "Currently Supported",
      icon: Sprout,
      color: "#FFCA0A", // Yellow
    },
  ];

  const facilityInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Tawang, Arunachal Pradesh, India',
      sublabel: 'Himalayan foothills at 3,000m elevation'
    },
    {
      icon: Building2,
      label: 'Facility',
      value: 'Residential Campus',
      sublabel: 'Classrooms, dormitories, organic farm, library'
    },
    {
      icon: UsersIcon,
      label: 'Community',
      value: '161 children, 47 staff members',
      sublabel: '57% local employment'
    },
    {
      icon: Calendar,
      label: 'Established',
      value: '2006',
      sublabel: '19 years of service'
    }
  ];

  return (
    <section className="py-20 bg-[#1A40650A] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1A4065] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A7B867] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#1A4065] mb-3">
            Our Impact & Facilities
          </h2>
          <p className="text-[#A7B867] text-lg" style={{ fontWeight: '500' }}>
            Transforming lives through education and community
          </p>
        </div>

        {/* Impact Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-6">
                  <div 
                    className="rounded-full p-6 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${stat.color}15` }}
                  >
                    <Icon size={80} color={stat.color} strokeWidth={1.5} />
                  </div>
                </div>
                <div
                  className="mb-4 transition-all group-hover:scale-105"
                  style={{ 
                    color: stat.color,
                    fontSize: '4.5rem',
                    fontWeight: 'bold',
                    lineHeight: 1
                  }}
                >
                  {stat.number}
                </div>
                <p className="text-2xl text-[#1A4065]">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center mb-16">
          <div className="h-px bg-[#A7B867] w-24 opacity-30"></div>
          <div className="mx-4 w-2 h-2 rounded-full bg-[#A7B867] opacity-50"></div>
          <div className="h-px bg-[#A7B867] w-24 opacity-30"></div>
        </div>

        {/* Facility Info Cards - Horizontal Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {facilityInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="bg-white border-2 border-[#A7B867] rounded-[15px] p-6 transition-all hover:border-[#FFCA0A] hover:shadow-lg group"
                style={{ boxShadow: '0 4px 12px rgba(26, 64, 101, 0.08)' }}
              >
                <div className="flex flex-col items-center text-center">
                  <div 
                    className="mb-4 p-3 rounded-full transition-all group-hover:scale-110"
                    style={{ backgroundColor: '#A7B86715' }}
                  >
                    <Icon size={32} color="#A7B867" strokeWidth={1.5} />
                  </div>
                  <p className="text-[#A7B867] text-sm mb-2" style={{ fontWeight: '600', letterSpacing: '0.05em' }}>
                    {info.label}
                  </p>
                  <p className="text-[#1A4065] mb-2" style={{ fontSize: '1rem', fontWeight: '700', lineHeight: '1.4' }}>
                    {info.value}
                  </p>
                  <p className="text-[#666666] text-xs" style={{ lineHeight: '1.5' }}>
                    {info.sublabel}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}