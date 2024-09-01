import { SafeAreaView as SAV, View } from 'react-native'

export function SafeAreaView({ children }: {children: React.ReactNode}) {
  return (
    <SAV className="flex-1 bg-background-0">
      <View className='w-full h-full px-4 pt-2 justify-start items-start'>
        {children}
      </View>
    </SAV>
  )
}
