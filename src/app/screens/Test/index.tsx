import { Center } from '@/components/ui/center';
import { VStack } from '@/components/ui/vstack';
import { SafeAreaView } from '@src/app/components/customs/SafeAreaView';
import { ToggleButtonTheme } from '@src/app/theme/ToggleButtonTheme';
import { ToggleSwitchTheme } from '@src/app/theme/ToggleSwitchTheme';

export function Test() {
  return (
    <SafeAreaView>
      <Center>
        <VStack space={'md'} className='items-center'>
          <ToggleButtonTheme />
          <ToggleSwitchTheme />
        </VStack>
      </Center>
    </SafeAreaView>
  )
}
