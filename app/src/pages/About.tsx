import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <link rel="canonical" href="https://www.team1280.com/about" />
      <title>About | Team 1280</title>

      {/* 1. About Header Hero Section (Shrunk Height) */}
      <section className="relative h-[45vh] lg:h-[55vh] w-full overflow-hidden bg-[#1f1e23] flex flex-col items-center justify-center text-center px-4 md:px-12 border-b border-zinc-800/80">
        
        {/* Background Image Layer */}
        <img 
          src="/TrainingTeam.jpg" 
          alt="Team 1280 Training" 
          className="absolute inset-0 w-full h-full object-cover object-center z-0 filter brightness-[0.35]"
        />

        {/* Blueprint Grid Overlay Pattern */}
        <div 
          className="absolute inset-0 opacity-5 pointer-events-none z-10" 
          style={{
            backgroundImage: `
              linear-gradient(to right, #fcc307 1px, transparent 1px),
              linear-gradient(to bottom, #fcc307 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        ></div>

        {/* Header Content Wrapper */}
        <div className="relative z-20 max-w-4xl flex flex-col items-center gap-4">
          {/* Section Subtitle */}
          <div className="flex items-center gap-2 text-[#fcc307] text-xs md:text-sm font-bold uppercase tracking-widest font-mono">
            <span>Our History & Mission</span>
          </div>

          {/* Large Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-tight">
            WHO WE <span className="text-[#fcc307]">ARE</span>
          </h1>

          {/* Thin Centered Yellow Divider */}
          <div className="w-16 h-[2px] bg-[#fcc307] my-2"></div>

          {/* Contextualized Subtext Description */}
          <p className="text-zinc-300 text-sm md:text-base font-medium max-w-2xl leading-relaxed">
            Operating out of Danville, California since 2004, FRC Team 1280 combines intense competitive engineering with sustainable community outreach to build a lasting foundational platform for technical skillsets.
          </p>
        </div>
      </section>


      {/* 2. History Detail Section */}
      <section className="bg-[#151417] py-16 md:py-24 px-4 md:px-12 border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Story Content */}
          <div className="flex flex-col items-start text-left">
            {/* Top Tagline/Label with Accent Line */}
            <div className="flex items-center gap-2 text-zinc-400 text-xs font-bold uppercase tracking-widest font-mono mb-3">
              <span className="w-6 h-[2px] bg-[#fcc307]"></span>
              Created by Students, for Students
            </div>

            {/* Section Headline */}
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
              THE SPIRIT OF <span className="text-[#fcc307]">1280</span>
            </h2>

            {/* Horizontal Divider Line */}
            <div className="w-16 h-[2px] bg-[#fcc307] mt-4 mb-6"></div>

            {/* Narrative Content */}
            <p className="text-zinc-300 text-sm md:text-base font-medium leading-relaxed max-w-xl mb-4">
              Founded in 2004 by a group of San Ramon Valley High School (SRVHS) students, Team 1280 began as an independent effort without direct ties to the school. Over time, the team’s dedication and success earned the support of the SRVHS administration. Today, Team 1280 operates out of the SRVHS auto shop, where our machines, tools, and materials are housed. In accordance with school policy, our coaches are members of the SRVHS faculty.
            </p>
            <p className="text-zinc-300 text-sm md:text-base font-medium leading-relaxed max-w-xl mb-4">
              Team 1280 competes in the FIRST Robotics Competition (FRC) and has earned multiple blue banners, including our most recent win at the 2020 Monterey Bay Regional.
            </p>
            <p className="text-zinc-300 text-sm md:text-base font-medium leading-relaxed max-w-xl">
              Our members are not only committed to robotics but also to academic excellence. Many take multiple Advanced Placement (AP) courses and maintain high grades. The team is also proud to have a level of diversity that exceeds the demographic makeup of SRVHS, fostering an inclusive and collaborative environment for all.
            </p>
          </div>

          {/* Right Column: Workshop Image (Zoomed Base) */}
          <div className="w-full aspect-[4/3] bg-zinc-900 rounded-sm overflow-hidden shadow-2xl border border-zinc-800/50 flex items-center justify-center relative group">
            <img 
              src="/Training.jpg" 
              alt="Team 1280 Training" 
              className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </section>


      {/* 3. Integrated Pillars Section */}
      <section className="bg-[#1f1e23] pt-16 md:pt-24 border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 md:px-12 mb-16 md:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side Content */}
            <div className="flex flex-col items-start text-left">
              {/* Top Tagline with Accent Line */}
              <div className="flex items-center gap-2 text-zinc-400 text-xs font-bold uppercase tracking-widest font-mono mb-3">
                <span className="w-6 h-[2px] bg-[#fcc307]"></span>
                What We Do
              </div>

              {/* Section Headline */}
              <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
                Design. Build.<br />
                Program. <span className="text-[#fcc307]">Compete.</span>
              </h2>

              {/* Divider Line */}
              <div className="w-16 h-[2px] bg-[#fcc307] mt-4 mb-6"></div>

              {/* Core Description Text */}
              <p className="text-zinc-300 text-sm md:text-base font-medium leading-relaxed max-w-xl mb-6">
                Every season, our team takes on the intense 6-week FRC build challenge completely from the ground up. Students manage the entire engineering lifecycle: mapping custom chassis geometries, fabricating raw aluminum components with manual and CNC machinery, wiring clean power distribution networks, and writing complex automated code in Java to give the machine life. 
              </p>

              {/* Internal Quote Block */}
              <div className="border-l-4 border-[#fcc307] pl-4 my-2 max-w-lg">
                <p className="text-white font-mono text-sm font-bold italic leading-snug">
                  &ldquo;Hey I&apos;m an inventor, what do inventors do? We look at the same problems as everyone else, but see them differently!&rdquo;
                </p>
              </div>
            </div>

            {/* Right Side Image (Zoomed Base) */}
            <div className="w-full aspect-[4/3] bg-zinc-900 rounded-sm overflow-hidden shadow-2xl border border-zinc-800/50 relative group">
              <img 
                src="/Thinking.JPG" 
                alt="Students designing and programming" 
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Bottom Yellow Section */}
        <div className="bg-[#fcc307] py-16 px-4 md:px-12 text-center flex flex-col items-center justify-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-3">
            <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#1f1e23]">
              Be Part of the Next Chapter
            </h3>
            <p className="text-[#1f1e23]/90 text-sm sm:text-base font-bold tracking-wide max-w-xl">
              Join us, support us, or partner with us.
            </p>
            
            <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
              <Link
                to="/join"
                className="px-8 py-3 bg-[#1f1e23] text-[#fcc307] font-black uppercase text-xs sm:text-sm tracking-widest rounded-sm hover:bg-black transition-all shadow-md"
              >
                Join the Team
              </Link>
              <Link
                to="/donate"
                className="px-8 py-3 bg-transparent border-2 border-[#1f1e23] text-[#1f1e23] font-black uppercase text-xs sm:text-sm tracking-widest rounded-sm hover:bg-[#1f1e23]/10 transition-all"
              >
                Sponsor Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;