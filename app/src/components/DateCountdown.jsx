import { useEffect, useState } from 'react'

/**
 * Gets the time remaining until a Date.
 * @param {Date} startDate The Date to begin from
 * @param {Date} endDate The Date to get the time remaining until from startDate
 * @returns {{seconds: number, minutes: number, hours: number, days: number}}
 */
const getTimeRemaining = (startDate, endDate) => {
  const total = endDate.getTime() - startDate.getTime()
  if (total < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, total: -1 }

  const seconds = Math.floor((total / 1000) % 60)
  const minutes = Math.floor((total / 1000 / 60) % 60)
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
  const days = Math.floor(total / (1000 * 60 * 60 * 24))

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  }
}

/**
 * Component that counts down to a specified date and time.
 * @param {object} props
 * @param {Date} props.untilDateTime The Date to count down to
 * @param {string} props.numberClasses The classes to give the numbers
 * @param {string} props.labelClasses The classes to give the labels
 * @param {JSX.Element} props.doneElement The element to show when done, optional
 * @returns {JSX.Element}
 */
const DateCountdown = ({ labelClasses, numberClasses, untilDateTime, doneElement: DoneElement }) => {
  const [currentDate, setCurrentDate] = useState(new Date())

  useEffect(() => {
    // interval method i guess, update every second
    const interval = setInterval(() => setCurrentDate(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const values = getTimeRemaining(currentDate, untilDateTime)

  return (
    (values.total >= 0) || !DoneElement
      ? (
          <div className="flex gap-5">
            <div className={labelClasses}>
              <span className={`font-mono ${numberClasses}`}>
                {values.days}
              </span>
              days
            </div>
            <div className={labelClasses}>
              <span className={`font-mono ${numberClasses}`}>
                {values.hours}
              </span>
              hours
            </div>
            <div className={labelClasses}>
              <span className={`font-mono ${numberClasses}`}>
                {values.minutes}
              </span>
              min
            </div>
            <div className={labelClasses}>
              <span className={`font-mono ${numberClasses}`}>
                {values.seconds}
              </span>
              sec
            </div>
          </div>
        )
      : <DoneElement />)
}

export default DateCountdown
