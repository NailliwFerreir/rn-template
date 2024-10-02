import { createStackNavigator } from '@react-navigation/stack'
import { Login } from '@src/app/screens/Auth/Login'
import { Register } from '@src/app/screens/Auth/Register'
import { Chat } from '@src/app/screens/Examples/Chat'
import { CaregiverSelector } from '../app/screens/Examples/CaregiverSelector'
import { Onboarding } from '../app/screens/Examples/Onbording'
import { NewSchedule } from '../app/screens/NewSchedule'
import { MainTabNavigator } from './MainTabNavigator'
// import authStore from '../store/authStore'

const Stack = createStackNavigator()

export function MainStackNavigator() {
  // const { isFirstTime } = authStore()
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* {isFirstTime &&<Stack.Screen name="Onboarding" component={Onboarding}/>} */}
      <Stack.Screen name="Onboarding" component={Onboarding}/>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="NewSchedule" component={NewSchedule} />
      <Stack.Screen name="CaregiverSelector" component={CaregiverSelector} />
      <Stack.Screen name="App" component={MainTabNavigator} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Chat" component={Chat} />
      {/* <Stack.Screen name="App" component={TabNavigator} /> */}
    </Stack.Navigator>
  )
}
