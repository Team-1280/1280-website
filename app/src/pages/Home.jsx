import './Home.css'
import TeamImage from '/team.png'

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
                    About Us
                </button>
                <button className='action-button'>
                    Join the Team
                </button>
            </div>
        </section>
        <section>
            <div className='about-sample-background'>
                <div className='about-sample-heading'>
                    Who We Are
                </div>
                <div className='about-sample-subheading'>
                    FRC Team 1280, the Ragin' C’ Biscuits, is a student-led robotics team based at San Ramon Valley High School in Danville, California. 
                    Since 2004, we’ve empowered high school students to explore STEM through hands-on engineering, programming, business, and leadership challenges.
                </div>
                <div className='about-sample-button'>
                    Learn More
                </div>
            </div>
        </section>
        <section>
            <div className='robot-sample-split-container'>
                <div className='robot-sample-half robot-sample-image-half'>
                    <img src={TeamImage} alt="Team 1280" />
                </div>
                <div className='robot-sample-text-half half'>
                    <div className='robot-sample-middle-heading'>
                        Robot Design & Competition
                    </div>
                    <div className='robot-sample-middle-text'>
                        We build a new robot each year to compete in the FIRST Robotics Competition. 
                        Students learn CAD, fabrication, electrical wiring, and software development as they take on real-world engineering challenges.
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className='outreach-sample-background outreach-sample-opacity'>
                <div className='outreach-sample-box'>
                    <div className='outreach-sample-heading'>
                        Community Outreach
                    </div>
                    <div className='outreach-sample-subheading'>
                        We host STEM workshops, mentor younger teams, and work with local schools and organizations to spread 
                        excitement about robotics and innovation.
                    </div>
                    <div className='outreach-sample-button'>
                        Outreach
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className='leadership-sample-split-container'>
                <div className='leadership-sample-text-half half'>
                    <div className='leadership-sample-middle-heading'>
                        Student Leadership
                    </div>
                    <div className='leadership-sample-middle-text'>
                        Every student on Team 1280 has the chance to lead — 
                        whether it’s managing a subteam, speaking with judges, 
                        planning outreach, or running training sessions.
                    </div>
                    <button className='leadership-sample-button'>
                        Our Team
                    </button>
                </div>
                <div className='leadership-sample-half leadership-sample-image-half'>
                    <img src={TeamImage} alt="Team 1280" />
                </div>
            </div>
        </section>
    </>   
)

export default Home;