import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { lazy } from 'react'

import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import TopScroll from './components/TopScroll.jsx'

const About = lazy(() => import('./pages/About.jsx'))
const Calendar = lazy(() => import('./pages/Calendar.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const Donate = lazy(() => import('./pages/Donate.jsx'))
const Facility = lazy(() => import('./pages/Facility.jsx'))
const First = lazy(() => import('./pages/First.jsx'))
const Home = lazy(() => import('./pages/Home.jsx'))
const Join = lazy(() => import('./pages/Join.jsx'))
const Leadership = lazy(() => import('./pages/Leadership.jsx'))
const Mentors = lazy(() => import('./pages/Mentors.jsx'))
const News = lazy(() => import('./pages/News.jsx'))
const Outreach = lazy(() => import('./pages/Outreach.jsx'))
const Resources = lazy(() => import('./pages/Resources.jsx'))
const RobotEngineering = lazy(() => import('./pages/RobotEngineering.jsx'))
const Sponsors = lazy(() => import('./pages/Sponsors.jsx'))

function App() {
  return (
    <Router>
      <TopScroll />
      <Navbar />
      <div className="container max-w-full">
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
      </div>
      <Footer />
    </Router>
  )
}

export default App
