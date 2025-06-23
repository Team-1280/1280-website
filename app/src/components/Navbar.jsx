import './Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src='./logo.png' className='logo'/>
            <ul className='links'>
                <Link to='/' className='nav-item'>Home</Link>
                <Link to='/About' className='nav-item dropdown'>About</Link>
                    <ul className='drop-menu'>
                        <Link to='/About'>About Us</Link>
                        <Link to='/MeetTeam'>Meet the Team</Link>
                        <Link to='/Contact'>Contact</Link>
                    </ul>
                <Link to='/Outreach'>Outreach</Link>
                <Link to='/Resources'>Resources</Link>
            </ul>
        </nav>
    )
}
export default Navbar;