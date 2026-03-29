import React, { useState } from "react"
import { ChevronDown } from "lucide-react"

export function Menu({ trigger, children, align = "left", showChevron = true }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative inline-block text-left">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer inline-flex items-center"
        role="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {trigger}
        {showChevron && (
          <ChevronDown className="ml-2 -mr-1 h-4 w-4 text-emerald-500" aria-hidden="true" />
        )}
      </div>

      {isOpen && (
        <div
          className={`absolute ${
            align === "right" ? "right-0" : "left-0"
          } mt-2 w-56 rounded-xl bg-sea-900 shadow-2xl ring-1 ring-emerald-500/20 focus:outline-none z-50`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-2" role="none">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

export function MenuItem({ children, onClick, disabled = false, icon, isActive = false }) {
  return (
    <button
      className={`relative block w-full h-16 text-center group rounded-full
        ${disabled ? "text-sea-500 cursor-not-allowed" : "text-white hover:bg-emerald-500/10"}
        ${isActive ? "bg-emerald-500/20" : ""}
      `}
      role="menuitem"
      onClick={onClick}
      disabled={disabled}
    >
      <span className="flex items-center justify-center h-full">
        {icon && (
          <span className={`h-6 w-6 text-emerald-400 transition-transform duration-200 group-hover:scale-110 ${children ? "mr-3" : ""}`}>
            {icon}
          </span>
        )}
        <span className="font-medium tracking-wide">{children}</span>
      </span>
    </button>
  )
}

export function MenuContainer({ children }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const childrenArray = React.Children.toArray(children)

  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="relative w-16" data-expanded={isExpanded}>
      {/* Container for all items */}
      <div className="relative h-16">
        {/* First item - always visible */}
        <div 
          className="relative w-16 h-16 bg-emerald-600 hover:bg-emerald-500 text-white cursor-pointer rounded-full group will-change-transform z-50 shadow-lg shadow-emerald-900/40 flex items-center justify-center transition-colors duration-300"
          onClick={handleToggle}
        >
          {childrenArray[0]}
        </div>

        {/* Other items */}
        {childrenArray.slice(1).map((child, index) => (
          <div 
            key={index} 
            className="absolute top-0 left-0 w-16 h-16 bg-sea-800 text-emerald-400 hover:text-white hover:bg-sea-700 rounded-full flex items-center justify-center cursor-pointer will-change-transform shadow-md border border-emerald-500/20"
            style={{
              transform: `translateY(${isExpanded ? (index + 1) * 76 : 0}px)`,
              opacity: isExpanded ? 1 : 0,
              zIndex: 40 - index,
              transition: `transform ${isExpanded ? '300ms' : '300ms'} cubic-bezier(0.34, 1.56, 0.64, 1),
                         opacity ${isExpanded ? '300ms' : '200ms'}ease-in-out,
                         background-color 200ms, color 200ms`,
              pointerEvents: isExpanded ? 'auto' : 'none'
            }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}
