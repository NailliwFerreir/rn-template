import { HStack } from '@/components/ui/hstack'
import { ArrowUpIcon, ChevronLeftIcon, Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { ScrollView } from '@/components/ui/scroll-view'
import { SafeAreaView } from '@src/app/components/customs/SafeAreaView'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { ImageURISource, KeyboardAvoidingView, Platform } from 'react-native'
import { Button } from '@/components/ui/button'
import { Textarea, TextareaInput } from '@/components/ui/textarea'
import { SafeAreaView as SAV } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useThemeStore } from '@src/app/theme/store'

interface BlogData {
    bannerUri: string;
    title: string;
    description: string;
    publishedDate: string;
}

const WORLD_DATA: BlogData[] = Array.from({ length: 2 },() => ({
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  bannerUri: require('./assets/image.png'),
  title: 'The Power of Positive Thinking',
  description:
      'Discover how the power of positive thinking can transform your life, boost your confidence, and help you overcome challenges. Explore practical tips and techniques to cultivate a positive mindset for greater happiness and success.',
  publishedDate: 'May 15, 2023'
}))

const MainContent = ({ navToApp }: { navToApp: () => void}) => {
  return (
    <VStack>
      <HStack space="2xl" className="h-full w-full flex-1">
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 140,
          }}
          showsVerticalScrollIndicator={false}
        >
          <VStack className="w-full" space="2xl">
            <VStack
              className="rounded-xl p-2 bg-background-950 w-4/5"
            >
              <VStack className="" space="md">
                <Text className="line-clamp-2 text-background-0">{'A mensagem é esta, e isso é um exemplo de mensagem'}</Text>
                <Text className="text-sm text-background-300">{'12:01'}</Text>
              </VStack>
            </VStack>
            <VStack
              className="rounded-xl p-2 bg-background-200 w-4/5 self-end"
            >
              <VStack className="" space="md">
                <Text className="line-clamp-2 text-background-950">{'A mensagem é esta, e isso é um exemplo de mensagem'}</Text>
                <Text className="text-sm text-background-800 self-end">{'12:01'}</Text>
              </VStack>
            </VStack>
          </VStack>
        </ScrollView>
      </HStack>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios'?'position': undefined} keyboardVerticalOffset={68}>
        <HStack className="rounded-xl border border-background-400 bg-background-0 mb-4 p-1 mt-1">
          <Textarea isReadOnly={false} isInvalid={false} isDisabled={false} className="flex-1 border-0 h-20">
            <TextareaInput
              placeholder="Your text goes here..."
            />
          </Textarea>
          <Button variant={'solid'} size={'sm'} className={'rounded-full w-10 h-10 self-center justify-center items-center mr-2'} onPress={navToApp}>
            <Icon as={ArrowUpIcon} className={'text-background-100'}/>
          </Button>
        </HStack>
      </KeyboardAvoidingView>
    </VStack>
  )
}
const Header = () => {
  const { theme } = useThemeStore()
  return (
    <SAV style={{ margin: 0, backgroundColor: theme === 'dark' ?  '#414040': '#f2f1f1' }}>
      <HStack className="w-full px-4 py-4 bg-background-100">
        <Button variant={'link'} size={'sm'} className={'absolute left-4 mt-2 items-center justify-center'}>
          <Icon as={ChevronLeftIcon} className={'text-background-950'} />
        </Button>
        <VStack className={'w-full'}>
          <Text className="text-typography-900 text-center font-roboto  font-semibold text-xl">
            {'Ivan Granja'}
          </Text>
        </VStack>
        <Avatar className="h-10 w-10 absolute mt-2 right-4">
          <AvatarImage
            source={WORLD_DATA[0].bannerUri as ImageURISource}
            alt={WORLD_DATA[0].title}
          />
        </Avatar>
      </HStack>
    </SAV>
  )
}

export const Chat = () => {
  const { navigate } = useNavigation()

  const navToApp = () => navigate('App')

  return (
    <>
      <Header />
      <SafeAreaView  >
        <MainContent navToApp={navToApp}/>
      </SafeAreaView>
    </>
  )
}
