import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Test } from "@src/app/screens/Test";
import { Test2 } from "@src/app/screens/Test2";
import { View } from '@/components/ui/view'
import { TouchableOpacity, Text } from "react-native";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";


const Tab = createBottomTabNavigator()

export function TabNavigator() {
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Test" component={Test} />
      <Tab.Screen name="Test2" component={Test2} />
    </Tab.Navigator>
  )
}

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }} className="bg-background-0 border-t border-background-200 h-12 items-center justify-center">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Button
            variant="link"
            key={route.key}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <ButtonIcon />
            <ButtonText className={`${isFocused ? 'text-background-900' : 'text-background-400'}`}
            >
              {label}
            </ButtonText>
          </Button>
        );
      })}
    </View>
  );
}
