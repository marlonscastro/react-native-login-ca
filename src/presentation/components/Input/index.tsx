import React, { useState } from 'react'
import { TextInputProps } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import * as S from './styles'
 
export enum InputTypes {
  password = 1,
  basic = 2
}

export type InputProps = TextInputProps & {
  type?: InputTypes
  error?: boolean
}

export default function Input({ placeholder, type, error, ...rest }: InputProps) {
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
          {...rest}
        />
        {
          type === InputTypes.password ?
            <Ionicons name={show ? 'eye' : 'eye-off'} size={18} color="gray" onPress={() => setShow(!show)} />
            : null
        }
      </S.InputBox>
    </S.ContainerInput>
  )
}

