import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Test } from "@src/app/screens/Test";
import { Test2 } from "@src/app/screens/Test2";



const Tab = createBottomTabNavigator()

export function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }}>
      <Tab.Screen name="Test" component={Test} />     
      <Tab.Screen name="Test2" component={Test2} />     
    </Tab.Navigator>
  )
}