import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => (
  <nav className="bg-[#1f1e23] text-white h-48">
    <div className="container max-w-full h-full flex flex-nowrap items-start overflow-hidden">
      <div class="absolute ml-95 mt-5 h-40 w-px bg-[#fcc307]"></div>
      <div className="w-full h-full px-8 py-8 flex flex-col items-start z-100 font-sans whitespace-nowrap">
        <div className="flex flex-row gap-83">
          <Link to="/" className="nav-item">
            <div className="text-lg mb-5 text-[#fcc307] font-bold w-auto">Team 1280</div>
          </Link>
          <div className="text-lg mb-5 text-[#fcc307] font-bold w-auto">About</div>
        </div>
        <div className="flex flex-row gap-12 text-left flex-nowrap">
          <div>
            <Link to="/calendar" className="nav-item"><div className="block mb-5">Calendar</div></Link>
            <Link to="/contact" className="nav-item"><div className="block mb-5">Contact</div></Link>
          </div>
          <div>
            <Link to="/sponsors" className="nav-item"><div className="block mb-5">Sponsors</div></Link>
            <Link to="/donate" className="nav-item"><div className="block mb-5">Sponsor Us</div></Link>
          </div>
          <div>
            <Link to="/join" className="nav-item"><div className="block mb-5">Join Us</div></Link>
          </div>
          <div>
            <div className="flex gap-12 flex-nowrap ml-21">
              <div className="">
                <Link to="/about" className="nav-item">
                  {' '}
                  <div className="block mb-5">The Team</div>
                  {' '}
                </Link>
                <Link to="/first" className="nav-item">
                  {' '}
                  <div className="block mb-5">FIRST</div>
                  {' '}
                </Link>
              </div>
              <div className="inline-block">
                <Link to="/leadership" className="nav-item">
                  {' '}
                  <div className="block mb-5">Leaders</div>
                  {' '}
                </Link>
                <Link to="/mentors" className="nav-item">
                  {' '}
                  <div className="block mb-5">Mentors</div>
                  {' '}
                </Link>
              </div>
              <div className="inline-block">
                <Link to="/facility" className="nav-item">
                  {' '}
                  <div className="block mb-5">Facility</div>
                  {' '}
                </Link>
                <Link to="/outreach" className="nav-item">
                  {' '}
                  <div className="block mb-5">Outreach</div>
                  {' '}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center max-w-none w-auto h-full">
        <img src="/footer2.png" className="max-w-none w-auto h-[80%]"></img>
      </div>
    </div>
  </nav>
)

export default Footer
