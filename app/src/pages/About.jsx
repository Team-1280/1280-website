import './styles/About.css'
import TeamImage from '/team.png'

const About = () => (
    <>
        <section className="banner-background">
            <div className='banner-opacity'>
                <div className='banner-heading'>
                    Who We Are
                </div>
                <div className='banner-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
        </section>
        <section>
            <div className='split-container'>
                <div className='half image-half'>
                    <img src={TeamImage} alt="Team 1280" />
                </div>
                <div className='text-half half'>
                    <div className='middle-heading'>
                    Our History
                    </div>
                    <div className='middle-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
            </div>
        </section>
    </>
)

export default About;