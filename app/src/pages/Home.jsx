import './Home.css'
import HeroTextImg from '../assets/1280.png'

const Home = () => (
    <> 
        <section className="hero-image">
            <div className='hero-opacity'>
                <div className='hero-text'>
                    <img src={HeroTextImg} alt="Team 1280" />
                </div>
            </div>
        </section>
        <section className="mission-background">
            <div className='mission-heading'>
                Our Mission
            </div>
            <div className='mission-text'>
                blah blah mission stuff here
            </div>
        </section>
    </>   
)

export default Home;