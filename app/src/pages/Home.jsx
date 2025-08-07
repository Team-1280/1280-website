import TeamImage from '/team.png'
import { Link } from 'react-router-dom';

const Home = () => (
    <> 
        <section className="relative min-h-screen w-screen">
            <div className="absolute inset-0 bg-[url('/team.png')] bg-cover bg-center opacity-70 z-0"></div>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-white flex items-center min-w-full justify-center min-h-screen">
                <h1 className="absolute top-[30%] left-1/2 min-w-full text-6xl font-bold text-white transform -translate-x-1/2 text-center">FRC Team 1280 - Ragin' C Biscuits</h1>
                <p className="absolute top-[50%] left-1/2 text-3xl text-white font-bold transform -translate-x-1/2 text-center">San Ramon Valley Robotics</p>
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