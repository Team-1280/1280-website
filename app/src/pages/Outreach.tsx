import { GrayBox, GrayBoxContent } from '../components/GrayBox';
import ImageTextImage from '../components/unique/ImageTextImage';

interface OutreachEvent {
  title: string;
  description: string;
  image: string;
  imageDescription: string;
}

const outreachEvents: OutreachEvent[] = [
  {
    title: 'Science Nights',
    description:
      'Our team regularly attends elementary school science nights, where students can interact with our robot, explore engineering concepts, and see STEM in action.',
    image: '/outreach1.png',
    imageDescription:
      'Image of Team 1280 working with children for outreach purposes, standing over robot.',
  },
  {
    title: 'Library Events',
    description:
      'At the Danville Library, we introduce younger students to the world of FIRST through engaging robot demonstrations and fun, interactive activities.',
    image: '/outreach2.png',
    imageDescription: 'Outreach 2',
  },
  {
    title: 'Girl Scout Gold Award/STEM Night',
    description:
      'As part of a Girl Scout Gold Award, we developed activities for children to explore STEM concepts while also providing opportunities to drive our robot. We receive similar requests from many local groups and are always excited to share our passion for robotics.',
    image: '/outreach3.png',
    imageDescription: 'Outreach 3',
  },
  {
    title: 'Veterans’ Hall Outreach',
    description:
      'Every year, we showcase our robot, equipment, and designs at the Veterans Hall during Veterans Day. This event frequently garners local news coverage and allows us to share our work with a broad audience.',
    image: '/outreach4.png',
    imageDescription: 'Outreach 4',
  },
];

const outreachPrograms: OutreachEvent[] = [
  {
    title: 'First Lego League',
    description:
      'Our team has partnered with local elementary schools to help launch three new FLL teams at Alamo Elementary School and Rancho Romero Elementary School for the 2025–26 season. We are dedicated to sharing our knowledge, mentoring students, and promoting the values of STEM and FIRST to inspire the next generation of innovators.',
    image: '/fll-logo.png',
    imageDescription: 'FLL Logo',
  },
  {
    title: 'Robotics Class & Club',
    description:
      'We help organize and support the robotics class and club at our school and in the community. These programs give students hands-on experience with design, building, and programming, fostering teamwork and problem-solving skills that extend beyond the classroom.',
    image: '/srv-logo.png',
    imageDescription: 'SRV Logo',
  },
  {
    title: 'Comrades Program',
    description:
      'We work closely with our high school’s special education program, known as the Comrades. Our members host regular lunch sessions where students learn programming concepts and apply them using VEX robots, providing both technical skills and an inclusive, collaborative learning environment.',
    image: '/outreach5.png',
    imageDescription: 'Outreach 5',
  },
];

const Outreach = () => (
  <>
    <link rel="canonical" href="https://www.team1280.com/outreach" />
    <title>Outreach</title>
    <section className="relative w-full h-auto overflow-hidden">
      <img src="/outreach-banner.png" className="object-cover w-full h-auto" />
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute font-sans inset-x-1 md:inset-x-1/4 inset-y-0 size-auto flex items-center text-white text-sm md:text-2xl text-center pointer-events-auto text-balance">
        As a dedicated FRC team, we aim to excel in competition while promoting
        STEM education and the FIRST mission in our community. We participate in
        local events, mentor new FLL teams, and remain committed to inspiring
        curiosity and fostering growth in STEM for all ages.
      </div>
    </section>
    <section className="text-left bg-white relative h-auto w-full px-10 lg:px-24 pt-18 pb-12 overflow-hidden max-w-[64rem] mx-auto">
      <div className="lg:min-w-160">
        <div className="text-black text-3xl text-center lg:text-left lg:text-5xl font-roboto whitespace-nowrap">
          Outreach Events
        </div>
        <hr className="my-8 border-gray-300 border-t-4"></hr>
        <GrayBox>
          <GrayBoxContent>
            In addition to our ongoing programs, our team participates in a
            variety of one-off or annual events that connect us with the local
            community. These events often include robot demonstrations, hands-on
            STEM activities, and opportunities for community members of all ages
            to learn about engineering and FIRST.
          </GrayBoxContent>
        </GrayBox>
      </div>
    </section>
    <ImageTextImage
      rows={outreachEvents.map((row) => {
        return {
          imageLeft: '/bg-logo.png',
          imageDescriptionLeft: 'SRV Logo',
          imageDescriptionRight: row.imageDescription,
          imageRight: row.image,
          title: row.title,
          text: row.description,
        };
      })}
    />
    <section className="text-left bg-white relative h-auto w-full px-10 lg:px-24 pt-18 pb-8 overflow-hidden max-w-[64rem] mx-auto">
      <div className="lg:min-w-160">
        <div className="text-black text-3xl text-center lg:text-left lg:text-5xl font-roboto whitespace-nowrap">
          Outreach Programs
        </div>
        <hr className="my-8 border-gray-300 border-t-4"></hr>
        <GrayBox>
          <GrayBoxContent>
            Beyond one-time events, our team is committed to ongoing outreach
            programs that foster STEM education and strengthen connections
            within our community.
          </GrayBoxContent>
        </GrayBox>
      </div>
    </section>
    <ImageTextImage
      className="pb-30"
      rows={outreachPrograms.map((row) => {
        return {
          imageLeft: '/bg-logo.png',
          imageDescriptionLeft: 'SRV Logo',
          imageDescriptionRight: row.imageDescription,
          imageRight: row.image,
          title: row.title,
          text: row.description,
        };
      })}
    />
  </>
);

export default Outreach;
