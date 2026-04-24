import { Calendar, MapPin, Users, Search, Filter, Mail, Clock, Video, Award } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { FinalCTA } from '../components/FinalCTA';

type EventType = 'upcoming' | 'past' | 'news';
type EventCategory = 'all' | 'online' | 'offline' | 'fundraising' | 'volunteer' | 'visit';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time?: string;
  location: string;
  type: 'online' | 'offline';
  category: EventCategory;
  capacity?: number;
  registered?: number;
  image: string;
  status: 'upcoming' | 'past';
}

interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
}

export function EventsPage() {
  const [activeTab, setActiveTab] = useState<EventType>('upcoming');
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const upcomingEvents: Event[] = [
    {
      id: 1,
      title: 'Online Facility Tour',
      description: 'Connect with us via Zoom and talk directly with the children. Q&A session included.',
      date: 'March 15, 2025',
      time: '20:00 - 21:30 (JST)',
      location: 'Online (Zoom)',
      type: 'online',
      category: 'online',
      capacity: 50,
      registered: 32,
      image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjB2aWRlbyUyMGNvbmZlcmVuY2V8ZW58MXx8fHwxNzY2MTE1MzkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      status: 'upcoming',
    },
    {
      id: 2,
      title: 'Spring Site Visit Tour',
      description: 'Spend 7 days with the children in the beautiful Himalayas. Includes facility tour, farming experience, and cultural exchange.',
      date: 'May 23-29, 2025',
      time: '6 nights, 7 days',
      location: 'Jhamtse Gatsal (Indian Himalayas)',
      type: 'offline',
      category: 'visit',
      capacity: 12,
      registered: 8,
      image: 'https://images.unsplash.com/photo-1760454477189-9af9947786ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXRoZXJpbmclMjBldmVudHxlbnwxfHx8fDE3NjYwNzk1NjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      status: 'upcoming',
    },
    {
      id: 3,
      title: 'Charity Running Campaign',
      description: 'Your running distance becomes donations! Track with the app and achieve goals together with supporters worldwide.',
      date: 'May 1-31, 2025',
      time: '1 month',
      location: 'Anywhere (App-linked)',
      type: 'online',
      category: 'fundraising',
      image: 'https://images.unsplash.com/photo-1765902764002-d25c8bfab451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdW5kcmFpc2luZyUyMGV2ZW50JTIwY2hhcml0eXxlbnwxfHx8fDE3NjYxMjYzMjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      status: 'upcoming',
    },
    {
      id: 4,
      title: 'Volunteer Orientation (Tokyo)',
      description: 'Detailed explanation of activities and testimonials from current volunteers.',
      date: 'June 10, 2025',
      time: '19:00 - 21:00',
      location: 'Shibuya, Tokyo (venue TBA)',
      type: 'offline',
      category: 'volunteer',
      capacity: 30,
      registered: 15,
      image: 'https://images.unsplash.com/photo-1646369505567-3a9cbb052342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjYxMjYzMzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      status: 'upcoming',
    },
    {
      id: 5,
      title: '19th Anniversary Celebration',
      description: 'Alumni speeches, Emmy Award-winning documentary screening, charity auction',
      date: 'July 15, 2025',
      time: '14:00 - 18:00',
      location: 'Tokyo · Osaka · Online (simultaneous)',
      type: 'offline',
      category: 'fundraising',
      capacity: 200,
      registered: 145,
      image: 'https://images.unsplash.com/photo-1648915880517-64a029f4194a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWxlYnJhdGlvbiUyMGNlcmVtb255fGVufDF8fHx8MTc2NjEyNjMzMHww&ixlib=rb-4.1.0&q=80&w=1080',
      status: 'upcoming',
    },
    {
      id: 6,
      title: 'Online Donor Appreciation Event',
      description: 'Monthly supporters only. Live broadcast from the site and messages from the children.',
      date: 'August 20, 2025',
      time: '20:00 - 21:00 (JST)',
      location: 'Online (Zoom)',
      type: 'online',
      category: 'online',
      capacity: 100,
      registered: 67,
      image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjB2aWRlbyUyMGNvbmZlcmVuY2V8ZW58MXx8fHwxNzY2MTE1MzkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      status: 'upcoming',
    },
  ];

  const pastEvents: Event[] = [
    {
      id: 101,
      title: '2024 Annual Report Meeting',
      description: '2024 activity and financial report. Over 90 supporters attended.',
      date: 'January 25, 2025',
      time: '19:00 - 21:00',
      location: 'Online (Zoom)',
      type: 'online',
      category: 'online',
      image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjB2aWRlbyUyMGNvbmZlcmVuY2V8ZW58MXx8fHwxNzY2MTE1MzkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      status: 'past',
    },
    {
      id: 102,
      title: 'Documentary Screening & Talk Event',
      description: 'Screening of Emmy Award-winning "Tashi and the Monk" with talk session by founder Lobsang Phuntsok',
      date: 'November 15, 2024',
      time: '18:30 - 21:00',
      location: 'Shibuya, Tokyo',
      type: 'offline',
      category: 'offline',
      capacity: 80,
      registered: 80,
      image: 'https://images.unsplash.com/photo-1762356121454-877acbd554bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudGFyeSUyMGZpbG0lMjBzY3JlZW5pbmd8ZW58MXx8fHwxNzY2MTI2MzMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      status: 'past',
    },
    {
      id: 103,
      title: 'Autumn Site Visit Tour',
      description: '10 participants joined the 7-day tour. All responded it was "a life-changing experience."',
      date: 'October 12-18, 2024',
      time: '6 nights, 7 days',
      location: 'Jhamtse Gatsal (India)',
      type: 'offline',
      category: 'visit',
      capacity: 10,
      registered: 10,
      image: 'https://images.unsplash.com/photo-1760454477189-9af9947786ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXRoZXJpbmclMjBldmVudHxlbnwxfHx8fDE3NjYwNzk1NjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      status: 'past',
    },
  ];

  const newsItems: NewsItem[] = [
    {
      id: 201,
      title: 'New School Building Project Reaches 25% of Funding Goal',
      description: 'Construction funds for the new building with 250-person capacity reached ¥12.5M of the ¥50M goal. Thank you to all our supporters.',
      date: 'February 1, 2025',
      category: 'Project Progress',
      image: 'https://images.unsplash.com/photo-1765902764002-d25c8bfab451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdW5kcmFpc2luZyUyMGV2ZW50JTIwY2hhcml0eXxlbnwxfHx8fDE3NjYxMjYzMjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 202,
      title: 'Alumna Sonam Thriving as Nurse',
      description: 'Sonam, who joined in 2010, is now working as a pediatric nurse at a general hospital in Delhi.',
      date: 'January 20, 2025',
      category: 'Alumni News',
      image: 'https://images.unsplash.com/photo-1648915880517-64a029f4194a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWxlYnJhdGlvbiUyMGNlcmVtb255fGVufDF8fHx8MTc2NjEyNjMzMHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 203,
      title: 'NHK Special "Children of the Himalayas" Broadcast Confirmed',
      description: 'A documentary following Jhamtse for one year will air on March 10.',
      date: 'January 15, 2025',
      category: 'Media Coverage',
      image: 'https://images.unsplash.com/photo-1762356121454-877acbd554bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudGFyeSUyMGZpbG0lMjBzY3JlZW5pbmd8ZW58MXx8fHwxNzY2MTI2MzMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 204,
      title: 'Organic Farm Project: Harvest Increased 150% Year-over-Year',
      description: 'Organic vegetable harvest grown by the children significantly increased. School meal self-sufficiency reached 80%.',
      date: 'December 25, 2024',
      category: 'Project Progress',
      image: 'https://images.unsplash.com/photo-1760454477189-9af9947786ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXRoZXJpbmclMjBldmVudHxlbnwxfHx8fDE3NjYwNzk1NjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`${email} has been registered! We'll send you event updates.`);
    setEmail('');
  };

  const filterEvents = (events: Event[]) => {
    return events.filter((event) => {
      const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
      const matchesSearch =
        searchQuery === '' ||
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  };

  const filterNews = (news: NewsItem[]) => {
    return news.filter((item) => {
      return (
        searchQuery === '' ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  };

  const renderEventCard = (event: Event) => (
    <div key={event.id} className="bg-[#F1EDE8] rounded-[15px] overflow-hidden shadow-md hover:shadow-xl transition-all">
      <div className="relative">
        <ImageWithFallback src={event.image} alt={event.title} className="w-full h-[300px] object-cover" />
        <div className="absolute top-4 right-4">
          <span
            className={`px-4 py-2 rounded-full text-sm ${
              event.type === 'online'
                ? 'bg-[#A7B867] text-white'
                : 'bg-[#FFCA0A] text-[#1A4065]'
            }`}
            style={{ fontWeight: '600' }}
          >
            {event.type === 'online' ? (
              <span className="flex items-center gap-2">
                <Video size={16} />
                Online
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <MapPin size={16} />
                In-Person
              </span>
            )}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 mb-4 text-[#1A4065]">
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span style={{ fontWeight: '600' }}>{event.date}</span>
          </div>
        </div>

        {event.time && (
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <Clock size={16} />
            <span>{event.time}</span>
          </div>
        )}

        <h3 className="text-[#1A4065] mb-3" style={{ fontSize: '1.25rem', fontWeight: '600' }}>
          {event.title}
        </h3>

        <p className="text-gray-700 mb-4 line-clamp-2">{event.description}</p>

        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <MapPin size={16} />
          <span className="text-sm">{event.location}</span>
        </div>

        {event.capacity && event.registered !== undefined && (
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-gray-600">
                <Users size={16} />
                <span className="text-sm">
                  {event.registered} / {event.capacity} people
                </span>
              </div>
              <span className="text-[#A7B867] text-sm" style={{ fontWeight: '600' }}>
                {Math.round((event.registered / event.capacity) * 100)}% Full
              </span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div
                className="bg-[#A7B867] h-2 rounded-full"
                style={{ width: `${(event.registered / event.capacity) * 100}%` }}
              ></div>
            </div>
          </div>
        )}

        <button
          onClick={() => navigate(`/events/${event.id}`)}
          className="w-full bg-[#FFCA0A] text-[#1A4065] py-3 rounded-[15px] hover:bg-[#FFD940] transition-all"
          style={{ fontWeight: '600' }}
        >
          {event.status === 'upcoming' ? 'Details & Register' : 'View Report'}
        </button>
      </div>
    </div>
  );

  const renderNewsCard = (news: NewsItem) => (
    <div key={news.id} className="bg-[#F1EDE8] rounded-[15px] overflow-hidden shadow-md hover:shadow-xl transition-all">
      <ImageWithFallback src={news.image} alt={news.title} className="w-full h-[300px] object-cover" />

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="bg-[#A7B867] text-white px-3 py-1 rounded-full text-sm" style={{ fontWeight: '600' }}>
            {news.category}
          </span>
          <span className="text-gray-600 text-sm">{news.date}</span>
        </div>

        <h3 className="text-[#1A4065] mb-3" style={{ fontSize: '1.25rem', fontWeight: '600' }}>
          {news.title}
        </h3>

        <p className="text-gray-700 mb-4">{news.description}</p>

        <button
          className="text-[#1A4065] border-2 border-[#1A4065] px-6 py-2 rounded-[15px] hover:bg-[#1A4065] hover:text-white transition-all"
          style={{ fontWeight: '600' }}
        >
          Read More
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#F1EDE8] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#A7B867] text-center mb-6" style={{ fontSize: '1rem', letterSpacing: '0.1em' }}>
            EVENTS & NEWS
          </p>
          <h1 className="text-[#1A4065] text-center mb-12" style={{ fontSize: '3rem', fontFamily: 'Georgia, serif' }}>
            Latest Information & Events
          </h1>

          {/* Tabs */}
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-8 py-3 rounded-[15px] transition-all ${
                activeTab === 'upcoming'
                  ? 'bg-[#1A4065] text-white'
                  : 'bg-white text-[#1A4065] hover:bg-gray-100'
              }`}
              style={{ fontWeight: '600' }}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-8 py-3 rounded-[15px] transition-all ${
                activeTab === 'past'
                  ? 'bg-[#1A4065] text-white'
                  : 'bg-white text-[#1A4065] hover:bg-gray-100'
              }`}
              style={{ fontWeight: '600' }}
            >
              Past Events
            </button>
            <button
              onClick={() => setActiveTab('news')}
              className={`px-8 py-3 rounded-[15px] transition-all ${
                activeTab === 'news'
                  ? 'bg-[#1A4065] text-white'
                  : 'bg-white text-[#1A4065] hover:bg-gray-100'
              }`}
              style={{ fontWeight: '600' }}
            >
              News
            </button>
          </div>
        </div>
      </section>

      {/* Filter/Search Section */}
      <section className="bg-white py-8 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Category Filter */}
            {activeTab !== 'news' && (
              <div className="flex items-center gap-2 flex-1">
                <Filter size={20} color="#1A4065" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value as EventCategory)}
                  className="flex-1 px-4 py-3 rounded-[15px] border-2 border-gray-300 bg-white text-[#1A4065]"
                  style={{ fontWeight: '600' }}
                >
                  <option value="all">All Categories</option>
                  <option value="online">Online</option>
                  <option value="offline">In-Person</option>
                  <option value="fundraising">Fundraising</option>
                  <option value="volunteer">Volunteer</option>
                  <option value="visit">Site Visit</option>
                </select>
              </div>
            )}

            {/* Search Box */}
            <div className="flex items-center gap-2 flex-1">
              <Search size={20} color="#1A4065" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by keyword..."
                className="flex-1 px-4 py-3 rounded-[15px] border-2 border-gray-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          {activeTab === 'upcoming' && (
            <>
              <div className="grid md:grid-cols-2 gap-8">
                {filterEvents(upcomingEvents).map((event) => renderEventCard(event))}
              </div>
              {filterEvents(upcomingEvents).length === 0 && (
                <div className="text-center py-16">
                  <p className="text-gray-600" style={{ fontSize: '1.125rem' }}>
                    No events found matching your criteria
                  </p>
                </div>
              )}
            </>
          )}

          {activeTab === 'past' && (
            <>
              <div className="grid md:grid-cols-2 gap-8">
                {filterEvents(pastEvents).map((event) => renderEventCard(event))}
              </div>
              {filterEvents(pastEvents).length === 0 && (
                <div className="text-center py-16">
                  <p className="text-gray-600" style={{ fontSize: '1.125rem' }}>
                    No events found matching your criteria
                  </p>
                </div>
              )}
            </>
          )}

          {activeTab === 'news' && (
            <>
              <div className="grid md:grid-cols-2 gap-8">
                {filterNews(newsItems).map((news) => renderNewsCard(news))}
              </div>
              {filterNews(newsItems).length === 0 && (
                <div className="text-center py-16">
                  <p className="text-gray-600" style={{ fontSize: '1.125rem' }}>
                    No news found matching your criteria
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-[#A7B867] py-16 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <Mail size={48} color="white" className="mx-auto mb-4" />
            <h2 className="mb-4" style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif', color: 'white' }}>
              Get Event Updates First
            </h2>
            <p className="text-white/90" style={{ fontSize: '1.125rem' }}>
              Receive new events and news by email
            </p>
          </div>

          <form onSubmit={handleNewsletterSubmit} className="max-w-xl mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-4 rounded-[15px] text-gray-800"
                style={{ fontSize: '1rem' }}
              />
              <button
                type="submit"
                className="bg-[#FFCA0A] text-[#1A4065] px-8 py-4 rounded-[15px] hover:bg-[#FFD940] transition-all"
                style={{ fontWeight: '600', fontSize: '1rem' }}
              >
                Subscribe
              </button>
            </div>
            <p className="text-white/70 text-sm mt-4 text-center">
              Approximately once a month. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}