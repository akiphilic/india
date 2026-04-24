import { Calendar, MapPin, Video, Clock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Event {
  id: number;
  type: 'online' | 'offline';
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  capacity?: string;
  speaker?: string;
}

export function EventsSection() {
  const events: Event[] = [
    {
      id: 1,
      type: 'offline',
      title: 'Nurturing the Future of Education Together - Lessons from the Himalayas',
      date: 'February 15, 2024',
      time: '14:00 - 16:00',
      location: 'Shibuya Community Center, Tokyo',
      description: 'Join the founder of Jhamtse Gatsal to discuss children\'s education and the power of community. Learn about our actual initiatives and life at our facility.',
      image: 'https://images.unsplash.com/photo-1762158008280-3dcb1d1cbd99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB0YWxrJTIwZXZlbnR8ZW58MXx8fHwxNzY2MTE1MzkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      capacity: 'Capacity: 50 people',
      speaker: 'Lobsang Phuntsok (Founder)'
    },
    {
      id: 2,
      type: 'online',
      title: 'Online Information Session: How to Get Started',
      date: 'February 22, 2024',
      time: '19:00 - 20:00',
      location: 'Zoom Online',
      description: 'Join us from the comfort of your home. We\'ll cover sponsorship methods, program details, and answer frequently asked questions. Feel free to participate!',
      image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjB2aWRlbyUyMGNvbmZlcmVuY2V8ZW58MXx8fHwxNzY2MTE1MzkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      capacity: 'Free admission - Registration required',
      speaker: 'Jhamtse Gatsal Staff'
    },
    {
      id: 3,
      type: 'offline',
      title: 'Charity Photo Exhibition & Talk Session',
      date: 'March 10, 2024',
      time: '10:00 - 18:00',
      location: 'Gallery Space, Kita-ku, Osaka',
      description: 'Photo exhibition capturing the daily lives of our children with a talk session. See precious photos taken on-site and learn about our activities.',
      image: 'https://images.unsplash.com/photo-1762158008280-3dcb1d1cbd99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB0YWxrJTIwZXZlbnR8ZW58MXx8fHwxNzY2MTE1MzkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      capacity: 'Free admission',
      speaker: 'Photographer Akira Tanaka'
    }
  ];

  const navigate = useNavigate();

  return (
    <section className="py-24 bg-[#F1EDE8]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Calendar size={64} color="#1A4065" strokeWidth={1.5} />
          </div>
          <h2 className="mb-4">Events</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Opportunities to learn about Jhamtse Gatsal's activities and grow together. We host various events both online and in-person.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-[15px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                {/* Event Type Badge */}
                <div className="absolute top-4 right-4">
                  <div
                    className="px-4 py-2 rounded-full flex items-center gap-2"
                    style={{
                      backgroundColor: event.type === 'online' ? '#A7B867' : '#FFCA0A'
                    }}
                  >
                    {event.type === 'online' ? (
                      <Video size={16} color="white" />
                    ) : (
                      <MapPin size={16} color="#1A4065" />
                    )}
                    <span
                      className="text-sm"
                      style={{
                        color: event.type === 'online' ? 'white' : '#1A4065',
                        fontWeight: '600'
                      }}
                    >
                      {event.type === 'online' ? 'Online' : 'In-Person'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <h3 className="mb-4 text-[#1A4065]" style={{ fontSize: '1.25rem' }}>
                  {event.title}
                </h3>

                {/* Event Details */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-3 text-gray-700">
                    <Calendar size={18} className="mt-1 flex-shrink-0" color="#A7B867" />
                    <div>
                      <p className="text-sm">{event.date}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-gray-700">
                    <Clock size={18} className="mt-1 flex-shrink-0" color="#A7B867" />
                    <div>
                      <p className="text-sm">{event.time}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-gray-700">
                    {event.type === 'online' ? (
                      <Video size={18} className="mt-1 flex-shrink-0" color="#A7B867" />
                    ) : (
                      <MapPin size={18} className="mt-1 flex-shrink-0" color="#A7B867" />
                    )}
                    <div>
                      <p className="text-sm">{event.location}</p>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {event.description}
                </p>

                {/* Event Meta */}
                <div className="mb-4 pb-4 border-b border-gray-200">
                  {event.speaker && (
                    <p className="text-sm text-gray-600 mb-1">
                      <span className="text-[#1A4065]">Speaker:</span> {event.speaker}
                    </p>
                  )}
                  {event.capacity && (
                    <p className="text-sm text-gray-600">
                      <span className="text-[#1A4065]">{event.capacity}</span>
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <button
                  className="w-full btn-secondary py-3 flex items-center justify-center gap-2"
                  onClick={() => navigate(`/events/${event.id}`)}
                >
                  <span>Details & Register</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* All Events CTA */}
        <div className="text-center">
          <button className="btn-primary px-10 py-4" onClick={() => navigate('/events')}>
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
}