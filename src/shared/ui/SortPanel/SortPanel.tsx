import React, { FC, memo, useCallback, useState } from 'react'

import { useSelector } from 'react-redux'

import s from './SortPanel.module.scss'

import { getParams, setFilter, setSort } from 'entities/books'
import { ReactComponent as Search } from 'shared/assets/icon/search.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Select } from 'shared/ui/Select/Select'

interface SortPanelProps {
  className?: string
}

export const SortPanel: FC<SortPanelProps> = memo(({ className = '' }) => {
  const [text, setText] = useState('')

  const dispatch = useAppDispatch()
  const params = useSelector(getParams)
  const { q, orderBy } = params
  const filterOptions = ['all', 'biography', 'computers', 'history', 'medical', 'poetry']
  const sortOptions = ['relevance', 'newest']

  const onChangeFilter = useCallback(
    (value: string) => {
      dispatch(setFilter(value))
      setText('')
    },
    [dispatch]
  )

  const onChangeFilterInput = useCallback(
    (value: string) => {
      dispatch(setFilter(value))
    },
    [dispatch]
  )

  const onChangeSort = useCallback(
    (value: string) => {
      dispatch(setSort(value))
    },
    [dispatch]
  )

  const onChangeText = useCallback(
    (value: string) => {
      setText(value)
    },
    [setText]
  )

  const onClickHandler = useCallback(() => {
    if (text) {
      dispatch(setFilter(text))
    }
  }, [text])

  return (
    <div className={classNames(s.SortPanel, {}, [className])}>
      <div className={s.searchBlock}>
        <Input
          value={text}
          onChangeText={onChangeText}
          onChange={onChangeFilterInput}
          className={classNames(s.inputWidth, {}, [s.relative])}
          type={'search'}
        >
          <Button onClick={onClickHandler} className={s.position} theme={ButtonTheme.Clear}>
            <Search width={'18px'} height={'18px'} />
          </Button>
        </Input>
      </div>
      <div className={s.selectBlock}>
        <Select onChange={onChangeFilter} value={q} options={filterOptions} />

        <Select onChange={onChangeSort} value={orderBy} options={sortOptions} />
      </div>
    </div>
  )
})
