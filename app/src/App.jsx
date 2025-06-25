import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Outreach from './pages/Outreach.jsx'
import Resources from './pages/Resources.jsx'
import Contact from './pages/Contact.jsx'
import Join from './pages/Join.jsx'
import MeetTeam from './pages/MeetTeam.jsx'
import News from './pages/News.jsx'
import RobotEngineering from './pages/RobotEngineering.jsx'
import SponsorsDonors from './pages/SponsorsDonors.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <Router>
      <Navbar />
      <main className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Outreach' element={<Outreach />} />
          <Route path='/Resources' element={<Resources />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Join' element={<Join />} />
          <Route path='/MeetTeam' element={<MeetTeam />} />
          <Route path='/News' element={<News />} />
          <Route path='/Engineering' element={<RobotEngineering />} />
          <Route path='/Sponsors' element={<SponsorsDonors />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;