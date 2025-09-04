import './styles/GrayBox.css';

const Home = () => (
    <>
        <section className="relative h-[50dvw] w-full">
            <div className="absolute inset-0 bg-[url('/home4.png')] bg-cover bg-center opacity-80 z-0">
                <div className="absolute inset-0 bg-black/60"></div>
            </div>
            <div className="relative flex flex-col items-center justify-center size-full text-center gap-10 overflow-hidden text-balance">
                <h1 className="text-6xl font-medium font-orbitron text-[#fcc307]">FRC Team 1280 - Ragin' C Biscuits</h1>
                <p className="text-4xl font-medium font-orbitron text-white">San Ramon Valley Robotics</p>
            </div>
        </section>
          <div className="flex justify-center text-6xl mt-10 mb-10 font-roboto text-black">Upcoming Events</div>
          <div className="relative overflow-hidden flex justify-center" style={{ height: '600px' }}>
  <iframe
    src="https://calendar.google.com/calendar/embed?src=db38ca2aab875da4ff3bc4e7af4c985c247b632324125cf886fbfd6d50262684%40group.calendar.google.com&ctz=America%2FLos_Angeles"
    className="border-0 w-[80%] h-full"
    allowFullScreen
    title="Google Calendar"
  />
</div>
            <div className="relative w-full overflow-x-hidden bg-white flex justify-center px-12 py-12 h-235">
            <div className="min-w-200 flex flex-nowrap max-w-[76rem] mx-auto">
                <img src="/home3.png" className=''></img>
                <div className="mx-16 flex flex-col justify-around items-center">
                    <div className='gray-box h-[25%]'>
                        <div className='gray-box-heading'>Team 1280 - Who We Are</div>
                        <div className='text-white text-lg'>FRC Team 1280, the Ragin' C Biscuits, is a student-led robotics team based at San Ramon Valley High School in Danville, California. Since 2004, we’ve empowered high school students to explore STEM through hands-on engineering, programming, business, and leadership challenges.</div>
                    </div>
                    <div className='gray-box h-[25%]'>
                        <div className='gray-box-heading'>San Ramon Valley High School</div>
                        <div className='text-white text-lg'>Team 1280 primarily recruits students from San Ramon Valley High School (SRVHS) but we also accept any students from the San Ramon Valley Unified School District (SRVUSD). </div>
                    </div>
                    <div className='gray-box h-[25%]'>
                        <div className='gray-box-heading'>FIRST Robotics</div>
                        <div className='text-white text-lg'>FIRST is an international organization which uses competitive robotics as a vehicle for promoting science & technology. FIRST allows high school students to work side by side with professional mentors to learn skills ranging from engineering to marketing, animation and business.</div>
                    </div>
                </div>
            </div>
        </div>
    </>
)

export default Home;