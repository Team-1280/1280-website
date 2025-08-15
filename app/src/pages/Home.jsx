import TeamImage from '/home4.png'
import { Link } from 'react-router-dom';

const Home = () => (
    <> 
        <section className="relative min-h-screen w-screen">
            <div className="absolute inset-0 bg-[url('/home4.png')] bg-cover bg-center opacity-80 z-0"></div>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-white flex items-center min-w-full justify-center min-h-screen">
                <h1 className="absolute top-[30%] left-1/2 min-w-full text-6xl font-orbitron text-yellow-500 transform -translate-x-1/2 text-center">FRC Team 1280 - Ragin' C Biscuits</h1>
                <p className="absolute top-[50%] left-1/2 text-3xl text-white font-orbitron transform -translate-x-1/2 text-center">San Ramon Valley Robotics</p>
            </div>
        </section>
        <section>
            <div className="relative min-h-screen w-screen">
                <div className="absolute inset-0 bg-white flex px-4 pt-12 pb-12">
                    <img src="/home3.png" className='pr-8'></img>
                    <div className='absolute top-[7%] bg-[#717070] left-[22%] justify-center grid items-center w-6/8 h-1/4'>
                        <div className='text-[#fcc307] font-bold text-3xl pt-6 px-4 pb-2'>Team 1280 - Who We Are</div>
                        <div className='text-white text-lg px-4 pb-60'>FRC Team 1280, the Ragin' C’ Biscuits, is a student-led robotics team based at San Ramon Valley High School in Danville, California. Since 2004, we’ve empowered high school students to explore STEM through hands-on engineering, programming, business, and leadership challenges.</div>
                    </div>
                    <div className='absolute top-[37%] left-[22%] bg-[#717070] justify-center grid items-center w-3/4 h-1/4'>
                        <div className='text-[#fcc307] font-bold text-3xl pt-6 px-4 pb-2'>San Ramon Valley High School</div>
                        <div className='text-white text-lg px-4 pb-60'>Team 1280 primarily recruits students from San Ramon Valley High School (SRVHS) but we also accept any students from the San Ramon Valley Unified School District (SRVUSD). </div>
                    </div>
                    <div className='absolute top-[67%] left-[22%] bg-[#717070] justify-center grid items-center w-3/4 h-1/4'>
                        <div className='text-[#fcc307] font-bold text-3xl pt-6 px-4 pb-2'>FIRST Robotics</div>
                        <div className='text-white text-lg px-4 pb-60'>FIRST is an international organization which uses competitive robotics as a vehicle for promoting science & technology. FIRST allows high school students to work side by side with professional mentors to learn skills ranging from engineering to marketing, animation and business.</div>
                    </div>
                </div>
            </div>
        </section>
    </>   
)

export default Home;