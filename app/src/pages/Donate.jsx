import './styles/Donate.css'

const Donate = () => {
    return (
    <>
            <section>
                {/*<div className="relative h-screen w-screen bg-center bg-[url(/donate.png)] ">*/}
                    <div className="h-[250vh] absolute top-25 left-60 size-230 bg-gray-500/80 z-0"></div>
                    <div className="h-[250vh] relative z-10 text-white"></div>
                        <div className='donate-heading'>
                         Support Team 1280 – Become a Sponsor
                        </div>
                        <div className='donate-text'>
                            Team 1280, the Ragin’ C’ Biscuits, is a student-led robotics team based at San Ramon Valley High School. 
                            We do not charge membership dues, so we rely entirely on the generosity of companies and parents to fund our operations each year
                            — from tools and materials to competition fees and outreach events.
                        </div>
                        <div className='donate-page-banner-text'>
                            Team 1280 is a tax-deductible program under the San Ramon Valley Unified School District (SRVUSD).
                            Tax ID: 68-0273221
                            Donation receipts and certificates available upon request.
                        </div>
                        <a href="https://sanramon.myschoolcentral.com" target="_blank" rel="noopener noreferrer">
                            <div className='donate-page-donate-button'>
                                Donate Today!
                            </div>
                        </a>
                    {/*</div>*/}
            </section>
            <section>
                    <div className='corporate-sponsor-heading'>
                        Corporate Sponsorship
                    </div>
                    <div className='corporate-sponsor-text'>
                        We welcome support from local businesses and national companies who believe in empowering the next generation of innovators.
                        Your sponsorship directly funds:
                        <div className='spacer-sponsor'></div>
                        <div className='new-line-sponsor'>
                            - Competition robot materials and tools
                        </div>
                        <div className='new-line-sponsor'>
                            - Event registration and travel
                        </div>
                        <div className='new-line-sponsor'>
                            - Community STEM outreach and workshops
                        </div>
                        <div className='new-line-sponsor'>
                            - Safety equipment and training resources
                        </div>
                        <div className='spacer-sponsor'></div>
                        Want to support us or learn more?
                        Email us at: sanramonvalleyrobotics@gmail.com
                        Tax certificate available upon request.
                    </div>
            </section>
            <section>
                    <div className='parent-contribution-heading'>
                        Parent Contributions
                    </div>
                    <div className='parent-contribution-text'>
                        Parents play a critical role in helping our team thrive. Your donations help cover:
                        <div className='spacer-sponsor'></div>
                        <div className='new-line-sponsor'>
                            Robot parts and electronics
                        </div>
                        <div className='new-line-sponsor'>
                            Safety gear for the shop
                        </div>
                        <div className='new-line-sponsor'>
                            Competition logistics and travel
                        </div>
                        <div className='new-lin-sponsor'>
                            Meals during events and build season
                        </div>
                        <div className='spacer-sponsor'></div>
                        We appreciate every dollar—small or large—as it helps give our students access to life-changing STEM experiences without financial barriers.
                        Suggested donation: $350–$500 per season
                        (But any amount is welcome!)
                        For questions, contact: sanramonvalleyrobotics@gmail.com
                    </div>
            </section>
        <section>
                <div>WIP</div>
            </section></>
    )
}

export default Donate;