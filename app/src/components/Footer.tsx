import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1f1e23] text-white border-t border-zinc-800 w-full font-sans">
      {/* Changed parent layout to flex row to allow global centering of elements */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 flex flex-col lg:flex-row justify-between items-start gap-10">
        
        {/* Left Section: Team Info & Address */}
        <div className="flex flex-col gap-4 max-w-sm w-full lg:w-1/4">
          <div className="flex items-center">
            <h3 className="text-xl font-black tracking-wider text-zinc-100">FRC TEAM 1280</h3>
          </div>
          <div className="text-zinc-400 text-sm space-y-1 leading-relaxed">
            <p className="font-bold text-zinc-300">SRVHS Robotics</p>
            <p>San Ramon Valley High School</p>
            <p>SRVHS Career and Technical Education Building</p>
            <a 
              href="mailto:sanramonvalleyrobotics@gmail.com" 
              className="text-[#fcc307] hover:underline block pt-2 font-medium"
            >
              sanramonvalleyrobotics@gmail.com
            </a>
          </div>
        </div>

        {/* Center Section: Link Columns brought together AND perfectly centered on the page */}
        <div className="flex flex-1 justify-start lg:justify-center gap-16 md:gap-24 w-full">
          
          {/* Get Involved Links */}
          <div className="flex flex-col gap-3 min-w-[140px]">
            <h4 className="text-[#fcc307] text-sm font-black uppercase tracking-wider">Get Involved</h4>
            <div className="flex flex-col gap-3 mt-3">
              <Link to="/join" className="text-zinc-400 hover:text-white text-sm transition-colors">Join Us</Link>
              <Link to="/sponsors" className="text-zinc-400 hover:text-white text-sm transition-colors">Sponsors</Link>
              <Link to="/donate" className="text-zinc-400 hover:text-white text-sm transition-colors">Donate / Sponsor Us</Link>
              <Link to="/contact" className="text-zinc-400 hover:text-white text-sm transition-colors">Contact</Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3 min-w-[120px]">
            <h4 className="text-[#fcc307] text-sm font-black uppercase tracking-wider">Quick Links</h4>
            <div className="flex flex-col gap-3 mt-3">
              <Link to="/" className="text-zinc-400 hover:text-white text-sm transition-colors">Home</Link>
              <Link to="/about" className="text-zinc-400 hover:text-white text-sm transition-colors">About</Link>
              <Link to="/team" className="text-zinc-400 hover:text-white text-sm transition-colors">Team</Link>
            </div>
          </div>

        </div>

        {/* Far Right Section: Expanded Logo Grid */}
        <div className="flex flex-col pt-2 w-full lg:w-1/4 justify-center items-center lg:items-end">
          <div className="flex items-center gap-6 max-w-[400px] md:max-w-[560px]">
            
            {/* Image 1: FIRST Logo */}
            <div className="h-20 w-auto flex items-center justify-center">
              <img 
                src="/FIRST.avif" 
                alt="FIRST Logo" 
                className="h-full object-contain opacity-85 hover:opacity-100 transition-opacity" 
              />
            </div>

            {/* Image 2: SRVHS Wolf Logo */}
            <div className="h-24 w-auto flex items-center justify-center">
              <img 
                src="/srv-logo.png" 
                alt="SRVHS Logo" 
                className="h-full object-contain opacity-85 hover:opacity-100 transition-opacity" 
              />
            </div>

            {/* Image 3: Team Horse Logo */}
            <div className="h-32 w-auto flex items-center justify-center">
              <img 
                src="/TeamLogo.png" 
                alt="Team Horse Logo" 
                className="h-full object-contain opacity-85 hover:opacity-100 transition-opacity" 
              />
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Row: School & Team Info */}
      <div className="bg-[#18171b] py-6 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-medium text-zinc-500">
          <p>© {currentYear} SRVHS Robotics</p>
          <p>FRC Team 1280 - The Ragin’ C-Biscuits</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;