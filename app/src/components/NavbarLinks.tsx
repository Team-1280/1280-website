import { Link } from "react-router-dom";
import DropdownToggle from "./DropdownToggle";

const NavbarLinks = ({ isMobile }: { isMobile?: boolean }) => {
  return (
    <>
      <Link to="/" className="navbar-item nav-item">
        Home
      </Link>
      <DropdownToggle text="About" isMobile={isMobile}>
        <Link to="/about" className="navbar-item drop-link">
          About
        </Link>
        <Link to="/leadership">Leadership</Link>
        <Link to="/mentors">Mentors</Link>
        <Link to="/first">FIRST®</Link>
        <Link to="/facility">Facility</Link>
        <Link to="/outreach">Outreach</Link>
      </DropdownToggle>
      <DropdownToggle text="Resources" isMobile={isMobile}>
        <Link to="/calendar">Calendar</Link>
        <Link to="/contact">Contact</Link>
      </DropdownToggle>
      <Link to="/join" className="navbar-item">
        Join Us
      </Link>
      <Link to="/sponsors" className="navbar-item drop-link">
        Sponsors
      </Link>
      <Link to="/donate" className="navbar-item">
        Sponsor Us
      </Link>
    </>
  );
};

export default NavbarLinks;
