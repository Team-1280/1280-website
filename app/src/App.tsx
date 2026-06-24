import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react'; // Added Suspense import

import Footer from './components/Footer.tsx';
import Navbar from './components/Navbar.tsx';
import TopScroll from './components/TopScroll.tsx';

const Home = lazy(() => import('./pages/Home.tsx'));
const About = lazy(() => import('./pages/About.tsx'));
const Team = lazy(() => import('./pages/Team.tsx'));
const Sponsors = lazy(() => import('./pages/Sponsors.tsx'));

const Join = lazy(() => import('./pages/Join.tsx'));
const Donate = lazy(() => import('./pages/Donate.tsx'));
const Contact = lazy(() => import('./pages/Contact.tsx'));

function App() {
  return (
    <Router>
      <TopScroll />
      <Navbar />

      <main className="container max-w-full">
        {/* Wrap your lazy-loaded routes with Suspense */}
        {/* fallback handles the loading state while the chunk files load */}
        <Suspense fallback={
          <div className="min-h-screen bg-[#1f1e23] flex items-center justify-center text-[#fcc307] font-mono text-sm">
            LOADING TEAM 1280...
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/join" element={<Join />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </Router>
  );
}

export default App;