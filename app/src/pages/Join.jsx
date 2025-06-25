import './Join.css'

const Join = () => (
    <>
        <section>
            <div className='top-background'>
                <div className='top-opacity'>
                    <div className='top-heading'>
                        Interested? Join Our Team!
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
                <div className='middle-heading'>
                    Want to be a Mentor?
                </div>
                <div className='middle-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
        </section>
    </>
)

export default Join;