import './Footer.css'

const Footer = () => {
    return (
        <nav className="bg-[#1f1e23] text-white px-4 py-4">
            <div className='container mx-auto flex flex-wrap md:items-center items-start'>
                <div className='w-full md:w-3/5'>
                    <div className='text-lg mb-4 text-[#fcc307]'>Team 1280 - The Ragin' C Biscuits</div>
                    <div className='flex flex-col md:flex-row md:space-x-12 text-center'>
                        <div className='mb-6 md:mb-0'>
                            <div className='block mb-1'>Join Us</div>
                            <div className='block mb-1'>Resources</div>
                            <div className='block mb-1'>Sponsors</div>
                            <div className='block mb-1'>Sponsor Us</div>
                        </div>
                        <div className='block mb-2'>
                            <div className=''>About</div>
                            <div className='flex space-x-8'>
                                <div className=''>
                                    <div className='block mb-1'>The Team</div>
                                    <div className='block mb-1'>Leaders</div>
                                    <div className='block mb-1'>Facility</div>
                                </div>
                                <div className='inline-block'>
                                    <div className='block mb-1'>FIRST</div>
                                    <div className='block mb-1'>Mentors</div>
                                    <div className='block mb-1'>About</div>
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