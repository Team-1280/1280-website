import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="bg-[#1f1e23] text-white flex items-center px-6 py-4 justify-between h-24">
            <div className="flex items-center w-auto h-full">
                <img src='./logo.png' className="w-auto h-[125%]"/>
                <span className="text-[#fcc307] pl-20 pr-20 font-bold text-4xl text-center whitespace-nowrap">Ragin C' Biscuits</span>
            </div>
            <ul className='text-white text-xl font-bold z-1000 text-balance space-x-10'>
                <Link to='/' className='nav-item'>Home</Link>
                <div className="dropdown">
                    <Link to='/About' className='drop-link'>About</Link>
                    <ul className='dropdown-content'>
                        <Link to='/Leadership'>Leadership</Link>
                        <Link to='/Mentors'>Mentors</Link>
                        <Link to='/First'>FIRST®</Link>
                        <Link to='/Facility'>Facility</Link>
                    </ul>
                </div>
                <Link to='/Join'>Join Us</Link>
                <div className="dropdown">
                    <Link to='/Resources' className='drop-link'>Resources</Link>
                    <ul className='dropdown-content'>
                        <Link to='/RobotEngineering'>Robot/Engineering</Link>
                        <Link to='/News'>News and Events</Link>
                        <Link to='/Contact'>Contact</Link>
                    </ul>
                </div>
                <Link to='/SponsorsDonors' className='drop-link'>Sponsors</Link>
                <Link to='/Donate'>Sponsor Us</Link>
            </ul>
        </nav>
    )
}
export default Navbar;