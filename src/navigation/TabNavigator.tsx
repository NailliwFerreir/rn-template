import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Test } from "../app/screens/Test";



const Tab = createBottomTabNavigator()

export function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Test" component={Test} />     
    </Tab.Navigator>
  )
}