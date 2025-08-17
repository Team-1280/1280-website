import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <nav className="bg-[#1f1e23] text-white h-48">
            <div className='container max-w-full h-full flex flex-nowrap items-start'>
                <div className='w-full h-full px-8 py-5 flex flex-col items-start font-bricolage'>
                    <Link to='/' className='nav-item'>
                        <div className='text-lg mb-4 text-[#fcc307] font-bold w-auto whitespace-nowrap'>Team 1280 - The Ragin' C Biscuits</div>
                    </Link>
                    <div className='flex flex-col flex-row gap-12 text-center flex-nowrap'>
                        <div className='text-left'>
                            <Link to='/Join' className='nav-item'><div className='block mb-1'>Join Us</div></Link>
                            <Link to='/Contact' className='nav-item'><div className='block mb-1'>Resources</div></Link>
                            <Link to='/SponsorsDonors' className='nav-item'><div className='block mb-1'>Sponsors</div></Link>
                            <Link to='/Donate' className='nav-item'><div className='block mb-1'>Sponsor Us</div></Link>
                        </div>
                        <div className='text-center'>
                            <Link to='/About' className='nav-item'> <div className='mb-2'>About</div> </Link>
                            <div className='flex gap-8 flex-nowrap'>
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
                <div className='flex items-center justify-center max-w-none w-auto h-full'>
                    <img src='/footer2.png' className='max-w-none w-auto h-[90%]'></img>
                </div>
            </div>
        </nav>
    )
}

export default Footer;