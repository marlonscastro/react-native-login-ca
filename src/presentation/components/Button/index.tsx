import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import * as S from './styles'

type Props = {
  text: string
} & TouchableOpacityProps

export default function Button({ text }: Props ) {
  return (
    <S.Button>
      <S.TextButton>{text}</S.TextButton>
    </S.Button>
  )
}