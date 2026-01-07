import { Link } from 'react-router-dom'

// TODO: Import in scss file instead of explicit css import. #31
import './styles/GrayBox.css'

const Mentors = () => (
  <>
    <head>
      <link rel="canonical" href="https://www.team1280.com/mentors" />
      <title>Mentors</title>
    </head>
    <div className="flex flex-col items-center max-w-[72rem] mx-auto">
      <section>
        <div className="bg-white relative h-[30%] w-full justify-center items-center lg:px-10 py-10">
          <div className="relative gray-box h-1/4">
            <div className="gray-box-heading">
              FRC Team 1280 Mentors and Coaches
            </div>
            <div className="text-white text-lg">
              Mentors and Coaches are individuals from all backgrounds and
              disciplines who work with students to share their knowledge and
              guide them through the season. Many Mentors contribute on a weekly
              basis during competition season, or support the team with subject
              matter expertise on an as needed basis. Teams may have additional
              or more specialized roles or a combination of roles as needed. In
              addition, Mentors help to foster the idea of Gracious
              Professionalism® and have the students do as much of the work as
              possible - FIRST Mentors & Coaches
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-wrap flex-col md:flex-row md:flex-nowrap font-sans gap-10 md:px-20 px-10 py-6">
          <img
            src="/mentor1.png"
            alt="Wyatt Slanec"
            className="w-50 h-50 rounded-sm self-center"
          />
          <div>
            <div className="font-bold">Wyatt Slanec</div>
            <div className="font-bold">
              FRC Team 1280 Head Coach: 2019 - Present
            </div>
            <div className="p-2"></div>
            <div className="">
              Bio: Mr. Slanec is the Auto & Tech teacher at SRVHS. Since joining
              Team 1280 in 2019, he has helped shape team culture, ensure
              safety, and provide guidance in leadership development.
            </div>
            <div className="p-2"></div>
            <div className="">
              Expertise: Administration & Leadership Development
            </div>
          </div>
        </div>
        <div className="flex flex-wrap flex-col md:flex-row md:flex-nowrap font-sans gap-10 md:px-20 px-10 py-6">
          <img
            src="/mentor2.jpg"
            alt="Tim Paterson"
            className="w-50 h-50 rounded-sm self-center"
          />
          <div>
            <div className="font-bold">Tim Paterson</div>
            <div className="font-bold">
              FRC Team 1280 Head Coach: 2020 - Present
            </div>
            <div className="p-2"></div>
            <div className="">
              Bio: Mr. Paterson is a computer engineer with over 40 years of
              experience. Since joining Team 1280 in 2020, he has provided
              technical advice and helped train students in CAD and fabrication.
              He has a home machine shop where he builds heavyweight combat
              robots to compete at BattleBots and RoboGames.
            </div>
            <div className="p-2"></div>
            <details>
              <summary>Links</summary>
              <ul className="list-none">
                <div className="font-medium !text-[#fcc307] dark:!text-[#fcc307]">
                  <li>
                    <a
                      href="https://x.com/Scobleizer/status/1875486795720487418"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Interview with Robert Scoble
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/watch?v=R2Qh0O3Dt10"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Interview with Vintage Computer Foundation
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/dosdaddy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      LinkedIn Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/TimPaterson"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      GitHub Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@hexadecimatorheavyweightco3073"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Combat Robot Videos
                    </a>
                  </li>
                </div>
              </ul>
            </details>
            <div className="p-2"></div>
            <div className="">Expertise: Mechanical & Programming</div>
          </div>
        </div>
        <div className="flex flex-wrap flex-col md:flex-row md:flex-nowrap font-sans gap-10 md:px-20 px-10 py-6">
          <img
            src="/mentor3.png"
            alt="Marty Lastowski"
            className="w-50 h-50 rounded-sm self-center"
          />
          <div>
            <div className="font-bold">Marty Lastowski</div>
            <div className="font-bold">
              FRC Team 1280 Head Mentor: 2023 - Present
            </div>
            <div className="p-2"></div>
            <div className="">
              Bio: Mr. Lastowski studied mechanical engineering and worked over
              40 years in engineering. During his career, he worked on medical
              device robotics specifically at Intuitive Surgical. He also
              mentored FRC team 971 for about 10 years.
              {' '}
            </div>
            <div className="p-2"></div>
            <div className="">Expertise: Design & Mechanical</div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-white relative h-[30%] lg:w-full justify-center items-center lg:px-10 py-10">
          <div className="relative gray-box lg:w-[95vw] h-1/4">
            <div className="gray-box-heading">Interested in Mentoring?</div>
            <div>
              We are always looking for committed adults and alumni who want to
              contribute to student learning in STEM. If you're interested in
              volunteering as a mentor, please visit our
              <Link to="/contact" className="whitespace-nowrap">
                {' '}
                <u>Contact page</u>
                {' '}
              </Link>
              or email us at sanramonvalleyrobotics@gmail.com.
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
)

export default Mentors
