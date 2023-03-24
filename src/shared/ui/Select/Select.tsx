import React, { FC, KeyboardEvent, memo, useState } from 'react'

import s from './Select.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

interface SelectProps {
  className?: string
  options: string[]
  value: string
  onChange: (value: string) => void
}

export const Select: FC<SelectProps> = memo(({ className = '', options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(value)

  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
    setIsOpen(false)
    onChange(option)
  }
  // const [isOpen, setIsOpen] = useState(false)
  // const [optionIndex, setOptionIndex] = useState(0)
  //
  const toggleSelect = () => {
    setIsOpen(prev => !prev)
  }

  const handleBlur = () => {
    setIsOpen(false)
  }
  //
  // const onKeyHandler = (e: KeyboardEvent<HTMLDivElement>) => {
  //   if (e.key === 'ArrowDown' && options.length - 1 > optionIndex) {
  //     setOptionIndex(optionIndex + 1)
  //     onChange(options[optionIndex])
  //   } else if (e.key === 'ArrowUp' && optionIndex > 0) {
  //     setOptionIndex(optionIndex - 1)
  //     onChange(options[optionIndex])
  //   }
  // }
  //
  // const onClickOption = (index: number) => {
  //   setOptionIndex(index)
  //   onChange(options[optionIndex])
  //   setIsOpen(false)
  // }
  //
  // const onKeyOptionHandler = (index: number, e: KeyboardEvent<HTMLDivElement>) => {
  //   if (e.key === 'Enter') {
  //     setOptionIndex(index)
  //     onChange(options[optionIndex])
  //     setIsOpen(false)
  //   }
  // }

  return (
    <div className={classNames(s.Select, {}, [className])} onBlur={handleBlur} tabIndex={0}>
      <div className={s.selected} onClick={toggleSelect}>
        <span>{selectedOption}</span>
      </div>
      <div style={{ position: 'relative' }}>
        {isOpen && (
          <div className={s.options}>
            {options.map((el, i) => (
              <div className={s.option} onClick={() => handleOptionClick(el)} key={el}>
                {el}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
})
