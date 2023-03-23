import React, { FC, KeyboardEvent, memo, useEffect, useState } from 'react'

import s from './Select.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

interface SelectProps {
  className?: string
  options: string[]
}

export const Select: FC<SelectProps> = memo(({ className = '', options }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [optionIndex, setOptionIndex] = useState(0)

  const toggleSelect = () => {
    setIsOpen(prev => !prev)
  }

  const onKeyHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowDown' && options.length - 1 > optionIndex) {
      setOptionIndex(optionIndex + 1)
    } else if (e.key === 'ArrowUp' && optionIndex > 0) {
      setOptionIndex(optionIndex - 1)
    }
  }

  const onClickOption = (index: number) => {
    setOptionIndex(index)
    setIsOpen(false)
  }

  const onKeyOptionHandler = (index: number, e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      setOptionIndex(index)
      setIsOpen(false)
    }
  }

  return (
    <div
      className={classNames(s.Select, {}, [className])}
      onBlur={() => setIsOpen(false)}
      onKeyDown={onKeyHandler}
      tabIndex={0}
    >
      <div className={s.selected} onClick={toggleSelect}>
        <span>{options[optionIndex]}</span>
      </div>
      {isOpen && (
        <div className={s.options}>
          {options.map((el, i) => (
            <div
              className={classNames(s.option, { [s.hover]: i === optionIndex })}
              onClick={() => onClickOption(i)}
              onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => onKeyOptionHandler(i, e)}
              key={el}
            >
              {el}
            </div>
          ))}
        </div>
      )}
    </div>
  )
})
