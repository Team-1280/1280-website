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
                    Team 1280 – Ragin’ C’ Biscuits – is a student-led robotics team based in the San Ramon Valley Unified School District. We compete in the FIRST Robotics Competition (FRC), where high school students design, build, and program industrial-grade robots to solve real-world engineering challenges.
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
                        Founded in 2004, Team 1280 has grown from a small group of robotics enthusiasts into a competitive, community-focused team. We are proud to have a long-standing presence in FRC and a tradition of mentorship, outreach, and technical excellence.
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className='women-stem-background'>
                <div className='women-stem-opacity'>
                    <div className='women-stem-heading'>
                        Women in STEM
                    </div>
                    <div className='women-stem-text'>
                        <span className='about-bold-text'>
                        We believe that robotics should be inclusive and empowering for everyone. 
                        Team 1280 is committed to supporting and uplifting women in STEM through structured training, mentorship, and leadership opportunities.
                        <div className='about-newline'>
                            <div className='women-initiative-heading'>
                            Our Initiatives:
                            </div>
                        </div>
                        </span>
                        <div className='about-newline'>
                        <span className='about-bold-text'>Women's Training Sessions:</span> Hands-on workshops in machining, CAD, programming, and electrical, led by experienced mentors and current team members.
                        </div>
                        <div className='about-newline'>
                        <span className='about-bold-text'>Mentorship Program:</span> Pairing new female members with current team members
                        </div>
                        <div className='about-newline'>
                        <span className='about-bold-text'>Outreach Partnerships: </span>Collaborations with Girl Scout troops, all-girl FLL teams, and school clubs to foster early engagement in STEM.
                        </div>
                        <div className='about-newline'>
                        <span className='about-bold-text'>Leadership Encouragement: </span>Focused coaching, visibility, and recognition for female team leads and captains.
                        </div>
                        <div className='about-newline'>
                        <span className='about-bold-text'>Cultural Awareness:</span> Workshops and team discussions to address unconscious bias and create a respectful, welcoming environment for all.
                        </div>
                    </div>
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
                    Team Shop
                    </div>
                    <div className='middle-text'>
                    Our shop is the heart of our design and fabrication process. Located at SRVHS and supported by experienced mentors, it gives Team 1280 members hands-on experience with industry-standard tools, machinery, and safety procedures.
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className='major-equipment-background'>
                <div className='major-equipment-heading'>
                    Major Equipment
                </div>
                <div className='major-equipment-subheading'>
                    <span className='about-bold-text'>Vertical Band Saw and Horizontal Band Saw </span>– for general cutting of metal and plastic stock
                    <div className='about-newline'>
                    <span className='about-bold-text'>Two Manual Bridgeport Mills </span>– precision milling of components and custom brackets
                    </div>
                    <div className='about-newline'>
                    <span className='about-bold-text'>Grizzly Gunsmith Lathe </span>– ideal for turning shafts, spacers, and other cylindrical parts
                    </div>
                    <div className='about-newline'>
                    <span className='about-bold-text'>Bench Grinder </span>– used for edge finishing and tool sharpening
                    </div>
                    <div className='about-newline'>
                    <span className='about-bold-text'>Jigsaw</span>, Circular Saw, and Battery-Powered Drills & Impact Drivers
                    </div>
                    <div className='about-newline'>
                    <span className='about-bold-text'>Hand Tools </span>– including hacksaws, staple gun, calipers, rivet guns, screwdrivers, wrenches, and more
                    </div>
                </div>
                <div className='advanced-cap-heading'>
                    Advanced Capabilities
                </div>
                <div className='advanced-cap-text'>
                    <div className='about-newline'>
                    <span className='about-bold-text'>Shapeoko 5 Pro CNC Router </span>– used primarily for aluminum and polycarbonate plates, bellypans, and structural elements
                    </div>
                    <div className='about-newline'>
                    <span className='about-bold-text'>Access to MIG Welder</span> – for occasional welded assemblies
                    </div>
                    <div className='about-newline'>
                    <span className='about-bold-text'>CNC Mill (offsite) </span>– operated by one of our mentors and used occasionally to manufacture small or high-precision parts beyond our in-house capabilities
                    </div>
                </div>
                <div className='training-safety-heading'>
                Training and Safety
                </div>
                <div className='training-safety-subheading'>
                    <span className='about-bold-text'>All students must complete tool-specific safety training and hands-on practice before using any machinery. The shop is always supervised by trained mentors, and PPE is required during all fabrication activities.</span>
                </div>
            </div>
        </section>
    </>
)

export default About;