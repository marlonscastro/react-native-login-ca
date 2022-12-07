import { createStackNavigator } from '@react-navigation/stack'
import { makeLoginScreen } from '../factories/screens'

const Stack = createStackNavigator()

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={makeLoginScreen} />
    </Stack.Navigator>
  )
}