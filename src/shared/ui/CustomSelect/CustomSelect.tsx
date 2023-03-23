import React, { useState, useEffect } from 'react'

type SelectProps = {
  options: string[]
}

const CustomSelect: React.FC<SelectProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)

  const toggleSelect = () => {
    setIsOpen(!isOpen)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowUp' && selectedOptionIndex > 0) {
      setSelectedOptionIndex(selectedOptionIndex - 1)
    } else if (event.key === 'ArrowDown' && selectedOptionIndex < options.length - 1) {
      setSelectedOptionIndex(selectedOptionIndex + 1)
    }
  }

  const handleOptionClick = (index: number) => {
    setSelectedOptionIndex(index)
    setIsOpen(false)
  }

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement

      if (!target.closest('.select')) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  return (
    <div className="select" onKeyDown={handleKeyDown} tabIndex={0}>
      <div className="select__header" onClick={toggleSelect}>
        {options[selectedOptionIndex]}
      </div>
      {isOpen && (
        <div className="select__options">
          {options.map((option, index) => (
            <div
              key={option}
              className={`select__option ${index === selectedOptionIndex ? 'selected' : ''}`}
              onClick={() => handleOptionClick(index)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CustomSelect
