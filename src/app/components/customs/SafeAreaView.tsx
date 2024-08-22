import { SafeAreaView as SAV, View } from 'react-native';

export function SafeAreaView({children}: {children: React.ReactNode}) {
  return (
  <SAV className="flex-1 bg-background-0">
    <View className='mx-2 w-full h-full justify-start items-start'>
    {children}
    </View>
  </SAV>)
}