import './Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src='./logo.png' className='logo'/>
            <div className='links'>
                <Link to='/'>Home</Link>
                <Link to='/About'>About</Link>
                <Link to='/Outreach'>Outreach</Link>
                <Link to='/Resources'>Resources</Link>
            </div>
        </nav>
    )
}
export default Navbar;