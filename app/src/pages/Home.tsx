import { GrayBox, GrayBoxContent, GrayBoxHeading } from '../components/GrayBox';

const Home = () => {
  return (
    <>
      <link rel="canonical" href="https://www.team1280.com" />
      <title>Team 1280</title>
      <section className="relative h-[100dvw] lg:h-[50dvh] w-full">
        <div className="absolute inset-0 bg-[url('/home4.png')] bg-cover bg-center opacity-80 z-0">
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative flex flex-col items-center justify-center size-full text-center gap-4 lg:gap-10 overflow-hidden text-balance">
          <h1 className="text-3xl lg:text-6xl font-medium font-orbitron text-[#fcc307]">
            FRC Team 1280 - Ragin' C Biscuits
          </h1>
          <p className="text-xl lg:text-4xl font-medium font-orbitron text-white">
            San Ramon Valley Robotics
          </p>
        </div>
      </section>
      <div className="relative w-full overflow-x-hidden bg-white flex justify-center lg:px-12 py-12 lg:h-235">
        <div className="lg:min-w-200 min-w-full flex flex-nowrap max-w-[76rem] mx-auto">
          <img src="/home3.png" className="hidden lg:block"></img>
          <div className="lg:mx-16 flex flex-col justify-around items-center">
            <GrayBox>
              <GrayBoxHeading>Team 1280 - Who We Are</GrayBoxHeading>
              <GrayBoxContent>
                FRC Team 1280, the Ragin' C Biscuits, is a student-led robotics
                team based at San Ramon Valley High School in Danville,
                California. Since 2004, we’ve empowered high school students to
                explore STEM through hands-on engineering, programming,
                business, and leadership challenges.
              </GrayBoxContent>
            </GrayBox>
            <GrayBox>
              <GrayBoxHeading>San Ramon Valley High School</GrayBoxHeading>
              <GrayBoxContent>
                Team 1280 primarily recruits students from San Ramon Valley High
                School (SRVHS) but we also accept any students from the San
                Ramon Valley Unified School District (SRVUSD).{' '}
              </GrayBoxContent>
            </GrayBox>
            <GrayBox>
              <GrayBoxHeading>FIRST Robotics</GrayBoxHeading>
              <GrayBoxContent>
                FIRST is an international organization which uses competitive
                robotics as a vehicle for promoting science & technology. FIRST
                allows high school students to work side by side with
                professional mentors to learn skills ranging from engineering to
                marketing, animation and business.
              </GrayBoxContent>
            </GrayBox>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
