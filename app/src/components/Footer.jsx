import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <nav className="bg-[#1f1e23] text-white px-4 py-4">
            <div className='container mx-auto flex flex-wrap md:items-center items-start'>
                <div className='w-full md:w-3/5'>
                    <Link to='/' className='nav-item'> <div className='text-lg mb-4 text-[#fcc307]'>Team 1280 - The Ragin' C Biscuits</div> </Link>
                    <div className='flex flex-col md:flex-row md:space-x-12 text-center'>
                        <div className='mb-6 md:mb-0'>
                            <Link to='/Join' className='nav-item'> <div className='block mb-1'>Join Us</div> </Link>
                            <Link to='/Resources' className='nav-item'> <div className='block mb-1'>Resources</div> </Link>
                        </div>
                        <div className='mb-6 md:mb-0'>
                            <Link to='/SponsorsDonors' className='nav-item'> <div className='block mb-1'>Sponsors</div> </Link>
                            <Link to='/Donate' className='nav-item'> <div className='block mb-1'>Sponsor Us</div> </Link>
                        </div>
                        <div className='block mb-2'>
                            <Link to='/About' className='nav-item'> <div className=''>About</div> </Link>
                            <div className='flex space-x-8'>
                                <div className=''>
                                    <Link to='/Leadership' className='nav-item'> <div className='block mb-1'>Leaders</div> </Link>
                                    <Link to='/Facility' className='nav-item'> <div className='block mb-1'>Facility</div> </Link>
                                </div>
                                <div className='inline-block'>
                                    <Link to='/First' className='nav-item'>  <div className='block mb-1'>FIRST</div> </Link>
                                    <Link to='/Mentors' className='nav-item'> <div className='block mb-1'>Mentors</div> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full flex items-center justify-center mt-6 md:w-2/5 space-x-4 md:mt-0'>
                    <img src='/footer2.png' className='object-contain'></img>
                </div>
            </div>
        </nav>
    )
}

export default Footer;