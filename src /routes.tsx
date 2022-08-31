import { createStackNavigator } from '@react-navigation/stack'
import Home from './pages/Home'
import Login from './pages/Login'

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