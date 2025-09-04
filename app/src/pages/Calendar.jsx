const Calendar = () => {
    return (
        <>
            <div className="flex justify-center text-6xl mt-10 mb-10 font-roboto text-black">Team Calendar</div>
            <div className="relative overflow-hidden flex justify-center" style={{ height: '800px' }}>
                <iframe
                    src="https://calendar.google.com/calendar/embed?src=db38ca2aab875da4ff3bc4e7af4c985c247b632324125cf886fbfd6d50262684%40group.calendar.google.com&ctz=America%2FLos_Angeles"
                    className="border-0 w-[80%] h-[90%]"
                    allowFullScreen
                    title="Google Calendar"
                />
            </div>
        </>
    )
}

export default Calendar;