
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Test } from '../app/screens/Examples/Test'
// import { Test2 } from '@src/app/screens/Test2'
// import { Login } from '@src/app/screens/Auth/Login'
import { MyTabBar } from '@src/navigation/custom/MyTabBar'
// import { Register } from '@src/app/screens/Auth/Register'
import { ForgotPassword } from '@src/app/screens/Auth/ForgotPassword'
import { Feed } from '@src/app/screens/Examples/Feed'

// Exemplo de navagação por tabs
const Tab = createBottomTabNavigator()

export function TabNavigator() {
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={Test} />
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Settings" component={ForgotPassword} />
    </Tab.Navigator>
  )
}

