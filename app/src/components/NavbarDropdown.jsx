import { useEffect, useState } from 'react'
import NavbarLinks from './NavbarLinks'
import './Navbar.css'
import { useLocation } from 'react-router-dom'

const NavbarDropdown = () => {
  const location = useLocation()
  const [isOpen, setOpen] = useState(false)

  // menu should close after navigation
  useEffect(() => setOpen(false), [location])

  return (
    <div className="lg:hidden max-w-none z-100 w-auto h-[50%] pr-5 relative">
      <img src="./menu.svg" className="lg:hidden max-w-none w-auto h-full float-right" onClick={() => setOpen(!isOpen)} />
      {isOpen && (
        <ul className="rounded-md absolute top-full right-5 min-w-40 h-auto bg-[#1f1e23] whitespace-nowrap flex flex-col [&>a]:p-2 [&>div]:p-2 whitespace-pre text-center">
          <NavbarLinks isMobile />
        </ul>
      )}
    </div>
  )
}

export default NavbarDropdown
