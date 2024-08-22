import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { useThemeStore } from '../app/theme/store';
import { TabNavigator } from './TabNavigator';

export default function Routes(){
  const { theme } = useThemeStore()
  return(
    <NavigationContainer>
      <StatusBar barStyle={theme === 'dark'? 'light-content': 'dark-content'} />
      <TabNavigator />
    </NavigationContainer>
  )
}