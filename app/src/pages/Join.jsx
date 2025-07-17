import './styles/Join.css'

const Join = () => (
    <>
        <section>
            <div className='top-background'>
                <div className='top-opacity'>
                    <div className='top-heading'>
                        Interested? Join Our Team!
                    </div>
                    <div className='top-subheading'>
                        Team 1280 – the Ragin’ C’ Biscuits – is always looking for passionate students and dedicated mentors who want to learn, build, and make a difference. Whether you're interested in engineering, programming, media, business, or outreach, there's a place for you on our team.
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className='half-container'>
                <div className='part image-part'>
                    <img src='./team.png' alt='Team 1280'/>
                </div>
                <div className='part text-part'>
                    <div className='right-heading'>
                        Become a Team Member
                    </div>
                    <div className='right-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <button className='join-button'>
                        Interest Form
                    </button>
                </div>
            </div>
        </section>
        <section>
            <div className='black-background'>
                <div className='split-mentor-reqs'>
                    <div className='mid-heading'>
                        Want to be a Mentor?
                    </div>
                    <div className="looking-for-heading">
                        Who We Are Looking For
                    </div>
                    <div className='mid-text'>
                        <ul>
                            <li>
                            Engineers (mechanical, electrical, software)
                            </li>
                            <li>
                            Designers (CAD, prototyping)
                            </li>
                            <li>
                            Programmers (Java, Python, embedded systems)
                            </li>
                            <li>
                            Business professionals (fundraising, finance, organization)
                            </li>
                            <li>
                            Educators or community leaders passionate about STEM
                            </li>
                            <li>
                            Alumni or parents with time and interest
                            </li>
                        </ul>
                    </div>
                    <div className='mentors-do-heading'>
                        What Mentors Do
                    </div>
                    <div className='mentors-do-bullets'>
                        <ul>
                            <li>Provide technical guidance and real-world insight</li>
                            <li>Help students problem-solve and build critical thinking skills</li>
                            <li>Support subteams during meetings and competitions</li>
                            <li>Ensure safety and quality in shop and lab environments</li>
                            <li>Serve as role models for teamwork, perseverance, and leadership</li>
                        </ul>
                    </div>
                </div>
                <div className='commitment-mentor-heading'>
                    Time Commitment
                </div>
                <div className='commitment-mentor-text'>
                    Flexible, based on your availability. Some mentors come weekly, while others assist during build season, events, or competitions.
                </div>
                <div className='interested-mentor-heading'>
                    Interested?
                </div>
                <div className='interested-mentor-text'>
                    Contact us at sanramonvalleyrobotics@gmail.com
                </div>
            </div>
        </section>
        <section>
            
        </section>
    </>
)

export default Join;