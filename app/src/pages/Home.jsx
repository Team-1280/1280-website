import TeamImage from '/team.png'
import { Link } from 'react-router-dom';

const Home = () => (
    <> 
        <section className="relative min-h-screen w-screen">
            <div className="absolute inset-0 bg-[url('/team.png')] bg-cover bg-center opacity-70 z-0"></div>
            <div className="relative z-10 text-white flex items-center justify-center min-h-screen">
                <h1 className="absolute top-[40%] text-5xl font-bold text-stone-950">FRC Team 1280 - Ragin' C Biscuits</h1>
                <p className="absolute top-[55%] text-3xl text-stone-950 font-bold">San Ramon Valley Robotics</p>
            </div>
        </section>
        <section>
            <div className="relative min-h-screen w-screen">
                <div className="absolute inset-0 bg-white">
                </div>
            </div>
        </section>
    </>   
)

export default Home;