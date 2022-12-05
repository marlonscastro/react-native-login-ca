import { createStackNavigator } from '@react-navigation/stack'
import Home from '../../presentation/screens/Home'

const Stack = createStackNavigator()

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}