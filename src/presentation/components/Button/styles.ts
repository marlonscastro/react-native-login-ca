import styled from 'styled-components/native'
import { responsiveWidth } from 'react-native-responsive-dimensions'


export const Button = styled.TouchableOpacity`
  background-color: #FF4C66;
  border-radius: 10px;
  height: 45px;
  width: ${responsiveWidth(80)}px;
  justify-content: center;
  align-items: center;
`

export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
`