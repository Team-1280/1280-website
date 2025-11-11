const Calendar = () => (
  <>
    <head>
      <link rel="canonical" href="https://www.team1280.com/calendar" />
      <title>Calendar</title>
    </head>
    <div className="flex justify-center text-6xl mt-10 mb-10 font-roboto text-black">Team Calendar</div>
    <div className="relative overflow-hidden flex justify-center" style={{ height: '800px' }}>
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&showPrint=0&src=ZGIzOGNhMmFhYjg3NWRhNGZmM2JjNGU3YWY0Yzk4NWMyNDdiNjMyMzI0MTI1Y2Y4ODZmYmZkNmQ1MDI2MjY4NEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=MjIwYmM0MzQ1MTc3MDM1Y2NhODBlOTk2MTU4MDA0ZmQzNGNkMjM4MTM5MDA1MGUxYWNmNzVjMGQ5YjMxZTA4MkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23f6bf26&color=%237986cb"
        className="border-0 w-[80%] h-[90%]"
        allowFullScreen
        title="Google Calendar"
      />
    </div>
  </>
)

export default Calendar
