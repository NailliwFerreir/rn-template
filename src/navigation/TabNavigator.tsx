
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Test } from '../app/screens/Examples/Test'
// import { Test2 } from '@src/app/screens/Test2'
// import { Login } from '@src/app/screens/Auth/Login'
import { MyTabBar } from '@src/navigation/custom/MyTabBar'
// import { Register } from '@src/app/screens/Auth/Register'
import { Icon } from '@/components/ui/icon'
import { ForgotPassword } from '@src/app/screens/Auth/ForgotPassword'
import { Feed } from '@src/app/screens/Examples/Feed'
import { Globe2Icon, HomeIcon, SettingsIcon } from 'lucide-react-native'

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
        tabBarIcon: ({ focused })=> <HomeIcon className={focused? 'text-background-900' : 'text-background-400'} />,
      }}/>
      <Tab.Screen name="Feed" component={Feed} options={{
        tabBarIcon: ({ focused })=> (
          <Icon size={'md'} className={focused? 'text-background-900' : 'text-background-400'} as={Globe2Icon} />
        )
      }}/>
      <Tab.Screen name="Settings" component={ForgotPassword} options={{
        tabBarIcon: ()=> (
          <Icon as={SettingsIcon} />
        )
      }} />
    </Tab.Navigator>
  )
}

