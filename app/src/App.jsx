import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Outreach from './pages/Outreach.jsx'
import Resources from './pages/Resources.jsx'
import Contact from './pages/Contact.jsx'
import Join from './pages/Join.jsx'
import Leadership from './pages/Leadership.jsx'
import News from './pages/News.jsx'
import RobotEngineering from './pages/RobotEngineering.jsx'
import SponsorsDonors from './pages/SponsorsDonors.jsx'
import Footer from './components/Footer.jsx'
import Donate from './pages/Donate.jsx'
import Mentors from './pages/Mentors.jsx'
import Facility from './pages/Facility.jsx'
import First from './pages/First.jsx'

function App() {
  return (
    <Router>
      <Navbar />
      <main className='container max-w-full'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Outreach' element={<Outreach />} />
          <Route path='/Resources' element={<Resources />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Join' element={<Join />} />
          <Route path='/Leadership' element={<Leadership />} />
          <Route path='/News' element={<News />} />
          <Route path='/RobotEngineering' element={<RobotEngineering />} />
          <Route path='/SponsorsDonors' element={<SponsorsDonors />} />
          <Route path='/Donate' element={<Donate />}/>
          <Route path='/Mentors' element={<Mentors />}/>
          <Route path='/Facility' element={<Facility />}/>
          <Route path='/First' element={<First />}/>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;