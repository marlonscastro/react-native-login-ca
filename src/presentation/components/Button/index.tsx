import React from 'react'
import { Text } from 'react-native'

import * as S from './styles'

type Props = {
  text: string
}

export default function Button({ text }: Props ) {
  return (
    <S.Button>
      <Text>{text}</Text>
    </S.Button>
  )
}