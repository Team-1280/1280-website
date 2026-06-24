import { Link } from 'react-router-dom';
import './Navbar.css';
import NavbarLinks from './NavbarLinks';
import NavbarDropdown from './NavbarDropdown';

const Navbar = () => (
  <nav className="bg-[#1f1e23] text-white flex items-center px-6 lg:px-12 justify-between h-[80px] lg:h-[100px] box-border w-full relative z-[99]">
    
    {/* Logo Block - Scaled up for better visibility */}
    <Link
      to="/"
      className="h-full flex items-center"
    >
      <div className="h-20 w-auto flex items-center justify-center overflow-hidden">
        <img 
          src="/TeamLogo.png" 
          alt="Team Logo" 
          className="h-full w-auto object-contain opacity-95 hover:opacity-100 transition-opacity" 
        />
      </div>
    </Link>

    {/* Desktop links container */}
    <div className="hidden lg:flex flex-row items-center gap-x-8 text-white">
      <NavbarLinks />
    </div>

    {/* Mobile dropdown menu trigger */}
    <NavbarDropdown />

  </nav>
);

export default Navbar;