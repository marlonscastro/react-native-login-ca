import styled from 'styled-components/native'
import { responsiveWidth } from "react-native-responsive-dimensions"

export const RecoveryButton = styled.TouchableOpacity`
align-items: flex-end;
margin: 0px 0px 25px;
width: ${responsiveWidth(80)}px;
`

export const RecoveryPassword = styled.Text`
font-size: 10.5px;
font-weight: bold;
color: #878296;
`