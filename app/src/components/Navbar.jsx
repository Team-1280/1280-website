import { Link } from 'react-router-dom'
import './Navbar.css'
import NavbarLinks from './NavbarLinks'
import NavbarDropdown from './NavbarDropdown'

const Navbar = () => (
  <nav className="bg-[#1f1e23] text-white flex items-center px-0 py-0 justify-between h-17 lg:h-30 box-border overflow-x-clip">
    <Link to="/" className="nav-item h-full flex justify-center items-center mx-5 lg:mx-10">
      <img src="./logo.png" className="max-w-none w-auto h-[60%] lg:h-[75%]" />
      <span className="hidden lg:block text-[#fcc307] ml-10 font-orbitron text-4xl text-center whitespace-nowrap">Ragin' C Biscuits</span>
    </Link>
    <NavbarDropdown />
    <ul className="hidden dropdown-container lg:grid h-auto whitespace-nowrap text-white text-xl font-bold font-sans z-[20] gap-x-10 gap-y-2 pr-10 grid-flow-col grid-rows-3 lg:grid-rows-2 xl:grid-rows-1 items-center justify-center">
      <NavbarLinks />
    </ul>
  </nav>
)

export default Navbar
