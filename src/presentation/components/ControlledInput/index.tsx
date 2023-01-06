import React from 'react'
import { Control, Controller, FieldError } from 'react-hook-form'
import Input, { InputProps } from '../Input'
import { Error, Container } from './styles'

type Props = InputProps & {
  control: Control<any>
  name: string
  fieldError?: FieldError
}

export default function ControlledInput({ control, name, fieldError, ...rest }: Props) {
  return (
    <Container>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={onChange}
            value={value}
            {...rest}
          />
        )}
      />
      {
        fieldError && <Error>{fieldError.message}</Error>
      }
    </Container>
  )
}