import './Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-[#1f1e23] text-white flex items-center px-6 py-4 justify-between">
            <div className="flex items-center w-1/8">  
                <img src='./logo.png' className="w-1/2 h-auto"/>
                <span className="text-[#fcc307] pl-[100px] font-bold text-3xl text-center whitespace-nowrap">Ragin C' Biscuits</span>
            </div>  
            <ul className='text-white font-bold'>
                <Link to='/' className='nav-item'>Home</Link>
                <div className="dropdown">
                    <Link to='/About' className='drop-link'>About</Link>
                    <ul className='dropdown-content'>
                        <Link to='/Mentors'>Mentors</Link>
                        <Link to='/Leadership'>Leadership</Link>
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