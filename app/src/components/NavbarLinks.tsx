import { Link } from 'react-router-dom';
import DropdownToggle from './DropdownToggle';

const NavbarLinks = ({ isMobile }: { isMobile?: boolean }) => {
  const linkClass = isMobile
    ? 'navbar-item w-full text-center py-2'
    : 'navbar-item nav-link';

  return (
    <>
      <Link to="/" className={linkClass}>Home</Link>
      <Link to="/about" className={linkClass}>About</Link>
      <Link to="/team" className={linkClass}>Team</Link>
      <Link to="/sponsors" className={linkClass}>Sponsors</Link>

      {/* Get Involved */}
      <DropdownToggle text="Get Involved" isMobile={isMobile}>
        <Link to="/join" className="navbar-item py-2 text-center">
          Join the Team
        </Link>
        <Link to="/donate" className="navbar-item py-2 text-center">
          Donate / Sponsor Us
        </Link>
        <Link to="/contact" className="navbar-item py-2 text-center">
          Contact Us
        </Link>
      </DropdownToggle>

      {/* CTA button */}
      <Link
        to="/join"
        className={
          isMobile
            ? 'navbar-item join-us-btn w-full text-center mt-2'
            : 'navbar-item join-us-btn'
        }
      >
        Join Us
      </Link>
    </>
  );
};

export default NavbarLinks;