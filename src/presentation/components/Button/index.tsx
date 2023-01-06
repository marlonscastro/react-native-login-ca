import React from 'react'
import { ActivityIndicator, TouchableOpacityProps } from 'react-native'

import * as S from './styles'

type Props = {
  text: string
  enabled?: boolean
} & TouchableOpacityProps

export default function Button(props: Props) {
  return (
    <S.Button onPress={props.onPress}>
      {
        props.enabled === true ? 
        <S.TextButton>{props.text}</S.TextButton>
        :
      <ActivityIndicator size={30} color='#fff'/>
      }
    </S.Button>
  )
}