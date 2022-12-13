import styled from 'styled-components/native'
import { responsiveWidth } from 'react-native-responsive-dimensions'

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: #efedef;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: #f00;
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
  margin: 15px 0px 25px;
  width: ${responsiveWidth(80)}px;
`

export const RecoveryText = styled.Text`
  font-size: 11px;
  font-weight: bold;
  color: #878296;
`