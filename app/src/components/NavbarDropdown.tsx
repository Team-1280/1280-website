import { useEffect, useState } from 'react';
import NavbarLinks from './NavbarLinks';
import './Navbar.css';
import { useLocation } from 'react-router-dom';

const NavbarDropdown = () => {
  const location = useLocation();
  const [isOpen, setOpen] = useState(false);

  useEffect(() => setOpen(false), [location]);

  return (
    <div className="lg:hidden z-[100] flex items-center relative">
      {/* Explicitly sized container button preventing squished dimensions */}
      <button
        onClick={() => setOpen(!isOpen)}
        className="w-8 h-8 flex items-center justify-center focus:outline-none"
        aria-label="Toggle Menu"
      >
        <img src="/menu.svg" className="w-full h-full object-contain" alt="Menu" />
      </button>

      {/* Dropdown Menu alignment fixed relative to navbar block boundaries */}
      {isOpen && (
        <ul className="rounded-md absolute top-10 right-0 min-w-[160px] h-auto bg-[#1f1e23] border border-zinc-800/80 p-2 flex flex-col gap-1 whitespace-nowrap text-center shadow-xl">
          <NavbarLinks isMobile />
        </ul>
      )}
    </div>
  );
};

export default NavbarDropdown;