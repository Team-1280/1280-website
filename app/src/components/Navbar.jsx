import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="bg-[#1f1e23] text-white flex items-center px-0 py-0 justify-between h-24 box-border">
            <Link to='/' className='nav-item h-full flex justify-center items-center mx-10'>
                <img src='./logo.png' className="max-w-none w-auto h-[90%]"/>
                <span className="text-[#fcc307] ml-10 font-orbitron text-4xl text-center whitespace-nowrap">Ragin C' Biscuits</span>
            </Link>
            <ul className='text-white text-xl font-bold z-1000 text-balance space-x-10 px-10'>
                <Link to='/' className='nav-item'>Home</Link>
                <div className="dropdown">
                    <Link to='/About' className='drop-link'>About</Link>
                    <ul className='dropdown-content'>
                        <Link to='/Leadership'>Leadership</Link>
                        <Link to='/Mentors'>Mentors</Link>
                        <Link to='/First'>FIRST®</Link>
                        <Link to='/Facility'>Facility</Link>
                        <Link to='/Outreach'>Outreach</Link>
                    </ul>
                </div>
                <Link to='/Join'>Join Us</Link>
                <Link to='/Contact'>Contact</Link>
                <Link to='/SponsorsDonors' className='drop-link'>Sponsors</Link>
                <Link to='/Donate'>Sponsor Us</Link>
            </ul>
        </nav>
    )
}
export default Navbar;