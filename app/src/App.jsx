import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import TopScroll from './components/TopScroll.jsx'
import About from './pages/About.jsx'
import Calendar from './pages/Calendar.jsx'
import Contact from './pages/Contact.jsx'
import Donate from './pages/Donate.jsx'
import Facility from './pages/Facility.jsx'
import First from './pages/First.jsx'
import Home from './pages/Home.jsx'
import Join from './pages/Join.jsx'
import Leadership from './pages/Leadership.jsx'
import Mentors from './pages/Mentors.jsx'
import News from './pages/News.jsx'
import Outreach from './pages/Outreach.jsx'
import Resources from './pages/Resources.jsx'
import RobotEngineering from './pages/RobotEngineering.jsx'
import Sponsors from './pages/Sponsors.jsx'

function App() {
  return (
    <Router>
      <TopScroll />
      <Navbar />
      <main className='container max-w-full'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/about' element={<About />} />
          <Route path='/outreach' element={<Outreach />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/join' element={<Join />} />
          <Route path='/leadership' element={<Leadership />} />
          <Route path='/news' element={<News />} />
          <Route path='/robot-engineering' element={<RobotEngineering />} />
          <Route path='/sponsors' element={<Sponsors />} />
          <Route path='/donate' element={<Donate />}/>
          <Route path='/mentors' element={<Mentors />}/>
          <Route path='/facility' element={<Facility />}/>
          <Route path='/first' element={<First />}/>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;