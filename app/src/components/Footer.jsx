import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-black text-white py-10 px-4">
            <div className='max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8'>
                <div className="flex flex-col space-y-2">
                    <h2 className='text-[#fcc307]'>Team 1280 - The Ragin' C Biscuits</h2>
                    <div className='hover:underline'>
                    Join Us
                    </div>
                    <div className='hover:underline'>
                    Resources
                    </div>
                    Sponsors
                    <div className='hover:underline'>
                    Sponsor Us
                    </div>
                </div>
                <div className="flex flex-col space-y-2">
                    <h2 className='text-[#fcc307]'>Team 1280 - The Ragin' C Biscuits</h2>
                    <div className='hover:underline'>
                    Join Us
                    </div>
                    <div className='hover:underline'>
                    Resources
                    </div>
                    Sponsors
                    <div className='hover:underline'>
                    Sponsor Us
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;