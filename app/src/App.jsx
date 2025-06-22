import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Outreach from './pages/Outreach.jsx'
import Resources from './pages/Resources.jsx'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Outreach' element={<Outreach />} />
        <Route path='/Resources' element={<Resources />} />
      </Routes>
    </Router>
  )
}

export default App;