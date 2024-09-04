import { createStackNavigator } from '@react-navigation/stack'
import { Chat } from '@src/app/screens/Examples/Chat'
import { Login } from '@src/app/screens/Auth/Login'
import { Register } from '@src/app/screens/Auth/Register'
import { TabNavigator } from '@src/navigation/TabNavigator'

const Stack = createStackNavigator()

export function MainStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="App" component={TabNavigator} />
    </Stack.Navigator>
  )
}
