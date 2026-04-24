import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, ArrowLeft, Mail, Phone, Share2 } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { FinalCTA } from '../components/FinalCTA';

// This would ideally come from a database or API
const eventData: { [key: string]: any } = {
  '1': {
    id: 1,
    title: 'Online Facility Tour',
    description: 'Connect with us via Zoom and talk directly with the children. Q&A session included.',
    fullDescription: 'A special online event where you can see daily life at Jhamtse Gatsal. Local staff will provide a live tour of the facility, and you can see the children\'s learning and daily activities firsthand.\n\nIn the second half of the event, we\'ll have time to answer questions from participants. Feel free to ask anything about the facility, the children, or how to support us.',
    date: 'March 15, 2025',
    time: '20:00 - 21:30 (JST)',
    location: 'Online (Zoom)',
    type: 'online',
    capacity: 50,
    registered: 32,
    image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjB2aWRlbyUyMGNvbmZlcmVuY2V8ZW58MXx8fHwxNzY2MTE1MzkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'upcoming',
    agenda: [
      { time: '20:00-20:10', item: 'Opening - About Jhamtse' },
      { time: '20:10-20:40', item: 'Live Facility Tour' },
      { time: '20:40-21:00', item: 'Interaction with Children' },
      { time: '21:00-21:30', item: 'Q&A Session' }
    ],
    requirements: [
      'Zoom app or browser',
      'Stable internet connection',
      'Camera/mic optional (used only when asking questions)'
    ],
    organizer: {
      name: 'Jhamtse Gatsal Japan Branch',
      email: 'events@jhamtse.jp',
      phone: '03-1234-5678'
    }
  },
  '2': {
    id: 2,
    title: 'Spring Site Visit Tour',
    description: 'Spend 7 days with the children in the beautiful Himalayas. Includes facility tour, farming experience, and cultural exchange.',
    fullDescription: 'A 7-day tour to visit Jhamtse Gatsal in the Indian Himalayan region. By spending time with the children and experiencing their daily life, you can deeply understand the significance of our support.\n\nWe have prepared a rich program including farming experience, classroom observation, and cultural exchange programs. Why not have an unforgettable experience in the great nature of the Himalayas?',
    date: 'May 23-29, 2025',
    time: '6 nights, 7 days',
    location: 'Jhamtse Gatsal (Indian Himalayas)',
    type: 'offline',
    capacity: 12,
    registered: 8,
    image: 'https://images.unsplash.com/photo-1760454477189-9af9947786ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXRoZXJpbmclMjBldmVudHxlbnwxfHx8fDE3NjYwNzk1NjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'upcoming',
    agenda: [
      { time: 'Day 1', item: 'Arrive in Delhi - Orientation' },
      { time: 'Day 2', item: 'Transfer to Jhamtse (8 hours)' },
      { time: 'Day 3-5', item: 'Facility tour - Interaction with children - Farming experience' },
      { time: 'Day 6', item: 'Transfer to Delhi - Reflection' },
      { time: 'Day 7', item: 'Departure' }
    ],
    requirements: [
      'Passport (valid for 6+ months)',
      'Indian visa',
      'Overseas travel insurance required',
      'Basic English skills (Japanese interpreter available)'
    ],
    cost: '¥250,000 (airfare not included)',
    organizer: {
      name: 'Jhamtse Gatsal Japan Branch',
      email: 'tour@jhamtse.jp',
      phone: '03-1234-5678'
    }
  }
};

