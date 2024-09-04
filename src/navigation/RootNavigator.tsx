import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import { useThemeStore } from '../app/theme/store'
import { MainStackNavigator } from '@src/navigation/MainStackNavigator'


export default function Routes(){
  const { theme } = useThemeStore()
  return(
    <NavigationContainer>
      <StatusBar
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={theme === 'dark' ? '#121212' : '#ffffff'}
      />
      <MainStackNavigator/>
    </NavigationContainer>
  )
}
