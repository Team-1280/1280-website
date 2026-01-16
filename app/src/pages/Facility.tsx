// TODO: Import in scss file instead of explicit css import. #31
import './styles/GrayBox.css'

const Facility = () => (
  <>
    <link rel="canonical" href="https://www.team1280.com/facility" />
    <title>Facility</title>
    <section className="flex flex-col items-center lg:px-10 py-10 max-w-[100rem] mx-auto">
      <div className="gray-box">
        <div className="gray-box-heading">
          Facility
        </div>
        <div>
          <div>
            We’re fortunate to have access to a well-equipped facility that includes multiple machining tools, a full fabrication workshop, and a dedicated storage closet—enabling our team to design, build, and maintain our robot efficiently.
          </div>
          <div className="p-2"></div>
          <div>
            Thanks to the generous support of our sponsors, we’ve been able to purchase and utilize these essential machines, tools, and workspace resources. Their contributions empower us to innovate, improve our builds, and keep our components organized and competition-ready.
          </div>
        </div>
      </div>
      <div className="relative h-[30%] w-full lg:px-7 lg:py-16 flex flex-wrap lg:flex-nowrap py-10 gap-5 lg:gap-0 lg:pb-0">
        <div>
          <div className="text-black text-3xl text-left font-roboto px-10 pb-5 pt-5">
            Location
          </div>
          <div className="font-sans">
            <div className="text-lg text-left font-bold px-10">San Ramon Valley High School</div>
            <div className="text-lg text-left font-bold px-10">501 Danville Blvd, Danville, CA 94526</div>
            <div className="p-2"></div>
            <div className="text-lg text-left px-10 max-w-[90%]">We’re right next to the stadium parking lot. If you're having trouble finding us on campus, simply look for the entrance to the stadium parking—our workshop and facility entrance are conveniently located immediately beside it.</div>
          </div>
        </div>
        <div>
          <img src="/facility1.png" className="w-[240vw] outline"></img>
        </div>
      </div>
      <img src="/facility2.png" className="w-full outline mt-15"></img>
    </section>
  </>
)

export default Facility
