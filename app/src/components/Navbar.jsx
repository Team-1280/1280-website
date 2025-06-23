import './Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src='./logo.png' className='logo'/>
            <div className='links'>
                <div className="dropdown">
                    <Link to='/'>Home</Link>
                    <div className='drop-menu'>

                    </div>
                </div>
                <Link to='/About'>About</Link>
                <Link to='/Outreach'>Outreach</Link>
                <Link to='/Resources'>Resources</Link>
            </div>
        </nav>
    )
}
export default Navbar;