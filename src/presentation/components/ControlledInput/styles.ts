import styled from 'styled-components/native'
import { responsiveWidth } from 'react-native-responsive-dimensions'

export const Error = styled.Text`
  color: #dc1637;
  font-size: 10px;
  border-width: 1px;
  border-color: #f00;
  width: ${responsiveWidth(80)}px;
  text-align: center;
 
`

export const Container = styled.View`
  align-items: center;
  border-width: 1px;
  width: ${responsiveWidth(81)}px;
`