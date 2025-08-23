const Facility = () => {
    return (
        <>
            <section>
                <div className='bg-white relative h-[30%] w-full justify-center items-center px-10 py-10'>
                    <div className='relative gray-box w-[95vw] h-1/4'>
                        <div className='text-white text-3xl text-left font-roboto px-20 pb-5 pt-5'>
                            Facility
                        </div>
                        <div className="font-bricolage">
                            <div className='text-white text-lg text-left px-20 pb-5'>
                                We’re fortunate to have access to a well-equipped facility that includes multiple machining tools, a full fabrication workshop, and a dedicated storage closet—enabling our team to design, build, and maintain our robot efficiently.
                            </div>
                            <div className="p-2"></div>
                            <div className='text-white text-lg text-left px-20 pb-5'>
                                Thanks to the generous support of our sponsors, we’ve been able to purchase and utilize these essential machines, tools, and workspace resources. Their contributions empower us to innovate, improve our builds, and keep our components organized and competition-ready.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="bg-white relative h-[30%] w-full px-7 pt-5 pb-10 flex">
                    <div>
                        <div className='text-black text-3xl text-left font-roboto px-10 pb-5 pt-5'>
                            Location
                        </div>
                        <div className="font-bricolage">
                            <div className="text-lg text-left font-bold px-10">San Ramon Valley High School</div>
                            <div className="text-lg text-left font-bold px-10">501 Danville Blvd, Danville, CA 94526</div>
                            <div className="p-2"></div>
                            <div className="text-lg text-left px-10 max-w-[90%]">We’re right next to the stadium parking lot. If you're having trouble finding us on campus, simply look for the entrance to the stadium parking—our workshop and facility entrance are conveniently located immediately beside it.</div>
                        </div>
                    </div>
                    <div className="py-10 px-10">
                        <img src="/facility1.png" className="w-[240vw]"></img>
                    </div>
                </div>
            </section>
            <section>
                <div className="bg-white relative w-full px-7 pb-15 flex items-center justify-center">
                    <img src="/facility2.png" className="w-[95%]"></img>
                </div>
            </section>
        </>
    )
}

export default Facility;