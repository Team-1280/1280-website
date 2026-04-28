import { ComponentProps, PropsWithChildren } from 'react';

const GrayBox = ({
  children,
  className,
}: PropsWithChildren<ComponentProps<'div'>>) => {
  return (
    <div
      className={`flex flex-col flex-auto grow-0 justify-start items-start overflow-y-auto bg-[#717a86] border border-[#aaaaaa] rounded-lg shadow-[1px_2px_4px_0_rgba(0,0,0,0.25)] p-6 max-w-5xl font-[Sans] text-white text-lg leading-7 lg:h-[25%] h-min-content my-8 lg:my-0 ${className}`}
    >
      {children}
    </div>
  );
};

const GrayBoxHeading = ({ children }: PropsWithChildren) => {
  return (
    <h3
      className="text-[#fcc307]
      font-bold
      text-3xl
      leading-9
      mb-3"
    >
      {children}
    </h3>
  );
};

const GrayBoxContent = ({ children }: PropsWithChildren) => {
  return (
    <div className="text-white text-lg flex flex-col gap-4">{children}</div>
  );
};

export { GrayBox, GrayBoxHeading, GrayBoxContent };
