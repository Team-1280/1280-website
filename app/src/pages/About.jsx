import './styles/About.css';

const About = () => (
    <>
        <section>
            <div className="w-full">
                <img src="/about.png" className="object-cover w-full"></img>
            </div>
        </section>
        <section>
            <div className='text-left bg-white relative h-[110vh] w-full pl-12'>
                <div className='px-10 pt-12 text-black text-5xl font-bold'>About Team 1280</div>
                <hr className="mx-10 my-8 border-gray-300 border-t-4 w-17/18"></hr>
                <div className="text-lg max-w-[90vw]">
                    <div className="px-10 text-gray-500">Founded in 2004 by a group of San Ramon Valley High School (SRVHS) students, Team 1280 began as an independent effort without direct ties to the school. Over time, the team’s dedication and success earned the support of the SRVHS administration. Today, Team 1280 operates out of the SRVHS auto shop, where our machines, tools, and materials are housed. In accordance with school policy, our coaches are members of the SRVHS faculty.</div>
                    <div className="p-4"></div>
                    <div className="px-10 text-gray-500">Team 1280 competes in the FIRST Robotics Competition (FRC) and has earned multiple blue banners, including our most recent win at the 2020 Monterey Bay Regional.</div>
                    <div className="p-4"></div>
                    <div className="px-10 text-gray-500">Our members are not only committed to robotics but also to academic excellence. Many take multiple Advanced Placement (AP) courses and maintain high grades. The team is also proud to have a level of diversity that exceeds the demographic makeup of SRVHS, fostering an inclusive and collaborative environment for all.</div>
                    <div className="p-6"></div>
                    <div className="px-10 font-bold text-gray-500">Training & Development</div>
                    <div className="p-3"></div>
                    <div className="px-10 text-gray-500"> We invest heavily in preparing our members for success both on and off the field.</div>
                    <div className="p-2"></div>
                    <ul class="list-disc text-gray-500 px-25">
                        <li>CAD & Design / Programming: Semester-long training programs with summer assignments to build skills ahead of the season.</li>
                        <li>Electrical / Fabrication: Multi-day hands-on training during the offseason to ensure new members are ready for the build season and can contribute confidently.</li>
                    </ul>
                </div>
            </div>
        </section>
    </>
)

export default About;