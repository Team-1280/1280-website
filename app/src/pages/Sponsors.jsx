const Sponsors = () => (
  <>
    <head>
      <link rel="canonical" href="https://www.team1280.com/sponsors" />
      <title>Sponsors</title>
    </head>
    <div className="relative w-full text-balance font-sans text-center">
      <img src="/sponsors1.png" className="absolute object-cover h-full min-w-[100%] -z-1"></img>
      <div className="h-20"></div>
      <div className="h-auto min-w-100 size-auto mx-[20dvw] px-20 bg-gray-600/80 backdrop-blur-[6px] flex flex-col items-center">
        <div className="relative text-white font-sans py-10">
          <div className="py-5 text-[#fcc307] text-3xl font-bold">Thank You to Our Sponsors</div>
          <div className="py-2 text-white text-base">Team 1280 would like to extend our deepest gratitude to the sponsors who make our work possible. Your generous support enables us to design, build, and compete with innovative robots, while also fostering STEM skills, teamwork, and leadership in our students.</div>
          <div className="py-2 text-white text-base">Because of you, we are able to purchase essential tools and materials, maintain our workspace, and provide opportunities for students to learn engineering, programming, and fabrication. Beyond financial support, your belief in our mission inspires us to push boundaries and strive for excellence both on and off the field.</div>
          <div className="py-2 text-white text-base">We are proud to represent our community and our sponsors at every competition, and we couldn’t do it without you. Thank you for being a vital part of Team 1280’s journey!</div>
        </div>
        <div className="py-2 text-white font-bold text-2xl">2026 Season Sponsors</div>
        <div className="flex flex-col items-center py-15 gap-15">
          <div className="grid grid-cols-3 w-full gap-x-[10%]">
            <img src="/ptsa-logo.png" alt="PTSA Logo"></img>
            <img src="/site-council-logo.png" alt="Site Council Logo"></img>
            <img src="/boosters-logo.png" alt="Academic Boosters Logo"></img>
          </div>
          <div className="grid grid-cols-2 w-2/3 gap-x-[10%]">
            <img src="/intuitive-logo.png" alt="Intuitive Logo"></img>
            <img src="/frc-tees-logo.png" alt="FRC Tees Logo"></img>
          </div>
        </div>
      </div>
      <div className="h-20"></div>
    </div>
  </>
)

export default Sponsors
