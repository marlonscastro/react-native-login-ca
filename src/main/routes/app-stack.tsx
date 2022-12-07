import { createStackNavigator } from '@react-navigation/stack'
import { makeHomeScreen } from '@main/factories/screens'

const Stack = createStackNavigator()

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={makeHomeScreen} />
    </Stack.Navigator>
  )
}