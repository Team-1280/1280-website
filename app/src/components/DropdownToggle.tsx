import { useState } from 'react';

const DropdownToggle = ({
  text,
  children,
  isMobile,
}: React.PropsWithChildren<{ text: string; isMobile?: boolean }>) => {
  const [open, setOpen] = useState(false);

  const handleMobileClick = () => {
    if (isMobile) setOpen(!open);
  };

  return (
    <div
      onClick={handleMobileClick}
      className={
        isMobile
          ? 'w-full flex flex-col items-center'
          : 'dropdown navbar-item nav-link select-none cursor-pointer'
      }
    >
      {/* Header */}
      <span className="navbar-item flex items-center gap-1">
        {text}
        <span className="text-[10px]">▼</span>
      </span>

      {/* Content */}
      {(isMobile || true) && isMobile && open && (
        <ul className="flex flex-col w-full bg-[#2a292e] rounded my-2 py-2">
          {children}
        </ul>
      )}

      {/* Desktop hover dropdown */}
      {!isMobile && (
        <ul className="dropdown-content">{children}</ul>
      )}
    </div>
  );
};

export default DropdownToggle;