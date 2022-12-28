import React from 'react'
import { Control, Controller } from 'react-hook-form'
import Input, { InputProps } from '../Input'

type Props = InputProps & {
  control: Control<any>
  name: string
}

export default function ControlledInput({ control, name, ...rest }: Props) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Input
          onChange={onChange}
          value={value}
          {...rest}
        />
      )}

    />
  )
}