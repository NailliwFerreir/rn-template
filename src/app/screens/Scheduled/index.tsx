import { Box } from '@/components/ui/box'
import { Button, ButtonText } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { HStack } from '@/components/ui/hstack'
import { Image } from '@/components/ui/image'
import { ScrollView } from '@/components/ui/scroll-view'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { SafeAreaView } from '@src/app/components/customs/SafeAreaView'

interface BlogData {
    bannerUri: string;
    title: string;
    description: string;
    publishedDate: string;
}

const WORLD_DATA: BlogData[] = Array.from({ length: 2 },() => ({
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  bannerUri: require('./assets/image.png'),
  title: 'Sabrina Carpenter',
  description:
      'Atividade marcada com Sabrina Carpenter: Passeio no parque.',
  publishedDate: 'Hoje às 14:00',
}))

const MainContent = () => {
  return (
    <VStack
      className="pt-4 pb-0 md:px-10 md:pt-6 md:pb-0 h-full w-full max-w-[1500px] self-center  mb-20 md:mb-2"
      space="2xl"
    >
      <Text className='w-full text-center'>
          AMPARO
      </Text>
      <Heading size="2xl" className="font-roboto">
        Agendamentos
      </Heading>
      <Text>
        Abaixo você encontra os agendamentos marcados.
      </Text>
      <HStack space="2xl" className="h-full w-full flex-1">
        <ScrollView
          className="max-w-[900px] flex-1 md:mb-2"
          contentContainerStyle={{
            paddingBottom: 140,
          }}
          showsVerticalScrollIndicator={false}
        >
          <VStack className="w-full" space="2xl">
            {WORLD_DATA.map((item, index) => {
              return (
                <VStack
                  className="rounded-xl border border-background-400 p-5"
                  key={index}
                >
                  <Box className="w-full h-64 rounded-md overflow-hidden">
                    <Image
                      className='w-full h-full object-cover'
                      source={item.bannerUri}
                      alt={item.title}
                    />
                  </Box>
                  <VStack className="mt-4" space="sm">
                    <Text className="text-xl">{item.publishedDate}</Text>
                    <Heading size="md">{item.title}</Heading>
                    <Text className="line-clamp-2">{item.description}</Text>
                  </VStack>
                </VStack>
              )
            })}
          </VStack>
        </ScrollView>
      </HStack>
      <Button
        variant="solid"
        size="lg"
        action='primary'
        className="absolute right-4 bottom-4 h-14 rounded-full"
        onPress={() => {}}
      >
        <ButtonText>
        Criar um novo agendamento
        </ButtonText>
      </Button>
    </VStack>
  )
}

export const Scheduled = () => {
  return (
    <SafeAreaView >
      <MainContent />
    </SafeAreaView>
  )
}
