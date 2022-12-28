import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import * as S from './styles'

type Props = {
  text: string
} & TouchableOpacityProps

export default function Button(props: Props) {
  return (
    <S.Button onPress={props.onPress}>
      <S.TextButton>{props.text}</S.TextButton>
    </S.Button>
  )
}