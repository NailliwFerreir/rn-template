import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider'
import '@/global.css'
import { useThemeStore } from '@/src/app/theme/store'
import Routes from '@src/navigation/RootNavigator'
import { useEffect } from 'react'
import { ActivityIndicator, View } from 'react-native'
import authStore from './src/store/authStore'

export default function App() {
  const { theme } = useThemeStore()
  const { checkFirstTime, checkAuth, loading } = authStore()

  useEffect(() => {
    const initializeApp = async () => {
      await checkFirstTime()
      await checkAuth()
    }

    initializeApp()
  }, [])

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }

  return (
    <GluestackUIProvider mode={theme}>
      <Routes />
    </GluestackUIProvider>
  )
}

