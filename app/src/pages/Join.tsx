import { Link } from 'react-router-dom';

const Join = () => {
  return (
    <>
      <link rel="canonical" href="https://www.team1280.com/join" />
      <title>Join Us | Team 1280</title>

      {/* 1. Header Hero Section (Adapted from the Join RIT Racing style) */}
      <section className="relative h-[45vh] lg:h-[55vh] w-full overflow-hidden bg-[#151417] flex flex-col items-center justify-center text-center px-4 md:px-12 border-b border-zinc-800/80">
        
        {/* Background Image Layer */}
        <img 
          src="/Join1280.png" 
          alt="Team 1280 Teamwork" 
          className="absolute inset-0 w-full h-full object-cover object-center z-0 filter brightness-[0.25]"
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
        <div className="relative z-20 max-w-4xl flex flex-col items-center gap-2">
          {/* Section Subtitle */}
          <div className="flex items-center gap-2 text-zinc-400 text-xs md:text-sm font-bold uppercase tracking-widest font-mono">
            <span>Get Involved</span>
          </div>

          {/* Large Title Inspired by Banner */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-tight">
            JOIN <span className="text-[#fcc307]">TEAM 1280</span>
          </h1>

          {/* Thin Centered Yellow Divider */}
          <div className="w-16 h-[2px] bg-[#fcc307] my-2"></div>

          {/* Subtext Description */}
          <p className="text-zinc-300 text-sm md:text-base font-medium max-w-2xl leading-relaxed">
            We build robots. We build engineers. All majors, all skill levels — if you're ready to work, there's a place for you here.
          </p>
        </div>
      </section>

      {/* 2. Recruitment & Expectations Section */}
      <section className="bg-[#1f1e23] py-16 md:py-24 px-4 md:px-12 border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Information */}
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center gap-2 text-zinc-400 text-xs font-bold uppercase tracking-widest font-mono mb-3">
              <span className="w-6 h-[2px] bg-[#fcc307]"></span>
              No Experience Required
            </div>

            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
              WHO CAN <span className="text-[#fcc307]">JOIN?</span>
            </h2>

            <div className="w-16 h-[2px] bg-[#fcc307] mt-4 mb-6"></div>

            <p className="text-zinc-300 text-sm md:text-base font-medium leading-relaxed max-w-xl mb-4">
              Team 1280 welcomes all San Ramon Valley Unified School District students interested in engineering, programming, business, marketing, or design. We don't expect you to know how to code in Java or use a mill on day one; our returning members and mentors provide comprehensive hands-on training.
            </p>
            <p className="text-zinc-300 text-sm md:text-base font-medium leading-relaxed max-w-xl">
              What we do demand is commitment, a willingness to collaborate, and a solid work ethic. The FRC build season moves fast, and every single team member plays a critical role in bringing our robot to life.
            </p>
          </div>

          {/* Right Column: Imagery */}
          <div className="w-full aspect-[4/3] bg-zinc-900 rounded-sm overflow-hidden shadow-2xl border border-zinc-800/50 flex items-center justify-center relative group">
            <img 
              src="/Working.jpg" 
              alt="Hands-on Training at Team 1280" 
              className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* 3. Steps to Join / Dynamic Call to Action Section */}
      <section className="bg-[#151417] pt-16 md:pt-24 border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 md:px-12 mb-16 md:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side: Steps */}
            <div className="flex flex-col items-start text-left">
              <div className="flex items-center gap-2 text-zinc-400 text-xs font-bold uppercase tracking-widest font-mono mb-3">
                <span className="w-6 h-[2px] bg-[#fcc307]"></span>
                Next Steps
              </div>

              <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
                HOW TO <span className="text-[#fcc307]">GET STARTED</span>
              </h2>

              <div className="w-16 h-[2px] bg-[#fcc307] mt-4 mb-6"></div>

              <ul className="space-y-4 text-zinc-300 text-sm md:text-base font-medium max-w-xl mb-6">
                <li className="flex gap-3">
                  <span className="text-[#fcc307] font-mono font-bold">01.</span>
                  <span><strong>Come to an Info Meeting:</strong> We hold introductory orientation meetings at the beginning of the Fall semester in the SRVHS auto shop.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#fcc307] font-mono font-bold">02.</span>
                  <span><strong>Complete the Paperwork:</strong> Fill out school and team safety liability disclosures to clear yourself for lab and machinery access.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#fcc307] font-mono font-bold">03.</span>
                  <span><strong>Attend Pre-Season Training:</strong> Learn the basics of CAD, tool safety, machining, and control configurations before the build cycle kicks off.</span>
                </li>
              </ul>
            </div>

            {/* Right Side Image */}
            <div className="w-full aspect-[4/3] bg-zinc-900 rounded-sm overflow-hidden shadow-2xl border border-zinc-800/50 relative group">
              <img 
                src="/GetStarted.jpg" 
                alt="Students collaborating" 
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Bottom Contact / Interest Form Callout */}
        <div className="bg-[#fcc307] py-16 px-4 md:px-12 text-center flex flex-col items-center justify-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-3">
            <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#1f1e23]">
              Ready to build the future?
            </h3>
            <p className="text-[#1f1e23]/90 text-sm sm:text-base font-bold tracking-wide max-w-xl">
              Fill out our interest form or reach out directly to the team captains.
            </p>
            
            <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
              <a
                href="https://forms.gle/nZQozqsnRFCrM3tMA" // Replace with actual interest form link
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#1f1e23] text-[#fcc307] font-black uppercase text-xs sm:text-sm tracking-widest rounded-sm hover:bg-black transition-all shadow-md"
              >
                Interest Form
              </a>
              <Link
                to="/contact"
                className="px-8 py-3 bg-transparent border-2 border-[#1f1e23] text-[#1f1e23] font-black uppercase text-xs sm:text-sm tracking-widest rounded-sm hover:bg-[#1f1e23]/10 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Join;