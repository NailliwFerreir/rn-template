import { VStack } from '@/components/ui/vstack';
import { ToggleButtonTheme } from '@src/app/theme/ToggleButtonTheme';
import { SafeAreaView } from "react-native";
import { ToggleSwitchTheme } from '../../theme/ToggleSwitchTheme';

export function Test() {
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-background-0">
      <VStack space={'md'} className='items-center'>
      <ToggleButtonTheme />
      <ToggleSwitchTheme />
      </VStack>
    </SafeAreaView>
  )
}
