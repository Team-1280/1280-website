import {
  GrayBox,
  GrayBoxContent,
  GrayBoxHeading,
} from '../../components/GrayBox';
import LeadershipData from './LeadershipData';
import LeadershipSection from './LeadershipSection';

const Leadership = () => (
  <>
    <link rel="canonical" href="https://www.team1280.com/leadership" />
    <title>Leadership</title>
    <div className="flex flex-col gap-10 items-center py-10 px-[10%]">
      <GrayBox>
        <GrayBoxHeading>Student Leadership</GrayBoxHeading>
        <GrayBoxContent>
          <div>
            In the FIRST Robotics Competition (FRC), student leadership plays a
            critical role in guiding the direction, culture, and success of a
            team. Student leaders help manage subteams, organize outreach
            events, lead meetings, support technical and non-technical training,
            and represent the team at competitions. Leadership positions often
            include roles such as Team Captain, Subteam Leads (e.g.,
            Programming, CAD, Electrical, Fabrication, Business), and Outreach
            Coordinators.
          </div>
          <div className="text-[#fcc307] text-xl font-medium mt-6 mb-2">
            About the “[C]” designation
          </div>
          <div>
            A “[C]” next to a team member’s name indicates that they serve on
            the Team 1280 Council. Council members take on additional
            responsibilities beyond their leadership roles and help guide the
            team’s long-term direction and organizational structure.
          </div>
        </GrayBoxContent>
      </GrayBox>
      {LeadershipData.map(
        ({ activeTerm, termBegin, termEnd, people }, index) => (
          <LeadershipSection
            key={index}
            activeTerm={activeTerm}
            termBegin={termBegin}
            termEnd={termEnd}
            people={people}
          />
        ),
      )}
    </div>
  </>
);

export default Leadership;
