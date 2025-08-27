const SponsorsDonors = () => {
    return (
    <>
        <div className="relative w-full">
            <img src='/sponsors1.png' className="absolute object-cover h-full min-w-[100%] -z-1"></img>
            <div className="h-20"></div>
            <div className="h-auto min-w-100 size-auto mx-[20dvw] bg-gray-600/65 backdrop-blur-[6px] flex flex-col items-center">
                <div className="relative text-white font-sans py-10">
                    <div className="px-20 py-5 text-[#fcc307] text-3xl font-bold">Thank You to Our Sponsors</div>
                    <div className="px-20 py-2 text-white text-base">Team 1280 would like to extend our deepest gratitude to the sponsors who make our work possible. Your generous support enables us to design, build, and compete with innovative robots, while also fostering STEM skills, teamwork, and leadership in our students.</div>
                    <div className="px-20 py-2 text-white text-base">Because of you, we are able to purchase essential tools and materials, maintain our workspace, and provide opportunities for students to learn engineering, programming, and fabrication. Beyond financial support, your belief in our mission inspires us to push boundaries and strive for excellence both on and off the field.</div>
                    <div className="px-20 py-2 text-white text-base">We are proud to represent our community and our sponsors at every competition, and we couldn’t do it without you. Thank you for being a vital part of Team 1280’s journey!</div>
                </div>
                <div className='relative grid grid-rows-3 grid-cols-3 w-[85%] h-auto gap-x-[10%] gap-y-10 pb-30'>
                    <img src='/ptsa-logo.png' className='w-full' alt="PTSA Logo"></img>
                    <img src='/site-council-logo.png' className='w-full' alt="Site Council Logo"></img>
                    <img src='/boosters-logo.png' className='w-full' alt="Academic Boosters Logo"></img>
                    <img src='/intuitive-logo.png' className='w-full' alt="Intuitive Logo"></img>
                    <img src='/gene-haas-logo.png' className='w-full' alt="Gene Haas Logo"></img>
                    <img src='/nasa-logo.png' className='w-full' alt="NASA Logo"></img>
                    <img src='/softdocs-logo.png' className='w-full' alt="Softdocs Logo"></img>
                    <img src='/tassajara-logo.png' className='w-full' alt="Tassajara Logo"></img>
                    <img src='/ll-logo.png' className='w-full' alt="LL Logo"></img>
                </div>
            </div>
            <div className="h-20"></div>
        </div>
    </>
    )
}

export default SponsorsDonors;