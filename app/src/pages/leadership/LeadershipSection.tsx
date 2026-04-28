import { useMemo } from 'react';

export interface Person {
  name: string;
  position: string;
  council?: boolean; // omitting this boolean results in no captain designation
}

export interface Term {
  activeTerm?: boolean; // omitting this means it is not the active term
  termBegin: number;
  termEnd: number;
  people: Person[];
}

const councilDesignation = ' [C]';

const LeadershipSection = ({
  activeTerm,
  termBegin,
  termEnd,
  people,
}: React.PropsWithChildren<Term>) => {
  const gridColsClass = useMemo(() => {
    if (people.length >= 3) return 'sm:grid-cols-2 md:grid-cols-3';
    if (people.length === 2) return 'sm:grid-cols-2';
    return '';
  }, [people.length]);

  return (
    <section
      className={
        'flex flex-col items-center w-full rounded-lg border-5 p-12 font-sans text-black whitespace-nowrap text-lg max-w-5xl ' +
        (activeTerm ? 'border-yellow-500' : 'border-[#717a86]')
      }
    >
      <div className="font-bold text-center">FRC 1280 Leadership</div>
      <div className="text-center text-wrap">
        Active Term: {termBegin} - {termEnd}
      </div>
      <div
        className={
          'grid grid-cols-1 justify-center gap-20 m-12 ' + gridColsClass
        }
      >
        {people.map(({ name, position, council }, index) => (
          <div className={'order-' + index} key={index}>
            <div className="font-bold">
              {name}
              {council ? councilDesignation : ''}
            </div>
            <div className="leading-normal">{position}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipSection;
