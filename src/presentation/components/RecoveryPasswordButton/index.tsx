import React from "react";
import * as S from './styles'

type Props = {
  text: string
}

export default function RecoveryPasswordButton({ text }: Props) {
  return (
    <S.RecoveryButton>
      <S.RecoveryPassword>
        {text}
      </S.RecoveryPassword>
    </S.RecoveryButton>
  )
}