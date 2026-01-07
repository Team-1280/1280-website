import DateCountdown from '../components/DateCountdown'
import './styles/GrayBox.css'

const countdownEnd = new Date('2026-01-10T12:00:00-05:00')
const dateFormatter = new Intl.DateTimeFormat(undefined, {
  weekday: 'short',
  day: '2-digit',
  month: 'short',
  year: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
  hour12: true,
  timeZoneName: 'short',
})

import { liability } from '../components/Liability'
import { useState } from 'react'

const Home = () => {
  const formatted = dateFormatter.format(countdownEnd)

  const [clicked, setClicked] = useState(0)

  return (
    <>
      <head>
        <link rel="canonical" href="https://www.team1280.com" />
        <title>Team 1280</title>
      </head>
      <section className="relative h-[100dvw] lg:h-[50dvh] w-full">
        <div className="absolute inset-0 bg-[url('/home4.png')] bg-cover bg-center opacity-80 z-0">
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative flex flex-col items-center justify-center size-full text-center gap-4 lg:gap-10 overflow-hidden text-balance">
          <h1 className="text-3xl lg:text-6xl font-medium font-orbitron text-[#fcc307]">
            FRC Team 1280 - Ragin' C Biscuits
          </h1>
          <p className="text-xl lg:text-4xl font-medium font-orbitron text-white">
            2026 FIRST Robotics Competition Season Kickoff
          </p>
          <div className="flex flex-col items-center justify-center gap-2 ">
            <DateCountdown
              numberClasses="font-orbitron text-white text-xl lg:text-4xl"
              labelClasses="font-orbitron text-white text-sm"
              untilDateTime={countdownEnd}
              doneElement={() => (
                <>
                  <p className="font-orbitron text-white text-xl lg:text-4xl" onClick={() => setClicked(clicked + 1)}>
                    FRC Kickoff has started!
                  </p>
                  <p className={clicked > 4 ? 'font-orbitron text-white text-xs whitespace-pre-wrap p-8' : 'hidden'} onMouseLeave={() => setClicked(0)}>{liability}</p>
                </>
              )}
            />
            <p className="text-sm lg:text-md font-medium font-orbitron text-white">
              {formatted}
            </p>
          </div>
        </div>
      </section>
      <div className="relative w-full overflow-x-hidden bg-white flex justify-center lg:px-12 py-12 lg:h-235">
        <div className="lg:min-w-200 min-w-full flex flex-nowrap max-w-[76rem] mx-auto">
          <img src="/home3.png" className="hidden lg:block"></img>
          <div className="lg:mx-16 flex flex-col justify-around items-center">
            <div className="gray-box lg:h-[25%] h-min-content my-8 lg:my-0">
              <div className="gray-box-heading">Team 1280 - Who We Are</div>
              <div className="text-white text-lg">
                FRC Team 1280, the Ragin' C Biscuits, is a student-led robotics
                team based at San Ramon Valley High School in Danville,
                California. Since 2004, we’ve empowered high school students to
                explore STEM through hands-on engineering, programming,
                business, and leadership challenges.
              </div>
            </div>
            <div className="gray-box lg:h-[25%] h-min-content my-8 lg:my-0">
              <div className="gray-box-heading">
                San Ramon Valley High School
              </div>
              <div className="text-white text-lg">
                Team 1280 primarily recruits students from San Ramon Valley High
                School (SRVHS) but we also accept any students from the San
                Ramon Valley Unified School District (SRVUSD).
                {' '}
              </div>
            </div>
            <div className="gray-box lg:h-[25%] h-min-content my-8 lg:my-0">
              <div className="gray-box-heading">FIRST Robotics</div>
              <div className="text-white text-lg">
                FIRST is an international organization which uses competitive
                robotics as a vehicle for promoting science & technology. FIRST
                allows high school students to work side by side with
                professional mentors to learn skills ranging from engineering to
                marketing, animation and business.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
