import { createStackNavigator } from '@react-navigation/stack'
import Home from '../../presentation/Home'
import Login from '../../presentation/Login'

const Stack = createStackNavigator()

export function MyStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: true
        }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}