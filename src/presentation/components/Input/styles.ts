import styled from 'styled-components/native'
import { responsiveWidth } from 'react-native-responsive-dimensions'

export const Input = styled.TextInput`  
  margin-top: 15px;
  padding: 8px 15px;
  font-size: 12px;
  font-weight: bold;
  width: ${responsiveWidth(80)}px;
  height: 50px;
  border-radius: 10px;
  background-color: #fff;
`