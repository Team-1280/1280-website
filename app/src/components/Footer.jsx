import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-[#1f1e23] overflow-auto max-h-[1/8vh]">
            <div className='text-[#fcc307] text-lg py-4 px-6 text-left'>Team 1280 - The Ragin' C Biscuits</div>
            <div className='flex flex-wrap justify-between text-white items-start px-6 text-center pb-4'>
                <div className='grid gap-1'>
                    <div className=''>Join Us</div>
                    <div className=''>Resources</div>
                    <div className=''>Sponsors</div>
                    <div className=''>Sponsor Us</div>
                </div>
                <div className='grid gap-1'>
                    <div className=''>About</div>
                    <div className='flex gap-2'>
                        <div className='grid gap-1'>
                            <div className=''>The Team</div>
                            <div className=''>Leaders</div>
                            <div className=''>Facility</div>
                        </div>
                        <div className='grid gap-1'>
                            <div className=''>FIRST</div>
                            <div className=''>Mentors</div>
                            <div className=''>About</div>
                        </div>
                    </div>
                </div>
                <div className='grid gap-1 items-start'>
                    <img src='/footer2.png' className='h-3/4 object-contain pl-24'></img>
                </div>
            </div>
        </div>
    )
}

export default Footer;