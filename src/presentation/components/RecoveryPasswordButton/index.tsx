import React from "react";
import * as S from './styles'

type Props = {
  message: string
}

export default function RecoveryPasswordButton({ message }: Props) {
  return (
    <S.RecoveryButton>
      <S.RecoveryPassword>
        {message}
      </S.RecoveryPassword>
    </S.RecoveryButton>
  )
}