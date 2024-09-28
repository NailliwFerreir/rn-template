import { NavigationContainer } from '@react-navigation/native'
import { MainStackNavigator } from '@src/navigation/MainStackNavigator'
import * as NavigationBar from 'expo-navigation-bar'
import { useEffect } from 'react'
import { StatusBar } from 'react-native'
import { useThemeStore } from '../app/theme/store'


export default function Routes(){
  const { theme } = useThemeStore()
  useEffect(()=>{
    NavigationBar.setBackgroundColorAsync(theme === 'dark' ? '#121212' : '#ffffff')
  })
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
