import './styles/GrayBox.css';

const Home = () => (
    <>
        <section className="relative h-[50dvw] w-full">
            <div className="absolute inset-0 bg-[url('/home4.png')] bg-cover bg-center opacity-80 z-0">
                <div className="absolute inset-0 bg-black/60"></div>
            </div>
            <div className="relative flex flex-col items-center justify-center size-full text-center gap-10 overflow-hidden text-balance">
                <h1 className="text-6xl font-medium font-orbitron text-yellow-500">FRC Team 1280 - Ragin' C Biscuits</h1>
                <p className="text-4xl font-medium font-orbitron text-white">San Ramon Valley Robotics</p>
            </div>
        </section>
        <div className="relative w-full overflow-x-hidden bg-white flex px-12 py-12 h-225">
            <div className="min-w-200 flex flex-nowrap">
                <img src="/home3.png" className=''></img>
                <div className="mx-16 font-sans flex flex-col justify-around items-center">
                    <div className='gray-box px-6 pt-6 pb-0 h-[25%]'>
                        <div className='text-[#fcc307] font-bold text-3xl mb-3'>Team 1280 - Who We Are</div>
                        <div className='text-white text-lg'>FRC Team 1280, the Ragin' C Biscuits, is a student-led robotics team based at San Ramon Valley High School in Danville, California. Since 2004, we’ve empowered high school students to explore STEM through hands-on engineering, programming, business, and leadership challenges.</div>
                    </div>
                    <div className='gray-box px-6 pt-6 pb-0 h-[25%]'>
                        <div className='text-[#fcc307] font-bold text-3xl mb-3'>San Ramon Valley High School</div>
                        <div className='text-white text-lg'>Team 1280 primarily recruits students from San Ramon Valley High School (SRVHS) but we also accept any students from the San Ramon Valley Unified School District (SRVUSD). </div>
                    </div>
                    <div className='gray-box px-6 pt-6 pb-0 h-[25%]'>
                        <div className='text-[#fcc307] font-bold text-3xl mb-3'>FIRST Robotics</div>
                        <div className='text-white text-lg'>FIRST is an international organization which uses competitive robotics as a vehicle for promoting science & technology. FIRST allows high school students to work side by side with professional mentors to learn skills ranging from engineering to marketing, animation and business.</div>
                    </div>
                </div>
            </div>
        </div>
    </>
)

export default Home;