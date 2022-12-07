import { createStackNavigator } from '@react-navigation/stack'
import { makeLoginScreen } from '@main/factories/screens'

const { Navigator, Screen }  = createStackNavigator()

export default function AuthStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Login">{makeLoginScreen}</Screen>
    </Navigator>
  )
}