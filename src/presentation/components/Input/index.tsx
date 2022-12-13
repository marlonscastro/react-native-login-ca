import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import * as S from './styles'

export enum InputTypes {
  password = 1
}

type Props = {
  placeholder: string
  type?: InputTypes
}


export default function Input({ placeholder, type }: Props) {
  const [show, setShow] = useState(false)

  return (
    <S.ContaierInput>
      <S.Input
        autoCapitalize='none'
        autoCorrect={false}
        autoComplete='off'
        placeholder={placeholder}
        secureTextEntry={!show}
      >
      </S.Input>
      {
        type === InputTypes.password &&
        <Ionicons name={show ? 'eye' : 'eye-off'} size={18} color="gray" onPress={() => setShow(!show)}/>
      }
    </S.ContaierInput>
  )
}

