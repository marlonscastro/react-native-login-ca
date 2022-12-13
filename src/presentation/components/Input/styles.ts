import styled from 'styled-components/native'
import { responsiveWidth } from 'react-native-responsive-dimensions'

export const ContaierInput = styled.View`
  margin-top: 15px;
  padding: 8px 15px;
  width: ${responsiveWidth(80)}px;
  height: 50px;
  border-radius: 10px;
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Input = styled.TextInput`  
  font-size: 12px;
  font-weight: bold;
  width: ${responsiveWidth(65)}px;
`