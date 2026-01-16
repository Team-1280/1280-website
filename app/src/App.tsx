import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { lazy } from 'react';

import Footer from './components/Footer.tsx';
import Navbar from './components/Navbar.tsx';
import TopScroll from './components/TopScroll.tsx';

const About = lazy(() => import('./pages/About.tsx'));
const Calendar = lazy(() => import('./pages/Calendar.tsx'));
const Contact = lazy(() => import('./pages/Contact.tsx'));
const Donate = lazy(() => import('./pages/Donate.tsx'));
const Facility = lazy(() => import('./pages/Facility.tsx'));
const First = lazy(() => import('./pages/First.tsx'));
const Home = lazy(() => import('./pages/Home.tsx'));
const Join = lazy(() => import('./pages/Join.tsx'));
const Leadership = lazy(() => import('./pages/Leadership.tsx'));
const Mentors = lazy(() => import('./pages/Mentors.tsx'));
const News = lazy(() => import('./pages/News.tsx'));
const Outreach = lazy(() => import('./pages/Outreach.tsx'));
const Resources = lazy(() => import('./pages/Resources.tsx'));
const RobotEngineering = lazy(() => import('./pages/RobotEngineering.tsx'));
const Sponsors = lazy(() => import('./pages/Sponsors.tsx'));

function App() {
  return (
    <Router>
      <TopScroll />
      <Navbar />
      <main className="container max-w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/about" element={<About />} />
          <Route path="/outreach" element={<Outreach />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/join" element={<Join />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/news" element={<News />} />
          <Route path="/robot-engineering" element={<RobotEngineering />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/facility" element={<Facility />} />
          <Route path="/first" element={<First />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
