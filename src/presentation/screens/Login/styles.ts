import styled from 'styled-components/native'
import { responsiveWidth } from 'react-native-responsive-dimensions'

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: #efedef;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.View`
  width: ${responsiveWidth(60)}px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #42384F;
`

export const Subtitle = styled.Text`
  margin-top: 10px;
  font-size: 18px;
  color: #42384F;
  text-align: center;
`

export const RecoveryButton = styled.TouchableOpacity`
  align-items: flex-end;
  margin: 0px 0px 25px;
  width: ${responsiveWidth(80)}px;
`

export const RecoveryPassword = styled.Text`
  font-size: 11px;
  font-weight: bold;
  color: #878296;
`

export const TitleFooter = styled.View`
  width: ${responsiveWidth(80)}px;
  margin-top: 30px;
  align-items: center;
`

export const TextFooter = styled.Text`
  font-size: 11px;
  font-weight: bold;
  color: #878296;
`

export const Footer = styled.View`
  width: ${responsiveWidth(80)}px;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 30px;
`

export const LogoFooter = styled.View`
  width: 60px;
  height: 45px;
  background-color: #EFEDEF;
  border-width: 1px;
  border-color: #fff;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`