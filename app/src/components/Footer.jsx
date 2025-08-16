import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <nav className="bg-[#1f1e23] text-white px-4 py-4">
            <div className='container max-w-full mx-auto flex flex-wrap md:items-center items-start'>
                <div className='w-full md:w-3/5'>
                    <div className='text-lg mb-4 text-[#fcc307] font-bold'>Team 1280 - The Ragin' C Biscuits</div>
                    <div className='flex flex-col md:flex-row md:space-x-12'>
                        <div className='mb-6 md:mb-0 text-left'>
                            <div className='block mb-1'>Join Us</div>
                            <div className='block mb-1'>Resources</div>
                            <div className='block mb-1'>Sponsors</div>
                            <div className='block mb-1'>Sponsor Us</div>
                        </div>
                        <div className='block mb-2 text-center'>
                            <div className=''>About</div>
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