
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { Test2 } from '@src/app/screens/Test2'
// import { Login } from '@src/app/screens/Auth/Login'
import { MyTabBar } from '@src/navigation/custom/MyTabBar'
// import { Register } from '@src/app/screens/Auth/Register'
import { ClockIcon } from '@/components/ui/icon'
// import { ForgotPassword } from '@src/app/screens/Auth/ForgotPassword'
import { UserIcon } from 'lucide-react-native'
import { Profile } from '../app/screens/Profile'
import { Scheduled } from '../app/screens/Scheduled'
// import { Chat } from '@src/app/screens/Examples/Chat'

// Exemplo de navagação por tabs
const Tab = createBottomTabNavigator()

export function MainTabNavigator() {
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Agendamentos" component={Scheduled} options={{
        tabBarIcon: ClockIcon
      }} />
      <Tab.Screen name="Perfil" component={Profile} options={{
        tabBarIcon: UserIcon
      }} />
    </Tab.Navigator>
  )
}

