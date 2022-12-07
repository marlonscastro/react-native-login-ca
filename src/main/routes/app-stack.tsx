import { createStackNavigator } from '@react-navigation/stack'
import { makeHomeScreen } from '@main/factories/screens'

const { Navigator, Screen } = createStackNavigator()

export default function AppStack() {
  return (
    <Navigator>
      <Screen name="Home">{makeHomeScreen}</Screen>
    </Navigator>
  )
}