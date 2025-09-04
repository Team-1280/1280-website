import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="bg-[#1f1e23] text-white flex items-center px-0 py-0 justify-between h-30 box-border overflow-x-clip">
            <Link to='/' className='nav-item h-full flex justify-center items-center mx-10'>
                <img src='./logo.png' className="max-w-none w-auto h-[75%]"/>
                <span className="text-[#fcc307] ml-10 font-orbitron text-4xl text-center whitespace-nowrap">Ragin' C Biscuits</span>
            </Link>
            <ul className='h-auto text-white text-xl font-bold font-sans z-1000 gap-x-10 gap-y-2 pr-10 flex flex-wrap items-center justify-center'>
                <Link to='/' className='navbar-item nav-item'>Home</Link>
                <Link to='/Calendar' className='navbar-item drop-link'>Calendar</Link>
                <div className="dropdown">
                    <Link to='/About' className='navbar-item drop-link'>About</Link>
                    <ul className='dropdown-content'>
                        <Link to='/Leadership'>Leadership</Link>
                        <Link to='/Mentors'>Mentors</Link>
                        <Link to='/First'>FIRST®</Link>
                        <Link to='/Facility'>Facility</Link>
                        <Link to='/Outreach'>Outreach</Link>
                    </ul>
                </div>
                <Link to='/Join' className='navbar-item'>Join Us</Link>
                <Link to='/Contact' className='navbar-item'>Contact</Link>
                <Link to='/SponsorsDonors' className='navbar-item drop-link'>Sponsors</Link>
                <Link to='/Donate' className='navbar-item'>Sponsor Us</Link>
            </ul>
        </nav>
    )
}
export default Navbar;