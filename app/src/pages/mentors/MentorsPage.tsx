import { Link } from 'react-router-dom';

import MentorComponent from './MentorComponent';
import {
  GrayBox,
  GrayBoxContent,
  GrayBoxHeading,
} from '../../components/GrayBox';

const Mentors = () => (
  <>
    <link rel="canonical" href="https://www.team1280.com/mentors" />
    <title>Mentors</title>
    <div className="flex flex-col items-center max-w-[72rem] mx-auto">
      <section>
        <div className="bg-white relative h-[30%] w-full justify-center items-center lg:px-10 py-10">
          <GrayBox>
            <GrayBoxHeading>FRC Team 1280 Mentors and Coaches</GrayBoxHeading>
            <GrayBoxContent>
              Mentors and Coaches are individuals from all backgrounds and
              disciplines who work with students to share their knowledge and
              guide them through the season. Many Mentors contribute on a weekly
              basis during competition season, or support the team with subject
              matter expertise on an as needed basis. Teams may have additional
              or more specialized roles or a combination of roles as needed. In
              addition, Mentors help to foster the idea of Gracious
              Professionalism® and have the students do as much of the work as
              possible - FIRST Mentors & Coaches
            </GrayBoxContent>
          </GrayBox>
        </div>
      </section>
      <section>
        <MentorComponent
          imageSrc="mentor1.png"
          name="Wyatt Slanec"
          role="FRC Team 1280 Head Coach"
          since="2019"
          expertise="Administration & Leadership Development"
          bio="Mr. Slanec is the Auto & Tech teacher at SRVHS. Since joining
              Team 1280 in 2019, he has helped shape team culture, ensure
              safety, and provide guidance in leadership development."
        />
        <MentorComponent
          imageSrc="mentor2.jpg"
          name="Tim Paterson"
          role="FRC Team 1280 Head Coach"
          since="2020"
          expertise="Mechanical & Programming"
          bio="Mr. Paterson is a computer engineer with over 40 years of
              experience. Since joining Team 1280 in 2020, he has provided
              technical advice and helped train students in CAD and fabrication.
              He has a home machine shop where he builds heavyweight combat
              robots to compete at BattleBots and RoboGames."
          links={[
            {
              url: 'https://x.com/Scobleizer/status/1875486795720487418',
              title: 'Interview with Robert Scoble',
            },
            {
              url: 'https://www.youtube.com/watch?v=R2Qh0O3Dt10',
              title: 'Interview with Vintage Computer Foundation',
            },
            {
              url: 'https://www.linkedin.com/in/dosdaddy/',
              title: 'LinkedIn Profile',
            },
            {
              url: 'https://github.com/TimPaterson',
              title: 'GitHub Profile',
            },
            {
              url: 'https://www.youtube.com/@hexadecimatorheavyweightco3073',
              title: 'Combat Robot Videos',
            },
          ]}
        />
        <MentorComponent
          imageSrc="mentor3.png"
          name="Marty Lastowski"
          role="FRC Team 1280 Head Mentor"
          since="2023"
          expertise="Design & Mechanical"
          bio="Mr. Lastowski studied mechanical engineering and worked over
              40 years in engineering. During his career, he worked on medical
              device robotics specifically at Intuitive Surgical. He also
              mentored FRC team 971 for about 10 years."
        />
      </section>
      <section>
        <div className="bg-white relative h-[30%] lg:w-full justify-center items-center lg:px-10 py-10">
          <GrayBox>
            <GrayBoxHeading>Interested in Mentoring?</GrayBoxHeading>
            <GrayBoxContent>
              We are always looking for committed adults and alumni who want to
              contribute to student learning in STEM. If you're interested in
              volunteering as a mentor, please visit our
              <Link to="/contact" className="whitespace-nowrap">
                {' '}
                <u>Contact page</u>{' '}
              </Link>
              or email us at sanramonvalleyrobotics@gmail.com.
            </GrayBoxContent>
          </GrayBox>
        </div>
      </section>
    </div>
  </>
);

export default Mentors;
