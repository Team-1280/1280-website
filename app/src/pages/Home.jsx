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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </section>
        <section>
            <div className='action-calls'>
                <button className='action-button'>
                    Donate to the Team
                </button>
                <button className='action-button'>
                    Learn About Us
                </button>
                <button className='action-button'>
                    Join the Team
                </button>
            </div>
        </section>
    </>   
)

export default Home;