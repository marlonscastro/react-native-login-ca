import React, { useState } from 'react'
import { TextInputProps } from 'react-native'
import { Control, FieldValues, useController } from 'react-hook-form'
import Ionicons from '@expo/vector-icons/Ionicons'
import * as S from './styles'

export enum InputTypes {
  password = 1
}

type Props = {
  name: string
  control: Control<FieldValues, any>
  placeholder: string
  type?: InputTypes
  error?: boolean
} & TextInputProps 

export default function Input({ name, control, placeholder, type, error }: Props) {
  const [show, setShow] = useState(false)

  const { field } = useController({
    control,
    defaultValue: '',
    name
  })

  return (
    <S.ContainerInput>
      <S.InputBox>
        <S.Input
          value={field.value}
          onChangeText={field.onChange}
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

