import './Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
    <nav className="navbar">
        <div>TESTING NAVBAR</div>
        <div className="arrangement">
            <div className='links'>
                <Link to='/'>Home</Link>
                <Link to='/About'>About</Link>
                <Link to='/Outreach'>Outreach</Link>
                <Link to='/Resources'>Resources</Link>
            </div>
        </div>
    </nav>
}
export default Navbar;