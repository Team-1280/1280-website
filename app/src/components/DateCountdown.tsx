import { JSX, useEffect, useState } from 'react';

const getTimeRemaining = (startDate: Date, endDate: Date) => {
  const total = endDate.getTime() - startDate.getTime();
  if (total < 0)
    return { days: 0, hours: 0, minutes: 0, seconds: 0, total: -1 };

  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
};

const DateCountdown = ({
  labelClasses,
  numberClasses,
  untilDateTime,
  doneElement: DoneElement,
}: {
  labelClasses: string;
  numberClasses: string;
  untilDateTime: Date;
  doneElement?: JSX.ElementType;
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    // interval method i guess, update every second
    const interval = setInterval(() => setCurrentDate(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const values = getTimeRemaining(currentDate, untilDateTime);

  return values.total >= 0 || !DoneElement ? (
    <div className="flex gap-5">
      <div className={labelClasses}>
        <span className={`font-mono ${numberClasses}`}>{values.days}</span>
        days
      </div>
      <div className={labelClasses}>
        <span className={`font-mono ${numberClasses}`}>{values.hours}</span>
        hours
      </div>
      <div className={labelClasses}>
        <span className={`font-mono ${numberClasses}`}>{values.minutes}</span>
        min
      </div>
      <div className={labelClasses}>
        <span className={`font-mono ${numberClasses}`}>{values.seconds}</span>
        sec
      </div>
    </div>
  ) : (
    <DoneElement />
  );
};

export default DateCountdown;
