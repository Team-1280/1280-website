import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <link rel="canonical" href="https://www.team1280.com" />
      <title>Team 1280</title>
      
      {/* 1. Hero Section */}
      <section className="relative h-[75vh] lg:h-[90vh] w-full border-b border-zinc-800/80 overflow-hidden bg-[#1f1e23] flex items-center justify-center px-4 md:px-12">
        {/* Background Image */}
        <img 
          src="/SacTeamPhoto.jpg" 
          alt="FRC Team 1280 Group" 
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        
        {/* Full-width Dark Overlay Layer */}
        <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px] z-10"></div>

        {/* Content Box */}
        <div className="relative z-20 max-w-7xl w-full text-center flex flex-col items-center gap-2 pt-8">
          {/* Top Subheading Line */}
          <div className="flex items-center gap-4 text-[#fcc307] text-xs md:text-sm font-bold uppercase tracking-widest font-mono justify-center w-full">
            <span className="w-16 h-[2px] bg-[#fcc307]"></span>
            San Ramon Valley High School • Since 2004
            <span className="w-16 h-[2px] bg-[#fcc307]"></span>
          </div>

          {/* Single Line Team Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] font-black uppercase tracking-normal leading-none m-0 w-full whitespace-nowrap">
            <span className="text-white">FRC TEAM </span>
            <span className="text-[#fcc307]">1280</span>
          </h1>

          {/* Wide Description Paragraph */}
          <p className="mt-6 text-zinc-300 text-sm md:text-lg lg:text-xl font-medium max-w-4xl leading-relaxed mx-auto">
            FRC Team 1280 is San Ramon Valley High School's competitive robotics team, designing, fabricating, testing, and programming high-performance robots for the FIRST Robotics Competition.
          </p>

          {/* Action Buttons Group */}
          <div className="mt-8 flex flex-wrap gap-4 items-center justify-center w-full">
            {/* Join Button */}
            <Link 
              to="/join"
              className="flex items-center gap-2 px-8 py-4 bg-[#fcc307] text-[#1f1e23] font-black uppercase text-sm tracking-wider rounded-sm hover:bg-[#e2af05] transition-all shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Join the Team
            </Link>

            {/* Sponsor Button */}
            <Link 
              to="/donate"
              className="flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-zinc-500 text-white font-black uppercase text-sm tracking-wider rounded-sm hover:border-white hover:bg-white/5 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Sponsor Us
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Stats Highlight Section */}
      <section className="bg-[#151417] py-10 border-b border-zinc-800/80 px-4 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-4 text-center items-center divide-x divide-zinc-800/60">
          
          {/* Stat 1 */}
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl sm:text-4xl font-black text-[#fcc307] tracking-tight">Founded</h2>
            <p className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-widest font-mono mt-1">2004 • Danville, CA</p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col justify-center items-center px-2">
            <h2 className="text-2xl sm:text-4xl font-black text-[#fcc307] tracking-tight">Finalists</h2>
            <p className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-widest font-mono mt-1 text-center line-clamp-1">2026 SF District Event</p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl sm:text-4xl font-black text-[#fcc307] tracking-tight">60+</h2>
            <p className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-widest font-mono mt-1">Members</p>
          </div>

        </div>
      </section>

      {/* 3. About Overview Section */}
      <section className="bg-[#1f1e23] py-16 md:py-24 px-4 md:px-12 border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col items-start text-left">
            {/* Main Headline */}
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
              More Than A <br />
              <span className="text-[#fcc307]">Robotics Team</span>
            </h2> 

            {/* Accent Line */}
            <div className="w-16 h-[3px] bg-[#fcc307] mt-6 mb-6"></div>

            {/* Description Text */}
            <p className="text-zinc-300 text-sm md:text-base font-medium leading-relaxed max-w-xl">
              <p className="text-zinc-300 text-sm md:text-base font-medium max-w-2xl leading-relaxed">
                  Operating out of Danville, California since 2004, FRC Team 1280 brings together ambitious high school students to combine intense competitive engineering with sustainable community outreach, building a lasting foundation for the next generation of innovators.
              </p>
            </p>

            {/* Quote Block with Left Accent Line */}
            <div className="border-l-4 border-[#fcc307] pl-4 my-8 max-w-lg">
              <p className="text-white font-mono text-sm font-bold italic leading-snug">
                &ldquo;The Robot is only the beginning, the real product is the people who build it.&rdquo;
              </p>
            </div>

            {/* About Page Button */}
            <Link 
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#fcc307] text-[#1f1e23] font-black uppercase text-sm tracking-wider rounded-sm hover:bg-[#e2af05] transition-all shadow-lg"
            >
              About Team 1280
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Right Column: Embedded YouTube Video */}
          <div className="w-full aspect-video bg-black/40 rounded-sm overflow-hidden shadow-2xl border border-zinc-800/50">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/_luGhfS6h1E"
              title="FRC Team 1280 Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

        </div>
      </section>

      {/* 4. Call to Action Banner Section */}
      <section className="bg-[#fcc307] py-16 px-4 md:px-12 text-center flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-3">
          
          {/* CTA Title */}
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#1f1e23]">
            Join Us, and Help Build What&apos;s Next
          </h2>

          {/* CTA Subtitle */}
          <p className="text-[#1f1e23]/90 text-sm sm:text-base font-bold tracking-wide max-w-xl">
            All SRVUSD students are welcome. No prior experience required.
          </p>

          {/* CTA Button Group */}
          <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
            {/* Action Join Button */}
            <Link
              to="/join"
              className="px-8 py-3 bg-[#1f1e23] text-[#fcc307] font-black uppercase text-xs sm:text-sm tracking-widest rounded-sm hover:bg-black transition-all shadow-md"
            >
              Join the Team
            </Link>

            {/* Action Sponsor Button */}
            <Link
              to="/donate"
              className="px-8 py-3 bg-transparent border-2 border-[#1f1e23] text-[#1f1e23] font-black uppercase text-xs sm:text-sm tracking-widest rounded-sm hover:bg-[#1f1e23]/10 transition-all"
            >
              Become a Sponsor
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default Home;