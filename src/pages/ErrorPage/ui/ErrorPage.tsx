import { useNavigate } from 'react-router-dom'

import s from './ErrorPage.module.scss'

import { PATH } from 'shared/lib/const/path'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { ErrorMessage } from 'shared/ui/ErrorMessage/ErrorMessage'
import { Text, TextTheme } from 'shared/ui/Text/Text'

export const ErrorPage = () => {
  const navigate = useNavigate()

  return (
    <div className={s.ErrorPage}>
      <Text theme={TextTheme.Primary} title={'Something went wrong'} />
      <Button onClick={() => navigate(PATH.MAIN)} theme={ButtonTheme.Primary}>
        Back to main page
      </Button>
    </div>
  )
}