export function EventDetailPage() {
  const { eventId } = useParams<{ eventId: string }>();
  const navigate = useNavigate();
  
  const event = eventId ? eventData[eventId] : null;

  if (!event) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-[#1A4065] mb-4" style={{ fontSize: '2rem', fontFamily: 'Georgia, serif' }}>
            Event Not Found
          </h1>
          <button
            onClick={() => navigate('/events')}
            className="bg-[#FFCA0A] text-[#1A4065] px-6 py-3 rounded-[15px] hover:bg-[#FFD940] transition-all"
            style={{ fontWeight: '600' }}
          >
            Back to Events
          </button>
        </div>
      </div>
    );
  }

  const availableSpots = event.capacity - event.registered;
  const progressPercent = (event.registered / event.capacity) * 100;

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-[#F1EDE8] py-4">
        <div className="max-w-4xl mx-auto px-6">
          <button
            onClick={() => navigate('/events')}
            className="flex items-center gap-2 text-[#1A4065] hover:text-[#A7B867] transition-colors"
            style={{ fontWeight: '600' }}
          >
            <ArrowLeft size={20} />
            Back to Events
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[400px]">
        <ImageWithFallback
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-[#A7B867] text-white px-4 py-2 rounded-full mb-4">
              {event.type === 'online' ? 'Online' : 'In-Person'}
            </div>
            <h1 className="text-white mb-4" style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif' }}>
              {event.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-white">
              <div className="flex items-center gap-2">
                <Calendar size={20} />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>{event.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-[2fr_1fr] gap-12">
            {/* Left Column - Details */}
            <div>
              <h2 className="text-[#1A4065] mb-6" style={{ fontSize: '1.75rem', fontFamily: 'Georgia, serif' }}>
                Event Details
              </h2>
              <div className="prose max-w-none mb-8">
                {event.fullDescription.split('\n\n').map((paragraph: string, index: number) => (
                  <p key={index} className="text-gray-700 mb-4" style={{ lineHeight: '1.8' }}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Agenda */}
              <h3 className="text-[#1A4065] mb-4" style={{ fontSize: '1.5rem', fontFamily: 'Georgia, serif' }}>
                Program
              </h3>
              <div className="bg-[#F1EDE8] rounded-[15px] p-6 mb-8">
                <div className="space-y-4">
                  {event.agenda.map((item: any, index: number) => (
                    <div key={index} className="flex gap-4">
                      <div className="text-[#A7B867] min-w-[120px]" style={{ fontWeight: '600' }}>
                        {item.time}
                      </div>
                      <div className="text-gray-700">{item.item}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <h3 className="text-[#1A4065] mb-4" style={{ fontSize: '1.5rem', fontFamily: 'Georgia, serif' }}>
                Requirements
              </h3>
              <ul className="space-y-2 mb-8">
                {event.requirements.map((req: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-[#A7B867] mt-1">•</span>
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>

              {event.cost && (
                <>
                  <h3 className="text-[#1A4065] mb-4" style={{ fontSize: '1.5rem', fontFamily: 'Georgia, serif' }}>
                    Cost
                  </h3>
                  <p className="text-[#1A4065] mb-8" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                    {event.cost}
                  </p>
                </>
              )}
            </div>

            {/* Right Column - Registration */}
            <div>
              <div className="bg-[#F1EDE8] rounded-[15px] p-6 sticky top-6">
                <h3 className="text-[#1A4065] mb-6" style={{ fontSize: '1.25rem', fontWeight: '600' }}>
                  Registration Status
                </h3>

                {/* Capacity Progress */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Users size={20} />
                      <span>{event.registered} / {event.capacity} people</span>
                    </div>
                    <span className="text-[#A7B867]" style={{ fontWeight: '600' }}>
                      {availableSpots} spots left
                    </span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-3">
                    <div
                      className="bg-[#A7B867] h-3 rounded-full transition-all"
                      style={{ width: `${progressPercent}%` }}
                    ></div>
                  </div>
                </div>

                {/* Registration Button */}
                <button
                  className="w-full bg-[#FFCA0A] text-[#1A4065] py-4 rounded-[15px] hover:bg-[#FFD940] transition-all mb-4 shadow-md hover:shadow-lg"
                  style={{ fontWeight: '600', fontSize: '1.125rem' }}
                  onClick={() => alert('Navigating to registration form (Demo)')}
                >
                  Register Now
                </button>

                {/* Share Button */}
                <button
                  className="w-full bg-white text-[#1A4065] py-3 rounded-[15px] border-2 border-[#1A4065] hover:bg-[#1A4065] hover:text-white transition-all flex items-center justify-center gap-2"
                  style={{ fontWeight: '600' }}
                  onClick={() => alert('Share function (Demo)')}
                >
                  <Share2 size={20} />
                  Share This Event
                </button>

                {/* Contact Info */}
                <div className="mt-8 pt-6 border-t border-gray-300">
                  <h4 className="text-[#1A4065] mb-4" style={{ fontWeight: '600' }}>
                    Contact
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Mail size={16} />
                      <a href={`mailto:${event.organizer.email}`} className="hover:text-[#A7B867]">
                        {event.organizer.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Phone size={16} />
                      <span>{event.organizer.phone}</span>
                    </div>
                  </div>
                </div>
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
