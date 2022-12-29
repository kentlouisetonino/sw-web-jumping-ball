import { LegacyRef, ReactNode, forwardRef } from 'react'

interface ControlProps {
  children: ReactNode
  onClick: () => void
  onKeyDown: () => void
  onTouchStart: () => void
}

const Control = forwardRef(
  (
    { children, onClick, onKeyDown, onTouchStart }: ControlProps,
    ref: LegacyRef<HTMLButtonElement>
  ) => {
    return (
      <button
        ref={ref}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-[5px] mx-[5px]"
        onClick={onClick}
        onKeyDown={onKeyDown}
        onTouchStart={onTouchStart}
      >
        {children}
      </button>
    )
  }
)

Control.displayName = 'Control'
export default Control
