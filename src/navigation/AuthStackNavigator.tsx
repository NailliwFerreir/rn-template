import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Login } from '@src/app/screens/Auth/Login'
import { Register } from '@src/app/screens/Auth/Register'
import { ForgotPassword } from '@src/app/screens/Auth/ForgotPassword'

const Stack = createStackNavigator()

export function AuthStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Screen name={'Login'} component={Login}/>
      <Stack.Screen name={'Register'} component={Register}/>
      <Stack.Screen name={'ForgotPassword'} component={ForgotPassword}/>
    </NavigationContainer>
  )
}
