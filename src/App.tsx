import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { DonatePage } from './pages/DonatePage';
import { AboutPage } from './pages/AboutPage';
import { EducationPage } from './pages/EducationPage';
import { ImpactPage } from './pages/ImpactPage';
import { GetInvolvedPage } from './pages/GetInvolvedPage';
import { EventsPage } from './pages/EventsPage';
import { NewSchoolProjectPage } from './pages/NewSchoolProjectPage';
import { EventDetailPage } from './pages/EventDetailPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<><Header /><HomePage /></>} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/about" element={<><Header /><AboutPage /></>} />
          <Route path="/education" element={<><Header /><EducationPage /></>} />
          <Route path="/impact" element={<><Header /><ImpactPage /></>} />
          <Route path="/get-involved" element={<><Header /><GetInvolvedPage /></>} />
          <Route path="/events" element={<><Header /><EventsPage /></>} />
          <Route path="/events/:eventId" element={<><Header /><EventDetailPage /></>} />
          <Route path="/new-school-project" element={<><Header /><NewSchoolProjectPage /></>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}