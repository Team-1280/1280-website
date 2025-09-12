const Calendar = () => {
    return (
        <>
            <div className="flex justify-center text-6xl mt-10 mb-10 font-roboto text-black">Team Calendar</div>
            <div className="flex justify-center text-l ml-40 mr-40 mb-10 font-sans text-black">This calendar has all of our team meetings/events throughout the year! General team events are in 
                <div className="pl-1 text-[#f5bd25]"> yellow</div>
                , and outreach programs/activities are in 
                <div className="pl-1 text-[#7a88cc]"> blue</div>
                .
                </div>
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
}

export default Calendar;