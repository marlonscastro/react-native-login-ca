import React from 'react'

import * as S from './styles'

type Props = {
  text: string
}

export default function Button({ text }: Props ) {
  return (
    <S.Button>
      <S.TextButton>{text}</S.TextButton>
    </S.Button>
  )
}