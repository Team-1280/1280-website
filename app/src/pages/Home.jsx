import './Home.css'

const Home = () => (
    <> 
        <section className="hero-image">
            <div className='hero-opacity'>
                <div className='hero-text'>
                    <div className='hero-heading'>
                        San Ramon Valley Robotics – FRC Team 1280
                    </div>
                    <div className='hero-subheading'>
                        Inspiring Innovation. Building Leaders. Competing with Heart.
                    </div>
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
        <section>
            <div className='home-about-split-container'>
                <div className='part image-half-about-split'>
                    <img src='./team.png' alt="Team 1280"/>
                </div>
                <div className='text-half-about-split'>
                    <div className='about-split-heading'>
                        Who We Are
                    </div>
                    <div className='about-split-text'>
                        FRC Team 1280, the Ragin' C’ Biscuits, is a student-led robotics team based at San Ramon Valley High School in Danville, California. 
                        Since 2004, we’ve empowered high school students to explore STEM through hands-on engineering, programming, business, and leadership challenges.

                    </div>
                </div>
            </div>
        </section>
    </>   
)

export default Home;