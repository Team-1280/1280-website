import './Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src='./logo.png' className='logo'/>
            <ul className='links'>
                <Link to='/' className='nav-item'>Home</Link>
                <div className="dropdown">
                    <Link to='/About' className='drop-link'>About</Link>
                    <ul className='dropdown-content'>
                        <Link to='/About'>About Us</Link>
                        <Link to='/MeetTeam'>Meet the Team</Link>
                        <Link to='/Contact'>Contact</Link>
                    </ul>
                </div>
                <Link to='/Outreach'>Outreach</Link>
                <div className="dropdown">
                    <Link to='/Resources' className='drop-link'>Resources</Link>
                    <ul className='dropdown-content'>
                        <Link to='/RobotEngineering'>Robot/Engineering</Link>
                        <Link to='/Join'>Join Us</Link>
                        <Link to='/News'>News and Events</Link>
                    </ul>
                </div>
            </ul>
        </nav>
    )
}
export default Navbar;