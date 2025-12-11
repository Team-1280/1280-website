import { useCallback, useState } from 'react'

const Dropdown = ({ text, children, isMobile }) => {
  const [open, setOpen] = useState(false)

  const toggle = useCallback(() => {
    if (isMobile) setOpen(!open)
  }, [isMobile, open])

  return (
    <div onClick={toggle} className={isMobile ? 'block' : 'dropdown select-none'}>
      <a>
        {text}
        {' ▼'}
      </a>
      {(open || !isMobile) && (
        <ul className={isMobile ? 'text-center h-auto max-h-none flex flex-col [&>a]:p-2 border-y my-5' : 'dropdown-content'}>
          {children}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
