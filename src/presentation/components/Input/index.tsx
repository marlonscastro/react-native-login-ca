import React, { useState } from 'react'
import { Text } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import * as S from './styles'

export enum InputTypes {
  password = 1
}

type Props = {
  placeholder: string
  type?: InputTypes
  error?: boolean
}


export default function Input({ placeholder, type, error }: Props) {
  const [show, setShow] = useState(false)

  return (
    <S.ContainerInput>
      <S.InputBox>
        <S.Input
          autoCapitalize='none'
          autoCorrect={false}
          autoComplete='off'
          placeholder={placeholder}
          secureTextEntry={type === InputTypes.password ? !show : false}
        />
        {
          type === InputTypes.password ?
            <Ionicons name={show ? 'eye' : 'eye-off'} size={18} color="gray" onPress={() => setShow(!show)} />
            : null
        }
      </S.InputBox>
      <S.ErrorText style={{ color: '#FF4C66', fontSize: 10 }}>{error}</S.ErrorText>
    </S.ContainerInput>
  )
}

