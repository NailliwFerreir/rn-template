import { Button, ButtonIcon, ButtonText } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { HStack } from '@/components/ui/hstack'
import { ArrowRightIcon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { SafeAreaView } from '@src/app/components/customs/SafeAreaView'

export function Onboarding() {
  return (
    <SafeAreaView>
      <VStack className='w-full max-w-sm mx-auto flex flex-1 justify-between mb-1'>
        <Text className='w-full text-center'>
          AMPARO
        </Text>
        <VStack className='flex-1 justify-around'>
          <Heading className='max-w-52 leading-8' size='xl'>Encontre uma companhia para as suas atividades</Heading>
          <VStack>
            <Text className='text-background-500 leading-8' size='lg'>Seja para uma caminhada, ida ao mercado ou um passeio no parque, você pode contar com a nossa comunidade para te acompanhar. Conecte-se com pessoas dispostas a ajudar no seu dia a dia.</Text>
            <HStack className='justify-end mt-8'>
              <Button variant={'link'}>
                <ButtonText>Sou um cuidador </ButtonText>
                <ButtonIcon as={ArrowRightIcon} size={'md'}/>
              </Button>
            </HStack>
          </VStack>
        </VStack>
        <Button variant={'solid'} size={'md'} action={'primary'} className='h-16 rounded-lg bg-background-950' >
          <ButtonText size='md'>
            Inscreva-se agora
          </ButtonText>
        </Button>
      </VStack>
    </SafeAreaView>
  )
}
