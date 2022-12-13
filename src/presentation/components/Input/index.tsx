import React from 'react'

import * as S from './styles'

type Props = {
  placeholder: string
}


export default function Input({ placeholder }: Props ) {
  return (
    <S.Input 
      autoCapitalize='none'
      autoCorrect={false}
      autoComplete='off'
      placeholder={placeholder}
    />
  )
}

