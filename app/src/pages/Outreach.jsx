import './styles/Outreach.css';

const Outreach = () => {
    return (
    <>
        <section className="relative w-full h-auto">
            <img src="/outreach-banner.png" className="object-cover w-full h-auto"/>
            <div className="absolute inset-x-1/4 inset-y-0 size-auto flex items-center text-white text-2xl text-center pointer-events-auto text-balance">
                As a dedicated FRC team, we aim to excel in competition while promoting STEM education and the FIRST mission in our community. We participate in local events, mentor new FLL teams, and remain committed to inspiring curiosity and fostering growth in STEM for all ages.
            </div>
        </section>
        <section className='text-left bg-white relative h-auto w-full px-24 py-18 min-w-160'>
            <div className='text-black text-5xl font-bold whitespace-nowrap'>Outreach Events</div>
            <hr className="my-8 border-gray-300 border-t-4"></hr>
            <div className='bg-[#717070] px-10 py-10 text-white text-lg'>
                In addition to our ongoing programs, our team participates in a variety of one-off or annual events that connect us with the local community. These events often include robot demonstrations, hands-on STEM activities, and opportunities for community members of all ages to learn about engineering and FIRST.
            </div>
        </section>
        <section className='bg-white relative w-full h-auto flex flex-col gap-15'>
            <div className="size-full flex flex-row justify-center-safe items-center gap-10">
                <div className="relative w-auto h-100 grow-0">
                    <img src="/bg-logo.png" className="max-w-none h-full opacity-50" alt="Background Logo" />
                    <div className="absolute inset-0 size-full flex flex-col justify-center items-center text-black text-xl px-[25%] text-center gap-5">
                        <div className="font-bold">Science Nights</div>
                        <p>Our team regularly attends elementary school science nights, where students can interact with our robot, explore engineering concepts, and see STEM in action.</p>
                    </div>
                </div>
                <img src='/outreach1.png' className='h-[50dvh]' alt="Outreach 1"></img>
            </div>
            <div className="size-full flex flex-row justify-center-safe items-center gap-10">
                <div className="relative w-auto h-100 grow-0">
                    <img src="/bg-logo.png" className="max-w-none h-full opacity-50" alt="Background Logo" />
                    <div className="absolute inset-0 size-full flex flex-col justify-center items-center text-black text-xl px-[25%] text-center gap-5">
                        <div className="font-bold">Library Events</div>
                        <p>At the Danville Library, we introduce younger students to the world of FIRST through engaging robot demonstrations and fun, interactive activities.</p>
                    </div>
                </div>
                <img src='/outreach2.png' className='h-[50dvh]' alt="Outreach 2"></img>
            </div>

            <div className="relative">
                <img src="/bg-logo.png" className="absolute h-[60vh] top-260 left-[10%] opacity-80" alt="Background Logo" />
                <div
                    className="absolute top-0 left-0 w-full h-full flex px-20 pb-5 z-10"
                >
                    <div className="text-black text-xl mx-80 px-5 ml-80 p-4">
                        <div class="absolute top-290 left-30 mr-190 text-center">
                            <div className="font-bold">Girl Scout Gold Award/STEM Night</div>
                            <div className="p-2"></div>
                        <p>As part of a Girl Scout Gold Award, we developed activities for children to explore STEM concepts while also providing opportunities to drive our robot. We receive similar requests from many local groups and are always excited to share our passion for robotics.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative">
                <img src="/bg-logo.png" className="absolute h-[60vh] left-[10%] opacity-80" alt="Background Logo" />
                <div
                    className="absolute top-0 left-0 w-full h-full flex px-20 pb-5 z-10"
                >
                    <div className="text-black text-xl mx-80 px-5 ml-80 p-4">
                        <div class="text-center">
                            <div className="font-bold">Veterans’ Hall Outreach </div>
                            <div className="p-2"></div>
                        <p>Every year, we showcase our robot, equipment, and designs at the Veterans Hall during Veterans Day. This event frequently garners local news coverage and allows us to share our work with a broad audience.</p>
                        </div>
                    </div>
                </div>
            </div>
            <img src='/outreach3.png' className='absolute h-[60vh] top-[50%] left-[70%] -translate-x-1/2' alt="Outreach 3"></img>
            <img src='/outreach4.png' className='absolute h-[60vh] top-[75%] left-[70%] -translate-x-1/2' alt="Outreach 4"></img>
        </section>
        <section className='text-left bg-white relative h-auto w-full px-24 py-18 min-w-160'>
            <div className='text-black text-5xl font-bold whitespace-nowrap'>Outreach Programs</div>
            <hr className="my-8 border-gray-300 border-t-4"></hr>
            <div className='bg-[#717070] px-10 py-10 text-white text-lg'>
                Beyond one-time events, our team is committed to ongoing outreach programs that foster STEM education and strengthen connections within our community.
            </div>
        </section>
        <section className='text-left bg-white relative h-400 w-full flex flex-col items-center mb-10'>
            <img src="/bg-logo.png" className="absolute w-auto h-full max-w-none opacity-25" alt="Background Logo" />
            <div className="absolute w-full h-full flex flex-col text-black text-xl text-center justify-evenly">
                <div className="w-full h-100 flex flex-row justify-evenly items-center px-20">
                    <img src='/fll-logo.png' className='w-auto h-full max-w-none' alt="FLL Logo"></img>
                    <div className="h-full aspect-square flex flex-col justify-center items-center gap-5">
                        <div className="font-bold">First Lego League</div>
                        <p>Our team has partnered with local elementary schools to help launch two new FLL teams at Alamo Elementary School for the 2025–26 season. We are dedicated to sharing our knowledge, mentoring students, and promoting the values of STEM and FIRST to inspire the next generation of innovators.</p>
                    </div>
                </div>
                <div className="w-full h-100 flex flex-row justify-evenly items-center px-20">
                    <img src='/srv-logo.png' className='w-auto h-full max-w-none' alt="SRV Logo"></img>
                    <div className="h-full aspect-square flex flex-col justify-center items-center gap-5">
                        <div className="font-bold">Robotics Class & Club</div>
                        <p>We help organize and support the robotics class and club at our school and in the community. These programs give students hands-on experience with design, building, and programming, fostering teamwork and problem-solving skills that extend beyond the classroom.</p>
                    </div>
                </div>
                <div className="w-full h-100 flex flex-row justify-evenly items-center px-20">
                    <img src='/outreach5.png' className='w-auto h-full max-w-none' alt="Outreach 5"></img>
                    <div className="h-full aspect-square flex flex-col justify-center items-center gap-5">
                        <div className="font-bold">Comrades Program</div>
                        <p>We work closely with our high school’s special education program, known as the Comrades. Our members host regular lunch sessions where students learn programming concepts and apply them using VEX robots, providing both technical skills and an inclusive, collaborative learning environment.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Outreach;