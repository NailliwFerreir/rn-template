
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Test } from '../app/screens/Examples/Test'
// import { Test2 } from '@src/app/screens/Test2'
// import { Login } from '@src/app/screens/Auth/Login'
import { MyTabBar } from '@src/navigation/custom/MyTabBar'
// import { Register } from '@src/app/screens/Auth/Register'
import { SettingsIcon, GlobeIcon } from '@/components/ui/icon'
import { ForgotPassword } from '@src/app/screens/Auth/ForgotPassword'
import { Feed } from '@src/app/screens/Examples/Feed'
import { HomeIcon } from 'lucide-react-native'
import { Chat } from '@src/app/screens/Examples/Chat'
import { Register } from '@src/app/screens/Auth/Register'

// Exemplo de navagação por tabs
const Tab = createBottomTabNavigator()

export function TabNavigator() {
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={Test} options={{
        tabBarIcon: HomeIcon
      }} />
      <Tab.Screen name="Feed" component={Chat} options={{
        tabBarIcon: GlobeIcon
      }} />
      <Tab.Screen name="Settings" component={Register} options={{
        tabBarIcon: SettingsIcon,
      }} />
    </Tab.Navigator>
  )
}

