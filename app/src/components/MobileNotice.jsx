import React, { useState } from 'react'

const MobileNotice = () => {
  const [isOpen, setIsOpen] = useState(true)
  if (!isOpen) {
    return null
  }
  const closeNotice = () => {
    setIsOpen(false)
  }
  return (
    <>
      <div role="alert" className="lg:hidden fixed z-100000 flex justify-between w-full p-3 font-sans text-md font-medium text-white bg-red-400">
        This website is not mobile friendly currently. The website is best viewed on larger screens.
        <div className="flex items-center pl-3">
          <button onClick={closeNotice} className="rounded-md hover:bg-white/10 active:bg-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-5" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

export default MobileNotice
