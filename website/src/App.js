import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from '../pages/Home';
import About from '../pages/About';
import Outreach from '../pages/Outreach';
import Resources from '../pages/Resources';

function App(){
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/" element={<About />} />
          <Route path = "/" element={<Outreach />} />
          <Route path = "/" element={<Resources />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App()